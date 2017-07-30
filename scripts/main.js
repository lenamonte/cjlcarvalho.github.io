// setting my actual age
const setActualAge = () => {
    let difftime = Math.abs((new Date()).getTime() - (new Date(1995, 6, 7)).getTime());
    let diffdays = Math.floor(Math.ceil(difftime / (1000 * 3600 * 24)) / 365);
    let age = document.querySelector('[id*="age"]');
    age.innerHTML = diffdays + age.innerHTML;
}

// controlling the display of some items
const displayItems = () => {
    $('.titulo').toArray().forEach((item) => {
        $(item).click((event) => {
            $('.itens').toArray().forEach((elemento) => {
                if($(elemento).parent()[0] === $(item).parent()[0])
                    $(elemento).toggle('show');
                else if($(elemento).is(':visible'))
                    $(elemento).hide();
            });
        });
    });
}

$(document).ready(() => {
    displayItems();
    setActualAge();
});