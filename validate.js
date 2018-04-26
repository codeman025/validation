//if a name is equal to "" an alert pops up
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}

//each field will be passed into various functions, and if it fails, it will return false with a descriptive error message
// going to need to break up the forms into form 1 and for 2
// probably just make 2 separate functions to deal with that.

function form1(){
    // validates only form 1's things, separate from form 2
}
function form2(){
    //validates only the second 5 items
}

function required_size(field, min, max){
    let item = document.getElementById("field").value // sets item to the value of whatever field i am working with;
    if(item.length < min)
        alert("you entered to few characters");
        return false;
    else {
        return true;
    }
    }
function numeric(field){
    let item = document.getElementById("field").value
    alert("contains invalid characters");
    return false;
    else {
        return true;
}
function required(field){
    let item = document.getElementById("field").value
    if form is of class required{
    alert('class that was required' +" is a field that you must fill out");
    return false;}
    else {
        return true;
}
function not_required(field){
    let item = document.getElementById("field").value
    if(field == "")
    return true
}
