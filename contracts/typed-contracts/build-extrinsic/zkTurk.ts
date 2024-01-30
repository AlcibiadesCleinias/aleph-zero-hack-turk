/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { GasLimit, GasLimitAndRequiredValue } from '@727-ventures/typechain-types';
import { buildSubmittableExtrinsic } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/zkTurk';
import type BN from 'bn.js';
import type { ApiPromise } from '@polkadot/api';



export default class Methods {
	readonly __nativeContract : ContractPromise;
	readonly __apiPromise: ApiPromise;

	constructor(
		nativeContract : ContractPromise,
		apiPromise: ApiPromise,
	) {
		this.__nativeContract = nativeContract;
		this.__apiPromise = apiPromise;
	}
	/**
	 * createProblem
	 *
	 * @param { string } title,
	 * @param { string } description,
	 * @param { (string | number | BN) } workersMax,
	 * @param { (string | number | BN) } taskPriceWei,
	 * @param { (string | number | BN) } lockedUntil,
	 * @param { (string | number | BN) } outdatedAfter,
	 * @param { Array<string> } taskUrls,
	 * @param { Array<string> } answers,
	*/
	"createProblem" (
		title: string,
		description: string,
		workersMax: (string | number | BN),
		taskPriceWei: (string | number | BN),
		lockedUntil: (string | number | BN),
		outdatedAfter: (string | number | BN),
		taskUrls: Array<string>,
		answers: Array<string>,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "createProblem", [title, description, workersMax, taskPriceWei, lockedUntil, outdatedAfter, taskUrls, answers], __options);
	}

	/**
	 * getProblemOwner
	 *
	 * @param { (string | number | BN) } problemId,
	*/
	"getProblemOwner" (
		problemId: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getProblemOwner", [problemId], __options);
	}

	/**
	 * getProblemTitle
	 *
	 * @param { (string | number | BN) } problemId,
	*/
	"getProblemTitle" (
		problemId: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getProblemTitle", [problemId], __options);
	}

	/**
	 * getProblemDescription
	 *
	 * @param { (string | number | BN) } problemId,
	*/
	"getProblemDescription" (
		problemId: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getProblemDescription", [problemId], __options);
	}

	/**
	 * getProblemWorkersMax
	 *
	 * @param { (string | number | BN) } problemId,
	*/
	"getProblemWorkersMax" (
		problemId: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getProblemWorkersMax", [problemId], __options);
	}

	/**
	 * getProblemTaskPriceWei
	 *
	 * @param { (string | number | BN) } problemId,
	*/
	"getProblemTaskPriceWei" (
		problemId: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getProblemTaskPriceWei", [problemId], __options);
	}

	/**
	 * getProblemLockedUntil
	 *
	 * @param { (string | number | BN) } problemId,
	*/
	"getProblemLockedUntil" (
		problemId: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getProblemLockedUntil", [problemId], __options);
	}

	/**
	 * getProblemOutdatedAfter
	 *
	 * @param { (string | number | BN) } problemId,
	*/
	"getProblemOutdatedAfter" (
		problemId: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getProblemOutdatedAfter", [problemId], __options);
	}

	/**
	 * getProblemTaskUrls
	 *
	 * @param { (string | number | BN) } problemId,
	*/
	"getProblemTaskUrls" (
		problemId: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getProblemTaskUrls", [problemId], __options);
	}

	/**
	 * getProblemAnswers
	 *
	 * @param { (string | number | BN) } problemId,
	*/
	"getProblemAnswers" (
		problemId: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "getProblemAnswers", [problemId], __options);
	}

	/**
	 * joinProblem
	 *
	 * @param { (string | number | BN) } problemId,
	*/
	"joinProblem" (
		problemId: (string | number | BN),
		__options: GasLimitAndRequiredValue,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "joinProblem", [problemId], __options);
	}

	/**
	 * solveTasks
	 *
	 * @param { (string | number | BN) } problemId,
	 * @param { Array<(string | number | BN)> } taskIds,
	 * @param { Array<string> } cipheredAnswersString,
	*/
	"solveTasks" (
		problemId: (string | number | BN),
		taskIds: Array<(string | number | BN)>,
		cipheredAnswersString: Array<string>,
		__options: GasLimitAndRequiredValue,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "solveTasks", [problemId, taskIds, cipheredAnswersString], __options);
	}

	/**
	 * resetJoinedProblem
	 *
	 * @param { (string | number | BN) } problemId,
	*/
	"resetJoinedProblem" (
		problemId: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "resetJoinedProblem", [problemId], __options);
	}

	/**
	 * withdraw
	 *
	*/
	"withdraw" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "withdraw", [], __options);
	}

	/**
	 * withdrawAndDecipher
	 *
	 * @param { ArgumentTypes.AccountId } worker,
	 * @param { (string | number | BN) } problemId,
	 * @param { Array<(string | number | BN)> } answersSubmissionId,
	 * @param { Array<(string | number | BN)> } answers,
	 * @param { string } seedPhrase,
	*/
	"withdrawAndDecipher" (
		worker: ArgumentTypes.AccountId,
		problemId: (string | number | BN),
		answersSubmissionId: Array<(string | number | BN)>,
		answers: Array<(string | number | BN)>,
		seedPhrase: string,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "withdrawAndDecipher", [worker, problemId, answersSubmissionId, answers, seedPhrase], __options);
	}

}