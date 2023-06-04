import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Wishlist from "./pages/Wishlist";
import Nav from "./components/nav/Nav";
import { useEffect, useState } from "react";
import PlaceDetails from "./pages/PlaceDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Nav />}>
      <Route index element={<Home />} />
      <Route path="explore" element={<Explore />} />
      <Route path="wishlist" element={<Wishlist />} />
      <Route path="placedetails" element={<PlaceDetails />} />
    </Route>
  )
);

function App() {
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="bg-white text-gray-12">
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="fixed right-2 top-2 z-10 hidden rounded-md bg-blue-9 p-1 text-lg"
      >
        {theme === "dark" ? "🌛" : "🌞"}
      </button>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
