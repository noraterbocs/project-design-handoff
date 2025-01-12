import styled from 'styled-components';

export const Navbar = styled.div`
display: flex;
justify-content: space-between;
height:63px;
width: 90%;
align-items:center;
  @media (min-width: 1024px) {
  }
`;

export const Logo = styled.img`
height:2.8em;
  @media (min-width: 1024px) {
  height:3.6em;
  }
`;

export const HamburgerIcon = styled.button`
width: 2em;
height: 2em;
color:#FFFFFF;
align-self:center;
  @media (min-width: 1024px) {
  height:2.5em;
  }
   @media (min-width: 1440px) {
  display:none;
  }
`;

export const NavbarOptions = styled.div`
/* display:${(props) => (props.show ? 'flex' : 'none')}; */
display:none;
@media (min-width: 1440px) {
display:flex;
flex-direction:row;
color: #F7FEFF;
gap:3em;
}

`;

export const NavbarOption = styled.a`
font-size:1.3rem;
`;

export const ContainerNavbar = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items:center;
width:100%;
gap:34px;

  @media (min-width: 1024px) {
  }
`;
