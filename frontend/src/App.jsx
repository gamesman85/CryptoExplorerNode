import { useState } from 'react';
import InputForm from './components/InputForm';
import OutputDisplay from './components/OutputDisplay';
import { processCryptoRequest } from './services/cryptoService';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [algorithm, setAlgorithm] = useState('aes-256-cbc');
  const [operation, setOperation] = useState('encrypt');
  const [secretKey, setSecretKey] = useState(''); // Renamed from key/setKey
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = await processCryptoRequest(inputText, algorithm, operation, secretKey); // Use secretKey here
    
    if (data.result) {
      setOutputText(data.result);
    } else if (data.error) {
      setOutputText(`Error: ${data.error}`);
    }
  };
  
  return (
    <div>
      <h1>Cryptography Explorer</h1>
      
      <InputForm
        inputText={inputText}
        setInputText={setInputText}
        secretKey={secretKey}
        setSecretKey={setSecretKey}
        algorithm={algorithm}
        setAlgorithm={setAlgorithm}
        operation={operation}
        setOperation={setOperation}
        handleSubmit={handleSubmit}
      />
      
      <OutputDisplay outputText={outputText} />
    </div>
  );
}

export default App;