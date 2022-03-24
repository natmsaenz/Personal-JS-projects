let count = 0; //sets initial count 


//select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn) {
btn.addEventListener("click", function(e){
    const styles = e.currentTarget.classList;
    if(styles.contains("decrease")){
        count--;
    }
    else if(styles.contains("increase")){
        count++;
    }
    else{
        count = 0;
    }
    if(count > 0){
        value.style.color = "#3A0CA3";
    }
    if(count < 0){
        value.style.color = "red";

    }
    if(count == 0){
        value.style.color = "black";

    }
    value.textContent = count;
});
});

