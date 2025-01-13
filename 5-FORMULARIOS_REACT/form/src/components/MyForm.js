import { useState } from 'react'
import './MyForm.css'

const MyForm = ({user}) => {
  // 6 - Controlled Input
  // 3 - Gerenciamento de dados
  const [name, setName] = useState(user ? user.name : "")
  const [email, setEmail] = useState(user ? user.email : "")
  const [bio, setBio] = useState(user ? user.bio : "")
  const [role, setRole] = useState(user ? user.role : "")

  const handleName = (event) => {
    setName(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Formulario Enviado!")
    console.log(name, email, bio, role)

    // 7 - Limpar formulário
    setName('')
    setEmail('')
    setBio('')
    setRole('')
  }

  // console.log(name)
  // console.log(email)
  
  return (
    <div>
      {/* 5 - Envio do form */}
      {/* 1 - criando form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome</label>
          <input 
            type="text" 
            name='name' 
            placeholder='Digite o seu nome'
            onChange={handleName}
            value={name}
          />
        </div>

        {/* 2 - Label envolvendo input */}
        <label>
          <span>E-mail</span>
          {/* 4 - Simplificando manipulação do useState */}
          <input 
            type="email" 
            name="email" 
            placeholder='Digite o seu email'
            onChange={(event) => (
              setEmail(event.target.value)
            )} 
            value={email}
          />
        </label>

        {/* 8 - textarea */}
        <label>
          <span>Bio</span>
          <textarea 
            name="bio"
            placeholder='Descrição do Usuário'
            onChange={(event) => setBio(event.target.value)}
            value={bio}
          >

          </textarea>
        </label>

        {/* 9 - Select */}
        <label>
          <span>Cargo</span>
          <select 
            name="role" 
            onChange={(event) => setRole(event.target.value)} 
            value={role}
          >
            <option value="user">Usuario</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </label>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default MyForm