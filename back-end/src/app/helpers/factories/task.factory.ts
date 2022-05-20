import { TaskRouter } from '../../../api/routes';
import { TaskController } from '../../controllers';
import { CreateTaskInput, DeleteTaskInput, UpdateTaskInput } from '../types';
import { ZodTask } from '../validators';

export const taskFactory = () => new TaskRouter <
  ZodTask,
  CreateTaskInput,
  UpdateTaskInput,
  DeleteTaskInput
>(new TaskController());
