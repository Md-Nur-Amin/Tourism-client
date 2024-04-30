import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import form_background from '../../assets/Form_background.jpg'


const UpdateTourist = () => {

    const touristData = useLoaderData();
const { _id, spot, country, location, description, price, season, time, number, email, name, photo } = touristData;

const handleUpdateTourist = event => {
    event.preventDefault();
    const form = event.target;

    const updatedSpot = form.spot.value;
    const updatedCountry = form.country.value;
    const updatedLocation = form.location.value;
    const updatedDescription = form.description.value;
    const updatedPrice = form.price.value;
    const updatedSeason = form.season.value;
    const updatedTime = form.time.value;
    const updatedNumber = form.number.value;
    // const updatedEmail = form.email.value; // Corrected typo
    // const updatedName = form.name.value;
    const updatedPhoto = form.photo.value;

    const updatedTourist = {
        spot: updatedSpot,
        country: updatedCountry,
        location: updatedLocation,
        description: updatedDescription,
        price: updatedPrice,
        season: updatedSeason,
        time: updatedTime,
        number: updatedNumber,
        email: email, // Assuming email and name are obtained from the original tourist data
        name: name,
        photo: updatedPhoto
    };

    fetch(`http://localhost:5000/tourist/${_id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedTourist)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Tour Updated successfully',
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
                <form onSubmit={handleUpdateTourist} className=' border hover:border-black p-5 backdrop-blur-sm rounded-3xl' >
                    <h2 className='text-black text-center mb-10' > Update Tourist spot: {spot} </h2>
                    {/* Form name and quantity row */}
                    <div className="lg:flex gap-x-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-quicksand text-black font-semibold"> Tourist Spot Name </span>
                            </label>

                            <input className="input input-bordered px-10" placeholder="Enter sopt name" defaultValue={spot} name="spot" />

                        </div>


                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text font-quicksand text-black font-semibold"> Country Name </span>
                            </label>
                            <input className="input input-bordered px-10" placeholder="Enter country name" defaultValue={country} name="country" />
                        </div>
                    </div>
                    {/* Form row end */}


                    {/* Form supplier row */}
                    <div className="lg:flex gap-x-5 my-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-quicksand text-black font-semibold"> Location </span>
                            </label>
                            <input className="input input-bordered px-10" placeholder="Enter location" defaultValue={location} name="location" />
                        </div>

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text font-quicksand text-black font-semibold">Description</span>
                            </label>
                            <input className="input input-bordered px-10" placeholder="Enter description" defaultValue={description} name="description" />
                        </div>
                    </div>
                    {/* Form row end */}


                    {/* Form categoty row */}
                    <div className="lg:flex gap-x-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-quicksand text-black font-semibold"> Average Cost </span>
                            </label>
                            <input className="input input-bordered px-10" placeholder="Enter average cost" defaultValue={price} name="price" />
                        </div>

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text font-quicksand text-black font-semibold"> Seasonality </span>
                            </label>
                            <input className="input input-bordered px-10" placeholder="Enter season" defaultValue={season} name="season" />
                        </div>
                    </div>
                    {/* Form row end */}


                    {/* Form categoty row */}
                    <div className="lg:flex gap-x-5 my-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-quicksand text-black font-semibold"> Travel time </span>
                            </label>
                            <input className="input input-bordered px-20" placeholder="Enter travel time" defaultValue={time} type='time' name="time" />
                        </div>

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text font-quicksand text-black font-semibold"> Total Visit per Year </span>
                            </label>
                            <input className="input input-bordered px-10" placeholder="Enter total visit per year" defaultValue={number} name="number" />
                        </div>
                    </div>
                    {/* Form row end */}

                    {/* Form categoty row */}
                    {/* <div className="lg:flex gap-x-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-quicksand text-black font-semibold"> User Email </span>
                            </label>
                            <input className="input input-bordered px-10" placeholder="Enter your mail" name="email" />
                        </div>

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text font-quicksand text-black font-semibold"> Your Name </span>
                            </label>
                            <input className="input input-bordered px-10" placeholder="Enter your name" name="name" />
                        </div>
                    </div> */}
                    {/* Form row end */}


                    {/* Form photo url row */}
                    <div className="gap-x-5 my-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-quicksand text-black font-semibold"> Photo  </span>
                            </label>
                            <input className="input input-bordered " placeholder="Enter Photo URL" defaultValue={photo} name="photo" />
                        </div>
                    </div>
                    {/* Form row end */}
                    <input className="btn hover:bg-[#bef264]  font-quicksand text-black w-full font-bold mt-5 bg-[#D2B48C]" type="submit" value="Add " />

                </form>
            </div>
        </div>
    );
};

export default UpdateTourist;