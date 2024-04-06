class App {
  constructor(element,size){
    this.grid = this.initGrid();
    this.size = size;
    this.element = element;
    this.flip = this.flip.bind(this);
    this.element.addEventListener('click', this.flip);

    for(let row=0;row< size; row++){
      for(let col=0;col< size; col++){
        let div = document.createElement('div');
        div.style.width = (250/size)+'px';
        div.style.height = (250/size)+'px';
        div.dataset.location = JSON.stringify({r: row,c: col});
        element.appendChild(div);
      }
    }
  }
  
  render(r, c, delay){
    let div = this.element.children[r * this.size + c];
    div.className = this.grid[r][c] ? ('flip' + (delay ? ' flip-delay':'')): '';
  }
  
  initGrid(){
    const grid = Array(7);
    for(let i=0;i<grid.length;i++){
      grid[i] = [false, false, false, false, false,false, false];
    }
    return grid;
  }
  
  flip(evt){
    const locationJSON = evt.target.dataset.location;
    if(!locationJSON){
      return;
    }
    const location = JSON.parse(locationJSON);
    const i = location.r;
    const j = location.c;
    let dirs = [[0,0],[-1,-1],[-1,0]];
    if(this.grid[i][j])
      dirs = [[0,0],[1,0],[1,1],[1,-1]];
    for(let d of dirs){
      let ni = i+d[0];
      let nj = j+d[1];
      if(ni>=0 && ni < this.size && nj>=0 && nj < this.size){
        this.grid[ni][nj] = !this.grid[ni][nj];
        this.render(ni, nj, true);
      }
    }
  }
}

new App(document.querySelector('#container'), 7);

function Help(){
  if(document.getElementById("help").style.display === "none"){
    document.getElementById("main").style.display = "none";
    document.getElementById("stats").style.display = "none";
    document.getElementById("help").style.display = "block";
  }
  else{
    document.getElementById("main").style.display = "block";
    document.getElementById("help").style.display = "none";
  }
}

function Stats(){
  if(document.getElementById("stats").style.display === "none"){
    document.getElementById("main").style.display = "none";
    document.getElementById("help").style.display = "none";
    document.getElementById("stats").style.display = "block";
  }
  else{
    document.getElementById("main").style.display = "block";
    document.getElementById("stats").style.display = "none";
  }
}