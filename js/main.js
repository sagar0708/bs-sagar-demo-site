$(document).ready(function(){
    $('.test-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        dots:true,
        prevArrow: null,
        nextArrow: null,
    });
    $('#submit_btn').on("click",function(event){
        event.preventDefault();
        let b_time = $("#book_time").val();
        let b_date = $("#book_date").val();
        let num_of_p = $("#num_of_people").val();
        alert("Your Booking Time : " + b_time + "\n" +
            "Your Booikng Date : " + b_date + "\n" + 
            "Number of People : " + num_of_p);
    })
});
function loader(){
    // PAGE IS FULLY LOADED  
    // FADE OUT YOUR OVERLAYING DIV
    $('.loader').removeClass("d-block");
    $('.loader').addClass("d-none");
    $('body').addClass("d-block");
    $('body').fadeIn(1000);
    $('body').removeClass("d-none");
 }