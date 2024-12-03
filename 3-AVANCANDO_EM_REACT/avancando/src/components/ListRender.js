import { useState } from 'react'

const ListRender = () => {
  const [list] = useState(["João","Pedro","José"])
  const [users, setUsers] = useState([
    {id: 1, name: "João", age: 65},
    {id: 2, name: "Pedro", age: 35},
    {id: 3,name: "José", age: 54},
    {id: 4, name: "Matheus", age: 74}
  ])

  const deleteUser = () => {
    const randomNumber = Math.floor(Math.random() * 5)

    setUsers((prevUsers) => {
      console.log(prevUsers)
      return prevUsers.filter((user) => randomNumber !== user.id)
    })
  }

  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>

      <button onClick={deleteUser}>Delete A User</button>
    </div>
  )
}

export default ListRender