// import { useLoaderData } from "react-router-dom";
// import CountryCard from "../CountryCard/CountryCard";
// import { useState } from "react";


// const AllCountry = () => {

//     const [country, setcountry] = useState(loadedTourists);
//     const loadedCountry = useLoaderData(0)



//     return (
//         <div>
//             <h2> Country: {loadedCountry.length} </h2>

//             <div className="grid grid-cols-1 lg:grid-cols-3 lg:mx-32">
//                 {loadedCountry.map((tourist) => (
//                     <CountryCard
//                         key={tourist._id}
//                         tourist={tourist}
                        
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default AllCountry;

import { useLoaderData } from "react-router-dom";
import CountryCard from "../CountryCard/CountryCard";

const AllCountry = () => {
    // Fetch data from useLoaderData
    const loadedCountry = useLoaderData();

    return (
        <div>
            <h2> Country: {loadedCountry.length} </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 lg:mx-32">
                {loadedCountry.map((country) => ( // Changed tourist to country
                    <CountryCard
                        key={country._id}
                        country={country} // Pass country as prop
                    />
                ))}
            </div>
        </div>
    );
};

export default AllCountry;
