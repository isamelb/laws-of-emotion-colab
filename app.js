const emotionAffirmations = {
    'fear': [
        "I am safe and protected.",
        "I trust my intuition and inner guidance.",
        "I face my fears and grow stronger every day."
    ],
    'anger': [
        "I release my anger and embrace understanding.",
        "I am patient and understanding.",
        "I let go of my anger and choose peace."
    ],
    'guilt': [
        "I forgive myself for my past mistakes.",
        "I learn from my experiences and grow.",
        "I let go of guilt and embrace self-compassion."
    ],
    'shame': [
        "I am worthy of love and acceptance.",
        "I release shame and embrace self-love.",
        "I believe in myself and my abilities."
    ],
    'depression': [
        "I am worthy of happiness and joy.",
        "I allow myself to feel my emotions and heal.",
        "I am resilient and can overcome challenges."
    ],
    'self-hatred': [
        "I am deserving of love and kindness.",
        "I treat myself with compassion and understanding.",
        "I choose to love and accept myself unconditionally."
    ],
    'violence': [
        "I choose to respond with love and empathy.",
        "I embrace non-violence in my thoughts and actions.",
        "I cultivate inner peace and understanding."
    ],
    'injustice': [
        "I seek understanding and fairness.",
        "I strive for justice and equality.",
        "I believe in the power of change and progress."
    ],
    'mistrust': [
        "I choose to trust in the goodness of others.",
        "I release my fears and embrace vulnerability.",
        "I cultivate positive connections and relationships."
    ],
    'lack_of_control': [
        "I accept the things I cannot change.",
        "I focus on what I can control and let go of the rest.",
        "I trust in the natural flow of life."
    ],
    'insecurity': [
        "I am confident in my abilities and skills.",
        "I trust myself and my decisions.",
        "I believe I can achieve my goals and dreams."
    ],
    'sadness': [
        "I acknowledge my sadness and allow myself to feel it.",
        "I embrace the healing power of self-compassion.",
        "I trust that brighter days are ahead."
    ],
    'discontent': [
        "I am grateful for the abundance in my life.",
        "I find joy and happiness in the present moment.",
        "I am content with what I have and who I am."
    ],
    'unworthiness': [
        "I am deserving of love, respect, and success.",
        "I acknowledge my worth and value myself.",
        "I choose to believe in my abilities and strengths."
    ],
    'resentment': [
        "I release resentment and choose forgiveness.",
        "I let go of grudges and focus on the present.",
        "I cultivate inner peace and move forward."
    ],
    'envy': [
        "I appreciate my own journey and accomplishments.",
        "I celebrate the success of others without comparing myself.",
        "I focus on my growth and self-improvement."
    ],
    'powerlessness': [
        "I am strong, capable, and resilient.",
        "I have the power to shape my life and overcome challenges.",
        "I trust in my ability to make positive changes."
    ],
};
const emotionExplanations = {
    'fear': 'Postulate 1: L → ↓F',
    'anger': 'Postulate 2: L → ↑wb',
    'guilt': 'Postulate 3: selfL → ↑wb',
    'shame': 'Postulate 4: acc → ↑L',
    'depression': 'Postulate 5: tr → ↓F',
    'self-hatred': 'Postulate 6: p → ↑m',
    'violence': 'Postulate 14: be → ↓vl',
    'non-justice': 'Postulate 15: just → ↑peac',
    'postulate7': 'Postulate 7: m → ↑c',
    'postulate8': 'Postulate 8: cu → ↑c',
    'postulate9': 'Postulate 9: cu → ↑m',
    'postulate10': 'Postulate 10: c → ↑f',
    'postulate11': 'Postulate 11: L → ↓dep',
    'postulate12': 'Postulate 12: selfL → ↓sha',
    'postulate13': 'Postulate 13: L → ↓sad',
    'postulate16': 'Postulate 16: tr → ↓vl',
    'postulate17': 'Postulate 17: (Please provide the formula)',
    'mistrust': 'Postulate 7: m → ↑c',
    'lack_of_control': 'Postulate 8: cu → ↑c',
    'insecurity': 'Postulate 9: cu → ↑m',
    'sadness': 'Postulate 13: L → ↓sad',
    'discontent': 'Postulate 10: c → ↑f',
    'unworthiness': 'Postulate 12: selfL → ↓sha',
    'resentment': 'Postulate 5: tr → ↓F',
    'envy': 'Postulate 6: p → ↑m',
    'powerlessness': 'Postulate 17: (Please provide the formula)',
};

document.getElementById('submit-button').addEventListener('click', () => {
    const input = document.getElementById('emotion-input').value.toLowerCase().trim();
    const responseArea = document.getElementById('response-area');

    let foundEmotion = null;

    for (const emotion in emotionAffirmations) {
        if (input.includes(emotion.toLowerCase())) {
            foundEmotion = emotion;
            break;
        }
    }

    if (foundEmotion) {
        const affirmations = emotionAffirmations[foundEmotion];
        responseArea.innerHTML = `
            Suggested affirmations:<br>
            1. ${affirmations[0]}<br>
            2. ${affirmations[1]}<br>
            3. ${affirmations[2]}
        `;
    } else {
        responseArea.textContent = 'Emotion not recognized. Please try again.';
    }
});
