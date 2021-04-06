import styled from 'styled-components';

const CheckBox = styled.input.attrs(props =>({
    type: "checkbox"    
}))`
width: 18px;
height: 18px;
border-radius: 6px;
border: solid 2px #e8e8e8;
background-color: #ffffff;
display:none;
`;
export default CheckBox