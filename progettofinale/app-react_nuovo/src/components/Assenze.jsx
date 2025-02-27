import React, { useEffect, useState } from 'react';
import { Container, Table, Card, Form } from 'react-bootstrap';
import { fetchAbsences } from '../api';  // Assicurati di avere una funzione per recuperare le assenze dal backend


const Assenze = () => {
  const [absences, setAbsences] = useState([]);
  const [filteredAbsences, setFilteredAbsences] = useState([]);  // Stato per le assenze filtrate
  const [searchQuery, setSearchQuery] = useState('');  // Stato per la query di ricerca
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  useEffect(() => {
    const getAbsences = async () => {
      const data = await fetchAbsences();  // Ottieni i dati delle assenze dal backend
      setAbsences(data);
      setFilteredAbsences(data);  // Inizialmente mostra tutte le assenze
    };
    getAbsences();
  }, []);

  // Funzione per aggiornare la ricerca e filtrare le assenze
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();  // Ottieni la query in minuscolo per un confronto case-insensitive
    setSearchQuery(query);

    // Filtro le assenze che corrispondono al ID_Persona, tipo o giorno
    const filtered = absences.filter(absence => 
      absence.ID_Persona.toLowerCase().includes(query) || 
      absence.tipo.toLowerCase().includes(query) ||
      absence.giorno.toLowerCase().includes(query)
    );
    setFilteredAbsences(filtered);  // Aggiorna le assenze filtrate
  };

  // Funzione per riordinare i dati
  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }

    const sortedAbsences = [...filteredAbsences].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });

    setFilteredAbsences(sortedAbsences);
    setSortConfig({ key, direction });
  };

  return (
    <Container className="mt-4 container-background">
      <div className="container-content">
        <Card className="home-card shadow-lg">
          <Card.Body>
            <Card.Title className="card-title text-center">Assenze</Card.Title>
            <Card.Text className="card-text text-center mb-4">
              Below is a list of all absences. You can view their details by scrolling through the table.
            </Card.Text>

            {/* Casella di ricerca */}
            <Form.Control
              type="text"
              placeholder="Cerca per ID_Persona"
              value={searchQuery}
              onChange={handleSearchChange}
              className="mb-3"
            />

            {/* Tabella */}
            <Table striped bordered hover responsive className="custom-table">
              <thead>
                <tr>
                  <th onClick={() => handleSort('id')}>ID</th>
                  <th onClick={() => handleSort('ID_Persona')}>ID Persona</th>
                  <th onClick={() => handleSort('tipo')}>Tipo</th>
                  <th onClick={() => handleSort('giorno')}>Giorno</th>

                </tr>
              </thead>
              <tbody>
                {filteredAbsences.map(absence => (
                  <tr key={absence.id}>
                    <td>{absence.id}</td>
                    <td>{absence.persona}</td>
                    <td>{absence.tipo}</td>
                    <td>{absence.giorno}</td>
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

export default Assenze;
