import React from 'react';
import { Container, Card } from 'react-bootstrap';
import './About.css'; // Assicurati di importare il CSS

const About = () => {
  return (
    <Container className="container-about">
      <h1 className="page-about-title">About</h1>
      
      <Card className="card-about">
        <Card.Body>
          <Card.Title className="card-about-title">Chi Siamo</Card.Title>
          <Card.Text className="card-about-text">
            Questa è una semplice applicazione React che utilizza React Bootstrap e l'integrazione di una REST API per visualizzare dati.
            Puoi esplorare i dati di utenti, post e altre informazioni tramite le rispettive sezioni.
            La nostra applicazione è progettata per fornire un'interfaccia utente chiara e reattiva, con l'obiettivo di migliorare l'esperienza utente.
          </Card.Text>
        </Card.Body>
      </Card>
      
      <Card className="card-about">
        <Card.Body>
          <Card.Title className="card-about-title">Obiettivi</Card.Title>
          <Card.Text className="card-about-text">
            Il nostro obiettivo è creare un'applicazione semplice, veloce e facile da usare, che permetta agli utenti di interagire con i dati
            in modo intuitivo. Utilizziamo tecnologie moderne come React e Flask per garantire prestazioni ottimali e una gestione efficiente
            dei dati.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default About;
