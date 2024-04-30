import { useContext } from "react";
import 'animate.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { AuthContext } from "../Providers/AuthProvider";


const Profile = () => {
    const { user, updateUserProfile, setUser } = useContext(AuthContext);

    const updation = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;

        updateUserProfile(name, photo)
            .then(() => {
                setUser({
                    ...user,
                    displayName: name,
                    photoURL: photo
                });
            })
            .catch(error => {
                console.error("Error updating profile:", error);
            });
    };

    return (
        <div >
            
            <HelmetProvider>
                <Helmet><title>User Profile</title></Helmet>

                <div className="lg:flex ">
                    <div className="hero lg:my-20 py-10 border-b-4 lg:border-none bg-base-200 lg:ml-20 rounded-2xl">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={user?.photoURL} className="lg:h-[200px] rounded-lg shadow-2xl" alt="User Avatar" />
                            <div>
                                <h1 className="text-3xl lg:text-4xl font-bold">{user?.displayName}</h1>
                                <p className="py-5">{user?.email}</p>
                            </div>
                        </div>
                    </div>

                </div>

            </HelmetProvider>
           
        </div>
    );
};

export default Profile;
