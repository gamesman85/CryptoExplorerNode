const crypto = require('crypto');

// AES Encryption
const encryptAES = (text, key) => {
  // Create a buffer from the key (using SHA-256 hash of the key for consistent length)
  const keyHash = crypto.createHash('sha256').update(key).digest();
  // Generate a random initialization vector
  const iv = crypto.randomBytes(16);
  // Create cipher
  const cipher = crypto.createCipheriv('aes-256-cbc', keyHash, iv);
  // Encrypt the text
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  // Return both the IV and encrypted content (IV is needed for decryption)
  return iv.toString('hex') + ':' + encrypted;
};

// AES Decryption
const decryptAES = (text, key) => {
  // Split the stored result into IV and encrypted text
  const parts = text.split(':');
  if (parts.length !== 2) {
    throw new Error('Invalid encrypted text format');
  }
  
  const iv = Buffer.from(parts[0], 'hex');
  const encrypted = parts[1];
  
  // Create a buffer from the key (using SHA-256 hash of the key for consistent length)
  const keyHash = crypto.createHash('sha256').update(key).digest();
  
  // Create decipher
  const decipher = crypto.createDecipheriv('aes-256-cbc', keyHash, iv);
  
  // Decrypt the text
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  
  return decrypted;
};

// SHA-256 Hashing
const hashSHA256 = (text) => {
  return crypto.createHash('sha256').update(text).digest('hex');
};

// MD5 Hashing
const hashMD5 = (text) => {
  return crypto.createHash('md5').update(text).digest('hex');
};

// Base64 Encoding
const encodeBase64 = (text) => {
  return Buffer.from(text).toString('base64');
};

// Base64 Decoding
const decodeBase64 = (text) => {
  return Buffer.from(text, 'base64').toString('utf8');
};

module.exports = {
  encryptAES,
  decryptAES,
  hashSHA256,
  hashMD5,
  encodeBase64,
  decodeBase64
};