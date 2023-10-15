import './App.css';
import { useRef, useState } from 'react';
import { Loader2 } from 'lucide-react';

function App() {

  const fileInput = useRef(null);
  const [state, setState] = useState(false);
  const [url, setUrl] = useState(null); 
  const [loading,setLaoading] = useState(false);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const file = fileInput.current.files[0];

    const formData = new FormData();
    formData.append("file", file);
    

    const response = await fetch("http://localhost:5000/getDocx", {
      method: 'POST',
      body: formData,
    });
    if(response.ok){
      setState(true);
      const responseBlob = await response.blob();
      setUrl(window.URL.createObjectURL(new Blob([responseBlob])));
    }
  }

  return (
    <>
      <nav className='navbar'>
        <a href='/'style={{'color': 'black','textDecoration':'none'}}><h1 className='brandName'>docxGenerator</h1></a>
      </nav>
      <h1 className='heading'>HTML to DOCX Converter</h1>

      <div className='container'>
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
            <input ref={fileInput} id="files" type="file" name='htmlfile' className="hidden"></input>
            <button type="submit" className="submitBtn">Convert</button>
          </form>
        </div>
      </div>
      <div>
        {state && <a href={url} download="filename.docx">Download</a>}
      </div>
    </>
  );
}

export default App;
