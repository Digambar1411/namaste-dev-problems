import React, { useState } from "react";
import './form.css'

function ContactForm() {
  const [formValues, setFormValues] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [username, setUsername] = useState('');

  const handleChange =(e)=>{
    setFormValues({...formValues, [e.target.name]: e.target.value});
  }

  const validate = () =>{
    const newErrors = {};
    for (let key in formValues) {
      if (!formValues[key].trim()) {
        newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
      }
    }
    if (formValues.email && !/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = 'Invalid email format';
    }
    return newErrors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if(Object.keys(validationErrors).length > 0){
      setErrors(validationErrors);
    }else{
      setIsSubmitted(true);
      setUsername(formValues.name);
      setFormValues({ name: '', email: '', msg: '' });
    }
  }

  return (
    <div>
      {!isSubmitted && <form className='form' onSubmit={handleSubmit}>
        <section>
          <label htmlFor='name'>Name :</label>
          {errors.name && <div className='error'>{errors.name}</div>}
          <input
            id='name'
            name='name'
            onChange={handleChange}
            value={formValues.name}
          />
        </section>
        <section>
          <label htmlFor='email'>Email :</label>
          {errors.email && <div className='error'>{errors.email}</div>}

          <input
            type='email'
            id='email'
            name='email'
            value={formValues.email}
            onChange={handleChange}

          />
        </section>

        <section>
          <label htmlFor='msg'>Message :</label>
          {errors.message && <div className='error'>{errors.message}</div>}

          <textarea
            id='message'
            name='message'
            value={formValues.message}
            rows={4}
            onChange={handleChange}
          />
        </section>

        <button className='form-btn' type="submit">Submit</button>
      </form>
      }

      {isSubmitted && <div className='success-msg'>
        Thank you, {username} !</div>}
    </div>
  );
}

export default ContactForm;