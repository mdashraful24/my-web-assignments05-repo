function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getInnerTextById(id) {
    const text = document.getElementById(id).innerText;
    const textToNumber = parseFloat(text);
    return textToNumber;
}

function showSection(id) {
    document.getElementById(id).classList.remove('hidden');
}
function hideSection(id) {
    document.getElementById(id).classList.add('hidden');
}


function showSection(id){
    document.getElementById(id).classList.remove('hidden');
}
function hideSection(id){
    document.getElementById(id).classList.add('hidden');
}

document.getElementById('btn-continue')
    .addEventListener('click', function () {
        // window.location.reload();
    })