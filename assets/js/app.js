$(function() {
    let menu = $("#menu");
    let navToggle = $("#navToggle");

    $(function() {

        navToggle.on('click', function() {
            navToggle.toggleClass('burger-active');

            menu.toggleClass('show');
        });
    });


    $("document").ready(function(){
        $(".tab-slider--body").hide();
        $(".tab-slider--body:first").show();
    });

    $(".tab-slider--nav li").click(function() {

        $(".tab-slider--body").hide();

        let activeTab = $(this).attr("rel");

        $("#"+activeTab).fadeIn();

        if($(this).attr("rel") == "tab2") {
            $('.tab-slider--tabs').addClass('slide');
        } else {
            $('.tab-slider--tabs').removeClass('slide');
        }

        $(".tab-slider--nav li").removeClass("active");
        $(this).addClass("active");
    });

    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this)

        $this.toggleClass("active");
        $this.toggleClass("accordion__header-active");

        if ($($this).hasClass("active")==false) {
            $this.addClass('falsee')
        } else {
            $this.removeClass('falsee')
        }

        if ($($this).hasClass("active")) {
            let h = ($($this).find('.accordion__text').height());
            $this.find(".accordion__content").css({
                "height": h + 'px'
            })
            window.onresize = function(){
                $(".accordion__text").css("height", "")
                let h = ($($this).find('.accordion__text').height());
                $this.find(".accordion__content").css({
                    "height": h + 'px'
                })
            }
        } else {
            $(".falsee .accordion__content").css({
                "height": 0 + 'px'
            })
        }

    });

    $('[data-modal]').on('click', function(event) {
        event.preventDefault();

        let modal = $(this).data('modal');

        $('body').addClass('no-scroll');
        $(modal).addClass('show');

        setTimeout(function() {
            $(modal).find('.modal__content').css({
                transform: 'scale(1)',
                opacity: '1'
            });
        });
    });


    $('[data-modal-close]').on('click', function(event) {
        event.preventDefault();

        let modal = $(this).parents('.modal');

        modalClose(modal);
    });


    $('.modal').on('click', function(){
        let modal = $(this);

        modalClose(modal);
    })

    $('.modal__content').on('click', function(event){
        event.stopPropagation();
    })

    function modalClose(modal) {

        modal.find('.modal__content').css({
            transform: 'scale(.5)',
            opacity: '0'
        });

        setTimeout(function() {
            $('body').removeClass('no-scroll');
            modal.removeClass('show');
        }, 200);
    }

    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });

    let header = $("#header");
    let headerH = header.innerHeight();

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let scrollEl = $(this).data("scroll");
        let scrollElPos = $(scrollEl).offset().top;

        $("html, body").animate({
            scrollTop: scrollElPos - headerH
        }, 500)
    });


    $('[data-modal]').on('click', function(event) {
        event.preventDefault();

        let modal = $(this).data('modal');

        $('body').addClass('no-scroll');
        $(modal).addClass('show');

        setTimeout(function() {
            $(modal).find('.modal__content').css({
                transform: 'scale(1)',
                opacity: '1'
            });
        });
    });


    $('[data-modal-close]').on('click', function(event) {
        event.preventDefault();

        let modal = $(this).parents('.modal');

        modalClose(modal);
    });


    $('.modal').on('click', function(){
        let modal = $(this);

        modalClose(modal);
    })

    $('.modal__content').on('click', function(event){
        event.stopPropagation();
    })

    function modalClose(modal) {

        modal.find('.modal__content').css({
            transform: 'scale(.5)',
            opacity: '0'
        });

        setTimeout(function() {
            $('body').removeClass('no-scroll');
            modal.removeClass('show');
        }, 200);
    }

    function changeCursor() {
        const cursor = $('.cursor')
        const follower = $('.follower')
        const links = document.querySelectorAll('.link')

        let posX = 0,
        posY = 0

        let mouseX = 0,
        mouseY = 0

        TweenMax.to({}, 0.01, {
            repeat: -1,
            onRepeat: () => {
                posX += (mouseX - posX) / 5
                posY += (mouseY - posY) / 5

                TweenMax.set(follower, {
                    css: {
                        left: posX - 12,
                        top: posY - 12
                    }
                })
                TweenMax.set(cursor, {
                    css: {
                        left: mouseX,
                        top: mouseY
                    }
                })
            }
        })

        window.addEventListener('mousemove', e => {
            mouseX = e.clientX
            mouseY = e.clientY
        })

        links.forEach(link => {
            link.addEventListener('mouseenter', () => {
                cursor.addClass('active')
                follower.addClass('active')
            })

            link.addEventListener('mouseleave', () => {
                cursor.removeClass('active')
                follower.removeClass('active')
            })
        })

    }

    changeCursor();
});






