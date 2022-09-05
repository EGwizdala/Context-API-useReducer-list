import React, { useContext } from 'react';
import { AppContext } from './context/AppContext';
import { Container, Button, Text } from './Styles';
import { ThemeContext } from "./context/ThemeContext";

const CourseInfo = ({ id, onClickHandler, title }) => {
  const { courseDispatch } = useContext(AppContext);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  
  const handleOnClick = () => {
    onClickHandler({ id, type: "REMOVE" })
    courseDispatch({ id, type: "REMOVE" })
  }

  const handleFavouriteOnClick = () => {
    const course = {
      id: id,
      title: title
    }
    courseDispatch({type: "ADD", course});
  }
  return (
    <Container mode={darkMode}>
      <Text mode={darkMode}>{title}</Text>
      <Button mode={darkMode} onClick={handleOnClick}>Usuń kurs</Button>
      <Button mode={darkMode} onClick={handleFavouriteOnClick} >Dodaj do ulubionych</Button>
    </Container>
  )
}

export default CourseInfo;
