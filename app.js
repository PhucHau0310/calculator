const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btn = $$(".btn");
const render = $(".render");
const result = $(".result");

btn.forEach((element) => {
    element.addEventListener("click", function () {
        if (render.innerHTML == "0") {
            render.innerHTML = "";
        }
        if (element.innerHTML == "AC") {
            render.innerHTML = "0";
            result.innerHTML = "";
        } else if (element.innerHTML == "DEL") {
            var arrText = Array.from(render.innerHTML);
            arrText.splice(arrText.length - 1, 1);
            if (arrText.length != 0) {
                render.innerHTML = arrText.join("");
            } else {
                render.innerHTML = "0";
            }
        } else if (element.innerHTML == "=") {
            result.innerHTML = "= " + eval(render.innerHTML);
        } else {
            render.innerHTML += element.innerHTML;
        }
    });
});
