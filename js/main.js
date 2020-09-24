$(function(){

    $('.main__slider').slick({
        prevArrow: '<button class="slider-btn main-slider__btn main-slider__left"><svg width="22" height="41" viewBox="0 0 22 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.0007 40L2.00073 20.5L21.0007 1" stroke="#353A58" stroke-width="2"/></svg></button>',
        nextArrow: '<button class="slider-btn main-slider__btn main-slider__right"><svg width="22" height="41" viewBox="0 0 22 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00073 1L20.0007 20.5L1.00073 40" stroke="#353A58" stroke-width="2"/></svg></button>',
        fade: true
    })

    $('.reviews__slider').slick({
        slidesToShow: 3,
        centerMode: true,
        prevArrow: '<button class="slider-btn reviews-slider__btn reviews-slider__left"><svg width="22" height="41" viewBox="0 0 22 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.0007 40L2.00073 20.5L21.0007 1" stroke="#353A58" stroke-width="2"/></svg></button>',
        nextArrow: '<button class="slider-btn reviews-slider__btn reviews-slider__right"><svg width="22" height="41" viewBox="0 0 22 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00073 1L20.0007 20.5L1.00073 40" stroke="#353A58" stroke-width="2"/></svg></button>',
        variableWidth: true,
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 1,
                centerMode: false,
              }
            },
            {
              breakpoint: 480,
              settings: {
               
              }
            }
          ]
    })

    $('.menu__tabs .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.menu__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.menu__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    $(document).on('click', '.input-number__minus', function () {
        let total = $(this).next();
        if (total.val() > 1) {
            total.val(+total.val() - 1);
        }
    });
    // Увеличиваем на 1 
    $(document).on('click', '.input-number__plus', function () {
        let total = $(this).prev();
        total.val(+total.val() + 1);
    });
    // Запрещаем ввод текста 
    document.querySelectorAll('.input-number__input').forEach(function (el) {
        el.addEventListener('input', function () {
            this.value = this.value.replace(/[^\d]/g, '');
        });
    });


    $(".reviews__rate-star").rateYo({
        ratedFill: "#FFC107",
        readOnly: true,
        rating: 5,
        starWidth: "15px",
        spacing: "6px"
    });

    $('.input-phone').mask('+7(000)000-00-00');
  
});