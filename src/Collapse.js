import JSUTIL from '@andresclua/jsutil/';
class Collapse{
    constructor(payload){
        this.jsutil = new JSUTIL();
        this.DOM = {
            element : payload.element,
            targetID : payload.element.getAttribute('data-collapse-id'),
            targetClass : payload.element.getAttribute('data-target-class'),
            objectClass : payload.element.getAttribute('data-self-class') 
        }
        this.events();
     
    }
    events(){
        //loop all elements with data-ds-element="collapse"]
            // add event to all of those elements
            this.DOM.element.addEventListener('click', event => {
                event.preventDefault(); 
                /* @ NEED TO VALIDATE ARGUMENTS AT SOME POINT */
                this.collapseEvent()
            })
    }
    /*
     * targetID
     * targetClass
     * objectTrigger
     */
    collapseEvent(){
        if(!document.getElementById(this.DOM.targetID).classList.contains(this.DOM.targetClass)){
            const getHeight = document.getElementById(this.DOM.targetID).scrollHeight;
            this.jsutil.addStyle(document.getElementById(this.DOM.targetID),'height',`auto`);
        }else{
            this.jsutil.addStyle(document.getElementById(this.DOM.targetID),'height','0px');
        }
        // apply class to b--collapse
        this.jsutil.toggleClass(document.getElementById(this.DOM.targetID),this.DOM.targetClass)
        // apply class to trigger element    
        this.jsutil.toggleClass(this.DOM.element,this.DOM.objectClass)
    }
    destroy(){
        this.jsutil.addStyle(document.getElementById(this.DOM.targetID),'height',`auto`);
        this.jsutil.removeClass(document.getElementById(this.DOM.targetID),this.DOM.targetClass)
        this.jsutil.removeClass(this.DOM.element,this.DOM.objectClass)
    }

}
export default Collapse;   