import React, { useState } from 'react';

// ✅ Export this so it can be tested 
export const checkPasswordStrength = (pass) => {
  let count = 0;
  const length = pass.length > 8;
  const hasUpper = /[A-Z]/.test(pass);
  const hasLower = /[a-z]/.test(pass);
  const hasNumber = /[0-9]/.test(pass);
  const hasSpecial = /[^a-zA-Z0-9]/.test(pass);

  let array = [length, hasNumber, hasLower, hasUpper, hasSpecial];
  console.log(array);
  for (let el of array) {
    if (el) count++;
  }

  
  console.log("Matched count:", count);
  if (count === 0) return 'Weak Password'

  return `Level ${count === 1 ? '1' : (count > 1 && count < 4 ? '2' : '3')}`;
};

const PasswordStrength = () => {

  const [strength, setStrength] = useState();
  const [password, setPassword] = useState('');

  const checkStrength = () => {
    const result = checkPasswordStrength(password);
    setStrength(result);
    setPassword('');
  }

  return (
    <div>
      <h2>Password Strength Checker</h2>

      <input
        name='password'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={checkStrength}>Check strength</button>
      {strength && <div>Strength: <strong>{strength}</strong></div>}
    </div>
  );
};

export default PasswordStrength;