
import Collapse from './Collapse';
class Page{
    constructor(){
        this.collapse = [];
        this.init()
    }
    init(){ 
        document.querySelectorAll('[data-ds-element="collapse"]').forEach((element, index) => {
            this.collapse[index] = new Collapse({
                element : element
            })   
        });
        document.querySelector(".js--collapse-destroy").addEventListener("click", (e) => {
            e.preventDefault()
            this.destroy()
        })
    }
    destroy(){
        document.querySelectorAll('[data-ds-element="collapse"]').forEach((element, index) => {
            this.collapse[index].destroy()  
        });
    }
}
export default Page;

new Page()
