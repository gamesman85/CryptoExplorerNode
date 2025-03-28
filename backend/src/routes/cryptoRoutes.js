const express = require('express');
const router = express.Router();
const cryptoService = require('../services/cryptoService');

router.post('/crypto', (req, res) => {
  try {
    const { text, algorithm, operation, key } = req.body;
    
    if (!text) {
      return res.status(400).json({ error: 'Text is required' });
    }
    
    let result;
    
    switch (algorithm) {
      case 'aes-256-cbc':
        if (!key) {
          return res.status(400).json({ error: 'Key is required for AES encryption/decryption' });
        }
        
        if (operation === 'encrypt') {
          result = cryptoService.encryptAES(text, key);
        } else if (operation === 'decrypt') {
          result = cryptoService.decryptAES(text, key);
        }
        break;
        
      case 'sha256':
        result = cryptoService.hashSHA256(text);
        break;
        
      case 'md5':
        result = cryptoService.hashMD5(text);
        break;
        
      case 'base64':
        if (operation === 'encrypt') {
          result = cryptoService.encodeBase64(text);
        } else if (operation === 'decrypt') {
          result = cryptoService.decodeBase64(text);
        }
        break;
        
      default:
        return res.status(400).json({ error: 'Unsupported algorithm' });
    }
    
    res.json({ result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;