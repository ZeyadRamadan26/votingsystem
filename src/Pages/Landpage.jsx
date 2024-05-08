import { useTypewriter,Cursor } from 'react-simple-typewriter';
import Navbar from '../components/Navbar';
import { Routes,Route,Link } from 'react-router-dom';
import React from 'react';
import Footer from '../components/Footer'
function Data(){
    const [text] =useTypewriter({
      words:["Build Our Future"," "],
      loop:true,
    })
    return(
      <h1  className="mt-12 text-4xl text-white">
        Let's <span className="font-bold text-green-500">
          {text}
        </span>
        <Cursor/>
      </h1>
    );
  }
  function Landpage(){
    return(
      
      <div>
        <Navbar/>
      <div className="flex justify-center items-center">
        
        <form className="p-4 w-full max-w h-64 px-48 py-64">
        <Data/>
          <p className='text-xl text-white'>Welcome to our website! We're excited to introduce you to the innovative world of online
            governmental voting systems. Imagine being able to cast your vote from anywhere, anytime, 
            with just a few clicks. With online voting, that's not just a dream – it's a reality.
            Our system removes barriers to participation, making it easier for everyone to have their voice heard 
            in the democratic process.</p>
          <Link to='/Signup' className='px--1'><button className="bg-sky-500 text-white font-bold py-2 px-6 mt-4 rounded-full hover:bg-gradient-to-r from-sky-500 to-indigo-500">Get's Started</button></Link>
        </form>
        {/* <img src={image2} style={{width:'452px',height:'auto',marginTop:'190px',opacity:'40%'}}></img> */}
      </div>
      <Footer/>
      </div>
      );
  }
  export default Landpage;