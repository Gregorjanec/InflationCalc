// Function to calculate inflation-adjusted amount
function calculateInflation() {
    let amount = parseFloat(document.getElementById('amount').value);
    let years = parseInt(document.getElementById('years').value);
    let inflationRate = parseFloat(document.getElementById('inflation').value);

    if (isNaN(amount) || isNaN(years) || isNaN(inflationRate)) {
        alert('Please enter valid values');
        return;
    }

    // Formula to calculate future value considering inflation
    let futureValue = amount / Math.pow((1 + inflationRate / 100), years);

    document.getElementById('result').innerText = 
        `The value after ${years} years will be approximately €${futureValue.toFixed(2)}`;
}
