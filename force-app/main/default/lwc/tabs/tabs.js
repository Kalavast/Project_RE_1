import { LightningElement } from 'lwc';

export default class Tabs extends LightningElement {
    
    tab1Bool = false;
    tab2Bool = false;
    tab_1_action(){
        this.tab1Bool = !this.tab1Bool;
        this.tab2Bool = false;
        console.log(this.tab1Bool);
    }

    tab_2_action (){
        this.tab2Bool = !this.tab2Bool;
        this.showdetails = false;
        console.log(this.tab2Bool);
    }


}