import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { Button, Htag, Label, Text } from "@/shared/ui";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div>
      Questions
      <Button
        style={{ padding: "12px 29px" }}
        bgColor="purple"
        color="white"
        textSize="big"
        fontWeght="fw500"
        borderRadius="br12">
        Регистрация
      </Button>
      <ul>
        <Label value={4}>Рейтинг:</Label>
      </ul>
      <Htag sizeText="big" tag="h1">
        Заголовок
      </Htag>
      <Htag sizeText="medium" tag="h2">
        Заголовок
      </Htag>
      <Text>
        Virtual DOM (виртуальный DOM) — это программная концепция, используемая
        в разработке веб-приложений для повышения эффективности обновлений
        интерфейса. Это представление реального DOM (структуры документа,
        отображаемого в браузере) в памяти, которое позволяет оптимизировать
        изменения, минимизируя взаимодействие с реальным DOM, что ускоряет
        рендеринг и обновление страниц. При изменении данных приложения Virtual
        DOM сравнивает новое состояние с предыдущим и обновляет только те части
        реального DOM, которые изменились, вместо перерисовки всего документа.
      </Text>
    </div>
  </StrictMode>
);
