import React, { useState } from 'react'

const App = () => {

  const [name, setName] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [role, setRole] = useState('')
  const [description, setDescription] = useState('')

  function handleSubmit(e){
    e.preventDefault();

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
    </div>
  )
}

export default App
