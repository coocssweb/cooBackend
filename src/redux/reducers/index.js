import { combineReducers } from "redux-immutablejs";
import { routerReducer } from "react-router-redux";
import tags from "./tags";
import articles from "./articles";
import users from "./users";
import projects from "./projects";
import demos from "./demos";
import medias from "./medias";
import bestwishs from "./bestwishs";

export default combineReducers({
  tags,
  articles,
  users,
  projects,
  demos,
  medias,
  bestwishs,
  routing: routerReducer,
});
