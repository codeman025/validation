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
//TODO:
function form1(){
    // validates only form 1's things, separate from form 2
}
function form2(){
    //validates only the second 5 items
    if(bananas && weekday && phone && alphaID && painLevel == true)
    validate this form
    else {
        validate = false?
    }
}

function required_size(field, min, max){
    let item = document.getElementById("field").value // sets item to the value of whatever field i am working with;
    if(item.length < min){
        alert("you entered to few characters");
        return false;
    } else if(item.length > max){
        alert("you entered to many characters")
        return false;
    } 

    else {
            return true;
        }
    }
function numeric(field){
    let item = document.getElementById("field").value
    //use REGEX for a item.length amount of characters
    alert("contains invalid characters");
    return false;
    else {
        return true;
}
function required(field){
    let item = document.getElementById("field").value
    if(item != ''){
    alert(item +" is a field that you must fill out")
    return false;}
    else {
        return true;
}
function not_required(field){
    let item = document.getElementById("field").value
    if(field == ""){
    return true
    } else {
    return false
        //no idea how to handle this one, posible use an or statement?
    }
}
//do i need to make a function that vaidates each field?
