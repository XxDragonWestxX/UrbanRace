$('.item').click(function()
{
    console.log("by")
    $(this).parent().parent('.dropdown').child('.lounch-container').child('.louncher').removeAttr('checked')
})