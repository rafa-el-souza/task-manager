import { Schema, model as createModel, Document } from 'mongoose';

import { ZodTask } from '../app/helpers/validators';

export interface TaskDocument extends ZodTask, Document { }

export const taskSchema = new Schema<TaskDocument>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  status: {
    type: String,
    enum: ['pendente', 'andamento', 'pronto'],
    default: 'pendente',
  },
}, { versionKey: false, timestamps: true });

export const mongooseTaskModel = createModel('Task', taskSchema);
