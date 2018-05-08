window.onload = () => {//loads on start, lambda function
    let forms = [].slice.call(document.getElementsByTagName("form"));//makes an object of submit buttons
    for (let i = 0; i < forms.length; i++) {//scaleable for additional forms
        
        forms[i].addEventListener("submit", (event) => { 
            event.preventDefault(); 
             
            if (validateForm(event.currentTarget)) { // if event is false, then the page can refresh
               console.log('Should submit');
            }
            else {
                console.log('Should not submit');
            }
            
        });
    } 
} 

function errors (form) {
    for (let a = 0; a < document.getElementsByClassName("errors").length; a++) {// gets the elements named errors (currently 2)
        if (document.getElementsByClassName("errors")[a].parentElement === form) { //gets the parent to differentiate the forms
            return document.getElementsByClassName("errors")[a];//gets the right form
        }
    }
}

function validateForm(form){ 
    let inputs = [].slice.call(form.getElementsByClassName("required_size"));//converts html elments to array
    console.log(inputs);
    for(let i = 0; i < (inputs.length);i++){
        let input = inputs[i];
        required_size(input);
    }

   // let btn = event.target.parentElement.parentElement;
   // errors(btn.parentElement).textContent = "";
   // let numErrors = numeric(btn) + required(btn) + required_size(btn);
   // console.log("not populating");
   // return numErrors;
    return false;
}


function required_size(input){ // gets the maxlength and runs a function that  
        
    if (input.hasAttribute("maxlength")) {
            if(input.value != ""){
                let length = input.getAttribute("maxlength");
                if (input.value.length != parseInt(length)) {
                    errors(btn.parentElement).textContent += input.name + 
                    " this field needs "+ length + " characters ";
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
function required(btn){
    let req = document.getElementByClassName("required"); 
    a = 0;
    for(let i = 0; i < req.length; i++){//iterates through array of required material
        if(size[i].value != ""){
            errors(btn.parentElement).textContent += req[i].name + 
                " this field is required ";
                a++;
            }
        }return a; // a is a text off error
    }
    
