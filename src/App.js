import React, {useState} from 'react';
import UserTable from './shared/Table';
import AddUserForm from './views/AddScreen'
import EditYo from './views/EditScreen';
import { v4 as uuidv4 } from 'uuid';

function App() {

  // Agregar usuarios
  const usersData = [
    { id: uuidv4(), name: 'Tania', email: 'floppydiskette',dataBorn:"09-09-99",phone:"dasdasdsad",addrest:"calle falsa 123"  },
  ]

  const [users, setUsers] = useState(usersData)

  const addUser = (user) => {
    user.id = uuidv4()
    console.log(user)
    setUsers([
      ...users,
      user
    ])
  }

  // Eliminar usuario
  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  // Editar usuario
  const [editing, setEditing] = useState(false)

  const initialFormState = { id: null, name: '', username: '' }
  const [currentUser, setCurrentUser] = useState(initialFormState)

  const editRow = user => {
    setEditing(true) 
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  return (
    <div className="container">
      <h1>Contactos</h1>
      <div className="flex-row">
        <div className="flex-large">
        {editing ? (
          <div>
            <h2>Editar contactos</h2>
            <EditYo 
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </div>
        ) : (
          <div>
            <h2>Añadir contactos</h2>
            <AddUserForm addUser={addUser}  />
          </div>
        )}
      </div>
        <div className="flex-large">
          <h2>Mis contactos</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  );
}

export default App;
