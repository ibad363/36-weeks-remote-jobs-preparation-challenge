let count = 0

const intervalId = setInterval(() => {
    count ++;
    console.log(count);

    if (count == 10){
        clearInterval(intervalId)
        console.log("Counter Stopped!")
    }
}, 1000);