let currMoleTile;
let currPlantTile;
let currPlanttTile;
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
}

function setGame() {
    // Set up the grid in HTML
    for (let i = 0; i < 16; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setMole, 1000); // Every 1 second call setMole
    setInterval(setPlant, 2000); // Every 2 seconds call setPlant
    setInterval(setPlantt, 2500); // Every 2.5 seconds call setPlantt
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 16);
    return num.toString();
}

function setMole() {
    if (gameOver) {
        return;
    }
    if (currMoleTile) {
        currMoleTile.innerHTML = "";
    }
    let mole = document.createElement("img");
    mole.src = "./monty-mole.png";

    let num;
    do {
        num = getRandomTile();
    } while (currPlantTile && currPlantTile.id == num || currPlanttTile && currPlanttTile.id == num);

    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setPlant() {
    if (gameOver) {
        return;
    }
    if (currPlantTile) {
        currPlantTile.innerHTML = "";
    }
    let plant = document.createElement("img");
    plant.src = "./piranha-plant.png";

    let num;
    do {
        num = getRandomTile();
    } while (currMoleTile && currMoleTile.id == num || currPlanttTile && currPlanttTile.id == num);

    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function setPlantt() {
    if (gameOver) {
        return;
    }
    if (currPlanttTile) {
        currPlanttTile.innerHTML = "";
    }
    let plant = document.createElement("img");
    plant.src = "./piranha-plant.png";

    let num;
    do {
        num = getRandomTile();
    } while (currMoleTile && currMoleTile.id == num || currPlantTile && currPlantTile.id == num);

    currPlanttTile = document.getElementById(num);
    currPlanttTile.appendChild(plant);
}

function selectTile() {
    if (gameOver) {
        return;
    }
    if (this == currMoleTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString(); // Update score in HTML
    } else if (this == currPlantTile || this == currPlanttTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString(); // Update score in HTML
        gameOver = true;
    }
}
