import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./../../_store/store";
import { removeProduct } from "./cartSlice";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.producs);
  const total = useSelector((state: RootState) => state.cart.totalPrice);
  const dispatch = useDispatch();
  return (
    <div className="fixed right-0 top-0 h-full w-64 bg-white shadow-lg p-4 overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item: any) => (
            <div key={item.id} className="mb-4 border-b pb-2">
              <h3 className="font-semibold">{item.name}</h3>
              <p>Price: ${item.price}</p>
              <div className="flex items-center mt-2">
                <span className="mx-2">{item.quantity}</span>

                <button
                  onClick={() => dispatch(removeProduct(item.id))}
                  className="ml-4 text-red-500"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <strong>Total: ${total}</strong>
          </div>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded w-full">
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
