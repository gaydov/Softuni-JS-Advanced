function extractText() {
    let listItems = $("ul#items li").toArray().map(li => li.textContent);

    $('#result').text(listItems.join(', '));
}