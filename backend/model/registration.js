const Joi = require("joi");

class Registration {

    constructor(registration) {
        this.firstName = registration.firstName;
        this.lastName = registration.lastName;
        this.username_email = registration.username_email;
        this.clientID = registration.clientID;
        this.password = registration.password;
        this.passwordConfirm = registration.passwordConfirm;
        this.city = registration.city;
       this.street = registration.street;
        
        
    }

    static #validationSchema = Joi.object({
        firstName: Joi.string().required().min(3).max(50),
        lastName: Joi.string().required().min(3).max(50),
        clientID: Joi.number().required().min(8).max(10),
        username_email: Joi.string().required().min(4).max(50),
        password: Joi.string().required().min(4).max(50),
        passwordConfirm: Joi.string().required().min(4).max(50),
        city: Joi.string().required().min(3).max(50),
        street: Joi.string().required().min(3).max(50),
    });

    validate() {
      //  const result = Registration.#validationSchema.validate(this, { abortEarly: false });
        //return result.error ? result.error.details.map(err => err) : null;  

         const result = Registration.#validationSchema.validate(this, { abortEarly: false });
         const errObj = {};
         if (result.error) {
             result.error.details.map(err => {
                 errObj[err.path[0]] = err.message;
               
             });
             console.log(errObj);
             return errObj;
         }
         return this.null;
    }
}

module.exports = Registration;