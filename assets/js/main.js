/* ----------------------------------------------------
 # Steper Accordion New Code
 ------------------------------------------------------ */

// const accordionHeaders = document.querySelectorAll(".bob-accordion-header");

// ActivatingFirstAccordion();

// function ActivatingFirstAccordion() {
//     accordionHeaders[0].parentElement.classList.add("bob-active");
//     accordionHeaders[0].nextElementSibling.style.maxHeight =
//         accordionHeaders[0].nextElementSibling.scrollHeight + 5000 + "px";
// }

// function toggleActiveAccordion(e, header) {
//     const activeAccordion = document.querySelector(".bob-accordion.bob-active");
//     const clickedAccordion = header.parentElement;
//     const accordionBody = header.nextElementSibling;

//     if (activeAccordion && activeAccordion != clickedAccordion) {
//         activeAccordion.querySelector(".bob-accordion-body").style.maxHeight = 0;
//         activeAccordion.classList.remove("bob-active");
//     }

//     clickedAccordion.classList.toggle("bob-active");

//     if (clickedAccordion.classList.contains("bob-active")) {
//         accordionBody.style.maxHeight = accordionBody.scrollHeight + 5000 + "px";
//     } else {
//         accordionBody.style.maxHeight = 0;
//     }
// }

// accordionHeaders.forEach(function (header) {
//     header.addEventListener("click", function (event) {
//         toggleActiveAccordion(event, header);
//     });
// });

// function resizeActiveAccordionBody() {
//     const activeAccordionBody = document.querySelector(
//         ".bob-accordion.active .bob-accordion-body"
//     );
//     if (activeAccordionBody)
//         activeAccordionBody.style.maxHeight =
//         activeAccordionBody.scrollHeight + "px";
// }

// window.addEventListener("resize", function () {
//     resizeActiveAccordionBody();
// });

/* ----------------------------------------------------
 # Images Upload
 ------------------------------------------------------ */

jQuery(document).ready(function () {


    // accordion active
    $('.bob-accordion-header').on('click', function () {
        $('.bob-accordion').removeClass('bob-active')
        $(this).parent('.bob-accordion').toggleClass('bob-active ').fadeIn(500);
    })
    // accordion active

    ImgUpload();

    function ImgUpload() {
        var imgWrap = "";
        var imgArray = [];

        $('.upload__inputfile').each(function () {
            $(this).on('change', function (e) {
                imgWrap = $(this).closest('.upload__box').find('.upload__img-wrap');
                var maxLength = $(this).attr('data-max_length');

                var files = e.target.files;
                var filesArr = Array.prototype.slice.call(files);
                var iterator = 0;
                filesArr.forEach(function (f, index) {

                    if (!f.type.match('image.*')) {
                        return;
                    }

                    if (imgArray.length > maxLength) {
                        return false
                    } else {
                        var len = 0;
                        for (var i = 0; i < imgArray.length; i++) {
                            if (imgArray[i] !== undefined) {
                                len++;
                            }
                        }
                        if (len > maxLength) {
                            return false;
                        } else {
                            imgArray.push(f);

                            var reader = new FileReader();
                            reader.onload = function (e) {
                                var html = "<div class='upload__img-box'><div style='background-image: url(" + e.target.result + ")' data-number='" + $(".upload__img-close").length + "' data-file='" + f.name + "' class='img-bg'><div class='upload__img-close'></div></div></div>";
                                imgWrap.prepend(html);
                                iterator++;
                            }
                            reader.readAsDataURL(f);
                        }
                    }
                });
            });
        });

        $('body').on('click', ".upload__img-close", function (e) {
            var file = $(this).parent().data("file");
            for (var i = 0; i < imgArray.length; i++) {
                if (imgArray[i].name === file) {
                    imgArray.splice(i, 1);
                    break;
                }
            }
            $(this).parent().parent().remove();
        });
    }

    //Active Class Continue buttons

    $(".bob_continue").click(function () {
        $(".bob_continue").removeClass("bob_active");
        $(this).addClass("bob_active");
        $(".bob_continue.bob_active").parent().css("display", "none");
        $(".bob_continue.bob_active").parent().next().css("display", "block");

        let step = parseInt($(this).attr("data-btn")) + 1;
        $('.bob-step-list').removeClass('selected');
        $('.bob-step-list-' + step).addClass('selected');

        if ($(this).attr("data-btn") == $(".bob_steps li").attr("data-step")) {

        }
    });
});


/* ----------------------------------------------------
# Landing page code
------------------------------------------------------ */
$(document).ready(function () {
    $('.popular-brands-slick-parent').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.happy_customers_box_slick_parent').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

})