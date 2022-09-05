import React, {useContext} from 'react';
import { AppContext } from './context/AppContext';
import { ThemeContext } from "./context/ThemeContext";
import {Container, Button, Text, Heading} from './Styles'


const FavouriteCourses = () => {
    const { courseState, courseDispatch } = useContext(AppContext);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    
    const favouriteCoursesList = courseState.map(course => {
        const id = course.id;
        const handleOnClick = () => {
            courseDispatch({ id, type: "REMOVE" })
         }
        return (
        <Container key={course.id} mode={darkMode}>
            <Text mode={darkMode} key={course.id}>
            <br></br>{course.title}
            <Button mode={darkMode} onClick={handleOnClick}>Usuń z ulubionych</Button>
            </Text>
        </Container>
        )
    })

    return (
        <Container mode={darkMode}>
            <Heading mode={darkMode}>Twoje ulubione kursy</Heading>
            {favouriteCoursesList}
        </Container>
    )
}

export default FavouriteCourses;