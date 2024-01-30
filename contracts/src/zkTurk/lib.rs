#![cfg_attr(not(feature = "std"), no_std, no_main)]
pub mod problemsData;
pub mod errors;
pub use problemsData::{ProblemsData, ProblemsDataEvent};
pub use errors::ZkTurkError;
// use ink::{
//     prelude::{vec, vec::Vec},
//     primitives::AccountId,
//     storage::Mapping,
// };

// ZkTurk Contract.
#[ink::contract]
mod zkTurk {
    use ink::prelude::string::String;
    use ink::storage::Mapping;
    use ink::prelude::vec::Vec;
    use crate::{ProblemsData, ProblemsDataEvent, ZkTurkError};

    #[ink(storage)]
    pub struct ZkTurk {
        pub problemFee: u128,
        // Stake to join the problem.
        pub problemStake: u128,

        // Workers data.
        // Worker can solve simultaneously only 1 problem.
        workerToProblemToSolve: Mapping<AccountId, u128>,

        // Other storages.
        pub problemsData: ProblemsData,

    }
    
    #[ink(event)]
    pub struct JoinProblem {
        #[ink(topic)]
        problemId: u128,
        #[ink(topic)]
        worker: AccountId,
    }

    // TODO: add other events below.

    impl ZkTurk {
        /// Creates a new zkTurk contract initialized with the given value.
        #[ink(constructor)]
        pub fn new(
            problemFee: u128,
            problemStake: u128,
        ) -> Self {
            Self {
                problemsData: ProblemsData::new(),
                problemFee: problemFee,
                problemStake: problemFee,
                workerToProblemToSolve: Default::default(),
            }
        }

        fn emit_events(&self, events: Vec<ProblemsDataEvent>) {
            for event in events {
                match event {
                    ProblemsDataEvent::JoinProblem { problemId, worker } => {
                        self.env().emit_event(JoinProblem { problemId, worker })
                    }
                    // TODO: add other events below.
                }
            }
        }

        // TODO: add separate `impl ProblemCRUDInterface for ZkTurk {}`

        /// Creat problem.
        #[ink(message)]
        pub fn create_problem(&mut self, title: String, description: String, workersMax: u128, taskPriceWei: u128,
        lockedUntil: u128, outdatedAfter: u128, taskUrls: Vec<String>, answers: Vec<String>,) {
            let from = self.env().caller();

            self.problemsData.create(
                from,
                title.clone(),
                description.clone(),
                workersMax.clone(),
                taskPriceWei.clone(),
                lockedUntil.clone(),
                outdatedAfter.clone(),
                taskUrls.clone(),
                answers.clone(),
            );

            // TODO: emit event...
        }

        /// Getters.
        #[ink(message)]
        pub fn get_problem_owner(&self, problemId: u128) -> Option<AccountId> {
            self.problemsData.owner(problemId)
        }
        #[ink(message)]
        pub fn get_problem_title(&self, problemId: u128) -> Option<String> {
            self.problemsData.title(problemId)
        }
        #[ink(message)]
        pub fn get_problem_description(&self, problemId: u128) -> Option<String> {
            self.problemsData.description(problemId)
        }
        #[ink(message)]
        pub fn get_problem_workersMax(&self, problemId: u128) -> Option<u128> {
            self.problemsData.workersMax(problemId)
        }
        #[ink(message)]
        pub fn get_problem_taskPriceWei(&self, problemId: u128) -> Option<u128> {
            self.problemsData.taskPriceWei(problemId)
        }
        #[ink(message)]
        pub fn get_problem_lockedUntil(&self, problemId: u128) -> Option<u128> {
            self.problemsData.lockedUntil(problemId)
        }
        #[ink(message)]
        pub fn get_problem_outdatedAfter(&self, problemId: u128) -> Option<u128> {
            self.problemsData.outdatedAfter(problemId)
        }
        #[ink(message)]
        pub fn get_problem_taskUrls(&self, problemId: u128) -> Option<Vec<String>> {
            self.problemsData.taskUrls(problemId)
        }
        #[ink(message)]
        pub fn get_problem_answers(&self, problemId: u128) -> Option<Vec<String>> {
            self.problemsData.answers(problemId)
        }

        // TODO: add separate `impl WorkerInterface for ZkTurk {}`

        /// It verify account through DiD and require for Token deposit to send before
        ///  actual joining to the Problem [to start solving tasks by submitting answers].
        #[ink(message, payable)]
        pub fn join_problem(&mut self, problemId: u128) -> Result<(), ZkTurkError> {
            let from = self.env().caller();
            let _transferred = self.env().transferred_value();

            // TODO: add other PSP22 compatible tokens?
            if _transferred < self.problemStake {
                return Err(ZkTurkError::InefficientStakeError);
            }
            // TODO: verification check from DiD.
            // TODO: check that problem exists (kinda checked already).

            let problemWorkersCounts = self.problemsData.problemWorkersCounts(problemId);
            let workersMax = self.problemsData.workersMax(problemId);

            if problemWorkersCounts > workersMax {
                return Err(ZkTurkError::WorkersMaxError);
            }

            let joinedProblem = self.workerToProblemToSolve.get(from);
            if joinedProblem.is_some()  {
                return Err(ZkTurkError::WorkerAlreadyJoinedError);
            }

            self.workerToProblemToSolve.insert(from, &(problemId));
            let events = self.problemsData.joinProblem(problemId, from)?;

            self.emit_events(events);

            Ok(())
        }

        #[ink(message, payable)]
        pub fn solve_tasks(&mut self, problemId: u128, taskIds: Vec<u128>, cipheredAnswersString: Vec<String>) {
            // TOOD: onlyBeforeTimeLock
            // TODO: impl.
        }

        /// In order to make early return.
        #[ink(message)]
        pub fn reset_joined_problem(&mut self, problemId: u128) {
            // TODO: impl.
        }

        /// In order to make early return.
        #[ink(message)]
        pub fn withdraw(&mut self) {
            // TODO: impl.
        }

        /// In order to make early return.
        #[ink(message)]
        pub fn withdrawAndDecipher(&mut self, worker: AccountId, problemId: u128, answersSubmissionId: Vec<u128>, answers: Vec<u128>, seedPhrase: String) {
            // TODO: impl.
        }
    }
}
