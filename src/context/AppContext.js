import React, {createContext, useReducer} from 'react';

export const AppContext = createContext();

const favouriteCoursesReducer = (courseState, action) => {
    switch (action.type) {
        case "ADD":
            return (
                !courseState.some(course => course.id === action.course.id ) ? [...courseState, action.course] : courseState
            );
      case "REMOVE":
            return courseState.filter(course => course.id !== action.id);
      default:
        throw new Error ('Coś poszło nie tak!')
    }
  }

const AppProvider = ({ children }) => {
    const [courseState, courseDispatch] = useReducer(favouriteCoursesReducer, [])
    return (
        <AppContext.Provider value={{ courseState, courseDispatch }}>
          {children}
        </AppContext.Provider>
      )
}

export default AppProvider;