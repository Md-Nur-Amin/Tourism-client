import  { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TouristCard from "../TouristCard/TouristCard";

const AllTouristSpot = () => {
    const loadedTourists = useLoaderData();
    const [tourists, setTourists] = useState(loadedTourists);
    const [sortedBy, setSortedBy] = useState(""); 

    // Function to sort 
    const sortByAverageCost = () => {
        const sortedTourists = [...tourists].sort((a, b) => a.price - b.price);
        setTourists(sortedTourists);
        setSortedBy("average_cost");
    };

    //handle sorting
    const handleSort = (type) => {
        if (type === "average_cost") {
            sortByAverageCost();
        }
        
    };


    return (
        <div>
            <h2>All tourist: {loadedTourists.length}</h2>
            
            <div className="dropdown lg:ml-28 mb-10">
                <div tabIndex={0} role="button" className="btn m-1">
                    Sort by
                </div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li onClick={() => handleSort("average_cost")}>
                        <a>Average Cost</a>
                    </li>
                    
                </ul>
            </div>

            
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:mx-32">
                {loadedTourists.map((tourist) => (
                    <TouristCard
                        key={tourist._id}
                        tourist={tourist}
                        
                    />
                ))}
            </div>
        </div>
    );
};

export default AllTouristSpot;











