let count = 1

function showClock(){
    const now = new Date()

    // 24 hours format
    const hours24 = String(now.getHours()).padStart(2,"0")
    const minutes = String(now.getMinutes()).padStart(2,"0")
    const seconds = String(now.getSeconds()).padStart(2,"0")

    // 12 hours format
    const hours12 = now.getHours() % 12 || 12
    const ampm = now.getHours() >= 12 ? "PM" : "AM"
    const time12 = `${String(hours12).padStart(2,"0")}:${minutes}:${seconds} ${ampm}`

    console.log(`24-Hour: ${hours24}:${minutes}:${seconds} | 12 Hour: ${time12}`)

    if (count <= 10){
        count += 1
        setTimeout(showClock, 1000);
    }else{
        console.log("Clock stopped after 10 seconds.")
    }
}

showClock()