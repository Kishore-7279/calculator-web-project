let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map(button => {
    button.addEventListener("click" , (e)=> {
        switch(e.target.innerHTML){


            case "AC":
                display.innerHTML = '';
                break;


            case "←":
                if(display.innerHTML){
                    display.innerHTML = display.innerHTML.slice(0, -1);
                }
                break;

                
            case "=":
                try{
                    display.innerHTML = eval(display.innerHTML);
                }
                catch{
                    display.innerHTML = "Syntax Error"}
                break;
                
               
            default:
                display.innerHTML += e.target.innerHTML;
                break;

};

});

});