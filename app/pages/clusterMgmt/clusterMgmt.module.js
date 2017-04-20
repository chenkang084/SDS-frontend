/**
 * Created by chenkang1 on 2017/4/19.
 * 
 */

angular.module('BlurAdmin.pages.clusterMgmt', [
    'BlurAdmin.pages.clusterMgmt.systemInfo',
    'BlurAdmin.pages.clusterMgmt.hosts',
])
    .config(routeConfig);

/** @ngInject */
function routeConfig($stateProvider) {
    $stateProvider
        .state('clusterMgmt', {
            url: '/clusterMgmt',
            template: '<div ui-view  autoscroll="true" autoscroll-body-top></div>',
            title: 'Cluster Management',
            sidebarMeta: {
                icon: 'ion-navicon-round',
                order: 0,
            },
        }).state('clusterMgmt.tableSample', {
            url: '/tableSample',
            templateUrl: 'pages/clusterMgmt/tableSample/tableSample.html',
            controller: 'tableSamplePageCtrl',
            title: 'Sample',
            sidebarMeta: {
                icon: 'ion-asterisk',
                order: 10,
            },
        });
}

