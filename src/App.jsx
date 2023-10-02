import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { AppProvider } from "./store/Provider";
import Root from "./routes/Root";
import DetailGame from "./routes/DetailGame";
import ListGame from "./routes/ListGame";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <ListGame /> },
        { path: "/detail/:gameId", element: <DetailGame /> },
      ],
    },
  ]);

  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
