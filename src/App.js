import './App.css';
import { useState } from 'react';
import Output from './Output';
import Input from './Input';

const App = () => {
const [color,setColor] = useState('');
  return (
    <div className="App">
       <Output color={color}/>
       <Input color={color} setColor={setColor}/>
    </div>
  );
}

export default App;
