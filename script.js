let input = document.querySelector('.field');
let alert = document.querySelector('.alert');

document.querySelector('.form-group').addEventListener('submit', (e) => {
    let userNumber = +input.value;
    let generateNumber = numberGenerator();

    if(userNumber <= 0 || userNumber >= 11){
        alert.innerHTML = wrongNumber();
    }else{
        (userNumber === generateNumber)
            ? alert.innerHTML = alertMsg(true, generateNumber)
            : alert.innerHTML = alertMsg(false, generateNumber);
    }

    input.value = '';

    e.preventDefault();
});

function numberGenerator() {
   return Math.floor(Math.random() * 10) + 1
}

function alertMsg(state, number) {
    let div = '';

    state
        ? div += `<div>
                    <h3 class="alert-msg">You're win</h3>
                  </div>`
        : div += `<div>
                    <h3 class="alert-msg">You're lose, right number ${number}</h3>
                  </div>`
    return div;
}

function wrongNumber() {
    let div = `<div>
                    <h3 class="alert-msg">Please, enter number between 1 and 10</h3>                
               </div>`
    return div;
}





