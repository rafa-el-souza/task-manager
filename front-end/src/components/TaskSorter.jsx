import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CSSTransition } from 'react-transition-group';
import { DotsCircleHorizontalIcon } from '@heroicons/react/solid';

import { setAscendingOrder, setSortBy } from '../redux/reducers/taskReducer';

function TaskSorter() {
  const dispatch = useDispatch();

  const { tasks } = useSelector((state) => state.tasks);

  const handleSort = (e) => {
    const { name, value } = e.target;

    if (name === 'sortBy') return dispatch(setSortBy(value));

    return dispatch(setAscendingOrder(value === 'true'));
  };

  const [visible, setVisible] = useState(false);

  return (
    <div
      className={(tasks.length === 0) ? 'hidden' : 'flex h-24 mb-10'}
    >
      <button
        type="button"
        onClick={() => setVisible(!visible)}
        className=""
      >
        <DotsCircleHorizontalIcon className="w-16 fill-blue-500" />
      </button>
      <CSSTransition
        in={visible}
        timeout={{
          enter: 500,
          exit: 500,
        }}
        classNames="pop"
        unmountOnExit
      >
        <div onChange={handleSort} className="text-slate-200 flex justify-center items-start flex-col w-24 text-xs ml-5">
          <label htmlFor="createdAt" className="font-light">
            <input type="radio" value="createdAt" name="sortBy" id="createdAt" className="mr-2" />
            createdAt
          </label>
          <label className="font-light" htmlFor="name">
            <input type="radio" value="name" name="sortBy" className="mr-2" id="name" />
            name
          </label>
          <label className="font-light" htmlFor="ascending">
            <input type="radio" value name="ascendingOrder" className="mr-2" id="ascending" />
            ascending
          </label>
          <label className="font-light" htmlFor="descending">
            <input type="radio" value={false} name="ascendingOrder" className="mr-2" id="descending" />
            descending
          </label>
          <label className="font-light" htmlFor="pendente">
            <input type="radio" value="pendente" name="sortBy" className="mr-2" id="pendente" />
            pendente
          </label>
          <label className="font-light" htmlFor="andamento">
            <input type="radio" value="andamento" name="sortBy" className="mr-2" id="andamento" />
            andamento
          </label>
          <label className="font-light" htmlFor="pronto">
            <input type="radio" value="pronto" name="sortBy" className="mr-2" id="pronto" />
            pronto
          </label>
        </div>
      </CSSTransition>
    </div>
  );
}

export default TaskSorter;
