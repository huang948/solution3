import React, { useState } from "react";

const App = () => {
  const [error, setError] = useState(null);
  const [inputUrl, setInputUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const getShortUrl = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: inputUrl }),
    };
    const request = await fetch("http://localhost:5000/urls/", requestOptions);
    const response = await request.json();
    if (response.success) {
      setError(null);
      setShortUrl(response.shortUrl);
      setInputUrl("");
    } else {
      setError(response.error);
      setShortUrl("");
      setInputUrl("");
    }
  };

  return (
    <div className="container">
      <div className="app-wrapper">
        <div className="input">
          <input
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            type="text"
          />
          <button onClick={getShortUrl}>Get Short URL!</button>
        </div>
        <div className="output">
          {error ? <p className="error">{error}</p> : <p>{shortUrl}</p>}
        </div>
      </div>
    </div>
  );
};

export default App;
