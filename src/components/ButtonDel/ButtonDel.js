import styled from 'styled-components';
const ButtonDel = styled.button`
width: 215px;
height: 48px;
margin: 24px 0 0 0;
border-radius: 6px;
border: solid 2px #dadada; 
font-weight: bold;
letter-spacing: normal;
background-color: ${props =>props.btnBG};;
color: ${props =>props.btnColor};
`;
export default ButtonDel