/* eslint-disable max-len */
/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';
import Api from '../helpers/api';
import { renderWithProvider } from './helpers/renderWithProvider';
import { mockTaskOne, mockTaskTwo, httpStatus } from './mocks/mocks';

afterEach(() => {
  // Api.get.mockRestore();
  // Api.post.mockRestore();
  // Api.get.mockReset();
  // Api.post.mockReset();
  // Api.get.mockClear();
  // Api.post.mockClear();
  jest.restoreAllMocks();
  jest.resetAllMocks();
  jest.clearAllMocks();
  jest.resetModules();
  // cleanup();
});

beforeEach(() => {
  jest.restoreAllMocks();
  jest.resetAllMocks();
  jest.clearAllMocks();
  jest.resetModules();
  // jest.useFakeTimers();
});

describe('Add a task to the list', () => {
  describe('When successful', () => {
    it('Should make an Api request to add the task to database and show the new task on the list', async () => {
      jest
        // .fn()
        .spyOn(Api, 'get')
        .mockResolvedValueOnce({
          status: httpStatus.OK,
          data: [mockTaskTwo],
        })
        .mockResolvedValueOnce({
          status: httpStatus.OK,
          data: [mockTaskOne, mockTaskTwo],
        });

      Api.post = jest
        .fn()
        .mockResolvedValue({ status: httpStatus.CREATED });

      renderWithProvider(<App />);

      const addTaskButton = screen.getByTestId('add-task-button');
      userEvent.click(addTaskButton);

      const addTaskNameInput = screen.getByTestId('add-task-name-input');
      userEvent.type(addTaskNameInput, 'Task 001{enter}');

      const addTaskDescriptionInput = screen.getByTestId('add-task-description-input');
      userEvent.type(addTaskDescriptionInput, 'Description 001{enter}');

      expect(Api.post).toHaveBeenCalledWith('/task', { name: 'Task 001', description: 'Description 001', status: 'pendente' });

      await waitFor(() => {
        expect(Api.get).toHaveBeenCalledTimes(2);

        const taskDisplayName = screen.getByTestId('task-display-name-1');
        expect(taskDisplayName).toBeInTheDocument();
      });
    });
  });

  describe('When user input for task name is blank', () => {
    it('Should show a modal with the message "Name cannot be empty"', async () => {
      jest
      // .fn()
        .spyOn(Api, 'get')
        .mockResolvedValue({
          status: httpStatus.OK,
          data: [],
        });

      renderWithProvider(<App />);
      screen.debug();
      expect(Api.get).toHaveBeenCalledTimes(1);

      const addTaskButton = screen.getByTestId('add-task-button');
      userEvent.click(addTaskButton);

      const addTaskNameInput = await screen.findByTestId('add-task-name-input');
      userEvent.type(addTaskNameInput, 'a{backspace}');

      expect(Api.get).toHaveBeenCalledTimes(1);

      const nameInputError = await screen.findByTestId('name-input-error');
      expect(nameInputError).toHaveTextContent('Name cannot be empty');
    });
  });
  // describe('When user input for task name is less than 3 characters long', () => {
  //   it('Should show a modal with the message "Name must be at least 3 characters long"', async () => {
  //     Api.get = jest
  //       .fn()
  //       .mockResolvedValue({
  //         status: httpStatus.OK,
  //         data: [mockTaskLast],
  //       });

  //     render(<App />);

  //     // const addTaskButton = screen.getByTestId('add-task-button');
  //     // userEvent.click(addTaskButton);

  //     await waitFor(() => {
  //       const addTaskNameInput = screen.getByTestId('add-task-name-input');
  //       userEvent.type(addTaskNameInput, 'aa');

  //       expect(Api.get).toHaveBeenCalledTimes(1);

  //       const nameInputError = screen.getByTestId('name-input-error');
  //       expect(nameInputError).toHaveTextContent('Name must be at least 3 characters long');
  //     });
  //   });
  // });
});

// describe('Updating a task on the list', () => {
//   describe('When successful', () => { });
//   describe('When user input for task name is blank', () => { });
//   describe('When user input for task name is less than 3 characters long', () => { });
// });

// describe('Deleting a task on the list', () => {
//   describe('When successful', () => { });
// });

// describe('Showing tasks list', () => {
//   describe('When first rendering the App', () => {
//     it('Should show list of tasks retrieved from Api sorted by name in ascending order', () => {

//     });
//   });
// });

// describe('Sorting tasks list', () => {
//   describe('When sorted by name radio input is checked', () => {
//     describe('When ascending order radio input is checked', () => {
//       it('Should show tasks sorted by name and in ascending order', () => {

//       });
//     });
//     describe('When descending order radio input is checked', () => {
//       it('Should show tasks sorted by name and in descending order', () => {

//       });
//     });
//   });

//   describe('When sorted by creation date radio input is checked', () => {
//     describe('When ascending order radio input is checked', () => {
//       it('Should show tasks sorted by creation date and in ascending order', () => {

//       });
//     });
//     describe('When descending order radio input is checked', () => {
//       it('Should show tasks sorted by creation date and in descending order', () => {

//       });
//     });
//   });

//   describe('When sorted by "Todo" tasks radio input is checked', () => {
//     it('Should show "Todo" tasks on the top of the list', () => {

//     });
//   });

//   describe('When sorted by "Doing" tasks radio input is checked', () => {
//     it('Should show "Doing" tasks on the top of the list', () => {

//     });
//   });

//   describe('When sorted by "Done" tasks radio input is checked', () => {
//     it('Should show "Done" tasks on the top of the list', () => {

//     });
//   });
// });

// describe('1 - AddTaskButton', () => {
//   beforeEach(() => {
//     Api.get = jest.fn(() => Promise.resolve({ data: [] }));
//     render(<App />);
//   });
//   describe('When App component is rendered', () => {
//     it('AddTaskButton component should be rendered on the screen', () => {
//       const addTaskButton = screen.getByTestId('add-task-button');
//       expect(addTaskButton).toBeInTheDocument();
//     });
//     it('AddTaskButton text content should be 📌', () => {
//       const addTaskButton = screen.getByTestId('add-task-button');
//       expect(addTaskButton).toHaveTextContent('📌');
//     });
//   });
//   describe('When AddTaskButton is clicked', () => {
//     it('TaskForm component should be rendered on the screen, showing only its name input', () => {
//       const addTaskButton = screen.getByTestId('add-task-button');
//       userEvent.click(addTaskButton);

//       const addTaskNameInput = screen.queryByTestId('add-task-name-input');
//       expect(addTaskNameInput).toBeInTheDocument();

//       const addTaskDescriptionInput = screen.queryByTestId('add-task-description-input');
//       expect(addTaskDescriptionInput).not.toBeInTheDocument();
//     });
//   });
//   describe('When AddTaskButton is clicked twice', () => {
//     it('TaskForm component should be un-rendered after the second click', () => {
//       const addTaskButton = screen.getByTestId('add-task-button');

//       userEvent.click(addTaskButton);

//       const addTaskNameInput = screen.queryByTestId('add-task-name-input');
//       expect(addTaskNameInput).not.toBeInTheDocument();
//     });
//   });
// });

// describe('1 - TaskForm', () => {
//   beforeEach(() => {
//     Api.get = jest.fn(() => Promise.resolve({
//       data: [],
//     }));
//     render(<App />);
//   });
//   describe('When App component is rendered', () => {
//     it('TaskForm component should not be rendered on the screen', () => {
//       const taskForm = screen.queryByTestId('task-form');
//       expect(taskForm).not.toBeInTheDocument();
//     });
//     it('AddTaskButton text content should be 📌', () => {
//       const addTaskButton = screen.getByTestId('add-task-button');
//       expect(addTaskButton).toHaveTextContent('📌');
//     });
//   });
//   describe('When AddTaskButton is clicked', () => {
//     it('TaskForm component should be rendered on the screen, showing only its name input', () => {
//       const addTaskButton = screen.getByTestId('add-task-button');
//       userEvent.click(addTaskButton);

//       const addTaskNameInput = screen.queryByTestId('add-task-name-input');
//       expect(addTaskNameInput).toBeInTheDocument();

//       const addTaskDescriptionInput = screen.queryByTestId('add-task-description-input');
//       expect(addTaskDescriptionInput).not.toBeInTheDocument();
//     });
//   });
//   describe('When AddTaskButton is clicked twice', () => {
//     it('TaskForm component should be un-rendered after the second click', () => {
//       const addTaskButton = screen.getByTestId('add-task-button');

//       userEvent.click(addTaskButton);

//       const addTaskNameInput = screen.queryByTestId('add-task-name-input');
//       expect(addTaskNameInput).not.toBeInTheDocument();
//     });
//   });
// });

// jest.mock('../helpers/api', () => ({
//   __esModule: true,
//   default: {
//     get: jest.fn(() => Promise.resolve({ data: [] })),
//     post: jest.fn(() => Promise.resolve({ data: {} })),
//     update: jest.fn(() => Promise.resolve({ data: {} })),
//     delete: jest.fn(() => Promise.resolve({ data: {} })),
//   },
// }));
