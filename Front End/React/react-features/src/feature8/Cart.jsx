import { useLocation } from "react-router-dom";


let Cart = () => {
    const location = useLocation();
    const queryParam = new URLSearchParams(location.search);

    const id = queryParam.get("id");
    const qty = queryParam.get("qty");

    return (
        <>
                <p>id = {id} qty = {qty}</p>
        </>
    )
}

export default Cart;