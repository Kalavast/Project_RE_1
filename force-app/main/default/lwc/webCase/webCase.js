import { LightningElement, api, track, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


import Get_cases from '@salesforce/apex/Cases.getCases';

import Object_NAME from '@salesforce/schema/Case';
import Contact_Name from '@salesforce/schema/Case.ContactId';
import ACCOUNT_Name from '@salesforce/schema/Case.AccountId';
import Description_feild from '@salesforce/schema/Case.Description';
import Subject_feild from '@salesforce/schema/Case.Subject';
import Type_feild from '@salesforce/schema/Case.Type'; 
import Reason_feild from '@salesforce/schema/Case.Reason';  

//import _feild from '@salesforce/schema/Case.Status';
export default class WebCase extends LightningElement {
    @api objectName = Object_NAME;
    @track readOnly = false;
    @wire(Get_cases) //if has values needed to be passed  @wire(Get_cases, {})
    wireCases(data, error){
        if(data){
            
        }
        if(error){

        }
    }
   // @track case_records;

    webOrigin = 'Email';
    objectName = Object_NAME;
   
    tab1Bool = false;
    tab2Bool = false;


    myFields = [Contact_Name, ACCOUNT_Name, Type_feild, Reason_feild, Subject_feild, Description_feild];
    handleCaseCreation() {
        const toastEvent = new ShowToastEvent({
            title: 'Success',
            message: 'Case Record Created.',
            variant: 'Success'
        });
        this.dispatchEvent(toastEvent);
       
    }
    

}