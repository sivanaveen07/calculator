let newBtn = document.querySelectorAll(".num,.operator");
let display = document.querySelector(".display");
let currentInput = "";

newBtn.forEach(btn =>{
    btn.addEventListener("click",()=>{
        let value = btn.textContent;
        if(value === "clear"){
            currentInput = ""; // reset
            display.textContent = "";
        }
        else if(value === "="){
            try {
                currentInput = eval(currentInput);//calculate
                display.textContent = currentInput;
            } catch{
                display.textContent = "Error";
                currentInput = "";

            }
        }
        else{
            currentInput += value;//add pressed button 
            display.textContent = currentInput;
        }
    });
});
