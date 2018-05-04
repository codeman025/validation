window.onload = () => {//loads on start, lambda function
    let submits = document.getElementsByName("submitBtn");//makes an object of submit buttons
    for (let i = 0; i < submits.length; i++) {//scaleable for additional forms
        submits[i].addEventListener("click", (event) => {//adds click event
            if (validateForm(event) == false) { // if event is false, then the page cannot refresh
                console.log("failed submit")//event.submits();
            }
            event.preventDefault();//prevents sumbit
        });
    } console.log("whats happening");
} 
// window.onload assigns an event listener to the buttons onload, no matter how many their are

function errors (form) {
    for (let a = 0; a < document.getElementsByClassName("errors").length; a++) {// gets the elements named errors (currently 2)
        if (document.getElementsByClassName("errors")[a].parentElement === form) { //gets the parent to differentiate the forms
            return document.getElementsByClassName("errors")[a];//gets the right form
        }
    }console.log("is it getting here errors");
}

function validateForm(event){ //makes button object that runs the numeric, required, and required_size functions
    let btn = event.target.parentElement.parentElement;
    errors(btn.parentElement).textContent = "";
    let numErrors = numeric(btn) + required(btn) + required_size(btn);//this is where all the functions are actually called
    console.log("not populating");
    return numErrors;
    
}


function required_size(btn){ // gets the maxlength and runs a function that 
    let size = document.getElementsByClassName("required_size"); 
    a = 0;
    for(let i = 0; i < size.length; i++){
        if (size[i].hasAttribute("maxlength")) {
            if(size[i].value != ""){
                let length = size[i].getAttribute("maxlength");
                if (size[i].value.length != parseInt(length)) {
                    errors(btn.parentElement).textContent += size[i].name + 
                    " this field needs "+ length + " characters ";
                    a++;
                }
            }console.log("is it getting here reqsize");
        }
        return a; // a is a text off errors
    }
}
    

function numeric (btn){
    let num = document.getElementsByClassName("numeric"); //gets an array called num, iterates through checking it to see if its numeric
    a = 0;
    for(let i = 0; i < num.length; i++){//iterates through the fields that are numeric
        if (num[i].hasAttribute("numeric")) {
            if(num[i].value == NaN){//if the value is not a number (nan return this error field)
                    errors(btn.parentElement).textContent += num[i].name + 
                    " this field needs to be numbers ";
                    a++;
                }
            }console.log("is it getting here numeric");
        }
        return a; // a is a text off errors
    }
function required(btn){
    let req = document.getElementsByClassName("required"); 
    a = 0;
    for(let i = 0; i < req.length; i++){//iterates through array of required material
        if(req[i].value == ""){
            errors(btn.parentElement).textContent += req[i].name + 
                " this field is required ";
                a++;
            }
        }return a; // a is a text off error appended the the correct form
    }


