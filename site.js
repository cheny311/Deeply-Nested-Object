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

if (!isNaN(currentDay)) {
    let currentStage = person.getCurrentStage(currentDay);
    if (currentStage === "Invalid day") {
        console.log("Invalid day");
    } else {
        console.log("Current stage: " + currentStage);
    }
} else {
    console.log("Invalid day");
}




