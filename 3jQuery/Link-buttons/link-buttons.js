function attachEvents() {

    function markSelected() {
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
    }

    $('a.button').on('click', markSelected);
}
