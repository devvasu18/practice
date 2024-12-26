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

//validation consitions 
function validatefrm() {
    const name = document.getElementById('name').value.trim();
    const mobile_no = document.getElementById('mobile_no').value.trim();
    const email = document.getElementById('email').value.trim();
    const pass = document.getElementById('password').value.trim();

    // Clear previous error messages
    document.getElementById('name-error').textContent = '';
    document.getElementById('mobile-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('password-error').textContent = '';

    let isValid = true;
    
    // name
    if (name === '') {
        document.getElementById('name-error').textContent = 'Please enter your name!';
        isValid = false;
    }else if (name !== ''){
        document.getElementById('name-error').textContent = 'done';
    }

    //mobile no
    if (mobile_no === '') {
        document.getElementById('mobile-error').textContent = 'Please enter your mobile number!';
        isValid = false;
    } else if (mobile_no.length !== 10) {
        document.getElementById('mobile-error').textContent = 'Mobile number must be 10 digits!';
        isValid = false;
    } else if (mobile_no.length == 10){
        document.getElementById('mobile-error').textContent = 'done';
    };

    //email 
    if (email === '') {
        document.getElementById('email-error').textContent = 'Please enter your email!';
        isValid = false;
    } else if (email !== ''){
        document.getElementById('email-error').textContent = 'done';
    }

    //password
    if (pass === '') {
        document.getElementById('password-error').textContent = 'Please enter your password!';
        isValid = false;
    } else if (pass !== ''){
        document.getElementById('password-error').textContent ='done';
    }

    if (isValid) {
        form.submit();
    }
}

