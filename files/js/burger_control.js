$(document).on("click", ".burger-btn", function() {
    //.btn_triggerをクリックすると
    $(".burger-btn").toggleClass("close"); //.btn_triggerにcloseクラスを付与(ボタンのアニメーション)
    $(".nav-wrapper").toggleClass("fade"); //.nav-wrapperに
    $("body").toggleClass("noscroll"); //bodyにnoscrollクラスを付与(スクロールを固定)
});

$(document).on("click", ".header .nav-link", function() {
    console.log(".burger-btn is clicked ");
    //.btn_triggerをクリックすると
    $(".burger-btn").toggleClass("close"); //.btn_triggerにcloseクラスを付与(ボタンのアニメーション)
    $(".nav-wrapper").toggleClass("fade"); //.nav-wrapperに
    $("body").toggleClass("noscroll"); //bodyにnoscrollクラスを付与(スクロールを固定)
});