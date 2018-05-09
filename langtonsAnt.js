let grid;
let cols;
let rows;
let resolution = 20;

//function to create a grid, defined cols and rows.
let createGrid = function(cols, rows) {
        let arr2d = new Array(cols);
        for (let i = 0; i < arr2d.length; i++) {
            arr2d[i] = new Array(rows);
        }
        return arr2d;
    }
    //create ant object including direction, position
let ant = {
    steps: 0,
    xpos: 10,
    ypos: 10,
    dir: 0, //0 up, 1 right, 2 down, 3 left
    checkGrid: function() {
        let x = ant.xpos;
        let y = ant.ypos;
        if (grid[x][y] == 0) { //check if white change dir
            console.log('white');
            grid[x][y] = 1;
            if (ant.dir < 3) {
                ant.dir++;
            } else {
                ant.dir = 0;
            };
        } else if (grid[x][y] == 1) { //check if black change dir
            console.log('black')
            grid[x][y] = 0;
            if (ant.dir > 0) {
                ant.dir--;
            } else {
                ant.dir = 3;
            };
        }
    },
    moveAnt: function() {
        // move ant in direction facing
        switch (ant.dir) {
            case 0:
                ant.ypos--;
                break;
            case 1:
                ant.xpos++;
                break;
            case 2:
                ant.ypos++;
                break;
            case 3:
                ant.xpos--;
                break;
        }
        //check current grid space
        ant.checkGrid();
        //increse step count
        ant.steps++;
//         console.log(ant.steps);
    }

}

function setup() {
    createCanvas(600, 600);
    cols = width / resolution;
    rows = height / resolution;
    grid = createGrid(cols, rows);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = 0;
        }
    }
}

function draw() {
    background(0);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            x = i * resolution;
            y = j * resolution;
            if (grid[i][j] == 1) {
                fill(0);
            } else if (grid[i][j] == 0) {
                fill(255);
            }
            rect(x, y, resolution - 1, resolution - 1);
        }
    }
}

setInterval(ant.moveAnt, 100);
