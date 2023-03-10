import React from "react";

const CartContextdata = React.createContext({
    items:[],
    addItem: (item) => {},
    removeItem: (id) => {}
});

export default CartContextdata;