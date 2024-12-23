const form = document.getElementById('frm');
form.addEventListener('submit', function(event){
 event.preventDefault(); // this helps to prevent from submiting the form while invalid form 

 validatefrm();//this function is called before implement bcs on click submit chek the input id empy or fulfill  
})

// logic for name input in lowercase 
const nameInput = document.getElementById('name');
 let alertShown = true; // true bcs to stop the alert after showing once , Flag to check if the alert has already been shown 
nameInput.addEventListener('input' ,function (){
    const originalValue = nameInput.value;
    const lowercaseValue = originalValue.toLowerCase();
    nameInput.value = lowercaseValue;
});

// logic for mobile no for accepting only numbers
const mobileInput = document.getElementById('mobile_no');

mobileInput.addEventListener('input',function(){
  let inputValue =  this.value =this.value.replace(/[^0-9]/g, ''); //removes non-numeruc characters 
if (inputValue.length === 1 && !['6', '7', '8', '9'].includes(inputValue[0])) {
    inputValue = '';// If the first digit is not 6, 7, 8, or 9, reset the value 
    alert('Mobile number should start with 6, 7, 8, or 9.');
} else if (inputValue.length > 10) {   
    inputValue = inputValue.substring(0, 10); // If the length exceeds 10, trim the input to 10 characters
}
this.value = inputValue;
});


function validatefrm () {
    const name = document.getElementById('name').value;
    const mobile_no = document.getElementById('mobile_no').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;

if (name === '') {
    alert('please enter user name !');
    return; // return is used bcs to stop further cheking validation if any error capture
}
if (mobile_no === '') {
    alert('please enter user mobile.no !');
    return; // return is used bcs to stop further cheking validation if any error capture
} 
if (email === '') {
    alert('please enter user email !');
    return; // return is used bcs to stop further cheking validation if any error capture
}
if (pass === '') {
    alert('please enter user password !');
    return; // return is used bcs to stop further cheking validation if any error capture
}

form.submit();
}

