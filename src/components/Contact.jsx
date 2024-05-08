import Navbar from "./Navbar";
import React from "react";
import Card from "./card";
import Contactinfo from "./Contactinfo";
import Footer from "./Footer";
import Signup from './Signup'
import { Class } from "@mui/icons-material";
import { ClassNames } from "@emotion/react";
function Contact(){
return (
  <>
  <div>
    <Navbar/>
    <Contactinfo />
    <Footer/>
  </div>
  </>
);
}

export default Contact;
