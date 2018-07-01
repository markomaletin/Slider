jQuery(document).ready(function () {

    var postolje = $(".slike");
    var slike = $(".slike > img");
    var broj_slika= slike.length;
    //console.log(broj_slika);
    var trenutna=0;
    var loop = setInterval(pomeri,4000);

    $("#napred").css('top', postolje.offset().top +(postolje.children().height()/2)- 40 +'px');
    $("#nazad").css('top', postolje.offset().top +(postolje.children().height()/2)- 40 +'px');


    function pomeri() {


        if ((broj_slika-1)===trenutna)
        {
            postolje.css("left","0vw","width");

            var pom = $(".slike").children().last().clone();
            $(".slike").children().last().remove();
            postolje.prepend(pom);

            trenutna=1;
            postolje.animate({
                left : "-=100vw"
            },1000);
        }

        else
        {

            trenutna++;
            postolje.animate({

                 left : "-=100vw"
                },1000);

        }

        console.log(trenutna)

    }

    $(window).on("resize", function () {
        $("#napred").css('top', postolje.offset().top +(postolje.children().height()/2)- 40 +'px');
        $("#nazad").css('top', postolje.offset().top +(postolje.children().height()/2)- 40 +'px');
    });

    $("#napred>img").click(function () {
        clearInterval(loop);
        pomeri();
        loop = setInterval(pomeri,4000);
    });

    $("#nazad>img").click(function () {

        clearInterval(loop);

        if (trenutna>0) {

            trenutna--;
            postolje.animate({
                left: "+=100vw"
            }, 1000);
        }
        else
        {
            var prva = postolje.children().first().clone();
            postolje.children().first().remove();
            postolje.append(prva);
            trenutna = broj_slika - 2;
            postolje.css("left","-"+(broj_slika-1)*100+"vw");

            postolje.animate({
                left : "+=100vw"
            },1000);

        }

        console.log(trenutna);

        loop = setInterval(pomeri,4000);


    });

    var slider_btn = $("#slider_btn");

    var br=0;
    slider_btn.click(function () {
        $("#slider").slideToggle();
        br++;
        if (br === 1)
        {
            $(this).css("margin-top","8vh");
            $(this).children().first().css("-webkit-transform", "rotate(180deg)",
            "-moz-transform", "rotate(180deg)",
            "transform", "rotate(180deg)");
        }
        else
        {
            $(this).css("margin-top","0vh");
            $(this).children().first().css("-webkit-transform", "rotate(0deg)",
                "-moz-transform", "rotate(0deg)",
                "transform", "rotate(0deg)");
            br=0;
        }
    });




});

