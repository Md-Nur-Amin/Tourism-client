
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const TouristCard = ({ tourist, tourists, setTourists }) => {

    const { _id, spot, country, location, description, price, season, time, number, email, name, photo } = tourist;


    return (
        <div>
            <div className='my-10' >

                <div className="card lg:w-80 p-3 border-b shadow-xl">
                    <figure><img src={photo} alt="photo" /></figure>

                    <div className="card-body">
                        <h2 className="card-title font-quicksand font-bold"> Tourist spot name:  {spot} </h2>
                        <hr className='' />
                        <p> Seasonality: {season} </p>
                        <p className='font-quicksand'> Average cost:  {price} </p>
                        <p> Visit per year:  {number} </p>
                        <p> Travel time:  {time} </p>                      
                    </div>

                    <div>
                        <Link to={`/tourDetails/${_id}`} className='btn'> View Details </Link>

                        {/* <Link to={`/updateTourist/${_id}`}>
                            <button className='btn'> Update </button>
                        </Link> */}
                        
                        {/* <button onClick={() => handleDelete(_id)} className='btn'> Delete </button> */}

                    </div>

                </div>

            </div>

        </div>
    );
};

export default TouristCard;