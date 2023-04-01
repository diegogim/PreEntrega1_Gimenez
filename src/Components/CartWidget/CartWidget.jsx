import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { RiShoppingCartLine } from "react-icons/ri";
import Badge from "@mui/material/Badge";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  const total = getTotalQuantity();

  return (
    <Link to="/checkout" style={{ textDecoration: "none" }}>
      <Badge badgeContent={total} color="warning">
        <RiShoppingCartLine color="white" size={40} />
      </Badge>
    </Link>
  );
};

export default CartWidget;
