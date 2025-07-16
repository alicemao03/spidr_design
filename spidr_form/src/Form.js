import { useState } from "react";
import './Form.css';

function Form() {
    const [inputs, setInputs] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        price: '',
        pin: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((prevInputs) => ({
            ...prevInputs,
            [name]: name === 'pin' ? formatPin(value) : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const cleanedPhone = inputs.phone.replace(/\D/g, '');
        console.log('Form submitted:', inputs);
    };

    const formatPin = (value) => {
        // Remove all non-digit characters
        const digits = value.replace(/\D/g, '');
        // Limit to 16 digits max
        const trimmed = digits.substring(0, 16);
        // Add dashes every 4 digits
        const chunks = trimmed.match(/.{1,4}/g);
        return chunks ? chunks.join('-') : '';
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isValidPhone = (phone) => {
        const digitsOnly = phone.replace(/\D/g, ''); // Remove all non-digit characters
        return digitsOnly.length === 10 || (digitsOnly.length === 11 && digitsOnly.startsWith('1'));
    };

    const isValidPin = (pin) => {
        const pinRegex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
        return pinRegex.test(pin);
    };

    const isFormComplete =
        Object.values(inputs).every((val) => val.trim() !== '') &&
        isValidEmail(inputs.email) &&
        isValidPhone(inputs.phone) &&
        isValidPin(inputs.pin);



    return (
        <form onSubmit={handleSubmit} class="form">
            <div class="form-element">
                <label>
                    First name<span class="star">*</span>
                </label>
                <input
                    class="input-box"
                    type="text"
                    name="firstName"
                    value={inputs.firstName || ""}
                    onChange={handleChange}
                />
            </div>

            <div class="form-element">
                <label >Last Name<span class="star">*</span></label>
                <input
                    class="input-box"
                    type="text"
                    name="lastName"
                    value={inputs.lastName || ""}
                    onChange={handleChange}
                />
            </div>

            <div class="form-element">
                <label>Phone Number<span class="star">*</span></label>
                <input
                    class="input-box"
                    type="number"
                    name="phone"
                    value={inputs.phone || ""}
                    onChange={handleChange}
                />
                {inputs.phone && !isValidPhone(inputs.phone) && (
                    <span className="error-text">Enter a valid U.S. phone number.</span>
                )}

            </div>

            <div class="form-element">
                <label>Email<span class="star">*</span></label>
                <input
                    class="input-box"
                    type="text"
                    name="email"
                    value={inputs.email || ""}
                    onChange={handleChange}
                />
                {inputs.email && !isValidEmail(inputs.email) && (
                    <span className="error-text">Please enter a valid email address.</span>
                )}

            </div>

            <div class="form-element">
                <label>Guess the price<span class="star">*</span></label>
                <input
                    class="input-box"
                    type="number"
                    name="price"
                    value={inputs.price || ""}
                    onChange={handleChange}
                />

            </div>

            <div class="form-element">
                <label>Pin<span class="star">*</span></label>
                <input
                    class="input-box"
                    type="text"
                    name="pin"
                    value={inputs.pin || ""}
                    onChange={handleChange}
                />
                {inputs.pin && !isValidPin(inputs.pin) && (
                    <span className="error-text">Enter a valid 16-digit PIN like 1234-5678-9012-3456.</span>
                )}

            </div>

            <input
                type="submit"
                value="Submit"
                disabled={!isFormComplete}
                className={`submit-button ${!isFormComplete ? 'disabled' : ''}`}
            />
        </form>
    )
}

export default Form;
