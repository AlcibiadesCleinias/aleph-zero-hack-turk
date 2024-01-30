/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { ApiPromise } from '@polkadot/api';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@727-ventures/typechain-types';
import type { QueryReturnType } from '@727-ventures/typechain-types';
import { queryOkJSON, queryJSON, handleReturnType } from '@727-ventures/typechain-types';
import { txSignAndSend } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/zkTurk';
import type * as ReturnTypes from '../types-returns/zkTurk';
import type BN from 'bn.js';
//@ts-ignore
import {ReturnNumber} from '@727-ventures/typechain-types';
import {getTypeDescription} from './../shared/utils';
// @ts-ignore
import type {EventRecord} from "@polkadot/api/submittable";
import {decodeEvents} from "../shared/utils";
import DATA_TYPE_DESCRIPTIONS from '../data/zkTurk.json';
import EVENT_DATA_TYPE_DESCRIPTIONS from '../event-data/zkTurk.json';


export default class Methods {
	readonly __nativeContract : ContractPromise;
	readonly __keyringPair : KeyringPair;
	readonly __callerAddress : string;
	readonly __apiPromise: ApiPromise;

	constructor(
		apiPromise : ApiPromise,
		nativeContract : ContractPromise,
		keyringPair : KeyringPair,
	) {
		this.__apiPromise = apiPromise;
		this.__nativeContract = nativeContract;
		this.__keyringPair = keyringPair;
		this.__callerAddress = keyringPair.address;
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
	* @returns { void }
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
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "createProblem", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [title, description, workersMax, taskPriceWei, lockedUntil, outdatedAfter, taskUrls, answers], __options);
	}

	/**
	* getProblemOwner
	*
	* @param { (string | number | BN) } problemId,
	* @returns { Result<ReturnTypes.AccountId | null, ReturnTypes.LangError> }
	*/
	"getProblemOwner" (
		problemId: (string | number | BN),
		__options: GasLimit,
	): Promise< QueryReturnType< Result<ReturnTypes.AccountId | null, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getProblemOwner", [problemId], __options, (result) => { return handleReturnType(result, getTypeDescription(9, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getProblemTitle
	*
	* @param { (string | number | BN) } problemId,
	* @returns { Result<string | null, ReturnTypes.LangError> }
	*/
	"getProblemTitle" (
		problemId: (string | number | BN),
		__options: GasLimit,
	): Promise< QueryReturnType< Result<string | null, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getProblemTitle", [problemId], __options, (result) => { return handleReturnType(result, getTypeDescription(11, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getProblemDescription
	*
	* @param { (string | number | BN) } problemId,
	* @returns { Result<string | null, ReturnTypes.LangError> }
	*/
	"getProblemDescription" (
		problemId: (string | number | BN),
		__options: GasLimit,
	): Promise< QueryReturnType< Result<string | null, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getProblemDescription", [problemId], __options, (result) => { return handleReturnType(result, getTypeDescription(11, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getProblemWorkersMax
	*
	* @param { (string | number | BN) } problemId,
	* @returns { Result<ReturnNumber | null, ReturnTypes.LangError> }
	*/
	"getProblemWorkersMax" (
		problemId: (string | number | BN),
		__options: GasLimit,
	): Promise< QueryReturnType< Result<ReturnNumber | null, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getProblemWorkersMax", [problemId], __options, (result) => { return handleReturnType(result, getTypeDescription(13, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getProblemTaskPriceWei
	*
	* @param { (string | number | BN) } problemId,
	* @returns { Result<ReturnNumber | null, ReturnTypes.LangError> }
	*/
	"getProblemTaskPriceWei" (
		problemId: (string | number | BN),
		__options: GasLimit,
	): Promise< QueryReturnType< Result<ReturnNumber | null, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getProblemTaskPriceWei", [problemId], __options, (result) => { return handleReturnType(result, getTypeDescription(13, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getProblemLockedUntil
	*
	* @param { (string | number | BN) } problemId,
	* @returns { Result<ReturnNumber | null, ReturnTypes.LangError> }
	*/
	"getProblemLockedUntil" (
		problemId: (string | number | BN),
		__options: GasLimit,
	): Promise< QueryReturnType< Result<ReturnNumber | null, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getProblemLockedUntil", [problemId], __options, (result) => { return handleReturnType(result, getTypeDescription(13, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getProblemOutdatedAfter
	*
	* @param { (string | number | BN) } problemId,
	* @returns { Result<ReturnNumber | null, ReturnTypes.LangError> }
	*/
	"getProblemOutdatedAfter" (
		problemId: (string | number | BN),
		__options: GasLimit,
	): Promise< QueryReturnType< Result<ReturnNumber | null, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getProblemOutdatedAfter", [problemId], __options, (result) => { return handleReturnType(result, getTypeDescription(13, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getProblemTaskUrls
	*
	* @param { (string | number | BN) } problemId,
	* @returns { Result<Array<string> | null, ReturnTypes.LangError> }
	*/
	"getProblemTaskUrls" (
		problemId: (string | number | BN),
		__options: GasLimit,
	): Promise< QueryReturnType< Result<Array<string> | null, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getProblemTaskUrls", [problemId], __options, (result) => { return handleReturnType(result, getTypeDescription(15, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getProblemAnswers
	*
	* @param { (string | number | BN) } problemId,
	* @returns { Result<Array<string> | null, ReturnTypes.LangError> }
	*/
	"getProblemAnswers" (
		problemId: (string | number | BN),
		__options: GasLimit,
	): Promise< QueryReturnType< Result<Array<string> | null, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getProblemAnswers", [problemId], __options, (result) => { return handleReturnType(result, getTypeDescription(15, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* joinProblem
	*
	* @param { (string | number | BN) } problemId,
	* @returns { void }
	*/
	"joinProblem" (
		problemId: (string | number | BN),
		__options: GasLimitAndRequiredValue,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "joinProblem", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [problemId], __options);
	}

	/**
	* solveTasks
	*
	* @param { (string | number | BN) } problemId,
	* @param { Array<(string | number | BN)> } taskIds,
	* @param { Array<string> } cipheredAnswersString,
	* @returns { void }
	*/
	"solveTasks" (
		problemId: (string | number | BN),
		taskIds: Array<(string | number | BN)>,
		cipheredAnswersString: Array<string>,
		__options: GasLimitAndRequiredValue,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "solveTasks", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [problemId, taskIds, cipheredAnswersString], __options);
	}

	/**
	* resetJoinedProblem
	*
	* @param { (string | number | BN) } problemId,
	* @returns { void }
	*/
	"resetJoinedProblem" (
		problemId: (string | number | BN),
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "resetJoinedProblem", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [problemId], __options);
	}

	/**
	* withdraw
	*
	* @returns { void }
	*/
	"withdraw" (
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "withdraw", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [], __options);
	}

	/**
	* withdrawAndDecipher
	*
	* @param { ArgumentTypes.AccountId } worker,
	* @param { (string | number | BN) } problemId,
	* @param { Array<(string | number | BN)> } answersSubmissionId,
	* @param { Array<(string | number | BN)> } answers,
	* @param { string } seedPhrase,
	* @returns { void }
	*/
	"withdrawAndDecipher" (
		worker: ArgumentTypes.AccountId,
		problemId: (string | number | BN),
		answersSubmissionId: Array<(string | number | BN)>,
		answers: Array<(string | number | BN)>,
		seedPhrase: string,
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "withdrawAndDecipher", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [worker, problemId, answersSubmissionId, answers, seedPhrase], __options);
	}

}