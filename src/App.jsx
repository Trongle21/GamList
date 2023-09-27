import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { AppProvider, GameProvider } from "./store/Provider";
import Root from "./routes/Root";
import Action from "./routes/Action";
import Indie from "./routes/Indie";
import Adventure from "./routes/Adventure";
import Puzzle from "./routes/Puzzle";
import Shooter from "./routes/Shooter";
import RPG from "./routes/RPG";
import MassivelyMultiplayer from "./routes/MassivelyMultiplayer";
import DetailGame from "./routes/DetailGame";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "", element: <Action /> },
        { path: "/indie", element: <Indie /> },
        { path: "/adventure", element: <Adventure /> },
        { path: "/puzzle", element: <Puzzle /> },
        { path: "/shooter", element: <Shooter /> },
        { path: "/rpg", element: <RPG /> },
        { path: "/multiplayer", element: <MassivelyMultiplayer /> },
        { path: "/detail/:gameId", element: <DetailGame /> },
      ],
    },
  ]);

  return (
    <AppProvider>
      <GameProvider>
        <RouterProvider router={router} />
      </GameProvider>
    </AppProvider>
  );
}

export default App;
