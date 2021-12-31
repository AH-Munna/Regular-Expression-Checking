function matchCheck(re, userInput) {
    if (userInput == "") {
        alert("can't be empty");
    } else if (re.test(userInput)) {
        alert("input type valid.");
    } else {
        alert("Not valid.");
    }
}

function validationCheck(ex) {
    let checkingTemplate;
    let switchCase = ["Email", "Phone Number (bangladesh)", "Post Code (bangladesh)", "Credit card number"];

    switch (ex.textContent) {
        case switchCase[0]:
            checkingTemplate = /^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/;
            break;
        case switchCase[1]:
            checkingTemplate = /^(\+)?(88)?01([0-9]){9}$/;
            break;
        case switchCase[2]:
            checkingTemplate = /^[0-9]{4}$/;
            break;
        case switchCase[3]:
            checkingTemplate = /^[0-9]{4} ?[0-9]{4} ?[0-9]{4} ?[0-9]{4}$/;
            break;
        default:
            console.log("none of them selected. then how code even come to this part!")
            break;
    }

    console.log(checkingTemplate);
    let userInput = prompt("validity check for this:");
    matchCheck(checkingTemplate, userInput);
}


//this section is for finding the first number inside a string
//last index of first number
function lastIndex(str, startDigit) {
    let re = /[^0-9]/;
    console.log(str);

    var i;
    for (i = startDigit; i < str.length; i++) {
        if (re.test(str[i]) || i==str.length-1) {
            return i;
        }
    }
    return i;
}

function numberCheck(e) {
    let str = prompt("first number in this text:");

    let numberEx = /[0-9]/;

    if(numberEx.test(str)) {
        let startDigit = str.match(numberEx).index;

        //first number's last index
        let endDigit = lastIndex(str, startDigit);
        console.log(startDigit, endDigit, parseInt(str.substring(startDigit, endDigit+1)));
    
        alert("the number is: " + parseInt(str.substring(startDigit, endDigit+1)));
    } else {
        alert("no number found");
    }

}