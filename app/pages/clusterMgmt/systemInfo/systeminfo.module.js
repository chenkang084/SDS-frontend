/**
 * Created by chenkang1 on 2017/4/20.
 */

angular.module('BlurAdmin.pages.clusterMgmt.systemInfo', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('clusterMgmt.systemInfo', {
          url: '/systemInfo',
          templateUrl: 'pages/clusterMgmt/systemInfo/systemInfo.html',
          title: 'SystemInfo',
          sidebarMeta: {
            order: 300,
          }
        });
  }