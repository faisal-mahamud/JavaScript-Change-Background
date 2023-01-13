var inputcolorOne = document.getElementById("favcolorOne");
var inputcolorTwo = document.getElementById("favcolorTwo");
var inputcolorThree = document.getElementById("favcolorThree");
var inputcolorFour = document.getElementById("favcolorFour");
var inputcolorFive = document.getElementById("favcolorFive");



var root = document.documentElement;

document.querySelectorAll('.color-code').forEach(item => {
    item.addEventListener('click', event => {
        //console.log(event.target.innerHTML);
        alert('Copied!');
        navigator.clipboard.writeText(event.target.innerHTML).then(() => {
        })
    })
})


inputcolorOne.addEventListener("input", (e) => {
    document.getElementById("c-code-one").innerHTML = e.target.value;
    root.style.setProperty("--backcol", e.target.value);
});

inputcolorTwo.addEventListener("input", (e) => {
    document.getElementById("c-code-two").innerHTML = e.target.value;
    root.style.setProperty("--backcol", e.target.value);
});

inputcolorThree.addEventListener("input", (e) => {
    document.getElementById("c-code-three").innerHTML = e.target.value;
    root.style.setProperty("--backcol", e.target.value);
});

inputcolorFour.addEventListener("input", (e) => {
    document.getElementById("c-code-four").innerHTML = e.target.value;
    root.style.setProperty("--backcol", e.target.value);
});

inputcolorFive.addEventListener("input", (e) => {
    document.getElementById("c-code-five").innerHTML = e.target.value;
    root.style.setProperty("--backcol", e.target.value);
});


