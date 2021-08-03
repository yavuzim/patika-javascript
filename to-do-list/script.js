let localArray = [];
if (localStorage.getItem("todolist")) {
  localArray = JSON.parse(
    localStorage.getItem("todolist").valueOf().split("-")
  );
}
//localArray dizisindeki değer silindiğinde yeni bir localStorage set ediyoruz
function getLocal() {
  localStorage.setItem("todolist", JSON.stringify(localArray));
  localArray.forEach((e, i) => {
    let todolistDOM = document.querySelector("#todoList");
    let newDiv = document.createElement("div");
    newDiv.classList.add("list");
    newDiv.innerHTML = `<span class="todo-value">${e}</span> <button id="${i}" onclick="clikcRemove(this)">x</button>`;
    newDiv.setAttribute("id", `listitem-${i}`);
    todolistDOM.appendChild(newDiv);
  });
}

getLocal();

// todo ekliyoruz
function add_button_click() {
  let txtValue = document.getElementById("txtTodo");
  let errorDiv = document.querySelector(".toast-field");
  let message = "";
  let emptyValue = txtValue.value;
  if (emptyValue.length == 0) {
    message = "Lütfen boş değer girmeyiniz";
  } else {
    message = "Listeye Eklendi";
    localArray.push(txtValue.value);
    localStorage.setItem("todolist", JSON.stringify(localArray));
    createTodo();
    replyElement();
  }
  let divDOM = `<div class="toast-body">${message}</div>
   `;
  errorDiv.innerHTML = divDOM;
  document.getElementById("liveToast").style.display = "block";
}
function replyElement() {
  document.querySelector("#txtTodo").remove();
  document.querySelector("#addButton").remove();
  let newButton = document.createElement("button");
  newButton.setAttribute("type", "submit");
  newButton.setAttribute("id", "addButton");
  newButton.setAttribute("onclick", "add_button_click()");
  let newinput = document.createElement("input");
  newButton.innerHTML = "Ekle";
  newinput.setAttribute("type", "text");
  newinput.setAttribute("id", "txtTodo");
  newinput.setAttribute("placeholder", " Bugün ne yapacaksın?");
  document.querySelector(".input-btn-fied").append(newinput);
  document.querySelector(".input-btn-fied").appendChild(newButton);
}

// yeni todo oluşturur
function createTodo() {
  let todolistDOM = document.querySelector("#todoList");
  let newDiv = document.createElement("div");
  newDiv.classList.add("list");
  newDiv.innerHTML = `<span class="todo-value">${
    localArray[localArray.length - 1]
  }</span> <button id="${
    localArray.length - 1
  }" onclick="clikcRemove(this)">x</button>`;
  newDiv.setAttribute("id", `listitem-${localArray.length - 1}`);
  todolistDOM.appendChild(newDiv);
}

// hata mesajını kaldırma
function messageClose() {
  document.getElementById("liveToast").style.display = "none";
}
// hata mesajını 5 saniyede kaldırma
function messageOff() {
  document.getElementById("liveToast").style.display = "none";
}
setInterval(messageOff, 5000);

// yapılacak olanı silme
function clikcRemove(x) {
  localArray.forEach((e) => {
    document.querySelector(`.list`).remove();
  });
  localArray.splice(x.id, "1");
  getLocal();
  console.log(x);
}
