import loggedReducer from "./isLogged";
import educationReducer from "./education";
import experienceReducer from "./experience";
import skillReducer from "./skill";
import projectReducer from "./project";
import teacherReducer from "./teacher";
import sliderReducer from "./slider"
import messageReducer from "./message";
import { combineReducers } from "redux";
import aboutReducer from "./about";

const allReducers = combineReducers({
  educations: educationReducer,
  experiences: experienceReducer,
  skills: skillReducer,
  projects: projectReducer,
  homeslider: sliderReducer,
  teacher:teacherReducer,
  messages: messageReducer,
  login: loggedReducer,
  about: aboutReducer,
});

export default allReducers;
