//text that I want to display when the user enter the page but will disappear after user check for stages
const article = {
  text: "The median number of lifetime menstrual cycles was 451.3, \
  corresponding to 34.7 years of menstrual activity if considering an average of 13 cycles per year. \
  And each time, my emotional and physical stages are highly affected by these changes. \
  I'm always being affected by my menstrual cycle. On different days of the month, \
  my body reacts to different periods. For example, the week before my period, \
  I'm like a skeleton, I can't take an interest in anything, and the slightest thing can make my eyes water non-stop. \
  I just lay in bed and my tears fall. It also involuntarily flowed down when I ate, \
  making me feel that no matter what kind of food I ate, it had a disgusting taste. \
  I also experience different bloating and constipation during this period. \
  I agonized over why my digestive system was always tormenting me \
  and felt like all the emotions and food residue were clogging up my body. \
  They don't know what to do like I do, and don't know exactly where the exit is. \
  What bugged me the most were the pimples created by all the hormonal disorders \
  and I could look for them anywhere. Sometimes just rolling over I find the pain caused by pressing into a pimple. \
  I hate these things because even if they disappear they carry a lot of marks with them \
  and these marks make me more miserable. After this, my period came, with cramps, headaches and diarrhea \
  that often made me question why it had to be me. \
  Every time I go through a period like this, I feel deeply fucked. \
  Of course, there are times in my menstrual cycle that make me feel in good shape, like ovulation. \
  During this period I feel as though there will always be something to look forward to in life, \
  but after the blip, I feel like I'm drowning in deep pain again. ",
};

//making it appear
document.querySelector(".article").innerHTML = article.text;

// function created by chatgpt, after checking the current day, 
// i want to have a fucntion that tells the user what kind of mood they might experience 
// but i am still not sure after chatgpt generated the code
let person = {
  
  firstname: "Jessie",
  lastname: "Chen",
  age: 21,

  menstrualCycle: [
    "Menstrual",
    "Menstrual",
    "Menstrual",
    "Menstrual",
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
    "Luteal"
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
    constipation: ["diaheara", "flatulence","gas"],
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

  // convert input to stage
  getCurrentStage: function (day) {
    if (day >= 0 && day < this.menstrualCycle.length) {
      //if the input day is within the range of 0 to the full cycle then the number is valid
      // return item in menstrualCycle by index
      return this.menstrualCycle[day];
    } else {
      //otherwise it will display invalid day
      return "Invalid day";
    }
  },
 //add the information to the corresponding stage
  getDetail: function (day) {
    if (day >= 0 && day < this.menstrualCycle.length) {
      // return different variable respond to the menstrualCycle state
      switch (this.menstrualCycle[day]) {
        case 'Menstrual': return this.menstrual;
        case 'Follicular': return this.follicular;
        case 'Ovulation': return this.ovulation;
        case 'Luteal': return this.luteal;
        default:
          console.log("error");
      }
    } else {
      return "Invalid day";
    }
  },
};
// let currentDayInput = prompt(
//   "please enter a number from 0-26 to check your stage:"
// );

let currentDay = parseInt(currentDayInput);

function setText1234Null() {
  //hide the text
  let text1Element = document.querySelector(".text1");
  text1Element.style.display = "none";
  let text2Element = document.querySelector(".text2");
  text2Element.style.display = "none";
  let text3Element = document.querySelector(".text3");
  text3Element.style.display = "none";
  let text4Element = document.querySelector(".text4");
  text4Element.style.display = "none";
}


// format detail to string

function convertDetailToString(detail) {
  //check for if the detail is in the string
  if (typeof detail === 'string') {
    return detail;
  }

  if (detail === undefined) {
    return 'undefined';
  }

  let detailString = '';
//check for cramp
  if ('cramp' in detail) {
    //inputing the detail in preset words and how it will present on the page
   //combine the previous inforamtion wuth text and then update for each stage
    detailString += 'mood: ' + detail.mood.join(', ') + '<br>';
    detailString += 'waterRetention: ' + detail.waterRetention.join(', ') + '<br>';
    detailString += 'constipation: ' + detail.constipation.join(', ') + '<br>';
    detailString += 'acnes: ' + detail.acnes.join(', ') + '<br>';
    detailString += 'cramp: ' + detail.cramp + '<br>';
    //check for brainfog with formatting

  } else if ('brainFog' in detail) {
    detailString += 'mood: ' + detail.mood.join(', ') + '<br>';
    detailString += 'waterRetention: ' + detail.waterRetention.join(', ') + '<br>';
    detailString += 'constipation: ' + detail.constipation.join(', ') + '<br>';
    detailString += 'acnes: ' + detail.acnes.join(', ') + '<br>';
    detailString += 'brainFog: ' + detail.brainFog.join(', ') + '<br>';
    detailString += 'appetiteOverEating: ' + detail.appetiteOverEating + '<br>';
  }

  return detailString;
}


// every time the check stage button is hitted, this funcction is called
function checkStage() {
  // make text1 text2 text3 text4 disapper
  setText1234Null();
  // clear the article at the top when the func called
  document.querySelector(".article").innerHTML = null;
  // get current day from input
  let currentDay = parseInt(document.getElementById("currentDayInput").value);

  // get all the elements
  let resultElement = document.getElementById("result");
  let bodyElement = document.body;
  let divElements = document.querySelectorAll(".menparent div");
  let foparentElements = document.querySelectorAll(".foparent div");
  let oparentElements = document.querySelectorAll(".oparent div");
  let luparentElements = document.querySelectorAll(".luparent div");
  

  if (!isNaN(currentDay)) {
    // get stage
    let currentStage = person.getCurrentStage(currentDay);
    // get stage detail
    let detail = person.getDetail(currentDay)
    // set result value with stage and stage detail
    if (currentStage != "Invalid day") {
      resultElement.innerHTML = "Current stage: " + currentStage + "<br>" + convertDetailToString(detail);
    } else {
      resultElement.innerHTML = currentStage
    }


    // hide all the images first
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

    // so the stage result is only used to change only one webpage text element
    // and we got a if else entry here to check if we want to show other text elements
   //each of the stage will result in different output for the displaying text

    if (currentDay >= 0 && currentDay <= 5) {
    //if the input is between 0-5 which indicate the stage of menstural stage and text 1 will change from display none to block with corresponding images
      let text1Element = document.querySelector(".text1");
      text1Element.style.display = "block";
      divElements.forEach((div) => {
        div.querySelector("img").style.display = "block";
      });


    } else if (currentDay >= 6 && currentDay <= 9) {
      let text2Element = document.querySelector(".text2");
      text2Element.style.display = "block";
      foparentElements.forEach((div) => {
        div.querySelector("img").style.display = "block";

      });
    } else if (currentDay >= 10 && currentDay <= 13) {
      let text3Element = document.querySelector(".text3");
      text3Element.style.display = "block";
      oparentElements.forEach((div) => {
        div.querySelector("img").style.display = "block";
      });
    } else if (currentDay >= 14 && currentDay <= 26) {
      let text4Element = document.querySelector(".text4");
      text4Element.style.display = "block";
      luparentElements.forEach((div) => {
        div.querySelector("img").style.display = "block";
      });
    }


    // if (currentDay === 0) {
   
    //   divElements[0].classList.add("mdiv1-custom");
    //   divElements[1].classList.add("mdiv2-custom");
    // } else {
    //   divElements[0].classList.remove("mdiv1-custom");
    //   divElements[1].classList.remove("mdiv2-custom");
    // }

  } else {

    bodyElement.style.backgroundColor = null;
  }


}







