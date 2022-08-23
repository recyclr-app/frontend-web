import axios from "axios";
import { useState } from "react";

function App() {
  const [userFile, setUserFile] = useState("");
  const [cvResult, setCvResult] = useState({
    name: "",
    url: "",
  });

  const onChange = (e) => {
    console.log(e.target.files);
    setUserFile(e.target.files);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("file-to-upload", userFile[0]);
    console.log(...formData);
    // console.log(userFile);
    try {
      const response = await axios.post(
        process.env.REACT_APP_SERVER_ENDPOINT + "cv/",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setCvResult(response.data);
    } catch (err) {
      console.log("err" + err);
    }
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input type="file" onChange={onChange} name="file-to-upload" />
        <input type="submit" value="Upload" />
      </form>
      <h2>{cvResult.name}</h2>
      {cvResult.url.length > 0 && (
        <img src={cvResult.url} style={{ width: "300px" }} alt="a hot dog" />
      )}
    </div>
  );
}

export default App;
