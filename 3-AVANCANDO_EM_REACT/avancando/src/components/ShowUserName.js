import React from 'react'

const ShowUserName = (props) => {
  return (
    <div>
      <h2>O nome do usuário: {props.name}</h2>
      <h2>O nome do usuário: {props.userName}</h2>
    </div>
  )
}

export default ShowUserName