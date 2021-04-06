import React , { useState } from 'react';
import logo from './logo.svg';
import List from './compnents/List'
import data from './data'
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './reminder.css';
// the app main component
class App extends React.Component {
   render() {
     return(
    <main>
    	<section className="container">
          <List birthdays= {data}/>
      </section>
    </main>
  );
};
};

export default App;
