import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = ()=> useContext(CartContext)

const CartContextProvider = ({children})=> {

    const [cartList, setCartList] = useState([]);
    const [precioTotal, setPrecioTotal] = useState(0);
    const [prodsTotales, setProdsTotales] = useState(0);
    const [cantEnCarrito, setCantEnCarrito] = useState(0);
    const [ordenId, setOrdenId] = useState('');

    function yaEnCarrito(prod) {
        return cartList.some(el => el.id === prod.id);
    }

    function actualizarCarrito(arr) {
        setCartList(arr);
        setPrecioTotal(arr
            .map(curr => curr.cantidad*curr.precio)
            .reduce((acc,curr) => acc+curr,0)
        );
        setProdsTotales(arr
            .map(curr => curr.cantidad)
            .reduce((acc,curr) => acc+curr,0)
        );
    }

    function addToCart(prod) {
        if (yaEnCarrito(prod)) {
            let i = cartList.findIndex(el => el.id === prod.id);
            const newCartList = cartList;
            newCartList[i].cantidad += prod.cantidad;
            actualizarCarrito(newCartList);
        } else {
            actualizarCarrito([...cartList,prod]);
        }
    }

    function vaciarCarrito() {
        setCartList([])
    }

    function verSiHayEnCarrito(prod) {
        if (yaEnCarrito(prod)) {
            let i = cartList.findIndex(el => el.id === prod.id);
            setCantEnCarrito(cartList[i].cantidad);
        } else {
            setCantEnCarrito(0);
        }
    }

    function eliminarProducto(prod) {
        setOrdenId('');
        const newCartList = cartList.filter(el => el.id !== prod.id);
        actualizarCarrito(newCartList);
    }

    
    return(
        <CartContext.Provider value={{
            cartList,
            addToCart,
            vaciarCarrito,
            yaEnCarrito,
            verSiHayEnCarrito,
            cantEnCarrito,
            precioTotal,
            prodsTotales,
            eliminarProducto
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider