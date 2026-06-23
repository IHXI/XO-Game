const reset = document.querySelector('#reset')
const message = document.querySelector('#message')
const boxes = document.querySelectorAll('.sqr')
const board = document.querySelector('.board')
const winnigCombos = [[0,4,8], [2,4,6], [2,5,8], [1,4,7], [0,3,6], [6,7,8], [3,4,5], [0,1,2]]
let players = 'X'
let allX = []
let allO = []


boxes.forEach((box, i) =>{
    box.addEventListener('click', function(){
        if (players === 'X' && box.textContent === ''){
            box.textContent = players
            players = 'O'
            message.textContent = "it's O's turn"
            if (box.textContent === 'X'){
            allX.push(Number(box.id))}
        }

        else if (players === 'O' && box.textContent === ''){
            box.textContent = players
            players = 'X'
            message.textContent = "it's X's turn"
            if (box.textContent === 'O'){
            allO.push(Number(box.id))}
        }

        checkWinner()

        reset.addEventListener('click', function(){
        box.textContent = ''
        allO = []
        allX = []
        players = 'X'
        message.textContent = "it's X's turn"
        board.classList.remove('disable')
    })  
    })   
})


function checkWinner() {
    winnigCombos.forEach((array, i) => {
        
        
        if (allX.includes(array[0]) && allX.includes(array[1]) && allX.includes(array[2])){
        message.textContent = 'X wins!'
        board.classList.add('disable')} 
        
        else if (allO.includes(array[0]) && allO.includes(array[1]) && allO.includes(array[2])){
        message.textContent = 'O wins!'
        board.classList.add('disable')}
        
        else if (allX.length === 5 && allX.includes(array[0]) !== true && allX.includes(array[1]) !== true && allX.includes(array[2])!== true){
            message.textContent = 'Tie game!'
            board.classList.add('disable')}

    });}
