let container = document.createElement("div"),
    h1 = document.createElement("h1");
    h1.textContent = "Etch-A-Sketch",
    btnDiv = document.createElement("div"),
    blackBtn = document.createElement("button"),
    blackBtn.textContent = "BLACK",
    colorBtn = document.createElement("button");
    colorBtn.textContent = "COLORS",
    grayBtn = document.createElement("button");
    grayBtn.textContent = "GRAY",
    resizeBtn = document.createElement("button");
    resizeBtn.textContent = "CLEAR AND RESIZE",
    container.id = "container";
    btnDiv.classList.add("buttons");
    btnDiv.append(grayBtn, blackBtn, colorBtn, resizeBtn);
    document.body.append(h1, btnDiv);
  
  function createGrid(gridSize) {
    for (let i = 0; i < gridSize * gridSize; i++) {
      let pixel = document.createElement("div");
      pixel.classList.add("pixel");
      pixel.style.border = "1px solid rgb(86, 21, 172)";
      container.appendChild(pixel);
      container.style.border = "1px solid indigo";
      document.body.appendChild(container);
    }
      container.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;
      //container.style.gridTemplateRows = `repeat(${gridSize}, auto)`;
  } createGrid(16);

  function colorGray(){
    let pixels = document.querySelectorAll(".pixel");
    grayBtn.addEventListener("click", () =>{
      pixels.forEach(pixel => 
          pixel.addEventListener("mouseover", () =>{
          let randomGray = Math.floor(Math.random() * 255);
          pixel.style.backgroundColor = `rgb(${randomGray}, ${randomGray}, ${randomGray})`;
        })
      );
    })
  } colorGray();

  function colorBlack() {
    let pixels = document.querySelectorAll(".pixel");
    blackBtn.addEventListener("click", () => {
      pixels.forEach((pixel) =>
        pixel.addEventListener("mouseover", () => {
          pixel.style.backgroundColor = "black";
        })
      );
    });
  } colorBlack();

  function colors() {
    let pixels = document.querySelectorAll(".pixel");
    colorBtn.addEventListener("click", () => {
      pixels.forEach((pixel) =>
        pixel.addEventListener("mouseover", () => {
          let randomR = Math.floor(Math.random() * 255);
          let randomG = Math.floor(Math.random() * 255);
          let randomB = Math.floor(Math.random() * 255);
          pixel.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
        })
      );
    });
  }
  colors();

  function clear(){
    container.innerHTML = "";
  } 

function resize(){
    resizeBtn.addEventListener("click", () =>{
    gridSize = prompt(
    "How many grids would you like? Please enter a value of not more than 50.", 50);
    if (gridSize > 50 || gridSize === null || gridSize < 1) {
      clear();
      createGrid(16);
      colorGray();
      colorBlack();
      colors();
    } else {
      clear();
      createGrid(gridSize);
      colorGray();
      colorBlack();
      colors();
    }
})
  } resize();