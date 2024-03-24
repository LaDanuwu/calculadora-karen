
function noche(){
    document.body.classList.toggle("nightmode");
}

let display = document.getElementById('cont-escritura').children[0];

let buttons = Array.from(document.getElementById('cont-escritura').getElementsByTagName('button'));

let operator = ''; 
let value = '';

buttons.map( button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;
        switch(buttonText) {        
            case '+':
            case '-':
            case '*':
            case '/':
                operator = buttonText;
                value = display.value;
                display.value = '';
                break;
            case '=':
                display.value = eval(value + ' ' + operator + ' ' + display.value);
                break;        
            case 'AC':
                display.value = '';
                break;      
            case 'B':
                display.value = display.value.slice(0, -1);
                break;
            case '%':
                display.value = parseFloat(display.value) / 100;
                break;
            default:
                display.value += buttonText;
        }
    });
});
