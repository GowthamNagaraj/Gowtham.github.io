$(document).ready(function(){
    $("#headname-0").click(function() {
        $(".card, #card0").show();
        $("#card1, #card2").hide();
    });
    $("#headname-1").click(function() {
        $(".card, #card1").show();
        $("#card0, #card2").hide();
    });
    $("#headname-2").click(function() {
        $(".card, #card2").show();
        $("#card1, #card0").hide();
    });
    $(".close").click(function() {
        $(".card").hide();
    });
});