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
	* @returns { Result<null, ReturnTypes.LangError> }
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
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "createProblem", [title, description, workersMax, taskPriceWei, lockedUntil, outdatedAfter, taskUrls, answers], __options , (result) => { return handleReturnType(result, getTypeDescription(6, DATA_TYPE_DESCRIPTIONS)); });
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
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getProblemOwner", [problemId], __options , (result) => { return handleReturnType(result, getTypeDescription(9, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getProblemTitle
	*
	* @param { (string | number | BN) } problemId,
	* @returns { Result<string | null, ReturnTypes.LangError> }
	*/
	"getProblemTitle" (
		problemId: (string | number | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<string | null, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getProblemTitle", [problemId], __options , (result) => { return handleReturnType(result, getTypeDescription(11, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getProblemDescription
	*
	* @param { (string | number | BN) } problemId,
	* @returns { Result<string | null, ReturnTypes.LangError> }
	*/
	"getProblemDescription" (
		problemId: (string | number | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<string | null, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getProblemDescription", [problemId], __options , (result) => { return handleReturnType(result, getTypeDescription(11, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getProblemWorkersMax
	*
	* @param { (string | number | BN) } problemId,
	* @returns { Result<ReturnNumber | null, ReturnTypes.LangError> }
	*/
	"getProblemWorkersMax" (
		problemId: (string | number | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<ReturnNumber | null, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getProblemWorkersMax", [problemId], __options , (result) => { return handleReturnType(result, getTypeDescription(13, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getProblemTaskPriceWei
	*
	* @param { (string | number | BN) } problemId,
	* @returns { Result<ReturnNumber | null, ReturnTypes.LangError> }
	*/
	"getProblemTaskPriceWei" (
		problemId: (string | number | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<ReturnNumber | null, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getProblemTaskPriceWei", [problemId], __options , (result) => { return handleReturnType(result, getTypeDescription(13, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getProblemLockedUntil
	*
	* @param { (string | number | BN) } problemId,
	* @returns { Result<ReturnNumber | null, ReturnTypes.LangError> }
	*/
	"getProblemLockedUntil" (
		problemId: (string | number | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<ReturnNumber | null, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getProblemLockedUntil", [problemId], __options , (result) => { return handleReturnType(result, getTypeDescription(13, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getProblemOutdatedAfter
	*
	* @param { (string | number | BN) } problemId,
	* @returns { Result<ReturnNumber | null, ReturnTypes.LangError> }
	*/
	"getProblemOutdatedAfter" (
		problemId: (string | number | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<ReturnNumber | null, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getProblemOutdatedAfter", [problemId], __options , (result) => { return handleReturnType(result, getTypeDescription(13, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getProblemTaskUrls
	*
	* @param { (string | number | BN) } problemId,
	* @returns { Result<Array<string> | null, ReturnTypes.LangError> }
	*/
	"getProblemTaskUrls" (
		problemId: (string | number | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<Array<string> | null, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getProblemTaskUrls", [problemId], __options , (result) => { return handleReturnType(result, getTypeDescription(15, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getProblemAnswers
	*
	* @param { (string | number | BN) } problemId,
	* @returns { Result<Array<string> | null, ReturnTypes.LangError> }
	*/
	"getProblemAnswers" (
		problemId: (string | number | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<Array<string> | null, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getProblemAnswers", [problemId], __options , (result) => { return handleReturnType(result, getTypeDescription(15, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* joinProblem
	*
	* @param { (string | number | BN) } problemId,
	* @returns { Result<Result<null, ReturnTypes.ZkTurkError>, ReturnTypes.LangError> }
	*/
	"joinProblem" (
		problemId: (string | number | BN),
		__options ? : GasLimitAndRequiredValue,
	): Promise< QueryReturnType< Result<Result<null, ReturnTypes.ZkTurkError>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "joinProblem", [problemId], __options , (result) => { return handleReturnType(result, getTypeDescription(17, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* solveTasks
	*
	* @param { (string | number | BN) } problemId,
	* @param { Array<(string | number | BN)> } taskIds,
	* @param { Array<string> } cipheredAnswersString,
	* @returns { Result<null, ReturnTypes.LangError> }
	*/
	"solveTasks" (
		problemId: (string | number | BN),
		taskIds: Array<(string | number | BN)>,
		cipheredAnswersString: Array<string>,
		__options ? : GasLimitAndRequiredValue,
	): Promise< QueryReturnType< Result<null, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "solveTasks", [problemId, taskIds, cipheredAnswersString], __options , (result) => { return handleReturnType(result, getTypeDescription(6, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* resetJoinedProblem
	*
	* @param { (string | number | BN) } problemId,
	* @returns { Result<null, ReturnTypes.LangError> }
	*/
	"resetJoinedProblem" (
		problemId: (string | number | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "resetJoinedProblem", [problemId], __options , (result) => { return handleReturnType(result, getTypeDescription(6, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* withdraw
	*
	* @returns { Result<null, ReturnTypes.LangError> }
	*/
	"withdraw" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "withdraw", [], __options , (result) => { return handleReturnType(result, getTypeDescription(6, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* withdrawAndDecipher
	*
	* @param { ArgumentTypes.AccountId } worker,
	* @param { (string | number | BN) } problemId,
	* @param { Array<(string | number | BN)> } answersSubmissionId,
	* @param { Array<(string | number | BN)> } answers,
	* @param { string } seedPhrase,
	* @returns { Result<null, ReturnTypes.LangError> }
	*/
	"withdrawAndDecipher" (
		worker: ArgumentTypes.AccountId,
		problemId: (string | number | BN),
		answersSubmissionId: Array<(string | number | BN)>,
		answers: Array<(string | number | BN)>,
		seedPhrase: string,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "withdrawAndDecipher", [worker, problemId, answersSubmissionId, answers, seedPhrase], __options , (result) => { return handleReturnType(result, getTypeDescription(6, DATA_TYPE_DESCRIPTIONS)); });
	}

}