function generateHTMLForBoardSquares(){
    class BoardSquare{
        constructor(element,color) {
            this.element = element;
            this.setColor(color);
        }
    setColor(color){
        const faceUpElement = this.element.getElementsByClassName('faceup')[0];
        this.color = color;
        faceUpElement.classList.add(color);

     }
    }
    const numberOfSquares = 16;
    let squaresHTML = '';
    
    for (let i = 0; i < numberOfSquares; i++) {
        squaresHTML += `
          <div class="col-3 board-square">
            <div class="face-container">
              <div class="facedown"></div>
              <div class="faceup"></div>
            </div>
          </div>`;
      }
    const boardElement = document.getElementById('gameboard');
    boardElement.innerHTML = squaresHTML;
    console.log('board element');

}
generateHTMLForBoardSquares()