window.onload = function test()
{
    let x = document.getElementsByClassName("errors");
    x[0].innerHTML = "Hello World!";
    document.x[0].appendChild(paragraph);
    x[1].innerHTML = "second world problems!";
    console.log(document.getElementById('firstname').value);
   
}
//let x = document.getElementById("myList").firstChild.innerHTML; //gets


let required_size = (field, min, max){
    let item = document.getElementById("field").value // sets item to the value of whatever field i am working with;
    if(item.length <= min){
        alert("you entered to few characters");
        return false;
    } else if(item.length >= max){
        alert("you entered to many characters")
        return false;
    } 

    else {
            return true;
        }
    }
let numeric = (field){
    let item = document.getElementById("field").value
    if(item == /^\d+$/.test(val)){
    document.elementByClass("errors").innerHTML = "<p>Your input was not valid </p>";
    return false;
}else {
        return true;
}
}


//gets all elements.. need to break this up into the first 4 and second 5


/*


//if a name is equal to "" an alert pops up




//each field will be passed into various functions, and if it fails, it will return false with a descriptive error message
// going to need to break up the forms into form 1 and for 2
// probably just make 2 separate functions to deal with that.
//TODO:
function form1(){
    // validates only form 1's things, separate from form 2
    let firstname = document.getElementById("fistname").value;
    let lastname = document.getElementById("lastname").value;
    let zip = document.getElementById("zip").value;
    let ID = document.getElementById("ID").value;
}
function form2(){
    //validates only the second 5 items
    let bananas = document.getElementById("bananas").value;
    let weekday = document.getElementById("weekday").value;
    let weekday = document.getElementById("phone").value;
    let phone = document.getElementById("phone").value;
    let painLevel = document.getElementById("painLevel").value;
    if((bananas.numeric || bananas.value==="") && weekday.required && phone.req && phone.numberic && phone.required_size(this, 10,10)
     && alphaID.required && alphaID.required_size(this, 5, 5) && (painLevel.numeric || painLevel.required_size(this, 1, 1) || painLevel.value==="") == true){
   // validate the button
     }else {
     //   validate = false?
    }
}


//do i need to make a function that vaidates each field?
function regex(){}
if(zipcode.value == ^\d{5} ){
    return true
} else{
    return false
}
}
this.parent

/*/ 
