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
            history.classList.add('m-10');
            history.innerHTML = `
            <h3 class="font-bold text-center">${addDonateAmount} Taka donated for Feni-Flood, Bangladesh</h3>
            <p class="text-center">Date: ${dateToday}</p>`
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
            history.classList.add('m-10');
            history.innerHTML = `
            <h3 class="font-bold text-center">${addDonateAmount} Taka donated for Feni-Flood, Bangladesh</h3>
            <p class="text-center">Date: ${dateToday}</p>`
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
            history.classList.add('m-10');
            history.innerHTML = `
            <h3 class="font-bold text-center">${addDonateAmount} Taka donated for Injured Students in Quota Movement, Bangladesh</h3>
            <p class="text-center">Date: ${dateToday}</p>`
            document.getElementById('history').appendChild(history);
        }
        else { alert('Invalid Input') }
    });


document.getElementById('btn-history').addEventListener('click', function () {
    showSection('history');
    hideSection('cards');
})
document.getElementById('btn-donate').addEventListener('click', function () {
    hideSection('history');
    showSection('cards');
})