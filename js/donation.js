const dateToday = new Date();

document.getElementById('donation-btn-noakhali')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const addDonateAmount = getInputFieldValueById('donation-inp-noakhali');
        const donateAmount = getInnerTextById('donate-noakhali');
        const mainBalance = getInnerTextById('main-balance');
        const addDonation = donateAmount + addDonateAmount;
        const subMainBalance = mainBalance - addDonateAmount;
        if (addDonateAmount > 0 && isNaN(addDonateAmount) === false) {
            document.getElementById('donate-noakhali').innerText = addDonation;
            document.getElementById('main-balance').innerText = subMainBalance;

            const history = document.createElement('div');
            history.classList.add('m-6');
            history.innerHTML = `
            <div class="w-11/12 lg:w-3/4 border p-7 rounded-2xl mx-auto space-y-5">
            <h3 class="text-xl font-bold">${addDonateAmount} Taka is Donated for famine-2024 at Noakhali, Bangladesh</h3>
            <p class="">Date: ${dateToday}</p>
            </div>`
            document.getElementById('history').appendChild(history);
        }
        else {
            alert('Invalid Input')
        }
    });

document.getElementById('donation-btn-feni')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const addDonateAmount = getInputFieldValueById('donation-inp-feni');
        const donateAmount = getInnerTextById('donate-feni');
        const mainBalance = getInnerTextById('main-balance');
        const addDonation = donateAmount + addDonateAmount;
        const subMainBalance = mainBalance - addDonateAmount;
        if (addDonateAmount > 0 && isNaN(addDonateAmount) === false) {
            document.getElementById('donate-feni').innerText = addDonation;
            document.getElementById('main-balance').innerText = subMainBalance;

            const history = document.createElement('div');
            history.classList.add('m-6');
            history.innerHTML = `
            <div class="w-11/12 lg:w-3/4 border p-7 rounded-2xl mx-auto space-y-5">
            <h3 class="text-xl font-bold">${addDonateAmount} Taka is Donated for Flood Relief in Feni,Bangladesh</h3>
            <p class="">Date: ${dateToday}</p>
            </div>`
            document.getElementById('history').appendChild(history);
        }
        else {
            alert('Invalid Input')
        }
    });

document.getElementById('donation-btn-quota')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const addDonateAmount = getInputFieldValueById('donation-inp-quota');
        const donateAmount = getInnerTextById('donate-quota');
        const mainBalance = getInnerTextById('main-balance');
        const addDonation = donateAmount + addDonateAmount;
        const subMainBalance = mainBalance - addDonateAmount;
        if (addDonateAmount > 0 && isNaN(addDonateAmount) === false) {
            document.getElementById('donate-quota').innerText = addDonation;
            document.getElementById('main-balance').innerText = subMainBalance;

            const history = document.createElement('div');
            history.classList.add('m-6');
            history.innerHTML = `
            <div class="w-11/12 lg:w-3/4 border p-7 rounded-2xl mx-auto space-y-5">
            <h3 class="text-xl font-bold">${addDonateAmount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h3>
            <p class="">Date: ${dateToday}</p>
            </div>`
            document.getElementById('history').appendChild(history);
        }
        else { alert('Invalid Input') }
    });


document.getElementById('history-tab').addEventListener('click', function () {
    showSection('history');
    hideSection('cards');
    const donate = document.getElementById('donate-tab');
    donate.style.backgroundColor = 'white'
    const history = document.getElementById('history-tab');
    history.style.backgroundColor = '#B4F461'
})
document.getElementById('donate-tab').addEventListener('click', function () {
    hideSection('history');
    showSection('cards');
    const history = document.getElementById('history-tab');
    history.style.backgroundColor = 'white'
    const donate = document.getElementById('donate-tab');
    donate.style.backgroundColor = '#B4F461'
});