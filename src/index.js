
import Collapse from './Collapse';
class Page{
    constructor(){
        this.init()
    }
    init(){ 
        document.querySelectorAll('[data-ds-element="collapse"]').forEach(element => {
            new Collapse({
                element : element
            })   
        });
    }
}
export default Page;

new Page()
