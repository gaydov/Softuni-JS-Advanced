function initializeTable() {

    function adjustRowsLinks() {
        $('#countriesTable a').css('display', 'inline');

        let tableRows = $('#countriesTable tr');
        $(tableRows[2]).find('a:contains("Up")').css('display', 'none');
        $(tableRows[tableRows.length - 1]).find('a:contains("Down")').css('display', 'none');
    }

    function moveRowUp() {

        let row = $(this).parent().parent();
        row.fadeOut(function () {
            row.insertBefore(row.prev());
            row.fadeIn();
            adjustRowsLinks();
        });
    }

    function moveRowDown() {
        let row = $(this).parent().parent();
        row.fadeOut(function () {
            row.insertAfter(row.next());
            row.fadeIn();
            adjustRowsLinks();
        });
    }

    function deleteRow() {
        let row = $(this).parent().parent();
        row.fadeOut(function () {
            row.remove();
            adjustRowsLinks();
        });
    }

    function addCountry(countryName, capital) {

        let currentRow = $('<tr>')
            .append($('<td>').text(countryName))
            .append($('<td>').text(capital))
            .append($('<td>')
                .append($('<a href="#">Up</a>').on('click', moveRowUp))
                .append(' ')
                .append($('<a href="#">Down</a>').on('click', moveRowDown))
                .append(' ')
                .append($('<a href="#">Delete</a>').on('click', deleteRow)));

        currentRow.css('display', 'none');
        $('#countriesTable').append(currentRow);
        currentRow.fadeIn();
    }

    function createCountryRow() {
        let countryNameInput = $('#newCountryText');
        let capitalInput = $('#newCapitalText');
        addCountry(countryNameInput.val(), capitalInput.val());
        countryNameInput.val('');
        capitalInput.val('');
        adjustRowsLinks();
    }

    $('#createLink').on('click', createCountryRow);

    addCountry('Bulgaria', 'Sofia');
    addCountry('Germany', 'Berlin');
    addCountry('Russia', 'Moscow');
    adjustRowsLinks();
}