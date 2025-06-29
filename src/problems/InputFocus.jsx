import React, { useRef } from 'react'

function InputFocus() {

  const inputEl = useRef(null);


  const handleFocus = () => {
    if(inputEl.current){
      inputEl.current.focus();
    }

  }
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <input
        type="text"
        placeholder="Type here"
        style={{ padding: '8px', fontSize: '16px', marginRight: '10px' }}
        ref={inputEl}

      />
      <button 
        style={{ padding: '8px 12px' }}
        onClick={handleFocus}
      >
        Focus Input
      </button>
    </div>
  );
}

export default InputFocus