import { $ } from "@core/Dom"

export class Excel {
    constructor(selector, options){
        this.$el = document.querySelector(selector)
        this.components = options.components || []
    }

    getRooot(){
        const $root = $.create('div', 'excel')
        this.components.forEach(Component => {
            const $el = $.create('div', Component.className)
            const instanse  = new Component($el)
            $el.innerHTML = instanse.toHTML()
            $root.append($el)
            
        });

        return $root
    }

    render(){
        this.$el.append(this.getRooot())
    }
}