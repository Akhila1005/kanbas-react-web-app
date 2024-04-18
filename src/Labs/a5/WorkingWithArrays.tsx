import React, { useState, useEffect } from "react";
import axios from "axios";
function WorkingWithArrays() {
    const API_BASE = process.env.REACT_APP_BASE_API;
    const API = API_BASE + "/a5/todos";
    const [todo, setTodo] = useState({id: 1,
      title: "NodeJS Assignment",
      description: "Create a NodeJS server with ExpressJS",
      due: "2021-09-09",
      completed: false,
    });
    const [todos, setTodos] = useState([todo]);
    const fetchTodos = async () => {
      const response = await axios.get(API);
      setTodos(response.data);
    };
    const postTodo = async () => {
      const response = await axios.post(API, todo);
      setTodos([...todos, response.data]);
    };  
    const updateTodo = async () => {
      try {
        const response = await axios.put(`${API}/${todo.id}`, todo);
        setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
      } catch (error: any) {
        console.log(error);
        setErrorMessage(error.response.data.message);
      }

    };  
    const removeTodo = async (todo: { id: any }) => {
      const response = await axios
        .get(`${API}/${todo.id}/delete`);
      setTodos(response.data);
    };
    const [errorMessage, setErrorMessage] = useState(null);
    const deleteTodo = async (todo: { id: any }) => {
      try {
        const response = await axios.delete(`${API}/${todo.id}`);
        setTodos(todos.filter((t) => t.id !== todo.id));
      } catch (error: any) {
        console.log(error);
        setErrorMessage(error.response.data.message);
      }

    };  
    const fetchTodoById = async (id: any) => {
      const response = await axios.get(`${API}/${id}`);
      setTodo(response.data);
    };  
    const createTodo = async () => {
      const response = await axios.get(`${API}/create`);
      setTodos(response.data);
    };
    const updateTitle = async () => {
      const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
      setTodos(response.data);
    };
    useEffect(() => {
      fetchTodos();
    }, []);

    return (
      <div>
        <h3>Working with Arrays</h3>
        <div className="form-control">
        <h4>Retrieving Arrays</h4>
        <a href={API} className="btn btn-primary">
          Get Todos
        </a>
        <h4>Retrieving an Item from an Array by ID</h4>
        <div className="row">
          <div className="col-sm-2">
            <input value={todo.id} className="form-control mb-2"
              onChange={(e) => setTodo({ ...todo,
                id: Number(e.target.value) })}/>
          </div>
        </div>
        <a href={`${API}/${todo.id}`}  className="btn btn-primary">
          Get Todo by ID
        </a>
        <h3>Updating an Item in an Array</h3>
        <div className="row">
          <div className="col-sm-4">
            <input type="text" value={todo.title} className="form-control mb-2"
            onChange={(e) => setTodo({
              ...todo, title: e.target.value })}/>
          </div>
          <div className="col-sm-3">
            <a href={`${API}/${todo.id}/title/${todo.title}`} className="btn btn-primary mb-2">
              Update Title to {todo.title}
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <input type="text" value={todo.description} className="form-control mb-2"
              onChange={(e) => setTodo({
                ...todo, description: e.target.value })}/>
          </div>
          <div className="col-sm-3">
            <a href={`${API}/${todo.id}/description/${todo.description}`} className="btn btn-danger">
              Describe TODO ID={todo.id}
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <input type="checkbox"
              onChange={(e) => setTodo({ ...todo,
                  completed: e.target.checked})}
                  checked = {todo.completed}/>
          </div>
          <div className="col-sm-3">
            <a href={`${API}/${todo.id}/completed/${todo.completed}`} className="btn btn-danger">
              Complete TODO ID={todo.id}
            </a>
          </div>
        </div>
        <h3>Filtering Array Items</h3>
        <a href={`${API}?completed=true`} className="btn btn-primary">
          Get Completed Todos
        </a>
        <h3>Creating new Items in an Array</h3>
        <a href={`${API}/create`} className="btn btn-primary">
          Create Todo
        </a>
        <h3>Deleting from an Array</h3>
        <a href={`${API}/${todo.id}/delete`} className="btn btn-danger">
          Delete Todo with ID = {todo.id}
        </a>
      </div>
      <div className="form-control">
        <div className="row">
          <div className="col-sm-4">
            <textarea value={todo.title} className="form-control mb-2"
              onChange={(e) => setTodo({ ...todo,
                title: e.target.value })} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <textarea value={todo.description} className="form-control mb-2"
              onChange={(e) => setTodo({ ...todo,
                description: e.target.value })} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
          <input value={todo.due} type="date" className="form-control mb-2"
            onChange={(e) => setTodo({
              ...todo, due: e.target.value })} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <label>
              <input value={todo.completed.toString()} type="checkbox" 
                  onChange={(e) => setTodo({
                    ...todo, completed: e.target.checked })} />
                Completed
            </label>
          </div>
        </div>
            <button onClick={postTodo} className="btn btn-warning col-sm-4 mb-2"> Post Todo </button><br/>
            <button onClick={updateTodo} className="btn btn-success col-sm-4 mb-2" >
              Update Todo
            </button><br/>
            <button onClick={createTodo} className="btn btn-primary col-sm-4 mb-2" >
              Create Todo
            </button><br/>
            <button onClick={updateTitle} className="btn btn-success col-sm-4 mb-2">
              Update Title
            </button><br/>
        {errorMessage && (
          <div className="alert alert-danger mb-2 mt-2">
            {errorMessage}
          </div>
        )}
        <div className="row">
          <div className="col-sm-4">
            <ul className="list-group">
              {todos.map((todo) => (
                <li className="list-group-item" key={todo.id} >
                  <input checked={todo.completed}
                    type="checkbox" readOnly />
                  {todo.title}
                  <p>{todo.description}</p>
                  <p>{todo.due}</p>
                  <button onClick={() => removeTodo(todo)} className="btn btn-danger" style={{ marginRight: '10px' }}>
                    Remove
                  </button>
                  <button onClick={() => fetchTodoById(todo.id)} className="btn btn-warning" style={{ marginRight: '10px' }}>
                    Edit  
                  </button>
                  <button onClick={() => deleteTodo(todo)}
                    className="btn btn-danger">
                    Delete
                  </button>

                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      </div>
    );
  }
  export default WorkingWithArrays;