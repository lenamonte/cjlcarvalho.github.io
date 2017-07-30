// setting my actual age
const setActualAge = function(){
    let birth = new Date(1995, 6, 7);
    let diff = Math.abs((new Date()).getTime() - birth.getTime());
    let diffdays = Math.floor(Math.ceil(diff / (1000 * 3600 * 24)) / 365);
    let age = document.querySelector('[id*="age"]');
    age.innerHTML = diffdays + age.innerHTML;
}

$(document).ready(() => {
    $('.t1').click((event) => {
        $('.i1').toggle('show');
        if($('.i2').is(':visible'))
            $('.i2').hide();
        if($('.i3').is(':visible'))
            $('.i3').hide();
    });
    $('.t2').click((event) => {
        $('.i2').toggle('show');
        if($('.i1').is(':visible'))
            $('.i1').hide();
        if($('.i3').is(':visible'))
            $('.i3').hide();
    });
    $('.t3').click((event) => {
        $('.i3').toggle('show');
        if($('.i2').is(':visible'))
            $('.i2').hide();
        if($('.i1').is(':visible'))
            $('.i1').hide();
    });
    setActualAge();
});