/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";

const MyList = () => {
    const { user } = useContext(AuthContext);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/tour/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setItems(data);
            });
    }, [user]);

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // Perform deletion
                fetch(`http://localhost:5000/tour/${_id}`, {
                    method: "DELETE"
                })
                    .then(response => {
                        if (response.ok) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Item has been deleted.",
                                icon: "success"
                            });
                            // Refresh the list after deletion
                            fetch(`http://localhost:5000/tour/${user?.email}`)
                                .then(res => res.json())
                                .then(data => {
                                    setItems(data);
                                });
                        }
                    })
                    .catch(error => {
                        console.error("Error deleting the item:", error);
                        Swal.fire({
                            title: "Error!",
                            text: "An error occurred while deleting the item.",
                            icon: "error"
                        });
                    });
            }
        });
    }








    return (
        <div className="max-w-[1300px] mx-auto mt-6 mb-32">

            <div className="">
                {/* <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Country name (spot)</th>
                        <th>Location</th>
                        <th>Season</th>
                        <th>Time</th>
                        <th>Time</th>
                    </tr>
                </thead> */}
                {items.map((item, index) => (

                    <div key={index} className="mx-5 lg:ml-28  my-5 shadow-2xl p-4 rounded-3xl">
                        <table className="table">
                            {/* head */}

                            <tbody>
                                {/* row 1 */}
                                <tr className="grid grid-cols-1 lg:grid-cols-3">

                                    <td>
                                        <div className="flex items-center gap-3 ">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold"> {item.country}  </div>
                                                <div className="text-sm opacity-50"> {item.location} </div>
                                            </div>
                                        </div>
                                    </td>

                                    <td> {item.description}
                                    </td>


                                    <th className="">
                                        <Link to={`/updateTourist/${item._id}`}>
                                            <button className='btn btn-ghost btn-xs bg-blue-400 hover:bg-blue-600 text-white lg:mr-5'> Update </button>
                                        </Link>

                                        <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-xs bg-red-400 hover:bg-red-600 text-white">Delete</button>
                                    </th>

                                </tr>

                            </tbody>

                        </table>
                    </div>
                ))}
            </div>

            {/* <div className="flex items-center justify-center">
                <div className="border-t border-gray-400 flex-grow"></div>
                <div className="mx-4">Text Between Lines</div>
                <div className="border-t border-gray-400 flex-grow"></div>
            </div> */}

        </div>
    );
};

export default MyList;

