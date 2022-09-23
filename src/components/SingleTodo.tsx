import React from 'react';
import { Todo } from '../model';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import './styles.css';

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  return (
    <form className='todos_single'>
      <span className='todos_single--text'>{todo.todo}</span>
      <div>
        <span className='icon'>
          <AiFillEdit />
        </span>
        <span className='icon' onClick={() => console.log('hi')}>
          <AiFillDelete />
        </span>
        <span className='icon'>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
