import Swal from 'sweetalert2';
import form_background from '../../assets/Form_background.jpg'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const AddTouristSpot = () => {
    const { user } = useContext(AuthContext) 

    const handleAddTourist = event => {
        event.preventDefault();
        const form = event.target;

        const spot = form.spot.value;
        const country = form.country.value;
        const location = form.location.value;
        const description = form.description.value;
        const price = form.price.value;
        const season = form.season.value;
        const time = form.time.value;
        const number = form.number.value;
        const email = form.email.value; // Corrected typo
        const name = form.name.value;
        const photo = form.photo.value;

        const newTourist = { spot, country, location, description, price, season, time, number, email, name, photo };
        console.log(newTourist);

        fetch('http://localhost:5000/tourist', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTourist)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) { // Corrected typo
                    Swal.fire({
                        title: 'Success!',
                        text: 'User added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                }
            });

    };





    return (
        <div className=''>
            {/* <h2>Add Tourist spot</h2>  */}
            <div className='flex justify-center py-10' style={{ backgroundImage: `url(${form_background})`, backgroundSize: 'cover' }}>
                
                <form onSubmit={handleAddTourist} className=' border hover:border-black p-5 backdrop-blur-sm rounded-3xl' >
                    <h2 className='text-black text-center mb-10' > Add Tourist spot </h2>
                    {/* Form name and quantity row */}
                    <div className="lg:flex gap-x-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-quicksand text-black font-semibold"> Tourist Spot Name </span>
                            </label>

                            <input className="input input-bordered px-10" placeholder="Enter sopt name" name="spot" />

                        </div>


                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text font-quicksand text-black font-semibold"> Country Name </span>
                            </label>
                            <input className="input input-bordered px-10" placeholder="Enter country name" name="country" />
                        </div>
                    </div>
                    {/* Form row end */}


                    {/* Form supplier row */}
                    <div className="lg:flex gap-x-5 my-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-quicksand text-black font-semibold"> Location </span>
                            </label>
                            <input className="input input-bordered px-10" placeholder="Enter location" name="location" />
                        </div>

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text font-quicksand text-black font-semibold">Description</span>
                            </label>
                            <input className="input input-bordered px-10" placeholder="Enter description" name="description" />
                        </div>
                    </div>
                    {/* Form row end */}


                    {/* Form categoty row */}
                    <div className="lg:flex gap-x-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-quicksand text-black font-semibold"> Average Cost </span>
                            </label>
                            <input className="input input-bordered px-10" placeholder="Enter average cost" name="price" />
                        </div>

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text font-quicksand text-black font-semibold"> Seasonality </span>
                            </label>
                            <input className="input input-bordered px-10" placeholder="Enter season" name="season" />
                        </div>
                    </div>
                    {/* Form row end */}


                    {/* Form categoty row */}
                    <div className="lg:flex gap-x-5 my-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-quicksand text-black font-semibold"> Travel time </span>
                            </label>
                            <input className="input input-bordered px-20" placeholder="Enter travel time" type='time' name="time" />
                        </div>

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text font-quicksand text-black font-semibold"> Total Visit per Year </span>
                            </label>
                            <input className="input input-bordered px-10" placeholder="Enter total visit per year" name="number" />
                        </div>
                    </div>
                    {/* Form row end */}

                    {/* Form categoty row */}
                    <div className="lg:flex gap-x-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-quicksand text-black font-semibold"> User Email </span>
                            </label>
                            <input className="input input-bordered px-10" placeholder="Enter your mail" disabled defaultValue={user.email} name="email" />
                        </div>

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text font-quicksand text-black font-semibold"> Your Name </span>
                            </label>
                            <input className="input input-bordered px-10" placeholder="Enter your name" disabled defaultValue={user.displayName} name="name" />
                        </div>
                    </div>
                    {/* Form row end */}


                    {/* Form photo url row */}
                    <div className="gap-x-5 my-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-quicksand text-black font-semibold"> Photo  </span>
                            </label>
                            <input className="input input-bordered " placeholder="Enter Photo URL" name="photo" />
                        </div>
                    </div>
                    {/* Form row end */}
                    <input className="btn hover:bg-[#bef264]  font-quicksand text-black w-full font-bold mt-5 bg-[#D2B48C]" type="submit" value="Add " />

                </form>
            </div>
        </div>
    );
};

export default AddTouristSpot;