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
        if (size[i].hasAttribute("maxlength")) {
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
    

function numeric (btn){
    let num = document.getElementByClassName("numeric"); //gets an array called num, iterates through checking it to see if its numeric
    a = 0;
    for(let i = 0; i < num.length; i++){//iterates through the fields that are numeric
        if (num[i].hasAttribute("numeric")) {
            if(num[i].value == NaN){//if the value is not a number (nan return this error field)
                    errors(btn.parentElement).textContent += size[i].name + 
                    " this field needs to be numbers ";
                    a++;
                }
            }
        }
        return a; // a is a text off errors
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
