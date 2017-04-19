import BaseRestfulService from "../../commons/services/baseRestfulService.js"

class OverviewService extends BaseRestfulService {
    static $inject = ["$http"]
    constructor($http) {
        super($http);
    }

}

angular.module('BlurAdmin.theme')
    .service('overviewService', OverviewService)


    // async function test(){
    //         console.log("===============");
    //         let t = await overviewService.doGet('http://localhost:4000/api/overview/data', { name: 'rose', age: 18 })
    //         let t2 = await overviewService.doPost('http://localhost:4000/api/overview/data', { name: 'rose', age: 18 })
    //         let t3 = await overviewService.doPut('http://localhost:4000/api/overview/data', { name: 'rose', age: 18 })
    //         console.log("xxxxxxxxxxxxxxxxxx");
            
    //     }

    //     test();

    //     // let t = overviewService.doGet('http://localhost:4000/api/overview/data', { name: 'rose', age: 18 }).then((result) => {
    //     //     console.log(result.data)
    //     // })


    //     // overviewService.doPost('http://localhost:4000/api/overview/data', { name: 'rose', age: 18 }).then((result) => {
    //     //     // if (result && result.statusText = "OK") {
    //     //     //     console.log(result.data)
    //     //     // }
    //     //     console.log(result.data)
    //     // })

    //     // overviewService.doPut('http://localhost:4000/api/overview/data', { name: 'rose', age: 18 }).then((result) => {
    //     //     console.log(result.data)
    //     // })
