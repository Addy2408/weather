let date = new Date()
let hours = date.getHours()

if (hours>=0 && hours<12) {
    greetings.innerHTML="Good Morning"
    
} else if (hours>=12 && hours<16) {
    greetings.innerHTML="Good Afternoon"
} else {
    greetings.innerHTML="Good Evening"
}