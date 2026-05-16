// Currency data
const currencyData = [
    { code: 'USD', country: 'United States' },
    { code: 'EUR', country: 'Eurozone' },
    { code: 'JPY', country: 'Japan' },
    { code: 'GBP', country: 'United Kingdom' },
    { code: 'AUD', country: 'Australia' },
    { code: 'CAD', country: 'Canada' },
    { code: 'CHF', country: 'Switzerland' },
    { code: 'CNY', country: 'China' },
    { code: 'SEK', country: 'Sweden' },
    { code: 'NZD', country: 'New Zealand' },
    { code: 'KRW', country: 'South Korea' },
    { code: 'SGD', country: 'Singapore' },
    { code: 'NOK', country: 'Norway' },
    { code: 'MXN', country: 'Mexico' },
    { code: 'INR', country: 'India' },
    { code: 'BRL', country: 'Brazil' },
    { code: 'RUB', country: 'Russia' },
    { code: 'ZAR', country: 'South Africa' },
    { code: 'TRY', country: 'Turkey' },
    { code: 'HKD', country: 'Hong Kong' },
    { code: 'DKK', country: 'Denmark' },
    { code: 'ARS', country: 'Argentina' },
    { code: 'TWD', country: 'Taiwan' },
    { code: 'IDR', country: 'Indonesia' },
    { code: 'ILS', country: 'Israel' },
    { code: 'PHP', country: 'Philippines' },
    { code: 'PLN', country: 'Poland' },
    { code: 'THB', country: 'Thailand' },
    { code: 'MYR', country: 'Malaysia' },
    { code: 'HUF', country: 'Hungary' },
    { code: 'CZK', country: 'Czech Republic' },
    { code: 'CLP', country: 'Chile' },
    { code: 'AED', country: 'United Arab Emirates' },
    { code: 'EGP', country: 'Egypt' },
    { code: 'SAR', country: 'Saudi Arabia' },
    { code: 'KWD', country: 'Kuwait' },
    { code: 'QAR', country: 'Qatar' },
    { code: 'VND', country: 'Vietnam' },
    { code: 'NGN', country: 'Nigeria' },
    { code: 'UAH', country: 'Ukraine' },
    { code: 'PKR', country: 'Pakistan' },
    { code: 'BDT', country: 'Bangladesh' },
    { code: 'RON', country: 'Romania' },
    { code: 'COP', country: 'Colombia' },
    { code: 'ZMW', country: 'Zambia' },
    { code: 'BHD', country: 'Bahrain' },
    { code: 'KES', country: 'Kenya' },
    { code: 'UGX', country: 'Uganda' },
    { code: 'GHS', country: 'Ghana' },
    { code: 'LKR', country: 'Sri Lanka' },
    { code: 'HRK', country: 'Croatia' },
    { code: 'DZD', country: 'Algeria' },
    { code: 'MAD', country: 'Morocco' },
    { code: 'BYN', country: 'Belarus' },
    { code: 'UZS', country: 'Uzbekistan' },
    { code: 'AZN', country: 'Azerbaijan' },
    { code: 'MZN', country: 'Mozambique' },
    { code: 'DOP', country: 'Dominican Republic' },
    { code: 'TTD', country: 'Trinidad and Tobago' },
    { code: 'AOA', country: 'Angola' },
    { code: 'MUR', country: 'Mauritius' },
    { code: 'CRC', country: 'Costa Rica' },
    { code: 'XAF', country: 'Cameroon' },
    { code: 'ISK', country: 'Iceland' },
    { code: 'ETB', country: 'Ethiopia' },
    { code: 'XOF', country: 'Senegal' },
    { code: 'YER', country: 'Yemen' },
    { code: 'GEL', country: 'Georgia' },
    { code: 'HTG', country: 'Haiti' },
    { code: 'MKD', country: 'North Macedonia' },
    { code: 'MWK', country: 'Malawi' },
    { code: 'BND', country: 'Brunei' },
    { code: 'NPR', country: 'Nepal' },
    { code: 'XPF', country: 'French Polynesia' },
    { code: 'JOD', country: 'Jordan' },
    { code: 'LBP', country: 'Lebanon' },
    { code: 'GTQ', country: 'Guatemala' },
    { code: 'AFN', country: 'Afghanistan' },
    { code: 'SDG', country: 'Sudan' },
    { code: 'NAD', country: 'Namibia' },
    { code: 'BWP', country: 'Botswana' },
    { code: 'SYP', country: 'Syria' },
    { code: 'XCD', country: 'Eastern Caribbean' },
    { code: 'BBD', country: 'Barbados' },
    { code: 'LAK', country: 'Laos' },
    { code: 'GMD', country: 'Gambia' },
    { code: 'LSL', country: 'Lesotho' },
    { code: 'MDL', country: 'Moldova' },
    { code: 'MOP', country: 'Macau' },
    { code: 'MVR', country: 'Maldives' },
    { code: 'MNT', country: 'Mongolia' },
    { code: 'KZT', country: 'Kazakhstan' },
    { code: 'TMT', country: 'Turkmenistan' },
    { code: 'SLL', country: 'Sierra Leone' },
    { code: 'SZL', country: 'Eswatini' },
    { code: 'PGK', country: 'Papua New Guinea' },
    { code: 'LKR', country: 'Sri Lanka' },
    { code: 'SCR', country: 'Seychelles' },
    { code: 'MUR', country: 'Mauritius' },
    { code: 'BZD', country: 'Belize' },
    { code: 'GYD', country: 'Guyana' },
    { code: 'ANG', country: 'Netherlands Antilles' },
    { code: 'SRD', country: 'Suriname' },
    { code: 'XPF', country: 'French Polynesia' },
    { code: 'BTN', country: 'Bhutan' },
    { code: 'FJD', country: 'Fiji' },
    { code: 'XAF', country: 'Central African CFA franc' },
    { code: 'XOF', country: 'West African CFA franc' },
    { code: 'MRO', country: 'Mauritania' },
    { code: 'CVE', country: 'Cape Verde' },
    { code: 'MMK', country: 'Myanmar' },
    { code: 'RSD', country: 'Serbia' },
    { code: 'GNF', country: 'Guinea' },
    { code: 'GIP', country: 'Gibraltar' },
    { code: 'VUV', country: 'Vanuatu' },
    { code: 'MWK', country: 'Malawi' },
    { code: 'BYN', country: 'Belarus' },
    { code: 'XCD', country: 'East Caribbean dollar' },
    { code: 'LSL', country: 'Lesotho' },
    { code: 'TJS', country: 'Tajikistan' },
    { code: 'BTN', country: 'Bhutan' },
    { code: 'SVC', country: 'El Salvador' },
    { code: 'ZMW', country: 'Zambia' },
    { code: 'TOP', country: 'Tonga' },
    { code: 'MNT', country: 'Mongolia' },
    { code: 'MZN', country: 'Mozambique' },
    { code: 'TJS', country: 'Tajikistan' },
    { code: 'SOS', country: 'Somalia' },
    { code: 'KGS', country: 'Kyrgyzstan' },
    { code: 'HTG', country: 'Haiti' },
    { code: 'MGA', country: 'Madagascar' },
    { code: 'FJD', country: 'Fiji' },
    { code: 'GIP', country: 'Gibraltar' },
    { code: 'GNF', country: 'Guinea' },
    { code: 'MOP', country: 'Macau' },
    { code: 'SCR', country: 'Seychelles' },
    { code: 'SLL', country: 'Sierra Leone' },
    { code: 'SZL', country: 'Swaziland' },
    { code: 'XOF', country: 'CFA Franc BCEAO' },
    { code: 'TZS', country: 'Tanzania' },
    { code: 'UGX', country: 'Uganda' },
    { code: 'UAH', country: 'Ukraine' },
    { code: 'VUV', country: 'Vanuatu' },
    { code: 'VEF', country: 'Venezuela' },
    { code: 'VES', country: 'Venezuela' },
    { code: 'VND', country: 'Vietnam' },
    { code: 'VUV', country: 'Vanuatu' },
    { code: 'WST', country: 'Samoa' },
    { code: 'XAF', country: 'CFA Franc BEAC' },
    { code: 'XCD', country: 'East Caribbean Dollar' },
    { code: 'XOF', country: 'CFA Franc BCEAO' },
    { code: 'YER', country: 'Yemen' },
    { code: 'ZAR', country: 'South Africa' },
    { code: 'ZMW', country: 'Zambia' },
    // Add more currencies and their country names as needed
];

// Sort alphabetically by country name
currencyData.sort((a, b) => (a.country > b.country) ? 1 : -1);

// Function to populate dropdowns with currency options
function populateCurrencyDropdowns() {
    const fromCurrencyDropdown = document.getElementById('fromCurrency');
    const toCurrencyDropdown = document.getElementById('toCurrency');

    // Clear existing options
    fromCurrencyDropdown.innerHTML = '';
    toCurrencyDropdown.innerHTML = '';

    // Add options to dropdowns
    currencyData.forEach(currency => {
        const option1 = document.createElement('option');
        option1.value = currency.code;
        option1.textContent = `${currency.country} - (${currency.code})`;

        const option2 = document.createElement('option');
        option2.value = currency.code;
        option2.textContent = `${currency.country} - (${currency.code})`;

        fromCurrencyDropdown.appendChild(option1);
        toCurrencyDropdown.appendChild(option2);
    });
}
async function convertCurrency() {
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const amount = document.getElementById('amount').value;
    const convertedAmountField = document.getElementById('convertedAmount');

    try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        const data = await response.json();

        if (data.error) {
            throw new Error(data.error);
        }

        const rate = data.rates[toCurrency];
        const convertedAmount = amount * rate;

        convertedAmountField.value = convertedAmount.toFixed(2); // Display up to 2 decimal places
    } catch (error) {
        console.error('Error fetching exchange rates:', error.message);
        convertedAmountField.value = 'Error fetching rates';
    }
}

// Populate currency dropdowns on page load
document.addEventListener('DOMContentLoaded', function() {
    populateCurrencyDropdowns();
});