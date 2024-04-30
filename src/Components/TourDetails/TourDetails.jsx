// TourDetails.jsx
import Aos from 'aos';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const TourDetails = () => {
    const { id } = useParams();
    const [touristDetails, setTouristDetails] = useState(null);

    useEffect(() => {
        // Fetch tourist details based on the id
        fetch(`http://localhost:5000/tourist/${id}`)
            .then(res => res.json())
            .then(data => setTouristDetails(data))
            .catch(error => console.error('Error fetching tourist details:', error));
    }, [id]);


    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);


    return (
        <div  >
            {touristDetails ? (
                <div className='ml-20'>
                    <h2 className='text-center text-3xl font-quicksand font-bold my-5'> Here is your tour Details</h2>
                    {/* <p>Tourist spot name: {touristDetails.spot}</p>
                    <p>Average cost: {touristDetails.price}</p>
                    <p>Visit per year: {touristDetails.number}</p>
                    <p>Travel time: {touristDetails.time}</p>
                    <p>Seasonality: {touristDetails.season}</p> */}


                    <div data-aos="flip-left" className="card w-96 bg-base-100 shadow-xl mb-10 pb-5">

                        <figure><img src={touristDetails.photo} alt="photo" /></figure>

                        <div className="card-body">
                            <h2 className="card-title font-quicksand "> Country {touristDetails.country} </h2>

                            <div className='lg:flex gap-x-3'>
                                <p className='font-quicksand text-sm font-semibold'> Location:  {touristDetails.location} </p>
                                <p className='font-quicksand text-sm font-semibold'> Spot: {touristDetails.spot} </p>
                            </div>

                            <div className="flex items-center">
                                <div className="w-24 h-[1px] bg-gray-300"></div>
                                <div className="px-5 font-quicksand font-semibold"> Time: {touristDetails.time} </div>
                                <div className="w-24 h-[1px] bg-gray-300"></div>
                            </div>

                            <div className='lg:flex gap-x-20'>
                                <p className='font-quicksand text-sm font-medium'> Price : {touristDetails.price} </p>
                                <p className='font-quicksand text-sm font-medium'> Tour Number : {touristDetails.number} </p>
                            </div>

                            <div className=''>
                                <p className='font-quicksand  font-medium my-5'> Season : {touristDetails.season} </p>
                                <p className='font-quicksand text-sm font-medium'> Description about spot : {touristDetails.description} </p>
                            </div>
                           



                        </div>

                    </div>





                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default TourDetails;
