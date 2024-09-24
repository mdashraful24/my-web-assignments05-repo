const dateOfToday = new Date();

function allDonationAreaEl(donateButtonId, donateInputId, donationAmountId, commonAreaId) {
    document.getElementById(donateButtonId).addEventListener('click', function (event) {
        event.preventDefault();
        const userInputValues = getInputFieldValueById(donateInputId);
        const donateAmount = getInnerTextById(donationAmountId);
        const mainBalance = getInnerTextById('main-balance');

        for (let check of userInputValues) {
            if (isNaN(check) === true) {
                alert('Please provide valid input.');
                document.getElementById(donateInputId).value = "";
                return;
            }
        }

        const addDonateAmount = parseFloat(userInputValues);
        const addDonation = donateAmount + addDonateAmount;
        const subMainBalance = mainBalance - addDonateAmount;

        if (addDonateAmount > 0) {
            if (mainBalance >= addDonateAmount) {
                document.getElementById(donationAmountId).innerText = addDonation;
                document.getElementById('main-balance').innerText = subMainBalance;

                const historyCreateEl = document.createElement('div');
                historyCreateEl.classList.add('m-6');
                historyCreateEl.innerHTML = `
                    <div class="lg:w-3/4 border p-4 rounded-2xl mx-auto space-y-3">
                        <h3 class="text-xl font-bold">${addDonateAmount} Taka is Donated for ${commonAreaId}, Bangladesh</h3>
                        <p>Date: ${dateOfToday}</p>
                    </div>`;
                document.getElementById('history-of-transaction').appendChild(historyCreateEl);
                modalBox.showModal();

                document.getElementById(donateInputId).value = "";
            } else {
                alert("Your account doesn't have enough money.");
            }
        } else {
            alert('Please provide valid input.');
        }
    });
}

allDonationAreaEl('donation-btn-noakhali', 'donation-inp-noakhali', 'donate-noakhali', 'Famine-2024 at Noakhali');
allDonationAreaEl('donation-btn-feni', 'donation-inp-feni', 'donate-feni', 'Flood Relief in Feni');
allDonationAreaEl('donation-btn-quota', 'donation-inp-quota', 'donate-quota', 'Aid for Injured in the Quota Movement');

document.getElementById('history-tab').addEventListener('click', function () {
    showSection('history-of-transaction');
    hideSection('two-btn');
    document.getElementById('history-tab').style.backgroundColor = '#B4F461';
    document.getElementById('donate-tab').style.backgroundColor = 'white';
});

document.getElementById('donate-tab').addEventListener('click', function () {
    hideSection('history-of-transaction');
    showSection('two-btn');
    document.getElementById('history-tab').style.backgroundColor = 'white';
    document.getElementById('donate-tab').style.backgroundColor = '#B4F461';
});