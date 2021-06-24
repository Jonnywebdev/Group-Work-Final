import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';
export default createGlobalStyle`
* {
  @import url('https://fonts.googleapis.com/css2?family=Poppins&family=Roboto&display=swap');
  font-family: Poppins !important;
}
    
`
// NAV and links
export const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #67bc98;
  transition: all 0.3s ease-in;
  font-size: 1.5rem;
  &:hover {
    color: #7b7fda;
  }
`;

export const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

export const Logo = styled.a`
  padding: 1rem 0;
  color: #2965f1;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.9rem;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const linkStyle = {
  textDecoration: "none",
  textAlign: "center",
  fontSize: "1.2em",
  color: '#FEFEFE',
  border: "2px solid black",
  backgroundColor: "#E1A315",
  borderRadius: "5px"
};

// Table, th, td, button
export const Table = styled.table`
  border-collapse: collapse;
  table-layout:fixed;
  width: 100%;
  overflow-x:auto;
    & th{
      text-align: center;
      padding: 8px;
      background-color: #04AA6D;
      color: white;
    }
    & td{
      text-align: center;
      word-wrap: break-word;
      padding: 8px;
    }
`;

export const Button = styled.button`
  color: white;
  width: 100px;
  background-color: ${(props) => props.backgroundColor};
  font-size: 1em;
  margin-top: 5px;
  margin-bottom: 5px;
  margin: 1 2em;
  padding: 0.30em 1em;
  border: 2px solid black;
  border-radius: 3px;
`;

// Form, input

export const FormGroup = styled.form`
  display: block;
	width: 300px;
	margin: 50px auto;
`;

export const Label = styled.label`
  font-family: 'Poppins', sans-serif;
	margin-bottom: 0.5em;
	color: black;
  display: block;
`;

export const Input = styled.input`
	padding: 0.5em;
	color: black;
	background: blanchedalmond;
	border: none;
	border-radius: 3px;
	width: 100%;
	margin-bottom: 0.5em;
`;

// LIST for items.js

export const Section = styled.section`
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
	color: black;
	border: none;
	border-radius: 3px;
	width: 100%;
	margin-top: 3.9em;
`;



