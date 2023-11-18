var grid = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
let score = 0;
const bg = {
  2: "#eee4da",
  4: "#eee1c9",
  8: "#f3b27a",
  16: "#f69664",
  32: "#f77c5f",
  64: "#f75f3b",
  128: "#edd073",
  256: "#edd073",
  512: "#eee4da",
  2: "#eee4da",
  2: "#eee4da",
  2: "#eee4da",
}
const colors = {
  2: '#776e65',
  4: '#776e65',
  8: '#f9f6f2',
  16: '#f9f6f2',
  32: '#f9f6f2',
  64: '#f9f6f2',
  128: '#f9f6f2',
  256: '#f9f6f2',
  512: '#f9f6f2'
}
const showOnScreen = () =>{
  const cells = document.getElementsByClassName("grid-cell");
  document.getElementById("score").innerHTML = score;
  for(let i = 0;i < 4; i++){
    for(let j = 0;j < 4; j++){
      cells[4*i + j].innerHTML = "";
      cells[4*i + j].style.backgroundColor = "";
        cells[4*i + j].style.color = "";
      if(grid[i][j] != 0){
        cells[4*i + j].innerHTML = grid[i][j];
        cells[4*i + j].style.backgroundColor = bg[grid[i][j]];
        cells[4*i + j].style.color = colors[grid[i][j]];
        
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
const isGameOver = () => {
  for(let r = 0; r < 4; r++){
    for(let c = 0; c < 4; c++){
      if(grid[r][c] === 0)
        return false;
      if(r < 3 && grid[r][c] === grid[r + 1][c])
        return false;
      if(c < 3 && grid[r][c] === grid[r][c + 1])
      return false;
    }
  }
  return true;
}
const moveCells = () =>{
  document.addEventListener('keydown', function handleKeydown(e){
    gridInStringForm = grid.toString();
    if(e.key === "ArrowUp") moveUp();
    if(e.key === "ArrowDown") moveDown();
    if(e.key === "ArrowLeft") moveLeft();
    if(e.key === "ArrowRight") moveRight();
    console.log(score);
    if(gridInStringForm !== grid.toString())
      showRandomValue();
      if(isGameOver()){
        console.log('gameover');
        document.removeEventListener('keydown', handleKeydown);
      }
  });
  
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
        score += 2 * val;
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
        score += 2 * val;
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
        score += 2 * val;
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
        score += 2 * val;
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
  
}
const game = () =>{
  showRandomValues(); 
  moveCells();
  
}
game();