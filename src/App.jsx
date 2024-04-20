
import { useState } from 'react'
import './App.css'

function App() {
  const [inputs,setInputs] = useState({
    firstname:"",
    lastname:"",
    address:"",
    email:"",
    gender:"",
    dob:"",
    course:"",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({...inputs,[name]:value
    })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const output = JSON.stringify(inputs, null, 2) 
    alert(output);
    console.log(output);
  }
  
  const handleReset = () => {
    setInputs({
      firstname:"",
      lastname:"",
      address:"",
      email:"",
      gender:"",
      dob:"",
      course:"",
  });
  };

  return (
    <>
      <div className='main'>
        <h1>Registration Form</h1>
        <form onSubmit={handleSubmit}>
        <div className='name'>
            <input type="text" name='firstname' value={inputs.firstname} onChange={handleChange} placeholder='First name' className='form-control' required  />
            <input type="text" name='lastname' value={inputs.lastname} onChange={handleChange} placeholder='Last name' className='form-control' required />
        </div>
        <div>
          <input type="text" name='address' value={inputs.address} onChange={handleChange} placeholder='address' className='form-control' required />
          <input type="email" name='email' value={inputs.email} onChange={handleChange} placeholder='E-mail' className='form-control mt-2' required />
        </div>
        <div className="gender">
          <select id="gender" name="gender" value={inputs.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <div className="DOB">
          <input type="date" id="dob" name="dob" value={inputs.dob} onChange={handleChange} required />
        </div>
        </div>
        <div className="course">
          <select id="course" name="course" value={inputs.course} onChange={handleChange} required>
            <option value="">Select Course</option>
            <option value="biology">Biology</option>
            <option value="computer-science">Computer Science</option>
            <option value="commerce">Commerce</option>
            <option value="humanities">Humanities</option>
          </select>
        </div>
        <div className='bton'>
          <button className='btn' type='submit'>Submit</button>
        </div>
        </form>
        <div className='bton'>
          <button className='btn' onClick={handleReset}>Cancel</button>
        </div>
      </div>
    </>
  )
}

export default App
