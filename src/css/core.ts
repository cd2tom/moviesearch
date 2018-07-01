export default `

  * {
    box-sizing: border-box;
    font-family: 'PT Sans', sans-serif
  }

  body {
    background-color: #333;
  }

  .main {
    padding: 32px;
    height: 100vh;
    max-width: 1000px;
    margin: 0 auto;
  }

  .loader {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
  }

`