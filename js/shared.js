function getInputFieldValueById(id) {
    const userInputValues = document.getElementById(id).value;
    return userInputValues;
}
function getInnerTextById(id) {
    const textValue = document.getElementById(id).innerText;
    const textToNumber = parseFloat(textValue);
    return textToNumber;
}
function showSection(id) {
    document.getElementById(id).classList.remove('hidden');
}
function hideSection(id) {
    document.getElementById(id).classList.add('hidden');
}