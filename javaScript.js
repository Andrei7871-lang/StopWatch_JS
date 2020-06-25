let hour = 0, min = 0, sec = 0, milis = 0;
let isPaused = false, isRunning = false;


function start(){
    //pang start
}

function resume(){
    //pang resume kung naka pause
}

function reset(){
    //pang reset
}

function update(){
    milis += 1;
    if(milis >= 1000){
        sec++;
        milis = 0;
    }

    if(sec == 60){
        min++;
        sec = 0;
    }

    if(min == 60){
        hour++;
        min = 0;
    }
    write();
}

function write(){
    document.getElementById("time-lbl").innerHTML = hour + " : " + min + " : " +sec+  " : " +milis
}