/**
 * Created by chenkang1 on 2017/4/20.
 */

angular.module('BlurAdmin.pages.clusterMgmt.hosts', [])
    .config(routeConfig);

/** @ngInject */
function routeConfig($stateProvider) {
    $stateProvider
        .state('clusterMgmt.hosts', {
            url: '/hosts',
            templateUrl: 'pages/clusterMgmt/hosts/hosts.html',
            title: 'Hosts',
            sidebarMeta: {
                order: 300,
            }
        });
}