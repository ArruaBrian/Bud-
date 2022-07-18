// ========== Funciones
let box = document.createElement("div");

const newBox = () => {

    // Container render

    let renderContainer = document.querySelector(".renderContainer");

    // Box a renderizar

    

    for (const key in defaultBox) {
        let value = defaultBox[key];

        box.style[key] = value;
    }

    box.setAttribute("class", "boxDrag");

    
    renderContainer.append(box);
};


// ======== Objetos

let defaultBox = {

    width: "100px",
    height: "100px",
    "border-radius": "10px",
    "border-width": "1px",
    "border-color": "black",
    "border-style": "solid",
    background: "#000000",
    position: "absolute",   
    left: "120px",
    top: "120px",
    transform:"translate(-50%,-50%)",

};

newBox();

// =========== Opciones

// ========= Borde

let rangeBorde = document.querySelector(".rangeBorde");

rangeBorde.setAttribute("value", box.style["border-width"].slice(0, -2))

let changeBorde = () => {

    let contador = document.querySelector(".optionContainerBorde");

    let value = rangeBorde.value;

    contador.innerHTML = `${value}px`

    box.style["border-width"] = `${value}px`;

}

rangeBorde.addEventListener("mousedown", ()=>{

    
    rangeBorde.addEventListener("mousemove", changeBorde);
    


});

rangeBorde.addEventListener("mouseup", ()=>{

    rangeBorde.removeEventListener("mousemove", changeBorde);

    let contador = document.querySelector(".optionContainerBorde");

    contador.innerHTML = `Borde`

});

// color

let changeColor = document.querySelector(".changeColor");

changeColor.setAttribute("value", box.style["background"].slice(-1, 0))

let changeColorMove = () => {


    let value = changeColor.value;

    console.dir(value);

    box.style["background"] = `${value}`;

}

changeColor.addEventListener("mousedown", ()=>{

    
    changeColor.addEventListener("input", changeColorMove);

    


});

// Box drag

let boxDrag = document.querySelector(".boxDrag");

let boxDragStyle = window.getComputedStyle(boxDrag, null);

// Funcion

let dragTheBox = ({movementX, movementY})=>{

    let top = parseInt(boxDragStyle.top);
    let left = parseInt(boxDragStyle.left);

    boxDrag.style.top = `${top + movementY}px`;
    boxDrag.style.left = `${left + movementX}px`;



}

// Eventos


boxDrag.addEventListener("mousedown", ()=>{

    boxDrag.addEventListener("mousemove", dragTheBox);


});

boxDrag.addEventListener("mouseup", ()=>{

    boxDrag.removeEventListener("mousemove", dragTheBox);

});

boxDrag.addEventListener("mouseleave", ()=>{

    boxDrag.removeEventListener("mousemove", dragTheBox);

});

// Modal fun

let modalStart = ()=>{

    modalBack.classList.replace("collapseModalBack", "startModalBack")
    modal.classList.replace("collapseModal", "startModal")

}

let modalCollapse = ()=>{

    modalBack.classList.replace("startModalBack", "collapseModalBack")
    modal.classList.replace("startModal", "collapseModal")

    localStorage.setItem("Entrada", true);

}


// MODAL DE PRIMER INICIO

let modalBack = document.createElement("div");
let world = document.querySelector(".world")

let modalB = {

    position: "fixed",
    height: "100vh",
    width: "100%",
    top: "0",

}

for (const key in modalB) {
    
    let value = modalB[key];

        modalBack.style[key] = value;
}

modalBack.classList.add("collapseModalBack")
modalBack.classList.add("modalBackground")

world.append(modalBack);

// Modal

let modalBackground = document.querySelector(".modalBackground");
let modal = document.createElement("div");

let modalst = {

    background: "#eae7ee",
    position: "relative",
    height: "60%",
    width: "60%",
    padding: "15px 30px",
    "border-radius": "20px",
    transform:"translate(-50%,-50%)",
    top: "50%",
    left: "50%",


}

for (const key in modalst) {
    
    let value = modalst[key];

        modal.style[key] = value;
}

modal.classList.add("collapseModal", "modalStyle")

modal.innerHTML = `


<div class="dotWindowModal red"></div>

<h2 class="title2 csecondary m-0">Si sale del modal nunca volverá a aparecer 🥳</h2>


`;

modalBackground.append(modal);

// Primera vez
console.log(localStorage.getItem("Entrada"))

if(localStorage.getItem("Entrada") ? false : true){

    setTimeout(() => {

        modalStart();
        
    }, 2000);

}else{

    console.log("ya entro una vez");

}

// Modal events

let modalButton = document.querySelector(".dotWindowModal");

modalButton.addEventListener("click", modalCollapse);













