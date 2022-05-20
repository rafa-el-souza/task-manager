import { Document } from 'mongoose';

export type mockType = { _id: string, name: string, description: string, status: 'pendente' } & Document;

export const validId = '628685b01a67fab92fe877a0';
