let counter = document.getElementById("counter");
let previous = document.getElementById("previous");
console.log(counter);
let count = 0;

function increment() {
    count += 1;
    counter.textContent = count;
}

function save() {
    let countStr = count + " - "
    previous.textContent += countStr;
    count = 0;
    counter.textContent = count;
}