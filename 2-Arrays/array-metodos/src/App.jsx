import './App.css'

const users = [
  {
    name: "Carlos", 
    adress: "Rua X", 
    age: 28, 
    isAdmin: false, 
  },
  {
    name: "Maria", 
    adress: "Rua XX", 
    age: 31, 
    isAdmin: true, 
  },
  {
    name: "Matheus", 
    adress: "Rua XI", 
    age: 22, 
    isAdmin: false, 
  },
]


function App() {
return (
  <>
    <h1>Utilizando map</h1>
      <div>
        {users.map((user) => (
        <div>{user.name}, {user.age}</div>
    ))}

  <h1>Utilizando modulo padrão</h1>
    <div>{users[0].name}</div>
    <div>{users[1].name}</div>
    <div>{users[2].name}</div>

    </div>
  </>

  )
}

export default App
