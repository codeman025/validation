//if a name is equal to "" an alert pops up
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}

//each field will be passed into various functions, and if it fails, it will return false with a descriptive error message

function required_size(field, min, max){
if(field.length > statedsize)
    alert("you entered to few characters");
    return false;
else {
    return true;
}
}
function numeric(){

    alert("Name must be filled out");
    return false;
    else {
        return true;
}
function required(){

    if form is of class required{
    alert('class that was required' +" is a field that you must fill out");
    return false;}
    else {
        return true;
}
function not_required(field){
    if(field == "")
    return true
}
