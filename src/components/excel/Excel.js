import { $ } from "@core/Dom"

export class Excel {
    constructor(selector, options){
        this.$el = $(selector)
        this.components = options.components || []
    }

    getRooot(){
        const $root = $.create('div', 'excel')
        this.components = this.components.map(Component => {
            const $el = $.create('div', Component.className)
            const instanse  = new Component($el)
            $el.html(instanse.toHTML())
            $root.append($el)
            return instanse
            
        });

        return $root
    }

    render(){
        this.$el.append(this.getRooot())
        this.components.forEach(component => {component.init()});
    }
}