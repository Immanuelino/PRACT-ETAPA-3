import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../store/slices/cartSlice';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simula la confirmación de la compra
    dispatch(clearCart());
    navigate('/confirmation');
  };

  return (
    <Container>
      <h1>Checkout</h1>
      <div>
        {cartItems.map(item => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Dirección de envío"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Método de pago"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
        <Button type="submit">Confirmar compra</Button>
      </Form>
    </Container>
  );
};

export default Checkout;
