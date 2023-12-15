'use client'

import { useState, createContext } from "react"; 

const DataContext= createContext();

const DataContextProvider = (props) => {
    const [videoData, setVideoData]= useState([
        {
            embededCode: '8znAaJYpqPs',
            title: 'Video 1',
            description: 'this is a song',
            category: 'trailer',
        },
        {
            embededCode: 'mob4RkUFIAE',
            title: 'Video 2',
            description: 'this is a song',
            category: 'trailer',
        },
        {
            embededCode: 'KwWUQAG0sKk',
            title: 'Video 3',
            description: 'this is a song',
            category: 'trailer',
        },
        {
            embededCode: 'UYI6yhi4aTc',
            title: 'Video 4',
            description: 'this is a song',
            category: 'trailer',
        },
        {
            embededCode: 'GLy4VKeYxD4',
            title: 'Video 5',
            description: 'this is a song',
            category: 'music video',
        },
        {
            embededCode: 'GLy4VKeYxD4',
            title: 'Video 6',
            description: 'this is a song',
            category: 'trailer',
        },
        {
            embededCode: 'GLy4VKeYxD4',
            title: 'Video 7',
            description: 'this is a song',
            category: 'music video',
        },
        {
            embededCode: 'GLy4VKeYxD4',
            title: 'Video 8',
            description: 'this is a song',
            category: 'trailer',
        },
        {
            embededCode: 'GLy4VKeYxD4',
            title: 'Video 9',
            description: 'this is a song',
            category: 'film',
        },
    ]);

    return(
        <DataContext.Provider value={{videoData}}>
            {props.children}
        </DataContext.Provider>
    )
}

export { DataContextProvider, DataContext };