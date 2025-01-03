import React, { createContext, useContext, useState } from "react";

// 1. Створюємо Context
const ModalContext = createContext();

// 2. Створюємо Provider для управління модальним вікном
export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(null);

  const openModal = (modalContent) => {
    setContent(modalContent);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setContent(null);
  };

  return (
    <ModalContext.Provider value={{ isOpen, content, openModal, closeModal }}>
      {children}
      {/* Модальне вікно відображається глобально */}
      {isOpen && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            {content}
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

// 3. Хук для зручного використання контексту
export const useModal = () => useContext(ModalContext);

// Стилі модального вікна (можна замінити на CSS)
const modalStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalContentStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "8px",
  textAlign: "center",
};

// Приклад використання:
// 1. Обгорніть додаток у ModalProvider:

import React from "react";
import { ModalProvider } from "./ModalContext";
import Home from "./Home";

function App() {
  return (
    <ModalProvider>
      <Home />
    </ModalProvider>
  );
}

export default App;

// 2. Використовуйте модальне вікно у компонентах:
import React from "react";
import { useModal } from "./ModalContext";

function Home() {
  const { openModal } = useModal();

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => openModal(<p>This is a modal!</p>)}>
        Open Modal
      </button>
    </div>
  );
}

// export default Home;

// Як це працює:
// ModalProvider забезпечує доступ до функцій відкриття/закриття модального вікна через контекст.
// openModal дозволяє встановити контент, який буде відображатися в модальному вікні.
// Модальне вікно відображається глобально у межах ModalProvider, що забезпечує зручність використання в будь-якому компоненті.
// Цей підхід дозволяє уникнути дублювання коду і забезпечує централізоване управління модальним вікном.

// ///////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////

// Якщо у вас великий контент для модального вікна, його краще винести в окремий компонент, а не прописувати прямо в onClick. Це робить код більш читабельним, організованим і легко підтримуваним.

// Як це зробити:
// Створіть окремий компонент для контенту модального вікна.
// Передавайте цей компонент у openModal через onClick.
// Приклад:
// 1. Винесення великого контенту в окремий компонент:

function ModalContent() {
  return (
    <div>
      <h2>Великий контент</h2>
      <p>Це великий текст або інший контент для вашого модального вікна.</p>
      <p>Можливо, тут є навіть форми, кнопки чи інші інтерактивні елементи.</p>
    </div>
  );
}

// 2. Використання компонента в openModal:
import React from "react";
import { useModal } from "./ModalContext";
import ModalContent from "./ModalContent";

function Home() {
  const { openModal } = useModal();

  return (
    <div>
      <h1>Home Page</h1>
      {/* Викликаємо openModal з компонентом */}
      <button onClick={() => openModal(<ModalContent />)}>Open Modal</button>
    </div>
  );
}

// export default Home;

// Як це працює:
// Окремий компонент ModalContent можна легко змінювати та тестувати, не змінюючи основний компонент.
// openModal приймає JSX-компонент, що дозволяє використовувати будь-який складний контент без захаращення кнопки onClick.
// Альтернатива: Передача даних у ModalContent
// Якщо контент залежить від деяких даних, ви можете передати їх як пропси до компонента:

function ModalContent({ title, description }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const { openModal } = useModal();

  return (
    <div>
      <h1>Home Page</h1>
      {/* Передаємо пропси в контент */}
      <button
        onClick={() =>
          openModal(
            <ModalContent
              title="Динамічний заголовок"
              description="Це опис, який передається динамічно."
            />
          )
        }
      >
        Open Modal
      </button>
    </div>
  );
}

// Переваги такого підходу:
// Чистий код: Ваша кнопка виконує лише одну функцію — відкриває модальне вікно, а контент обробляється окремо.
// Гнучкість: Ви можете легко створювати різні типи модальних вікон з різним контентом.
// Перевикористовуваність: Один і той же компонент контенту може використовуватися в різних місцях з різними даними.
