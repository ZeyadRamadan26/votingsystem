import React, { useState, useEffect } from 'react';
import './check.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../components/firebaseConfig';

function VotingResults() {
  const [votingData, setVotingData] = useState([]);

  useEffect(() => {
    async function fetchVotingData() {
      const votesCollectionRef = collection(db, 'VotesData');
      const votesSnapshot = await getDocs(votesCollectionRef);
      const votingDataArray = [];
      votesSnapshot.forEach((doc) => {
        votingDataArray.push({ id: doc.id, data: doc.data() });
      });
      setVotingData(votingDataArray);
    }
    fetchVotingData();
  }, []);

  return (
    <>
      <Navbar /><br/><br/><br/><br/><br/><br/>
      <div className="bg-white rounded-lg shadow-md p-8 w-80 max-w-screen-lg sm:w-96 mt-6">
        <h2 className='text-2xl'>Voting Results</h2>
        <div>
          {votingData.map((item) => (
            <div key={item.id}>
              <p>{item.data.name}</p>
              <p>Votes: {item.data.votes}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default VotingResults;