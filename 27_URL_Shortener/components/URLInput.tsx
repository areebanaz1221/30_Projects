// URLInput.js

const URLInput = () => {
    return (
      <input
        type="text"
        placeholder="Enter your URL here"
        className="url-input"
        style={{
          flexGrow: 1,
          padding: '0.5rem',
          border: '1px solid #d1d5db', // Light gray border
          borderRadius: '0.375rem', // Rounded corners
          transition: 'border-color 0.3s',
        }}
        onFocus={(e) => (e.target.style.borderColor = '#9333ea')} // Change border color on focus
        onBlur={(e) => (e.target.style.borderColor = '#d1d5db')} // Revert border color on blur
      />
    );
  };
  
  export default URLInput;
  