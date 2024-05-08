import React, { useState, useEffect } from 'react';
import ziad from '../Images/king.png';
import boda from '../Images/boda.png';
import omar from '../Images/khalil.png';
import yehia from '../Images/yehia.png';
import './check.css';
import Navbar from '../components/Navbar';
import backgroundImage from '../Images/shutterstock_1833016393_crop.jpg';
import Footer from '../components/Footer';
import { collection, addDoc, doc, updateDoc, increment } from 'firebase/firestore';
import {db} from '../components/firebaseConfig';
function Voting() {
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);

  const votesCollectionRef = collection(db, 'VotesData');

  const handleCheckboxChange = (id) => {
      setSelectedCheckbox(id);
  };
  const handleVote = async () => {
    if (selectedCheckbox) {
        try {
            const voteDocRef = doc(votesCollectionRef, selectedCheckbox);
            await updateDoc(voteDocRef, {
                votes: increment(1)
            });
            setSelectedCheckbox(null);
            window.location.href = '/';
        } catch (error) {
            console.error('Error updating vote: ', error);
        }
    }
};
  return (
    <>
      <div className='relative h-screen overflow-hidden'>
        <div className="absolute max-h-screen -z-10 bg-cover w-full ">
          {/* <img src={backgroundImage} className="absolute max-h-screen -z-10 bg-cover w-full "  alt="background" /> */}
        </div>
        <Navbar />
        <ul>
          <div>
            <div className='d1l'>
              <li>
                <input
                  type="checkbox"
                  id="myone1"
                  className='cont1'
                  checked={selectedCheckbox === "myone1"}
                  onChange={() => handleCheckboxChange("myone1")}
                />
                <label htmlFor="myone1">
                  <img
                    src={ziad}
                    alt='ziad'
                    style={{ height: '150px', width: '150px', transition: '0.4s', transformorigin: '50% 50%', padding: '5px' }}
                    onClick={() => handleCheckboxChange("myone1")}
                  />
                  <p>Ziad Ramadan <br />Eat all the time</p>
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="myone2"
                  className='cont1'
                  checked={selectedCheckbox === "myone2"}
                  onChange={() => handleCheckboxChange("myone2")}
                />
                <label htmlFor="myone2">
                  <img
                    src={boda}
                    alt='boda'
                    style={{ height: '150px', width: '150px', transition: '0.4s', transformorigin: '50% 50%', padding: '5px' }}
                    onClick={() => handleCheckboxChange("myone2")}
                  />
                  <p>Abdulrahman ElMadkhoum <br />send all of you to the gym</p>
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="myone3"
                  className='cont1'
                  checked={selectedCheckbox === "myone3"}
                  onChange={() => handleCheckboxChange("myone3")}
                />
                <label htmlFor="myone3">
                  <img
                    src={omar}
                    alt='omar'
                    style={{ height: '150px', width: '150px', transition: '0.4s', transformorigin: '50% 50%', padding: '5px' }}
                    onClick={() => handleCheckboxChange("myone3")}
                  />
                  <p>Omar Hossam <br />Make all people happy</p>
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="myone4"
                  className='cont1'
                  checked={selectedCheckbox === "myone4"}
                  onChange={() => handleCheckboxChange("myone4")}
                />
                <label htmlFor="myone4">
                  <img
                    src={yehia} 
                    alt='yehia'
                    style={{ height: '150px', width: '150px', transition: '0.4s', transformorigin: '50% 50%', padding: '5px' }}
                    onClick={() => handleCheckboxChange("myone4")}
                  />
                  <p>Yehia Shama <br />Make Dreams Possible</p>
                </label>
              </li>
            </div>
          </div>
        </ul>
        <button href = "/" style={{marginLeft:"480px"}} className="bg-sky-500 px-72 text-white font-bold py-2 mt-4 rounded-full hover:bg-gradient-to-r from-sky-500 to-indigo-500"onClick={handleVote}>Vote</button>
      </div>
      <Footer/>
    </>
  );
}

export default Voting;