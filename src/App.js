import Header from '../src/Components/Header'
import Blogs from "./Components/Blogs"
import Pagination from '../src/Components/Pagination'
import { useContext } from 'react';
import { AppContext } from './context/AppContext';
import { useEffect } from 'react';
import './App.css';

export default function App() {
  const {fetchBlogPosts}= useContext(AppContext);

useEffect(() => {
  fetchBlogPosts();
},[] );

  return(
    <div className='w-full h-full flex flex-col  gap-y-1 justify-center items-center'>
    <Header/>
    <Blogs/>
    <Pagination/>
    </div>
  ) ;
}
