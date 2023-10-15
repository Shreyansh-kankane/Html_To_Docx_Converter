import './App.css';
import { useRef, useState } from 'react';
import Footer from './components/footer';
import Services from './components/Services';

import Lottie from 'lottie-react';
import animationData from './Animation - 1697390967309.json';

function App() {

  const fileInput = useRef(null);
  const [state, setState] = useState(false);
  const [url, setUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filename, setFilename] = useState(null);
  const handleReset = () => {
    setState(false);
    setUrl(null);
    setLoading(false);
    setError(null);
    setFilename(null);
  }
  const handleSubmit = async () => {

    const file = fileInput.current.files[0];
    if (!file.name.includes('.html')) {
      setError("Please upload a valid HTML file");
      return;
    }
    setError(null);
    setLoading(true);
    setFilename(file.name.replace('.html', 'docx'));
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("http://localhost:5000/getDocx", {
      method: 'POST',
      body: formData,
    });
    if (response.ok) {
      const responseBlob = await response.blob();
      setState(true);
      setLoading(false);
      setUrl(window.URL.createObjectURL(new Blob([responseBlob])));
    }
  }

  return (
    <>
      <nav className='navbar'>
        <a href='/' style={{ 'color': 'black', 'textDecoration': 'none' }}><h1 className='brandName'>docxGenerator</h1></a>
      </nav>
      {!loading && !state && <h1 className='heading'>HTML to DOCX Converter</h1>}

      {!loading && !state && <div className='container'>
        <div className='innercontainer'>
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="files" className="label">
              <div className="labelCont">
                <img className="docxlogo" src="docx.png" alt='**'></img>
                <div className="btn">
                  <h4>Upload File</h4>
                </div>
              </div>
            </label>
            <input onChange={handleSubmit} ref={fileInput} id="files" type="file" name='htmlfile' className="hidden"></input>

          </form>
        </div>
      </div>}

      <div className=''>
        {loading && <div className="flex flex-col flex-1 justify-center items-center">
          <div style={{ scale: "0.1", maxHeight: "40vh" }}><Lottie animationData={animationData}></Lottie> </div>
          <p style={{ textAlign: "center", fontSize: "1.5rem", color: "#BAC4C8" }}>
            Loading...
          </p>
        </div>}
        {error && <p style={{ textAlign: "center", fontSize: "1.5rem", color: "#3D0C11" }}>
          {error}</p>}
      </div>

      {state && !loading && <div className='pdContainer'>
        <iframe src={`https://docs.google.com/gview?url=https://firebasestorage.googleapis.com/v0/b/expensetrackerreact-680cb.appspot.com/o/Assignmen1.docx?alt=media&token=25afdcf7-3410-4fb9-b9ac-1509cab6870b&_gl=1*1pl0b85*_ga*NTQwMTk1MDI3LjE2OTczNjMxNTM.*_ga_CW55HF8NVT*MTY5NzM5MjcyMC4yLjEuMTY5NzM5MzAwMC40MS4wLjA`} frameBorder="0" style={{ height: "85vh", width: "60vw", margin: "0px 30px", padding: "0px 50px 0px 20px" }}>
        </iframe>
        <div className='downloadOption'>
          <h3>{filename}</h3>
          <button className='downBtn'><a href={url} download="filename.docx">Download</a></button>
          <button className='set' onClick={handleReset}>
            <img src="synchronize.png" alt="img" height={30} width={30} />
            <p>Start Over</p>
          </button>
        </div>

      </div>}
      
      <Services/>
      <Footer/>
    </>
  );
}

export default App;
