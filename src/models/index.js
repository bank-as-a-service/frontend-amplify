// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Status = {
  "PENDING": "PENDING",
  "SUCCESS": "SUCCESS",
  "FAILURE": "FAILURE"
};

const { Account, FundTransfer } = initSchema(schema);

export {
  Account,
  FundTransfer,
  Status
};