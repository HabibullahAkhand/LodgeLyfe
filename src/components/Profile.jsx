import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from 'sweetalert2'
import {Helmet} from "react-helmet";


const Profile = () => {
    const { updateUserProfile,user } = useContext(AuthContext);

    
    const handleUpdate = (e) => {
        // e.preventDefault();
        const name = e.target.name.value;
        const url = e.target.photo.value;
        console.log(name, url);
        updateUserProfile(name, url)
        
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
          });  
          window.location.reload();
          }
    return (
        <div className="min-h-[50vh] my-10 lg:mt-28">
            <Helmet>
                <title>Update Profile || LodgeLyfe</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <h3 className="text-2xl md:text-5xl text-center">Update Your Profile Now</h3>
            <div className=" rounded-t-3xl py-6 lg:py-10">
                <img src={user?.photoURL} className="lg:w-40 md:w-32 w-28 lg:h-40 md:h-32 h-28 rounded-full mx-auto " alt="" />
                <h1 className="lg:text-5xl md:text-3xl text-xl text-center mt-3 ">{user?.displayName}</h1>
            </div>
            <form onSubmit={handleUpdate}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text"
                        name="name"
                            placeholder="Your Name"
                                required 
                                    className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input
                        type="text"
                            required
                                name="photo"
                                    placeholder="Photo URL"
                                        className="input input-bordered" />
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-primary bg-[#cfa25a] border-none text-white hover:bg-[#836535]">Update</button>
                </div>
            </form>
        </div>
    );
};

export default Profile;