windows.onload = () => {
    let val = document.getElementsByName("submitBtn");
    for (let i = 0; i <val.length; i++){
    val[i].addEventListener("click") , (event) => {
        if(validateForm(event)== true) {
            event.submit(); // if the event
        } else {
            event.preventDefault(); // stops the sumbit button from validating the page
        }
        }
    }
};

function errors (form) {
    //make an array of error fields so its scaleable
    let errorArr = document.getElementsByClassName("errors");//makes an array of errors
    //parent - child relation to equal it up
    //append to the current form here??

};

function validateform (form) {
    let specificForm = event.target.parentElement;

 
};
function required (form) {
    let req = document.getElementsByClassName("required");
    for(let i = 0; i < req.length; i++){
        if(req[i]==""){
            errors(form.parentElement).textField = req + " is a required field";
        }
    }

};

function required_size (form) {
    let size = document.getElementsByClassName("required_size");
    if(size.length == 0){
        errors(form.parentElement).textField = size + " this field is not the correct size"
    }

};

function numeric (form){
    let num = document.getElementsByClassName("numeric");
        if(num == NaN){
        errors(form.parentElement).textField = num + " this field needs to be numbers"
    }


};
// appendchild make an errors arrar, append them?
/*
onload all submit buttons are going to be given 
an event listener, use a for loop to iterate through those, and an if else statement to prevent the page from refreshing if there are errors
onclick, if there are errors, print them out in the appropriate form, this is possible by adding text content to the appropriate errors class
apppend all errror messages to a specific error field in the the errors function
*/