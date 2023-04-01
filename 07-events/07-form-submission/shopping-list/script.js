const form = document.getElementById('item-form');
function onSubmit(e) {
  e.preventDefault();

  // Get value with .value
  const item = document.getElementById('item-input').value;
  const priority = document.getElementById('priority-input').value;

  if (item == '' || priority === '0') {
    alert('Please fill in all fields');
    return;
  }

  console.log(item, priority);
}

// Using the FormData Object
function onSubmit2(e) {
  e.preventDefault();

  // Get individual items
  const formData = new FormData(form);

  // const item = formData.get('item');
  // const priority = formData.get('priority');
  // console.log(item, priority);

  // Get al entried as an Iterator
  const entries = formData.entries(); // FormData Iterator {}
  // console.log(entries);

  // Loop through entries
  for (const entry of entries) {
    console.log(entry[0]); // item  priority
    console.log(entry[1]); // tee   1
  }
}

form.addEventListener('submit', onSubmit2);
