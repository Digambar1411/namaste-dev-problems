import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import styles from './accordian.module.css'

function Accordion({ items }) {

  const [openedIndex, setOpenedIndex] = useState(null);

  const handleOpen = (index) => {
    setOpenedIndex(prev => prev === index ? null : index);
  }

  return (
    <>
      <h1 className={styles.center}>Accordion</h1>
      <div className={styles.container}>
        {items.length === 0 && <p>No items available.</p>}
        {items.length > 0 && items.map((item, index) => {
          return (
            <div className={styles.item} key={index} >
              <div className={`${styles.header}  ${openedIndex === index && styles.active}`} 
                onClick={()=> handleOpen(index)} 
                aria-expanded={openedIndex === index}>
                  <h2>{item.title}</h2>
                {openedIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {openedIndex === index &&
                <div className={styles.content}>
                  {item.content}
                </div>
              }
            </div>
          )
        })
        }
      </div>
    </>
  );
}

export default Accordion;