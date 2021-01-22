$(document).ready(function(){
  $(".abstract").click(function(){
    $(".abstract").css("visibility","visible");
    $("span.abstract").css("visibility","visible");
  });

  $(".prologue").click(function(){
    $(".prologue").css("visibility","visible");
    // $("span.prologue").css("visibility","visible");
  });

  $(".ch2").click(function(){
    $(".ch2").css("visibility","visible");
    // $("span.prologue").css("visibility","visible");
  });

  $(".ch3").click(function(){
    $(".ch3").css("visibility","visible");
    // $("span.prologue").css("visibility","visible");
  });

  $(".Epilogue").click(function(){
    $(".Epilogue").css("visibility","visible");
    // $("span.prologue").css("visibility","visible");
  });

  $(".References").click(function(){
    $(".References").css("visibility","visible");
    // $("span.prologue").css("visibility","visible");
  });



  $("#footnote").click(function(){
    $(".footnote").css("visibility","visible");
    $("#footnote-1").css("visibility","visible");
  });

  $("#footnote_2").click(function(){
    $(".footnote").css("visibility","visible");
    $("#footnote-1").css("display","none");
    $("#footnote-2").css("visibility","visible");
  });

});


$("a").click(function(){

	console.log("clicked: " + $(this).attr('id'));

	showContent($(this).attr('id'))
});

function showContent(id) {
	// hide all content sections
	// $(".portfolio-item").hide();

    //console.log( $("#content-" + id).offset().top )
	// show the one with  content-[id]
	$("#content-" + id).show();

    /* BVB fixed this scroll */
	$([document.documentElement, document.body]).animate({
        scrollTop: $("#content-" + id).offset().top-100},
			 'slow');

}

//
//
// $("#dot").on("click",function(){
//   $(".thesis").show();
// });
//
// function showThesis() {
//   $(".thesis").show();
// }
