import Aos from "aos";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CountryDetails = () => {

    const { id } = useParams();
    const [countryDetails, setcountryDetails] = useState(null);



    useEffect(() => {
        // Fetch tourist details based on the id
        fetch(`http://localhost:5000/countrySide/${id}`)
            .then(res => res.json())
            .then(data => setcountryDetails(data))
            .catch(error => console.error('Error fetching tourist details:', error));
    }, [id]);

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);


    return (
        <div data-aos="flip-left">
            <div>
                {countryDetails ? (
                    <div data-aos="fade-left">
                        <h2>Country Details</h2>

                        <p>Country name: {countryDetails.countryName}</p>
                        <p>Average cost: {countryDetails.description}</p>
                        

                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>

        </div>
    );
};

export default CountryDetails;