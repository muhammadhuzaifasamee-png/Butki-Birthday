// =========================
// SCREENS
// =========================

const welcome = document.getElementById("welcome");
const intro = document.getElementById("intro");
const birthday = document.getElementById("birthday");
const letter = document.getElementById("letter");

const openBtn = document.getElementById("openBtn");
const nextBtn = document.getElementById("nextBtn");

const typing = document.getElementById("typing");
const letterText = document.getElementById("letterText");

const envelope = document.getElementById("envelope");
const bgMusic = document.getElementById("bgMusic");
// =========================
// WELCOME
// =========================

setTimeout(() => {

    welcome.classList.add("hide");

    setTimeout(() => {

        intro.classList.remove("hide");

    },600);

},3000);

// =========================
// FIRST TYPING
// =========================

const birthdayText =
"Happy Birthday My Cutie Kuchopochu ❤️✨";

let i = 0;

function typeBirthday(){

    if(i < birthdayText.length){

        typing.innerHTML += birthdayText.charAt(i);

        i++;

        setTimeout(typeBirthday,60);

    }

}

// =========================
// OPEN SURPRISE
// =========================

openBtn.addEventListener("click",()=>{

    bgMusic.currentTime = 0;

    bgMusic.volume = 0.2;
        bgMusic.play();

    intro.classList.add("hide");

    setTimeout(()=>{

        birthday.classList.remove("hide");

        typing.innerHTML="";

        i=0;

        typeBirthday();

    },700);

});

// =========================
// LETTER PAGE
// =========================

nextBtn.addEventListener("click",()=>{

    birthday.classList.add("hide");

    setTimeout(()=>{

        letter.classList.remove("hide");

    },600);

});

// =========================
// LETTER
// =========================

const message = `Happy Birthday Meri Pyari Butki ❤️

Allah tumhe hamesha khush rakhe.

Tumhari har dua qubool ho.

Tumhari zindagi hamesha muskurahat se bhari rahe.

Tmhe Pata Tum meri life ki sabse khoobsurat insan ho.

Tumhari kushi meri khushi  hai.

Hamesha Khush Rehna Muskuruti Rehna 

Tere Baghair Me Kuch Bhi Nh Yar To Meri Zindagi Ak Azeem Sarmaya He  

Tumhari khushi hi meri khushi hai.

Thank you itna special hone ke liye.

May Allah bless you with health,
success,
happiness
and lots of love.

Happy Birthday once again ❤️✨

Forever Yours,
Huzzi ❤️`;

let j = 0;

// =========================
// ENVELOPE CLICK
// =========================

envelope.addEventListener("click",()=>{

    envelope.classList.add("open");
    setTimeout(() => {
    document.querySelector(".lid").style.display = "none";
}, 1000);

    letterText.innerHTML="";

    j=0;

    setTimeout(typeLetter,900);

});

// =========================
// LETTER TYPING
// =========================

function typeLetter(){

    if(j < message.length){

        letterText.innerHTML += message.charAt(j);
        j++;

        setTimeout(typeLetter,35);

    }
    else{

        document.getElementById("finalBtn").classList.remove("hide");

    }

}

// ==========================
// FINAL PAGE
// ==========================

const finalPage = document.getElementById("final");
const restartBtn = document.getElementById("restartBtn");
const finalBtn = document.getElementById("finalBtn");

finalBtn.addEventListener("click", () => {

    letter.classList.add("hide");

    setTimeout(() => {

        finalPage.classList.remove("hide");

    }, 600);

});

restartBtn.addEventListener("click", () => {

    location.reload();

});

// =========================
// HEARTS
// =========================

function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";

    heart.style.left=Math.random()*100+"vw";

    heart.style.top="100vh";

    heart.style.fontSize=(20+Math.random()*20)+"px";

    heart.style.pointerEvents="none";

    heart.style.zIndex="999";

    document.body.appendChild(heart);

    let pos=100;

    const move=setInterval(()=>{

        pos--;

        heart.style.top=pos+"vh";

        heart.style.opacity=pos/100;

        if(pos<0){

            clearInterval(move);

            heart.remove();

        }

    },30);

}

setInterval(createHeart,700);