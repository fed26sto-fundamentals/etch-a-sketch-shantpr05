let color = 'Black';
let click = false;
document.addEventListener('DOMContentLoaded', function () {
    createBoard(16); // boards default grid size.

    // only draw when button is clicked 

    document.querySelector('body').addEventListener('click', function (e) {
        if (e.target.tagName != 'BUTTON') {
            click = !click;

            let draw = document.querySelector('#draw');
            if (click) {

                draw.innerHTML = 'Ready to Draw ';
            }
            else {
                draw.innerHTML = ' You are not allowed to draw';
            };

        };
    });

    let btn_popUp = document.querySelector('#popUp');
    btn_popUp.addEventListener('click', function () {
        let size = getSize();
        createBoard(size);
    });
});

// create funtion for 16* 16 grid 

function createBoard(size) {
    let board = document.querySelector('.board');
    board.innerHTML = ''; // clear previous grid

    let numDivs = size * size;
    let divSize = 960 / size; // calculate div size based on board dimensions (500 width/height)


    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement('div');
        div.style.width = `${divSize}px`;
        div.style.height = `${divSize}px`;
        div.addEventListener('mouseover', colorDiv);
        board.append(div);
    }

}

// select size function

function getSize() {
    let input = prompt('Input Size: ');
    let message = document.querySelector('#message');
    if (input === '') {
        message.innerHTML = 'Input Grid size'
        return 16; // default size 
    }
    else if (input < 1 || input > 100) {
        message.innerHTML = ' Input a number between 1 and 100'
        return 16;
    }
    else {
        message.innerHTML = 'ready to draw !!';
        return input;
    };

};


// drwing color Function

function colorDiv() {
    if (click) {
        if (color == 'random') {
            this.style.backgroundColor = `hsl(${Math.random() * 360} 100% 50%)`;
        }
        else {
            this.style.backgroundColor = 'black';
        };
    };
};

function setColor(colorChoice){
    color = colorChoice;
}

// reset 

function resetBoard(){
    let divs = document.querySelectorAll('.board div'); // Only reset grid squares
    divs.forEach((div) => div.style.backgroundColor = 'white'); 
}