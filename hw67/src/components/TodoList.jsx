import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTodo, deleteTodo, changeTodoStatus } from "../slices/todoSlice";

export default function TodoList() {
    const [text, setText] = useState('');
    const [description, setDescription] = useState('');
    const [changeTodoStatusButton, setChangeTodoStatusButton] = useState(false);
    const [todoStatus, setTodoStatus] = useState('todo');
    const [currentCard, setCurrentCard] = useState(null);
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const handleAddTodo = () => {
        dispatch(addTodo({ title: text, description }));
        setText('');
        setDescription('');
    };
    const handleChangeText = (event) => {
        setText(event.target.value);
    };
    const handleChangeDescription = (event) => {
        setDescription(event.target.value);
    };
    const handleDeleteTodo = (todoId) => {
        dispatch(deleteTodo({ todoId }));
    };
    const handleTodoStatus = (id, newTodoStatus) => {
        dispatch(changeTodoStatus({ id, newTodoStatus }));
    };
    const checkStatus = (status) => {
        switch (status) {
            case 'todo':
                return 'grey';
            case 'in_progress':
                return 'yellow';
            case 'done':
                return 'green';
            default:
                return '';
        }
    };
    const dragStartHandler = (event, card) => {
        setCurrentCard(card);
        event.target.style.opacity = '0.5';
    };
    const dragEndHandler = (event) => {
        event.target.style.opacity = '1';
        event.target.style.background = 'white';
    };
    const dragOverHandler = (event) => {
        event.preventDefault();
        event.target.style.background = 'lightgray';
    };
    const dropHandler = (event, newStatus) => {
        event.preventDefault();
        handleTodoStatus(currentCard.id, newStatus);
        setCurrentCard(null);
    };
    const leaveHandler = (event) => {
        event.preventDefault();
        event.target.style.background = 'white';
    };
    return (
        <>
            <h1>{'Todo list'}</h1>
            <div className='wrapper'>
                <div className='form'>
                    <div>
                        <div>Title</div>
                        <input type="text" value={text} onChange={handleChangeText} />
                    </div>
                    <div>
                        <textarea rows={3} value={description} onChange={handleChangeDescription} />
                        <div>Description</div>
                    </div>
                    <button className='button-add' onClick={handleAddTodo}>Add</button>
                </div>
                <div className='list'>
                    <div
                        className='list__column'
                        onDragOver={(event) => dragOverHandler(event)}
                        onDrop={(event) => dropHandler(event, 'todo')}
                        onDragLeave={(event) => leaveHandler(event)}
                    >
                        <h3>Todo</h3>
                        {todos?.filter(todo => todo.status === 'todo').map(todo => (
                            <div
                                className='todo-item'
                                key={todo.id}
                                onDragStart={(event) => dragStartHandler(event, todo)}
                                onDragLeave={(event) => dragEndHandler(event)}
                                onDragEnd={(event) => dragEndHandler(event)}
                                onDragOver={(event) => dragOverHandler(event)}
                                draggable={true}
                            >
                                <h4>Title: {todo.title}</h4>
                                <p>Description {todo.description}</p>
                                <div className={`status ${checkStatus(todo.status)}`}>Status: {todo.status}</div>
                                <button onClick={() => handleDeleteTodo(todo.id)}>
                                    Delete todo
                                </button>
                                <button onClick={() => setChangeTodoStatusButton(!changeTodoStatusButton)}>
                                    Change todo status
                                </button>
                                {changeTodoStatusButton &&
                                    <div>
                                        <select onChange={(event) => setTodoStatus(event.target.value)}>
                                            <option value="todo">todo</option>
                                            <option value="in_progress">in_progress</option>
                                            <option value="done">completed</option>
                                        </select>
                                        <button onClick={() => handleTodoStatus(todo.id, todoStatus)}>
                                            Change
                                        </button>
                                    </div>
                                }
                            </div>
                        ))}
                    </div>
                    <div
                        className='list__column'
                        onDragOver={(event) => dragOverHandler(event)}
                        onDrop={(event) => dropHandler(event, 'in_progress')}
                        onDragLeave={(event) => leaveHandler(event)}
                    >
                        <h3>In Progress</h3>
                        {todos?.filter(todo => todo.status === 'in_progress').map(todo => (
                            <div
                                className='todo-item'
                                key={todo.id}
                                onDragStart={(event) => dragStartHandler(event, todo)}
                                onDragLeave={(event) => dragEndHandler(event)}
                                onDragEnd={(event) => dragEndHandler(event)}
                                onDragOver={(event) => dragOverHandler(event)}
                                draggable={true}
                            >
                                <h4>Title: {todo.title}</h4>
                                <p>Description {todo.description}</p>
                                <div className={`status ${checkStatus(todo.status)}`}>Status: {todo.status}</div>
                                <button onClick={() => handleDeleteTodo(todo.id)}>
                                    Delete todo
                                </button>
                                <button onClick={() => setChangeTodoStatusButton(!changeTodoStatusButton)}>
                                    Change todo status
                                </button>
                                {changeTodoStatusButton &&
                                    <div>
                                        <select onChange={(event) => setTodoStatus(event.target.value)}>
                                            <option value="todo">todo</option>
                                            <option value="in_progress">in_progress</option>
                                            <option value="done">completed</option>
                                        </select>
                                        <button onClick={() => handleTodoStatus(todo.id, todoStatus)}>
                                            Change
                                        </button>
                                    </div>
                                }
                            </div>
                        ))}
                    </div>
                    <div
                        className='list__column'
                        onDragOver={(event) => dragOverHandler(event)}
                        onDrop={(event) => dropHandler(event, 'done')}
                        onDragLeave={(event) => leaveHandler(event)}
                    >
                        <h3>Completed</h3>
                        {todos?.filter(todo => todo.status === 'done').map(todo => (
                            <div
                                className='todo-item'
                                key={todo.id}
                                onDragStart={(event) => dragStartHandler(event, todo)}
                                onDragLeave={(event) => dragEndHandler(event)}
                                onDragEnd={(event) => dragEndHandler(event)}
                                onDragOver={(event) => dragOverHandler(event)}
                                draggable={true}
                            >
                                <h4>Title: {todo.title}</h4>
                                <p>Description {todo.description}</p>
                                <div className={`status ${checkStatus(todo.status)}`}>Status: {todo.status}</div>
                                <button onClick={() => handleDeleteTodo(todo.id)}>
                                    Delete todo
                                </button>
                                <button onClick={() => setChangeTodoStatusButton(!changeTodoStatusButton)}>
                                    Change todo status
                                </button>
                                {changeTodoStatusButton &&
                                    <div>
                                        <select onChange={(event) => setTodoStatus(event.target.value)}>
                                            <option value="todo">todo</option>
                                            <option value="in_progress">in_progress</option>
                                            <option value="done">completed</option>
                                        </select>
                                        <button onClick={() => handleTodoStatus(todo.id, todoStatus)}>
                                            Change
                                        </button>
                                    </div>
                                }
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
