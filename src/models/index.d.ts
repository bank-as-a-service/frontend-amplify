import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum Status {
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  FAILURE = "FAILURE"
}



type EagerAccount = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Account, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly owner?: string | null;
  readonly ownerName?: string | null;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAccount = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Account, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly owner?: string | null;
  readonly ownerName?: string | null;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Account = LazyLoading extends LazyLoadingDisabled ? EagerAccount : LazyAccount

export declare const Account: (new (init: ModelInit<Account>) => Account) & {
  copyOf(source: Account, mutator: (draft: MutableModel<Account>) => MutableModel<Account> | void): Account;
}

type EagerFundTransfer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FundTransfer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdOn: string;
  readonly status: Status | keyof typeof Status;
  readonly amount: number;
  readonly sourceAccountId: string;
  readonly destinationAccountId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFundTransfer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FundTransfer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdOn: string;
  readonly status: Status | keyof typeof Status;
  readonly amount: number;
  readonly sourceAccountId: string;
  readonly destinationAccountId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type FundTransfer = LazyLoading extends LazyLoadingDisabled ? EagerFundTransfer : LazyFundTransfer

export declare const FundTransfer: (new (init: ModelInit<FundTransfer>) => FundTransfer) & {
  copyOf(source: FundTransfer, mutator: (draft: MutableModel<FundTransfer>) => MutableModel<FundTransfer> | void): FundTransfer;
}