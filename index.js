$(function () {
    var $tocMain = $('#toc-main');
    var $toc = $('#toc');

    // TOC LINKS ///////////////////////
    effectF = function (e) {
        title = $(e.target).attr('id') + 'Title';
        $('html,body').animate({ scrollTop:$('#' + title).offset().top - 40}, 1000);
    };
    $("#toc li, #toc-main li").click(effectF);

    // HIDE/SHOW TOC ///////////////////////
    var scrollF = function () {
        if ($(window).scrollTop() > $tocMain.offset().top + $tocMain.height()) {
            $toc.fadeIn(500);
        } else {
            $toc.fadeOut(500);
        }
    }
    $(window).scroll(scrollF);

    // COLOUR THE TOC /////////////////////
    $(window).scroll(function () {
            var found = false;
            for (var i = 0; i < 10; i++) {
                var selected = false;
                if (!found) {
                    $article = $("#" + i + "Title").parent();
                    if ($(window).scrollTop() < ($article.offset().top + $article.height())) {
                        selected = true;
                        found = true;
                    }
                }

                $('#toc #' + i).toggleClass('scrollSelected', selected)
            }
        }
    );
})
;