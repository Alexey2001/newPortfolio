import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: 'Alexey Andryushin',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'Home', path: '/'},
        {title: 'Home', path: '/'}
      ]
    }
  }

  render() {
    return (
      <div>Hello from react</div>
    );
  }
}

export default App;
