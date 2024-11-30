import { FaEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const CoffeeCard = ({ coffee }) => {
    const { name, chef, supplier, taste, category, details, photo } = coffee;

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
                <button className="btn bg-[#3C393B] text-white text-xl max-w-fit"><FaPen /></button>
                <button className="btn bg-[#EA4744] text-white text-xl max-w-fit"><MdDelete /></button>
            </div>
        </div>
    );
};

export default CoffeeCard;