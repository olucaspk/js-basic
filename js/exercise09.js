var count = 0
document.querySelector("button").addEventListener("click",eventClick);

function eventClick() {
    count++
    document.getElementById("clicks").innerHTML = `Quantidade de clicks: ${count}`;
}