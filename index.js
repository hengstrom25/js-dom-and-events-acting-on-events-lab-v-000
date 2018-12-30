function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

let input = document.querySelector('input');

function retrieveEmployeeInformation() {
  return input.value;
}

function addNewElementAsLi() {
  let element = document.createElement('li');
  element.innerHTML = retrieveEmployeeInformation();
  let list = document.querySelector('.employee-list');
  list.append(element);
}

function addNewLiOnClick() {
  let submit = document.querySelector("input[type = 'submit'");
  submit.addEventListener('click', function(e) {
    addNewElementAsLi();
    input.value = "";
  });
}

function addNewLiOnClick() {
   let submit = document.querySelector("input[type= 'submit'");
   submit.addEventListener('click', function(e) {
     addNewElementAsLi();
     input.value = '';
   });
 }
