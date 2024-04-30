import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
// import { useState, useEffect } from 'react';
import TouristCard from '../TouristCard/TouristCard';
import CountryCard from '../CountryCard/CountryCard';
import { useEffect } from 'react';
import Aos from 'aos';

const Home = () => {
    const loadedTourists = useLoaderData();
    const loadedCountries = useLoaderData();


    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);


    return (
        <div>
            <Banner />
            <div >
                <div data-aos="fade-left" className="grid grid-cols-1 lg:grid-cols-3 lg:mx-32 my-10">
                    {loadedTourists.slice(0, 6).map((tourist) => (
                        <TouristCard
                            key={tourist._id}
                            tourist={tourist}
                            // tourists={tourists}
                            // setTourists={setTourists}
                        />
                    ))}
                </div>

                <div data-aos="fade-left" className="grid grid-cols-1 lg:grid-cols-3 lg:mx-32 my-10">
                    {loadedCountries.slice(0, 6).map((country) => (
                        <CountryCard
                            key={country._id}
                            country={country}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
