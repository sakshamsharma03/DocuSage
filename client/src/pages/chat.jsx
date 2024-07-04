import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/header';
import Result from '../components/result';

const Chat = () => {
  const [prompt,setPrompt]=useState("");
  const [file,setFile]=useState(null);

  const handlePrrompt=(e)=>{
  setPrompt(e.target.value);

  }
  const handleFile=(e)=>
    {
      setFile(e.target.files[0]);
    }

  const handleSubmit=async ()=>
    {
      if (!file || !prompt) {
        alert("Please provide both a file and a prompt.");
        return;
      }
      try {
        const formData = new FormData();
        formData.append("prompt", prompt);
        formData.append("file", file);
  
        const response = await axios.post("/upload", formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
  
        if (response.status === 200) {
          console.log("File and prompt successfully uploaded");
        } else {
          console.error("Failed to upload file and prompt");
        }
      } catch (error) {
        console.error("Error uploading file and prompt:", error);
      }
      setPrompt("");
      setFile(null);
    }
  return (
    <>
    <div className='bg-zinc-800 h-screen w-screen relative text-white'>
        <div className='absolute top-0 left-0 right-0'><Header/></div>
        <div className='absolute top-10 left-0 right-0'><Result/></div>
      <div className='absolute bottom-0 w-full flex pb-4'>
        <div className='flex items-center justify-center w-full space-x-4 py-8 p-4 rounded-t-md'>
          <input type="text" value={prompt} onChange={handlePrrompt} className='px-2 py-3 rounded-md outline-none bg-zinc-600 w-2/3' />
          <button className='px-4 py-3 rounded-md bg-zinc-600'  onClick={() => document.getElementById('fileInput').click()}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <input 
            id="fileInput"
            type="file" 
            className='hidden'
            accept=".txt,.pdf"
            onChange={handleFile}
          />
          <button type="submit" onClick={handleSubmit} className='px-4 py-3 rounded-md bg-zinc-600'>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Chat;
