import React from 'react';
import ContactCard from './components/contactCard';
import Decrement from './components/decrement';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }
  render() {
    return (
      <div>
        <div>
          <ContactCard 
            firstName= "Sammy"
            lastName= "Kush"
            workNumber= "8005435896"
            cellNumber= "6465698875"
            email= "sammy75@gmail.com"
          />
          <ContactCard 
            firstName= "Billy"
            lastName= "Bush"
            workNumber= "8005435896"
            cellNumber= "6465698875"
            email= "billy75@gmail.com"
          />
          <ContactCard 
            firstName= "Johnny"
            lastName= "Cash"
            workNumber= "8005435896"
            cellNumber= "6465698875"
            email= "johnny75@gmail.com"
          />
        </div>
        <div>
          <Decrement startNumber= {11}/>
        </div>
      </div>
      
    );
  }
}

export default App;
