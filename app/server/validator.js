// Validator class

export class UserValidator {
    constructor(fields={}) {
        if (fields) {
            this.firstName = fields['first_name']
            this.lastName = fields['last_name']
            this.otherName = fields['othername']
            this.email = fields['email']
            this.username = fields['username']
            this.phoneNumber = fields['phoneNumber']
            this.password = fields['password']
        }
    }

    validEmail = (email=this.email) => {
        // do something
    }

    validName = () => {
        // do something
    }

    validPhoneNumber = (number=this.phoneNumber) => {
        // do something
    }

    validPassword = (pass=this.password) => {
        // do stuff
    }
}