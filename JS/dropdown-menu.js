$('.selector .value').click(function()
{
    $(this).parent().parent().toggleClass('active')
})

$('.selector .items-list .item').click(function()
{
    $(this).parent().parent().children('.select-item').children('.value').html($(this).html() + '<div class="clear"></div>')
    $(this).parent().parent().attr('value', $(this).attr('value'))
    $(this).parent().parent().removeClass('active')
    $(this).parent().children('.select').removeClass('select')
    $(this).addClass('select')
})

$('.selector .clear').click(function()
{
    $(this).parent().parent().attr('value', '#')
    $(this).parent().parent().removeClass('active')
    $(this).parent().children('.value').html($(this).parent().parent().attr('placeholder'))
    $(this).parent().parent().children('.items-list').children('.item').removeClass('select')
})

$('.blackout-screen').click(function()
{
    $('.selector.active').removeClass('active')
})