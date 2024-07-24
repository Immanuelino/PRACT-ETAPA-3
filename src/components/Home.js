// src/components/Home.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../store/slices/productSlice';
import { addToCart } from '../store/slices/cartSlice';
import styled from 'styled-components';

const Container = styled.div`
  padding-left: 1000px;
  width: 20%;
  radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Product = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px;
  text-align: center;
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

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    // Simulando una llamada a una API
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      dispatch(setProducts(data));
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <Container>
      <h1>Productos</h1>
      <div>
        {products.map(product => (
          <Product key={product.id}>
            <img src="{product.image}"></img>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <Button onClick={() => dispatch(addToCart(product))}>Añadir al carrito</Button>
          </Product>
        ))}
      </div>
    </Container>
  );
};

export default Home;
