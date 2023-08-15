import { useState } from 'react';
import Header from './components/Header/header'
import Edit from './components/Edit/Edit';
function App() {
  const [Isedit, setEdit]= useState(false);
  return (
    <div>
      {Isedit ?(<Edit setEdit={setEdit}/>)
      :(<Header  setEdit={setEdit}/>)}
        
        
    </div>
  );
}

export default App;
