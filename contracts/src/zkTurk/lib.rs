#![cfg_attr(not(feature = "std"), no_std, no_main)]
pub mod problemsData;
pub use problemsData::{ProblemsData, PSP22Event};
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
    use crate::{ProblemsData, PSP22Event};

//     #[ink(event)]
//     pub struct Greeted {
//         from: Option<AccountId>,
//         message: String,
//     }

    #[ink(storage)]
    pub struct ZkTurk {
        message: String,
        pub problemFee: u128,
        pub problemStake: u128,

        // Other storages.
        pub problemsData: ProblemsData,

    }

    impl ZkTurk {
        /// Creates a new zkTurk contract initialized with the given value.
        #[ink(constructor)]
        pub fn new(
            init_value: String, 
            problemFee: u128,
            problemStake: u128,
        ) -> Self {
            Self {
                problemsData: ProblemsData::new(),
                message: init_value,
                problemFee: problemFee,
                problemStake: problemFee,
            }
        }

        /// Sets `message` to the given value.
//         #[ink(message)]
//         pub fn set_message(&mut self, new_value: String) {
//             self.message = new_value.clone();
//
//             let from = self.env().caller();
//             self.env().emit_event(Greeted {
//                 from: Some(from),
//                 message: new_value,
//             });
//         }

        // TODO: impl ProblemCRUDInterface for ZkTurk {}

        /// Creat problem.
        #[ink(message)]
        pub fn create_problem(&mut self, title: String, description: String, workersMax: u128, taskPriceWei: u128,
        lockedUntil: u128, outdatedAfter: u128) {
            let from = self.env().caller();

            self.problemsData.create(
                from,
                title.clone(),
                description.clone(),
                workersMax.clone(),
                taskPriceWei.clone(),
                lockedUntil.clone(),
                outdatedAfter.clone(),
            );

            // TODO: emit event...
        }

        /// Getters.
        #[ink(message)]
        pub fn get_problem_owner(&self, problemId: u128) -> Option<AccountId> {
            self.problemsData.owner(problemId)
        }
        pub fn get_problem_title(&self, problemId: u128) -> Option<String> {
            self.problemsData.title(problemId)
        }
        pub fn get_problem_description(&self, problemId: u128) -> Option<String> {
            self.problemsData.description(problemId)
        }
        pub fn get_problem_workersMax(&self, problemId: u128) -> Option<u128> {
            self.problemsData.workersMax(problemId)
        }
        pub fn get_problem_taskPriceWei(&self, problemId: u128) -> Option<u128> {
            self.problemsData.taskPriceWei(problemId)
        }
        pub fn get_problem_lockedUntil(&self, problemId: u128) -> Option<u128> {
            self.problemsData.lockedUntil(problemId)
        }
        pub fn get_problem_outdatedAfter(&self, problemId: u128) -> Option<u128> {
            self.problemsData.outdatedAfter(problemId)
        }
        pub fn get_problem_taskUrls(&self, problemId: u128) -> Option<Vec<String>> {
            self.problemsData.taskUrls(problemId)
        }
        pub fn get_problem_answers(&self, problemId: u128) -> Option<Vec<String>> {
            self.problemsData.answers(problemId)
        }
    }
}
