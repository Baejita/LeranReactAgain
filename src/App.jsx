import { useState } from "react";
import MainHeader from "./components/MainHeader";
import PostList from "./components/PostList";
import "./index.css";

function App() {
  const [showModal, setShowModal] = useState(false);

  function showModalHandler() {
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
  }
  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList isPosting={showModal} onStopPosting={closeModalHandler} />
      </main>
    </>
  );
}

export default App;
