import React, { Component, Fragment } from 'react';

class App extends Component {
  render() {
    return (
      <Fragment>
        Zacznij tutaj. Przeczytaj <strong>README.md</strong> i zapoznaj się z treścią zadania
        rekrutacyjnego.
        <br/>
        <a href={`${process.env.REACT_APP_API_URL}/docs`} target="_blank" rel="noopener noreferrer">
          Dokumentacja API
        </a>
      </Fragment>
    );
  }
}

export default App;
