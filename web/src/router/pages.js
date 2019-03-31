import { mapKeys } from "lodash";
import Home from "../pages/Home";
import Lobby from "../pages/Lobby";
import Vote from "../pages/Vote";

export const HOME = {
  path: "/",
  title: "Home",
  component: Home
};

export const LOBBY = {
  path: "/lobby",
  title: "Lobby",
  component: Lobby
};

export const VOTE = {
  path: "/vote",
  title: "Vote",
  component: Vote
};

const pages = {
  HOME,
  LOBBY,
  VOTE
};

export default mapKeys(pages, ({ path }) => path);
