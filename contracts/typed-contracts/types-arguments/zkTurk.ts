import type BN from 'bn.js';

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

