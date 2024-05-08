import Navbar from "./Navbar";
import Footer from "./Footer"; 
import {db} from '../components/firebaseConfig';
import React from "react";
import { useState } from 'react';
import { addDoc,collection, query, where, getDocs } from "firebase/firestore";
function Signup() {
      const [name,setName] = useState();
      const [email,setEmail] = useState();
      const [idNumber,setIdNumber] = useState();

      const userCollectionRef = collection(db,"SignupData");
      const handleSubmit = async (event) =>{
        event.preventDefault();
        try {
          if (name === "admin" && email === "ziad@gmail.com" && idNumber === "123") {
            window.location.href = '/results';
          } else {
            const docRef = await getDocs(query(userCollectionRef, where("idNumber", "==", idNumber)));
            if (!docRef.empty) {
              alert("This ID number already exists.");
              window.location.href = '/';
            } else {
              await addDoc(userCollectionRef, {
                name: name,
                email: email,
                idNumber: idNumber 
              });
              alert("Data Confirmed");
              window.location.href = '/votingmain';
          }
          }
        } catch (error) {
          console.error("Error processing data: ", error);
        }
      };
    
    
      return (
        <>
        <Navbar/>
        <div className="flex items-center justify-center h-screen bg-zinc-400">
  <div className="bg-white rounded-lg shadow-md p-8 w-80 max-w-screen-lg sm:w-96 mt-6">
    <h1 className="text-2xl font-bold text-blue-gray-700 mb-2">Sign Up</h1>
    <p className="text-gray-500 mb-4">Nice to meet you! Enter your details to register.</p>
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-6">
        <label htmlFor="name" className="block text-sm font-medium text-blue-gray-700 mb-1">Your Name</label>
        <input
          id="name"
          type="text"
          className="w-full px-4 py-2 border border-blue-gray-200 rounded-lg focus:border-gray-900 focus:outline-none"
          placeholder="Name"
          onChange={(event)=>{setName(event.target.value)}} required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium text-blue-gray-700 mb-1">Your Email</label>
        <input
          id="email"
          type="email"
          className="w-full px-4 py-2 border border-blue-gray-200 rounded-lg focus:border-gray-900 focus:outline-none"
          placeholder="name@gmail.com"
          onChange={(event)=>{setEmail(event.target.value)}} required

        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-sm font-medium text-blue-gray-700 mb-1">National ID</label>
        <input
          id="IDnumber"
          type="text"
          className="w-full px-4 py-2 border border-blue-gray-200 rounded-lg focus:border-gray-900 focus:outline-none"
          style={{margin:''}}
          placeholder="Your ID Number"
          onChange={(event)=>{setIdNumber(event.target.value)}} required

        />
      </div>
      <button onClick={handleSubmit} className="w-full bg-blue-500 text-white py-2 rounded-lg focus:outline-none hover:bg-blue-600">Sign Up</button>
    </form>
  </div>
</div>
      <Footer/>
      </>
    );
  }
  export default Signup;