let body = document.body;
let numf = prompt('Введите первое число:');
let fun = prompt('Выберите действие: \n1)+\n2)/\n3)*\n4)-');
let nums = prompt('Введите второе число:');
let num1 = Number(numf);
let num2 = Number(nums);

let div1 = document.createElement("div");
let div2 = document.createElement("div");
let div3 = document.createElement("div");
let div4 = document.createElement("div");

let btn = document.createElement("button");
let result = document.createElement("div");

if (isNaN(numf) || isNaN(nums)) {
    alert('Введена неправильная цифра')
} else {
    if (fun == '1') {
        div3.textContent = '+';
        body.appendChild(div1);
        div1.appendChild(div2);
        div1.appendChild(div3);
        div1.appendChild(div4);
        body.appendChild(btn);
        body.appendChild(result);
    
        div2.textContent = num1;
        div4.textContent = num2;
        btn.textContent = "check";

        btn.addEventListener("click", function() {
            result.style.height = '120px';
            result.textContent = 'Результат: ' + (num1 + num2);
        })
    } else if (fun == '2') {
        div3.textContent = '/';
        body.appendChild(div1);
        div1.appendChild(div2);
        div1.appendChild(div3);
        div1.appendChild(div4);
        body.appendChild(btn);
        body.appendChild(result);
    
        div2.textContent = num1;
        div4.textContent = num2;
        btn.textContent = "check";

        btn.addEventListener("click", function() {
            result.style.height = '120px';
            result.textContent = 'Результат: ' + (num1/num2);
        })
    } else if (fun == '3') {
        div3.textContent = '*';
        body.appendChild(div1);
        div1.appendChild(div2);
        div1.appendChild(div3);
        div1.appendChild(div4);
        body.appendChild(btn);
        body.appendChild(result);
    
        div2.textContent = num1;
        div4.textContent = num2;
        btn.textContent = "check";

        btn.addEventListener("click", function() {
            result.style.height = '120px';
            result.textContent = 'Результат: ' + (num1*num2);
        })
    } else if (fun == '4') {
        div3.textContent = '-';
        body.appendChild(div1);
        div1.appendChild(div2);
        div1.appendChild(div3);
        div1.appendChild(div4);
        body.appendChild(btn);
        body.appendChild(result);
    
        div2.textContent = num1;
        div4.textContent = num2;
        btn.textContent = "check";

        btn.addEventListener("click", function() {
            result.style.height = '120px';
            result.textContent = 'Результат: ' + (num1-num2);
        })
    } else {
        alert("Действие введено неверно")
    }
}



div1.style.width = "500px";
div1.style.height = "90px";
div1.style.backgroundColor = "orange";
div1.style.marginLeft = "auto";
div1.style.marginRight = "auto";
div1.style.marginTop = "50px";
div1.style.padding = "50px";
div1.style.display = "flex";
div1.style.justifyContent = "space-between";
div1.style.borderRadius = '5px';

div2.style.width = "80px";
div2.style.height = "80px";
div2.style.border = "2px solid black";
div2.style.display = "flex";
div2.style.color = "black";
div2.style.display = "flex";
div2.style.justifyContent = "center";
div2.style.alignItems = "center";
div2.style.fontSize = '20px';

div3.style.width = "80px";
div3.style.height = "80px";
div3.style.border = "2px solid black";
div3.style.display = "flex";
div3.style.color = "black";
div3.style.display = "flex";
div3.style.justifyContent = "center";
div3.style.alignItems = "center";
div3.style.fontSize = '20px';

div4.style.width = "80px";
div4.style.height = "80px";
div4.style.border = "2px solid black";
div4.style.display = "flex";
div4.style.color = "black";
div4.style.display = "flex";
div4.style.justifyContent = "center";
div4.style.alignItems = "center";
div4.style.fontSize = '20px';

btn.style.width = '350px';
btn.style.height = '35px';
btn.style.border = 'none';
btn.style.backgroundColor = 'green';
btn.style.color = 'white';
btn.style.borderRadius = '5px';
btn.style.display = 'flex';
btn.style.marginLeft = "auto";
btn.style.marginRight = "auto";
btn.style.marginTop = "80px";
btn.style.alignItems = 'center';
btn.style.justifyContent = 'center';

result.style.width = '450px';
result.style.height = '70px';
result.style.borderRadius = '5px';
result.style.display = 'flex';
result.style.marginLeft = "auto";
result.style.marginRight = "auto";
result.style.marginTop = "30px";
result.style.alignItems = 'center';
result.style.justifyContent = 'center';
result.style.backgroundColor = 'red';
result.style.color = 'white';
result.style.fontSize = '25px';
result.style.transition = 'all 0.3s';