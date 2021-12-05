
const formValidation = () => {

    //Get form fields for checks
    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const city = document.getElementById('city').value;
    const zipCode = document.getElementById('zip-code').value;
    const areaCode = document.getElementById('area-code').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const email = document.getElementById('email').value;
    const confirmEmail = document.getElementById('confirm-email').value;
    const message = document.getElementById('message').value;
    const contactMethod = document.querySelectorAll('input[type="checkbox"]:checked');

    //Check for alphabet letters only
    function lettersOnly() {
        const letters = /^[A-Za-z\s]+$/;

        if (firstName.match(letters) && lastName.match(letters) && city.match(letters)) {
            return true;
        } else {
            alert("You may only use alphabet characters for the first & last names and city of your address.");
            return false;
        }
    }

    //Check for numbers only
    function numbersOnly() {
        const numbers = /^[0-9]+$/;

        if (zipCode.match(numbers)) {
            return true;
        } else {
            alert("You may only use numbers for the zip code");
            return false;
        }
    }

    //Check for phone number length
    function checkForPhoneNumberLength() {
        if ((areaCode.length === 3) && (phoneNumber.length === 7)) {
            return true;
        } else {
            alert("Your phone number needs to be ten digits.");
            return false;
        }
    }

    //check for valid email address
    function validEmailAddress() {
        const atSign = email.search('@');
        //string of username of email
        let name = email.substring(0, atSign);
        //string omain name of email
        let domain = email.substring((atSign + 1), email.length);
        //establish email pattern
        const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if ((name.length <= 64) && (domain.length <= 256) && (email.match(emailPattern))) {
            return true;
        } else {
            alert("Please enter a valid email address.");
            return false;
        }

    }

    //check that emails match
    function confirmEmailMatch() {
        if (confirmEmail === email) {
            return true;
        } else {
            alert("Your emails do not match.")
            return false;
        }
    }

    //Check for two contact methods
    function checkTwoContactMethods() {
        if (contactMethod.length === 2) {
            return true;
        } else {
            alert("You must choose two contact methods");
            return false;
        }
    }

    //Check for the comments length
    function checkCommentsLength() {
        if (message.length <= 250) {
            return true;
        } else {
            alert("Your message is too long. Enter a brief message, please.")
            return false;
        }
    }

    //Call all functions
    lettersOnly();
    numbersOnly();
    checkForPhoneNumberLength();
    validEmailAddress();
    confirmEmailMatch();
    checkTwoContactMethods();
    checkCommentsLength();

}


