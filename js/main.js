$(document).ready(function () {
  const anchors = document.querySelectorAll('a[href^="#"]')

  for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault()
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
  };

  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      rules: {
        name: {
          required: true,
          minlength: 2,
        },
        email: {
          required: true,
          email: true,
        },
        phone: {
          required: true,
          minlength: 18,
        },
      },
      messages: {
        name: {
          required: "Пожалуйста введите свое имя",
          minlength: "Минимум 2 бкувы",
        },
        phone: {
          required: "Пожалуйста введите свой телефон",
          minlength: "Минимум 10 цифр",
        },
        email: {
          required: "Пожалуйста введите свой Email",
          email: "Ваша почта должна быть формата name@domain.com",
        },
      },
    });
  });

  $(".phone").mask("+7 (000) 000-00-00");

});
