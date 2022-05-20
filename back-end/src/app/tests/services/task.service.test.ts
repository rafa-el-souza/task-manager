/* eslint-disable no-unused-expressions */
import { expect, use } from 'chai';
import sinon from 'sinon';
import {
  describe, before, after, it,
} from 'mocha';
import chaiAsPromised from 'chai-as-promised';
import { TaskService } from '../../services';
import { TaskModel } from '../../models';
import { DomainError } from '../../helpers/errors';
import { mockType } from '../utils/mocks';

use(chaiAsPromised);

describe('02 - TaskService', () => {
  describe('a) TaskService.create', () => {
    const modelStub = new TaskModel();
    describe('when model resolves', () => {
      before(() => {
        sinon
          .stub(modelStub, 'create')
          .resolves({} as mockType);
      });
      after(() => {
        sinon.restore();
      });
      it('Returns response from model', () => {
        const promise = new TaskService(modelStub).create({ name: '', description: '', status: 'pendente' });
        expect(promise).to.eventually.become({});
      });
    });
  });

  describe('b) TaskService.read', () => {
    const modelStub = new TaskModel();
    describe('when model resolves', () => {
      before(() => {
        sinon
          .stub(modelStub, 'read')
          .resolves([]);
      });
      after(() => {
        sinon.restore();
      });
      it('Returns response from model', () => {
        const promise = new TaskService(modelStub).read();
        expect(promise).to.eventually.become([]);
      });
    });
  });

  describe('c) TaskService.update', () => {
    const modelStub = new TaskModel();
    describe('when task is not found', () => {
      before(() => {
        sinon
          .stub(modelStub, 'update')
          .resolves(null);
        // sinon
        //   .stub(TaskService, 'notFound')
        //   .returns({});
      });
      after(() => {
        sinon.restore();
      });
      it('throws domain error', () => {
        const promise = new TaskService(modelStub).update({
          _id: '', name: '', description: '', status: 'pendente',
        });
        expect(promise).to.eventually.be.rejectedWith(DomainError);
      });
    });
    describe('when task is updated', () => {
      before(() => {
        sinon
          .stub(modelStub, 'update')
          .resolves({} as mockType);
        // sinon
        //   .stub(TaskService, 'notFound')
        //   .returns({});
      });
      after(() => {
        sinon.restore();
      });
      it('Returns response from model', () => {
        const promise = new TaskService(modelStub).update({
          _id: '', name: '', description: '', status: 'pendente',
        });
        expect(promise).to.eventually.become({});
      });
    });
  });

  describe('d) TaskService.delete', () => {
    describe('when task is not found', () => {
      const modelStub = new TaskModel();
      before(() => {
        sinon
          .stub(modelStub, 'delete')
          .resolves(null);
        // sinon
        //   .stub(TaskService, 'notFound')
        //   .returns({});
      });
      after(() => {
        sinon.restore();
      });
      it('throws domain error', () => {
        const promise = (new TaskService(modelStub).delete({ _id: '' }));
        expect(promise).to.eventually.be.rejectedWith(DomainError);
      });
    });
    describe('when task is deleted', () => {
      const modelStub = new TaskModel();
      before(() => {
        sinon
          .stub(modelStub, 'delete')
          .resolves({} as mockType);
        // sinon
        //   .stub(TaskService, 'notFound')
        //   .returns({});
      });
      after(() => {
        sinon.restore();
      });
      it('Returns response from model', () => {
        const promise = (new TaskService(modelStub).delete({ _id: '' }));
        expect(promise).to.eventually.become({});
      });
    });
  });
});
