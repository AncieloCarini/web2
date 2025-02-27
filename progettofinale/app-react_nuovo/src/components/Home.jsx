import React from 'react';
import { Container, Card } from 'react-bootstrap';
import './Home.css';  // Assicurati di importare il CSS

const Home = () => {
  return (
    <Container className="container-background">
      <h1 className="page-home-about-title">Benvenuto nella Home Page</h1>

      {/* Descrizione della pagina Home */}
      <p className="page-home-about-description">
        Welcome to the home page! This is where you can access all the main features of our app.
        Explore Users, Posts, and more!
      </p>

      {/* Card in Home */}
      <Card className="home-card">
        <Card.Body>
          <Card.Title className="card-title">Users</Card.Title>
          <Card.Text className="card-text">
            The "Users" section lets you view and manage the users of the system. You can see their basic details and manage their profiles.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="home-card">
        <Card.Body>
          <Card.Title className="card-title">Posts</Card.Title>
          <Card.Text className="card-text">
            In the "Posts" section, you can view posts created by users. Each post contains a title and content created by a user.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="home-card">
  <Card.Body>
    <Card.Title className="card-title">Assenze</Card.Title>
    <Card.Text className="card-text">
      The "Assenze" section allows you to track user absences, including details like the date, type (sick leave, vacation, etc.), and duration.
    </Card.Text>
  </Card.Body>
</Card>

<Card className="home-card">
  <Card.Body>
    <Card.Title className="card-title">About</Card.Title>
    <Card.Text className="card-text">
      The "About" section provides information about the app, explaining its functionality and how to interact with it.
    </Card.Text>
  </Card.Body>
</Card>

          
    </Container>
  );
};

export default Home;
