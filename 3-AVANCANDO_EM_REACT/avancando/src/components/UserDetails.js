const UserDetails = ({name, age, role}) => {
  return (
    <div>
      <h2>Pessoa: </h2>
      <ul>
        <li>Nome: {name}</li>
        <li>Age: {age}</li>
        <li>Role: {role}</li>
        {age >= 18 && <li>Pode tirar CNH</li>}
      </ul>
    </div>
  )
}

export default UserDetails