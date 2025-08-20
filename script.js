const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// get password_one tag
let password_one_tag = document.getElementById("password_one_element");
let password_two_tag = document.getElementById("password_two_element");

// function to generate 15 characters long password out of the possible 91 characters provided

// function for passwordone
function generatePasswordOne(){
     
    for(let i = 0; i < 15; i++){
        let randomIndex = Math.floor(Math.random()*characters.length)
        let password = characters[randomIndex]
        password_one_tag.textContent += password
    }
}



// function for password two
function generatePasswordTwo(){
     
    for(let i = 0; i < 15; i++){
        let randomIndex = Math.floor(Math.random()*characters.length)
        let password = characters[randomIndex]
        password_two_tag.textContent += password
    }
}

function generatePassword(){
    password_one_tag.textContent = ""
    password_two_tag.textContent = ""
    generatePasswordOne()
    generatePasswordTwo()
}




