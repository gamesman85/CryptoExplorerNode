import React from 'react';

function InputForm({ 
  inputText, 
  setInputText, 
  secretKey,
  setSecretKey,
  algorithm, 
  setAlgorithm, 
  operation, 
  setOperation, 
  handleSubmit 
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Input Text:
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            rows="4"
            cols="50"
          />
        </label>
      </div>
      
      <div>
        <label>
          Secret Key:
          <input
            type="text"  
            value={secretKey}
            onChange={(e) => setSecretKey(e.target.value)}
          />
        </label>
      </div>
      
      <div>
        <label>
          Algorithm:
          <select value={algorithm} onChange={(e) => setAlgorithm(e.target.value)}>
            <option value="aes-256-cbc">AES-256-CBC</option>
            <option value="sha256">SHA-256 (Hash)</option>
            <option value="md5">MD5 (Hash)</option>
            <option value="base64">Base64 (Encoding)</option>
          </select>
        </label>
      </div>
      
      <div>
        <label>
          Operation:
          <select 
            value={operation} 
            onChange={(e) => setOperation(e.target.value)}
            disabled={['sha256', 'md5'].includes(algorithm)}
          >
            <option value="encrypt">Encrypt/Hash/Encode</option>
            <option value="decrypt" disabled={['sha256', 'md5'].includes(algorithm)}>
              Decrypt/Decode
            </option>
          </select>
        </label>
      </div>
      
      <button type="submit">Process</button>
    </form>
  );
}

export default InputForm;