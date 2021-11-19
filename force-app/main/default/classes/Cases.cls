public with sharing class Cases {
    @AuraEnabled(cacheable=true)
	public static List<case> getCases() {
    	List<case> results = [select ContactId, AccountId, Status, Type from Case LIMIT 50];
        return results;
	}

   //@AuraEnabled(cacheable=true)
    public static void CasetriggerHelperValidation(List<Case> conts) {
        for(Case c : conts){
            if(c.ContactId == null){
                c.addError('Must include a contact');
            }
            if (c.AccountId == null){
                c.addError('Must include a AccountId');
            }
            if(c.Type == null){
                c.addError('Must include a Type');
            }
            if(c.Reason == null){
                c.addError('Must include a Reason');
            }
            
            c.Origin = 'Web';
            update c;
          }
    }



    public static void CasetriggerHelperAutoRecord(List<Case> cont) {
        for(Case c : cont){
         //   c.Origin = 'Web';
           
       //     update c;
        }
    }

}




 /*
 public with sharing class Cases {
    @AuraEnabled(cacheable=true)
    Method{
        after trigger
    }
}
//js
import Method

Default{

}

 
 
 
 
 
 Database.query(
       	 'ContactId, AccountId, Status, Type, Email ' +
       	 'FROM Case ' +
       	 'ORDER BY ' + sortOrder + ' ASC ' +
      	  'LIMIT 10'*/
