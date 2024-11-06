
import Movie from "./components/movie";



import { createRoot } from "react-dom/client";



const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
<Movie/>
);