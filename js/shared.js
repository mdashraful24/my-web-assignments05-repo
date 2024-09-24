function getInputFieldValueById(id) {
    const userInputValues = document.getElementById(id).value;
    return userInputValues;
}
function getInnerTextById(id) {
    const inputValue = document.getElementById(id).innerText;
    const parseToNumber = parseFloat(inputValue);
    return parseToNumber;
}
function toggleBtnShow(id) {
    document.getElementById(id).classList.remove('hidden');
}
function toggleBtnHide(id) {
    document.getElementById(id).classList.add('hidden');
}