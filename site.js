const article = {
  text: "The median number of lifetime menstrual cycles was 451.3, corresponding to 34.7 years of menstrual activity if considering an average of 13 cycles per year. And each time, my emotional and physical stages are highly affected by these changes。I'm always being affected by my menstrual cycle. On different days of the month, my body reacts to different periods. For example, the week before my period, I'm like a skeleton, I can't take an interest in anything, and the slightest thing can make my eyes water non-stop. I just lay in bed and my tears fall. It also involuntarily flowed down when I ate, making me feel that no matter what kind of food I ate, it had a disgusting taste. I also experience different bloating and constipation during this period. I agonized over why my digestive system was always tormenting me and felt like all the emotions and food residue were clogging up my body. They don't know what to do like I do, and don't know exactly where the exit is. What bugged me the most were the pimples created by all the hormonal disorders and I could look for them anywhere. Sometimes just rolling over I find the pain caused by pressing into a pimple. I hate these things because even if they disappear they carry a lot of marks with them and these marks make me more miserable. After this, my period came, with cramps, headaches and diarrhea that often made me question why it had to be me. Every time I go through a period like this, I feel deeply fucked. Of course, there are times in my menstrual cycle that make me feel in good shape, like ovulation. During this period I feel as though there will always be something to look forward to in life, but after the blip, I feel like I'm drowning in deep pain again. ",
};


document.querySelector(".article").innerHTML = article.text;

//function created by chatgpt, after checking the current day, i want to have a fucntion that tells the user what kind of mood they mighe experience but i am still not sure after chatgpt generated the code
let person = {
  firstname: "Jessie",
  lastname: "Chen",
  age: 21,
  menstrualCycle: [
    "Menstrual",
    "Menstrual",
    "Menstrual",
    "Follicular",
    "Follicular",
    "Follicular",
    "Follicular",
    "Ovulation",
    "Ovulation",
    "Ovulation",
    "Ovulation",
    "Luteal",
    "Luteal",
    "Luteal",
    "Luteal",
    "Luteal",
    "Luteal",
    "Luteal",
    "Luteal",
    "Luteal",
    "Luteal",
    "Luteal",
    "Luteal",
    "Luteal",
    "Luteal",
    "Luteal",
  ],
  menstrual: {
    mood: ["okay mood", "sad", "Irritable"],
    waterRetention: ["none"],
    constipation: ["diaheara", "flatulence"],
    acnes: ["forehead", "cheeks", "jaw"],
    cramp: true,
  },
  luteal: {
    mood: ["Low mood", "Sad", "Irritable"],
    waterRetention: ["eyelids", "fingers", "butt"],
    consitipation: ["gas", "flatulence"],
    acnes: ["forehead", "cheeks", "jaw"],
    brainFog: ["low producivities", "dizziness"],
    appetiteOverEating: true,
  },
  follicular: {
    mood: ["calm", "chill"],
    waterRetention: ["none"],
    constipation: ["normal"],
    acnes: ["few"],
    brainFog: ["none"],
    cramp: false,
  },
  ovulation: {
    mood: ["happy", "chill", "outgoing"],
    waterRetention: ["none"],
    constipation: ["normal"],
    acnes: ["none"],
    brainFog: ["highproductivies"],
    cramp: false,
  },
  getCurrentStage: function (day) {
    if (day >= 0 && day < this.menstrualCycle.length) {
      return this.menstrualCycle[day];
    } else {
      return "Invalid day";
    }
  },
};
let currentDayInput = prompt(
  "please enter a number from 0-26 to check your stage:"
);

let currentDay = parseInt(currentDayInput);

function checkStage() {
  let currentDayInput = document.getElementById("currentDayInput").value;
  let currentDay = parseInt(currentDayInput);
  let resultElement = document.getElementById("result");
  let bodyElement = document.body;
  let divElements = document.querySelectorAll(".menparent div");
  let foparentElements = document.querySelectorAll(".foparent div");
  let oparentElements = document.querySelectorAll(".oparent div");
  let luparentElements = document.querySelectorAll(".luparent div");
  const tooltip = document.querySelector(".flottingbox");
  if (!isNaN(currentDay)) {
    let currentStage = person.getCurrentStage(currentDay);
    resultElement.textContent = "Current stage: " + currentStage;
    let textToDisplay = "";
  
    document
      .querySelectorAll(".mdiv1 img")
      .forEach((img) => (img.style.display = "none"));
    document
      .querySelectorAll(".mdiv2 img")
      .forEach((img) => (img.style.display = "none"));
    document
      .querySelectorAll(".mdiv3 img")
      .forEach((img) => (img.style.display = "none"));
    document
      .querySelectorAll(".mdiv4 img")
      .forEach((img) => (img.style.display = "none"));
    document
      .querySelectorAll(".mdiv5 img")
      .forEach((img) => (img.style.display = "none"));

  
    foparentElements.forEach((div) => {
      div.querySelector("img").style.display = "none";
    });

  
    oparentElements.forEach((div) => {
      div.querySelector("img").style.display = "none";
    });

    
    luparentElements.forEach((div) => {
      div.querySelector("img").style.display = "none";
    });

    if (currentDay >= 0 && currentDay <= 2) {
      // bodyElement.style.backgroundColor = "green";
    
      let text1Element = document.querySelector(".text1");
      text1Element.style.display = "block";
      textToDisplay = text1Element.textContent;
      divElements.forEach((div) => {
        div.querySelector("img").style.display = "block";
      });
      
      
    } else if (currentDay >= 3 && currentDay <= 7) {
      
     
      let text2Element = document.querySelector(".text2");
  text2Element.style.display = "block";
  textToDisplay = text2Element.textContent;
      foparentElements.forEach((div) => {
        div.querySelector("img").style.display = "block";

      });
    } else if (currentDay >= 8 && currentDay <= 11) {
     
     
      let text2Element = document.querySelector(".text3");
      text2Element.style.display = "block";
      textToDisplay = text2Element.textContent;
      oparentElements.forEach((div) => {
        div.querySelector("img").style.display = "block";
      });
    } else if (currentDay >= 12 && currentDay <= 26) {
      
     
      let text2Element = document.querySelector(".text4");
      text2Element.style.display = "block";
      textToDisplay = text2Element.textContent;
      luparentElements.forEach((div) => {
        div.querySelector("img").style.display = "block";
      });
    }

  
    if (currentDay === 0) {
      divElements[0].classList.add("mdiv1-custom");
      divElements[1].classList.add("mdiv2-custom");
    } else {
      divElements[0].classList.remove("mdiv1-custom");
      divElements[1].classList.remove("mdiv2-custom");
    }

  } else {
    resultElement.textContent = "Invalid day";
    bodyElement.style.backgroundColor = null;
  }
  document.querySelector(".article .text").textContent = textToDisplay;

}







