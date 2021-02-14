//Array variables.
let lowercase= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let uppercase= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
let numeric= ['0','1','2','3','4','5','6','7','8','9']
let specialCharacter= ['!','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\',','^','_','`','{','|','}','~']

//Concatinated Arrays variable.
let passwordField= []


//Password Generation function
function generatePassword() {
  let output= ""
//Declare Length
  let selectLength= window.prompt("How long would you like your password? Select a length between 8 and 128.")
    console.log(selectLength);
    if(selectLength > 128 || selectLength< 8) {
      window.alert("Please select a number between 8 and 128");
      generatePassword();
    }
//Different character variables
    else {
      let selectLowerCase= window.confirm("Do you want lowercase characters?");
      let selectUpperCase= window.confirm("Do you want uppercase characters?");
      let selectNumeric= window.confirm("Do you want numeric characters?");
      let selectSpecialCharacters= window.confirm("Do you want special characters?");
//Conditional statments to create contatinated array.
      if(selectLowerCase) {
        passwordField.push(lowercase);
      }
      if(selectUpperCase) {
        passwordField.push(uppercase);
      }
      if(selectNumeric) {
        passwordField.push(numeric);
      }
      if(selectSpecialCharacters) {
        passwordField.push(specialCharacter);
      }
      let passwordField2= passwordField.flat();
//For loop to randomize the characters for password.
    for(let i= 0; i< selectLength; i++) {
      output += passwordField2[Math.floor(Math.random() * passwordField2.length)];
    }
    console.log(output);
  }
//Return the output values for the password.
return output;
  };
  
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
