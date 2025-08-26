import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import { QuestionsListPage } from "@/pages";

export const router = createBrowserRouter([
  {
    path: "/questions",
    Component: Layout,
    children: [{ index: true, Component: QuestionsListPage }],
  },
]);
