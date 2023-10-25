//function created by chatgpt, after checking the current day, i want to have a fucntion that tells the user what kind of mood they mighe experience but i am still not sure after chatgpt generated the code
let person ={
    firstname: "Jessie",
    lastname: "Chen",
    age: 21,
    menstrualCycle: [
        'Menstrual', 'Menstrual', 'Menstrual', 'Follicular', 'Follicular',
        'Follicular', 'Follicular', 'Ovulation', 'Ovulation', 'Ovulation',
        'Ovulation', 'Luteal', 'Luteal', 'Luteal', 'Luteal', 'Luteal',
        'Luteal', 'Luteal', 'Luteal', 'Luteal', 'Luteal', 'Luteal',
        'Luteal', 'Luteal', 'Luteal', 'Luteal'
    ],
    menstrual: {
        mood: ['okay mood', 'sad', 'Irritable'],
        waterRetention: ['none'],
        constipation: ['diaheara', 'flatulence'],
        acnes: ['forehead','cheeks','jaw'],
        cramp: true
    },
    luteal: {
        mood: ['Low mood', 'Sad', 'Irritable'],
        waterRetention: ['eyelids' , 'fingers' , 'butt'],
        consitipation: ['gas', 'flatulence'],
        acnes: ['forehead','cheeks','jaw'],
        brainFog:['low producivities','dizziness'],
        appetiteOverEating:true 
    },
    follicular: {
        mood: ['calm', 'chill' ],
        waterRetention: ['none'],
        constipation: ['normal'],
        acnes: ['few'],
        brainFog:['none'],
        cramp:false
    },
    ovulation: {
        mood: ['happy', 'chill','outgoing' ],
        waterRetention: ['none'],
        constipation: ['normal'],
        acnes: ['none'],
        brainFog:['highproductivies'],
        cramp:false
    },
    getCurrentStage: function(day) {
        if (day >= 0 && day < this.menstrualCycle.length) {
            return this.menstrualCycle[day];
        } else {
            return "Invalid day"; 
        }
    }
}
let currentDayInput = prompt("please enter a number from 0-27 to check your stage:");


let currentDay = parseInt(currentDayInput);


function checkStage() {
    let currentDayInput = document.getElementById("currentDayInput").value;
    let currentDay = parseInt(currentDayInput);
    let resultElement = document.getElementById("result");
    let bodyElement = document.body;
    let divElements = document.querySelectorAll(".menparent div"); 

    if (!isNaN(currentDay)) {
        let currentStage = person.getCurrentStage(currentDay);
        resultElement.textContent = "Current stage: " + currentStage;

        if (currentDay >= 0 && currentDay <= 2) {
            bodyElement.style.backgroundColor = "green";
            document.querySelectorAll(".mdiv1 img").forEach(img => img.style.display = "block");
            document.querySelectorAll(".mdiv2 img").forEach(img => img.style.display = "block");
        } else if (currentDay >= 3 && currentDay <= 7) {
            bodyElement.style.backgroundColor = "red";
            document.querySelectorAll(".mdiv1 img").forEach(img => img.style.display = "none");
            document.querySelectorAll(".mdiv2 img").forEach(img => img.style.display = "none");
        } else if (currentDay >= 8 && currentDay <= 11) {
            bodyElement.style.backgroundColor = "blue";
            document.querySelectorAll(".mdiv1 img").forEach(img => img.style.display = "none");
            document.querySelectorAll(".mdiv2 img").forEach(img => img.style.display = "none");
        } else if (currentDay >= 12 && currentDay <= 26) {
            bodyElement.style.backgroundColor = "yellow";
            document.querySelectorAll(".mdiv1 img").forEach(img => img.style.display = "none");
            document.querySelectorAll(".mdiv2 img").forEach(img => img.style.display = "none");
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
}


