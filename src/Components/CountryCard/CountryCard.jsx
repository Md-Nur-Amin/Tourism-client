import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard = ({ country }) => { // Removed setcountry from props
    const { _id, countryName, description, image } = country;

    return (
        <div>
            <div className='my-10'>
                <div className="card lg:w-80 p-3 border-b shadow-xl">
                    <figure><img src={image} alt="photo" /></figure>

                    <div className="card-body">
                        <h2 className="card-title font-quicksand font-bold"> Country name:  {countryName} </h2>
                        <hr className='' />
                        <p> Short Description: {description} </p>
                        <div>
                        <Link to={`/countryDetails/${_id}`} className='btn'> View Details </Link>

                        {/* <Link to={`/updateTourist/${_id}`}>
                            <button className='btn'> Update </button>
                        </Link> */}
                        
                        {/* <button onClick={() => handleDelete(_id)} className='btn'> Delete </button> */}

                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryCard;
