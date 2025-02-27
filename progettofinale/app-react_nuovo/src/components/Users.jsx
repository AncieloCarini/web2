import React, { useEffect, useState } from 'react';
import { Container, Table, Card, Form } from 'react-bootstrap';
import { fetchUsers } from '../api';  // Presumo che tu stia usando una funzione per recuperare gli utenti dal backend
import './Users.css';  // Importa il nuovo file CSS

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);  // Stato per gli utenti filtrati
  const [searchQuery, setSearchQuery] = useState('');  // Stato per la query di ricerca

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
      setFilteredUsers(data);  // Inizialmente mostra tutti gli utenti
    };
    getUsers();
  }, []);

  // Funzione per aggiornare la ricerca e filtrare gli utenti
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();  // Ottieni la query in minuscolo per un confronto case-insensitive
    setSearchQuery(query);

    // Filtro gli utenti che corrispondono al nome o cognome
    const filtered = users.filter(user => 
      user.nome.toLowerCase().includes(query) || 
      user.cognome.toLowerCase().includes(query)
    );
    setFilteredUsers(filtered);  // Aggiorna gli utenti filtrati
  };

  // Funzione per riordinare i dati
  const handleSort = (key) => {
    const sortedUsers = [...filteredUsers].sort((a, b) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    });
    setFilteredUsers(sortedUsers);  // Ordinare solo i risultati filtrati
  };

  return (
    <Container className="mt-4 container-background">
      <div className="container-content">
        <Card className="home-card shadow-lg">
          <Card.Body>
            <Card.Title className="card-title text-center">Users</Card.Title>
            <Card.Text className="card-text text-center mb-4">
              Below is a list of all users. You can view their details by scrolling through the table.
            </Card.Text>

            {/* Casella di ricerca */}
            <Form.Control
              type="text"
              placeholder="Cerca per nome o cognome"
              value={searchQuery}
              onChange={handleSearchChange}
              className="mb-3"
            />

            {/* Tabella */}
            <Table striped bordered hover responsive className="custom-table">
              <thead>
                <tr>
                  <th onClick={() => handleSort('id')}>ID</th>
                  <th onClick={() => handleSort('nome')}>Nome</th>
                  <th onClick={() => handleSort('cognome')}>Cognome</th>
                  <th onClick={() => handleSort('posizione')}>Posizione</th>
                  <th onClick={() => handleSort('stipendio')}>Stipendio</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.nome}</td>
                    <td>{user.cognome}</td>
                    <td>{user.posizione}</td>
                    <td>{user.stipendio}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default Users;
