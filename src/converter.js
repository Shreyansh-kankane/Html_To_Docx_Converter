document.getElementById("files").addEventListener("change",  async function (e) {
    // console.log("ran");
    const fileName =  document.getElementById("files").value;
    
    const file = document.getElementById("files").files[0];
    if(!file){
      return;
    }
    // console.log(file);
    if(!fileName.includes(".html")){
  
      let p=document.getElementById("error");
      p.innerText="Select valid HTML file";
      p.classList.remove("hidden")
      return;
    }
  
    let p=document.getElementById("error");
  
    p.classList.add("hidden")
   
    
   const formData = new FormData();
   formData.append("file",file);
   
   console.log(formData);
    const response = await fetch("http://localhost:3000/getDocx",{
      method:'POST',
      body:formData,
      
    }
    
    
    );
    console.log(response);
    
    const responseBlob = await response.blob();
    const url = window.URL.createObjectURL(new Blob([responseBlob]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'filename.docx');
    document.body.appendChild(link);
    link.innerText="Download";

  })