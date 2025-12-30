import React, { useState } from 'react'

const App = () => {

  const [name, setName] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [role, setRole] = useState('')
  const [description, setDescription] = useState('')

  const [allUsers, setAllUsers] = useState([])

  function handleSubmit(e){
    e.preventDefault();

    const newUser = [...allUsers, {name, imageUrl, role, description}];
    setAllUsers(newUser);

    setName('');
    setImageUrl('');
    setRole('');
    setDescription('');
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        handleSubmit(e)
      }}>
        <input type="text" 
        placeholder="Enter your name" 
        required value={name} 
        onChange={(e)=>{
          setName(e.target.value)
        }}
        />

        <input type="text" 
        placeholder="Enter Image Url" 
        required 
        value={imageUrl} 
        onChange={(e)=>{
          setImageUrl(e.target.value)
        }}
        />

        <input type="text" 
        placeholder="Enter Role" 
        required 
        value={role}
        onChange={(e)=>{
          setRole(e.target.value)
        }} 
        />

        <input type="text" 
        placeholder="Enter Description" 
        required 
        value={description} 
        onChange={(e)=>{
          setDescription(e.target.value)
        }}
        />
        <button>Create User</button>
      </form>

      <div>
        {allUsers.map((user, index)=>(
          <div key={index}>
            <h2>{user.name}</h2>
            <img src={user.imageUrl} alt={user.name} width="100" />
            <h3>{user.role}</h3>
            <p>{user.description}</p>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default App
