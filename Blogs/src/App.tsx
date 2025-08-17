import { useState } from "react";
import type { Blog } from "./types";
import { BlogProvider } from "./shared/BlogContext";
import Navigation from "./components/Navigation";
import { IoMdAddCircle } from "react-icons/io";
import Modal from "./components/Modal";
import BlogForm from "./components/BlogForm";
import ArticleList from "./components/ArticleList";
import PeopleToFollow from "./components/PeopleToFollow";
import TrendList from "./components/TrendList";
import TopicsList from "./components/TopicsList";

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);

  const openModalForNewBlog = () => {
    setEditingBlog(null);
    setModalOpen(true);
  };

  const openModalForEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setModalOpen(true);
  };

  return (
    <div>
      <BlogProvider>
        <Navigation />
        <div className="mt-4">
          <button
            onClick={openModalForNewBlog}
            className="ml-auto mr-[30%] bg-black flex justify-center items-center text-white px-4 py-2 rounded mb-4"
          >
            Add New Blog <IoMdAddCircle className="ml-[.5rem]" />
          </button>
        </div>

        <div className="flex justify-center">
          <div className="mx-auto p-6 flex flex-col">
            <ArticleList onEdit={openModalForEdit} />
            {isModalOpen && (
              <Modal onClose={() => setModalOpen(false)}>
                <BlogForm
                  existingBlog={editingBlog}
                  onClose={() => setModalOpen(false)}
                />
              </Modal>
            )}
          </div>

          <div className="w-[30%]">
            <PeopleToFollow />
            <TrendList />
            <TopicsList />
          </div>
        </div>
      </BlogProvider>
    </div>
  );
};

export default App;
