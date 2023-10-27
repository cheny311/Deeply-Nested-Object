const article = {
  text: "Slightly elevated from street level, visitors have the immediate feeling of leaving the city behind. Seventeen honey locust trees form a natural canopy over the site and the park’s walls are draped in flowing, green ivy. Seasonal flowers create an inviting garden feel, far removed from the surrounding desert of concrete and steel. Instead of conventional park benches, there are 20 tables, designed by Eero Saarinen, and 60 modern-style Henry Bertoia chairs. There is also a refreshment stand. Paley Park’s centerpiece is its magnificent 20-foot high “waterwall” which provides not only a background of captivating sight and sound, but also mutes the background noise of the city. The combined effect creates what The New York Times has called “a place of unparalleled serenity.” Paley Park has demonstrated that small urban areas can serve as both a popular meeting spot and an inviting place for relaxation and calm reflection, adding to the delight and vitality of urban living. As a “vest-pocket park”, Paley Park has served as inspiration for similar ventures in New York City and around the world. Paley Park is owned and operated by The Greenpark Foundation, Inc. and is supported by William S. Paley Foundation, Inc. For more on the history of CBS and the media industry, visit The Paley Center for Media on 52nd Street between Fifth and Sixth Avenues. Shortly after the park opened in 1967, Mr. Paley stated that “as a New Yorker, I have long been convinced that, in the midst of all this building, we ought to set aside occasional spots of open space where our residents and visitors can sit and enjoy themselves as they pause in their day’s activities. When I was casting about for an appropriate way to create a memorial to my father, it occurred to me that to provide one such area in the very center of our greatest city would be the kind of memorial that would have pleased him most.”",
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
    // 隐藏所有mdiv1和mdiv2中的图片
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

    // 隐藏所有foparent中的图片
    foparentElements.forEach((div) => {
      div.querySelector("img").style.display = "none";
    });

    // 隐藏所有oparent中的图片
    oparentElements.forEach((div) => {
      div.querySelector("img").style.display = "none";
    });

    // 隐藏所有luparent中的图片
    luparentElements.forEach((div) => {
      div.querySelector("img").style.display = "none";
    });

    if (currentDay >= 0 && currentDay <= 2) {
      bodyElement.style.backgroundColor = "green";
      textToDisplay = document.querySelector(".text1").textContent;
      // 当天数在0-2之间时，显示menparent中的图片
      divElements.forEach((div) => {
        div.querySelector("img").style.display = "block";
      });
    } else if (currentDay >= 3 && currentDay <= 7) {
      bodyElement.style.backgroundColor = "red";
      textToDisplay = document.querySelector(".text2").textContent;
      // 当天数在3-7之间时，显示foparent中的图片
      foparentElements.forEach((div) => {
        div.querySelector("img").style.display = "block";
      });
    } else if (currentDay >= 8 && currentDay <= 11) {
      bodyElement.style.backgroundColor = "blue";
      textToDisplay = document.querySelector(".text3").textContent;
      // 当天数在8-11之间时，显示oparent中的图片
      oparentElements.forEach((div) => {
        div.querySelector("img").style.display = "block";
      });
    } else if (currentDay >= 12 && currentDay <= 26) {
      bodyElement.style.backgroundColor = "yellow";
      textToDisplay = document.querySelector(".text4").textContent;
      // 当天数在12-26之间时，显示luparent中的图片
      luparentElements.forEach((div) => {
        div.querySelector("img").style.display = "block";
      });
    }

    // 添加/删除mdiv1-custom类
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
}
