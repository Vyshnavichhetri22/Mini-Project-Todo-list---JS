let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    let item = document.createElement("li");//1. Create a new empty list item
    item.innerText = inp.value;  // 2. Put your text inside it
    alert("Task added succesfully!");

    let delBtn = document.createElement("button"); // 3. Create a delete button
    delBtn.innerText = "delete"; //4. Label it "delete"
    delBtn.classList.add("delete"); // 5. Give it a CSS class

    item.appendChild(delBtn); // 6. Put the button INSIDE the list item
    ul.appendChild(item); //7. Put the list item INSIDE the <ul> (the list)
    inp.value = "";  // 8.Clear the input box
});

ul.addEventListener("click", function (event){
    if(event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});

// let delBtns = document.querySelectorAll(".delete");

// for (delBtn of delBtns){
//     delBtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }

