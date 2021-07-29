let todoArray = [];
function add_button_click() {
  let txtValue = document.getElementById("txtTodo");
  let errorDiv = document.querySelector(".toast-field");
  let message = "";
  let emptyValue = txtValue.value;
  if (emptyValue.length == 0) {
    message = "Lütfen boş değer girmeyiniz";
  } else {
    message = "Listeye Eklendi";
    let todoList = document.querySelector("#todoList");
    newDiv = document.createElement("div");
    newDiv.classList.add("list");
    newDiv.innerHTML = `<span class="todo-value">${txtValue.value}</span> <button onclick="listClose()">x</button>`;
    todoList.append(newDiv);
    todoArray.push(txtValue.value);
  }
  let divDOM = `<div class="toast-body">${message}</div>
   `;
  errorDiv.innerHTML = divDOM;
  document.getElementById("liveToast").style.display = "block";
}
function messageClose() {
  document.getElementById("liveToast").style.display = "none";
}
function listClose() {
  let a = document.getElementsByClassName("list>todo-value");
  alert(a.innerHTML);
}
