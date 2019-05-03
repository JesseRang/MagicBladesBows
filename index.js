let wins = 0;
let losses = 0;
let ties = 0;
let result = "tie"

function computersMove() 
{
    let randInt = Math.floor(Math.random()*3)
    if (randInt === 0)
    {
        return "sward";
    } else if (randInt === 1) {
        return "bow";
    } else {
        return "magic";
    }
}

function onClickSward() 
{
    let cm = computersMove();
    if (cm === "sward")
    {
        // tie
        updateScore("tie");
        result = "tie";
        alert("The enemy army has sent infantry - This will be a long battle.");
    }
    if (cm === "magic")
    {
        // lose
        updateScore("lose");
        result = "lose";
        alert("The enemy army has sent mages - Our troops have been annihilated!");
    }
    if (cm === "bow")
    {
        // win
        updateScore("win");
        result = "win";
        alert("The enemy army has sent archers - We're mowing them down!");
    }
}

function onClickMagic() {
    let cm = computersMove();
    if (cm === "sward")
    {
        // win
        updateScore("win");
        result = "win";
        alert("The enemy army has sent infantry - We're blowing them to pieces!");
    }
    if (cm === "magic")
    {
        // tie
        updateScore("tie");
        result = "tie";
        alert("The enemy army has sent mages - We're at a stalemate.");
    }
    if (cm === "bow")
    {
        // lose
        updateScore("lose");
        result = "lose";
        alert("The enemy army has sent archers - Their shooting us down!");
    }
}



function onClickBow() 
{
    let cm = computersMove();
    if (cm === "sward")
    {
        // lose
        updateScore("lose");
        result = "lose";
        alert("The enemy army has sent infantry - They're descimating our ranks!");
    }
    if (cm === "magic")
    {
        // win
        updateScore("win");
        result = "win";
        alert("The enemy army has sent mages - We've pinned them down!");
    }
    if (cm === "bow")
    {
        // tie
        updateScore("tie");
        result = "tie";
        alert("The enemy army has sent archers - We can't get within range.");
    }
}

function onClickHero()
{
    let cm = computersMove();
    if (cm === "sward")
    {
        // win
        updateScore("win");
        result = "win";
        alert("The Hero has arrived! We're saved!")
    }
    if (cm === "bow")
    {
        // win
        updateScore("win");
        result = "win";
        alert("The Hero has arrived! We're saved!")
    }
    if (cm === "magic")
    {
        // win
        updateScore("win");
        result = "win";
        alert("The Hero has arrived! We're saved!")
    }
}

function updateScore(result) 
{

    if (result === "win")
    {
        wins = wins + 1;
        document.getElementById("wins").innerHTML = wins;
    }

    if (result === "lose")
    {
        losses = losses + 1;
        document.getElementById("losses").innerHTML = losses;
    }

    if (result === "tie")
    {
        ties = ties + 1;
        document.getElementById("ties").innerHTML = ties;
    }
}

document.getElementById("sward").onclick = onClickSward;
console.log(document.getElementById("sward"))
document.getElementById("bow").onclick = onClickBow;
document.getElementById("magic").onclick = onClickMagic;
document.getElementById("hero").onclick = onClickHero;
console.log(document.getElementById("hero"))