export default function Card() {
    return (
        <div >
            <div class=" mr-36 w-96  text-left float-right 
                         -mt-11 w-1/3 flex-col py-40 rounded-xl 
                         bg-white text-gray-700 shadow-2xl">
                <div className="p-6">
                    <h5 className="text-center mr-4 mb-2 
                                   block font-sans text-xl 
                                   font-semibold text-blue-gray-900 
                                   antialiased">
                        Reach Us At
                    </h5>
                    <ul>
                        <li className="mt-2">
                            <span><i className="fa fa-phone mr-2"></i> </span>
                            +201117911806
                        </li><br></br>
                        <li className="mt-2">
                            <span><i className="fa fa-envelope mr-2"></i> </span>
                            <span>zezo.mezo490@gmail.com</span>
                        </li>
                        <li className="mt-2">
                            <span><i className="fa-solid fa-map-pin mr-2"></i>  
                            </span>
                                A-143, 9th Floor, Egypt Alexandria
                        </li>
                    </ul>
                </div>
            </div>
       </div>
    );
}