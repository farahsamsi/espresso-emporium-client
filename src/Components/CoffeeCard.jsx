import { FaEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

    const handleDelete = _id => {
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
                fetch(`http://localhost:5000/coffees/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remaining);
                        }
                    })
            }
        });
    }

    return (
        <div className="card bg-base-100 shadow-xl flex-col md:flex-row">
            <figure className="px-10 py-10 md:w-5/12">
                <img
                    src={photo}
                    alt={name}
                    className="rounded-xl w-full object-cover" />
            </figure>
            <div className="flex flex-col justify-center items-start">
                <p><span className="font-bold">Name : </span>{name}</p>
                <p><span className="font-bold">Chef : </span>{chef}</p>
                <p><span className="font-bold">Taste : </span>{taste}</p>
            </div>
            <div className="card-body flex-row md:flex-col justify-between items-end">
                <button className="btn bg-[#D2B48C] text-white text-xl max-w-fit"><FaEye /></button>
                <Link to={`/updateCoffee/${_id}`}><button className="btn bg-[#3C393B] text-white text-xl max-w-fit"><FaPen /></button></Link>
                <button onClick={() => handleDelete(_id)} className="btn bg-[#EA4744] text-white text-xl max-w-fit"><MdDelete /></button>
            </div>
        </div>
    );
};

export default CoffeeCard;