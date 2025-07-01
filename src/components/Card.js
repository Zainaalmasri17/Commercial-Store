import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

export default function Card(props) {
  const navigate = useNavigate();
  const id = props.id;
  return (
    <div
      className="w-full max-w-[300px] bg-white rounded-xl overflow-hidden shadow-md hover:-translate-y-1 transition-transform duration-200 cursor-pointer"
      onClick={() => navigate(`/products/${id}`)}
    >
      <div
        className="w-full h-[200px] bg-cover bg-center"
        style={{ backgroundImage: `url(${props.img})` }}
      />
      <div className="p-4">
        <div className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 min-h-[60px]">
          {props.title}
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center text-gray-500">
            <FaStar className=" text-yellow-400 mr-1" />

            {props.rating}
          </div>
          <div className="flex items-center gap-2">
            <h4 className="text-gray-500 font-medium">price:</h4>
            <span className="text-lg font-bold text-green-600">
              ${props.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
