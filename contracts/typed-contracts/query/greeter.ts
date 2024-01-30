/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { ApiPromise } from '@polkadot/api';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@727-ventures/typechain-types';
import type { QueryReturnType } from '@727-ventures/typechain-types';
import { queryJSON, queryOkJSON, handleReturnType } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/zkTurk';
import type * as ReturnTypes from '../types-returns/zkTurk';
import type BN from 'bn.js';
//@ts-ignore
import {ReturnNumber} from '@727-ventures/typechain-types';
import {getTypeDescription} from './../shared/utils';
import DATA_TYPE_DESCRIPTIONS from '../data/zkTurk.json';


export default class Methods {
	readonly __nativeContract : ContractPromise;
	readonly __apiPromise: ApiPromise;
	readonly __callerAddress : string;

	constructor(
		nativeContract : ContractPromise,
		nativeApi : ApiPromise,
		callerAddress : string,
	) {
		this.__nativeContract = nativeContract;
		this.__callerAddress = callerAddress;
		this.__apiPromise = nativeApi;
	}

	/**
	* greet
	*
	* @returns { Result<string, ReturnTypes.LangError> }
	*/
	"greet" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<string, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "greet", [], __options , (result) => { return handleReturnType(result, getTypeDescription(9, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* setMessage
	*
	* @param { string } newValue,
	* @returns { Result<null, ReturnTypes.LangError> }
	*/
	"setMessage" (
		newValue: string,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "setMessage", [newValue], __options , (result) => { return handleReturnType(result, getTypeDescription(6, DATA_TYPE_DESCRIPTIONS)); });
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
	* @returns { Result<null, ReturnTypes.LangError> }
	*/
	"createProblem" (
		title: string,
		description: string,
		workersMax: (string | number | BN),
		taskPriceWei: (string | number | BN),
		lockedUntil: (string | number | BN),
		outdatedAfter: (string | number | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "createProblem", [title, description, workersMax, taskPriceWei, lockedUntil, outdatedAfter], __options , (result) => { return handleReturnType(result, getTypeDescription(6, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getProblemOwner
	*
	* @param { (string | number | BN) } problemId,
	* @returns { Result<ReturnTypes.AccountId | null, ReturnTypes.LangError> }
	*/
	"getProblemOwner" (
		problemId: (string | number | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<ReturnTypes.AccountId | null, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getProblemOwner", [problemId], __options , (result) => { return handleReturnType(result, getTypeDescription(10, DATA_TYPE_DESCRIPTIONS)); });
	}

}
