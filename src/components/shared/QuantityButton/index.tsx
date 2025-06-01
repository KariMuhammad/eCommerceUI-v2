import { useState } from "react";

import { LuMinus, LuPlus } from "react-icons/lu";

const QuantityButton = () => {
  const [quantity, setQuantity] = useState(1);
  const limit = 10;

  const increaseQuantity = () => {
    setQuantity((q) => {
      if (q < limit) return q + 1;
      else return q;
    });
  };

  const decreaseQuantity = () => {
    setQuantity((q) => {
      if (q > 1) return q - 1;
      else return q;
    });
  };

  return (
    <div className="input-quantity">
      <span className="minus" onClick={decreaseQuantity}>
        <LuMinus />
      </span>
      <input name="quantity" type="text" value={quantity} />
      <span className="plus" onClick={increaseQuantity}>
        <LuPlus />
      </span>
    </div>
  );
};

export default QuantityButton;
