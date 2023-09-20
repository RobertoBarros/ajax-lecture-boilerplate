import Swal from 'sweetalert2';


const form = document.getElementById('form')
form.addEventListener('submit',(event) => {
  event.preventDefault();

  // const emailValue = document.getElementById('email').value;
  // const passwordValue = document.getElementById('password').value;
  // const bodyValue = { email: emailValue, password: passwordValue }

  const bodyValue = Object.fromEntries(new FormData(form))

  console.log(bodyValue);



  const url = 'https://reqres.in/api/register'
  const requestDetails = {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bodyValue)
  }
  fetch(url, requestDetails)
    .then((response) => {
      if (response.status === 200) {
        Swal.fire({title: 'Success', text: 'You are connected', icon: 'success'})
      } else {
        Swal.fire({title: 'Error!', text: 'Oups! Something went wrong', icon: 'error'})
      }
    })

})




// const url = "https://api.github.com/users/dhh"

// fetch(url)
//   .then(response => response.json())
//   .then((data) => {
//     console.log(data);
//   })
