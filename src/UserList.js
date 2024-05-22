import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  // État pour stocker la liste des utilisateurs
  const [listOfUser, setListOfUser] = useState([]);

  // Utiliser useEffect pour obtenir des données lorsque le composant est monté
  useEffect(() => {
    // Fonction pour obtenir les utilisateurs
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setListOfUser(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      <ul>
        {listOfUser.map(user => (
          <li key={user.id}>
            {user.name} - {user.email} - {user.address.city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
