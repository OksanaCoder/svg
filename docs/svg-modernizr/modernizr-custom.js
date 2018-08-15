$(function() {
    if(!Modernizr.borderradius) {
        $.each($('img[src$="svg"][data-png]'),
            function() {
                var element = $(this);
                element.attr('src', element.attr('data-png'));
            });
    }
});