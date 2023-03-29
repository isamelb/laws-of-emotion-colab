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
    // ... add the rest of the emotions and their corresponding affirmations
};

document.getElementById('submit-button').addEventListener('click', () => {
    const input = document.getElementById('emotion-input').value.toLowerCase().trim();
    const responseArea = document.getElementById('response-area');

    if (input) {
        if (emotionAffirmations[input]) {
            const affirmations = emotionAffirmations[input];
            responseArea.innerHTML = `
                Suggested affirmations:<br>
                1. ${affirmations[0]}<br>
                2. ${affirmations[1]}<br>
                3. ${affirmations[2]}
            `;
        } else {
            responseArea.textContent = 'Emotion not recognized. Please try again.';
        }
    } else {
        responseArea.textContent = 'Please enter your emotions.';
    }
});
