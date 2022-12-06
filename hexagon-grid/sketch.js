let grid = [];
let grid2 = [];
let grid3 = [];
let a;
let b;

function setup() {
  // put setup code here
  createCanvas(500, 500)
  for(let i = 0; i < 5; i++){
    grid[i] = []
    for(let j = 0; j < 5; j++){
      grid[i][j] = new hexagon(i, j)

    }
    // grid.push(new hexagon(i, 45))
    // grid2.push(new hexagon(i + 0.5, 90))
    
  }

  // ROW 0 AT 45 ROW 2 AT 2 * 45

}

function draw() {
  // put drawing code here
  background(51)
  for(let i = 0; i < 5; i++){
    for(let j = 0; j < 5; j++){
      grid[i][j].draw()
      // grid[3][6].setColor('rgba(0, 255, 0, .5)')
    }
  }

}