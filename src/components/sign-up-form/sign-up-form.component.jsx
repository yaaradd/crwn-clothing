import { useState } from "react";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({...formFields, [name]: value });

    };


    return (
        <div>
            <h1>
            <form onSubmit={() => {}}>

                <label>Display Name</label>
                <input
                type='text'
                required
                onChange={ handleChange }
                name='displayName'
                value={displayName}
                />

                <label>Email</label>
                <input
                type='email'
                required
                onChange={ handleChange }
                name='email'
                value={ email }
                />
                
                <label>Password</label>
                <input
                type='password'
                required
                onChange={ handleChange }
                name='password'
                value={ password }
                />

                <label>Confirm Password</label>
                <input
                type='password'
                required
                onChange={ handleChange }
                name='confirmPassword'
                value={ confirmPassword }
                />


                <button type="submit">Sign Up</button>
            </form>
            </h1>
        </div>
    );
};

export default SignUpForm;