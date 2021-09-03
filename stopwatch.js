const watch = document.querySelector('.watch');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');

let seconds = 0;
let milli = 0;
const time = start.addEventListener('click', () => {
    const timer = setInterval(() => {
        watch.textContent = `${seconds} : ${milli}`;
        if(milli === 59){
            seconds++;
            milli = 0;
        }
        else{
            milli++;
        }

    }, 16);
    stop.addEventListener('click', () => {
        clearTimeout(timer);
        watch.textContent = `${seconds} : ${milli}`;
    });
    reset.addEventListener('click', () => {
        clearTimeout(timer);
        watch.textContent = `${00} : ${00}`;
        seconds = 0;
        milli = 0;
    })
});


