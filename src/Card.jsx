import React from 'react'

const Card = (props) => {

    function deleteCard(){
        const copyUsers = [...props.allUsers]
        copyUsers.splice(props.index,1)
        props.setAllUsers(copyUsers)
    }
  return (
    <div>
      <button onClick={deleteCard}>Delete</button>
    </div>
  )
}

export default Card
