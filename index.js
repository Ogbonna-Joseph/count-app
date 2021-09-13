// document.getElementById("count-el").innerText = 30


let countEl = document.getElementById("count-el")

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count 
    console.log(count)
}

function Cancel() {
    let cancel1 = document.getElementById("count-el")
    cancel1.innerText = 0
    count = 0

}

