$('.openFoot-menuMob').on('click', function(e) {
    $(this).addClass("openFoot-show");
    $(this).find('.hideBlock').toggleClass("d-n");
    $(this).find('.addFootMob').toggleClass('addFootMob-rotate')
    e.stopPropagation();
});