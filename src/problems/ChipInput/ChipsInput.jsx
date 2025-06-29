import React, { useState } from "react";
import './chipInput.css'
function ChipsInput() {

  const [value, setValue] = useState();
  const [chips, setChips] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const addChip = (e) => {
    const value = e.target.value
    if (e.key === 'Enter' && value.trim()) {
      setChips([...chips, value]);
      setValue('');
    }
  }

  const deleteChip = (chip) => {
    setChips(chips.filter(c =>c !== chip));
  }

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "40px 0" }}>
        <h2>Chips Input</h2>
        <input
          type="text"
          placeholder="Type a chip and press tag"
          style={{ padding: "8px", width: "200px" }}
          value={value}
          onChange={handleChange}
          onKeyDown={addChip}
        />
      </div>
      <div className='chip-container'>
        {chips.length > 0 &&
          chips.map((chip,index) =>
            <div className='chip' key={index}>
              <span>{chip}</span>
              <button
                className='delete-btn'
                onClick={()=>deleteChip(chip)}
              >
                X
              </button>
            </div>
          )
        }
      </div>
    </>
  );
}

export default ChipsInput;