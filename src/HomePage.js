import React from 'react';
import './HomePage.css';
import './myFormatting.css';

function HomePage() {
  return (
    <div className="App">
      <header className="TopLeftTitle">
        <p>JAMES AUSTEN</p>
      </header>
      
      <flexContainer>
        <body className="LeftSide">
          <p> This is the start of my new site!</p>
          <p> Hello heroku!</p>
          <p> This is me! </p>
          <p> This is still me! </p>
          <p> This is still still me! </p>
        </body>
        
        <body className="RightSide">
          <p> it's some right side stuff :)</p>
        </body>
        <br/>
        
      </flexContainer>
      
    </div>
  );
}

export default HomePage;
