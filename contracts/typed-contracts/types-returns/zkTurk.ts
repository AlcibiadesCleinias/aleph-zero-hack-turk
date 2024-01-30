import type BN from 'bn.js';
import type {ReturnNumber} from '@727-ventures/typechain-types';

export type AccountId = string | number[]

export enum LangError {
	couldNotReadInput = 'CouldNotReadInput'
}

export interface ZkTurkError {
	custom ? : string,
	workersMaxError ? : null,
	workerAlreadyJoinedError ? : null,
	inefficientStakeError ? : null
}

export class ZkTurkErrorBuilder {
	static Custom(value: string): ZkTurkError {
		return {
			custom: value,
		};
	}
	static WorkersMaxError(): ZkTurkError {
		return {
			workersMaxError: null,
		};
	}
	static WorkerAlreadyJoinedError(): ZkTurkError {
		return {
			workerAlreadyJoinedError: null,
		};
	}
	static InefficientStakeError(): ZkTurkError {
		return {
			inefficientStakeError: null,
		};
	}
}

