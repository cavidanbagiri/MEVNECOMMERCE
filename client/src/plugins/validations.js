

import { Form as VeeForm, Field as VeeField, ErrorMessage, defineRule, configure } from 'vee-validate';
import {required, email, min, confirmed} from '@vee-validate/rules';

const validationPlugin = {
    install(app, options) {
        //Import Form and Field and Use In HTML
        app.component('Form',VeeForm),
        app.component('Field',VeeField),
        app.component('ErrorMessage', ErrorMessage)

        // Defining Rules For Reuqired Field
        // defineRule('required', value=>{
        //     if(!value){
        //         return 'This Field Is Required';
        //     }
        // }),
        defineRule('required',required),
        //Defining Rule For Email Field
        // defineRule('email', value => {
        //     // Field is empty, should pass
        //     if (!value || !value.length) {
        //       return true;
        //     }
        //     // Check if email
        //     if (!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/.test(value)) {
        //       return 'This field must be a valid email';
        //     }
        //     return true;
        //   });
        defineRule('email',email),
        defineRule('min',min),
        defineRule('confirmed', confirmed),
        configure({
            generateMessage: (context)=>{
                const messages = {
                    required: `${context.field} is required`,
                    email: `Please Enter and ${context.field}`,
                    min: `${context.field} must be minimum 8 characters`,
                    confirmed: `${context.field} is not mismatch with password`
                }
                const message = messages[context.rule.name] ? messages[context.rule.name] : `The ${context.field} ia invalid`; 
                return message;
            },
            validateOnBlur:true,
            validateOnChange:true,
            validateOnInput:false,
            validateOnModelUpdate:true
        })

    },
    

}


export default validationPlugin;