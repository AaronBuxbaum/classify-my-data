import { mapKeys } from "lodash";
import Categorize from "../pages/Categorize";
import Explain from "../pages/Explain";
import Home from "../pages/Home";
import Lobby from "../pages/Lobby";
import Vote from "../pages/Vote";

export const CATEGORIZE = {
  path: "/categorize",
  title: "Categorize",
  component: Categorize
};

export const EXPLAIN = {
  path: "/explain",
  title: "Explain",
  component: Explain
};

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
  CATEGORIZE,
  EXPLAIN,
  HOME,
  LOBBY,
  VOTE
};

export default mapKeys(pages, ({ path }) => path);
