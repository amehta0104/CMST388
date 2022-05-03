const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const address = document.getElementById('address');
const email = document.getElementById('email');
const email2 = document.getElementById('email2');
const form = document.getElementById('projectform');
const errorMsg = document.getElementById('errorMsg');
const phonenum = document.getElementById('phonenum');
const zipcode = document.getElementById('zip');
var letters = /^[A-Za-z]+$/;
var numbers = /^[0-9]+$/;

form.addEventListener('submit' , (e) => {

    let errors = []

    if (email.value != email2.value){

        errors.push('The emails provided do not match')
    }

    if(zipcode.value.match(numbers)){
        return true;
        
    }

    else{
        errors.push('Zip code must be a number')
    }

    if(phonenum.value.match(numbers)){
        return true;
    }

    else{
        errors.push('Phone number must be a number')
    }

    if( zipcode.value.length != 5 ){
        errors.push('Please provide a valid zip code')
    }

    if (phonenum.value.length != 10 ){
        errors.push('Please provide a valid phone number')
    }

    if (errors.length > 0) {

        e.preventDefault()
        errorMsg.innerText = errors.join(', ')

    } 


})

