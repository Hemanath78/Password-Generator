/*get the number of characters*/
function charLength() {

    let charLength = document.getElementById('length').value;
    document.getElementById('result').innerHTML = charLength;
    return charLength;

}
document.getElementById('length').addEventListener('change', charLength);


let submit_btn = document.getElementById("btn");

let password_input = document.getElementById("password__result");

const uppercase_checkbox = document.getElementById("uppercase");

const lowercase_checkbox = document.getElementById("lowercase");

const number_checkbox = document.getElementById("numbers");

const symbols_checkbox = document.getElementById("symbols");


submit_btn.addEventListener('click', function (e) {

    validate();
});



let result = "";

function validate(){

    let pattern = "";

    if(uppercase_checkbox.checked){
        pattern +="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if(lowercase_checkbox.checked){
        pattern += "abcdefghijklmnopqrstuvwxyz";
    }
    
    if(number_checkbox.checked){
        pattern +="0123456789";
    }

    if(symbols_checkbox.checked){
        pattern += "~`!@#$%^&*()-_+=\|<>,./?"
    }


    for(let i=0; i < charLength(); i++){

        result += pattern.charAt(Math.floor(Math.random() * pattern.length));

        password_input.value = result;

    }

    return result;


}

