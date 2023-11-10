var grid = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
const showOnScreen = () =>{
  console.log(grid);
  const cells = document.getElementsByClassName("grid-cell");
  for(let i = 0;i < 4; i++){
    for(let j = 0;j < 4; j++){
      cells[4*i + j].innerHTML = "";
      if(grid[i][j] != 0){
        cells[4*i + j].innerHTML = grid[i][j];
      }
    }
  }  
}
const showRandomValues = () =>{
  let x = Math.floor(16 * Math.random());
  let y = Math.floor(16 * Math.random());
  while(x == y){
    y = Math.floor(16 * Math.random());
  }
  grid[Math.floor(x/4)][x % 4] = 2;
  grid[Math.floor(y/4)][y % 4] = 2;
  showOnScreen();
};
const showRandomValue = () =>{
  let x = Math.floor(16 * Math.random());
  while(grid[Math.floor(x/4)][x % 4])
    x = Math.floor(16 * Math.random());
    grid[Math.floor(x/4)][x % 4] = 2;
    showOnScreen();
}
const moveCells = () =>{
  document.addEventListener('keydown', (e) => {
    if(e.key === "ArrowUp") moveUp();
    if(e.key === "ArrowDown") moveDown();
    if(e.key === "ArrowLeft") moveLeft();
    if(e.key === "ArrowRight") moveRight();
  })
}
const moveUp = () =>{
  for(let c = 0;c < 4; c++){
    let row = 0, val = 0;
    for(let r = 0;r < 4; r++){
      let cur_num = grid[r][c];
      if(cur_num == 0)
        continue;
      else if(val == 0){
        val = grid[r][c];
        grid[r][c] = 0;  
        grid[row][c] = val;
      }
      else if(cur_num == val){
        grid[row++][c] = 2 * val;
        val = 0;
        grid[r][c] = 0;
      }
      else{
        row++;
        grid[r][c] = 0;
        grid[row][c] = cur_num;
        val = cur_num;
      }
    }
  }
  console.log(grid);
  showRandomValue();
}
const moveDown = () =>{
  for(let c = 0;c < 4; c++){
    let row = 3, val = 0;
    for(let r = 3;r >= 0; r--){
      let cur_num = grid[r][c];
      if(cur_num == 0)
        continue;
      else if(val == 0){
        val = grid[r][c];
        grid[r][c] = 0;  
        grid[row][c] = val;
      }
      else if(cur_num == val){
        grid[row--][c] = 2 * val;
        val = 0;
        grid[r][c] = 0;
      }
      else{
        row--;
        grid[r][c] = 0;
        grid[row][c] = cur_num;
        val = cur_num;
      }
    }
  }
  console.log(grid);
  showRandomValue();
}
const moveLeft = () =>{
  for(let r = 0;r < 4; r++){
    let col = 0, val = 0;
    for(let c = 0;c < 4; c++){
      let cur_num = grid[r][c];
      if(cur_num == 0)
        continue;
      else if(val == 0){
        val = grid[r][c];
        grid[r][c] = 0;  
        grid[r][col] = val;
      }
      else if(cur_num == val){
        grid[r][col++] = 2 * val;
        val = 0;
        grid[r][c] = 0;
      }
      else{
        col++;
        grid[r][c] = 0;
        grid[r][col] = cur_num;
        val = cur_num;
      }
    }
  }
  console.log(grid);
  showRandomValue();
}
const moveRight = () =>{
  for(let r = 0;r < 4; r++){
    let col = 3, val = 0;
    for(let c = 3;c >= 0; c--){
      let cur_num = grid[r][c];
      if(cur_num == 0)
        continue;
      else if(val == 0){
        val = grid[r][c];
        grid[r][c] = 0;  
        grid[r][col] = val;
      }
      else if(cur_num == val){
        grid[r][col--] = 2 * val;
        val = 0;
        grid[r][c] = 0;
      }
      else{
        col--;
        grid[r][c] = 0;
        grid[r][col] = cur_num;
        val = cur_num;
      }
    }
  }
  console.log(grid);
  showRandomValue();
}
const game = () =>{
  showRandomValues(); 
  moveCells();
  
}
game();