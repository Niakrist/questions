import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import { QuestionItemPage, QuestionsListPage } from "@/pages";

export const router = createBrowserRouter([
  {
    path: "/questions",
    Component: Layout,
    children: [
      { index: true, Component: QuestionsListPage },
      { path: `/questions/:id`, Component: QuestionItemPage },
    ],
  },
]);
