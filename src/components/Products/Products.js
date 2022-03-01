import { FormProducts } from './FormProducts'
import { ListProducts } from './ListProducts'
import { Link, NavLink } from 'react-router-dom';
import styled from "styled-components";

const H4 = styled.h4`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: black;
    text-decoration: none
    font-size: 14px;
    margin: 20px 20px 0 0;
`

const Products = () => {

  return (
    <div>
      <Link
        as={NavLink}
        to="/">
        <H4>volver al carrito de Compras</H4>
      </Link>
      <FormProducts />
      <ListProducts />
    </div>
  )
}

export default Products