import axios from "axios";
import React from "react";
import { useState } from "react";
import { Form } from "react-router-dom";

export default function SavePage()
{   
    const [selectedFile, setSelectedFile] = useState(null);
    const [IsDragging, setIsDragging] = useState(false);
    const [display, setDisplay] = useState(null); // Can be Save, Item or not Found.
    
    //OnSave

    async function handleSave()
    {
      // const formData = new FormData();
      // formData.append('file', selectedFile);
      // try {
      //   await axios.post('/api/upload/', formData, {
      //     headers: {
      //       'Content-Type': 'multipart/form-data',
      //     },
      //   });

      //   // File uploaded successfully
      //   console.log('File uploaded');
      // } catch (error) {
      //   // Handle error
      //   console.error(error);
      // }

    }
    
    // onChange Handlers

    const onFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    function handleDragOver(e) {
        e.preventDefault();
        setIsDragging(true);
    }
    function handleDragEnter(e) {
        e.preventDefault();
        setIsDragging(true);
    }
    function handleDragLeave(e) {
        e.preventDefault();
        setIsDragging(false);
    }
    function handleDrop(e) {
        e.preventDefault();
        setIsDragging(false);

        const droppedFile = e.dataTransfer.files[0];
        setSelectedFile(droppedFile);
    }

    
    return (
        <Form className="flex flex-col items-center justify-center" 
              onSubmit={handleSave} 
              onDragOver={handleDragOver}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}>
    
          {/* Upload audio */}
          <div className="mb-4">
    
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Upload Audio Files
            </label>
    
            <div className="border-dashed border-2 border-gray-400 rounded-lg p-8">
              
              <input
                type="file"
                accept="audio/*"
                onChange={onFileChange}
                className="hidden"
                id="audioFileInput"
              />
              <label htmlFor="audioFileInput" className="cursor-pointer">
                {selectedFile ? selectedFile.name : 'Choose a file'}
              </label>
    
            </div>
    
          </div>
    
          {/* Enter Name */}
          <div className="mb-4">
    
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              className="appearance-none border border-gray-400 rounded-lg py-2 px-4 w-64 leading-tight focus:outline-none focus:border-blue-500"
              placeholder="Enter name"
            />
    
          </div>
    
          {/* Save Button */}
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            Save
          </button>
    
        </Form>
      )
}