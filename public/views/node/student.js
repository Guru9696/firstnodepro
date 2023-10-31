function formValidation(frm) {
    
    var fname = frm.fname.value;
    var lname = frm.lname.value;
          
             
                var dob = frm.birth.value;
               
               
               if(validateBirthdate(dob)){


               }
    
   
}



function validateBirthdate(input) {
    // get current date
    let currentDate = new Date();
   
   
    let birthdate = new Date(input);
    // return if age is over 18
    let diff = new Date(currentDate - birthdate)
    let age = Math.abs(diff.getUTCFullYear() - 1970);

    
   
    if(age > 18 || age<50)
    {
        alert('Your age should between 18 to 50 years!!!');
    }
    else
    {
      
        alert('correct age');
    }
}


