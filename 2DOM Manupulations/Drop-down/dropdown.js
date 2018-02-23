function addItem() {
    let text = document.getElementById('newItemText');
    let value = document.getElementById('newItemValue');
    let selectOption = document.createElement('option');
    selectOption.textContent = text.value;
    selectOption.value = value.value;
    document.getElementById('menu').appendChild(selectOption);

    text.value = '';
    value.value = '';
}