// setting my actual age
const setActualAge = () => {
    let difftime = Math.abs((new Date()).getTime() - (new Date(1995, 6, 7)).getTime());
    let diffdays = Math.floor(Math.ceil(difftime / (1000 * 3600 * 24)) / 365);
    let age = document.querySelector('[id*="age"]');
    age.innerHTML = diffdays + age.innerHTML;
}

// controlling the display of some items
const displayItems = () => {
    $('.titulo').toArray().forEach((titulo) => {
        $(titulo).click((event) => {
            $('.itens').toArray().forEach((item) => {
                if($(item).parent()[0] === $(titulo).parent()[0])
                    $(item).toggle('show');
                else if($(item).is(':visible'))
                    $(item).hide();
            });
        });
    });
}

$(document).ready(() => {
    displayItems();
    setActualAge();
});