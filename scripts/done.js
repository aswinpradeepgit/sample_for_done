const detailsArray = [];


function addToArray(){
  const nameInput= document.querySelector('.js-name-input');
  const name = nameInput.value;
  
  const ageInput= document.querySelector('.js-age-input');
  const age = ageInput.value;

  if (!nameInput.value || !ageInput.value || isNaN(ageInput.value) || ageInput.value <= 0) {
    alert('Please provide a valid name and a positive age');
    return;
  }

  const person = { name: name, age: Number(age) };
  detailsArray.push(person);

  console.log(detailsArray)

  updateTable();
  

}

function updateTable() {
  const tableBody = document.querySelector('#detailsTable tbody');
  tableBody.innerHTML = ''

  

  

 
  for (let i = 0; i < detailsArray.length; i++) {
    const person = detailsArray[i]; 

    const row = document.createElement('tr'); 

    
    const nameCell = document.createElement('td');
    nameCell.textContent = person.name; 
    row.appendChild(nameCell); 

    const ageCell = document.createElement('td');
    ageCell.textContent = person.age; 
    row.appendChild(ageCell); 

    
    tableBody.appendChild(row);
  }
}
