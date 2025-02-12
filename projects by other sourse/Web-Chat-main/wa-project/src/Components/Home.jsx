import React from 'react'
import { storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import ChatPanel from './ChatPanel';
import ChatWindow from './ChatWindow';
import { useTheme } from './Theme_context'; 


function Home() {
  // const handleChange = (e) => {
  //   console.log("Change Event");
  //   const img = e.target.files[0];

  //   // address 
  //   const storageRef = ref(storage, "/profile" + Math.random());

  //   // strorage task    
  //   const uploadTask = uploadBytesResumable(storageRef, img);
  //   console.log("upload task ")
  //   // developer
  //   uploadTask.on("state_changed", progressCB, errorCB, finishedCb);

  //   // upload 
  //   function progressCB(data) {
  //     console.log("data", data);
  //   }
  //   // if error
  //   function errorCB(err) {
  //     // 
  //     console.log("err", err);
  //   }
  //   // on success
  //   function finishedCb() {
  //     console.log("successfully file uploaded");
  //     getDownloadURL(uploadTask.snapshot.ref).then(function (url) {
  //       console.log("url", url);
  //     })

  //   }


  // } 
      const { theme, toggleTheme } = useTheme(); // Get theme and toggle function

  return (
    
    <main className={`relative w-full h-screen  ${theme === 'dark'? 'dark' : ''}`}>

      {/* <input type='file'
        accept='image/png image/jpeg image/webp'
        onChange={handleChange}
      ></input> */}
      <div className="absolute top-0 h-[130px] bg-primary dark:bg-gray-800 w-full" />
      
      <div className="absolute p-5 top-0 h-screen w-full">
        <div className="bg-white dark:bg-gray-900 text-black dark:text-white w-full h-full shadow-md flex">
          {/* conditonal rehne waale hai -> chat list , profile */}
          <ChatPanel />
          {/* <div>Empty Chat</div>:<div>Individual CHat</div> */}
          <ChatWindow></ChatWindow>
        </div>
      </div>
         
     {/* Theme Toggle Button */}
     {/* <button
        onClick={toggleTheme}
        className="absolute bottom-5 right-5 px-4 py-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded-lg"
      >
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button> */}


    </main>

  )
}

export default Home