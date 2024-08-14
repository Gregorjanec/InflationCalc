// Mockup inflation rate, assuming we have fetched this from an API
let inflationRate = 2.5; // Example fixed inflation rate in percentage

// Function to fetch inflation rate (example with static data)
function fetchInflationRate() {
    // Here you would normally use an API call to get the current inflation rate
    document.getElementById('inflation').value = inflationRate + " %";
}

// Function to calculate inflation-adjusted amount
function calculateInflation() {
    let amount = parseFloat(document.getElementById('amount').value);
    let years = parseInt(document.getElementById('years').value);

    if (isNaN(amount) || isNaN(years)) {
        alert('Please enter valid values');
        return;
    }

    // Formula to calculate future value with inflation
    let futureValue = amount * Math.pow((1 + inflationRate / 100), years);

    document.getElementById('result').innerText = 
        `The value after ${years} years will be approximately €${futureValue.toFixed(2)}`;
}

// Initial call to fetch and display the current inflation rate
fetchInflationRate();
