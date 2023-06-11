import React from 'react';
import Detail from './Details';
import { useState } from 'react';
import { Form, Link, useRouteLoaderData} from "react-router-dom";
import SavePage from './SavePage';
import Introduction from './Introduction';
import axios from 'axios';

// Loading the Nav Bar/Scroll Bar List
export async function rootLoader(){
  const musicObjects = await getMusicObjects();
  return { musicObjects };
  return null;
}

// Fetching the Music objects

async function getMusicObjects()
{
  // const musicData = axios.get("url");
  return null;
}

export async function rootAction()
{
    
}

//Loader indivitual Items

export async function loader(param)
{ 
  if(!param.params.ItemId) {return "new"};
  console.log(param.params.ItemId);
  const item = param.params.ItemId;
  return item;
}

const SideScroller = ( params ) => {
  
  const listOfMusicObject = useRouteLoaderData("root");
  console.log(params);

  //Display - Returns the display associated with the views : (add a new item) or (view an added item) or (introduction page)
  function Display()
  { 
    let page = params.loadedData;
    if(page == "new") {return <SavePage />;}
    else if(page) {return <Detail toDisplay={page}/>}
    else {return <Introduction />;}
  }

  return (
    <div className="flex h-screen">
      <div className="flex-none w-64 bg-gray-100 overflow-y-scroll scrollbar scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {/* Heading */}
        <ul className="text-2xl font-bold px-4 py-8">
          Audio Files
        </ul>
        {/* Add Items */}
        <ul>
          <Link to="new">
            <button
              type="submit"
              className="bg-gray-500 hover:bg-gray-600 text-white text-2xl font-bold py-2 px-4 rounded"
            >
              +
            </button>
          </Link>
        </ul>

        { listOfMusicObject.length ? 
        (
          <p>
              {listOfMusicObject.map((musicObject) => {
                <li key={musicObject.id}>
                  <Link to={`${musicObject.id}`}>
                    
                  </Link>
                </li>
              })}
          </p>
        )
        : 
        (
          <p>
            Not Found
          </p>
        )
        }

      </div>

      <div className="flex items-center justify-center flex-grow">
        {Display()}
      </div>

    </div>
  );
};

export default SideScroller;