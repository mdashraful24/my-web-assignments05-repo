function getInputFieldValueById(id) {
    const inputValues = document.getElementById(id).value;
    const inputNumbers = parseFloat(inputValues);
    return inputNumbers;
}

function getInnerTextById(id) {
    const texts = document.getElementById(id).innerText;
    const textToNumber = parseFloat(texts);
    return textToNumber;
}

function showSection(id) {
    document.getElementById(id).classList.remove('hidden');
}
function hideSection(id) {
    document.getElementById(id).classList.add('hidden');
}

function showSection(id) {
    document.getElementById(id).classList.remove('hidden');
}
function hideSection(id) {
    document.getElementById(id).classList.add('hidden');
}