import { expect, use } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sinon from 'sinon';
import mongoose from 'mongoose';
import {
  describe, before, after, it,
} from 'mocha';
import { TaskModel } from '../../models';

use(chaiAsPromised);

describe('03 - TaskModel', () => {
  describe('a) TaskModel.create', () => {
    describe('when task is created', () => {
      before(() => {
        sinon
          .stub(mongoose.Model, 'create')
          .resolves({});
      });
      after(() => {
        sinon.restore();
      });
      it('Returns response from database', () => {
        const promise = new TaskModel().create({ name: '', description: '', status: 'pendente' });
        expect(promise).to.eventually.become({});
      });
    });
  });

  describe('b) TaskModel.read', () => {
    describe('when database resolves', () => {
      before(() => {
        sinon
          .stub(mongoose.Model, 'find')
          .resolves([]);
      });
      after(() => {
        sinon.restore();
      });
      it('Returns response from database', () => {
        const promise = new TaskModel().read();
        expect(promise).to.eventually.become([]);
      });
    });
  });

  describe('c) TaskModel.update', () => {
    describe('when database resolves', () => {
      before(() => {
        sinon
          .stub(mongoose.Model, 'findOneAndUpdate')
          .resolves({});
      });
      after(() => {
        sinon.restore();
      });
      it('Returns response from database', () => {
        const promise = new TaskModel().update({
          _id: '', name: '', description: '', status: 'pendente',
        });
        expect(promise).to.eventually.become({});
      });
    });
  });

  describe('d) TaskModel.delete', () => {
    describe('when database resolves', () => {
      before(() => {
        sinon
          .stub(mongoose.Model, 'findOneAndDelete')
          .resolves({});
      });
      after(() => {
        sinon.restore();
      });
      it('Returns response from database', () => {
        const promise = new TaskModel().delete({ _id: '' });
        expect(promise).to.eventually.become({});
      });
    });
  });
});
