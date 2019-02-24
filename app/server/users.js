// import { UserValidator } from '../validators/validator';

const first_name = document.getElementById('first_name').value;
const last_name = document.getElementById('last_name').value;
const othername = document.getElementById('othername').value;
const email = document.getElementById('email').value;
const phoneNumber = document.getElementById('phoneNumber').value;
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;

// user object

const user = {
    first_name,
    last_name,
    othername,
    email,
    phoneNumber,
    username,
    password
};

console.log('running')

// let validateUser = UserValidator(user);

// // validation

// const validationErrors = [
//     validateUser.validEmail,
//     validateUser.validName,
//     validateUser.validPhoneNumber,
//     validateUser.validPassword
// ];

// validationErrors.forEach((error) => {
//     if (error) {
//         if (error() == 'Invalid email') {
//             let span = document.getElementById('error_span');
//             // append child
//             // let b = span.appendChild(b)
//             // b.textContent = error()
//         }
//         return error()
//     }
// });

// let userUrl = 'http://127.0.0.1:5000/api/v2/auth/signup';

// fetch(userUrl, {
//   method: 'POST',
//   body: JSON.stringify({...user})
// }).then(response => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw newError('Request failed!')
//   }, networkError => console.log(networkError.message)
//   ).then(jsonResponse => {
//     if (jsonResponse.status === 201) {
//         // dom manipulation
//     } else if (jsonResponse.status === 409) {
//         // dom manipulation
//     }
//   });
