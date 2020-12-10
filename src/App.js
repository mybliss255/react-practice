import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
      return(
        <div className="mt-5 ml-5">
          <Button variant="primary" className="mr-2">button</Button>
          <Button variant="secondary" className="mr-2">button</Button>
          <Button variant="success" className="mr-2">button</Button>
          <Button variant="warning" className="mr-2">button</Button>
          <Button variant="danger" className="mr-2">button</Button>
          <Button variant="info" className="mr-2">button</Button>
        </div>
      )
  }
}
export default App;
