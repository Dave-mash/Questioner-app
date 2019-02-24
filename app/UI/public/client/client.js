const form = document.querySelector('.form-details')
const userUrl = 'http://127.0.0.1:5000/api/v2/auth/signup';

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const first_name = formData.get('first_name');
    const last_name = formData.get('last_name');
    const othername = formData.get('othername');
    const email = formData.get('email');
    const phoneNumber = formData.get('phoneNumber');
    const username = formData.get('username');
    const password = formData.get('password');
    const confirm_password = formData.get('confirm_password');

    let span = document.getElementById('error_span')
    let b = document.createElement('b')
    span.style.width = '100%'
    span.style.marginTop = '10px'
    span.style.textAlign = 'center'
    b.textContent = 'Some fields are missing!'
    b.style.color = 'red'
    b.className = 'error_message'

    const user = {
        first_name,
        last_name,
        othername,
        email,
        phoneNumber,
        username,
        password,
        confirm_password
    };

    const errors = {
        "email": "Invalid email address!",
        "first_name": "Your first name should be between 4 to 24 characters long!",
        "last_name": "Your last name should be between 4 to 24 characters long!",
        "othername": "Your othername should be between 4 to 24 characters long!",
        "username": "Your username should be between 4 to 24 characters long!",
        "password": "Weak password!",
        "phoneNumber": "Use valid numbers for phone number",
        "confirm_password": "Your passwords don't match!"
    }

    highlighter = (option) => {
        if (option) {
            return option.className = 'highlighter'
        }
    }
// <b class="error_message"></b>
    emptyFields = () => {
        span.innerHTML = '';
        fields = Object.entries(user);
        fields.forEach(field => {
            let input = document.getElementById(`${field[0]}`)

            if (!field[1]) {
                span.appendChild(b)
                highlighter(input)
            } else {
                span.innerHTML = '';
                if (input) input.className = 'no_highlighter';
            }

        });
    }

    validator = (pairs, jsonResponse) => {
        pairs.forEach(pair => {
            
            if (pair[1] === jsonResponse.error) {
                let input = document.getElementById(`${pair[0]}`)
                highlighter(input)
                console.log(input)
            } else if (pair[1] !== jsonResponse.error) {
                let input = document.getElementById(`${pair[0]}`)
                if (input) input.className = 'no_highlighter'
            }
        });
    }

    fetch(userUrl, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
        return response.json();          
    }, networkError => console.log(networkError.message)
      ).then(jsonResponse => {
            let pairs = Object.entries(errors)
            emptyFields()
            // validator(pairs, jsonResponse)
            // console.log(jsonResponse.error)
            // switch(jsonResponse.error) {
            //     case errors['first_name']:
            //         console.log(jsonResponse.error)
            //     case errors['email']:
            //         // console.log('bad request')
            //     default:
            //         // console.log('unhandled')
            // }
      });
});

fetch('http://127.0.0.1:5000/api/v2/users').then(res => {
    if (res.ok) {
        return res.json();
    }
    throw new Error('Request failed!')
}, networkError => console.log(networkError.message)
).then(jsonResponse => {
    console.log(jsonResponse.users)
});



// if (!input) {
//     if (jsonResponse.error === "please enter valid othername!") {
//         highlighter(document.getElementById('othername'))
//         console.log(document.getElementById('othername'))
//     } else if (jsonResponse.error === "please enter valid username!") {
//         highlighter(document.getElementById('username'))
//         console.log(document.getElementById('username'))
//     } else if (jsonResponse.error === "please enter valid first name!") {
//         highlighter(document.getElementById('first_name'))
//         console.log(document.getElementById('first_name'))
//     } else if (jsonResponse.error === "please enter valid last name!") {
//         highlighter(document.getElementById('last_name'))
//         console.log(document.getElementById('last_name'))
//     } else if (jsonResponse.error === "please enter valid last name!") {
//         highlighter(document.getElementById('last_name'))
//         console.log(document.getElementById('last_name'))
//     }
// }