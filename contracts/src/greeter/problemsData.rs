use ink::prelude::string::String;
use ink::{
    prelude::{vec, vec::Vec},
    primitives::AccountId,
    storage::Mapping,
};
use ink::env::call::{build_call, ExecutionInput, Selector};
use ink::env::DefaultEnvironment;

pub enum PSP22Event {
    Transfer {
        from: Option<AccountId>,
        to: Option<AccountId>,
        value: u128,
    },
    Approval {
        owner: AccountId,
        spender: AccountId,
        amount: u128,
    },
}

#[ink::storage_item]
#[derive(Debug, Default)]
pub struct ProblemsData {
    count: u128,
    owners: Mapping<u128, AccountId>,
    titles: Mapping<u128, String>,
    descriptions: Mapping<u128, String>,
    workersMaxs: Mapping<u128, u128>,
    taskPriceWeis: Mapping<u128, u128>,
    lockedUntils: Mapping<u128, u128>,
    outdatedAfters: Mapping<u128, u128>,
    taskUrlss: Mapping<u128, Vec<String>>,
    answerss: Mapping<u128, Vec<String>>,
}

impl ProblemsData {
    pub fn new() -> ProblemsData {
        let mut data = ProblemsData {
            count: 0,
            owners: Default::default(),
            titles: Default::default(),
            descriptions: Default::default(),
            workersMaxs: Default::default(),
            taskPriceWeis: Default::default(),
            lockedUntils: Default::default(),
            outdatedAfters: Default::default(),
            taskUrlss: Default::default(),
            answerss: Default::default(),
        };
        data
    }

    pub fn create(
        &mut self,
        owner: AccountId,
        title: String,
        description: String,
        workersMax: u128,
        taskPriceWei: u128,
        lockedUntil: u128,
        outdatedAfter: u128
    ) -> u128 {
        let newId = self.count + 1;
        let new_count = self.count + 1;

        self.count = new_count;
        self.owners.insert(newId, &(owner));
        self.titles.insert(newId, &(title));
        self.descriptions.insert(newId, &(description));
        self.workersMaxs.insert(newId, &(workersMax));
        self.taskPriceWeis.insert(newId, &(taskPriceWei));
        self.lockedUntils.insert(newId, &(lockedUntil));
        self.outdatedAfters.insert(newId, &(outdatedAfter));
        
        // TODO event...

        newId
    }

    /// Returns problem counter.
    pub fn total(&self) -> u128 {
        self.count
    }

    /// TODO: ?why not to use .unwrap_or_default() without Option<>?
    
    pub fn owner(&self, problemId: u128) -> Option<AccountId> { 
        self.owners.get(problemId)
    }
    pub fn title(&self, problemId: u128) -> Option<String> {
        self.titles.get(problemId)
    }
    pub fn description(&self, problemId: u128) -> Option<String> {
        self.descriptions.get(problemId)
    }
    pub fn workersMax(&self, problemId: u128) -> Option<u128> {
        self.workersMaxs.get(problemId)
    }
    pub fn taskPriceWei(&self, problemId: u128) -> Option<u128> {
        self.taskPriceWeis.get(problemId)
    }
    pub fn lockedUntil(&self, problemId: u128) -> Option<u128> {
        self.lockedUntils.get(problemId)
    }
    pub fn outdatedAfter(&self, problemId: u128) -> Option<u128> {
        self.outdatedAfters.get(problemId)
    }
    pub fn taskUrls(&self, problemId: u128) -> Option<Vec<String>> {
        self.taskUrlss.get(problemId)
    }
    pub fn answers(&self, problemId: u128) -> Option<Vec<String>> {
        self.answerss.get(problemId)
    }
}
