/**
 * Created by chenkang1 on 2017/4/20.
 * 
 */

export default class BaseComponent {
    constructor() {
        this.bindToController = true;
        this.controllerAs = 'vm';
        this.restrict = 'E';
    }

}
