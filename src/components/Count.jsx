import React, {useState} from 'react'

const Count = () => {
  const [count, setCount] = useState(0);  
  return (
    <div>
        <p>Update angka : {count}</p>
        <button className='count-btn' onClick={() => {setCount(count + 1)}}>Tambah Angka</button>
    </div>
  );
};
export default Count