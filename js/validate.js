const validateReq = (event)=>{
	/*let returnbool = true
	let targets = document.getElementsByClassName('required');
	for(let i=0; i < targets.length; i++){
	    if(target[i].getParent() == this.getParent){
	    if(target[i].value.length < 0){
		isValid = false;
		append 
    }*/
    console.log('stuff');
    event.preventDefault();
};

window.onload = function test()
{

    let forms = document.getElementsByTagName("form");
    let aForms = Array.from(forms);
    aForms.forEach(function(myForm){
        if(myForm.addEventListener){
            myForm.addEventListener("submit", validateReq, false);  //Modern browsers
        }else if(myForm.attachEvent){
            myForm.attachEvent('onsubmit', validateReq);            //Old IE
        }
    });


    /*document.body.addEventListener("click", validateReq());
    let x = document.getElementsByClassName("errors");
    x[0].innerHTML = "Hello World!";
    x[1].innerHTML = "second world problems!";
    let form1 = x[0];
    let form2 = x[1];
    //console.log(document.getElementById('firstname').value);
    //console.log(document.getElementById("sumbitbutton")[0].value);
    x.innerHTML = required_size(12345, 5, 1);
*/   
}

/*
compare the parents of the buttons and the element id's to make sure i am appending my error messages to the right div element
*/


/*/let x = document.getElementById("myList").firstChild.innerHTML; //gets
document.getElementById("submitBtn").index[1].addEventListener("click", function(){
    document.getElementById("demo").innerHTML = "Hello World";
});*/

function required_size(field, maxlength, index){
    let item = document.getElementById(field).value // sets item to the value of whatever field i am working with;
    if(item.length <= maxlength){
        document.getElementsByClassName("errors")[index].textContent="This needs to be" + maxlength;
        return false;
    } else {
            return true;
        }
    }
function numeric (field,index){
    let item = document.getElementById(field).value;
    if(item == isNaN(field)){
        document.getElementsByClassName("errors")[index].textContent="This needs to be a number";
        return false;
    }else {
        return true;
    }
}
function required(field,index){
    let item = document.getElementById(field).value
    if(item != ''){
        document.getElementsByClassName("errors")[index].textContent="This needs to be filled out";
    return false;
    }else {
        return true;
}
function not_required(field,index){//not sure if this is needed"
    let item = document.getElementById(field).value;
    if(field == ""){
        return true;
    } else {
        return false;
        //no idea how to handle this one, posible use an or statement?
    }
}
};
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
*/ 
