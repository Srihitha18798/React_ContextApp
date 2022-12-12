import React from 'react';
import { UserContext } from './App';

const ComponentB=()=>{
  return (
    <div>
      <center>
        <UserContext.Consumer>
            {value=><div>{value}</div>}
        </UserContext.Consumer>
      </center>
    </div>
  );
}

export default ComponentB;
