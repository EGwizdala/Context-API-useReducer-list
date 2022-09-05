import styled from 'styled-components'


export const Container = styled.div`
    padding: 10px;
    transition: 0.2s all linear;
    background-color: ${props => props.mode ? '#222' : 'white' };
`;

export const Heading = styled.div`
    text-transform: uppercase;
    transition: 0.2s all linear;
    color: ${props => props.mode ? 'white' : '#222' };
`;

export const Text = styled.div`
    width: 70vw;
    transition: 0.2s all linear;
    color: ${props => props.mode ? 'white' : '#222' };
`;

export const Button = styled.button`
    border: none;
    padding: 10px 30px;
    border-radius: 4px;
    font-size: 15px;
    background-color: #222;
    color: ${props => props.mode ? '#ff0' : '#D3D3D3' };;
    font-size: 15px;
    cursor: pointer;
    transition: 0.2s all linear;
    margin: 5px;
`;


export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.mode ? 'white' : '#D3D3D3' };
  background: ${props => props.mode ? '#D3D3D3' : 'gray' };
  border: none;
  border-radius: 3px;
`;

