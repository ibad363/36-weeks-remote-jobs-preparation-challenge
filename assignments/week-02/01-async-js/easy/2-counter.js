let count = 1

function counter(){
    console.log("Count:", count)
    count += 1

    if (count <= 10){
        setTimeout(counter, 1000);
    }else{
        console.log("Counter Stopped")
    }
}

counter()