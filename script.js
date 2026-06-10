let xp = localStorage.getItem("xp") || 0;
let level = localStorage.getItem("level") || 1;
let coins = localStorage.getItem("coins") || 0;
let streak = localStorage.getItem("streak") || 0;

function addXP() {

    xp = Number(xp) + 20;
    coins = Number(coins) + 5;
    streak = Number(streak) + 1;

    if (xp >= 100) {
        level++;
        xp = 0;
    }

    if (level >= 5) {
        document.getElementById("achievement").innerHTML =
            "🏆 Level 5 Hero";
    }

    if (level >= 10){
        document.getElementById("achievement").innerHTML="xp Master";
    }

    localStorage.setItem("xp", xp);
    localStorage.setItem("level", level);
    localStorage.setItem("coins", coins);
    localStorage.setItem("streak", streak);

    document.getElementById("xp").innerHTML = xp;
    document.getElementById("level").innerHTML = level;
    document.getElementById("coins").innerHTML = coins;
    document.getElementById("streak").innerHTML = streak;
    document.getElementById("xpBar").value = xp;

    document.getElementById("xpBar").value = xp;
}

function resetGame() {

    xp = 0;
    level = 1;
    coins = 0;
    streak = 0;

    localStorage.setItem("xp", xp);
    localStorage.setItem("level", level);
    localStorage.setItem("coins", coins);
    localStorage.setItem("streak", streak);

    document.getElementById("xp").innerHTML = xp;
    document.getElementById("level").innerHTML = level;
    document.getElementById("coins").innerHTML = coins;
    document.getElementById("streak").innerHTML = streak;
    document.getElementById("xpBar").value = xp;

    document.getElementById("achievement").innerHTML =
        "No Achievements Yet";
}

function darkMode() {
    document.body.classList.toggle("dark");
}