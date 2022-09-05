import { useEffect, useContext, useReducer } from 'react';
import AppProvider from './context/AppContext'
import CourseInfo from './CourseInfo';
import Form from './Form';
import FavouriteCourses from './FavouriteCourses';
import SwitchButton from './SwitchButton';
import { Heading, Container } from './Styles';
import { ThemeContext } from "./context/ThemeContext";
import {samurajProgramowaniaCourses} from "./data/data"


const fetchAsyncData = async() => {
  await new Promise((resolve, reject) => {
    setTimeout(resolve, 4000)
  })
}

const coursesReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.course];
    case "REMOVE":
      return state.filter(course => course.id !== action.id);
    case "FETCH":
      return action.data;
    default:
      throw new Error ('Coś poszło nie tak!')
  }
}

const App = ()=> {
  const [state, dispatch] = useReducer(coursesReducer, [])
  const asyncFetch = async () => {
    await fetchAsyncData()
    dispatch({type: "FETCH", data: samurajProgramowaniaCourses })
  }

  useEffect(() => {
    asyncFetch();
  }, [])

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const coursesElement = state.map(course => {
    return (
      <div key={course.id}>
        <br></br>
        <CourseInfo
          onClickHandler={dispatch}
          {...course}
        />
      </div>
    )
  })

  return (
    <Container mode={darkMode}>
      <SwitchButton mode={darkMode}></SwitchButton>
      <Heading mode={darkMode} >Lista taka tam</Heading>
      <hr></hr>
      <AppProvider>
        {coursesElement}
        <hr></hr>
        <Form mode={darkMode} addHandler={dispatch} />
        <hr></hr>
        <FavouriteCourses />
      </AppProvider>
    </Container>
  )
}


export default App;