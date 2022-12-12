import React from 'react';
import ComponentB from './ComponentB';

export const UserContext=React.createContext();

const App=()=>{
  return (
    <div>
      <center>
        <UserContext.Provider value={"Srihitha"}>
        <ComponentB />
        </UserContext.Provider>
      </center>
    </div>
  );
}

export default App;
