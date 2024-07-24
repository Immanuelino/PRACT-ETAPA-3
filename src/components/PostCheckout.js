// src/components/PostCheckout.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const PostCheckout = () => {
  return (
    <Container>
      <h1>Gracias por tu compra!</h1>
      <p>Tu pedido ha sido confirmado y está en proceso de envío.</p>
    </Container>
  );
};

export default PostCheckout;
