import React from 'react'
import {useState} from 'react';
import './form.css'

const Form = () => {
    const [inarr, setInarr] = useState([])
    const [data, setData] = useState({nama: "", nim: "", angkatan: "", hobi: ""})

    const handleChange = (e) => {
      setData({
        ...data,
        [e.target.name]: e.target.value})
    }

    let {nama, nim, angkatan, hobi} = data;
    const handleChanges = () => {
      if(nama=="" && nim=="" && angkatan=="" && hobi==""){
        alert("Masukkan input")
      } else{
        setInarr([
          ...inarr, {
            nama,
            nim,
            angkatan,
            hobi
          }
        ])
      }
      console.log(data, "input data")
      setData({nama: "", nim: "", angkatan: "", hobi: ""})
    }
    return (
      <div className="wrapper">
          <label htmlFor="name">Nama</label>
          <input
              type="text"
              name='nama'
              value={data.nama}
              onChange={handleChange}/>
          <label htmlFor="nim">NIM</label>
          <input
              type="text"
              name='nim'
              value={data.nim}
              onChange={handleChange}/>
          <label htmlFor="angkatan" className='label-ang'>Angkatan</label>
          <input
              type="text"
              name='angkatan'
              value={data.angkatan}
              onChange={handleChange}/>
          <label htmlFor="hobi">Hobi</label>
          <input
              type="text"
              name='hobi'
              value={data.hobi}
              onChange={handleChange}/>

          <button onClick={handleChanges}>Submit</button>
          <br/>
          <table border={1} cellPadding={10}>
            <tbody>
                <tr>
                  <th>Name</th>
                  <th>NIM</th>
                  <th>Angkatan</th>
                  <th>Hobi</th>
                </tr>
                {inarr.length < 1 ?
                  <tr>
                    <td colSpan={4}>-</td>
                  </tr>:
                    inarr.map((hasil, res) => {
                      return (
                        <tr key={res}>
                          <td>{hasil.name}</td>
                          <td>{hasil.nim}</td>
                          <td>{hasil.angkatan}</td>
                          <td>{hasil.hobi}</td>
                        </tr>
                      )
                    })
                }
              </tbody>
            </table>
      </div>
    );
}

export default Form;