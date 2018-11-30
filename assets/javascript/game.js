
$(document).ready(function () {
    var ruby = Math.floor((Math.random() * 12) + 1);
    var diamond = Math.floor((Math.random() * 12) + 1);
    var yellowDiamond = Math.floor((Math.random() * 12) + 1);
    var emerald = Math.floor((Math.random() * 12) + 1);
    var targetNum = Math.floor((Math.random() * 100) + 1);
    $("#random-number").text(targetNum);
    
    var loss = 0;
    var wins = 0;
    var scoreboard = 0;
    
    
    $("#ruby").on("click", function () {
        
        scoreboard += ruby;
        $("#total").text(scoreboard);
        if (scoreboard === targetNum) {
            wins++
            resetRandom(targetNum);
            $("#wins").text(wins);
        } else if (scoreboard > targetNum) {
            loss++;
            console.log(loss);
            resetRandom(targetNum);
            $("#losses").text(loss);
        }
    });

    $("#diamond").on("click", function () {
        
        scoreboard += diamond;
        $("#total").text(scoreboard);
        if (scoreboard === targetNum) {
            wins++
            resetRandom(targetNum);
            $("#wins").text(wins);
        } else if (scoreboard > targetNum) {
            loss++;
            console.log(loss);
            resetRandom(targetNum);
            $("#losses").text(loss);
        }
    });

    $("#yellow-diamond").on("click", function () {
        
        scoreboard += yellowDiamond;
        $("#total").text(scoreboard);
        if (scoreboard === targetNum) {
            wins++
            resetRandom(targetNum);
            $("#wins").text(wins);
        } else if (scoreboard > targetNum) {
            loss++;
            console.log(loss);
            resetRandom(targetNum);
            $("#losses").text(loss);
        }
    });

    $("#emerald").on("click", function () {
        
        scoreboard += emerald;
        $("#total").text(scoreboard);
        if (scoreboard === targetNum) {
            wins++
            resetRandom(targetNum);
            $("#wins").text(wins);
        } else if (scoreboard > targetNum) {
            loss++;
            console.log(loss);
            resetRandom(targetNum);
            $("#losses").text(loss);
        }
    });


    function resetRandom(num) {
        num = Math.floor((Math.random() * 100) + 1);
        scoreboard = 0;
        $("#total").text(scoreboard);
        $("#random-number").text(num);

        ruby = Math.floor((Math.random() * 12) + 1);
        diamond = Math.floor((Math.random() * 12) + 1);
        yellowDiamond = Math.floor((Math.random() * 12) + 1);
        emerald = Math.floor((Math.random() * 12) + 1);
        targetNum = Math.floor((Math.random() * 100) + 1);


        $("#random-number").text(targetNum);
    }

});