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
            if (mainBalance >= addDonateAmount) {
                document.getElementById('donate-noakhali').innerText = addDonation;
                document.getElementById('main-balance').innerText = subMainBalance;

                const history = document.createElement('div');
                history.classList.add('m-6');
                history.innerHTML = `
                <div class="lg:w-3/4 border p-4 rounded-2xl mx-auto space-y-4">
                <h3 class="text-xl font-bold">${addDonateAmount} Taka is Donated for famine-2024 at Noakhali, Bangladesh</h3>
                <p class="">Date: ${dateToday}</p>
                </div>`
                document.getElementById('history-of-transaction').appendChild(history);
                modalBox.showModal();

                document.getElementById('donation-inp-noakhali').value = "";
            }
            else {
                alert("Your account doesn't have enough money.");
            }
        }
        else {
            alert('Invalid Input');
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
            if (mainBalance >= addDonateAmount) {
                document.getElementById('donate-feni').innerText = addDonation;
                document.getElementById('main-balance').innerText = subMainBalance;

                const history = document.createElement('div');
                history.classList.add('m-6');
                history.innerHTML = `
                <div class="lg:w-3/4 border p-4 rounded-2xl mx-auto space-y-4">
                <h3 class="text-xl font-bold">${addDonateAmount} Taka is Donated for Flood Relief in Feni, Bangladesh</h3>
                <p class="">Date: ${dateToday}</p>
                </div>`
                document.getElementById('history-of-transaction').appendChild(history);
                modalBox.showModal();

                document.getElementById('donation-inp-feni').value = "";
            }
            else {
                alert("Your account doesn't have enough money.");
            }
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
            if (mainBalance >= addDonateAmount) {
                document.getElementById('donate-quota').innerText = addDonation;
                document.getElementById('main-balance').innerText = subMainBalance;

                const history = document.createElement('div');
                history.classList.add('m-6');
                history.innerHTML = `
                <div class="lg:w-3/4 border p-4 rounded-2xl mx-auto space-y-4">
                <h3 class="text-xl font-bold">${addDonateAmount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h3>
                <p class="">Date: ${dateToday}</p>
                </div>`
                document.getElementById('history-of-transaction').appendChild(history);
                modalBox.showModal();

                document.getElementById('donation-inp-quota').value = "";
            }
            else {
                alert("Your account doesn't have enough money.");
            }
        }
        else { alert('Invalid Input') }
    });

document.getElementById('history-tab').addEventListener('click', function () {
    showSection('history-of-transaction');
    hideSection('cards');
    const donate = document.getElementById('donate-tab');
    donate.style.backgroundColor = 'white'
    const history = document.getElementById('history-tab');
    history.style.backgroundColor = '#B4F461'
})

document.getElementById('donate-tab').addEventListener('click', function () {
    hideSection('history-of-transaction');
    showSection('cards');
    const history = document.getElementById('history-tab');
    history.style.backgroundColor = 'white'
    const donate = document.getElementById('donate-tab');
    donate.style.backgroundColor = '#B4F461'
});