/* eslint-disable no-unused-expressions */
import { expect, use } from 'chai';
import sinon from 'sinon';
import {
  describe, before, after, it,
} from 'mocha';
import chaiAsPromised from 'chai-as-promised';
import { ZodError } from 'zod';
import { TaskController } from '../../controllers';
import { TaskService } from '../../services';
import { DomainError } from '../../helpers/errors';
import { mockType, validId } from '../utils/mocks';

use(chaiAsPromised);

describe('01 - TaskController', () => {
  describe('a) TaskController.create', () => {
    const serviceStub = new TaskService();
    describe('when input is valid', () => {
      describe('when controller resolves', () => {
        before(() => {
          sinon
            .stub(serviceStub, 'create')
            .resolves({} as mockType);
        });
        after(() => {
          sinon.restore();
        });
        it('Returns response from service', () => {
          const promise = new TaskController(serviceStub).create({ name: 'aaa', description: '', status: 'pendente' });
          expect(promise).to.eventually.become({});
        });
      });
    });
    describe('when input is not valid', () => {
      before(() => {
        sinon
          .stub(serviceStub, 'create')
          .resolves({} as mockType);
      });
      after(() => {
        sinon.restore();
      });
      it('Returns response from service', () => {
        const promise = new TaskController(serviceStub).create({ name: '', description: '', status: 'pendente' });
        expect(promise).to.eventually.be.rejected;
      });
    });
  });

  describe('b) TaskController.read', () => {
    const serviceStub = new TaskService();
    describe('when service resolves', () => {
      before(() => {
        sinon
          .stub(serviceStub, 'read')
          .resolves([]);
      });
      after(() => {
        sinon.restore();
      });
      it('Returns response from model', () => {
        const promise = new TaskController(serviceStub).read();
        expect(promise).to.eventually.become([]);
      });
    });
  });

  describe('c) TaskController.update', () => {
    const serviceStub = new TaskService();
    describe('when _id is not valid', () => {
      before(() => {
        sinon
          .stub(serviceStub, 'update')
          .resolves(null);
      });
      after(() => {
        sinon.restore();
      });
      it('throws domain error', () => {
        const promise = new TaskController(serviceStub).update({
          _id: '', name: '', description: '', status: 'pendente',
        });
        expect(promise).to.eventually.be.rejectedWith(DomainError);
      });
    });
    describe('when input is not valid', () => {
      before(() => {
        sinon
          .stub(serviceStub, 'update')
          .resolves(null);
      });
      after(() => {
        sinon.restore();
      });
      it('throws zod error', () => {
        const promise = new TaskController(serviceStub).update({
          _id: validId, name: '', description: '', status: 'pendente',
        });
        expect(promise).to.eventually.be.rejectedWith(ZodError);
      });
    });
    describe('when _id and input are valid', () => {
      before(() => {
        sinon
          .stub(serviceStub, 'update')
          .resolves({} as mockType);
      });
      after(() => {
        sinon.restore();
      });
      it('Returns response from model', () => {
        const promise = new TaskController(serviceStub).update({
          _id: validId, name: 'aaa', description: '', status: 'pendente',
        });
        expect(promise).to.eventually.become({});
      });
    });
  });

  describe('d) TaskController.delete', () => {
    describe('when id is not valid', () => {
      const serviceStub = new TaskService();
      before(() => {
        sinon
          .stub(serviceStub, 'delete')
          .resolves(null);
      });
      after(() => {
        sinon.restore();
      });
      it('throws domain error', () => {
        const promise = (new TaskController(serviceStub).delete({ _id: '' }));
        expect(promise).to.eventually.be.rejectedWith(DomainError);
      });
    });
    describe('when _id is valid', () => {
      const serviceStub = new TaskService();
      before(() => {
        sinon
          .stub(serviceStub, 'delete')
          .resolves({} as mockType);
      });
      after(() => {
        sinon.restore();
      });
      it('Returns response from model', () => {
        const promise = (new TaskController(serviceStub).delete({ _id: validId }));
        expect(promise).to.eventually.become({});
      });
    });
  });

  describe('e) TaskController.route', () => {
    describe('returns route', () => {
      it('throws domain error', () => {
        const { route } = new TaskController();
        expect(route).to.be.equal('/task');
      });
    });
  });
});
