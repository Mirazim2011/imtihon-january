import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main/Main";
import SingleRestaurant from "./pages/SingleRestaurant/SingleRestaurant";
import axios from "axios";

async function restaurant() {
  const response = await axios.get("/restaurant.json");
  return response.data;
}

async function single({ params }) {
  const response = await axios.get("/restaurant.json");
  const data = response.data;
  return data.find((restaurant) => restaurant.id === params.restaurantId);
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: restaurant,
  },
  {
    path: "/restaurant/:restaurantId",
    element: <SingleRestaurant />,
    loader: single,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
