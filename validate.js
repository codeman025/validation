windows.onload = () => {
    let val = document.getElementsByName("submitBtn");
    for (let i = 0; i <val.length; i++){
    val[i].addEventListener("click") 
    }
};

function errors (form) {
    //make an array of error fields so its scaleable
    let error_field = document.getElementsByClassName("errors");//makes an array of errors
    

};

function validateform (form) {
    let specificForm = event.target.parentElement;


};
function required (form) {
    let req = document.getElementsByClassName("required");

};

function required_size (form) {
    let size = document.getElementsByClassName("required_size");
    if(size.length == 0){
        errors(form.parentElement).innerHtml = size + " this field is not the correct size"
    }

};

function numeric (form){
    let num = document.getElementsByClassName("numeric");
    if(num == NaN){
        
    }


};

/*
onload all submit buttons are going to be given 
an event listener, use a for loop to iterate through those, and an if else statement to prevent the page from refreshing if there are errors
onclick, if there are errors, print them out in the appropriate form, this is possible by adding text content to the appropriate errors class

*/