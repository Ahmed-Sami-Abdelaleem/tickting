"use client";
import { useDispatch } from "react-redux";
import { addProduct } from "./../cart/cartSlice";
type Iprops = {
  title: string;
  price: number;
  id: number;
};
const Card = (props: Iprops) => {
  const dispatch = useDispatch();
  return (
    <div className="h-auto rounded-lg bg-gray-200 p-4">
      <img
        src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        alt=""
        className="aspect-square w-full rounded object-cover"
      />
      <div className="mt-3">
        <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
          {props.title}
        </h3>
        <p className="mt-1 text-sm text-gray-700">${props.price}</p>
      </div>
      <button
        onClick={() =>
          dispatch(
            addProduct({ id: props.id, title: props.title, price: props.price })
          )
        }
        className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
