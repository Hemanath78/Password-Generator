
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


let result = "";

// for uppercase only
function uppercase(length) {

    const uppercase_char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const char_length = uppercase_char.length;

    let count = 0;

    while (count < length) {
        result += uppercase_char.charAt(Math.floor(Math.random() * char_length));
        count += 1;
    }
    return result;
}

// for lower case only
function lowercase(length) {

    const lowercase_char = "abcdefghijklmnopqrstuvwxyz";

    const char_length = lowercase_char.length;

    let count = 0;

    while (count < length) {
        result += lowercase_char.charAt(Math.floor(Math.random() * char_length));
        count += 1;
    }
    return result;
}


// for number only
function numbercase(length) {

    const numbercase_char = "0123456789";

    const char_length = numbercase_char.length;

    let count = 0;

    while (count < length) {
        result += numbercase_char.charAt(Math.floor(Math.random() * char_length));
        count += 1;
    }
    return result;
}

// for symbols only
function symbolcase(length) {

    const symbolcase_char = "~`!@#$%^&*()-_+=\|<>,./?";

    const char_length = symbolcase_char.length;

    let count = 0;

    while (count < length) {
        result += symbolcase_char.charAt(Math.floor(Math.random() * char_length));
        count += 1;
    }
    return result;
}


// for upper and lower case
function upperlower(length) {

    const upperlower = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    const char_length = upperlower.length;

    let count = 0;

    while (count < length) {
        result += upperlower.charAt(Math.floor(Math.random() * char_length));
        count += 1;
    }
    return result;
}


// for all case
function allcase(length) {

    const allcase_char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()-_+=\|<>,./?"

    const char_length = allcase_char.length;

    let count = 0;

    while (count < length) {
        result += allcase_char.charAt(Math.floor(Math.random() * char_length));
        count += 1;
    }
    return result;
}

// for upper lower number
function uplonum(length) {

    const uplonum_char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

    const char_length = uplonum_char.length;

    let count = 0;

    while (count < length) {
        result += uplonum_char.charAt(Math.floor(Math.random() * char_length));
        count += 1;
    }
    return result;
}

// for upper lower symbol

function uplosy(length) {

    const uplosy_char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~`!@#$%^&*()-_+=\|<>,./?"

    const char_length = uplosy_char.length;

    let count = 0;

    while (count < length) {
        result += uplosy_char.charAt(Math.floor(Math.random() * char_length));
        count += 1;
    }
    return result;
}


function upnusy(length) {

    const upnusy_char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~`!@#$%^&*()-_+=\|<>,./?"

    const char_length = upnusy_char.length;

    let count = 0;

    while (count < length) {
        result += upnusy_char.charAt(Math.floor(Math.random() * char_length));
        count += 1;
    }
    return result;
}

function lonusy(length) {

    const lonusy_char = "abcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()-_+=\|<>,./?"

    const char_length = lonusy_char.length;

    let count = 0;

    while (count < length) {
        result += lonusy_char.charAt(Math.floor(Math.random() * char_length));
        count += 1;
    }
    return result;
}



// submit btn
submit_btn.addEventListener('click', function (e) {

    validate();
})

function validate() {

    // for all case
    if ((uppercase_checkbox.checked) && (lowercase_checkbox.checked) && (number_checkbox.checked) && (symbols_checkbox.checked)) {

        password_input.value = allcase(charLength());

    }

    //    for upper lower number

    else if ((uppercase_checkbox.checked) && (lowercase_checkbox.checked) && (number_checkbox.checked)) {

        password_input.value = uplonum(charLength());

    }

    //    for upper lower sy

    else if ((uppercase_checkbox.checked) && (lowercase_checkbox.checked) && (symbols_checkbox.checked)) {

        password_input.value = uplosy(charLength());
    }


    //    for upper number symbol
    else if ((uppercase_checkbox.checked) && (symbols_checkbox.checked) && (number_checkbox.checked)) {

        password_input.value = upnusy(charLength());

    }

    // for lower number symbole

    else if ((lowercase_checkbox.checked) && (symbols_checkbox.checked) && (number_checkbox.checked)) {

        password_input.value = lonusy(charLength());

    }

    //    for upper and lower case

    else if ((uppercase_checkbox.checked) && (lowercase_checkbox.checked)) {

        password_input.value = upperlower(charLength());

    }

    //  for uppercase only

    else if (uppercase_checkbox.checked) {

        password_input.value = uppercase(charLength());
    }

    // for lowercase only

    else if (lowercase_checkbox.checked) {

        password_input.value = lowercase(charLength());
    }

    else{
        alert("the selected option is not a valid password pattern");

        self.location.assign(window.location);
    }

}

