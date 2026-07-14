const PASSWORD = "50504048282";

const input = document.getElementById("password");
const button = document.getElementById("loginButton");
const error = document.getElementById("error");

const loginBox = document.querySelector(".login-box");
const loading = document.getElementById("loading");
const loadingText = document.getElementById("loadingText");

const messages = [
    "Initializing...",
    "Connecting to Research Network...",
    "Verifying credentials...",
    "Access Granted."
];

// 로그인
function login(){

    if(input.value !== PASSWORD){

        error.textContent = "Access Denied.";
        input.value = "";
        input.focus();

        return;

    }

    loginBox.style.display = "none";
    loading.style.display = "flex";

    startTyping();

}

// 버튼
button.addEventListener("click", login);

// 엔터
input.addEventListener("keydown", function(e){

    if(e.key === "Enter"){

        login();

    }

});

// 타이핑
async function startTyping(){

    loadingText.textContent = "";

    for(let i=0;i<messages.length;i++){

        await type(messages[i]);

        loadingText.textContent += "\n\n";

        await wait(500);

    }

    setTimeout(()=>{

        location.href="desktop.html";

    },1200);

}


// 한 글자씩 출력
function type(text){

    return new Promise(resolve=>{

        let i = 0;

        const timer = setInterval(()=>{

            loadingText.textContent += text.charAt(i);

            i++;

            if(i >= text.length){

                clearInterval(timer);

                resolve();

            }

        },45);

    });

}

// 잠깐 대기
function wait(ms){

    return new Promise(resolve=>setTimeout(resolve,ms));

}