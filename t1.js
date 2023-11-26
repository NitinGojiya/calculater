var t = document.querySelectorAll('.button');
var text = "";
Array.from(t).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.value == '=') {
            text = eval(text);
            document.querySelector('#text').value = text;


        } else {
            if (e.target.value == '<--') {
                let text1 = text.charAt(text.length - 1);

                alert(text1);
                text = text - text1;

                document.querySelector('#text').value = text;
            }
            if (e.target.value != 'AC') {
                console.log(e.target);
                text = text + e.target.value;
                document.querySelector('#text').value = text;

            } else {
                text = "";
                document.querySelector('#text').value = "";
            }

        }



    });
})

var colorb = document.querySelectorAll(".color");
var body = document.querySelector("body");
var h = document.querySelector("#h");


Array.from(colorb).forEach((b) => {
    b.addEventListener('click', (tt) => {

        if (tt.target.innerHTML == 'Day Mode') {
            console.log("button clicked..");
            body.style.backgroundColor = 'white';
            body.style.color = 'black';
            h.style.color = 'black';
            document.querySelector(".sub").style.border = "2px black solid";

        }


        if (tt.target.innerHTML == 'Night Mode') {
            console.log("button clicked..yellow");
            body.style.backgroundColor = 'rgb(0, 0, 0)';
            body.style.color = 'white';
            // button.style.color = 'white';
            h.style.color = 'white';
            document.querySelector(".sub").style.border = "2px white solid";


        }
    })
})


setInterval(function() {
    var dt = new Date();
    var t = dt.toLocaleTimeString();
    var m = 1 + dt.getUTCMonth();
    var d = dt.getDate();
    var y = dt.getFullYear();
    // var dat = dt.toLocaleDateString();
    document.querySelector('#clock').innerHTML = t + ' ' + d + ' -' + m + ' -' + y;
}, 1000);

//localstorage
var vr = "nitin"
var person = {
    name: vr,
    age: 30,
    city: "New York"
};