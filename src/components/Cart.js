// src/components/Cart.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from '../store/slices/cartSlice';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const CartItem = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px;
  text-align: center;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #ff0000;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #cc0000;
  }
`;

const Input = styled.input`
  width: 50px;
  padding: 5px;
  margin: 0 10px;
`;

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: Number(quantity) }));
  };

  return (
    <Container>
      <h1>Carrito</h1>
      <div>
        {cartItems.map(item => (
          <CartItem key={item.id}>
            <h2>{item.title}</h2>
            <p>${item.price}</p>
            <Input
              type="number"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item.id, e.target.value)}
            />
            <Button onClick={() => dispatch(removeFromCart(item))}>Eliminar</Button>
          </CartItem>
        ))}
      </div>
    </Container>
  );
};

export default Cart;
