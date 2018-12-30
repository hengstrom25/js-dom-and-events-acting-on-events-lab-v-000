function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return input.value;
}

function addNewElementAsLi() {
  let element = document.createElement('li');
  element.innerHTML = retrieveEmployeeInformation();
  let list = document.querySelector('.employee-list');
  list.append(element);
}

let input = document.querySelector('input');

function addNewLiOnClick() {
  
}
