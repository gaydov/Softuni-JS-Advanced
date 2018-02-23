function search() {

    let searchedText = $('#searchText').val();
    let matches = 0;

    $('ul#towns li').each(function (index, item) {
        if (item.textContent.includes(searchedText)) {
            $(item).css("font-weight", "bold");
            matches++;
        } else {
            $(item).css("font-weight", "");
        }
    });

    $('#result').text(`${matches} matches found.`);
}