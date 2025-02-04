function nextStep(currentStep) {
    document.getElementById(`step${currentStep}`).classList.add('hidden');
    document.getElementById(`step${currentStep + 1}`).classList.remove('hidden');
}

function handleResponse(isYes) {
    document.getElementById('step4').classList.add('hidden');
    if (isYes) {
        document.getElementById('step5').classList.remove('hidden');
    } else {
        document.getElementById('response').innerHTML = '<p>Oh no! Maybe another time then! 💔</p>';
        document.getElementById('response').classList.remove('hidden');
    }
}

function showVibe(vibe) {
    let message = '';
    if (vibe === 'coffee') {
        message = 'Great! Let\'s have a coffee date! ☕';
    } else if (vibe === 'museum') {
        message = 'Awesome! Let\'s visit a museum! 🎨';
    } else if (vibe === 'both') {
        message = 'Fantastic! We\'ll do both! 🤔';
    }
    document.getElementById('step5').classList.add('hidden');
    document.getElementById('response').innerHTML = `<p>${message}</p>`;
    document.getElementById('response').classList.remove('hidden');
}