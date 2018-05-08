window.onload = () => {
    console.log('test');
    let val = document.getElementsByName("submitBtn");
    for (let i = 0; i <val.length; i++){
    val[i].addEventListener("click" , (event) => {
        if(validateForm(event)== true) {
            event.submit(); // if the event
        } else {
            event.preventDefault(); // stops the sumbit button from validating the page
        }
        });
    }console.log(document.getElementsByClassName());
};
/*
function errors (form) {
    //make an array of error fields so its scaleable
    let errorArr = document.getElementsByClassName("errors");//makes an array of errors
    for (let i = 0; i<errorArr.length; i++){

    }
    //parent - child relation to equal it up
    //append to the current form here??

};
*/
/* function validateform (form) {//specific set of form inputs
    let specificForm = event.target.parentElement;
    //
    let inputs = form.getElementsByClassName();//will need to get form specific array of inputs
    for(let i = 0; i < inputs.length; i++){//run all required functions, currently isn't form specific
        if(inputs[i].classList("required")){
            input[i].required;
        }else if(inputs[i].classList("required_size")){
            input[i].required_size;
    }else if(inputs[i].classList("numeric")){
        input[i].required;
    }else{
        //so far..only goes through one class condition :(
    }
    }    
};*/
function required (form) {
    let errorList = '';
    let req = document.getElementsByClassName("required");//with parent class the same as the submit button
    if (req.parentElement() == form.parentElement){
    for(let i = 0; i < req.length; i++){
        if(req[i]==""){
            errors(form.parentElement).textField = req + " is a required field";
            event.preventDefault;
        }
    }
    return errorList;
}
};

function required_size (form) {
    let errorList = '';
    let size = document.getElementsByClassName("required_size");
    if(size.length == 0){
        event.preventDefault();
        errors(form.parentElement).textField = size + " this field is not the correct size"
    }
    return errorList;

};

function numeric (form){
    let errorList = '';
    let num = document.getElementsByClassName("numeric");
        if(num == NaN){
            event.preventDefault();
            errors[form.parentElement].textField = num + " this field needs to be numbers"
    }
    return errorList;
};
