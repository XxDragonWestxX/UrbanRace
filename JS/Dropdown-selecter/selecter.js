
$('.dropdown .item').click(function () {
    $(this).parent().parent().children('.lounch-container').children('.louncher').prop('checked', false)
    $(this).parent().parent().children('.lounch-container').children('.select-container').children('.select').html($(this).html())
    $(this).parent().children('.select').removeClass('select')
    $(this).addClass('select')
})

$('.dropdown .blackscreen').click(function () {
    $(this).parent().children('.lounch-container').children('.louncher').prop('checked', false)
})

$('.dropdown .clear').click(function () {
    $(this).parent().children('.select').html('')
    $(this).parent().parent().children('.louncher').prop('checked', false)
    $(this).parent().parent().parent().children('.item-list').children('.select').removeClass('select')
})