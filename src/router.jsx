import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import { StudentDetailPage } from "./pages/StudentDetailPage";
import { SubmitStudentPage } from "./pages/SubmitStudentPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/student/:id",
        element: <StudentDetailPage />
    },
    {
        path: "/student/submit",
        element: <SubmitStudentPage />
    }
])