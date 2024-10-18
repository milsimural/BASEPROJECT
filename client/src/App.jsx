import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./components/pages/MainPage";
// import CardInfoPage from "./components/pages/CardInfoPage";
import Layout from "./components/Layout";
import './App.css';
import QuestionCard from "./components/ui/QuestionCard";

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
          path: "/:cardId",
          element: <QuestionCard />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
