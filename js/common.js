var hash = location.hash
var checkRegistrationStep = 1
var checkRegistrationBlock = $('.js-check-registration-block')
var checkRegistrationStepLength = checkRegistrationBlock.length

var currentStep = $('.js-step-current')
var allStep = $('.js-step-all')
currentStep.text(checkRegistrationStep)
allStep.text(checkRegistrationStepLength)
$(checkRegistrationBlock[checkRegistrationStep - 1]).fadeIn(0)


function processSuccess(response, callback, $form) {
    // console.log(response)
    if ($form.attr('id') && response.result === 'success') {
        yaCounter.reachGoal($form.attr('id'));
        gtag('event', $form.attr('id'));
    }
    if (callback) {
        callback({clearForm: response.result === 'success', unlockSubmitButton: true});
    }
    var delay = 1500;
    if (response.delay) {
        delay = response.delay;
    }
    if (response.text) {
        Popup.message(response.text);
    }
    if (response.errors) {
        $.each(response.errors, function (i, el) {
            if (i === '__all__') {
                ValidateForm.customFormErrorTip($form[0], el[0]);
            } else {
                ValidateForm.customErrorTip($form.find('[name=' + i + ']').get(0), el[0]);
            }
        });
    }
    if (response.redirect_to) {
        setTimeout(function () {
            if (response.redirect_to == 'self') {
                window.location.reload();
            } else {
                window.location.href = response.redirect_to;
            }
        }, delay);
    }
}

function processError(callback) {
    if (callback){
        callback({clearForm: false, unlockSubmitButton: true});
    }
    Popup.message('Возникла ошибка. Попробуйте позже.');
}

function changeStep(form) {
    setTimeout(function() {
        $(form).find('.btn').attr('disabled', false)
        checkRegistrationStep++
        checkRegistrationBlock.fadeOut(0, () => $(checkRegistrationBlock[checkRegistrationStep - 1]).fadeIn(0))
        currentStep.text(checkRegistrationStep)

        if (checkRegistrationStep === 3) addCustomContent(form)

        form.classList.remove('form_sending')
    }, 500)
}

function activeteInput(input) {
    if (!input.hasClass('js-brand-checked')) {
        return
    } else {
        var _checkedBrand = input.val().toLowerCase().trim().replace(/-|\s/g, '')
        var _wrap = input.parents('.js-check-registration-product')
        var _productItem = _wrap.find('input[name="product"]')
        var _productList = _productItem.siblings('.js-drpdwn-list')
        var _productOptions = _productList.find('.option')
        if (input.val() === '') {
            _productItem.val('')
            _productItem.attr('disabled', true)
            _productOptions.removeClass('hidden')
            return
        } 
        _productItem.attr('disabled', false)
        _productOptions.removeClass('hidden')
        _productOptions.each(function(idx, elem) {
            var _productOptionsBrands = $(elem).data('brand')
            if ( _productOptionsBrands !== _checkedBrand || !_productOptionsBrands) {
                $(elem).addClass('hidden')
            } else {
                $(elem).css('display', 'flex')
            }
        })
    }
}

function toggleAddBtn(input) {
    if (!input.hasClass('js-product-checked')) {
        return
    } else {
        if (input.val() === '') {
            $('.js-check-registration-add').fadeOut(0)
            return
        } else {
            $('.js-check-registration-add').slideDown(100)
        }
    }
}

function addCustomContent(form) {
    var checkRegistrationProduct = $('.js-check-registration-product')
    var checkRegistrationProductRatingWrap = $('.js-product-rating-block-wrap')
    checkRegistrationProduct.each( function(idx, elem) {
        var shortName = $(elem).find('.js-product-checked').val()
        var fullName = $(elem).find('.js-brand-checked').val() + ' ' + $(elem).find('.js-product-checked').val()
        var _ratingItem = ratingProduct(shortName, fullName)
        checkRegistrationProductRatingWrap.append(_ratingItem)
    })

    $(form).parents('.popup__window').addClass('big')
    $(form).find('button[type="submit"]').text('Зарегистрировать заявку')
}

$(function() {

    // popup
    Popup.init('.js-open-popup');

    // mobile nav
    MobNav.init({
        openBtn: '.js-open-menu',
        closeBtn: '.js-close-menu',
        headerId: 'header',
        closeLink: 'a.js-anchor'
    });
   
    // form
    Form.init('.form');
  
    Form.onSubmit = function (form, callback) {
        if ( form.id === 'form-check-registration' && checkRegistrationStep !== checkRegistrationStepLength ) {
            changeStep(form)
            return false
        } else {
            checkRegistrationStep = 1
            $('.popup__subtitle').fadeIn(0)

        }
        var formDate = new FormData(form);
        $.ajax({
            url: form.action,
            type: "POST",
            dataType: "json",
            cache: false,
            contentType: false,
            processData: false,
            data: formDate,
            success: function (response) {
                processSuccess(response, callback, $(form));
                if (response.errors) {
                    // open last popup
                    if (_popup_id) {
                        Popup.open('#' + _popup_id);
                    }
                }

            },
            error: function () {
                processError(callback);
            }
        });    

        return false;
    };

    try {
        Anchor.init('.js-anchor', 800, 100);
    } catch (error) {
        console.log(error);
    }

    $('input[data-type="tel"]').each(function () {
        new Maskinput(this, 'tel');
    });

    // ===== STARTPAGE
    $('body')
        .on('mouseenter', '.js-header-dropdown', function() {
            $('.js-drpdwn-open-hidden').fadeOut(0, function() {
                $('.js-drpdwb-open-show').fadeIn(0).css('display', 'inline-flex')
                $('.js-drpdwb-list').fadeIn(0)
            })
        })
        .on('mouseleave', '.js-header-dropdown', function() {
                $('.js-drpdwb-list').fadeOut(0)
                $('.js-drpdwb-open-show').fadeOut(0, function() {
                    $('.js-drpdwn-open-hidden').fadeIn(0).css('display', 'inline-flex')
                })
            })
        .on('input focus', '.js-autocomplete', function () {
            var _this = $(this);
            var inputVal = _this.val().toLowerCase().trim().replace(/-|\s/g, '');
            var _list = _this.siblings('.js-drpdwn-list');
            var _option = _list.find('.option');
            _list.addClass('opened');
            _list.fadeIn();

            _option.each(function (idx, elem) {
                var _optionVal = $(elem).data('value').toLowerCase().trim().replace(/-|\s/g, '');
                if (inputVal !== '') {
                    if (_optionVal.includes(inputVal)) {
                        $(elem).show();
                        $(elem).addClass('visible')
                    } else {
                        $(elem).hide();
                        $(elem).removeClass('visible')
                    }
                } else {
                    $(elem).show();
                    $(elem).addClass('visible')
                }
                if ($('.option.visible').length < 1) {
                    if ($('.nomach').length) {
                        $('.nomach').show().css('display', 'flex')
                        return
                    }
                } else {
                    $('.nomach').hide()
                }
            })

        })
        .on('blur', '.js-autocomplete', function () {
            var _this = $(this);
            var inputVal = _this.val().toLowerCase().trim().replace(/-|\s/g, '');
            var _list = _this.siblings('.js-drpdwn-list');
            var _option = _list.find('.option');
            _list.fadeOut();
            _list.removeClass('opened');

            _option.each(function (idx, elem) {
                var _optionVal = $(elem).data('value').toLowerCase().trim().replace(/-|\s/g, '');
                if (inputVal !== '') {
                    if (_optionVal.includes(inputVal)) {
                        $(elem).addClass('visible');
                        if ($('.visible').length > 1) {
                            _this.val('')
                        } else {
                            _this.val($(elem).text())
                            return false
                        }
                    } else {
                        $(elem).removeClass('visible');
                        _this.val('')
                    }
                } else {
                    $(elem).removeClass('visible');
                    _this.val('');
                    $(elem).show()
                }
            })

        })
        .on('keydown', '.js-autocomplete', function (event) {
            var _this = $(this);
            if (event.key === "Enter") {
                _this.blur()
                activeteInput(_this)
                toggleAddBtn(_this)
            }
        })
        .on('click', '.js-drpdwn-list .option', function () {
            var _this = $(this);
            var _list = _this.closest('.js-drpdwn-list');
            var _input = _list.siblings('.js-autocomplete');
            var _formField = _this.parents('.form__field')
            _list.removeClass('opened');

            if (_this.data('value') === 'nomach') {
                _input.val('');
                return
            }

            _input.val(_this.text());
            _formField.removeClass('field-error')
            activeteInput(_input)
            toggleAddBtn(_input)
        })
        .on('click', '.js-check-registration-add', function() {
            var _this = $(this)
            var _parentBlock = _this.siblings('.js-check-registration-wrap')
            var productItemBlock = $('.js-check-registration-product')
            var productItemBlockIdx = productItemBlock.last().data('product-idx')
            var appendBlock = addProduct(+productItemBlockIdx + 1)
            _parentBlock.append(appendBlock)
            _this.fadeOut(0)
        })

    // ===== FAQPAGE
    if ( $('.faq').length ) {
        $('body').on('click', '.js-toggleLink', function(event) {
            event.preventDefault()
            var _this = $(this)
            var _itemBody = _this.find('.faq__item-body')
            var _allLink = $('.js-toggleLink')
            var _allBoby = _allLink.find('.faq__item-body')
    
    
            if (_this.hasClass('opened')) {
                _this.removeClass('opened')
                _itemBody.slideUp(200)
            } else {
                _allLink.removeClass('opened')
                _allBoby.slideUp(200)
                _this.addClass('opened')
                _itemBody.slideDown(200)
            }
        })
    }
    
    // ===== ACCOUNTPAGE
    if ( $('.account').length ) {
        $('body')
            .on('click', '.js-tabs-link', function(event) {
                var _this = $(this)
                var _thisData = _this.data('tab')
                var _toggleBlock = $('.js-toggle-block')
                var tabs = $('.js-tabs-link')

                if (_this.hasClass('active')) {
                    return
                } else {
                    _toggleBlock.hide()
                    tabs.removeClass('active')
                    _this.addClass('active')
                    $('.js-toggle-block[data-kind="'+ _thisData +'"]').fadeIn(100)
                }
            })
            .on('click', '.js-change-personality', function() {
                var _this = $(this)
                var _form = _this.parents('form')
                var _inputs = _form.find('input')

                if ( _form.hasClass('edit')) return

                _form.addClass('edit')
                _inputs.attr('disabled', false)
                _this.text('Сохранить изменения').removeClass('js-change-personality').attr('type', 'submit')
            })
            .on('click', '.js-cancel-personality', function() {
                var _this = $(this)
                var _form = _this.parents('form')
                var _submitBtn = _this.siblings('.btn')
                var _formFieldError = $('.form__field.field-error')
                var _inputs = _form.find('input')

                _form.removeClass('edit')
                _formFieldError.removeClass('field-error')
                _inputs.attr('disabled', true)
                _submitBtn.text('Изменить данные').addClass('js-change-personality').attr('type', 'button')

            })

            

        if (hash === '' || hash === '#applications') {
            $('.js-tabs-link')[0].click()
        } else {
            $('.js-tabs-link')[1].click()
        }
    }        
    
})