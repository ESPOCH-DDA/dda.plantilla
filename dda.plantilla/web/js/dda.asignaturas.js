$(document).ready(function () {
    $('#asignaturas .carousel-item').each(function () {
        var itemToClone = $(this);

        for (var i = 1; i < 6; i++) {
            itemToClone = itemToClone.next();

            // wrap around if at end of item collection
            if (!itemToClone.length) {
                itemToClone = $(this).siblings(':first');
            }

            // grab item, clone, add marker class, add to collection
            itemToClone.children(':first-child').clone()
                    .addClass("cloneditem-" + (i))
                    .appendTo($(this));
        }
    });

    $('.carousel-control-prev').hover(function () {
        $(this).css('opacity', '1');
    }, function () {
        $(this).css('opacity', '0.5');
    });

    $('.carousel-control-next').hover(function () {
        $(this).css('opacity', '1');
    }, function () {
        $(this).css('opacity', '0.5');
    });
});