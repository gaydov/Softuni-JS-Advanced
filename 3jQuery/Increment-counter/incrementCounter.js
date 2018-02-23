function increment(selector) {

    let textArea = $('<textarea>');
    textArea.val(0);
    textArea.addClass('counter');
    textArea.attr('disabled', true);

    let incrBtn = $('<button>Increment</button>');
    incrBtn.addClass('btn');
    incrBtn.attr('id', 'incrementBtn');

    let addBtn = $('<button>Add</button>');
    addBtn.addClass('btn');
    addBtn.attr('id', 'addBtn');

    let ul = $('<ul>');
    ul.addClass('results');

    $(incrBtn).on('click', function () {
        let currentValue = Number(textArea.val());
        textArea.val(currentValue + 1);
    });

    $(addBtn).on('click', function () {
        let li = $(`<li>${textArea.val()}</li>`);
        li.appendTo(ul);
    });

    let container = $(selector);
    textArea.appendTo(container);
    incrBtn.appendTo(container);
    addBtn.appendTo(container);
    ul.appendTo(container);
}