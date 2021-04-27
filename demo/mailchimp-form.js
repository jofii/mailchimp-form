$(function () {
    // sub form
    var subdata = {
        title: '10% OFF for subscribers',
        subtitle: 'Subscribe to our newsletter for discounts, new arrivals and more about GladGrid at first time!',
        select: {
            info: 'What you are interested in:',
            sinfo: 'We really care!',
            value1: 'All Categories',
            value2: 'Furnitures',
            value3: 'Mattress',
            value4: 'Beddings',
            value5: 'Decorations',
        },
        group:['group[84308][32]','group[84308][64]','group[84308][128]','group[84308][256]','group[84308][512]'],
        privacy: 'I agree to the <a href="https://gladgrid.com/privacy-policy" class="text-decoration-underline">Privacy Policy</a> and <a href="https://gladgrid.com/terms-conditions-of-service/" class="text-decoration-underline">Terms & Conditions</a>',
        success_info: {
            title: 'Thank you for signing up!',
            subtitle: 'Let\'s get in touch!',
            ps: 'Claim your discount and begin shopping:',
        },
        sibtitle: "Get Welcome Offer",
        code: "LIVEGREAT",
        msg: {
            agree: 'Your not agree',
            sending: 'Sending...',
            empty: 'You must write an e-mail.',
            error: 'Sorry! Please fill in a correct email format.',
            copy: 'Copied successfully!'
        }
    }

    var box_success = '<div class="box-success"><div class="info"><h4 class="title">' + subdata.success_info.title + '</h4><p class="subtitle">' + subdata.success_info.subtitle + '</p></div><div class="code-info"><p>' + subdata.success_info.ps + '</p><div class="code-num"><span>' + subdata.code + '<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="copy" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-copy fa-w-14 fa-3x"><path fill="currentColor" d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM352 32.491a15.88 15.88 0 0 1 7.431 4.195l51.882 51.883A15.885 15.885 0 0 1 415.508 96H352V32.491zM288 464c0 8.822-7.178 16-16 16H48c-8.822 0-16-7.178-16-16V144c0-8.822 7.178-16 16-16h80v240c0 26.51 21.49 48 48 48h112v48zm128-96c0 8.822-7.178 16-16 16H176c-8.822 0-16-7.178-16-16V48c0-8.822 7.178-16 16-16h144v72c0 13.2 10.8 24 24 24h72v240z" class=""></path></svg></span><textarea readonly="readonly" rows="1">' + subdata.code + '</textarea></div></div></div>'

    var success_copy = '<i class="close css-icon css-icon-xs css-icon-close"></i><div class="code-num">' + subdata.code + '<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="copy" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-copy fa-w-14 fa-3x"><path fill="currentColor" d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM352 32.491a15.88 15.88 0 0 1 7.431 4.195l51.882 51.883A15.885 15.885 0 0 1 415.508 96H352V32.491zM288 464c0 8.822-7.178 16-16 16H48c-8.822 0-16-7.178-16-16V144c0-8.822 7.178-16 16-16h80v240c0 26.51 21.49 48 48 48h112v48zm128-96c0 8.822-7.178 16-16 16H176c-8.822 0-16-7.178-16-16V48c0-8.822 7.178-16 16-16h144v72c0 13.2 10.8 24 24 24h72v240z" class=""></path></svg></div><textarea readonly="readonly" rows="1">' + subdata.code + '</textarea>'

    $('body').append('<div class="fixed-subscribe-box-back active bg-action text-black"><span class="open-fixed">' + subdata.sibtitle + '</span></div><div class="fixed-subscribe-box"><div class="close"><i class="css-icon css-icon-close"></i></div><div class="box-form"><div class="cont-top"><div class="title">' + subdata.title + '</div><div class="subtitle">' + subdata.subtitle + '</div></div><div id="fixed-sub-mailchimp"><form><div class="group-input"><input class="email" placeholder="Email" name="EMAIL" type="email" value=""><button type="button" class="submit btn-send">Get My Offer</button></div><div class="msg-alert mb-0"></div><label class="privacy-info d-flex align-items-center font-size-small"><input class="privacy-checkbox" name="privacy-checkbox" type="checkbox" checked /><span class="ml-2">' + subdata.privacy + '</span></label><div class="select-type-box"><div class="info">' + subdata.select.info + '</div><div class="sinfo">' + subdata.select.sinfo + '</div><div class="select-radio"><label><input class="select-type" name="' + subdata.group[0] + '" type="checkbox" value="' + subdata.select.value1 + '" checked /><span>' + subdata.select.value1 + '</span></label><label><input class="select-type" name="' + subdata.group[1] + '" type="checkbox" value="' + subdata.select.value2 + '" /><span>' + subdata.select.value2 + '</span></label><label><input class="select-type" name="' + subdata.group[2] + '" type="checkbox" value="' + subdata.select.value3 + '" /><span>' + subdata.select.value3 + '</span></label><label><input class="select-type" name="' + subdata.group[3] + '" type="checkbox" value="' + subdata.select.value4 + '" /><span>' + subdata.select.value4 + '</span></label><label><input class="select-type" name="' + subdata.group[4] + '" type="checkbox" value="' + subdata.select.value5 + '" /><span>' + subdata.select.value5 + '</span></label></div></div></form></div></div>' + box_success + '</div>');

    var $fixed_subscribe_box = $('.fixed-subscribe-box')
    var $fixed_subscribe_box_back = $('.fixed-subscribe-box-back')
    if (getCookie('open-sub') !== '1') {
        setTimeout(function () {
            $fixed_subscribe_box_back.removeClass('active');
            $fixed_subscribe_box.addClass('active');
            SetCookie('open-sub', '1', 'gladgrid.com')
        }, 15000)
    }
    if (getCookie('sub-code')) {
        $fixed_subscribe_box_back.html(success_copy)
        $fixed_subscribe_box.addClass('success')
    }
    $fixed_subscribe_box_back.on('click', '.open-fixed', function () {
        $fixed_subscribe_box_back.removeClass('active')
        $fixed_subscribe_box.addClass('active')
    })
    $fixed_subscribe_box_back.on('click', '.code-num', function () {
        $fixed_subscribe_box_back.find('textarea').select();
        document.execCommand('Copy');
        $fixed_subscribe_box_back.html('<i class="close css-icon css-icon-xs css-icon-close"></i><span>' + subdata.msg.copy + '</span>')
    })
    $fixed_subscribe_box_back.on('click', '.close', function () {
        $fixed_subscribe_box_back.removeClass('active')
    })
    $fixed_subscribe_box.on('click', '.close', function () {
        console.log('close')
        $(this).parents('.fixed-subscribe-box').removeClass('active');
        $fixed_subscribe_box_back.addClass('active')
    })
    $fixed_subscribe_box.on('focus', '[name="select-type"]', function () {
        console.log($(this).val())
        $fixed_subscribe_box.find('[name="SUB_SITE"]').attr('value', $(this).val())
    })

    $fixed_subscribe_box.on('click', '.code-num', function () {
        $(this).find('textarea').select();
        document.execCommand('Copy');
        $(this).next('.code-copy-msg').remove();
        $(this).parents('.code-info').append('<div class="code-copy-msg text-success mt-2">' + subdata.msg.copy + '</div>')
    })

    $fixed_subscribe_box.on('click', '.btn-send', function () {
        var run = false;
        var emailReg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
        var $fixed_sub_mailchimp = $(this).parents('#fixed-sub-mailchimp')
        var $email = $fixed_sub_mailchimp.find('.email')
        $fixed_sub_mailchimp.find('.msg-alert').removeClass('text-danger').html('')
        if ($email.val() == '') {
            $fixed_sub_mailchimp.find('.msg-alert').addClass('text-danger').html(subdata.msg.empty)
            return false;
        }
        if (!emailReg.test($email.val())) {
            $fixed_sub_mailchimp.find('.msg-alert').addClass('text-danger').html(subdata.msg.error)
            return false;
        }
        if ($fixed_sub_mailchimp.find('.privacy-checkbox').is(':checked') == false) {
            // $fixed_sub_mailchimp.find('.msg-alert').addClass('text-danger').html(subdata.msg.agree)
            $fixed_sub_mailchimp.find('.privacy-info').addClass('text-danger')
            return false;
        }
        if (run == false) {
            $.ajax({
                type: 'POST',
                url: 'https://gladgrid.us2.list-manage.com/subscribe/post?u=dcbd7a8e8ba96a18862769c59&id=48e7b3249a&c=?',
                data: $fixed_sub_mailchimp.find('form').serialize(),
                cache: false,
                dataType: 'json',
                contentType: "application/json; charset=utf-8",
                error: function (error) {
                    // console.log('Error');
                    // console.log(error.name);
                    // $fixed_sub_mailchimp.find('.msg-alert').addClass('text-danger').html(error)
                    $fixed_subscribe_box.addClass('success')
                    $fixed_subscribe_box_back.html(success_copy)
                    SetCookie('sub-code', subdata.code, 'gladgrid.com')
                },
                success: function (res) {
                    // console.log(res.name);
                    $fixed_subscribe_box.addClass('success')
                    $fixed_subscribe_box_back.html(success_copy)
                    SetCookie('sub-code', subdata.code, 'gladgrid.com')
                }
            });
        }
    })
})
