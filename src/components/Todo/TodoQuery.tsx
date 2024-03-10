import { useState } from "react";
import {
  useDeleteTodoMutation,
  useGetTodosQuery,
  usePostTodoMutation,
  usePutTodoMutation,
} from "../../redux/api/requests";
import delete_btn from "../..//assets/delete-button-svgrepo-com.svg";
import edit_btn from "../../assets/icon-modal.svg";
import scss from "./TodoStyle.module.scss";

const TodoQuery = () => {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [newName, setNewName] = useState("");
  const [newImg, setNewImg] = useState("");
  const [isOpen, setIsOpen] = useState<number | null>(null);
  const { data, isLoading } = useGetTodosQuery();
  const [createPostTodo] = usePostTodoMutation();
  const [deleteTodoItem] = useDeleteTodoMutation();
  const [putTodo] = usePutTodoMutation();

  const handleAddTodo = async () => {
    if (name !== "" || img !== "") {
      const newData = {
        name: name,
        img: img,
      };
      setName("");
      setImg("");
      await createPostTodo(newData);
    } else {
      alert("Заполните пустые поли");
    }
  };

  const hadnleDeleteTodo = async (id: number) => {
    await deleteTodoItem(id);
  };

  const updateTodo = async (_id: number) => {
    const newData = {
      name: newName,
      img: newImg,
    };
    await putTodo({ _id, newData });
    setIsOpen(null);
  };

  return (
    <div className={scss.TodosContainer}>
      <div className="container">
        <div className={scss.Content}>
          <div className={scss.form}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
            <button onClick={handleAddTodo}>add</button>
          </div>
          {isLoading ? (
            <>
              <p>IsLoading</p>
            </>
          ) : (
            <div className={scss.rendering}>
              {data?.map((item) => (
                <div className={scss.card} key={item._id}>
                  {isOpen === item._id ? (
                    <div className={scss.updates}>
                      <input
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                      />
                      <input
                        type="text"
                        value={newImg}
                        onChange={(e) => setNewImg(e.target.value)}
                      />
                      <div className={scss.updates_btn}>
                        <button onClick={() => updateTodo(item._id)}>
                          save
                        </button>
                        <button onClick={() => setIsOpen(null)}>cancel</button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <h1>{item.name}</h1>
                      <img src={item.img} alt="" />
                      <div className={scss.card_btn}>
                        <button
                          onClick={() => {
                            setIsOpen(item._id);
                            setNewName(item.name);
                            setNewImg(item.img);
                          }}
                        >
                          <img src={edit_btn} alt="" />
                        </button>
                        <button onClick={() => hadnleDeleteTodo(item._id)}>
                          <img src={delete_btn} alt="" />
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoQuery;
