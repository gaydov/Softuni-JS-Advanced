function attachEvents() {

    function selectItem() {
        let li = $(this);
        if (li.attr('data-selected')) {
            li.removeAttr('data-selected');
            li.css('background', '');
        } else {
            li.attr('data-selected', true);
            li.css('background', '#DDD');
        }
    }

    let listItems = $('#items li');
    listItems.on('click', selectItem);

    function displaySelectedTowns() {

        let resultStrings = [];

        listItems.each(function (index, item) {
            if ($(item).attr('data-selected')) {
                resultStrings.push($(item).text());
            }
        });

        $('#selectedTowns').text(resultStrings.join(', '));
    }

    $('#showTownsButton').on('click', displaySelectedTowns);
}