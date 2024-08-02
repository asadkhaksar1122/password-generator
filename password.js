let generatebtn=document.getElementById("generatebtn")
let password=document.getElementById("password")
let form = document.querySelector("form")
let alert=document.getElementById("alert")
form.addEventListener("submit",function (e) {
    e.preventDefault()
})
function generatePassword() {
    const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
    const symbols = "!@#$%^&*()-_=+[]{};:'\",.<>/?\\|`~";
    const symbolArray = symbols.split('');
    const numbersArray = Array.from({ length: 10 }, (_, index) => index.toString());

    const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];

    let password = '';
    for (let i = 0; i < 7; i++) {
        password += getRandomItem(alphabet);
    }
    for (let i = 0; i < 5; i++) {
        password += getRandomItem(numbersArray);
    }
    for (let i = 0; i < 2; i++) {
        password += getRandomItem(symbolArray);
    }

    // Shuffle the password characters
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    return password;
}


generatebtn.addEventListener('click', function () {
    let random = generatePassword()
      navigator.clipboard
        .writeText(random)
        .then(() => {
            password.value = random;
            alert.innerHTML = `
            <div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Password Copied</strong> The password has been generated and copied
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
            `;
            setTimeout(() => {
                alert.innerHTML=""
            }, 4000);
            
        })
        .catch((error) => {
          console.error("Failed to copy text: ", error);
        });

   
})