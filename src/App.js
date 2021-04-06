import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContextData from './Context/Data/ContextData';
import ReducerData from './Context/Data/ReducerData';
import React from 'react';
import Container from './components/Container/Container';
import StateData from './Context/Data/StateData';


function App() {
  const [stateData, dispatchData] = React.useReducer(ReducerData, StateData)
  
  return (
    <div className="container">
      <ContextData.Provider value = {{stateData, dispatchData}}>
        <Container/>
      </ContextData.Provider>
      </div>
  );
}

export default App;
