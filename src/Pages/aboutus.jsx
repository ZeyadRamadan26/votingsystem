import Navbar from '../components/Navbar';
import Card from '../components/card'
import Contactinfo from '../components/Contactinfo';
import Maps from '../components/maps'
import Footer from '../components/Footer';
function AboutUs(){
    return(
        <>
        <div className=''>
        <Navbar />
        <Card /><br/><br/><br/><br/><br/><br/><br/>
        <Maps/>
        <Footer/>
        </div>
        </>

    );
    
}
export default AboutUs;