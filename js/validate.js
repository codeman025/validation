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

/* need to update everything to getByCLassName and then add it to an array of errors
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
}};
function not_required(field,index){//not sure if this is needed"
    let item = document.getElementById(field).value;
    if(field == ""){
        return true;
    } else {
        return false;
        //no idea how to handle this one, posible use an or statement?
    }
};
