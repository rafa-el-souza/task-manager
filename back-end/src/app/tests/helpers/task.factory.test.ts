/* eslint-disable no-unused-expressions */
import { expect, use } from 'chai';
import { describe, it } from 'mocha';
import chaiAsPromised from 'chai-as-promised';
import { taskFactory } from '../../helpers/factories';
import { TaskRouter } from '../../../api/routes';

use(chaiAsPromised);

describe('04 - taskFactory', () => {
  describe('when it is successful ', () => {
    it('returns an instance of TaskRouter', () => {
      const taskRouter = taskFactory();
      expect(taskRouter).to.be.an.instanceOf(TaskRouter);
    });
  });
});
