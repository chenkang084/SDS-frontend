/**
 * Created by chenkang1 on 2017/4/20.
 */

import BaseComponent from "../../../commons/base/BaseComponent.js"

class HostController {

    static $inject = ["overviewService"]

    constructor(overviewService) {
        this.overviewService = overviewService;

        this.init()

        this.getData();

        
    }

    init() {

        this.overviewService.doGet('api/overview/data', { name: 'rose', age: 18 })
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    async getData() {

        let resultArr = []

        let t = await this.overviewService.doGet('api/overview/data', { name: 'rose', age: 18 })
        let t2 = await this.overviewService.doPost('api/overview/data', { name: 'rose', age: 18 })
        let t3 = await this.overviewService.doPut('api/overview/data', { name: 'rose', age: 18 })

        resultArr.push(t)
        resultArr.push(t2)
        resultArr.push(t3)

        console.log(resultArr)
        return resultArr;
    }

}

class HostComponent extends BaseComponent {
    constructor() {
        super();
        this.controller = HostController;
        this.template = require('./hosts.component.html');
    }
}


angular.module('BlurAdmin.pages.clusterMgmt.hosts')
    .component('hostComponent', new HostComponent());