/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { ApiPromise } from '@polkadot/api';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@727-ventures/typechain-types';
import { txSignAndSend } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/zkTurk';
import type BN from 'bn.js';
// @ts-ignore
import type {EventRecord} from "@polkadot/api/submittable";
import {decodeEvents} from "../shared/utils";
import EVENT_DATA_TYPE_DESCRIPTIONS from '../event-data/zkTurk.json';


export default class Methods {
	readonly __nativeContract : ContractPromise;
	readonly __keyringPair : KeyringPair;
	readonly __apiPromise: ApiPromise;

	constructor(
		apiPromise: ApiPromise,
		nativeContract : ContractPromise,
		keyringPair : KeyringPair,
	) {
		this.__apiPromise = apiPromise;
		this.__nativeContract = nativeContract;
		this.__keyringPair = keyringPair;
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
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "createProblem", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [title, description, workersMax, taskPriceWei, lockedUntil, outdatedAfter, taskUrls, answers], __options);
	}

	/**
	* getProblemOwner
	*
	* @param { (string | number | BN) } problemId,
	*/
	"getProblemOwner" (
		problemId: (string | number | BN),
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "getProblemOwner", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [problemId], __options);
	}

	/**
	* getProblemTitle
	*
	* @param { (string | number | BN) } problemId,
	*/
	"getProblemTitle" (
		problemId: (string | number | BN),
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "getProblemTitle", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [problemId], __options);
	}

	/**
	* getProblemDescription
	*
	* @param { (string | number | BN) } problemId,
	*/
	"getProblemDescription" (
		problemId: (string | number | BN),
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "getProblemDescription", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [problemId], __options);
	}

	/**
	* getProblemWorkersMax
	*
	* @param { (string | number | BN) } problemId,
	*/
	"getProblemWorkersMax" (
		problemId: (string | number | BN),
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "getProblemWorkersMax", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [problemId], __options);
	}

	/**
	* getProblemTaskPriceWei
	*
	* @param { (string | number | BN) } problemId,
	*/
	"getProblemTaskPriceWei" (
		problemId: (string | number | BN),
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "getProblemTaskPriceWei", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [problemId], __options);
	}

	/**
	* getProblemLockedUntil
	*
	* @param { (string | number | BN) } problemId,
	*/
	"getProblemLockedUntil" (
		problemId: (string | number | BN),
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "getProblemLockedUntil", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [problemId], __options);
	}

	/**
	* getProblemOutdatedAfter
	*
	* @param { (string | number | BN) } problemId,
	*/
	"getProblemOutdatedAfter" (
		problemId: (string | number | BN),
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "getProblemOutdatedAfter", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [problemId], __options);
	}

	/**
	* getProblemTaskUrls
	*
	* @param { (string | number | BN) } problemId,
	*/
	"getProblemTaskUrls" (
		problemId: (string | number | BN),
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "getProblemTaskUrls", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [problemId], __options);
	}

	/**
	* getProblemAnswers
	*
	* @param { (string | number | BN) } problemId,
	*/
	"getProblemAnswers" (
		problemId: (string | number | BN),
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "getProblemAnswers", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [problemId], __options);
	}

	/**
	* joinProblem
	*
	* @param { (string | number | BN) } problemId,
	*/
	"joinProblem" (
		problemId: (string | number | BN),
		__options ? : GasLimitAndRequiredValue,
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
	*/
	"solveTasks" (
		problemId: (string | number | BN),
		taskIds: Array<(string | number | BN)>,
		cipheredAnswersString: Array<string>,
		__options ? : GasLimitAndRequiredValue,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "solveTasks", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [problemId, taskIds, cipheredAnswersString], __options);
	}

	/**
	* resetJoinedProblem
	*
	* @param { (string | number | BN) } problemId,
	*/
	"resetJoinedProblem" (
		problemId: (string | number | BN),
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "resetJoinedProblem", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [problemId], __options);
	}

	/**
	* withdraw
	*
	*/
	"withdraw" (
		__options ? : GasLimit,
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
	*/
	"withdrawAndDecipher" (
		worker: ArgumentTypes.AccountId,
		problemId: (string | number | BN),
		answersSubmissionId: Array<(string | number | BN)>,
		answers: Array<(string | number | BN)>,
		seedPhrase: string,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "withdrawAndDecipher", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [worker, problemId, answersSubmissionId, answers, seedPhrase], __options);
	}

}