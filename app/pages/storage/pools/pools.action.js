(function () {
    'use strict';

    angular.module('BlurAdmin.pages.storage.pools')
        .service('storagePoolsAction',
            ['$uibModal',function ($uibModal) {

                    var context = {};

                    

                    function action(scope) {
                        /*jshint validthis: true */
                        var self = this;
                        self.controllerScope = scope;



  self.open = function (page, size) {
    var openOption = {
        animation: true,
        templateUrl: page,
        size: size,
        controller:"PoolsDetail",
        // scope:$scope,
        resolve: {
          items: function () {
            // return $scope.items;
          }
        }}
        
      openOption.resolve.items = function(){return "parameter"};
      $uibModal.open(openOption);
    };



                        var createSwitchOption = {
                            templateUrl: 'pages/storage/pools/modal/pools.create.html',
                            // controller: 'lenovoNetworkSwitchesCreateSwitchController',
                            // windowClass: 'neutronListContent',
                            resolve: {}
                        }

                        self.createSwitch = function () {
                            modal.open(createSwitchOption).result.then(self.submitCreateSwitch);
                        }

                        self.submitCreateSwitch = function (newSwitch) {
                            //console.log(newSwitch);
                            switchAPI.createSwitch(newSwitch)
                                .success(function (data) {
                                    if (data && data.status && data.status == 'success') {
                                        toastService.add('success', gettext('Successfully add a new switch!'));
                                    } else {
                                        toastService.add('error', gettext('Add new switch failed.') + ' ' + data.msg);
                                    }

                                    self.controllerScope.isAdding = false;
                                    self.controllerScope.actions.refresh();
                                })
                                .error(function (data) {
                                    toastService.add('error', gettext('Add new switch failed.') + ' ' + data);
                                });

                            self.controllerScope.isAdding = true;
                            toastService.add('info', gettext('Processing... Please wait a moment'));
                        }

                        // var editSwitchOption = {
                        //     templateUrl: path + 'switch/edit/',
                        //     controller: 'lenovoNetworkSwitchesEditSwitchController',
                        //     windowClass: 'neutronListContent',
                        //     resolve: {
                        //         switchData: function () {
                        //         }
                        //     }
                        // }

                        // self.editSwitch = function (selectedSwitch) {
                        //     if (selectedSwitch || selectedSwitch.length > 0) {
                        //         editSwitchOption.resolve.switchData = function () {
                        //             return selectedSwitch[0]
                        //         };
                        //         modal.open(editSwitchOption).result.then(self.submitEditSwitch);
                        //     }
                        // }

                        // self.submitEditSwitch = function (switchEditData) {
                        //     //console.log(switchEditData);
                        //     switchAPI.editSwitch(switchEditData.switch_id, switchEditData.pmswitch_id,
                        //         {username: switchEditData.username, password: switchEditData.password})
                        //         .success(function (data) {
                        //             if (data && data.status && data.status == 'success') {
                        //                 toastService.add('success', gettext('Successfully edit a new switch!'));
                        //             } else {
                        //                 toastService.add('error', gettext('Edit switch failed.') + ' ' + data.msg);
                        //             }

                        //             self.controllerScope.isEditting = false;
                        //             self.controllerScope.actions.refresh();
                        //         })
                        //         .error(function (data) {
                        //             toastService.add('error', gettext('Edit switch failed.') + ' ' + data);
                        //         });

                        //     self.controllerScope.isEditting = true;
                        //     //toastService.add('info', gettext('Processing... Please wait a moment'));
                        // }

                        // var deleteSwitchOption = {
                        //     templateUrl: path + 'switch/delete/',
                        //     controller: 'lenovoNetworkSwitchesDeleteSwitchController',
                        //     windowClass: 'neutronListContent',
                        //     resolve: {
                        //         switchIds: function () {
                        //         },
                        //         switchNames: function () {
                        //         }
                        //     }
                        // }

                        // self.deleteSwitch = function (switches) {
                        //     if (switches) {
                        //         var switchIds = [];
                        //         var switchNames = [];
                        //         angular.forEach(switches, function (row) {
                        //             switchIds.push({
                        //                 switch_id: row.uuid,
                        //                 pmswitch_id: row.pmswitch_id
                        //             });
                        //             switchNames.push(row.hostname);
                        //         });
                        //         deleteSwitchOption.resolve.switchIds = function () {
                        //             return switchIds
                        //         };
                        //         deleteSwitchOption.resolve.switchNames = function () {
                        //             return switchNames.join(',')
                        //         };
                        //         modal.open(deleteSwitchOption).result.then(self.submitDeleteSwitch);
                        //     }
                        // }

                        // self.submitDeleteSwitch = function (switchIds) {
                        //     //console.log(switchIds);
                        //     var hasError = false;
                        //     var doneCount = 0;

                        //     angular.forEach(switchIds, function (switchId) {
                        //         switchAPI.deleteSwitch(switchId.switch_id, switchId.pmswitch_id)
                        //             .success(function (data) {
                        //                 if (data && data.status && data.status == 'success') {

                        //                 } else {
                        //                     hasError = true;
                        //                     toastService.add('error', gettext('Delete switch failed.') + ' ' + data.msg);
                        //                 }

                        //                 doneCount++;
                        //                 if (doneCount = switchIds.length) {
                        //                     if (!hasError) {
                        //                         toastService.add('success', gettext('Successfully delete switches!'));
                        //                     }

                        //                     self.controllerScope.isDeleting = false;
                        //                     self.controllerScope.actions.refresh();
                        //                 }
                        //             })
                        //             .error(function (data) {
                        //                 hasError = true;
                        //                 toastService.add('error', gettext('Delete switch failed.') + ' ' + data);

                        //                 doneCount++;
                        //                 if (doneCount = switchIds.length) {
                        //                     if (!hasError) {
                        //                         toastService.add('success', gettext('Successfully delete switches!'));
                        //                     }

                        //                     self.controllerScope.isDeleting = false;
                        //                     self.controllerScope.actions.refresh();
                        //                 }
                        //             });
                        //     });

                        //     self.controllerScope.isDeleting = true;
                        //     //toastService.add('info', gettext('Processing... Please wait a moment'));
                        // }

                        // var createDetailSwitchOption = {
                        //     templateUrl: path + 'detail/create/',
                        //     controller: 'lenovoNetworkSwitchesCreateDetailController',
                        //     windowClass: 'neutronListContent',
                        //     resolve: {
                        //         switchData: function () {
                        //         }
                        //     }
                        // }

                        // self.createDetailSwitch = function (switchData) {
                        //     createDetailSwitchOption.resolve.switchData = function () {
                        //         return switchData
                        //     };
                        //     modal.open(createDetailSwitchOption).result.then(self.submitCreateDetailSwitch);
                        // }

                        // self.submitCreateDetailSwitch = function (newNode) {
                        //     //console.log(newNode);
                        //     var submitNodeData = {
                        //         port_mapping: {}
                        //     };

                        //     submitNodeData["port_mapping"][newNode.nodename] = newNode.port;

                        //     switchAPI.createNode(newNode.switch_id, newNode.pmswitch_id, submitNodeData)
                        //         .success(function (data) {
                        //             if (data && data.status && data.status == 'success') {
                        //                 toastService.add('success', gettext('Successfully add a new port-mapping!'));
                        //             } else {
                        //                 toastService.add('error', gettext('Add port-mapping failed.') + ' ' + data.msg);
                        //             }

                        //             self.controllerScope.isAdding = false;
                        //             self.controllerScope.actions.refresh();
                        //         })
                        //         .error(function (data) {
                        //             toastService.add('error', gettext('Add port-mapping failed.') + ' ' + data);
                        //         });

                        //     self.controllerScope.isAdding = true;
                        //     //toastService.add('info', gettext('Processing... Please wait a moment'));
                        // }

                        // var editDetailSwitchOption = {
                        //     templateUrl: path + 'detail/edit/',
                        //     controller: 'lenovoNetworkSwitchesEditDetailController',
                        //     windowClass: 'neutronListContent',
                        //     resolve: {
                        //         switchData: function () {
                        //         },
                        //         nodeData: function () {
                        //         },
                        //     }
                        // }

                        // self.editDetailSwitch = function (data) {
                        //     editDetailSwitchOption.resolve.switchData = function () {
                        //         return data[0]
                        //     };
                        //     editDetailSwitchOption.resolve.nodeData = function () {
                        //         if (data[1] || data[1].length > 0) {
                        //             return data[1][0];
                        //         }
                        //     };
                        //     modal.open(editDetailSwitchOption).result.then(self.submitEditDetailSwitch);
                        // }

                        // self.submitEditDetailSwitch = function (updateNode) {
                        //     //console.log(updateNode);
                        //     var submitNodeData = {
                        //         port_mapping: {}
                        //     };

                        //     submitNodeData["port_mapping"][updateNode.nodename] = updateNode.port;

                        //     switchAPI.editNode(updateNode.switch_id, updateNode.pmswitch_id, submitNodeData)
                        //         .success(function (data) {
                        //             if (data && data.status && data.status == 'success') {
                        //                 toastService.add('success', gettext('Successfully edit a new port-mapping!'));
                        //             } else {
                        //                 toastService.add('error', gettext('Edit port-mapping failed.') + ' ' + data.msg);
                        //             }

                        //             self.controllerScope.isEditting = false;
                        //             self.controllerScope.actions.refresh();
                        //         })
                        //         .error(function (data) {
                        //             toastService.add('error', gettext('Edit port-mapping failed.') + ' ' + data);
                        //         });

                        //     self.controllerScope.isEditting = true;
                        //     //toastService.add('info', gettext('Processing... Please wait a moment'));
                        // }

                        // var deleteDetailSwitchOption = {
                        //     templateUrl: path + 'detail/delete/',
                        //     controller: 'lenovoNetworkSwitchesDeleteDetailController',
                        //     windowClass: 'neutronListContent',
                        //     resolve: {
                        //         switchData: function () {
                        //         },
                        //         nodeNames: function () {
                        //         },
                        //         nodeIds: function () {
                        //         }
                        //     }
                        // }

                        // self.deleteDetailSwitch = function (data) {
                        //     if (data[1] || data[1].length > 0) {
                        //         var ids = [];
                        //         angular.forEach(data[1], function (row) {
                        //             ids.push(row.nodename);
                        //         });

                        //         deleteDetailSwitchOption.resolve.switchData = function () {
                        //             return data[0]
                        //         };
                        //         deleteDetailSwitchOption.resolve.nodeNames = function () {
                        //             return ids.join(',')
                        //         };
                        //         deleteDetailSwitchOption.resolve.nodeIds = function () {
                        //             return ids
                        //         };
                        //         modal.open(deleteDetailSwitchOption).result.then(self.submitDeleteDetailSwitch);
                        //     }
                        // }

                        // self.submitDeleteDetailSwitch = function (deleteData) {
                        //     //console.log(deleteData);
                        //     switchAPI.deleteNode(deleteData.switchData.uuid, deleteData.switchData.pmswitch_id, deleteData.nodes)
                        //         .success(function (data) {
                        //             if (data && data.status && data.status == 'success') {
                        //                 toastService.add('success', gettext('Successfully delete port-mapping!'));
                        //             } else {
                        //                 toastService.add('error', gettext('Delete port-mapping failed.') + ' ' + data.msg);
                        //             }

                        //             self.controllerScope.isDeleting = false;
                        //             self.controllerScope.actions.refresh();
                        //         })
                        //         .error(function (data) {
                        //             toastService.add('error', gettext('Delete port-mapping failed.') + ' ' + data);
                        //         });

                        //     self.controllerScope.isDeleting = true;
                        //     //toastService.add('info', gettext('Processing... Please wait a moment'));
                        // }
                    }

                    return action;
                }
            ]);
})();