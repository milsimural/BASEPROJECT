import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./components/pages/MainPage";
// import CardInfoPage from "./components/pages/CardInfoPage";
import Layout from "./components/Layout";
import './App.css';
import QuestionCard from "./components/ui/QuestionCard";
import Endgame from "./components/ui/Endgame";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <MainPage />,
        },
        {
          path: "/:themeId",
          element: <QuestionCard />,
        },
        {
          path: "/endGame",
          element: <Endgame />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
