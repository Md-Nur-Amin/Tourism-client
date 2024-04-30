import { useState, useContext, useEffect } from "react";
import Swal from 'sweetalert2';
import 'aos/dist/aos.css';
import 'animate.css';
import Profile from "../Profile/Profile";
import { HelmetProvider } from "react-helmet-async";
import { Helmet } from "react-helmet";
import { AuthContext } from "../Providers/AuthProvider";

const UpdateProfile = () => {


    const { updateprofile, user } = useContext(AuthContext);
    const [name, setName] = useState("");
    const [photo, setPhoto] = useState("");
    const [email, setEmail] = useState('');

    const handleProfile = async (e) => {
        e.preventDefault();
        try {
            await updateprofile(name, photo);
            Swal.fire("Success", "Profile updated successfully", "success");
        } catch (error) {
            Swal.fire("Error", "Error updating profile", "error");
        }
    };

    useEffect(() => {
        setEmail(user.email);
    }, [user]);

    // 

    return (
        <div >

            <HelmetProvider>
                <Helmet><title>Profile Update</title></Helmet>
                

                <div  className="lg:flex gap-x-10">

                    <div>
                        <Profile></Profile>
                    </div>

                    <div className="my-20 border rounded-xl mr-2">
                        
                        <form onSubmit={handleProfile} className="p-7">
                            <h2 className="my-5 text-3xl font-bold text-center animate__animated animate__fadeInLeft">Update Profile</h2>

                            <div >
                                <label htmlFor="name" className="font-semibold mb-1">Name</label>
                                <div>
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        placeholder="Your name"
                                        required
                                        defaultValue={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="px-10 lg:px-20 p-2 rounded border border-gray-600 bg-gray-100 dark:bg-gray-100"
                                    />
                                </div>


                            </div>



                            <div className="my-5">
                                <label htmlFor="photo" className="font-semibold mb-1 ">Photo URL</label>

                                <div>
                                    <input
                                        id="photo"
                                        type="text"
                                        placeholder="Photo URL"
                                        name="photo"
                                        required
                                        defaultValue={photo}
                                        onChange={(e) => setPhoto(e.target.value)}
                                        className="px-10 lg:px-20 p-2 rounded border border-gray-600 bg-gray-100 dark:bg-gray-100"
                                    />
                                </div>

                            </div>

                            <label htmlFor="photo" className="block font-semibold mb-1  ">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Your email"
                                required=""
                                name="email"
                                value={email}
                                disabled
                                className="px-10 lg:px-20 p-2 rounded border border-gray-600 bg-gray-100 dark:bg-gray-100"
                            />

                            <div className="my-5">
                                <button type="submit" className="ml-10 lg:ml-20 px-10 py-2 font-bold btn bg-green-400 hover:dark:bg-green-700">Update Profile</button>
                            </div>

                        </form>
                    </div>

                </div>




            </HelmetProvider>
        </div>
    );
};

export default UpdateProfile;