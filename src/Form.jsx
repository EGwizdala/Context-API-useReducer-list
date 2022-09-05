import React, { useContext, useState } from 'react';
import { Container, Button, Input } from './Styles';
import { ThemeContext } from "./context/ThemeContext";

const Form = ({ addHandler }) => {
  const [inputData, setInputData] = useState("");
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleOnChange = (event) => setInputData(event.target.value);
  const handleOnClick = () => {
    const course = {
      id: Math.floor(Math.random() * 1000),
      title: inputData
    }

    addHandler({type: "ADD", course});
    setInputData("");
  }

  return (
    <Container mode={darkMode}>
      <Input mode={darkMode} type="text" onChange={handleOnChange} value={inputData} />
      <Button mode={darkMode} onClick={handleOnClick}>Dodaj kurs</Button>
    </Container>
  )
}

export default Form;



// import React, { useState } from 'react';

// const Form = ({addHandler}) => {
//   const [inputData, setInputData] = useState('');

//   const handleOnChange = event => setInputData(event.target.value);

//   const handleOnClick = () => {
//     const course = {
//       id: Math.floor(Math.random() * 1000),
//       title: inputData,
//     };

//     addHandler({type: 'ADD', course});
//     setInputData('');
//   };

//   return (
//     <div>
//       <input type="text" onChange={handleOnChange} value={inputData} />
//       <button onClick={handleOnClick}>Dodaj kurs</button>
//     </div>
//   );
// };

// export default Form;