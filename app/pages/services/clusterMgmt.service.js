/**
 * Created by chenkang1 on 2017/4/20.
 * 
 */


import BaseRestfulService from "../../commons/base/baseRestfulService.js"


class ClusterService extends BaseRestfulService {
    static $inject = ["$http"]
    constructor($http) {
        super($http);
    }

}

angular.module('BlurAdmin.theme')
    .service('overviewService', ClusterService)
