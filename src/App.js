import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import any additional styles

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React-Bootstrap App</h1>
        <Button variant="primary">Click me</Button>
      </header>
    </div>
  );
}

export default App;
