//= ../../node_modules/fancyapps/fancybox/dist/jquery.fancybox.min.js"
//= ../../node_modules/jquery-validation/dist/jquery.validate.min.js"
//= ../../node_modules/jquery-validation/dist/localization/messages_ru.min.js"
//= libs/_jquery.inputmask.min.js"

$(function() {

  // validate form
  $("#form").validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      number: {
        required: true
      },
      companyname: {
        required: true,
        minlength: 3
      }
    }
    submitHandler: function(form) {

    form.submit();
  }
  });

  // inputmask
  $("input[type='tel']").mask('+7(999)999-99-99');

  // dropdown form
  $(".js-form__arrow").click(function(e) {
    e.preventDefault();
    $(this).next().stop(true, true).slideToggle();
  });

  $(".js-form__close").click(function(e) {
    e.preventDefault();
    $(this).parents(".slide-box").slideUp();
  });


  // popup
  $('[data-fancybox]').fancybox({
    autoFocus: false,
  });


  // slider
  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: true
  });




});
