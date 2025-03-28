function OutputDisplay({ outputText }) {
  return (
    <div>
      <h2>Result:</h2>
      <textarea
        value={outputText}
        readOnly
        rows="4"
        cols="50"
      />
    </div>
  );
}

export default OutputDisplay;