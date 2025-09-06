import nonVeg from "../assets/nonveg.svg";
import veg from "../assets/veg.svg";
import ratingStar from "../assets/ratingStar.svg";
import { useGlobalContext } from "../Utils/GlobalContext";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../Utils/CartSlice";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const AccordionCard = ({ info, isLast }) => {
  const { resId } = useParams();
  const {
    name,
    price,
    imageId,
    description,
    isVeg,
    defaultPrice,
    id,
    ratings,
  } = info;

  const rating = ratings?.aggregatedRating?.rating;
  const { cdn } = useGlobalContext();
  const dispatch = useDispatch();
  const cartData = useSelector((store) => store.cart);
  const foundItem = cartData.data.find((item) => item.id === id);

  return (
    <div
      className={
        "flex items-center h-[200px] mb-4 " +
        (!isLast ? "border-b border-gray-200 pb-4" : "")
      }
    >
      {/* Left Info */}
      <div className="w-[90%] pr-4">
        <img className="h-[20px]" src={isVeg ? veg : nonVeg} alt={isVeg ? "Veg" : "Non-Veg"} />
        <p className="font-bold text-lg mt-1">{name}</p>
        <p className="text-base text-gray-700 mb-1">
          ₹{Number(price || defaultPrice) / 100}
        </p>

        {rating && (
          <span className="flex items-center gap-1 text-sm text-gray-600 mb-1">
            <img src={ratingStar} alt="Rating Star" className="h-[14px]" />
            {rating}
          </span>
        )}

        <p className="text-sm text-[#606a75]">{description}</p>
      </div>

      {/* Right Image & Add Button */}
      <div className="relative h-full w-[150px] flex-shrink-0">
        {imageId && (
          <img
            className="h-[90%] w-full object-cover rounded-2xl"
            src={cdn + imageId}
            alt={name}
          />
        )}

        {!foundItem ? (
          <button
            onClick={() => {
              dispatch(addItem({ info, resId }));
              toast.success("Item added to cart!");
            }}
            className="absolute bottom-[10px] left-1/2 -translate-x-1/2 bg-white text-green-600 py-1 px-4 rounded-lg shadow-md font-semibold text-sm"
          >
            ADD
          </button>
        ) : (
          <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 flex items-center gap-2 border bg-white border-gray-300 rounded-full px-4 py-1 shadow-md">
            <button
              onClick={() => {
                dispatch(removeItem({ id }));
                toast.error("Item removed!");
              }}
              className="text-lg font-bold text-gray-700 hover:text-red-600"
            >
              -
            </button>
            <p className="text-base font-medium text-gray-800">
              {foundItem.quantity}
            </p>
            <button
              onClick={() => {
                dispatch(addItem({ info, resId }));
                toast.success("Increased quantity!");
              }}
              className="text-lg font-bold text-gray-700 hover:text-green-600"
            >
              +

            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccordionCard;



