function createClearBtn() {
    let clearBtn = document.createElement("button");
    let txt = document.createTextNode("Clear");
    clearBtn.className = "clear";
    clearBtn.appendChild(txt);
    return clearBtn;
}

function addCheckedListener(node) {
    node.addEventListener("click", function() {
        let content = node.getElementsByTagName("p")[0];
        content.classList.toggle('checked');
    })
}

function assignClearFunc() {
    // click 'clear button' to hide their parent div
    let clearBtns = document.getElementsByClassName("clear");
    for (let btn of clearBtns) {
        btn.onclick = () => {
            let div = btn.parentElement;
            div.remove();
        }
    }
}

function emptyAlert() {
    alert("The field is empty");
}

function addTodo(txt) {
    var nodeContainer = document.getElementById("todo-container");
    if (txt == "") {
        emptyAlert();
    }
    else {
        let listNode = document.createElement("div");
        let itemText = document.createElement("p");
        let clearBtn = createClearBtn();
        itemText.appendChild(document.createTextNode("• " + txt));
        listNode.className = "todo-list";
        addCheckedListener(listNode);
        listNode.appendChild(itemText);
        listNode.appendChild(clearBtn);
        nodeContainer.appendChild(listNode);
        document.getElementById("add-field").value = "";
        assignClearFunc();
    }
}

// add click to check listener to each list
let listNodes = document.getElementsByClassName("todo-list");
for (let node of listNodes) {
    addCheckedListener(node);
}
// adding todo list
let textField = document.getElementById("add-field");
let addBtn = document.getElementById("add-btn")
addBtn.addEventListener("click", function() {
    let txt = textField.value;
    addTodo(txt)
});

// add by press Enter
textField.addEventListener("keypress", function(event) {
    if (event.key === "Enter"){
        let txt = textField.value;
        addTodo(txt)
    }
});

assignClearFunc();