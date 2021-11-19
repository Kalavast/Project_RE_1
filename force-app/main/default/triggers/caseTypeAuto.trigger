trigger caseTypeAuto on Case (after insert, before insert) {
    if(Trigger.isBefore){
        if(Trigger.isInsert){
            Cases.CasetriggerHelperValidation(Trigger.new);
        }
        
    }
    if(Trigger.isAfter){
        if(Trigger.isInsert){
            Cases.CasetriggerHelperAutoRecord(Trigger.new);
        }
    }
    
}