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
	 * greet
	 *
	*/
	"greet" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "greet", [], __options);
	}

	/**
	 * setMessage
	 *
	 * @param { string } newValue,
	*/
	"setMessage" (
		newValue: string,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "setMessage", [newValue], __options);
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
	*/
	"createProblem" (
		title: string,
		description: string,
		workersMax: (string | number | BN),
		taskPriceWei: (string | number | BN),
		lockedUntil: (string | number | BN),
		outdatedAfter: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "createProblem", [title, description, workersMax, taskPriceWei, lockedUntil, outdatedAfter], __options);
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

}
