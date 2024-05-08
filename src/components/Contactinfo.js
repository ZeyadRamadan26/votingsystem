import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../components/firebaseConfig'; 

export default function Contactinfo() {
    const [issue, setIssue] = useState('');
    const [email, setEmail] = useState('');
    const [query, setQuery] = useState('');

    const handleSubmit = async () => {
        try {
            const contactCollectionRef = collection(db, 'ContactInfo'); 
            await addDoc(contactCollectionRef, {
                issue: issue,
                email: email,
                query: query
            });
            alert('Query submitted successfully!');
            setIssue('');
            setEmail('');
            setQuery('');
        } catch (error) {
            console.error('Error adding document: ', error);
            alert('Error submitting query. Please try again later.'); 
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-slate-400">
            <div className="absolute mt-30 ml-45 w-80  border-2 p-2 rounded-xl shadow-xl text-xl bg-white">
                <form>
                    <p className="text-2xl">Tell Us The Problem </p>
                    <div>
                        <label className="text-m">Select Issue*</label>
                        <select
                            className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:border-blue-500 w-full p-2"
                            value={issue}
                            onChange={(e) => setIssue(e.target.value)}
                        >
                            <option value="">-- Select Your Query --</option>
                            <option value="Feedback">Feedback</option>
                            <option value="find issue in using website">Find Issue in Using Website</option>
                            <option value="Access Related Issue">Access Related Issue</option>
                        </select>
                        <label className="text-m">Email Address*</label>

                        <input
                            className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:border-blue-500 w-full p-2.5"
                            type="email"
                            placeholder="username@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="text-m justify-center">Drop Your Query</label>
                        <textarea
                            className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:border-blue-500 w-full p-2.5"
                    
                            maxLength="300"
                            placeholder="Feel Free To Tell Us The Problem to Be Fixed"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        ></textarea>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded"
                            type="button"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}