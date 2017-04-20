/**
 * Created by chenkang1 on 2017/4/19.
 * BaseRestfulService writes via es7 and defines get,post,put,delete methods
 * All methods return a promise Object.
 * 
 */

import config from "../../config"

export default class BaseRestfulService {
    constructor($http) {
        this.$http = $http;
    }

    doGet(url, params) {
        if(!url){
            console.log("url can't be null!");
            return Promise.resolve("url can't be null!");
        }

        return this.$http({
            method: "GET",
            url: config.uri.api + url,
            params: params,
            headers: {
                'Content-type': 'application/json;charset=utf-8'
            }
        });
    }

    doPost(url, params) {
        return this.$http({
            method: "POST",
            url: config.uri.api + url,
            params: params,
            headers: {
                'Content-type': 'application/json;charset=utf-8'
            }
        });
    }

    doPut(url, params) {
        return this.$http({
            method: "PUT",
            url: config.uri.api + url,
            params: params,
            headers: {
                'Content-type': 'application/json;charset=utf-8'
            }
        });
    }

    doDelete(url, params) {
        return this.$http({
            method: "DELETE",
            url: config.uri.api + url,
            data: angular.toJson(params),
            headers: {
                'Content-type': 'application/json;charset=utf-8'
            }
        });
    }
}
