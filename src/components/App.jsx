import React, { useState } from "react";
import Game from "./Game";
import Error from "./Error";
import data from "../Apprentice_TandemFor400_Data.json";

function App() {
  const [triviaData, setTriviaData] = useState([]);
  const [errors, setErrors] = useState([]);

  const handleUpload = e => {
    let reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(e.target.files[0]);
  }

  const onReaderLoad = e => {
    const triviaData = JSON.parse(e.target.result);
    setTriviaData(triviaData);
  }

  const quickStart = e => {
    setTriviaData(data)
  }

  const welcome = (
    <div>
      <h1>
        Tandem Trivia Game!
      </h1>
      <label onClick={quickStart}>QuickStart</label>

      <label htmlFor="file"> Use Your Own File 
        <input 
          id="file"
          type="file" 
          name="file"
          style={{visibility: 'hidden'}}
          onChange={handleUpload}
        />
      </label>

    </div>
  )

  return (
    <div className="app">
      {!triviaData.length ? welcome : 
        <Game 
          triviaData={triviaData} 
          setTriviaData={setTriviaData}
          />}
      {errors.length ? <Error errors={errors} /> : null}
    </div>
  );
}

export default App;