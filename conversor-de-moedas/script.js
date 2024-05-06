document.addEventListener('DOMContentLoaded', function () {
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
    .then(response => response.json())
    .then(data => {
        const currencies = Object.keys(data.rates);
        const selectFrom = document.getElementById('fromCountrySelect');
        const selectTo = document.getElementById('toCountrySelect');

        currencies.forEach(currency => {
            const optionFrom = document.createElement('option');
            optionFrom.text = currency;
            selectFrom.add(optionFrom);

            const optionTo = document.createElement('option');
            optionTo.text = currency;
            selectTo.add(optionTo);
        });
    })
    .catch(error => console.log(error));

    document.getElementById('converterBtn').addEventListener('click', function () {
        const fromCurrency = document.getElementById('fromCountrySelect').value;
        const toCurrency = document.getElementById('toCountrySelect').value;
        const amount = document.getElementById('amount').value;

        fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
        .then(response => response.json())
        .then(data => {
            const exchangeRate = data.rates[toCurrency];
            const result = amount * exchangeRate;
            document.getElementById('result').value = result.toFixed(2);
        })
        .catch(error => console.log(error));
    });
});