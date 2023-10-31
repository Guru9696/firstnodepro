

function formValidation() {
    var first = document.registration.first;
    var last = document.registration.last;
    var empid = document.registration.empid;
    var birth = document.registration.birth;
    //var DOB = document.registration.birth;
    var uadd = document.registration.address;
    var ucountry = document.registration.country;
    var no = document.registration.no;
    var jdate = document.registration.jdate;
    var uemail = document.registration.email;
    var umgen = document.registration.male;
    var ufgen = document.registration.female;

    if (allLetter1(first)) {
        if (allLetter2(last)) {
            if (alid(empid)) {
                if (allb(birth)) {
                    if (aladd(uadd)) {
                        if (countryselect(ucountry)) {
                            if (allcontact(no)) {
                                if (alljdate(jdate,birth)) {
                                    if (ValidateEmail(uemail)) {
                                        if (validgender(umgen, ufgen)) {

                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }

        }
    }
    return false;
}
function allLetter1(first) {
    var letters = /^[A-Za-z]+$/;
    if (first.value.match(letters)) {
        //alert('employee name submitted');
        return true;
    }
    else {
        alert('employee first name must have alphabet characters only');
        first.focus();
        return false;
    }
}
function allLetter2(last) {
    var letters = /^[A-Za-z]+$/;
    if (last.value.match(letters)) {
        //  alert("employee name submitted");
        return true;
    }
    else {
        alert('employee last name must have alphabet characters only');
        last.focus();
        return false;
    }
}
function alid(empid) {
    var letters = /^[0-9a-zA-Z]+$/;
    if (empid.value.match(letters)) {
        // alert("employee id submitted");
        return true;
    }
    else {
        alert('employee id must have alphanumeric characters only');
        uadd.focus();
        return false;
    }
}
function allb(birth) {
    
    
    var birth_len = birth.value.length;
    if (birth_len == 0) {
        alert("birth date should not be empty");
        birth.focus();
        return false;
    }
    else {

        let CurrentDate = new Date();
        let birthDate = new Date(birth.value);
        let diff = new Date(CurrentDate - birthDate)
        let age = Math.abs(diff.getUTCFullYear() - 1970);
     
        //alert(age);
    
    

        if (birthDate > CurrentDate) {
            alert('Birth date is greater than the current date.');

        } else if (age < 14) {
            alert('You are not 14+ years old');
           // alert('Given date is not greater than the current date.');
          
          
        
    }

    // alert("birth of date submitted");
    return true;
}
}
function aladd(uadd) {
    var letters = /^[0-9a-zA-Z]+$/;
    if (uadd.value.match(letters)) {
        //   alert("address submitted");
        return true;
    }
    else {
        alert('address must have alphanumeric characters only');
        uadd.focus();
        return false;
    }
}
function countryselect(ucountry) {
    if (ucountry.value == "Default") {
        alert('Select your country from the list');
        ucountry.focus();
        return false;
    }
    else {
        //   alert("country submitted");
        return true;
    }
}
function allcontact(no) {
    var number = /^[0-9]+$/;
    if (no.value.match(number)) {
        // alert("Contact Number submitted");
        return true;
    }
    else {
        alert('Contact no must have numeric numbers only');
        no.focus();
        return false;
    }
}
function alljdate(jdate,birth) {
    var jdate_len = jdate.value.length;
    if (jdate_len == 0) {
        alert("date of joining should not be empty");
        birthday.focus();
        return false;
    }
    else {
        let CurrentDate = new Date();
        let jjdate= new Date(jdate.value);
        let birthDate = new Date(birth.value);
        let diff = new Date(jjdate - birthDate)
        let age = Math.abs(diff.getUTCFullYear() - 1970);
     

        if (jjdate > CurrentDate) {
            alert('Please select correct date');

        } else if (age < 14) {
            alert('You are not 14+ years old');
           // alert('Given date is not greater than the current date.');
          
          
        
    }
    }
    // alert("date of joining submitted");
    return true;
}
function ValidateEmail(uemail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (uemail.value.match(mailformat)) {
        // alert("email address is submitted");
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
    }
}
function validgender(umgen, ufgen) {
    x = 0;
    if (umgen.checked) {
        x++;
    } if (ufgen.checked) {
        x++;
    }
    if (x == 0) {
        alert('Select Male/Female');
        umgen.focus();
        return false;
    }
    else {
        window.location.reload()
        return true;
    }
}
