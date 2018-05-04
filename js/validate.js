window.onload = () => {//loads on start, lambda function
    let submits = document.getElementsByName("submitBtn");//makes an object of submit buttons
    for (let i = 0; i < submits.length; i++) {//scaleable for additional forms
        submits[i].addEventListener("click", (event) => {//adds click event
            if (validateForm(event) == 0) { // if event is false, then the page can refresh
                event.submit();
            }
            event.preventDefault();//prevents sumbit
        });
    }
}


function required_size(btn){
    let size = document.getElementByClassName("required_size"); 
    a = 0;
    for(let i = 0; i < size.length; i++){
        if (size.[i].hasAttribute("maxlength")) {
            if(size[i].value != ""){
                let length = size[i].getAttribute("maxlength");
                if (size[i].value.length != parseInt(length)) {
                    errors(btn.parentElement).textContent += size[1].name + 
                    " this field needs "+ length + " characters ";
                    a++;
                }
            }
        }
        return a; // a is a text off errors
    }
    

    const requiredSize = (btn) => {
        let reqSize = btn.getElementsByClassName("required_size");
        let e = 0;
        //Loop through array of elements with maxlength attribute.
        for (let i = 0; i < reqSize.length; i++) {
            //Check that they have input, then meet specific length.
            if (reqSize[i].hasAttribute("maxlength")) {
                if (reqSize[i].value != "") {
                    let length = reqSize[i].getAttribute("maxlength");
                    if (reqSize[i].value.length != parseInt(length)) {
                        errors(btn.parentElement).textContent += reqSize[i].name +
                            " field requires " + length + " characters! ";
                        e++;
                    }
                }
            }
        }
        return e;
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
