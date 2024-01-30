import type {ReturnNumber} from "@727-ventures/typechain-types";
import type * as ReturnTypes from '../types-returns/zkTurk';

export interface JoinProblem {
	problemId: ReturnNumber;
	worker: ReturnTypes.AccountId;
}

