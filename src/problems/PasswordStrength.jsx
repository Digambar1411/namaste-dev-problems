import React, { useState } from 'react';

// ✅ Export this so it can be tested 
export const checkPasswordStrength = (pass) => {
  let count = 0;
  const rules = {
    length: pass.length >= 8,
    hasNumber: /[0-9]/.test(pass),
    hasLower: /[a-z]/.test(pass),
    hasUpper: /[A-Z]/.test(pass),
    hasSpecial: /[^a-zA-Z0-9]/.test(pass)
  };

  Object.keys(rules).forEach((rule) => rules[rule] && count++);

  if (count === 0) return 'Weak Password'
  if (count === 1) return 'Level 1'
  if (count === 2 || count === 3) return 'Level 2'
  return 'Level 3'
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