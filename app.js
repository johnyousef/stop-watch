// const start_btn = document.querySelector("button.start");
// const stop_btn = document.querySelector("button.stop");
// const reset_btn = document.querySelector("button.reset");
const watch_tools = document.querySelector("div.watch_container");
const time = document.querySelector("h1.time");

let INTERVAL;
 
// console.log(time.textContent);
let timer_on = false;
    //if clicked start
watch_tools.addEventListener("click", (e) => {
    // console.log(e.target.attributes[0].value);
    
    // get button that got pressed
    let button_pressed = e.target.attributes[0].value;

    // if pressed start and the timer is not already on
    if (button_pressed === "start" && !timer_on) {
        timer_on = true;
        start_timer(time.textContent);        
    }
    // if pressed stop
    if (button_pressed === "stop") {
        timer_on = false;
        stop_timer();    
    }
    //if pressed reset
    if (button_pressed === "reset") {
        stop_timer();
        time.textContent = "00:00";
        if (timer_on) {
            start_timer(time.textContent);            
        }
    }

});

function stop_timer() {
    clearInterval(INTERVAL);
    console.log("timer off");
}

// start_timer(time.textContent)
function start_timer(tim) {
    console.log("timer on");
    let time_arr = tim.split(":");

    let min = parseInt(time_arr[0]);
    let sec = parseInt(time_arr[1]);

    let sec_text
    let min_text
    //start timer
    INTERVAL = setInterval(() => {
        if (min === 60) {
            min = 0;
        }
        if (sec === 60) {
            sec = 0;
            min++;
        }
        sec++;
        //if sec smaller than 10 add a zero next to it        
        if (sec < 10) {
            sec_text = `0${sec}`
        }else{
            sec_text = `${sec}`;
        }

        //if min smaller than 10 add a zero next to it        
        if (min < 10) {
            min_text = `0${min}`
            
        }else{
            min_text = `${min}`;
        }
            
        time.textContent = [min_text, sec_text].join(":");    

    }, 1000);
}

















// let counter = 1;

// await sleep(2);

// const inter = setInterval(() => {
//     if (counter === 10) {
//         clearInterval(inter);
//     }
     
//     console.log(counter++);
// }, 100, "hello");    

// console.log("hi");


