import { createContext, useState } from "react"
import {baseUrl} from '../baseUrl';



export const AppContext = createContext();
 
 export default function  AppContextProvider({children}){
        const[loading,setLoding]=useState(false);
        const[posts,setPosts]=useState([]);
        const[page,setPage]=useState(1);
        const[totalPages,settotalPages]=useState(null);

// data filling  pending 

async function fetchBlogPosts(page=1){
    setLoding(true);
      let url =`${baseUrl}?page=${page}`
      console.log("printing the Url");
    
    try{
          const result = await fetch(url);
          const data = await result.json();
          console.log(data);
          setPage(data.page);
          setPosts(data.posts);
          settotalPages(data.totalPages);
    }
    catch(error){
        console.log("Error in fetching data");
        alert('Error');
        setPage(1);
        setPosts([]);
        setLoding(null);
    }
    setLoding(false);

}

function handlePageChange(page){
    setPage(page);
    fetchBlogPosts(page);

}

        const value ={
            loading,
            setLoding,
            posts,
            setPosts,
            setPage,
            page,
            totalPages,
            settotalPages,
            fetchBlogPosts,
            handlePageChange
        };

        return <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>

}
 
