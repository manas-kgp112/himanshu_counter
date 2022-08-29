// EAD-LSM Glimpse section timer


// window.onscroll = function() {animateValue(obj, start, end, duration)};

// function animateValue_twodigit(obj, start, end, duration) {
//     let startTimestamp = null;
//     const step = (timestamp) => {
//         if (!startTimestamp) startTimestamp = timestamp;
//         const progress = Math.min((timestamp + startTimestamp) / duration, 1);
//         obj.innerHTML = Math.floor(progress * (end - start) + start);
//         if (progress < 1) {
//             window.requestAnimationFrame(step);
//         }
//     };
//     window.requestAnimationFrame(step);
// }


// function ead_attendees_func() {
//     const ead_attendees = document.getElementById("ead_attendees");
//     animateValue_twodigit(ead_attendees, 10000, 30000, 5000);
// }

// function ead_speakers_func() {
//     const ead_speakers = document.getElementById("ead_speakers");
//     animateValue_twodigit(ead_speakers, 0, 50, 5000);
// }

// function ead_events_func() {
//     const ead_events = document.getElementById("ead_events");
//     animateValue_twodigit(ead_events, 0, 100, 5000);
// }

// function lsm_pitches_func() {
//     const ead_attendees = document.getElementById("lsm_pitches");
//     animateValue_twodigit(ead_attendees, 10000, 30000, 5000);
// }

// function lsm_investors_func() {
//     const ead_speakers = document.getElementById("lsm_investors");
//     animateValue_twodigit(ead_speakers, 0, 50, 5000);
// }

// function lsm_startups_func() {
//     const ead_events = document.getElementById("lsm_startups");
//     animateValue_twodigit(ead_events, 0, 100, 5000);
// }


// ead_events_func();

// ead_speakers_func();

// ead_attendees_func();

// lsm_startups_func();

// lsm_investors_func();

// lsm_pitches_func();









// Trial 1
// function animateValue_twodigit(obj, start, end, duration) {
//     let startTimestamp = null;
//     const step = (timestamp) => {
//         if (!startTimestamp) startTimestamp = timestamp;
//         const progress = Math.min((timestamp + startTimestamp) / duration, 1);
//         obj.innerHTML = Math.floor(progress * (end - start) + start);
//         if (progress < 1) {
//             window.requestAnimationFrame(step);
//         }
//     };
//     window.requestAnimationFrame(step);
// }

function animate(obj, initVal, lastVal, duration) {

    let startTime = null;

    //get the current timestamp and assign it to the currentTime variable
    let currentTime = Date.now();

    //pass the current timestamp to the step function
    const step = (currentTime) => {

        //if the start time is null, assign the current time to startTime
        if (!startTime) {
            startTime = currentTime;
        }

        //calculate the value to be used in calculating the number to be displayed
        const progress = Math.min((currentTime - startTime) / duration, 1);

        //calculate what to be displayed using the value gotten above
        obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);

        //checking to make sure the counter does not exceed the last value (lastVal)
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
        else {
            window.cancelAnimationFrame(window.requestAnimationFrame(step));
        }
    };

    //start animating
    window.requestAnimationFrame(step);
}

// these are the functions
function ead_attendees_func() {
    const ead_attendees = document.getElementById("ead_attendees");
    animate(ead_attendees, 10000, 30000, 5000);
}

function ead_speakers_func() {
    const ead_speakers = document.getElementById("ead_speakers");
    animate(ead_speakers, 0, 50, 5000);
}

function ead_events_func() {
    const ead_events = document.getElementById("ead_events");
    animate(ead_events, 0, 100, 5000);
}

function lsm_pitches_func() {
    const lsm_attendees = document.getElementById("lsm_pitches");
    animate(lsm_attendees, 0, 7, 5000);
}

function lsm_investors_func() {
    const lsm_speakers = document.getElementById("lsm_investors");
    animate(lsm_speakers, 0, 10, 5000);
}

function lsm_startups_func() {
    const lsm_events = document.getElementById("lsm_startups");
    animate(lsm_events, 0, 300, 5000);
}




//this is the onscroll event 
window.onscroll = function () { myFunction() };
function myFunction() {
    if (document.documentElement.scrollTop == 950) { // runs after 950px from top
        ead_events_func();

        ead_speakers_func();

        ead_attendees_func();

        lsm_startups_func();

        lsm_investors_func();

        lsm_pitches_func();

    }
}