import { createBrowserRouter } from "react-router";
import { PageAccueil } from "./pages/PageAccueil/PageAccueil";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <PageAccueil />
    }
])