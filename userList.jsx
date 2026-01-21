import React from 'react';
import { useFetchUsers } from './useFetchUsers';
import './userList.css'; // Importamos el diseño

function UserList() {
  // Usamos nuestro gancho personalizado
  const usuarios = useFetchUsers('https://jsonplaceholder.typicode.com/users');

  return (
    <div className="container">
      <h1 className="title">Lista de Usuarios</h1>
      <div className="grid">
        {usuarios.map(user => (
          <div key={user.id} className="card">
            <h3>{user.name}</h3>
            <p>{user.company.catchPhrase}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;