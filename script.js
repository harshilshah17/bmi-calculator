function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);
    const feet = parseFloat(document.getElementById('feet').value);
    const inches = parseFloat(document.getElementById('inches').value);

    if (isNaN(weight)) {
        alert('Please enter a valid weight.');
        return;
    }

    if (isNaN(height) && (isNaN(feet) || isNaN(inches))) {
        alert('Please enter a valid height in either cm or feet and inches.');
        return;
    }

    // Convert feet and inches to centimeters if provided
    if (!isNaN(feet) && !isNaN(inches)) {
        height = (feet * 30.48) + (inches * 2.54);
    }

    if (isNaN(height)) {
        alert('Please enter a valid height.');
        return;
    }

    height = height / 100; // Convert height to meters for BMI calculation
    const bmi = weight / (height * height);
    const resultElement = document.getElementById('result');

    let resultText = `Your BMI is ${bmi.toFixed(2)}. `;
    if (bmi < 18.5) {
        resultText += 'You are underweight.';
    } else if (bmi < 24.9) {
        resultText += 'You have a normal weight.';
    } else if (bmi < 29.9) {
        resultText += 'You are overweight.';
    } else {
        resultText += 'You are obese.';
    }

    resultElement.innerText = resultText;
}
