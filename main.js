let passowrdField = document.getElementById('passfield') ; 
let copyButton = document.getElementById('copy');
let generateButton = document.getElementById('generate-btn'); 
let controlpasswordlenth = document.getElementById('passwordLength') ;
let rangeText = document.getElementById('range-text') ; 
let hasNumbers = document.getElementById('hasNumbers');
let hasSymbols = document.getElementById('hasSymbols');
let hasUpperCase = document.getElementById('hasUpperCase');
let haslowerCase = document.getElementById('haslowerCase');
console.clear();



passowrdField.value = '';

function generatePassowrd (options){
    let passwordLength = controlpasswordlenth.value || 8 ; 
    let generatedPassowrd = '';

    options = {
        hasNumbers : hasNumbers.checked , 
        hasSymbols : hasSymbols.checked , 
        hasUpperCase : hasUpperCase.checked , 
        haslowerCase : haslowerCase.checked ,
        hasnothing : 'Select an Option' 
    }
    
    let characters = ''
    
    if (options.hasNumbers) {
        characters += '0123456789' 
    } if (options.hasSymbols) {
        characters += '~!@#$%^&*()_+{}":?><;.,' 
    }  if (options.hasUpperCase) {
        characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }  if (options.haslowerCase) {
        characters += 'abcdefghijklmnopqrstuvwxyz'
    } 
    


    for (let i = 0; i < passwordLength; i++) {
    

        generatedPassowrd += characters.charAt(Math.floor(Math.random()*characters.length))
    }
    passowrdField.value = generatedPassowrd ; 
};
    
controlpasswordlenth.addEventListener('change',()=>{

    rangeText.innerText = controlpasswordlenth.value
})

    
generateButton.addEventListener('click',()=>{
    generatePassowrd();
});

copyButton.addEventListener('click',()=>{
    navigator.clipboard.writeText(passowrdField.value);
    
});
    


    

            
    
    

