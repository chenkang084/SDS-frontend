/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  routeConfig.$inject = ["$urlRouterProvider", "baSidebarServiceProvider"];
  angular.module('BlurAdmin.pages', [
    'ui.router',

    'BlurAdmin.pages.dashboard',
    'BlurAdmin.pages.ui',
    'BlurAdmin.pages.components',
    'BlurAdmin.pages.form',
    'BlurAdmin.pages.tables',
    'BlurAdmin.pages.charts',
    'BlurAdmin.pages.maps',
    'BlurAdmin.pages.profile',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
    $urlRouterProvider.otherwise('/dashboard');

    baSidebarServiceProvider.addStaticItem({
      title: 'Pages',
      icon: 'ion-document',
      subMenu: [{
        title: 'Sign In',
        fixedHref: 'auth.html',
        blank: true
      }, {
        title: 'Sign Up',
        fixedHref: 'reg.html',
        blank: true
      }, {
        title: 'User Profile',
        stateRef: 'profile'
      }, {
        title: '404 Page',
        fixedHref: '404.html',
        blank: true
      }]
    });
    baSidebarServiceProvider.addStaticItem({
      title: 'Menu Level 1',
      icon: 'ion-ios-more',
      subMenu: [{
        title: 'Menu Level 1.1',
        disabled: true
      }, {
        title: 'Menu Level 1.2',
        subMenu: [{
          title: 'Menu Level 1.2.1',
          disabled: true
        }]
      }]
    });
  }

})();

/**
 * @author v.lugovsky
 * created on 15.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme', [
      'toastr',
      'chart.js',
      'angular-chartist',
      'angular.morris-chart',
      'textAngular',
      'BlurAdmin.theme.components',
      'BlurAdmin.theme.inputs'
  ]);

})();

/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  routeConfig.$inject = ["$stateProvider"];
  angular.module('BlurAdmin.pages.charts', [
      'BlurAdmin.pages.charts.amCharts',
      'BlurAdmin.pages.charts.chartJs',
      'BlurAdmin.pages.charts.chartist',
      'BlurAdmin.pages.charts.morris'
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('charts', {
          url: '/charts',
          abstract: true,
          template: '<div ui-view  autoscroll="true" autoscroll-body-top></div>',
          title: 'Charts',
          sidebarMeta: {
            icon: 'ion-stats-bars',
            order: 150,
          },
        });
  }

})();

/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  routeConfig.$inject = ["$stateProvider"];
  angular.module('BlurAdmin.pages.dashboard', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('dashboard', {
          url: '/dashboard',
          templateUrl: 'app/pages/dashboard/dashboard.html',
          title: 'Dashboard',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 0,
          },
        });
  }

})();

/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  routeConfig.$inject = ["$stateProvider"];
  angular.module('BlurAdmin.pages.form', ['ui.select', 'ngSanitize'])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('form', {
          url: '/form',
          template : '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          title: 'Form Elements',
          sidebarMeta: {
            icon: 'ion-compose',
            order: 250,
          },
        })
        .state('form.inputs', {
          url: '/inputs',
          templateUrl: 'app/pages/form/inputs/inputs.html',
          title: 'Form Inputs',
          sidebarMeta: {
            order: 0,
          },
        })
        .state('form.layouts', {
          url: '/layouts',
          templateUrl: 'app/pages/form/layouts/layouts.html',
          title: 'Form Layouts',
          sidebarMeta: {
            order: 100,
          },
        })
        .state('form.wizard',
        {
          url: '/wizard',
          templateUrl: 'app/pages/form/wizard/wizard.html',
          controller: 'WizardCtrl',
          controllerAs: 'vm',
          title: 'Form Wizard',
          sidebarMeta: {
            order: 200,
          },
        });
  }
})();

/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  routeConfig.$inject = ["$stateProvider"];
  angular.module('BlurAdmin.pages.maps', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('maps', {
          url: '/maps',
          templateUrl: 'app/pages/maps/maps.html',
          abstract: true,
          title: 'Maps',
          sidebarMeta: {
            icon: 'ion-ios-location-outline',
            order: 500,
          },
        })
        .state('maps.gmap', {
          url: '/gmap',
          templateUrl: 'app/pages/maps/google-maps/google-maps.html',
          controller: 'GmapPageCtrl',
          title: 'Google Maps',
          sidebarMeta: {
            order: 0,
          },
        })
        .state('maps.leaflet', {
          url: '/leaflet',
          templateUrl: 'app/pages/maps/leaflet/leaflet.html',
          controller: 'LeafletPageCtrl',
          title: 'Leaflet Maps',
          sidebarMeta: {
            order: 100,
          },
        })
        .state('maps.bubble', {
          url: '/bubble',
          templateUrl: 'app/pages/maps/map-bubbles/map-bubbles.html',
          controller: 'MapBubblePageCtrl',
          title: 'Bubble Maps',
          sidebarMeta: {
            order: 200,
          },
        })
        .state('maps.line', {
          url: '/line',
          templateUrl: 'app/pages/maps/map-lines/map-lines.html',
          controller: 'MapLinesPageCtrl',
          title: 'Line Maps',
          sidebarMeta: {
            order: 300,
          },
        });
  }

})();

/**
 * @author k.danovsky
 * created on 12.01.2016
 */
(function () {
  'use strict';

  routeConfig.$inject = ["$stateProvider"];
  angular.module('BlurAdmin.pages.ui', [
    'BlurAdmin.pages.ui.typography',
    'BlurAdmin.pages.ui.buttons',
    'BlurAdmin.pages.ui.icons',
    'BlurAdmin.pages.ui.modals',
    'BlurAdmin.pages.ui.grid',
    'BlurAdmin.pages.ui.alerts',
    'BlurAdmin.pages.ui.progressBars',
    'BlurAdmin.pages.ui.notifications',
    'BlurAdmin.pages.ui.tabs',
    'BlurAdmin.pages.ui.slider',
    'BlurAdmin.pages.ui.panels',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui', {
          url: '/ui',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          title: 'UI Features',
          sidebarMeta: {
            icon: 'ion-android-laptop',
            order: 200,
          },
        });
  }

})();

/**
 * @author k.danovsky
 * created on 15.01.2016
 */
(function () {
  'use strict';

  routeConfig.$inject = ["$stateProvider"];
  angular.module('BlurAdmin.pages.components', [
    'BlurAdmin.pages.components.mail',
    'BlurAdmin.pages.components.timeline',
    'BlurAdmin.pages.components.tree',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('components', {
          url: '/components',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          title: 'Components',
          sidebarMeta: {
            icon: 'ion-gear-a',
            order: 100,
          },
        });
  }

})();

/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.components', []);

})();

/**
 * @author v.lugovsky
 * created on 10.12.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.inputs', []);

})();

/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  routeConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
  angular.module('BlurAdmin.pages.tables', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('tables', {
          url: '/tables',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          controller: 'TablesPageCtrl',
          title: 'Tables',
          sidebarMeta: {
            icon: 'ion-grid',
            order: 300,
          },
        }).state('tables.basic', {
          url: '/basic',
          templateUrl: 'app/pages/tables/basic/tables.html',
          title: 'Basic Tables',
          sidebarMeta: {
            order: 0,
          },
        }).state('tables.smart', {
          url: '/smart',
          templateUrl: 'app/pages/tables/smart/tables.html',
          title: 'Smart Tables',
          sidebarMeta: {
            order: 100,
          },
        });
    $urlRouterProvider.when('/tables','/tables/basic');
  }

})();

/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  routeConfig.$inject = ["$stateProvider"];
  angular.module('BlurAdmin.pages.profile', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('profile', {
          url: '/profile',
          title: 'Profile',
          templateUrl: 'app/pages/profile/profile.html',
          controller: 'ProfilePageCtrl',
        });
  }

})();

/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  routeConfig.$inject = ["$stateProvider"];
  amChartConfig.$inject = ["baConfigProvider"];
  angular.module('BlurAdmin.pages.charts.amCharts', [])
      .config(routeConfig).config(amChartConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('charts.amCharts', {
          url: '/amCharts',
          templateUrl: 'app/pages/charts/amCharts/charts.html',
          title: 'amCharts',
          sidebarMeta: {
            order: 0,
          },
        });
  }

  function amChartConfig(baConfigProvider) {
    var layoutColors = baConfigProvider.colors;
    AmCharts.themes.blur = {

      themeName: "blur",

      AmChart: {
        color: layoutColors.defaultText,
        backgroundColor: "#FFFFFF"
      },

      AmCoordinateChart: {
        colors: [layoutColors.primary, layoutColors.danger, layoutColors.warning, layoutColors.success, layoutColors.info, layoutColors.primaryDark, layoutColors.warningLight, layoutColors.successDark, layoutColors.successLight, layoutColors.primaryLight, layoutColors.warningDark]
      },

      AmStockChart: {
        colors: [layoutColors.primary, layoutColors.danger, layoutColors.warning, layoutColors.success, layoutColors.info, layoutColors.primaryDark, layoutColors.warningLight, layoutColors.successDark, layoutColors.successLight, layoutColors.primaryLight, layoutColors.warningDark]
      },

      AmSlicedChart: {
        colors: [layoutColors.primary, layoutColors.danger, layoutColors.warning, layoutColors.success, layoutColors.info, layoutColors.primaryDark, layoutColors.warningLight, layoutColors.successDark, layoutColors.successLight, layoutColors.primaryLight, layoutColors.warningDark],
        labelTickColor: "#FFFFFF",
        labelTickAlpha: 0.3
      },

      AmRectangularChart: {
        zoomOutButtonColor: '#FFFFFF',
        zoomOutButtonRollOverAlpha: 0.15,
        zoomOutButtonImage: "lens.png"
      },

      AxisBase: {
        axisColor: "#FFFFFF",
        axisAlpha: 0.3,
        gridAlpha: 0.1,
        gridColor: "#FFFFFF"
      },

      ChartScrollbar: {
        backgroundColor: "#FFFFFF",
        backgroundAlpha: 0.12,
        graphFillAlpha: 0.5,
        graphLineAlpha: 0,
        selectedBackgroundColor: "#FFFFFF",
        selectedBackgroundAlpha: 0.4,
        gridAlpha: 0.15
      },

      ChartCursor: {
        cursorColor: layoutColors.primary,
        color: "#FFFFFF",
        cursorAlpha: 0.5
      },

      AmLegend: {
        color: "#FFFFFF"
      },

      AmGraph: {
        lineAlpha: 0.9
      },
      GaugeArrow: {
        color: "#FFFFFF",
        alpha: 0.8,
        nailAlpha: 0,
        innerRadius: "40%",
        nailRadius: 15,
        startWidth: 15,
        borderAlpha: 0.8,
        nailBorderAlpha: 0
      },

      GaugeAxis: {
        tickColor: "#FFFFFF",
        tickAlpha: 1,
        tickLength: 15,
        minorTickLength: 8,
        axisThickness: 3,
        axisColor: '#FFFFFF',
        axisAlpha: 1,
        bandAlpha: 0.8
      },

      TrendLine: {
        lineColor: layoutColors.danger,
        lineAlpha: 0.8
      },

      // ammap
      AreasSettings: {
        alpha: 0.8,
        color: layoutColors.info,
        colorSolid: layoutColors.primaryDark,
        unlistedAreasAlpha: 0.4,
        unlistedAreasColor: "#FFFFFF",
        outlineColor: "#FFFFFF",
        outlineAlpha: 0.5,
        outlineThickness: 0.5,
        rollOverColor: layoutColors.primary,
        rollOverOutlineColor: "#FFFFFF",
        selectedOutlineColor: "#FFFFFF",
        selectedColor: "#f15135",
        unlistedAreasOutlineColor: "#FFFFFF",
        unlistedAreasOutlineAlpha: 0.5
      },

      LinesSettings: {
        color: "#FFFFFF",
        alpha: 0.8
      },

      ImagesSettings: {
        alpha: 0.8,
        labelColor: "#FFFFFF",
        color: "#FFFFFF",
        labelRollOverColor: layoutColors.primaryDark
      },

      ZoomControl: {
        buttonFillAlpha: 0.8,
        buttonIconColor: layoutColors.defaultText,
        buttonRollOverColor: layoutColors.danger,
        buttonFillColor: layoutColors.primaryDark,
        buttonBorderColor: layoutColors.primaryDark,
        buttonBorderAlpha: 0,
        buttonCornerRadius: 0,
        gridColor: "#FFFFFF",
        gridBackgroundColor: "#FFFFFF",
        buttonIconAlpha: 0.6,
        gridAlpha: 0.6,
        buttonSize: 20
      },

      SmallMap: {
        mapColor: "#000000",
        rectangleColor: layoutColors.danger,
        backgroundColor: "#FFFFFF",
        backgroundAlpha: 0.7,
        borderThickness: 1,
        borderAlpha: 0.8
      },

      // the defaults below are set using CSS syntax, you can use any existing css property
      // if you don't use Stock chart, you can delete lines below
      PeriodSelector: {
        color: "#FFFFFF"
      },

      PeriodButton: {
        color: "#FFFFFF",
        background: "transparent",
        opacity: 0.7,
        border: "1px solid rgba(0, 0, 0, .3)",
        MozBorderRadius: "5px",
        borderRadius: "5px",
        margin: "1px",
        outline: "none",
        boxSizing: "border-box"
      },

      PeriodButtonSelected: {
        color: "#FFFFFF",
        backgroundColor: "#b9cdf5",
        border: "1px solid rgba(0, 0, 0, .3)",
        MozBorderRadius: "5px",
        borderRadius: "5px",
        margin: "1px",
        outline: "none",
        opacity: 1,
        boxSizing: "border-box"
      },

      PeriodInputField: {
        color: "#FFFFFF",
        background: "transparent",
        border: "1px solid rgba(0, 0, 0, .3)",
        outline: "none"
      },

      DataSetSelector: {
        color: "#FFFFFF",
        selectedBackgroundColor: "#b9cdf5",
        rollOverBackgroundColor: "#a8b0e4"
      },

      DataSetCompareList: {
        color: "#FFFFFF",
        lineHeight: "100%",
        boxSizing: "initial",
        webkitBoxSizing: "initial",
        border: "1px solid rgba(0, 0, 0, .3)"
      },

      DataSetSelect: {
        border: "1px solid rgba(0, 0, 0, .3)",
        outline: "none"
      }

    };
  }

})();

/**
 * @author a.demeshko
 * created on 12/17/15
 */
(function () {
  'use strict';

  routeConfig.$inject = ["$stateProvider"];
  angular.module('BlurAdmin.pages.charts.chartist', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('charts.chartist', {
          url: '/chartist',
          templateUrl: 'app/pages/charts/chartist/chartist.html',
          title: 'Chartist',
          sidebarMeta: {
            order: 100,
          },
        });
  }

})();
/**
 * @author a.demeshko
 * created on 12/16/15
 */
(function () {
    'use strict';

    routeConfig.$inject = ["$stateProvider"];
    chartJsConfig.$inject = ["ChartJsProvider", "baConfigProvider"];
    angular.module('BlurAdmin.pages.charts.chartJs', [])
        .config(routeConfig).config(chartJsConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('charts.chartJs', {
                url: '/chartJs',
                templateUrl: 'app/pages/charts/chartJs/chartJs.html',
                title: 'Chart.js',
                sidebarMeta: {
                    order: 200
                }
            });
    }

    function chartJsConfig(ChartJsProvider, baConfigProvider) {
        var layoutColors = baConfigProvider.colors;
        // Configure all charts
        ChartJsProvider.setOptions({
            chartColors: [
                layoutColors.primary, layoutColors.danger, layoutColors.warning, layoutColors.success, layoutColors.info, layoutColors.default, layoutColors.primaryDark, layoutColors.successDark, layoutColors.warningLight, layoutColors.successLight, layoutColors.primaryLight],
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 2500
            },
            scale: {
                gridLines: {
                    color: layoutColors.border
                },
                scaleLabel: {
                    fontColor: layoutColors.defaultText
                },
                ticks: {
                    fontColor: layoutColors.defaultText,
                    showLabelBackdrop: false
                }
            }
        });
        // Configure all line charts
        ChartJsProvider.setOptions('Line', {
            datasetFill: false
        });
        // Configure all radar charts
        ChartJsProvider.setOptions('radar', {
            scale: {
                pointLabels: {
                    fontColor: layoutColors.defaultText
                },
                ticks: {
                    maxTicksLimit: 5,
                    display: false
                }
            }
        });
        // Configure all bar charts
        ChartJsProvider.setOptions('bar', {
            tooltips: {
                enabled: false
            }
        });
    }

})();
/**
 * @author a.demeshko
 * created on 12/18/15
 */
(function () {
  'use strict';

  routeConfig.$inject = ["$stateProvider"];
  angular.module('BlurAdmin.pages.charts.morris', [])
    .config(routeConfig).config(["baConfigProvider", function(baConfigProvider){
      var layoutColors = baConfigProvider.colors;
      Morris.Donut.prototype.defaults.backgroundColor = 'transparent';
      Morris.Donut.prototype.defaults.labelColor = layoutColors.defaultText;
      Morris.Grid.prototype.gridDefaults.gridLineColor = layoutColors.borderDark;
      Morris.Grid.prototype.gridDefaults.gridTextColor = layoutColors.defaultText;
    }]);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('charts.morris', {
          url: '/morris',
          templateUrl: 'app/pages/charts/morris/morris.html',
          title: 'Morris',
          sidebarMeta: {
            order: 300,
          }
        });
  }

})();
/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  routeConfig.$inject = ["$stateProvider"];
  angular.module('BlurAdmin.pages.ui.alerts', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui.alerts', {
          url: '/alerts',
          templateUrl: 'app/pages/ui/alerts/alerts.html',
          title: 'Alerts',
          sidebarMeta: {
            order: 500,
          },
        });
  }

})();

/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  routeConfig.$inject = ["$stateProvider"];
  angular.module('BlurAdmin.pages.ui.grid', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui.grid', {
          url: '/grid',
          templateUrl: 'app/pages/ui/grid/grid.html',
          title: 'Grid',
          sidebarMeta: {
            order: 400,
          },
        });
  }

})();

/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  routeConfig.$inject = ["$stateProvider"];
  angular.module('BlurAdmin.pages.ui.buttons', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui.buttons', {
          url: '/buttons',
          templateUrl: 'app/pages/ui/buttons/buttons.html',
          controller: 'ButtonPageCtrl',
          title: 'Buttons',
          sidebarMeta: {
            order: 100,
          },
        });
  }

})();

/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  routeConfig.$inject = ["$stateProvider"];
  angular.module('BlurAdmin.pages.ui.icons', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui.icons', {
          url: '/icons',
          templateUrl: 'app/pages/ui/icons/icons.html',
          controller: 'IconsPageCtrl',
          title: 'Icons',
          sidebarMeta: {
            order: 200,
          },
        });
  }

})();

/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  routeConfig.$inject = ["$stateProvider"];
  angular.module('BlurAdmin.pages.ui.modals', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui.modals', {
          url: '/modals',
          templateUrl: 'app/pages/ui/modals/modals.html',
          controller: 'ModalsPageCtrl',
          title: 'Modals',
          sidebarMeta: {
            order: 300,
          },
        });
  }

})();

/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  routeConfig.$inject = ["$stateProvider"];
  angular.module('BlurAdmin.pages.ui.notifications', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui.notifications', {
          url: '/notifications',
          templateUrl: 'app/pages/ui/notifications/notifications.html',
          controller: 'NotificationsPageCtrl',
          title: 'Notifications',
          sidebarMeta: {
            order: 700,
          },
        });
  }

})();

/**
 * @author v.lugovsky
 * created on 23.12.2015
 */
(function () {
  'use strict';

  routeConfig.$inject = ["$stateProvider"];
  angular.module('BlurAdmin.pages.ui.panels', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui.panels', {
          url: '/panels',
          templateUrl: 'app/pages/ui/panels/panels.html',
          controller: 'NotificationsPageCtrl',
          title: 'Panels',
          sidebarMeta: {
            order: 1100,
          },
        });
  }

})();

/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  routeConfig.$inject = ["$stateProvider"];
  angular.module('BlurAdmin.pages.ui.progressBars', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui.progressBars', {
          url: '/progressBars',
          templateUrl: 'app/pages/ui/progressBars/progressBars.html',
          title: 'Progress Bars',
          sidebarMeta: {
            order: 600,
          },
        });
  }

})();

/**
 * @author a.demeshko
 * created on 12/22/15
 */
(function () {
  'use strict';

  routeConfig.$inject = ["$stateProvider"];
  angular.module('BlurAdmin.pages.ui.slider', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui.slider', {
          url: '/slider',
          templateUrl: 'app/pages/ui/slider/slider.html',
          title: 'Sliders',
          sidebarMeta: {
            order: 1000,
          },
        });
  }

})();

/**
 * @author v.lugovsky
 * created on 21.12.2015
 */
(function () {
  'use strict';

  routeConfig.$inject = ["$stateProvider"];
  angular.module('BlurAdmin.pages.ui.tabs', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui.tabs', {
          url: '/tabs',
          templateUrl: 'app/pages/ui/tabs/tabs.html',
          title: 'Tabs & Accordions',
          sidebarMeta: {
            order: 800,
          },
        });
  }

})();

/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  routeConfig.$inject = ["$stateProvider"];
  angular.module('BlurAdmin.pages.ui.typography', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui.typography', {
          url: '/typography',
          templateUrl: 'app/pages/ui/typography/typography.html',
          title: 'Typography',
          sidebarMeta: {
            order: 0,
          },
        });
  }

})();

/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  routeConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
  angular.module('BlurAdmin.pages.components.mail', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('components.mail', {
          url: '/mail',
          abstract: true,
          templateUrl: 'app/pages/components/mail/mail.html',
          controller: "MailTabCtrl",
          controllerAs: "tabCtrl",
          title: 'Mail',
          sidebarMeta: {
            order: 0,
          },
        }).state('components.mail.label', {
          url: '/:label',
          templateUrl: 'app/pages/components/mail/list/mailList.html',
          title: 'Mail',
          controller: "MailListCtrl",
          controllerAs: "listCtrl"
        }).state('components.mail.detail', {
          url: '/:label/:id',
          templateUrl: 'app/pages/components/mail/detail/mailDetail.html',
          title: 'Mail',
          controller: "MailDetailCtrl",
          controllerAs: "detailCtrl"
        });
    $urlRouterProvider.when('/components/mail','/components/mail/inbox');
  }

})();

/**
 * @author a.demeshko
 * created on 12.21.2015
 */
(function () {
  'use strict';

  routeConfig.$inject = ["$stateProvider"];
  angular.module('BlurAdmin.pages.components.tree', [])
    .config(routeConfig)
    .config(function(){
      $.jstree.defaults.core.themes.url = true;
      $.jstree.defaults.core.themes.dir = "assets/img/theme/vendor/jstree/dist/themes";
    });

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('components.tree', {
          url: '/tree',
          templateUrl: 'app/pages/components/tree/tree.html',
          title: 'Tree View',
          sidebarMeta: {
            order: 200,
          },
        });
  }

})();

/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function () {
  'use strict';

  routeConfig.$inject = ["$stateProvider"];
  angular.module('BlurAdmin.pages.components.timeline', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('components.timeline', {
        url: '/timeline',
        templateUrl: 'app/pages/components/timeline/timeline.html',
          title: 'Timeline',
          sidebarMeta: {
            icon: 'ion-ios-pulse',
            order: 100,
          },
      });
  }
})();
'use strict';

angular.module('BlurAdmin', [
  'ngAnimate',
  'ui.bootstrap',
  'ui.sortable',
  'ui.router',
  'ngTouch',
  'toastr',
  'smart-table',
  "xeditable",
  'ui.slimscroll',
  'ngJsTree',
  'angular-progress-button-styles',

  'BlurAdmin.theme',
  'BlurAdmin.pages'
]);
/**
 * Created by k.danovsky on 13.05.2016.
 */

(function () {
  'use strict';

  config.$inject = ["baConfigProvider", "colorHelper", "$provide"];
  uiViewScrollDecorator.$inject = ["$delegate", "$anchorScroll", "baUtil"];
  angular.module('BlurAdmin.theme')
    .config(config);

  /** @ngInject */
  function config(baConfigProvider, colorHelper, $provide) {
    $provide.decorator('$uiViewScroll', uiViewScrollDecorator);
    //baConfigProvider.changeTheme({blur: true});
    //
    //baConfigProvider.changeColors({
    //  default: 'rgba(#000000, 0.2)',
    //  defaultText: '#ffffff',
    //  dashboard: {
    //    white: '#ffffff',
    //  },
    //});
  }

  /** @ngInject */
  function uiViewScrollDecorator($delegate, $anchorScroll, baUtil) {
    return function (uiViewElement) {
      if (baUtil.hasAttr(uiViewElement, "autoscroll-body-top")) {
        $anchorScroll();
      } else {
        $delegate(uiViewElement);
      }
    };
  }
})();

/**
 * Created by k.danovsky on 13.05.2016.
 */

(function () {
  'use strict';

  configProvider.$inject = ["colorHelper"];
  var basic = {
    default: '#ffffff',
    defaultText: '#666666',
    border: '#dddddd',
    borderDark: '#aaaaaa',
  };

  // main functional color scheme
  var colorScheme = {
    primary: '#209e91',
    info: '#2dacd1',
    success: '#90b900',
    warning: '#dfb81c',
    danger: '#e85656',
  };

  // dashboard colors for charts
  var dashboardColors = {
    blueStone: '#005562',
    surfieGreen: '#0e8174',
    silverTree: '#6eba8c',
    gossip: '#b9f2a1',
    white: '#10c4b5',
  };

  angular.module('BlurAdmin.theme')
    .provider('baConfig', configProvider);

  /** @ngInject */
  function configProvider(colorHelper) {
    var conf = {
      theme: {
        blur: false,
      },
      colors: {
        default: basic.default,
        defaultText: basic.defaultText,
        border: basic.border,
        borderDark: basic.borderDark,

        primary: colorScheme.primary,
        info: colorScheme.info,
        success: colorScheme.success,
        warning: colorScheme.warning,
        danger: colorScheme.danger,

        primaryLight: colorHelper.tint(colorScheme.primary, 30),
        infoLight: colorHelper.tint(colorScheme.info, 30),
        successLight: colorHelper.tint(colorScheme.success, 30),
        warningLight: colorHelper.tint(colorScheme.warning, 30),
        dangerLight: colorHelper.tint(colorScheme.danger, 30),

        primaryDark: colorHelper.shade(colorScheme.primary, 15),
        infoDark: colorHelper.shade(colorScheme.info, 15),
        successDark: colorHelper.shade(colorScheme.success, 15),
        warningDark: colorHelper.shade(colorScheme.warning, 15),
        dangerDark: colorHelper.shade(colorScheme.danger, 15),

        dashboard: {
          blueStone: dashboardColors.blueStone,
          surfieGreen: dashboardColors.surfieGreen,
          silverTree: dashboardColors.silverTree,
          gossip: dashboardColors.gossip,
          white: dashboardColors.white,
        },
      }
    };

    conf.changeTheme = function(theme) {
      angular.merge(conf.theme, theme)
    };

    conf.changeColors = function(colors) {
      angular.merge(conf.colors, colors)
    };

    conf.$get = function () {
      delete conf.$get;
      return conf;
    };
    return conf;
  }
})();

/**
 * @author v.lugovsky
 * created on 15.12.2015
 */
(function () {
  'use strict';

  var IMAGES_ROOT = 'assets/img/';

  angular.module('BlurAdmin.theme')
    .constant('layoutSizes', {
      resWidthCollapseSidebar: 1200,
      resWidthHideSidebar: 500
    })
    .constant('layoutPaths', {
      images: {
        root: IMAGES_ROOT,
        profile: IMAGES_ROOT + 'app/profile/',
        amMap: 'assets/img/theme/vendor/ammap//dist/ammap/images/',
        amChart: 'assets/img/theme/vendor/amcharts/dist/amcharts/images/'
      }
    })
    .constant('colorHelper', {
      tint: function(color, weight) {
        return mix('#ffffff', color, weight);
      },
      shade: function(color, weight) {
        return mix('#000000', color, weight);
      },
    });

  function shade(color, weight) {
    return mix('#000000', color, weight);
  }

  function tint(color, weight) {
    return mix('#ffffff', color, weight);
  }

  //SASS mix function
  function mix(color1, color2, weight) {
    // convert a decimal value to hex
    function d2h(d) {
      return d.toString(16);
    }
    // convert a hex value to decimal
    function h2d(h) {
      return parseInt(h, 16);
    }

    var result = "#";
    for(var i = 1; i < 7; i += 2) {
      var color1Part = h2d(color1.substr(i, 2));
      var color2Part = h2d(color2.substr(i, 2));
      var resultPart = d2h(Math.floor(color2Part + (color1Part - color2Part) * (weight / 100.0)));
      result += ('0' + resultPart).slice(-2);
    }
    return result;
  }
})();

/**
 * @author v.lugovksy
 * created on 15.12.2015
 */
(function () {
  'use strict';

  themeRun.$inject = ["$timeout", "$rootScope", "layoutPaths", "preloader", "$q", "baSidebarService", "themeLayoutSettings"];
  angular.module('BlurAdmin.theme')
    .run(themeRun);

  /** @ngInject */
  function themeRun($timeout, $rootScope, layoutPaths, preloader, $q, baSidebarService, themeLayoutSettings) {
    var whatToWait = [
      preloader.loadAmCharts(),
      $timeout(3000)
    ];

    var theme = themeLayoutSettings;
    if (theme.blur) {
      if (theme.mobile) {
        whatToWait.unshift(preloader.loadImg(layoutPaths.images.root + 'blur-bg-mobile.jpg'));
      } else {
        whatToWait.unshift(preloader.loadImg(layoutPaths.images.root + 'blur-bg.jpg'));
        whatToWait.unshift(preloader.loadImg(layoutPaths.images.root + 'blur-bg-blurred.jpg'));
      }
    }

    $q.all(whatToWait).then(function () {
      $rootScope.$pageFinishedLoading = true;
    });

    $timeout(function () {
      if (!$rootScope.$pageFinishedLoading) {
        $rootScope.$pageFinishedLoading = true;
      }
    }, 7000);

    $rootScope.$baSidebarService = baSidebarService;
  }

})();
/**
 * Created by k.danovsky on 12.05.2016.
 */

(function () {
  'use strict';

  themeLayoutSettings.$inject = ["baConfig"];
  angular.module('BlurAdmin.theme')
    .service('themeLayoutSettings', themeLayoutSettings);

  /** @ngInject */
  function themeLayoutSettings(baConfig) {
    var isMobile = (/android|webos|iphone|ipad|ipod|blackberry|windows phone/).test(navigator.userAgent.toLowerCase());
    var mobileClass = isMobile ? 'mobile' : '';
    var blurClass = baConfig.theme.blur ? 'blur-theme' : '';
    angular.element(document.body).addClass(mobileClass).addClass(blurClass);

    return {
      blur: baConfig.theme.blur,
      mobile: isMobile,
    }
  }

})();
/**
 * @author v.lugovksy
 * created on 15.12.2015
 */
(function () {
  'use strict';

  toastrLibConfig.$inject = ["toastrConfig"];
  angular.module('BlurAdmin.theme.components')
      .config(toastrLibConfig);

  /** @ngInject */
  function toastrLibConfig(toastrConfig) {
    angular.extend(toastrConfig, {
      closeButton: true,
      closeHtml: '<button>&times;</button>',
      timeOut: 5000,
      autoDismiss: false,
      containerId: 'toast-container',
      maxOpened: 0,
      newestOnTop: true,
      positionClass: 'toast-top-right',
      preventDuplicates: false,
      preventOpenDuplicates: false,
      target: 'body'
    });
  }
})();
/**
 * Change top "Daily Downloads", "Active Users" values with animation effect
 */
(function () {
  'use strict';

  animatedChange.$inject = ["$timeout"];
  angular.module('BlurAdmin.theme')
      .directive('animatedChange', animatedChange);

  /** @ngInject */
  function animatedChange($timeout) {
    return {
      link: function (scope, element) {
        $timeout(function () {
          var newValue = element.attr('new-value');
          var oldvalue = parseInt(element.html());

          function changeValue(val) {
            $timeout(function () {
              element.html(val);
            }, 30);
          }

          if (newValue > oldvalue) {
            for (var i = oldvalue; i <= newValue; i++) {
              changeValue(i);
            }
          } else {
            for (var j = oldvalue; j >= newValue; j--) {
              changeValue(j);
            }
          }
          $timeout(function () {
            element.next().find('i').addClass('show-arr');
          }, 500);
        }, 3500);
      }
    };
  }

})();
/**
 * Auto expand textarea field
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
      .directive('autoExpand', autoExpand);

  /** @ngInject */
  function autoExpand() {
    return {
      restrict: 'A',
      link: function ($scope, elem) {
        elem.bind('keydown', function ($event) {
          var element = $event.target;
          $(element).height(0);
          var height = $(element)[0].scrollHeight;
          height = (height < 16) ? 16 : height;
          $(element).height(height);
        });

        // Expand the textarea as soon as it is added to the DOM
        setTimeout(function () {
          var element = elem;
          $(element).height(0);
          var height = $(element)[0].scrollHeight;
          height = (height < 16) ? 16 : height;
          $(element).height(height);
        }, 0)
      }
    };
  }

})();
(function () {
  'use strict';

  autoFocus.$inject = ["$timeout", "$parse"];
  angular.module('BlurAdmin.theme')
      .directive('autoFocus', autoFocus);

  /** @ngInject */
  function autoFocus($timeout, $parse) {
    return {
      link: function (scope, element, attrs) {
        var model = $parse(attrs.autoFocus);
        scope.$watch(model, function (value) {
          if (value === true) {
            $timeout(function () {
              element[0].focus();
              element[0].select();
            });
          }
        });
        element.bind('blur', function () {
          scope.$apply(model.assign(scope, false));
        });
      }
    };
  }

})();
/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
      .directive('includeWithScope', includeWithScope);

  /** @ngInject */
  function includeWithScope() {
    return {
      restrict: 'AE',
      templateUrl: function(ele, attrs) {
        return attrs.includeWithScope;
      }
    };
  }

})();

/**
 * @author a.demeshko
 * created on 22.12.2015
 */
(function () {
  'use strict';

  ionSlider.$inject = ["$timeout"];
  angular.module('BlurAdmin.theme')
    .directive('ionSlider', ionSlider);

  /** @ngInject */
  function ionSlider($timeout) {
    return {
      restrict: 'EA',
      template: '<div></div>',
      replace: true,
      scope: {
        min: '=',
        max: '=',
        type: '@',
        prefix: '@',
        maxPostfix: '@',
        prettify: '=',
        prettifySeparator: '@',
        grid: '=',
        gridMargin: '@',
        postfix: '@',
        step: '@',
        hideMinMax: '@',
        hideFromTo: '@',
        from: '=',
        to: '=',
        disable: '=',
        onChange: '=',
        onFinish: '=',
        values: '=',
        timeout: '@'
      },
      link: function ($scope, $element) {
            $element.ionRangeSlider({
              min: $scope.min,
              max: $scope.max,
              type: $scope.type,
              prefix: $scope.prefix,
              maxPostfix: $scope.maxPostfix,
              prettify_enabled: $scope.prettify,
              prettify_separator: $scope.prettifySeparator,
              grid: $scope.grid,
              gridMargin: $scope.gridMargin,
              postfix: $scope.postfix,
              step: $scope.step,
              hideMinMax: $scope.hideMinMax,
              hideFromTo: $scope.hideFromTo,
              from: $scope.from,
              to: $scope.to,
              disable: $scope.disable,
              onChange: $scope.onChange,
              onFinish: $scope.onFinish,
              values: $scope.values
            });

            $scope.$watch('min', function (value) {
              $timeout(function () {
                $element.data("ionRangeSlider").update({min: value});
              });
            }, true);
            $scope.$watch('max', function (value) {
              $timeout(function () {
                $element.data("ionRangeSlider").update({max: value});
              });
            });
            $scope.$watch('from', function (value) {
              $timeout(function () {
                $element.data("ionRangeSlider").update({from: value});
              });
            });
            $scope.$watch('to', function (value) {
              $timeout(function () {
                $element.data("ionRangeSlider").update({to: value});
              });
            });
            $scope.$watch('disable', function (value) {
              $timeout(function () {
                $element.data("ionRangeSlider").update({disable: value});
              });
            });
      }
    };
  }

})();
(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
      .directive('ngFileSelect', ngFileSelect);

  /** @ngInject */
  function ngFileSelect() {
    return {
      link: function ($scope, el) {
        el.bind('change', function (e) {
          $scope.file = (e.srcElement || e.target).files[0];
          $scope.getFile();
        })
      }
    }
  }

})();
(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
      .directive('scrollPosition', scrollPosition);

  /** @ngInject */
  function scrollPosition() {
    return {
      scope: {
        scrollPosition: '=',
        maxHeight: '='
      },
      link: function (scope) {
        $(window).on('scroll', function() {
          var scrollTop = $(window).scrollTop() > scope.maxHeight;
          if (scrollTop !== scope.prevScrollTop) {
            scope.$apply(function() {
              scope.scrollPosition = scrollTop;
            });
          }
          scope.prevScrollTop = scrollTop;
        });
      }
    };
  }

})();
(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
      .directive('trackWidth', trackWidth);

  /** @ngInject */
  function trackWidth() {
    return {
      scope: {
        trackWidth: '=',
        minWidth: '=',
      },
      link: function (scope, element) {
        scope.trackWidth = $(element).width() < scope.minWidth;
        scope.prevTrackWidth = scope.trackWidth;

        $(window).resize(function() {
          var trackWidth = $(element).width() < scope.minWidth;
          if (trackWidth !== scope.prevTrackWidth) {
            scope.$apply(function() {
              scope.trackWidth = trackWidth;
            });
          }
          scope.prevTrackWidth = trackWidth;
        });
      }
    };
  }

})();
/**
 * Animated load block
 */
(function () {
  'use strict';

  zoomIn.$inject = ["$timeout", "$rootScope"];
  angular.module('BlurAdmin.theme')
      .directive('zoomIn', zoomIn);

  /** @ngInject */
  function zoomIn($timeout, $rootScope) {
    return {
      restrict: 'A',
      link: function ($scope, elem) {
        var delay = 1000;

        if ($rootScope.$pageFinishedLoading) {
          delay = 100;
        }

        $timeout(function () {
          elem.removeClass('full-invisible');
          elem.addClass('animated zoomIn');
        }, delay);
      }
    };
  }

})();
/**
 * @author n.poltoratsky
 * created on 27.06.2016
 */
(function () {
    'use strict';

    baProgressModal.$inject = ["$uibModal"];
    angular.module('BlurAdmin.theme')
        .factory('baProgressModal', baProgressModal);

    /** @ngInject */
    function baProgressModal($uibModal) {
        var methods = {};
        var progress = 0;
        var max = 100;
        var opened = false;

        return {
            setProgress: function (value) {
                if (value > max) {
                    throw Error('Progress can\'t be greater than max');
                }
                progress = value;
            },
            getProgress: function () {
                return progress;
            },
            open: function() {
                if (!opened) {
                    methods = $uibModal.open({
                        animation: true,
                        templateUrl: 'app/pages/ui/modals/progressModal/progressModal.html',
                        size: 'sm',
                        keyboard: false,
                        backdrop: 'static'
                    });
                    opened = true;
                } else {
                    throw Error('Progress modal opened now');
                }

            },
            close: function() {
                if (opened) {
                    methods.close();
                    opened = false;
                } else {
                    throw Error('Progress modal is not active');
                }

            }
        };
    }

})();
/**
 * @author v.lugovsky
 * created on 03.05.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
      .service('baUtil', baUtil);

  /** @ngInject */
  function baUtil() {

    this.isDescendant = function(parent, child) {
      var node = child.parentNode;
      while (node != null) {
        if (node == parent) {
          return true;
        }
        node = node.parentNode;
      }
      return false;
    };

    this.hexToRGB = function(hex, alpha) {
      var r = parseInt( hex.slice(1,3), 16 );
      var g = parseInt( hex.slice(3,5), 16 );
      var b = parseInt( hex.slice(5,7), 16 );
      return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
    };

    this.hasAttr = function (elem, attrName) {
      var attr = $(elem).attr(attrName);
      return (typeof attr !== typeof undefined && attr !== false);
    }
  }
})();

/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  fileReader.$inject = ["$q"];
  angular.module('BlurAdmin.theme')
      .service('fileReader', fileReader);

  /** @ngInject */
  function fileReader($q) {
    var onLoad = function(reader, deferred, scope) {
      return function () {
        scope.$apply(function () {
          deferred.resolve(reader.result);
        });
      };
    };

    var onError = function (reader, deferred, scope) {
      return function () {
        scope.$apply(function () {
          deferred.reject(reader.result);
        });
      };
    };

    var onProgress = function(reader, scope) {
      return function (event) {
        scope.$broadcast('fileProgress',
            {
              total: event.total,
              loaded: event.loaded
            });
      };
    };

    var getReader = function(deferred, scope) {
      var reader = new FileReader();
      reader.onload = onLoad(reader, deferred, scope);
      reader.onerror = onError(reader, deferred, scope);
      reader.onprogress = onProgress(reader, scope);
      return reader;
    };

    var readAsDataURL = function (file, scope) {
      var deferred = $q.defer();

      var reader = getReader(deferred, scope);
      reader.readAsDataURL(file);

      return deferred.promise;
    };

    return {
      readAsDataUrl: readAsDataURL
    };
  }
})();
/**
 * @author a.demeshko
 * created on 3/1/16
 */
(function () {
  'use strict';

  preloader.$inject = ["$q"];
  angular.module('BlurAdmin.theme')
    .service('preloader', preloader);

  /** @ngInject */
  function preloader($q) {
    return {
      loadImg: function (src) {
        var d = $q.defer();
        var img = new Image();
        img.src = src;
        img.onload = function(){
          d.resolve();
        };
        return d.promise;
      },
      loadAmCharts : function(){
        var d = $q.defer();
        AmCharts.ready(function(){
          d.resolve();
        });
        return d.promise;
      }
    }
  }

})();
/**
 * @author a.demeshko
 * created on 12/21/15
 */
(function () {
  'use strict';

  stopableInterval.$inject = ["$window"];
  angular.module('BlurAdmin.theme')
    .service('stopableInterval', stopableInterval);

  /** @ngInject */
  function stopableInterval($window) {
    return {
      start: function (interval, calback, time) {
        function startInterval() {
          return interval(calback, time);
        }

        var i = startInterval();

        angular.element($window).bind('focus', function () {
          if (i) interval.cancel(i);
          i = startInterval();
        });

        angular.element($window).bind('blur', function () {
          if (i) interval.cancel(i);
        });
      }
    }
  }

})();
/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  TablesPageCtrl.$inject = ["$scope", "$filter", "editableOptions", "editableThemes"];
  angular.module('BlurAdmin.pages.tables')
      .controller('TablesPageCtrl', TablesPageCtrl);

  /** @ngInject */
  function TablesPageCtrl($scope, $filter, editableOptions, editableThemes) {

    $scope.smartTablePageSize = 10;

    $scope.smartTableData = [
      {
        id: 1,
        firstName: 'Mark',
        lastName: 'Otto',
        username: '@mdo',
        email: 'mdo@gmail.com',
        age: '28'
      },
      {
        id: 2,
        firstName: 'Jacob',
        lastName: 'Thornton',
        username: '@fat',
        email: 'fat@yandex.ru',
        age: '45'
      },
      {
        id: 3,
        firstName: 'Larry',
        lastName: 'Bird',
        username: '@twitter',
        email: 'twitter@outlook.com',
        age: '18'
      },
      {
        id: 4,
        firstName: 'John',
        lastName: 'Snow',
        username: '@snow',
        email: 'snow@gmail.com',
        age: '20'
      },
      {
        id: 5,
        firstName: 'Jack',
        lastName: 'Sparrow',
        username: '@jack',
        email: 'jack@yandex.ru',
        age: '30'
      },
      {
        id: 6,
        firstName: 'Ann',
        lastName: 'Smith',
        username: '@ann',
        email: 'ann@gmail.com',
        age: '21'
      },
      {
        id: 7,
        firstName: 'Barbara',
        lastName: 'Black',
        username: '@barbara',
        email: 'barbara@yandex.ru',
        age: '43'
      },
      {
        id: 8,
        firstName: 'Sevan',
        lastName: 'Bagrat',
        username: '@sevan',
        email: 'sevan@outlook.com',
        age: '13'
      },
      {
        id: 9,
        firstName: 'Ruben',
        lastName: 'Vardan',
        username: '@ruben',
        email: 'ruben@gmail.com',
        age: '22'
      },
      {
        id: 10,
        firstName: 'Karen',
        lastName: 'Sevan',
        username: '@karen',
        email: 'karen@yandex.ru',
        age: '33'
      },
      {
        id: 11,
        firstName: 'Mark',
        lastName: 'Otto',
        username: '@mark',
        email: 'mark@gmail.com',
        age: '38'
      },
      {
        id: 12,
        firstName: 'Jacob',
        lastName: 'Thornton',
        username: '@jacob',
        email: 'jacob@yandex.ru',
        age: '48'
      },
      {
        id: 13,
        firstName: 'Haik',
        lastName: 'Hakob',
        username: '@haik',
        email: 'haik@outlook.com',
        age: '48'
      },
      {
        id: 14,
        firstName: 'Garegin',
        lastName: 'Jirair',
        username: '@garegin',
        email: 'garegin@gmail.com',
        age: '40'
      },
      {
        id: 15,
        firstName: 'Krikor',
        lastName: 'Bedros',
        username: '@krikor',
        email: 'krikor@yandex.ru',
        age: '32'
      },
      {
        "id": 16,
        "firstName": "Francisca",
        "lastName": "Brady",
        "username": "@Gibson",
        "email": "franciscagibson@comtours.com",
        "age": 11
      },
      {
        "id": 17,
        "firstName": "Tillman",
        "lastName": "Figueroa",
        "username": "@Snow",
        "email": "tillmansnow@comtours.com",
        "age": 34
      },
      {
        "id": 18,
        "firstName": "Jimenez",
        "lastName": "Morris",
        "username": "@Bryant",
        "email": "jimenezbryant@comtours.com",
        "age": 45
      },
      {
        "id": 19,
        "firstName": "Sandoval",
        "lastName": "Jacobson",
        "username": "@Mcbride",
        "email": "sandovalmcbride@comtours.com",
        "age": 32
      },
      {
        "id": 20,
        "firstName": "Griffin",
        "lastName": "Torres",
        "username": "@Charles",
        "email": "griffincharles@comtours.com",
        "age": 19
      },
      {
        "id": 21,
        "firstName": "Cora",
        "lastName": "Parker",
        "username": "@Caldwell",
        "email": "coracaldwell@comtours.com",
        "age": 27
      },
      {
        "id": 22,
        "firstName": "Cindy",
        "lastName": "Bond",
        "username": "@Velez",
        "email": "cindyvelez@comtours.com",
        "age": 24
      },
      {
        "id": 23,
        "firstName": "Frieda",
        "lastName": "Tyson",
        "username": "@Craig",
        "email": "friedacraig@comtours.com",
        "age": 45
      },
      {
        "id": 24,
        "firstName": "Cote",
        "lastName": "Holcomb",
        "username": "@Rowe",
        "email": "coterowe@comtours.com",
        "age": 20
      },
      {
        "id": 25,
        "firstName": "Trujillo",
        "lastName": "Mejia",
        "username": "@Valenzuela",
        "email": "trujillovalenzuela@comtours.com",
        "age": 16
      },
      {
        "id": 26,
        "firstName": "Pruitt",
        "lastName": "Shepard",
        "username": "@Sloan",
        "email": "pruittsloan@comtours.com",
        "age": 44
      },
      {
        "id": 27,
        "firstName": "Sutton",
        "lastName": "Ortega",
        "username": "@Black",
        "email": "suttonblack@comtours.com",
        "age": 42
      },
      {
        "id": 28,
        "firstName": "Marion",
        "lastName": "Heath",
        "username": "@Espinoza",
        "email": "marionespinoza@comtours.com",
        "age": 47
      },
      {
        "id": 29,
        "firstName": "Newman",
        "lastName": "Hicks",
        "username": "@Keith",
        "email": "newmankeith@comtours.com",
        "age": 15
      },
      {
        "id": 30,
        "firstName": "Boyle",
        "lastName": "Larson",
        "username": "@Summers",
        "email": "boylesummers@comtours.com",
        "age": 32
      },
      {
        "id": 31,
        "firstName": "Haynes",
        "lastName": "Vinson",
        "username": "@Mckenzie",
        "email": "haynesmckenzie@comtours.com",
        "age": 15
      },
      {
        "id": 32,
        "firstName": "Miller",
        "lastName": "Acosta",
        "username": "@Young",
        "email": "milleryoung@comtours.com",
        "age": 55
      },
      {
        "id": 33,
        "firstName": "Johnston",
        "lastName": "Brown",
        "username": "@Knight",
        "email": "johnstonknight@comtours.com",
        "age": 29
      },
      {
        "id": 34,
        "firstName": "Lena",
        "lastName": "Pitts",
        "username": "@Forbes",
        "email": "lenaforbes@comtours.com",
        "age": 25
      },
      {
        "id": 35,
        "firstName": "Terrie",
        "lastName": "Kennedy",
        "username": "@Branch",
        "email": "terriebranch@comtours.com",
        "age": 37
      },
      {
        "id": 36,
        "firstName": "Louise",
        "lastName": "Aguirre",
        "username": "@Kirby",
        "email": "louisekirby@comtours.com",
        "age": 44
      },
      {
        "id": 37,
        "firstName": "David",
        "lastName": "Patton",
        "username": "@Sanders",
        "email": "davidsanders@comtours.com",
        "age": 26
      },
      {
        "id": 38,
        "firstName": "Holden",
        "lastName": "Barlow",
        "username": "@Mckinney",
        "email": "holdenmckinney@comtours.com",
        "age": 11
      },
      {
        "id": 39,
        "firstName": "Baker",
        "lastName": "Rivera",
        "username": "@Montoya",
        "email": "bakermontoya@comtours.com",
        "age": 47
      },
      {
        "id": 40,
        "firstName": "Belinda",
        "lastName": "Lloyd",
        "username": "@Calderon",
        "email": "belindacalderon@comtours.com",
        "age": 21
      },
      {
        "id": 41,
        "firstName": "Pearson",
        "lastName": "Patrick",
        "username": "@Clements",
        "email": "pearsonclements@comtours.com",
        "age": 42
      },
      {
        "id": 42,
        "firstName": "Alyce",
        "lastName": "Mckee",
        "username": "@Daugherty",
        "email": "alycedaugherty@comtours.com",
        "age": 55
      },
      {
        "id": 43,
        "firstName": "Valencia",
        "lastName": "Spence",
        "username": "@Olsen",
        "email": "valenciaolsen@comtours.com",
        "age": 20
      },
      {
        "id": 44,
        "firstName": "Leach",
        "lastName": "Holcomb",
        "username": "@Humphrey",
        "email": "leachhumphrey@comtours.com",
        "age": 28
      },
      {
        "id": 45,
        "firstName": "Moss",
        "lastName": "Baxter",
        "username": "@Fitzpatrick",
        "email": "mossfitzpatrick@comtours.com",
        "age": 51
      },
      {
        "id": 46,
        "firstName": "Jeanne",
        "lastName": "Cooke",
        "username": "@Ward",
        "email": "jeanneward@comtours.com",
        "age": 59
      },
      {
        "id": 47,
        "firstName": "Wilma",
        "lastName": "Briggs",
        "username": "@Kidd",
        "email": "wilmakidd@comtours.com",
        "age": 53
      },
      {
        "id": 48,
        "firstName": "Beatrice",
        "lastName": "Perry",
        "username": "@Gilbert",
        "email": "beatricegilbert@comtours.com",
        "age": 39
      },
      {
        "id": 49,
        "firstName": "Whitaker",
        "lastName": "Hyde",
        "username": "@Mcdonald",
        "email": "whitakermcdonald@comtours.com",
        "age": 35
      },
      {
        "id": 50,
        "firstName": "Rebekah",
        "lastName": "Duran",
        "username": "@Gross",
        "email": "rebekahgross@comtours.com",
        "age": 40
      },
      {
        "id": 51,
        "firstName": "Earline",
        "lastName": "Mayer",
        "username": "@Woodward",
        "email": "earlinewoodward@comtours.com",
        "age": 52
      },
      {
        "id": 52,
        "firstName": "Moran",
        "lastName": "Baxter",
        "username": "@Johns",
        "email": "moranjohns@comtours.com",
        "age": 20
      },
      {
        "id": 53,
        "firstName": "Nanette",
        "lastName": "Hubbard",
        "username": "@Cooke",
        "email": "nanettecooke@comtours.com",
        "age": 55
      },
      {
        "id": 54,
        "firstName": "Dalton",
        "lastName": "Walker",
        "username": "@Hendricks",
        "email": "daltonhendricks@comtours.com",
        "age": 25
      },
      {
        "id": 55,
        "firstName": "Bennett",
        "lastName": "Blake",
        "username": "@Pena",
        "email": "bennettpena@comtours.com",
        "age": 13
      },
      {
        "id": 56,
        "firstName": "Kellie",
        "lastName": "Horton",
        "username": "@Weiss",
        "email": "kellieweiss@comtours.com",
        "age": 48
      },
      {
        "id": 57,
        "firstName": "Hobbs",
        "lastName": "Talley",
        "username": "@Sanford",
        "email": "hobbssanford@comtours.com",
        "age": 28
      },
      {
        "id": 58,
        "firstName": "Mcguire",
        "lastName": "Donaldson",
        "username": "@Roman",
        "email": "mcguireroman@comtours.com",
        "age": 38
      },
      {
        "id": 59,
        "firstName": "Rodriquez",
        "lastName": "Saunders",
        "username": "@Harper",
        "email": "rodriquezharper@comtours.com",
        "age": 20
      },
      {
        "id": 60,
        "firstName": "Lou",
        "lastName": "Conner",
        "username": "@Sanchez",
        "email": "lousanchez@comtours.com",
        "age": 16
      }
    ];

    $scope.editableTableData = $scope.smartTableData.slice(0, 36);

    $scope.peopleTableData = [
      {
        id: 1,
        firstName: 'Mark',
        lastName: 'Otto',
        username: '@mdo',
        email: 'mdo@gmail.com',
        age: '28',
        status: 'info'
      },
      {
        id: 2,
        firstName: 'Jacob',
        lastName: 'Thornton',
        username: '@fat',
        email: 'fat@yandex.ru',
        age: '45',
        status: 'primary'
      },
      {
        id: 3,
        firstName: 'Larry',
        lastName: 'Bird',
        username: '@twitter',
        email: 'twitter@outlook.com',
        age: '18',
        status: 'success'
      },
      {
        id: 4,
        firstName: 'John',
        lastName: 'Snow',
        username: '@snow',
        email: 'snow@gmail.com',
        age: '20',
        status: 'danger'
      },
      {
        id: 5,
        firstName: 'Jack',
        lastName: 'Sparrow',
        username: '@jack',
        email: 'jack@yandex.ru',
        age: '30',
        status: 'warning'
      }
    ];

    $scope.metricsTableData = [
      {
        image: 'app/browsers/chrome.svg',
        browser: 'Google Chrome',
        visits: '10,392',
        isVisitsUp: true,
        purchases: '4,214',
        isPurchasesUp: true,
        percent: '45%',
        isPercentUp: true
      },
      {
        image: 'app/browsers/firefox.svg',
        browser: 'Mozilla Firefox',
        visits: '7,873',
        isVisitsUp: true,
        purchases: '3,031',
        isPurchasesUp: false,
        percent: '28%',
        isPercentUp: true
      },
      {
        image: 'app/browsers/ie.svg',
        browser: 'Internet Explorer',
        visits: '5,890',
        isVisitsUp: false,
        purchases: '2,102',
        isPurchasesUp: false,
        percent: '17%',
        isPercentUp: false
      },
      {
        image: 'app/browsers/safari.svg',
        browser: 'Safari',
        visits: '4,001',
        isVisitsUp: false,
        purchases: '1,001',
        isPurchasesUp: false,
        percent: '14%',
        isPercentUp: true
      },
      {
        image: 'app/browsers/opera.svg',
        browser: 'Opera',
        visits: '1,833',
        isVisitsUp: true,
        purchases: '83',
        isPurchasesUp: true,
        percent: '5%',
        isPercentUp: false
      }
    ];

    $scope.users = [
      {
        "id": 1,
        "name": "Esther Vang",
        "status": 4,
        "group": 3
      },
      {
        "id": 2,
        "name": "Leah Freeman",
        "status": 3,
        "group": 1
      },
      {
        "id": 3,
        "name": "Mathews Simpson",
        "status": 3,
        "group": 2
      },
      {
        "id": 4,
        "name": "Buckley Hopkins",
        "group": 4
      },
      {
        "id": 5,
        "name": "Buckley Schwartz",
        "status": 1,
        "group": 1
      },
      {
        "id": 6,
        "name": "Mathews Hopkins",
        "status": 4,
        "group": 2
      },
      {
        "id": 7,
        "name": "Leah Vang",
        "status": 4,
        "group": 1
      },
      {
        "id": 8,
        "name": "Vang Schwartz",
        "status": 4,
        "group": 2
      },
      {
        "id": 9,
        "name": "Hopkin Esther",
        "status": 1,
        "group": 2
      },
      {
        "id": 10,
        "name": "Mathews Schwartz",
        "status": 1,
        "group": 3
      }
    ];

    $scope.statuses = [
      {value: 1, text: 'Good'},
      {value: 2, text: 'Awesome'},
      {value: 3, text: 'Excellent'},
    ];

    $scope.groups = [
      {id: 1, text: 'user'},
      {id: 2, text: 'customer'},
      {id: 3, text: 'vip'},
      {id: 4, text: 'admin'}
    ];

    $scope.showGroup = function(user) {
      if(user.group && $scope.groups.length) {
        var selected = $filter('filter')($scope.groups, {id: user.group});
        return selected.length ? selected[0].text : 'Not set';
      } else return 'Not set'
    };

    $scope.showStatus = function(user) {
      var selected = [];
      if(user.status) {
        selected = $filter('filter')($scope.statuses, {value: user.status});
      }
      return selected.length ? selected[0].text : 'Not set';
    };


    $scope.removeUser = function(index) {
      $scope.users.splice(index, 1);
    };

    $scope.addUser = function() {
      $scope.inserted = {
        id: $scope.users.length+1,
        name: '',
        status: null,
        group: null
      };
      $scope.users.push($scope.inserted);
    };

    editableOptions.theme = 'bs3';
    editableThemes['bs3'].submitTpl = '<button type="submit" class="btn btn-primary btn-with-icon"><i class="ion-checkmark-round"></i></button>';
    editableThemes['bs3'].cancelTpl = '<button type="button" ng-click="$form.$cancel()" class="btn btn-default btn-with-icon"><i class="ion-close-round"></i></button>';


  }

})();

/**
 * @author a.demeshko
 * created on 21.01.2016
 */
(function () {
  'use strict';

  ProfileModalCtrl.$inject = ["$scope", "$uibModalInstance"];
  angular.module('BlurAdmin.pages.profile')
    .controller('ProfileModalCtrl', ProfileModalCtrl);

  /** @ngInject */
  function ProfileModalCtrl($scope, $uibModalInstance) {
    $scope.link = '';
    $scope.ok = function () {
      $uibModalInstance.close($scope.link);
    };
  }

})();
/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  ProfilePageCtrl.$inject = ["$scope", "fileReader", "$filter", "$uibModal"];
  angular.module('BlurAdmin.pages.profile')
    .controller('ProfilePageCtrl', ProfilePageCtrl);

  /** @ngInject */
  function ProfilePageCtrl($scope, fileReader, $filter, $uibModal) {
    $scope.picture = $filter('profilePicture')('Nasta');

    $scope.removePicture = function () {
      $scope.picture = $filter('appImage')('theme/no-photo.png');
      $scope.noPicture = true;
    };

    $scope.uploadPicture = function () {
      var fileInput = document.getElementById('uploadFile');
      fileInput.click();

    };

    $scope.socialProfiles = [
      {
        name: 'Facebook',
        href: 'https://www.facebook.com/akveo/',
        icon: 'socicon-facebook'
      },
      {
        name: 'Twitter',
        href: 'https://twitter.com/akveo_inc',
        icon: 'socicon-twitter'
      },
      {
        name: 'Google',
        icon: 'socicon-google'
      },
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/company/akveo',
        icon: 'socicon-linkedin'
      },
      {
        name: 'GitHub',
        href: 'https://github.com/akveo',
        icon: 'socicon-github'
      },
      {
        name: 'StackOverflow',
        icon: 'socicon-stackoverflow'
      },
      {
        name: 'Dribbble',
        icon: 'socicon-dribble'
      },
      {
        name: 'Behance',
        icon: 'socicon-behace'
      }
    ];

    $scope.unconnect = function (item) {
      item.href = undefined;
    };

    $scope.showModal = function (item) {
      $uibModal.open({
        animation: false,
        controller: 'ProfileModalCtrl',
        templateUrl: 'app/pages/profile/profileModal.html'
      }).result.then(function (link) {
          item.href = link;
        });
    };

    $scope.getFile = function () {
      fileReader.readAsDataUrl($scope.file, $scope)
          .then(function (result) {
            $scope.picture = result;
          });
    };

    $scope.switches = [true, true, false, true, true, false];
  }

})();

/**
 * @author a.demeshko
 * created on 12/16/15
 */
(function () {
  'use strict';

  chartistCtrl.$inject = ["$scope", "$timeout", "baConfig"];
  angular.module('BlurAdmin.pages.charts.chartist')
    .controller('chartistCtrl', chartistCtrl);

  /** @ngInject */
  function chartistCtrl($scope, $timeout, baConfig) {

    $scope.simpleLineOptions = {
      color: baConfig.colors.defaultText,
      fullWidth: true,
      height: "300px",
      chartPadding: {
        right: 40
      }
    };

    $scope.simpleLineData = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      series: [
        [20, 20, 12, 45, 50],
        [10, 45, 30, 14, 12],
        [34, 12, 12, 40, 50],
        [10, 43, 25, 22, 16],
        [3, 6, 30, 33, 43]
      ]
    };

    $scope.areaLineData = {
      labels: [1, 2, 3, 4, 5, 6, 7, 8],
      series: [
        [5, 9, 7, 8, 5, 3, 5, 4]
      ]
    };

    $scope.areaLineOptions = {
      fullWidth: true,
      height: "300px",
      low: 0,
      showArea: true
    };

    $scope.biLineData = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      series: [
        [1, 2, 3, 1, -2, 0, 1],
        [-2, -1, -2, -1, -2.5, -1, -2],
        [0, 0, 0, 1, 2, 2.5, 2],
        [2.5, 2, 1, 0.5, 1, 0.5, -1]
      ]
    };

    $scope.biLineOptions = {
      height: "300px",
      high: 3,
      low: -3,
      showArea: true,
      showLine: false,
      showPoint: false,
      fullWidth: true,
      axisX: {
        showGrid: false
      }
    };

    $scope.simpleBarData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      series: [
        [15, 24, 43, 27, 5, 10, 23, 44, 68, 50, 26, 8],
        [13, 22, 49, 22, 4, 6, 24, 46, 57, 48, 22, 4]
      ]
    };

    $scope.simpleBarOptions = {
      fullWidth: true,
      height: "300px"
    };

    $scope.multiBarData = {
      labels: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'],
      series: [
        [5, 4, 3, 7],
        [3, 2, 9, 5],
        [1, 5, 8, 4],
        [2, 3, 4, 6],
        [4, 1, 2, 1]
      ]
    };

    $scope.multiBarOptions = {
      fullWidth: true,
      height: "300px",
      stackBars: true,
      axisX: {
        labelInterpolationFnc: function (value) {
          return value.split(/\s+/).map(function (word) {
            return word[0];
          }).join('');
        }
      },
      axisY: {
        offset: 20
      }
    };

    $scope.multiBarResponsive = [
      ['screen and (min-width: 400px)', {
        reverseData: true,
        horizontalBars: true,
        axisX: {
          labelInterpolationFnc: Chartist.noop
        },
        axisY: {
          offset: 60
        }
      }],
      ['screen and (min-width: 700px)', {
        stackBars: false,
        reverseData: false,
        horizontalBars: false,
        seriesBarDistance: 15
      }]
    ];

    $scope.stackedBarData = {
      labels: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'],
      series: [
        [800000, 1200000, 1400000, 1300000],
        [200000, 400000, 500000, 300000],
        [100000, 200000, 400000, 600000]
      ]
    };

    $scope.stackedBarOptions = {
      fullWidth: true,
      height: "300px",
      stackBars: true,
      axisY: {
        labelInterpolationFnc: function (value) {
          return (value / 1000) + 'k';
        }
      }
    };

    $scope.simplePieData = {
      series: [5, 3, 4]
    };

    $scope.simplePieOptions = {
      fullWidth: true,
      height: "300px",
      weight: "300px",
      labelInterpolationFnc: function (value) {
        return Math.round(value / 12 * 100) + '%';
      }
    };

    $scope.labelsPieData = {
      labels: ['Bananas', 'Apples', 'Grapes'],
      series: [20, 15, 40]
    };

    $scope.labelsPieOptions = {
      fullWidth: true,
      height: "300px",
      weight: "300px",
      labelDirection: 'explode',
      labelInterpolationFnc: function (value) {
        return value[0];
      }
    };

    $scope.simpleDonutData = {
      labels: ['Bananas', 'Apples', 'Grapes'],
      series: [20, 15, 40]
    };

    $scope.simpleDonutOptions = {
      fullWidth: true,
      donut: true,
      height: "300px",
      weight: "300px",
      labelDirection: 'explode',
      labelInterpolationFnc: function (value) {
        return value[0];
      }
    };

    $scope.donutResponsive = getResponsive(5, 40);

    $scope.pieResponsive = getResponsive(20, 80);

    function getResponsive(padding, offset){
      return [
        ['screen and (min-width: 1550px)', {
          chartPadding: padding,
          labelOffset: offset,
          labelDirection: 'explode',
          labelInterpolationFnc: function (value) {
            return value;
          }
        }],
        ['screen and (max-width: 1200px)', {
          chartPadding: padding,
          labelOffset: offset,
          labelDirection: 'explode',
          labelInterpolationFnc: function (value) {
            return value;
          }
        }],
        ['screen and (max-width: 600px)', {
          chartPadding: 0,
          labelOffset: 0,
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }]
      ];
    }

    $timeout(function(){
      new Chartist.Line('#line-chart', $scope.simpleLineData, $scope.simpleLineOptions);
      new Chartist.Line('#area-chart', $scope.areaLineData, $scope.areaLineOptions);
      new Chartist.Line('#bi-chart', $scope.biLineData, $scope.biLineOptions);

      new Chartist.Bar('#simple-bar', $scope.simpleBarData, $scope.simpleBarOptions);
      new Chartist.Bar('#multi-bar', $scope.multiBarData, $scope.multiBarOptions, $scope.multiBarResponsive);
      new Chartist.Bar('#stacked-bar', $scope.stackedBarData, $scope.stackedBarOptions);

      new Chartist.Pie('#simple-pie', $scope.simplePieData, $scope.simplePieOptions, $scope.pieResponsive);
      new Chartist.Pie('#label-pie', $scope.labelsPieData, $scope.labelsPieOptions);
      new Chartist.Pie('#donut', $scope.simpleDonutData, $scope.simpleDonutOptions, $scope.donutResponsive);
    });
  }
})();
/**
 * @author a.demeshko
 * created on 12/16/15
 */
(function () {
  'use strict';

  chartJs1DCtrl.$inject = ["$scope", "baConfig"];
  angular.module('BlurAdmin.pages.charts.chartJs')
    .controller('chartJs1DCtrl', chartJs1DCtrl);

  /** @ngInject */
  function chartJs1DCtrl($scope, baConfig) {
    var layoutColors = baConfig.colors;

    $scope.labels =["Sleeping", "Designing", "Coding", "Cycling"];
    $scope.data = [20, 40, 5, 35];
    $scope.options = {
      elements: {
        arc: {
          borderWidth: 0
        }
      },
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          fontColor: layoutColors.defaultText
        }
      }
    };

    $scope.changeData = function () {
      $scope.data = shuffle($scope.data);
    };

    function shuffle(o){
      for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x){}
      return o;
    }
  }

})();
/**
 * @author a.demeshko
 * created on 12/16/15
 */
(function () {
  'use strict';

  chartJs2DCtrl.$inject = ["$scope"];
  angular.module('BlurAdmin.pages.charts.chartJs')
    .controller('chartJs2DCtrl', chartJs2DCtrl);

  /** @ngInject */
  function chartJs2DCtrl($scope) {
    $scope.labels =["May", "Jun", "Jul", "Aug", "Sep"];
    $scope.data = [
      [65, 59, 90, 81, 56],
      [28, 48, 40, 19, 88]
    ];
    $scope.series = ['Product A', 'Product B'];


    $scope.changeData = function () {
      $scope.data[0] = shuffle($scope.data[0]);
      $scope.data[1] = shuffle($scope.data[1]);
    };

    function shuffle(o){
      for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x){}
      return o;
    }
  }

})();
/**
 * @author a.demeshko
 * created on 12/16/15
 */
(function () {
  'use strict';

  chartJsWaveCtrl.$inject = ["$scope", "$interval", "stopableInterval"];
  angular.module('BlurAdmin.pages.charts.chartJs')
    .controller('chartJsWaveCtrl', chartJsWaveCtrl);

  /** @ngInject */
  function chartJsWaveCtrl($scope, $interval, stopableInterval) {
    $scope.labels =["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    $scope.data = [1, 9, 3, 4, 5, 6, 7, 8, 2].map(function(e){
      return Math.sin(e) * 25 +25;
    });

    stopableInterval.start($interval, function(){
      var tempArray = [];
      var lastElement = $scope.data[$scope.data.length-1];
      for(var i = $scope.data.length-1; i > 0; i--){
       tempArray[i] = $scope.data[i-1];
      }
      tempArray[0] = lastElement;
      $scope.data = tempArray;
    }, 400)
  }

})();
/**
 * @author a.demeshko
 * created on 12/16/15
 */
(function () {
  'use strict';

  morrisCtrl.$inject = ["$scope", "$window", "baConfig"];
  angular.module('BlurAdmin.pages.charts.morris')
    .controller('morrisCtrl', morrisCtrl);

  /** @ngInject */
  function morrisCtrl($scope, $window, baConfig) {
    var layoutColors = baConfig.colors;
    $scope.colors = [layoutColors.primary, layoutColors.warning, layoutColors.danger, layoutColors.info, layoutColors.success, layoutColors.primaryDark];
    $scope.lineData = [
      {y: "2006", a: 100, b: 90},
      {y: "2007", a: 75, b: 65},
      {y: "2008", a: 50, b: 40},
      {y: "2009", a: 75, b: 65},
      {y: "2010", a: 50, b: 40},
      {y: "2011", a: 75, b: 65},
      {y: "2012", a: 100, b: 90}
    ];
    $scope.areaData = [
      {y: "2006", a: 100, b: 90},
      {y: "2007", a: 75, b: 65},
      {y: "2008", a: 50, b: 40},
      {y: "2009", a: 75, b: 65},
      {y: "2010", a: 50, b: 40},
      {y: "2011", a: 75, b: 65},
      {y: "2012", a: 100, b: 90}
    ];
    $scope.barData = [
      {y: "2006", a: 100, b: 90},
      {y: "2007", a: 75, b: 65},
      {y: "2008", a: 50, b: 40},
      {y: "2009", a: 75, b: 65},
      {y: "2010", a: 50, b: 40},
      {y: "2011", a: 75, b: 65},
      {y: "2012", a: 100, b: 90}
    ];
    $scope.donutData = [
      {label: "Download Sales", value: 12},
      {label: "In-Store Sales", value: 30},
      {label: "Mail-Order Sales", value: 20}
    ];

    angular.element($window).bind('resize', function () {
      //$window.Morris.Grid.prototype.redraw();
    });
  }

})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .directive('blurFeed', blurFeed);

  /** @ngInject */
  function blurFeed() {
    return {
      restrict: 'E',
      controller: 'BlurFeedCtrl',
      templateUrl: 'app/pages/dashboard/blurFeed/blurFeed.html'
    };
  }
})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  BlurFeedCtrl.$inject = ["$scope"];
  angular.module('BlurAdmin.pages.dashboard')
      .controller('BlurFeedCtrl', BlurFeedCtrl);

  /** @ngInject */
  function BlurFeedCtrl($scope) {
    $scope.feed = [
      {
        type: 'text-message',
        author: 'Kostya',
        surname: 'Danovsky',
        header: 'Posted new message',
        text: 'Guys, check this out: \nA police officer found a perfect hiding place for watching for speeding motorists. One day, the officer was amazed when everyone was under the speed limit, so he investigated and found the problem. A 10 years old boy was standing on the side of the road with a huge hand painted sign which said "Radar Trap Ahead." A little more investigative work led the officer to the boy\'s accomplice: another boy about 100 yards beyond the radar trap with a sign reading "TIPS" and a bucket at his feet full of change.',
        time: 'Today 11:55 pm',
        ago: '25 minutes ago',
        expanded: false,
      }, {
        type: 'video-message',
        author: 'Andrey',
        surname: 'Hrabouski',
        header: 'Added new video',
        text: '"Vader and Me"',
        preview: 'app/feed/vader-and-me-preview.png',
        link: 'https://www.youtube.com/watch?v=IfcpzBbbamk',
        time: 'Today 9:30 pm',
        ago: '3 hrs ago',
        expanded: false,
      }, {
        type: 'image-message',
        author: 'Vlad',
        surname: 'Lugovsky',
        header: 'Added new image',
        text: '"My little kitten"',
        preview: 'app/feed/my-little-kitten.png',
        link: 'http://api.ning.com/files/DtcI2O2Ry7A7VhVxeiWfGU9WkHcMy4WSTWZ79oxJq*h0iXvVGndfD7CIYy-Ax-UAFCBCdqXI4GCBw3FOLKTTjQc*2cmpdOXJ/1082127884.jpeg',
        time: 'Today 2:20 pm',
        ago: '10 hrs ago',
        expanded: false,
      }, {
        type: 'text-message',
        author: 'Nasta',
        surname: 'Linnie',
        header: 'Posted new message',
        text: 'Haha lol',
        time: '11.11.2015',
        ago: '2 days ago',
        expanded: false,
      }, {
        type: 'geo-message',
        author: 'Nick',
        surname: 'Cat',
        header: 'Posted location',
        text: '"New York, USA"',
        preview: 'app/feed/new-york-location.png',
        link: 'https://www.google.by/maps/place/New+York,+NY,+USA/@40.7201111,-73.9893872,14z',
        time: '11.11.2015',
        ago: '2 days ago',
        expanded: false,
      }, {
        type: 'text-message',
        author: 'Vlad',
        surname: 'Lugovsky',
        header: 'Posted new message',
        text: "First snake: I hope I'm not poisonous. Second snake: Why? First snake: Because I bit my lip!",
        time: '12.11.2015',
        ago: '3 days ago',
        expanded: false,
      }, {
        type: 'text-message',
        author: 'Andrey',
        surname: 'Hrabouski',
        header: 'Posted new message',
        text: 'How do you smuggle an elephant across the border? Put a slice of bread on each side, and call him "lunch".',
        time: '14.11.2015',
        ago: '5 days ago',
        expanded: false,
      }, {
        type: 'text-message',
        author: 'Nasta',
        surname: 'Linnie',
        header: 'Posted new message',
        text: 'When your hammer is C++, everything begins to look like a thumb.',
        time: '14.11.2015',
        ago: '5 days ago',
        expanded: false,
      }, {
        type: 'text-message',
        author: 'Alexander',
        surname: 'Demeshko',
        header: 'Posted new message',
        text: '“I mean, they say you die twice. One time when you stop breathing and a second time, a bit later on, when somebody says your name for the last time." ©',
        time: '15.11.2015',
        ago: '6 days ago',
        expanded: false,
      }, {
        type: 'image-message',
        author: 'Nick',
        surname: 'Cat',
        header: 'Posted photo',
        text: '"Protein Heroes"',
        preview: 'app/feed/genom.png',
        link: 'https://dribbble.com/shots/2504810-Protein-Heroes',
        time: '16.11.2015',
        ago: '7 days ago',
        expanded: false,
      },
      {
        type: 'text-message',
        author: 'Kostya',
        surname: 'Danovsky',
        header: 'Posted new message',
        text: 'Why did the CoffeeScript developer keep getting lost? Because he couldn\'t find his source without a map',
        time: '18.11.2015',
        ago: '9 days ago',
        expanded: false,
      }
    ];

    $scope.expandMessage = function(message){
      message.expanded = !message.expanded;
    }
  }
})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .service('dashboardCalendar', dashboardCalendar);

  /** @ngInject */
  function dashboardCalendar() {

  }
})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .directive('dashboardCalendar', dashboardCalendar);

  /** @ngInject */
  function dashboardCalendar() {
    return {
      restrict: 'E',
      controller: 'DashboardCalendarCtrl',
      templateUrl: 'app/pages/dashboard/dashboardCalendar/dashboardCalendar.html'
    };
  }
})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  DashboardCalendarCtrl.$inject = ["baConfig"];
  angular.module('BlurAdmin.pages.dashboard')
      .controller('DashboardCalendarCtrl', DashboardCalendarCtrl);

  /** @ngInject */
  function DashboardCalendarCtrl(baConfig) {
    var dashboardColors = baConfig.colors.dashboard;
    var $element = $('#calendar').fullCalendar({
      //height: 335,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      defaultDate: '2016-03-08',
      selectable: true,
      selectHelper: true,
      select: function (start, end) {
        var title = prompt('Event Title:');
        var eventData;
        if (title) {
          eventData = {
            title: title,
            start: start,
            end: end
          };
          $element.fullCalendar('renderEvent', eventData, true); // stick? = true
        }
        $element.fullCalendar('unselect');
      },
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: 'All Day Event',
          start: '2016-03-01',
          color: dashboardColors.silverTree
        },
        {
          title: 'Long Event',
          start: '2016-03-07',
          end: '2016-03-10',
          color: dashboardColors.blueStone
        },
        {
          title: 'Dinner',
          start: '2016-03-14T20:00:00',
          color: dashboardColors.surfieGreen
        },
        {
          title: 'Birthday Party',
          start: '2016-04-01T07:00:00',
          color: dashboardColors.gossipDark
        }
      ]
    });
  }
})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .directive('dashboardLineChart', dashboardLineChart);

  /** @ngInject */
  function dashboardLineChart() {
    return {
      restrict: 'E',
      controller: 'DashboardLineChartCtrl',
      templateUrl: 'app/pages/dashboard/dashboardLineChart/dashboardLineChart.html'
    };
  }
})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  DashboardLineChartCtrl.$inject = ["baConfig", "layoutPaths", "baUtil"];
  angular.module('BlurAdmin.pages.dashboard')
      .controller('DashboardLineChartCtrl', DashboardLineChartCtrl);

  /** @ngInject */
  function DashboardLineChartCtrl(baConfig, layoutPaths, baUtil) {
    var layoutColors = baConfig.colors;
    var graphColor = baConfig.theme.blur ? '#000000' : layoutColors.primary;
    var chartData = [
      { date: new Date(2012, 11), value: 0, value0: 0 },
      { date: new Date(2013, 0), value: 15000, value0: 19000},
      { date: new Date(2013, 1), value: 30000, value0: 20000},

      { date: new Date(2013, 2), value: 25000, value0: 22000},
      { date: new Date(2013, 3), value: 21000, value0: 25000},
      { date: new Date(2013, 4), value: 24000, value0: 29000},
      { date: new Date(2013, 5), value: 31000, value0: 26000},
      { date: new Date(2013, 6), value: 40000, value0: 25000},
      { date: new Date(2013, 7), value: 37000, value0: 20000},
      { date: new Date(2013, 8), value: 18000, value0: 22000},
      { date: new Date(2013, 9), value: 5000, value0: 26000},
      { date: new Date(2013, 10), value: 40000, value0: 30000},
      { date: new Date(2013, 11), value: 20000, value0: 25000},
      { date: new Date(2014, 0), value: 5000, value0: 13000},

      { date: new Date(2014, 1), value: 3000, value0: 13000},
      { date: new Date(2014, 2), value: 1800, value0: 13000},
      { date: new Date(2014, 3), value: 10400, value0: 13000},
      { date: new Date(2014, 4), value: 25500, value0: 13000},
      { date: new Date(2014, 5), value: 2100, value0: 13000},
      { date: new Date(2014, 6), value: 6500, value0: 13000},
      { date: new Date(2014, 7), value: 1100, value0: 13000},
      { date: new Date(2014, 8), value: 17200, value0: 13000},
      { date: new Date(2014, 9), value: 26900, value0: 13000},
      { date: new Date(2014, 10), value: 14100, value0: 13000},
      { date: new Date(2014, 11), value: 35300, value0: 13000},
      { date: new Date(2015, 0), value: 54800, value0: 13000},
      { date: new Date(2015, 1), value: 49800, value0: 13000}
    ];

    var chart = AmCharts.makeChart('amchart', {
      type: 'serial',
      theme: 'blur',
      marginTop: 15,
      marginRight: 15,
      dataProvider: chartData,
      categoryField: 'date',
      categoryAxis: {
        parseDates: true,
        gridAlpha: 0,
        color: layoutColors.defaultText,
        axisColor: layoutColors.defaultText
      },
      valueAxes: [
        {
          minVerticalGap: 50,
          gridAlpha: 0,
          color: layoutColors.defaultText,
          axisColor: layoutColors.defaultText
        }
      ],
      graphs: [
        {
          id: 'g0',
          bullet: 'none',
          useLineColorForBulletBorder: true,
          lineColor: baUtil.hexToRGB(graphColor, 0.3),
          lineThickness: 1,
          negativeLineColor: layoutColors.danger,
          type: 'smoothedLine',
          valueField: 'value0',
          fillAlphas: 1,
          fillColorsField: 'lineColor'
        },
        {
          id: 'g1',
          bullet: 'none',
          useLineColorForBulletBorder: true,
          lineColor: baUtil.hexToRGB(graphColor, 0.5),
          lineThickness: 1,
          negativeLineColor: layoutColors.danger,
          type: 'smoothedLine',
          valueField: 'value',
          fillAlphas: 1,
          fillColorsField: 'lineColor'
        }
      ],
      chartCursor: {
        categoryBalloonDateFormat: 'MM YYYY',
        categoryBalloonColor: '#4285F4',
        categoryBalloonAlpha: 0.7,
        cursorAlpha: 0,
        valueLineEnabled: true,
        valueLineBalloonEnabled: true,
        valueLineAlpha: 0.5
      },
      dataDateFormat: 'MM YYYY',
      export: {
        enabled: true
      },
      creditsPosition: 'bottom-right',
      zoomOutButton: {
        backgroundColor: '#fff',
        backgroundAlpha: 0
      },
      zoomOutText: '',
      pathToImages: layoutPaths.images.amChart
    });

    function zoomChart() {
      chart.zoomToDates(new Date(2013, 3), new Date(2014, 0));
    }

    chart.addListener('rendered', zoomChart);
    zoomChart();
    if (chart.zoomChart) {
      chart.zoomChart();
    }
  }
})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .directive('dashboardMap', dashboardMap);

  /** @ngInject */
  function dashboardMap() {
    return {
      restrict: 'E',
      controller: 'DashboardMapCtrl',
      templateUrl: 'app/pages/dashboard/dashboardMap/dashboardMap.html'
    };
  }
})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  DashboardMapCtrl.$inject = ["baConfig", "layoutPaths"];
  angular.module('BlurAdmin.pages.dashboard')
      .controller('DashboardMapCtrl', DashboardMapCtrl);

  /** @ngInject */
  function DashboardMapCtrl(baConfig, layoutPaths) {
    var layoutColors = baConfig.colors;
    var map = AmCharts.makeChart('amChartMap', {
      type: 'map',
      theme: 'blur',
      zoomControl: { zoomControlEnabled: false, panControlEnabled: false },

      dataProvider: {
        map: 'worldLow',
        zoomLevel: 3.5,
        zoomLongitude: 10,
        zoomLatitude: 52,
        areas: [
          { title: 'Austria', id: 'AT', color: layoutColors.primary, customData: '1 244', groupId: '1'},
          { title: 'Ireland', id: 'IE', color: layoutColors.primary, customData: '1 342', groupId: '1'},
          { title: 'Denmark', id: 'DK', color: layoutColors.primary, customData: '1 973', groupId: '1'},
          { title: 'Finland', id: 'FI', color: layoutColors.primary, customData: '1 573', groupId: '1'},
          { title: 'Sweden', id: 'SE', color: layoutColors.primary, customData: '1 084', groupId: '1'},
          { title: 'Great Britain', id: 'GB', color: layoutColors.primary, customData: '1 452', groupId: '1'},
          { title: 'Italy', id: 'IT', color: layoutColors.primary, customData: '1 321', groupId: '1'},
          { title: 'France', id: 'FR', color: layoutColors.primary, customData: '1 112', groupId: '1'},
          { title: 'Spain', id: 'ES', color: layoutColors.primary, customData: '1 865', groupId: '1'},
          { title: 'Greece', id: 'GR', color: layoutColors.primary, customData: '1 453', groupId: '1'},
          { title: 'Germany', id: 'DE', color: layoutColors.primary, customData: '1 957', groupId: '1'},
          { title: 'Belgium', id: 'BE', color: layoutColors.primary, customData: '1 011', groupId: '1'},
          { title: 'Luxembourg', id: 'LU', color: layoutColors.primary, customData: '1 011', groupId: '1'},
          { title: 'Netherlands', id: 'NL', color: layoutColors.primary, customData: '1 213', groupId: '1'},
          { title: 'Portugal', id: 'PT', color: layoutColors.primary, customData: '1 291', groupId: '1'},
          { title: 'Lithuania', id: 'LT', color: layoutColors.successLight, customData: '567', groupId: '2'},
          { title: 'Latvia', id: 'LV', color: layoutColors.successLight, customData: '589', groupId: '2'},
          { title: 'Czech Republic ', id: 'CZ', color: layoutColors.successLight, customData: '785', groupId: '2'},
          { title: 'Slovakia', id: 'SK', color: layoutColors.successLight, customData: '965', groupId: '2'},
          { title: 'Estonia', id: 'EE', color: layoutColors.successLight, customData: '685', groupId: '2'},
          { title: 'Hungary', id: 'HU', color: layoutColors.successLight, customData: '854', groupId: '2'},
          { title: 'Cyprus', id: 'CY', color: layoutColors.successLight, customData: '754', groupId: '2'},
          { title: 'Malta', id: 'MT', color: layoutColors.successLight, customData: '867', groupId: '2'},
          { title: 'Poland', id: 'PL', color: layoutColors.successLight, customData: '759', groupId: '2'},
          { title: 'Romania', id: 'RO', color: layoutColors.success, customData: '302', groupId: '3'},
          { title: 'Bulgaria', id: 'BG', color: layoutColors.success, customData: '102', groupId: '3'},
          { title: 'Slovenia', id: 'SI', color: layoutColors.danger, customData: '23', groupId: '4'},
          { title: 'Croatia', id: 'HR', color: layoutColors.danger, customData: '96', groupId: '4'}
        ]
      },

      areasSettings: {
        rollOverOutlineColor: layoutColors.border,
        rollOverColor: layoutColors.primaryDark,
        alpha: 0.8,
        unlistedAreasAlpha: 0.2,
        unlistedAreasColor: layoutColors.defaultText,
        balloonText: '[[title]]: [[customData]] users'
      },


      legend: {
        width: '100%',
        marginRight: 27,
        marginLeft: 27,
        equalWidths: false,
        backgroundAlpha: 0.3,
        backgroundColor: layoutColors.border,
        borderColor: layoutColors.border,
        borderAlpha: 1,
        top: 362,
        left: 0,
        horizontalGap: 10,
        data: [
          {
            title: 'over 1 000 users',
            color: layoutColors.primary
          },
          {
            title: '500 - 1 000 users',
            color: layoutColors.successLight
          },
          {
            title: '100 - 500 users',
            color: layoutColors.success
          },
          {
            title: '0 - 100 users',
            color: layoutColors.danger
          }
        ]
      },
      export: {
        enabled: true
      },
      creditsPosition: 'bottom-right',
      pathToImages: layoutPaths.images.amChart
    });
  }
})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .directive('dashboardPieChart', dashboardPieChart);

  /** @ngInject */
  function dashboardPieChart() {
    return {
      restrict: 'E',
      controller: 'DashboardPieChartCtrl',
      templateUrl: 'app/pages/dashboard/dashboardPieChart/dashboardPieChart.html'
    };
  }
})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  DashboardPieChartCtrl.$inject = ["$scope", "$timeout", "baConfig", "baUtil"];
  angular.module('BlurAdmin.pages.dashboard')
      .controller('DashboardPieChartCtrl', DashboardPieChartCtrl);

  /** @ngInject */
  function DashboardPieChartCtrl($scope, $timeout, baConfig, baUtil) {
    var pieColor = baUtil.hexToRGB(baConfig.colors.defaultText, 0.2);
    $scope.charts = [{
      color: pieColor,
      description: 'New Visits',
      stats: '57,820',
      icon: 'person',
    }, {
      color: pieColor,
      description: 'Purchases',
      stats: '$ 89,745',
      icon: 'money',
    }, {
      color: pieColor,
      description: 'Active Users',
      stats: '178,391',
      icon: 'face',
    }, {
      color: pieColor,
      description: 'Returned',
      stats: '32,592',
      icon: 'refresh',
    }
    ];

    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }

    function loadPieCharts() {
      $('.chart').each(function () {
        var chart = $(this);
        chart.easyPieChart({
          easing: 'easeOutBounce',
          onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
          },
          barColor: chart.attr('rel'),
          trackColor: 'rgba(0,0,0,0)',
          size: 84,
          scaleLength: 0,
          animation: 2000,
          lineWidth: 9,
          lineCap: 'round',
        });
      });

      $('.refresh-data').on('click', function () {
        updatePieCharts();
      });
    }

    function updatePieCharts() {
      $('.pie-charts .chart').each(function(index, chart) {
        $(chart).data('easyPieChart').update(getRandomArbitrary(55, 90));
      });
    }

    $timeout(function () {
      loadPieCharts();
      updatePieCharts();
    }, 1000);
  }
})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .directive('dashboardTodo', dashboardTodo);

  /** @ngInject */
  function dashboardTodo() {
    return {
      restrict: 'EA',
      controller: 'DashboardTodoCtrl',
      templateUrl: 'app/pages/dashboard/dashboardTodo/dashboardTodo.html'
    };
  }
})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  DashboardTodoCtrl.$inject = ["$scope", "baConfig"];
  angular.module('BlurAdmin.pages.dashboard')
      .controller('DashboardTodoCtrl', DashboardTodoCtrl);

  /** @ngInject */
  function DashboardTodoCtrl($scope, baConfig) {

    $scope.transparent = baConfig.theme.blur;
    var dashboardColors = baConfig.colors.dashboard;
    var colors = [];
    for (var key in dashboardColors) {
      colors.push(dashboardColors[key]);
    }

    function getRandomColor() {
      var i = Math.floor(Math.random() * (colors.length - 1));
      return colors[i];
    }

    $scope.todoList = [
      { text: 'Check me out' },
      { text: 'Lorem ipsum dolor sit amet, possit denique oportere at his, etiam corpora deseruisse te pro' },
      { text: 'Ex has semper alterum, expetenda dignissim' },
      { text: 'Vim an eius ocurreret abhorreant, id nam aeque persius ornatus.' },
      { text: 'Simul erroribus ad usu' },
      { text: 'Ei cum solet appareat, ex est graeci mediocritatem' },
      { text: 'Get in touch with akveo team' },
      { text: 'Write email to business cat' },
      { text: 'Have fun with blur admin' },
      { text: 'What do you think?' },
    ];

    $scope.todoList.forEach(function(item) {
      item.color = getRandomColor();
    });

    $scope.newTodoText = '';

    $scope.addToDoItem = function (event, clickPlus) {
      if (clickPlus || event.which === 13) {
        $scope.todoList.unshift({
          text: $scope.newTodoText,
          color: getRandomColor(),
        });
        $scope.newTodoText = '';
      }
    };
  }
})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .service('dashboardPieChart', dashboardPieChart);

  /** @ngInject */
  function dashboardPieChart() {

  }
})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .directive('popularApp', popularApp);

  /** @ngInject */
  function popularApp() {
    return {
      restrict: 'E',
      templateUrl: 'app/pages/dashboard/popularApp/popularApp.html'
    };
  }
})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .directive('weather', weather);

  /** @ngInject */
  function weather() {
    return {
      restrict: 'EA',
      controller: 'WeatherCtrl',
      templateUrl: 'app/pages/dashboard/weather/weather.html'
    };
  }
})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  WeatherCtrl.$inject = ["$scope", "$http", "$timeout", "$element"];
  angular.module('BlurAdmin.pages.dashboard')
      .controller('WeatherCtrl', WeatherCtrl);

  /** @ngInject */
  function WeatherCtrl($scope, $http, $timeout, $element) {
    var url = 'http://api.openweathermap.org/data/2.5/forecast';
    var method = 'GET';
    var key = '2de143494c0b295cca9337e1e96b00e0';
    var middleOfTheDay = 15;
    $scope.units = 'metric';
    $scope.weatherIcons = {
      '01d': 'ion-ios-sunny-outline',
      '02d': 'ion-ios-partlysunny-outline',
      '03d': 'ion-ios-cloud-outline',
      '04d': 'ion-ios-cloud',
      '09d': 'ion-ios-rainy',
      '10d': 'ion-ios-rainy-outline',
      '11d': 'ion-ios-thunderstorm-outline',
      '13d': 'ion-ios-snowy',
      '50d': 'ion-ios-cloudy-outline',
      '01n': 'ion-ios-cloudy-night-outline',
      '02n': 'ion-ios-cloudy-night',
      '03n': 'ion-ios-cloud-outline',
      '04n': 'ion-ios-cloud',
      '09n': 'ion-ios-rainy',
      '10n': 'ion-ios-rainy-outline',
      '11n': 'ion-ios-thunderstorm',
      '13n': 'ion-ios-snowy',
      '50n': 'ion-ios-cloudy-outline'
    };
    $scope.weather = {};

    $scope.switchUnits = function (name) {
      $scope.units = name;
      $scope.updateWeather();
    };

    $scope.switchDay = function (day) {
      $scope.weather.current = day;
      makeChart($scope.weather.days[$scope.weather.current].timeTemp)
    };

    $scope.updateWeather = function () {
      $http({
        method: method, url: url, params: {
          appid: key,
          lat: $scope.geoData.geoplugin_latitude,
          lon: $scope.geoData.geoplugin_longitude,
          units: $scope.units
        }
      }).then(function success(response) {
        saveWeatherData(response.data);
        makeChart($scope.weather.days[$scope.weather.current].timeTemp)
      }, function error() {
        console.log("WEATHER FAILED")
      });
    };

    function updateGeoData() {
      $http.jsonp('http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK').then(function success(response) {
        $scope.geoData = response.data;
        $scope.updateWeather();
      }, function error() {
        console.log("GEO FAILED")
      });
    }

    function makeChart(data) {
      AmCharts.makeChart('tempChart', {
        type: 'serial',
        theme: 'blur',
        handDrawn: true,
        categoryField: 'time',
        dataProvider: data,
        valueAxes: [
          {
            axisAlpha: 0.3,
            gridAlpha: 0
          }
        ],
        graphs: [
          {
            bullet: 'square',
            fillAlphas: 0.3,
            fillColorsField: 'lineColor',
            legendValueText: '[[value]]',
            lineColorField: 'lineColor',
            title: 'Temp',
            valueField: 'temp'
          }
        ],
        categoryAxis: {
          gridAlpha: 0,
          axisAlpha: 0.3
        }
      }).write('tempChart');
    }

    function saveWeatherData(data) {
      var firstItem = data.list[0];
      var weather = {
        days: [{
          date: new Date(),
          timeTemp: [],
          main: firstItem.weather[0].main,
          description: firstItem.weather[0].description,
          icon: firstItem.weather[0].icon,
          temp: firstItem.main.temp
        }], current: 0
      };
      data.list.forEach(function (item, i) {
        var itemDate = new Date(item.dt_txt);
        if (itemDate.getDate() !== weather.days[weather.days.length - 1].date.getDate()) {
          weather.days.push({date: itemDate, timeTemp: []});
        }
        var lastItem = weather.days[weather.days.length - 1];
        lastItem.timeTemp.push({
          time: itemDate.getHours(),
          temp: item.main.temp
        });
        if ((weather.days.length > 1 && itemDate.getHours() == middleOfTheDay) || i == data.list.length - 1) {
          lastItem.main = item.weather[0].main;
          lastItem.description = item.weather[0].description;
          lastItem.icon = item.weather[0].icon;
          lastItem.temp = item.main.temp;
          lastItem.date.setHours(i == data.list.length - 1 ? 0 : middleOfTheDay);
          lastItem.date.setMinutes(0);
        }
      });
      console.log(weather.days[weather.current].date);
      weather.days = weather.days.slice(0, $element.attr('forecast') || 5);
      $scope.weather = weather;
    }

    updateGeoData();
  }
})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .directive('trafficChart', trafficChart);

  /** @ngInject */
  function trafficChart() {
    return {
      restrict: 'E',
      controller: 'TrafficChartCtrl',
      templateUrl: 'app/pages/dashboard/trafficChart/trafficChart.html'
    };
  }
})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  TrafficChartCtrl.$inject = ["$scope", "baConfig", "colorHelper"];
  angular.module('BlurAdmin.pages.dashboard')
      .controller('TrafficChartCtrl', TrafficChartCtrl);

  /** @ngInject */
  function TrafficChartCtrl($scope, baConfig, colorHelper) {

      $scope.transparent = baConfig.theme.blur;
      var dashboardColors = baConfig.colors.dashboard;
      $scope.doughnutData = {
          labels: [
              'Other',
              'Search engines',
              'Referral Traffic',
              'Direct Traffic',
              'Ad Campaigns'
          ],
          datasets: [
              {
                  data: [2000, 1500, 1000, 1200, 400],
                  backgroundColor: [
                      dashboardColors.white,
                      dashboardColors.blueStone,
                      dashboardColors.surfieGreen,
                      dashboardColors.silverTree,
                      dashboardColors.gossip

                  ],
                  hoverBackgroundColor: [
                      colorHelper.shade(dashboardColors.white, 15),
                      colorHelper.shade(dashboardColors.blueStone, 15),
                      colorHelper.shade(dashboardColors.surfieGreen, 15),
                      colorHelper.shade(dashboardColors.silverTree, 15),
                      colorHelper.shade(dashboardColors.gossip, 15)
                  ],
                  percentage: [87, 22, 70, 38, 17]
              }]
      };

      var ctx = document.getElementById('chart-area').getContext('2d');
      window.myDoughnut = new Chart(ctx, {
          type: 'doughnut',
          data: $scope.doughnutData,
          options: {
              cutoutPercentage: 64,
              responsive: true,
              elements: {
                  arc: {
                      borderWidth: 0
                  }
              }
          }
      });
  }
})();
(function () {
  'use strict';

  WizardCtrl.$inject = ["$scope"];
  angular.module('BlurAdmin.pages.form')
      .controller('WizardCtrl', WizardCtrl);

  /** @ngInject */
  function WizardCtrl($scope) {
   var vm = this;

    vm.personalInfo = {};
    vm.productInfo = {};
    vm.shipment = {};

    vm.arePersonalInfoPasswordsEqual = function () {
      return vm.personalInfo.confirmPassword && vm.personalInfo.password == vm.personalInfo.confirmPassword;
    };
  }

})();


/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  MapBubblePageCtrl.$inject = ["baConfig", "$timeout", "layoutPaths"];
  angular.module('BlurAdmin.pages.maps')
      .controller('MapBubblePageCtrl', MapBubblePageCtrl);

  /** @ngInject */
  function MapBubblePageCtrl(baConfig, $timeout, layoutPaths) {
    var layoutColors = baConfig.colors;
    var latlong = {};
    latlong['AD'] = {'latitude': 42.5, 'longitude': 1.5};
    latlong['AE'] = {'latitude': 24, 'longitude': 54};
    latlong['AF'] = {'latitude': 33, 'longitude': 65};
    latlong['AG'] = {'latitude': 17.05, 'longitude': -61.8};
    latlong['AI'] = {'latitude': 18.25, 'longitude': -63.1667};
    latlong['AL'] = {'latitude': 41, 'longitude': 20};
    latlong['AM'] = {'latitude': 40, 'longitude': 45};
    latlong['AN'] = {'latitude': 12.25, 'longitude': -68.75};
    latlong['AO'] = {'latitude': -12.5, 'longitude': 18.5};
    latlong['AP'] = {'latitude': 35, 'longitude': 105};
    latlong['AQ'] = {'latitude': -90, 'longitude': 0};
    latlong['AR'] = {'latitude': -34, 'longitude': -64};
    latlong['AS'] = {'latitude': -14.3333, 'longitude': -170};
    latlong['AT'] = {'latitude': 47.3333, 'longitude': 13.3333};
    latlong['AU'] = {'latitude': -27, 'longitude': 133};
    latlong['AW'] = {'latitude': 12.5, 'longitude': -69.9667};
    latlong['AZ'] = {'latitude': 40.5, 'longitude': 47.5};
    latlong['BA'] = {'latitude': 44, 'longitude': 18};
    latlong['BB'] = {'latitude': 13.1667, 'longitude': -59.5333};
    latlong['BD'] = {'latitude': 24, 'longitude': 90};
    latlong['BE'] = {'latitude': 50.8333, 'longitude': 4};
    latlong['BF'] = {'latitude': 13, 'longitude': -2};
    latlong['BG'] = {'latitude': 43, 'longitude': 25};
    latlong['BH'] = {'latitude': 26, 'longitude': 50.55};
    latlong['BI'] = {'latitude': -3.5, 'longitude': 30};
    latlong['BJ'] = {'latitude': 9.5, 'longitude': 2.25};
    latlong['BM'] = {'latitude': 32.3333, 'longitude': -64.75};
    latlong['BN'] = {'latitude': 4.5, 'longitude': 114.6667};
    latlong['BO'] = {'latitude': -17, 'longitude': -65};
    latlong['BR'] = {'latitude': -10, 'longitude': -55};
    latlong['BS'] = {'latitude': 24.25, 'longitude': -76};
    latlong['BT'] = {'latitude': 27.5, 'longitude': 90.5};
    latlong['BV'] = {'latitude': -54.4333, 'longitude': 3.4};
    latlong['BW'] = {'latitude': -22, 'longitude': 24};
    latlong['BY'] = {'latitude': 53, 'longitude': 28};
    latlong['BZ'] = {'latitude': 17.25, 'longitude': -88.75};
    latlong['CA'] = {'latitude': 54, 'longitude': -100};
    latlong['CC'] = {'latitude': -12.5, 'longitude': 96.8333};
    latlong['CD'] = {'latitude': 0, 'longitude': 25};
    latlong['CF'] = {'latitude': 7, 'longitude': 21};
    latlong['CG'] = {'latitude': -1, 'longitude': 15};
    latlong['CH'] = {'latitude': 47, 'longitude': 8};
    latlong['CI'] = {'latitude': 8, 'longitude': -5};
    latlong['CK'] = {'latitude': -21.2333, 'longitude': -159.7667};
    latlong['CL'] = {'latitude': -30, 'longitude': -71};
    latlong['CM'] = {'latitude': 6, 'longitude': 12};
    latlong['CN'] = {'latitude': 35, 'longitude': 105};
    latlong['CO'] = {'latitude': 4, 'longitude': -72};
    latlong['CR'] = {'latitude': 10, 'longitude': -84};
    latlong['CU'] = {'latitude': 21.5, 'longitude': -80};
    latlong['CV'] = {'latitude': 16, 'longitude': -24};
    latlong['CX'] = {'latitude': -10.5, 'longitude': 105.6667};
    latlong['CY'] = {'latitude': 35, 'longitude': 33};
    latlong['CZ'] = {'latitude': 49.75, 'longitude': 15.5};
    latlong['DE'] = {'latitude': 51, 'longitude': 9};
    latlong['DJ'] = {'latitude': 11.5, 'longitude': 43};
    latlong['DK'] = {'latitude': 56, 'longitude': 10};
    latlong['DM'] = {'latitude': 15.4167, 'longitude': -61.3333};
    latlong['DO'] = {'latitude': 19, 'longitude': -70.6667};
    latlong['DZ'] = {'latitude': 28, 'longitude': 3};
    latlong['EC'] = {'latitude': -2, 'longitude': -77.5};
    latlong['EE'] = {'latitude': 59, 'longitude': 26};
    latlong['EG'] = {'latitude': 27, 'longitude': 30};
    latlong['EH'] = {'latitude': 24.5, 'longitude': -13};
    latlong['ER'] = {'latitude': 15, 'longitude': 39};
    latlong['ES'] = {'latitude': 40, 'longitude': -4};
    latlong['ET'] = {'latitude': 8, 'longitude': 38};
    latlong['EU'] = {'latitude': 47, 'longitude': 8};
    latlong['FI'] = {'latitude': 62, 'longitude': 26};
    latlong['FJ'] = {'latitude': -18, 'longitude': 175};
    latlong['FK'] = {'latitude': -51.75, 'longitude': -59};
    latlong['FM'] = {'latitude': 6.9167, 'longitude': 158.25};
    latlong['FO'] = {'latitude': 62, 'longitude': -7};
    latlong['FR'] = {'latitude': 46, 'longitude': 2};
    latlong['GA'] = {'latitude': -1, 'longitude': 11.75};
    latlong['GB'] = {'latitude': 54, 'longitude': -2};
    latlong['GD'] = {'latitude': 12.1167, 'longitude': -61.6667};
    latlong['GE'] = {'latitude': 42, 'longitude': 43.5};
    latlong['GF'] = {'latitude': 4, 'longitude': -53};
    latlong['GH'] = {'latitude': 8, 'longitude': -2};
    latlong['GI'] = {'latitude': 36.1833, 'longitude': -5.3667};
    latlong['GL'] = {'latitude': 72, 'longitude': -40};
    latlong['GM'] = {'latitude': 13.4667, 'longitude': -16.5667};
    latlong['GN'] = {'latitude': 11, 'longitude': -10};
    latlong['GP'] = {'latitude': 16.25, 'longitude': -61.5833};
    latlong['GQ'] = {'latitude': 2, 'longitude': 10};
    latlong['GR'] = {'latitude': 39, 'longitude': 22};
    latlong['GS'] = {'latitude': -54.5, 'longitude': -37};
    latlong['GT'] = {'latitude': 15.5, 'longitude': -90.25};
    latlong['GU'] = {'latitude': 13.4667, 'longitude': 144.7833};
    latlong['GW'] = {'latitude': 12, 'longitude': -15};
    latlong['GY'] = {'latitude': 5, 'longitude': -59};
    latlong['HK'] = {'latitude': 22.25, 'longitude': 114.1667};
    latlong['HM'] = {'latitude': -53.1, 'longitude': 72.5167};
    latlong['HN'] = {'latitude': 15, 'longitude': -86.5};
    latlong['HR'] = {'latitude': 45.1667, 'longitude': 15.5};
    latlong['HT'] = {'latitude': 19, 'longitude': -72.4167};
    latlong['HU'] = {'latitude': 47, 'longitude': 20};
    latlong['ID'] = {'latitude': -5, 'longitude': 120};
    latlong['IE'] = {'latitude': 53, 'longitude': -8};
    latlong['IL'] = {'latitude': 31.5, 'longitude': 34.75};
    latlong['IN'] = {'latitude': 20, 'longitude': 77};
    latlong['IO'] = {'latitude': -6, 'longitude': 71.5};
    latlong['IQ'] = {'latitude': 33, 'longitude': 44};
    latlong['IR'] = {'latitude': 32, 'longitude': 53};
    latlong['IS'] = {'latitude': 65, 'longitude': -18};
    latlong['IT'] = {'latitude': 42.8333, 'longitude': 12.8333};
    latlong['JM'] = {'latitude': 18.25, 'longitude': -77.5};
    latlong['JO'] = {'latitude': 31, 'longitude': 36};
    latlong['JP'] = {'latitude': 36, 'longitude': 138};
    latlong['KE'] = {'latitude': 1, 'longitude': 38};
    latlong['KG'] = {'latitude': 41, 'longitude': 75};
    latlong['KH'] = {'latitude': 13, 'longitude': 105};
    latlong['KI'] = {'latitude': 1.4167, 'longitude': 173};
    latlong['KM'] = {'latitude': -12.1667, 'longitude': 44.25};
    latlong['KN'] = {'latitude': 17.3333, 'longitude': -62.75};
    latlong['KP'] = {'latitude': 40, 'longitude': 127};
    latlong['KR'] = {'latitude': 37, 'longitude': 127.5};
    latlong['KW'] = {'latitude': 29.3375, 'longitude': 47.6581};
    latlong['KY'] = {'latitude': 19.5, 'longitude': -80.5};
    latlong['KZ'] = {'latitude': 48, 'longitude': 68};
    latlong['LA'] = {'latitude': 18, 'longitude': 105};
    latlong['LB'] = {'latitude': 33.8333, 'longitude': 35.8333};
    latlong['LC'] = {'latitude': 13.8833, 'longitude': -61.1333};
    latlong['LI'] = {'latitude': 47.1667, 'longitude': 9.5333};
    latlong['LK'] = {'latitude': 7, 'longitude': 81};
    latlong['LR'] = {'latitude': 6.5, 'longitude': -9.5};
    latlong['LS'] = {'latitude': -29.5, 'longitude': 28.5};
    latlong['LT'] = {'latitude': 55, 'longitude': 24};
    latlong['LU'] = {'latitude': 49.75, 'longitude': 6};
    latlong['LV'] = {'latitude': 57, 'longitude': 25};
    latlong['LY'] = {'latitude': 25, 'longitude': 17};
    latlong['MA'] = {'latitude': 32, 'longitude': -5};
    latlong['MC'] = {'latitude': 43.7333, 'longitude': 7.4};
    latlong['MD'] = {'latitude': 47, 'longitude': 29};
    latlong['ME'] = {'latitude': 42.5, 'longitude': 19.4};
    latlong['MG'] = {'latitude': -20, 'longitude': 47};
    latlong['MH'] = {'latitude': 9, 'longitude': 168};
    latlong['MK'] = {'latitude': 41.8333, 'longitude': 22};
    latlong['ML'] = {'latitude': 17, 'longitude': -4};
    latlong['MM'] = {'latitude': 22, 'longitude': 98};
    latlong['MN'] = {'latitude': 46, 'longitude': 105};
    latlong['MO'] = {'latitude': 22.1667, 'longitude': 113.55};
    latlong['MP'] = {'latitude': 15.2, 'longitude': 145.75};
    latlong['MQ'] = {'latitude': 14.6667, 'longitude': -61};
    latlong['MR'] = {'latitude': 20, 'longitude': -12};
    latlong['MS'] = {'latitude': 16.75, 'longitude': -62.2};
    latlong['MT'] = {'latitude': 35.8333, 'longitude': 14.5833};
    latlong['MU'] = {'latitude': -20.2833, 'longitude': 57.55};
    latlong['MV'] = {'latitude': 3.25, 'longitude': 73};
    latlong['MW'] = {'latitude': -13.5, 'longitude': 34};
    latlong['MX'] = {'latitude': 23, 'longitude': -102};
    latlong['MY'] = {'latitude': 2.5, 'longitude': 112.5};
    latlong['MZ'] = {'latitude': -18.25, 'longitude': 35};
    latlong['NA'] = {'latitude': -22, 'longitude': 17};
    latlong['NC'] = {'latitude': -21.5, 'longitude': 165.5};
    latlong['NE'] = {'latitude': 16, 'longitude': 8};
    latlong['NF'] = {'latitude': -29.0333, 'longitude': 167.95};
    latlong['NG'] = {'latitude': 10, 'longitude': 8};
    latlong['NI'] = {'latitude': 13, 'longitude': -85};
    latlong['NL'] = {'latitude': 52.5, 'longitude': 5.75};
    latlong['NO'] = {'latitude': 62, 'longitude': 10};
    latlong['NP'] = {'latitude': 28, 'longitude': 84};
    latlong['NR'] = {'latitude': -0.5333, 'longitude': 166.9167};
    latlong['NU'] = {'latitude': -19.0333, 'longitude': -169.8667};
    latlong['NZ'] = {'latitude': -41, 'longitude': 174};
    latlong['OM'] = {'latitude': 21, 'longitude': 57};
    latlong['PA'] = {'latitude': 9, 'longitude': -80};
    latlong['PE'] = {'latitude': -10, 'longitude': -76};
    latlong['PF'] = {'latitude': -15, 'longitude': -140};
    latlong['PG'] = {'latitude': -6, 'longitude': 147};
    latlong['PH'] = {'latitude': 13, 'longitude': 122};
    latlong['PK'] = {'latitude': 30, 'longitude': 70};
    latlong['PL'] = {'latitude': 52, 'longitude': 20};
    latlong['PM'] = {'latitude': 46.8333, 'longitude': -56.3333};
    latlong['PR'] = {'latitude': 18.25, 'longitude': -66.5};
    latlong['PS'] = {'latitude': 32, 'longitude': 35.25};
    latlong['PT'] = {'latitude': 39.5, 'longitude': -8};
    latlong['PW'] = {'latitude': 7.5, 'longitude': 134.5};
    latlong['PY'] = {'latitude': -23, 'longitude': -58};
    latlong['QA'] = {'latitude': 25.5, 'longitude': 51.25};
    latlong['RE'] = {'latitude': -21.1, 'longitude': 55.6};
    latlong['RO'] = {'latitude': 46, 'longitude': 25};
    latlong['RS'] = {'latitude': 44, 'longitude': 21};
    latlong['RU'] = {'latitude': 60, 'longitude': 100};
    latlong['RW'] = {'latitude': -2, 'longitude': 30};
    latlong['SA'] = {'latitude': 25, 'longitude': 45};
    latlong['SB'] = {'latitude': -8, 'longitude': 159};
    latlong['SC'] = {'latitude': -4.5833, 'longitude': 55.6667};
    latlong['SD'] = {'latitude': 15, 'longitude': 30};
    latlong['SE'] = {'latitude': 62, 'longitude': 15};
    latlong['SG'] = {'latitude': 1.3667, 'longitude': 103.8};
    latlong['SH'] = {'latitude': -15.9333, 'longitude': -5.7};
    latlong['SI'] = {'latitude': 46, 'longitude': 15};
    latlong['SJ'] = {'latitude': 78, 'longitude': 20};
    latlong['SK'] = {'latitude': 48.6667, 'longitude': 19.5};
    latlong['SL'] = {'latitude': 8.5, 'longitude': -11.5};
    latlong['SM'] = {'latitude': 43.7667, 'longitude': 12.4167};
    latlong['SN'] = {'latitude': 14, 'longitude': -14};
    latlong['SO'] = {'latitude': 10, 'longitude': 49};
    latlong['SR'] = {'latitude': 4, 'longitude': -56};
    latlong['ST'] = {'latitude': 1, 'longitude': 7};
    latlong['SV'] = {'latitude': 13.8333, 'longitude': -88.9167};
    latlong['SY'] = {'latitude': 35, 'longitude': 38};
    latlong['SZ'] = {'latitude': -26.5, 'longitude': 31.5};
    latlong['TC'] = {'latitude': 21.75, 'longitude': -71.5833};
    latlong['TD'] = {'latitude': 15, 'longitude': 19};
    latlong['TF'] = {'latitude': -43, 'longitude': 67};
    latlong['TG'] = {'latitude': 8, 'longitude': 1.1667};
    latlong['TH'] = {'latitude': 15, 'longitude': 100};
    latlong['TJ'] = {'latitude': 39, 'longitude': 71};
    latlong['TK'] = {'latitude': -9, 'longitude': -172};
    latlong['TM'] = {'latitude': 40, 'longitude': 60};
    latlong['TN'] = {'latitude': 34, 'longitude': 9};
    latlong['TO'] = {'latitude': -20, 'longitude': -175};
    latlong['TR'] = {'latitude': 39, 'longitude': 35};
    latlong['TT'] = {'latitude': 11, 'longitude': -61};
    latlong['TV'] = {'latitude': -8, 'longitude': 178};
    latlong['TW'] = {'latitude': 23.5, 'longitude': 121};
    latlong['TZ'] = {'latitude': -6, 'longitude': 35};
    latlong['UA'] = {'latitude': 49, 'longitude': 32};
    latlong['UG'] = {'latitude': 1, 'longitude': 32};
    latlong['UM'] = {'latitude': 19.2833, 'longitude': 166.6};
    latlong['US'] = {'latitude': 38, 'longitude': -97};
    latlong['UY'] = {'latitude': -33, 'longitude': -56};
    latlong['UZ'] = {'latitude': 41, 'longitude': 64};
    latlong['VA'] = {'latitude': 41.9, 'longitude': 12.45};
    latlong['VC'] = {'latitude': 13.25, 'longitude': -61.2};
    latlong['VE'] = {'latitude': 8, 'longitude': -66};
    latlong['VG'] = {'latitude': 18.5, 'longitude': -64.5};
    latlong['VI'] = {'latitude': 18.3333, 'longitude': -64.8333};
    latlong['VN'] = {'latitude': 16, 'longitude': 106};
    latlong['VU'] = {'latitude': -16, 'longitude': 167};
    latlong['WF'] = {'latitude': -13.3, 'longitude': -176.2};
    latlong['WS'] = {'latitude': -13.5833, 'longitude': -172.3333};
    latlong['YE'] = {'latitude': 15, 'longitude': 48};
    latlong['YT'] = {'latitude': -12.8333, 'longitude': 45.1667};
    latlong['ZA'] = {'latitude': -29, 'longitude': 24};
    latlong['ZM'] = {'latitude': -15, 'longitude': 30};
    latlong['ZW'] = {'latitude': -20, 'longitude': 30};

    var mapData = [
      {'code': 'AF', 'name': 'Afghanistan', 'value': 32358260, 'color': layoutColors.primaryDark},
      {'code': 'AL', 'name': 'Albania', 'value': 3215988, 'color': layoutColors.warning},
      {'code': 'DZ', 'name': 'Algeria', 'value': 35980193, 'color': layoutColors.danger},
      {'code': 'AO', 'name': 'Angola', 'value': 19618432, 'color': layoutColors.danger},
      {'code': 'AR', 'name': 'Argentina', 'value': 40764561, 'color': layoutColors.success},
      {'code': 'AM', 'name': 'Armenia', 'value': 3100236, 'color': layoutColors.warning},
      {'code': 'AU', 'name': 'Australia', 'value': 22605732, 'color': layoutColors.warningDark},
      {'code': 'AT', 'name': 'Austria', 'value': 8413429, 'color': layoutColors.warning},
      {'code': 'AZ', 'name': 'Azerbaijan', 'value': 9306023, 'color': layoutColors.warning},
      {'code': 'BH', 'name': 'Bahrain', 'value': 1323535, 'color': layoutColors.primaryDark},
      {'code': 'BD', 'name': 'Bangladesh', 'value': 150493658, 'color': layoutColors.primaryDark},
      {'code': 'BY', 'name': 'Belarus', 'value': 9559441, 'color': layoutColors.warning},
      {'code': 'BE', 'name': 'Belgium', 'value': 10754056, 'color': layoutColors.warning},
      {'code': 'BJ', 'name': 'Benin', 'value': 9099922, 'color': layoutColors.danger},
      {'code': 'BT', 'name': 'Bhutan', 'value': 738267, 'color': layoutColors.primaryDark},
      {'code': 'BO', 'name': 'Bolivia', 'value': 10088108, 'color': layoutColors.success},
      {'code': 'BA', 'name': 'Bosnia and Herzegovina', 'value': 3752228, 'color': layoutColors.warning},
      {'code': 'BW', 'name': 'Botswana', 'value': 2030738, 'color': layoutColors.danger},
      {'code': 'BR', 'name': 'Brazil', 'value': 196655014, 'color': layoutColors.success},
      {'code': 'BN', 'name': 'Brunei', 'value': 405938, 'color': layoutColors.primaryDark},
      {'code': 'BG', 'name': 'Bulgaria', 'value': 7446135, 'color': layoutColors.warning},
      {'code': 'BF', 'name': 'Burkina Faso', 'value': 16967845, 'color': layoutColors.danger},
      {'code': 'BI', 'name': 'Burundi', 'value': 8575172, 'color': layoutColors.danger},
      {'code': 'KH', 'name': 'Cambodia', 'value': 14305183, 'color': layoutColors.primaryDark},
      {'code': 'CM', 'name': 'Cameroon', 'value': 20030362, 'color': layoutColors.danger},
      {'code': 'CA', 'name': 'Canada', 'value': 34349561, 'color': layoutColors.primary},
      {'code': 'CV', 'name': 'Cape Verde', 'value': 500585, 'color': layoutColors.danger},
      {'code': 'CF', 'name': 'Central African Rep.', 'value': 4486837, 'color': layoutColors.danger},
      {'code': 'TD', 'name': 'Chad', 'value': 11525496, 'color': layoutColors.danger},
      {'code': 'CL', 'name': 'Chile', 'value': 17269525, 'color': layoutColors.success},
      {'code': 'CN', 'name': 'China', 'value': 1347565324, 'color': layoutColors.primaryDark},
      {'code': 'CO', 'name': 'Colombia', 'value': 46927125, 'color': layoutColors.success},
      {'code': 'KM', 'name': 'Comoros', 'value': 753943, 'color': layoutColors.danger},
      {'code': 'CD', 'name': 'Congo, Dem. Rep.', 'value': 67757577, 'color': layoutColors.danger},
      {'code': 'CG', 'name': 'Congo, Rep.', 'value': 4139748, 'color': layoutColors.danger},
      {'code': 'CR', 'name': 'Costa Rica', 'value': 4726575, 'color': layoutColors.primary},
      {'code': 'CI', 'name': 'Cote d\'Ivoire', 'value': 20152894, 'color': layoutColors.danger},
      {'code': 'HR', 'name': 'Croatia', 'value': 4395560, 'color': layoutColors.warning},
      {'code': 'CU', 'name': 'Cuba', 'value': 11253665, 'color': layoutColors.primary},
      {'code': 'CY', 'name': 'Cyprus', 'value': 1116564, 'color': layoutColors.warning},
      {'code': 'CZ', 'name': 'Czech Rep.', 'value': 10534293, 'color': layoutColors.warning},
      {'code': 'DK', 'name': 'Denmark', 'value': 5572594, 'color': layoutColors.warning},
      {'code': 'DJ', 'name': 'Djibouti', 'value': 905564, 'color': layoutColors.danger},
      {'code': 'DO', 'name': 'Dominican Rep.', 'value': 10056181, 'color': layoutColors.primary},
      {'code': 'EC', 'name': 'Ecuador', 'value': 14666055, 'color': layoutColors.success},
      {'code': 'EG', 'name': 'Egypt', 'value': 82536770, 'color': layoutColors.danger},
      {'code': 'SV', 'name': 'El Salvador', 'value': 6227491, 'color': layoutColors.primary},
      {'code': 'GQ', 'name': 'Equatorial Guinea', 'value': 720213, 'color': layoutColors.danger},
      {'code': 'ER', 'name': 'Eritrea', 'value': 5415280, 'color': layoutColors.danger},
      {'code': 'EE', 'name': 'Estonia', 'value': 1340537, 'color': layoutColors.warning},
      {'code': 'ET', 'name': 'Ethiopia', 'value': 84734262, 'color': layoutColors.danger},
      {'code': 'FJ', 'name': 'Fiji', 'value': 868406, 'color': layoutColors.warningDark},
      {'code': 'FI', 'name': 'Finland', 'value': 5384770, 'color': layoutColors.warning},
      {'code': 'FR', 'name': 'France', 'value': 63125894, 'color': layoutColors.warning},
      {'code': 'GA', 'name': 'Gabon', 'value': 1534262, 'color': layoutColors.danger},
      {'code': 'GM', 'name': 'Gambia', 'value': 1776103, 'color': layoutColors.danger},
      {'code': 'GE', 'name': 'Georgia', 'value': 4329026, 'color': layoutColors.warning},
      {'code': 'DE', 'name': 'Germany', 'value': 82162512, 'color': layoutColors.warning},
      {'code': 'GH', 'name': 'Ghana', 'value': 24965816, 'color': layoutColors.danger},
      {'code': 'GR', 'name': 'Greece', 'value': 11390031, 'color': layoutColors.warning},
      {'code': 'GT', 'name': 'Guatemala', 'value': 14757316, 'color': layoutColors.primary},
      {'code': 'GN', 'name': 'Guinea', 'value': 10221808, 'color': layoutColors.danger},
      {'code': 'GW', 'name': 'Guinea-Bissau', 'value': 1547061, 'color': layoutColors.danger},
      {'code': 'GY', 'name': 'Guyana', 'value': 756040, 'color': layoutColors.success},
      {'code': 'HT', 'name': 'Haiti', 'value': 10123787, 'color': layoutColors.primary},
      {'code': 'HN', 'name': 'Honduras', 'value': 7754687, 'color': layoutColors.primary},
      {'code': 'HK', 'name': 'Hong Kong, China', 'value': 7122187, 'color': layoutColors.primaryDark},
      {'code': 'HU', 'name': 'Hungary', 'value': 9966116, 'color': layoutColors.warning},
      {'code': 'IS', 'name': 'Iceland', 'value': 324366, 'color': layoutColors.warning},
      {'code': 'IN', 'name': 'India', 'value': 1241491960, 'color': layoutColors.primaryDark},
      {'code': 'ID', 'name': 'Indonesia', 'value': 242325638, 'color': layoutColors.primaryDark},
      {'code': 'IR', 'name': 'Iran', 'value': 74798599, 'color': layoutColors.primaryDark},
      {'code': 'IQ', 'name': 'Iraq', 'value': 32664942, 'color': layoutColors.primaryDark},
      {'code': 'IE', 'name': 'Ireland', 'value': 4525802, 'color': layoutColors.warning},
      {'code': 'IL', 'name': 'Israel', 'value': 7562194, 'color': layoutColors.primaryDark},
      {'code': 'IT', 'name': 'Italy', 'value': 60788694, 'color': layoutColors.warning},
      {'code': 'JM', 'name': 'Jamaica', 'value': 2751273, 'color': layoutColors.primary},
      {'code': 'JP', 'name': 'Japan', 'value': 126497241, 'color': layoutColors.primaryDark},
      {'code': 'JO', 'name': 'Jordan', 'value': 6330169, 'color': layoutColors.primaryDark},
      {'code': 'KZ', 'name': 'Kazakhstan', 'value': 16206750, 'color': layoutColors.primaryDark},
      {'code': 'KE', 'name': 'Kenya', 'value': 41609728, 'color': layoutColors.danger},
      {'code': 'KP', 'name': 'Korea, Dem. Rep.', 'value': 24451285, 'color': layoutColors.primaryDark},
      {'code': 'KR', 'name': 'Korea, Rep.', 'value': 48391343, 'color': layoutColors.primaryDark},
      {'code': 'KW', 'name': 'Kuwait', 'value': 2818042, 'color': layoutColors.primaryDark},
      {'code': 'KG', 'name': 'Kyrgyzstan', 'value': 5392580, 'color': layoutColors.primaryDark},
      {'code': 'LA', 'name': 'Laos', 'value': 6288037, 'color': layoutColors.primaryDark},
      {'code': 'LV', 'name': 'Latvia', 'value': 2243142, 'color': layoutColors.warning},
      {'code': 'LB', 'name': 'Lebanon', 'value': 4259405, 'color': layoutColors.primaryDark},
      {'code': 'LS', 'name': 'Lesotho', 'value': 2193843, 'color': layoutColors.danger},
      {'code': 'LR', 'name': 'Liberia', 'value': 4128572, 'color': layoutColors.danger},
      {'code': 'LY', 'name': 'Libya', 'value': 6422772, 'color': layoutColors.danger},
      {'code': 'LT', 'name': 'Lithuania', 'value': 3307481, 'color': layoutColors.warning},
      {'code': 'LU', 'name': 'Luxembourg', 'value': 515941, 'color': layoutColors.warning},
      {'code': 'MK', 'name': 'Macedonia, FYR', 'value': 2063893, 'color': layoutColors.warning},
      {'code': 'MG', 'name': 'Madagascar', 'value': 21315135, 'color': layoutColors.danger},
      {'code': 'MW', 'name': 'Malawi', 'value': 15380888, 'color': layoutColors.danger},
      {'code': 'MY', 'name': 'Malaysia', 'value': 28859154, 'color': layoutColors.primaryDark},
      {'code': 'ML', 'name': 'Mali', 'value': 15839538, 'color': layoutColors.danger},
      {'code': 'MR', 'name': 'Mauritania', 'value': 3541540, 'color': layoutColors.danger},
      {'code': 'MU', 'name': 'Mauritius', 'value': 1306593, 'color': layoutColors.danger},
      {'code': 'MX', 'name': 'Mexico', 'value': 114793341, 'color': layoutColors.primary},
      {'code': 'MD', 'name': 'Moldova', 'value': 3544864, 'color': layoutColors.warning},
      {'code': 'MN', 'name': 'Mongolia', 'value': 2800114, 'color': layoutColors.primaryDark},
      {'code': 'ME', 'name': 'Montenegro', 'value': 632261, 'color': layoutColors.warning},
      {'code': 'MA', 'name': 'Morocco', 'value': 32272974, 'color': layoutColors.danger},
      {'code': 'MZ', 'name': 'Mozambique', 'value': 23929708, 'color': layoutColors.danger},
      {'code': 'MM', 'name': 'Myanmar', 'value': 48336763, 'color': layoutColors.primaryDark},
      {'code': 'NA', 'name': 'Namibia', 'value': 2324004, 'color': layoutColors.danger},
      {'code': 'NP', 'name': 'Nepal', 'value': 30485798, 'color': layoutColors.primaryDark},
      {'code': 'NL', 'name': 'Netherlands', 'value': 16664746, 'color': layoutColors.warning},
      {'code': 'NZ', 'name': 'New Zealand', 'value': 4414509, 'color': layoutColors.warningDark},
      {'code': 'NI', 'name': 'Nicaragua', 'value': 5869859, 'color': layoutColors.primary},
      {'code': 'NE', 'name': 'Niger', 'value': 16068994, 'color': layoutColors.danger},
      {'code': 'NG', 'name': 'Nigeria', 'value': 162470737, 'color': layoutColors.danger},
      {'code': 'NO', 'name': 'Norway', 'value': 4924848, 'color': layoutColors.warning},
      {'code': 'OM', 'name': 'Oman', 'value': 2846145, 'color': layoutColors.primaryDark},
      {'code': 'PK', 'name': 'Pakistan', 'value': 176745364, 'color': layoutColors.primaryDark},
      {'code': 'PA', 'name': 'Panama', 'value': 3571185, 'color': layoutColors.primary},
      {'code': 'PG', 'name': 'Papua New Guinea', 'value': 7013829, 'color': layoutColors.warningDark},
      {'code': 'PY', 'name': 'Paraguay', 'value': 6568290, 'color': layoutColors.success},
      {'code': 'PE', 'name': 'Peru', 'value': 29399817, 'color': layoutColors.success},
      {'code': 'PH', 'name': 'Philippines', 'value': 94852030, 'color': layoutColors.primaryDark},
      {'code': 'PL', 'name': 'Poland', 'value': 38298949, 'color': layoutColors.warning},
      {'code': 'PT', 'name': 'Portugal', 'value': 10689663, 'color': layoutColors.warning},
      {'code': 'PR', 'name': 'Puerto Rico', 'value': 3745526, 'color': layoutColors.primary},
      {'code': 'QA', 'name': 'Qatar', 'value': 1870041, 'color': layoutColors.primaryDark},
      {'code': 'RO', 'name': 'Romania', 'value': 21436495, 'color': layoutColors.warning},
      {'code': 'RU', 'name': 'Russia', 'value': 142835555, 'color': layoutColors.warning},
      {'code': 'RW', 'name': 'Rwanda', 'value': 10942950, 'color': layoutColors.danger},
      {'code': 'SA', 'name': 'Saudi Arabia', 'value': 28082541, 'color': layoutColors.primaryDark},
      {'code': 'SN', 'name': 'Senegal', 'value': 12767556, 'color': layoutColors.danger},
      {'code': 'RS', 'name': 'Serbia', 'value': 9853969, 'color': layoutColors.warning},
      {'code': 'SL', 'name': 'Sierra Leone', 'value': 5997486, 'color': layoutColors.danger},
      {'code': 'SG', 'name': 'Singapore', 'value': 5187933, 'color': layoutColors.primaryDark},
      {'code': 'SK', 'name': 'Slovak Republic', 'value': 5471502, 'color': layoutColors.warning},
      {'code': 'SI', 'name': 'Slovenia', 'value': 2035012, 'color': layoutColors.warning},
      {'code': 'SB', 'name': 'Solomon Islands', 'value': 552267, 'color': layoutColors.warningDark},
      {'code': 'SO', 'name': 'Somalia', 'value': 9556873, 'color': layoutColors.danger},
      {'code': 'ZA', 'name': 'South Africa', 'value': 50459978, 'color': layoutColors.danger},
      {'code': 'ES', 'name': 'Spain', 'value': 46454895, 'color': layoutColors.warning},
      {'code': 'LK', 'name': 'Sri Lanka', 'value': 21045394, 'color': layoutColors.primaryDark},
      {'code': 'SD', 'name': 'Sudan', 'value': 34735288, 'color': layoutColors.danger},
      {'code': 'SR', 'name': 'Suriname', 'value': 529419, 'color': layoutColors.success},
      {'code': 'SZ', 'name': 'Swaziland', 'value': 1203330, 'color': layoutColors.danger},
      {'code': 'SE', 'name': 'Sweden', 'value': 9440747, 'color': layoutColors.warning},
      {'code': 'CH', 'name': 'Switzerland', 'value': 7701690, 'color': layoutColors.warning},
      {'code': 'SY', 'name': 'Syria', 'value': 20766037, 'color': layoutColors.primaryDark},
      {'code': 'TW', 'name': 'Taiwan', 'value': 23072000, 'color': layoutColors.primaryDark},
      {'code': 'TJ', 'name': 'Tajikistan', 'value': 6976958, 'color': layoutColors.primaryDark},
      {'code': 'TZ', 'name': 'Tanzania', 'value': 46218486, 'color': layoutColors.danger},
      {'code': 'TH', 'name': 'Thailand', 'value': 69518555, 'color': layoutColors.primaryDark},
      {'code': 'TG', 'name': 'Togo', 'value': 6154813, 'color': layoutColors.danger},
      {'code': 'TT', 'name': 'Trinidad and Tobago', 'value': 1346350, 'color': layoutColors.primary},
      {'code': 'TN', 'name': 'Tunisia', 'value': 10594057, 'color': layoutColors.danger},
      {'code': 'TR', 'name': 'Turkey', 'value': 73639596, 'color': layoutColors.warning},
      {'code': 'TM', 'name': 'Turkmenistan', 'value': 5105301, 'color': layoutColors.primaryDark},
      {'code': 'UG', 'name': 'Uganda', 'value': 34509205, 'color': layoutColors.danger},
      {'code': 'UA', 'name': 'Ukraine', 'value': 45190180, 'color': layoutColors.warning},
      {'code': 'AE', 'name': 'United Arab Emirates', 'value': 7890924, 'color': layoutColors.primaryDark},
      {'code': 'GB', 'name': 'United Kingdom', 'value': 62417431, 'color': layoutColors.warning},
      {'code': 'US', 'name': 'United States', 'value': 313085380, 'color': layoutColors.primary},
      {'code': 'UY', 'name': 'Uruguay', 'value': 3380008, 'color': layoutColors.success},
      {'code': 'UZ', 'name': 'Uzbekistan', 'value': 27760267, 'color': layoutColors.primaryDark},
      {'code': 'VE', 'name': 'Venezuela', 'value': 29436891, 'color': layoutColors.success},
      {'code': 'PS', 'name': 'West Bank and Gaza', 'value': 4152369, 'color': layoutColors.primaryDark},
      {'code': 'VN', 'name': 'Vietnam', 'value': 88791996, 'color': layoutColors.primaryDark},
      {'code': 'YE', 'name': 'Yemen, Rep.', 'value': 24799880, 'color': layoutColors.primaryDark},
      {'code': 'ZM', 'name': 'Zambia', 'value': 13474959, 'color': layoutColors.danger},
      {'code': 'ZW', 'name': 'Zimbabwe', 'value': 12754378, 'color': layoutColors.danger}
    ];

    var map;
    var minBulletSize = 3;
    var maxBulletSize = 70;
    var min = Infinity;
    var max = -Infinity;

    // get min and max values
    for (var i = 0; i < mapData.length; i++) {
      var value = mapData[i].value;
      if (value < min) {
        min = value;
      }
      if (value > max) {
        max = value;
      }
    }

    // build map
    AmCharts.theme = AmCharts.themes.blur;
    map = new AmCharts.AmMap();

    map.addTitle('Population of the World in 2011', 14);
    map.addTitle('source: Gapminder', 11);
    map.areasSettings = {
      unlistedAreasColor: '#000000',
      unlistedAreasAlpha: 0.1
    };
    map.imagesSettings.balloonText = '<span style="font-size:14px;"><b>[[title]]</b>: [[value]]</span>';
    map.pathToImages = layoutPaths.images.amMap;

    var dataProvider = {
      mapVar: AmCharts.maps.worldLow,
      images: []
    };

    // it's better to use circle square to show difference between values, not a radius
    var maxSquare = maxBulletSize * maxBulletSize * 2 * Math.PI;
    var minSquare = minBulletSize * minBulletSize * 2 * Math.PI;

    // create circle for each country
    for (var i = 0; i < mapData.length; i++) {
      var dataItem = mapData[i];
      var value = dataItem.value;
      // calculate size of a bubble
      var square = (value - min) / (max - min) * (maxSquare - minSquare) + minSquare;
      if (square < minSquare) {
        square = minSquare;
      }
      var size = Math.sqrt(square / (Math.PI * 2));
      var id = dataItem.code;

      dataProvider.images.push({
        type: 'circle',
        width: size,
        height: size,
        color: dataItem.color,
        longitude: latlong[id].longitude,
        latitude: latlong[id].latitude,
        title: dataItem.name,
        value: value
      });
    }

    map.dataProvider = dataProvider;
    map.export = {
      enabled: true
    };

    $timeout(function() {
      map.write('map-bubbles');
    }, 100);
  }

})();

/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  MapLinesPageCtrl.$inject = ["baConfig", "$timeout", "layoutPaths"];
  angular.module('BlurAdmin.pages.maps')
      .controller('MapLinesPageCtrl', MapLinesPageCtrl);

  /** @ngInject */
  function MapLinesPageCtrl(baConfig, $timeout, layoutPaths) {
    var layoutColors = baConfig.colors;
    // svg path for target icon
    var targetSVG = 'M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z';
// svg path for plane icon
    var planeSVG = 'M19.671,8.11l-2.777,2.777l-3.837-0.861c0.362-0.505,0.916-1.683,0.464-2.135c-0.518-0.517-1.979,0.278-2.305,0.604l-0.913,0.913L7.614,8.804l-2.021,2.021l2.232,1.061l-0.082,0.082l1.701,1.701l0.688-0.687l3.164,1.504L9.571,18.21H6.413l-1.137,1.138l3.6,0.948l1.83,1.83l0.947,3.598l1.137-1.137V21.43l3.725-3.725l1.504,3.164l-0.687,0.687l1.702,1.701l0.081-0.081l1.062,2.231l2.02-2.02l-0.604-2.689l0.912-0.912c0.326-0.326,1.121-1.789,0.604-2.306c-0.452-0.452-1.63,0.101-2.135,0.464l-0.861-3.838l2.777-2.777c0.947-0.947,3.599-4.862,2.62-5.839C24.533,4.512,20.618,7.163,19.671,8.11z';
    $timeout(function() {
      var map = AmCharts.makeChart( 'map-lines', {
        type: 'map',
        theme: 'blur',
        dataProvider: {
          map: 'worldLow',
          linkToObject: 'london',
          images: [ {
            id: 'london',
            svgPath: targetSVG,
            title: 'London',
            latitude: 51.5002,
            longitude: -0.1262,
            scale: 1.5,
            zoomLevel: 2.74,
            zoomLongitude: -20.1341,
            zoomLatitude: 49.1712,

            lines: [ {
              latitudes: [ 51.5002, 50.4422 ],
              longitudes: [ -0.1262, 30.5367 ]
            }, {
              latitudes: [ 51.5002, 46.9480 ],
              longitudes: [ -0.1262, 7.4481 ]
            }, {
              latitudes: [ 51.5002, 59.3328 ],
              longitudes: [ -0.1262, 18.0645 ]
            }, {
              latitudes: [ 51.5002, 40.4167 ],
              longitudes: [ -0.1262, -3.7033 ]
            }, {
              latitudes: [ 51.5002, 46.0514 ],
              longitudes: [ -0.1262, 14.5060 ]
            }, {
              latitudes: [ 51.5002, 48.2116 ],
              longitudes: [ -0.1262, 17.1547 ]
            }, {
              latitudes: [ 51.5002, 44.8048 ],
              longitudes: [ -0.1262, 20.4781 ]
            }, {
              latitudes: [ 51.5002, 55.7558 ],
              longitudes: [ -0.1262, 37.6176 ]
            }, {
              latitudes: [ 51.5002, 38.7072 ],
              longitudes: [ -0.1262, -9.1355 ]
            }, {
              latitudes: [ 51.5002, 54.6896 ],
              longitudes: [ -0.1262, 25.2799 ]
            }, {
              latitudes: [ 51.5002, 64.1353 ],
              longitudes: [ -0.1262, -21.8952 ]
            }, {
              latitudes: [ 51.5002, 40.4300 ],
              longitudes: [ -0.1262, -74.0000 ]
            } ],

            images: [ {
              label: 'Flights from London',
              svgPath: planeSVG,
              left: 100,
              top: 45,
              labelShiftY: 5,
              labelShiftX: 5,
              color: layoutColors.defaultText,
              labelColor: layoutColors.defaultText,
              labelRollOverColor: layoutColors.defaultText,
              labelFontSize: 20
            }, {
              label: 'show flights from Vilnius',
              left: 106,
              top: 70,
              labelColor: layoutColors.defaultText,
              labelRollOverColor: layoutColors.defaultText,
              labelFontSize: 11,
              linkToObject: 'vilnius'
            } ]
          },

            {
              id: 'vilnius',
              svgPath: targetSVG,
              title: 'Vilnius',
              latitude: 54.6896,
              longitude: 25.2799,
              scale: 1.5,
              zoomLevel: 4.92,
              zoomLongitude: 15.4492,
              zoomLatitude: 50.2631,

              lines: [ {
                latitudes: [ 54.6896, 50.8371 ],
                longitudes: [ 25.2799, 4.3676 ]
              }, {
                latitudes: [ 54.6896, 59.9138 ],
                longitudes: [ 25.2799, 10.7387 ]
              }, {
                latitudes: [ 54.6896, 40.4167 ],
                longitudes: [ 25.2799, -3.7033 ]
              }, {
                latitudes: [ 54.6896, 50.0878 ],
                longitudes: [ 25.2799, 14.4205 ]
              }, {
                latitudes: [ 54.6896, 48.2116 ],
                longitudes: [ 25.2799, 17.1547 ]
              }, {
                latitudes: [ 54.6896, 44.8048 ],
                longitudes: [ 25.2799, 20.4781 ]
              }, {
                latitudes: [ 54.6896, 55.7558 ],
                longitudes: [ 25.2799, 37.6176 ]
              }, {
                latitudes: [ 54.6896, 37.9792 ],
                longitudes: [ 25.2799, 23.7166 ]
              }, {
                latitudes: [ 54.6896, 54.6896 ],
                longitudes: [ 25.2799, 25.2799 ]
              }, {
                latitudes: [ 54.6896, 51.5002 ],
                longitudes: [ 25.2799, -0.1262 ]
              }, {
                latitudes: [ 54.6896, 53.3441 ],
                longitudes: [ 25.2799, -6.2675 ]
              } ],

              images: [ {
                label: 'Flights from Vilnius',
                svgPath: planeSVG,
                left: 100,
                top: 45,
                labelShiftY: 5,
                labelShiftX: 5,
                color: layoutColors.defaultText,
                labelColor: layoutColors.defaultText,
                labelRollOverColor: layoutColors.defaultText,
                labelFontSize: 20
              }, {
                label: 'show flights from London',
                left: 106,
                top: 70,
                labelColor: layoutColors.defaultText,
                labelRollOverColor: layoutColors.defaultText,
                labelFontSize: 11,
                linkToObject: 'london'
              } ]
            }, {
              svgPath: targetSVG,
              title: 'Brussels',
              latitude: 50.8371,
              longitude: 4.3676
            }, {
              svgPath: targetSVG,
              title: 'Prague',
              latitude: 50.0878,
              longitude: 14.4205
            }, {
              svgPath: targetSVG,
              title: 'Athens',
              latitude: 37.9792,
              longitude: 23.7166
            }, {
              svgPath: targetSVG,
              title: 'Reykjavik',
              latitude: 64.1353,
              longitude: -21.8952
            }, {
              svgPath: targetSVG,
              title: 'Dublin',
              latitude: 53.3441,
              longitude: -6.2675
            }, {
              svgPath: targetSVG,
              title: 'Oslo',
              latitude: 59.9138,
              longitude: 10.7387
            }, {
              svgPath: targetSVG,
              title: 'Lisbon',
              latitude: 38.7072,
              longitude: -9.1355
            }, {
              svgPath: targetSVG,
              title: 'Moscow',
              latitude: 55.7558,
              longitude: 37.6176
            }, {
              svgPath: targetSVG,
              title: 'Belgrade',
              latitude: 44.8048,
              longitude: 20.4781
            }, {
              svgPath: targetSVG,
              title: 'Bratislava',
              latitude: 48.2116,
              longitude: 17.1547
            }, {
              svgPath: targetSVG,
              title: 'Ljubljana',
              latitude: 46.0514,
              longitude: 14.5060
            }, {
              svgPath: targetSVG,
              title: 'Madrid',
              latitude: 40.4167,
              longitude: -3.7033
            }, {
              svgPath: targetSVG,
              title: 'Stockholm',
              latitude: 59.3328,
              longitude: 18.0645
            }, {
              svgPath: targetSVG,
              title: 'Bern',
              latitude: 46.9480,
              longitude: 7.4481
            }, {
              svgPath: targetSVG,
              title: 'Kiev',
              latitude: 50.4422,
              longitude: 30.5367
            }, {
              svgPath: targetSVG,
              title: 'Paris',
              latitude: 48.8567,
              longitude: 2.3510
            }, {
              svgPath: targetSVG,
              title: 'New York',
              latitude: 40.43,
              longitude: -74
            }
          ]
        },

        areasSettings: {
          unlistedAreasColor: layoutColors.info
        },

        imagesSettings: {
          color: layoutColors.warningLight,
          selectedColor: layoutColors.warning
        },

        linesSettings: {
          color: layoutColors.warningLight,
          alpha: 0.8
        },


        backgroundZoomsToTop: true,
        linesAboveImages: true,

        export: {
          'enabled': true
        },
        pathToImages: layoutPaths.images.amMap
      } );
    }, 100);

  }

})();

/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  GmapPageCtrl.$inject = ["$timeout"];
  angular.module('BlurAdmin.pages.maps')
      .controller('GmapPageCtrl', GmapPageCtrl);

  /** @ngInject */
  function GmapPageCtrl($timeout) {
    function initialize() {
      var mapCanvas = document.getElementById('google-maps');
      var mapOptions = {
        center: new google.maps.LatLng(44.5403, -78.5463),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(mapCanvas, mapOptions);
    }

    $timeout(function(){
      initialize();
    }, 100);
  }

})();

/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  ButtonPageCtrl.$inject = ["$scope", "$timeout"];
  angular.module('BlurAdmin.pages.ui.buttons')
      .controller('ButtonPageCtrl', ButtonPageCtrl);

  /** @ngInject */
  function ButtonPageCtrl($scope, $timeout) {
    $scope.progressFunction = function() {
      return $timeout(function() {}, 3000);
    };
  }

})();

/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  IconsPageCtrl.$inject = ["$scope"];
  angular.module('BlurAdmin.pages.ui.icons')
      .controller('IconsPageCtrl', IconsPageCtrl);

  /** @ngInject */
  function IconsPageCtrl($scope) {
    $scope.icons = {
      kameleonIcons: [
        {
          name: 'Beach',
          img: 'Beach'
        },
        {
          name: 'Bus',
          img: 'Bus'
        },
        {
          name: 'Cheese',
          img: 'Cheese'
        },
        {
          name: 'Desert',
          img: 'Desert'
        },
        {
          name: 'Images',
          img: 'Images'
        },
        {
          name: 'Magician',
          img: 'Magician'
        },
        {
          name: 'Makeup',
          img: 'Makeup'
        },
        {
          name: 'Programming',
          img: 'Programming'
        },
        {
          name: 'Shop',
          img: 'Shop'
        },
        {
          name: 'Surfer',
          img: 'Surfer'
        },
        {
          name: 'Phone Booth',
          img: 'Phone-Booth'
        },
        {
          name: 'Ninja',
          img: 'Ninja'
        },
        {
          name: 'Apartment',
          img: 'Apartment'
        },
        {
          name: 'Batman',
          img: 'Batman'
        },
        {
          name: 'Medal',
          img: 'Medal-2'
        },
        {
          name: 'Money',
          img: 'Money-Increase'
        },
        {
          name: 'Street View',
          img: 'Street-View'
        },
        {
          name: 'Student',
          img: 'Student-3'
        },
        {
          name: 'Bell',
          img: 'Bell'
        },
        {
          name: 'Woman',
          img: 'Boss-5'
        },
        {
          name: 'Euro',
          img: 'Euro-Coin'
        },
        {
          name: 'Chessboard',
          img: 'Chessboard'
        },
        {
          name: 'Burglar',
          img: 'Burglar'
        },
        {
          name: 'Dna',
          img: 'Dna'
        },
        {
          name: 'Clipboard Plan',
          img: 'Clipboard-Plan'
        },
        {
          name: 'Boss',
          img: 'Boss-3'
        },
        {
          name: 'Key',
          img: 'Key'
        },
        {
          name: 'Surgeon',
          img: 'Surgeon'
        },
        {
          name: 'Hacker',
          img: 'Hacker'
        },
        {
          name: 'Santa',
          img: 'Santa'
        }
      ],
      kameleonRoundedIcons: [
        {
          color: 'success',
          img: 'Apartment',
          name: 'Apartment'
        },
        {
          color: 'warning',
          img: 'Bus',
          name: 'Bus'
        },
        {
          color: 'primary',
          img: 'Checklist',
          name: 'Checklist'
        },
        {
          color: 'warning',
          img: 'Desert',
          name: 'Desert'
        },
        {
          color: 'danger',
          img: 'Laptop-Signal',
          name: 'Laptop Signal'
        },
        {
          color: 'info',
          img: 'Love-Letter',
          name: 'Love Letter'
        },
        {
          color: 'success',
          img: 'Makeup',
          name: 'Makeup'
        },
        {
          color: 'primary',
          img: 'Santa',
          name: 'Santa'
        },
        {
          color: 'success',
          img: 'Surfer',
          name: 'Surfer'
        },
        {
          color: 'info',
          img: 'Vector',
          name: 'Vector'
        },
        {
          color: 'warning',
          img: 'Money-Increase',
          name: 'Money Increase'
        },
        {
          color: 'info',
          img: 'Alien',
          name: 'Alien'
        },
        {
          color: 'danger',
          img: 'Online-Shopping',
          name: 'Online Shopping'
        },
        {
          color: 'warning',
          img: 'Euro-Coin',
          name: 'Euro'
        },
        {
          color: 'info',
          img: 'Boss-3',
          name: 'Boss'
        }
      ],
      ionicons: ['ion-ionic', 'ion-arrow-right-b', 'ion-arrow-down-b', 'ion-arrow-left-b', 'ion-arrow-up-c', 'ion-arrow-right-c', 'ion-arrow-down-c', 'ion-arrow-left-c', 'ion-arrow-return-right', 'ion-arrow-return-left', 'ion-arrow-swap', 'ion-arrow-shrink', 'ion-arrow-expand', 'ion-arrow-move', 'ion-arrow-resize', 'ion-chevron-up', 'ion-chevron-right', 'ion-chevron-down', 'ion-chevron-left', 'ion-navicon-round', 'ion-navicon', 'ion-drag', 'ion-log-in', 'ion-log-out', 'ion-checkmark-round', 'ion-checkmark', 'ion-checkmark-circled', 'ion-close-round', 'ion-plus-round', 'ion-minus-round', 'ion-information', 'ion-help', 'ion-backspace-outline', 'ion-help-buoy', 'ion-asterisk', 'ion-alert', 'ion-alert-circled', 'ion-refresh', 'ion-loop', 'ion-shuffle', 'ion-home', 'ion-search', 'ion-flag', 'ion-star', 'ion-heart', 'ion-heart-broken', 'ion-gear-a', 'ion-gear-b', 'ion-toggle-filled', 'ion-toggle', 'ion-settings', 'ion-wrench', 'ion-hammer', 'ion-edit', 'ion-trash-a', 'ion-trash-b', 'ion-document', 'ion-document-text', 'ion-clipboard', 'ion-scissors', 'ion-funnel', 'ion-bookmark', 'ion-email', 'ion-email-unread', 'ion-folder', 'ion-filing', 'ion-archive', 'ion-reply', 'ion-reply-all', 'ion-forward'],
      fontAwesomeIcons: ['fa fa-adjust', 'fa fa-anchor', 'fa fa-archive', 'fa fa-area-chart', 'fa fa-arrows', 'fa fa-arrows-h', 'fa fa-arrows-v', 'fa fa-asterisk', 'fa fa-at', 'fa fa-automobile', 'fa fa-ban', 'fa fa-bank', 'fa fa-bar-chart', 'fa fa-bar-chart-o', 'fa fa-barcode', 'fa fa-bars', 'fa fa-bed', 'fa fa-beer', 'fa fa-bell', 'fa fa-bell-o', 'fa fa-bell-slash', 'fa fa-bell-slash-o', 'fa fa-bicycle', 'fa fa-binoculars', 'fa fa-birthday-cake', 'fa fa-bolt', 'fa fa-bomb', 'fa fa-book', 'fa fa-bookmark', 'fa fa-bookmark-o', 'fa fa-briefcase', 'fa fa-bug', 'fa fa-building', 'fa fa-building-o', 'fa fa-bullhorn'],
      socicon: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', ',', ';', ':', '+', '@', '=', '-', '^', '?', '$', '*', '&', '(', '#', '.', '_', ']', ')', '\'', '"', '}', '{']
    }
  }

})();

/**
 * @author a.demeshko
 * created on 18.01.2016
 */
(function () {
  'use strict';

  ModalsPageCtrl.$inject = ["$scope", "$uibModal", "baProgressModal"];
  angular.module('BlurAdmin.pages.ui.notifications')
    .controller('ModalsPageCtrl', ModalsPageCtrl);

  /** @ngInject */
  function ModalsPageCtrl($scope, $uibModal, baProgressModal) {
    $scope.open = function (page, size) {
      $uibModal.open({
        animation: true,
        templateUrl: page,
        size: size,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });
    };
    $scope.openProgressDialog = baProgressModal.open;
  }


})();

/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  NotificationsPageCtrl.$inject = ["$scope", "toastr", "toastrConfig"];
  angular.module('BlurAdmin.pages.ui.notifications')
      .controller('NotificationsPageCtrl', NotificationsPageCtrl);

  /** @ngInject */
  function NotificationsPageCtrl($scope, toastr, toastrConfig) {
    var defaultConfig = angular.copy(toastrConfig);
    $scope.types = ['success', 'error', 'info', 'warning'];

    $scope.quotes = [
      {
        title: 'Come to Freenode',
        message: 'We rock at <em>#angularjs</em>',
        options: {
          allowHtml: true
        }
      },
      {
        title: 'Looking for bootstrap?',
        message: 'Try ui-bootstrap out!'
      },
      {
        title: 'Wants a better router?',
        message: 'We have you covered with ui-router'
      },
      {
        title: 'Angular 2',
        message: 'Is gonna rock the world'
      },
      {
        title: null,
        message: 'Titles are not always needed'
      },
      {
        title: null,
        message: 'Toastr rock!'
      },
      {
        title: 'What about nice html?',
        message: '<strong>Sure you <em>can!</em></strong>',
        options: {
          allowHtml: true
        }
      },
      {
        title: 'Ionic is <em>cool</em>',
        message: 'Best mobile framework ever',
        options: {
          allowHtml: true
        }
      }
    ];

    var openedToasts = [];
    $scope.options = {
      autoDismiss: false,
      positionClass: 'toast-top-right',
      type: 'info',
      timeOut: '5000',
      extendedTimeOut: '2000',
      allowHtml: false,
      closeButton: false,
      tapToDismiss: true,
      progressBar: false,
      newestOnTop: true,
      maxOpened: 0,
      preventDuplicates: false,
      preventOpenDuplicates: false,
      title: "Some title here",
      msg: "Type your message here"
    };


    $scope.clearLastToast = function () {
      var toast = openedToasts.pop();
      toastr.clear(toast);
    };

    $scope.clearToasts = function () {
      toastr.clear();
    };

    $scope.openRandomToast = function () {
      var type = Math.floor(Math.random() * $scope.types.length);
      var quote = Math.floor(Math.random() * $scope.quotes.length);
      var toastType = $scope.types[type];
      var toastQuote = $scope.quotes[quote];
      openedToasts.push(toastr[toastType](toastQuote.message, toastQuote.title, toastQuote.options));
      $scope.optionsStr = "toastr." + toastType + "(\'" + toastQuote.message + "\', \'" + toastQuote.title + "', " + JSON.stringify(toastQuote.options || {}, null, 2) + ")";
    };

    $scope.openToast = function () {
      angular.extend(toastrConfig, $scope.options);
      openedToasts.push(toastr[$scope.options.type]($scope.options.msg, $scope.options.title));
      var strOptions = {};
      for (var o in  $scope.options) if (o != 'msg' && o != 'title')strOptions[o] = $scope.options[o];
      $scope.optionsStr = "toastr." + $scope.options.type + "(\'" + $scope.options.msg + "\', \'" + $scope.options.title + "\', " + JSON.stringify(strOptions, null, 2) + ")";
    };

    $scope.$on('$destroy', function iVeBeenDismissed() {
      angular.extend(toastrConfig, defaultConfig);
    })
  }

})();

/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  LeafletPageCtrl.$inject = ["$timeout"];
  angular.module('BlurAdmin.pages.maps')
      .controller('LeafletPageCtrl', LeafletPageCtrl);

  /** @ngInject */
  function LeafletPageCtrl($timeout) {
    function initialize() {
      L.Icon.Default.imagePath = 'assets/img/theme/vendor/leaflet/dist/images';
      var map = L.map(document.getElementById('leaflet-map')).setView([51.505, -0.09], 13);
      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      L.marker([51.5, -0.09]).addTo(map)
          .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
          .openPopup();
    }

    $timeout(function(){
      initialize();
    }, 100);

  }

})();

/**
 * @author a.demeshko
 * created on 12/29/15
 */
(function () {
  'use strict';

  mailMessages.$inject = ["$sce"];
  angular.module('BlurAdmin.pages.components.mail')
    .service('mailMessages', mailMessages);

  /** @ngInject */
  function mailMessages($sce) {
    var messages = [
      {
        "id": "4563faass",
        "name": "Nasta Linnie",
        "subject": "Great text",
        "date": "2015-08-28T07:57:09",
        "body": $sce.trustAsHtml("<p>Hey John, </p><p>Check out this cool text.</p>"),
        "pic": "img/Nasta.png",
        "email": "petraramsey@mail.com",
        "attachment": "poem.txt",
        "position": "Great Employee",
        "tag": "friend",
        "labels": ['inbox']
      },
      {
        "id": "4563fdfvd",
        "name": "Nasta Linnie",
        "subject": "Lores ipsum",
        "date": "2015-11-19T03:30:45",
        "important": false,
        "body": $sce.trustAsHtml("<p>Hey John, </p><br><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ex mauris, ultrices vel lectus quis, scelerisque hendrerit ipsum. Suspendisse ullamcorper turpis neque, eget dapibus magna placerat ac. Suspendisse rhoncus ligula ac mi tempus varius ut sed lacus. Sed et commodo nulla, et placerat leo. Nam rhoncus vulputate sem non pharetra. Praesent fringilla massa in laoreet convallis. Aliquam lobortis dui a congue facilisis. Aenean dapibus semper semper. Quisque aliquam, nibh dapibus interdum condimentum, ex velit tempor tortor, at vestibulum magna leo quis leo. Morbi pulvinar varius erat ac rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst.</p>" +
          "<br><p>Cras rhoncus quam ipsum, vel dignissim nisl egestas sed. Aliquam erat volutpat. Integer eu nisl elit. Donec malesuada diam vitae tellus luctus tincidunt. Donec tempus blandit neque, rutrum egestas ipsum sagittis tempor. Curabitur volutpat ligula enim, nec vehicula purus molestie at. Sed a facilisis enim, nec molestie magna. Donec in augue non est viverra dapibus vel tempus risus. Nam porttitor purus sit amet hendrerit ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>"),
        "pic": "img/Nasta.png",
        "email": "petraramsey@mail.com",
        "position": "Great Employee",
        "tag": "study",
        "labels": ['inbox']
      },
      {
        "id": "4563zxcss",
        "name": "Nasta Linnie",
        "subject": "Lores ipsum",
        "date": "2015-10-19T03:30:45",
        "important": false,
        "body": $sce.trustAsHtml("<p>Hey Nasta, </p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>"),
        "pic": "img/Nasta.png",
        "email": "petraramsey@mail.com",
        "position": "Great Employee",
        "tag": "work",
        "labels": ['sent', 'important']
      },
      {
        "id": "8955sddf",
        "name": "Nick Cat",
        "subject": "New Design",
        "date": "2015-05-05T12:59:45",
        "body": $sce.trustAsHtml("<p>Hey John, Consectetur adipiscing elit</p><br>" +
          "<p>Cras rhoncus quam ipsum, vel dignissim nisl egestas sed. Aliquam erat volutpat. Integer eu nisl elit. Donec malesuada diam vitae tellus luctus tincidunt. Donec tempus blandit neque, rutrum egestas ipsum sagittis tempor. Curabitur volutpat ligula enim, nec vehicula purus molestie at. Sed a facilisis enim, nec molestie magna. Donec in augue non est viverra dapibus vel tempus risus. Nam porttitor purus sit amet hendrerit ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>"),
        "pic": "img/Nick.png",
        "email": "barlowshort@mail.com",
        "position": "Graphical designer",
        "attachment": "design.psd",
        "tag": "work",
        "labels": ['inbox']
      },
      {
        "id": "8955sdfcc",
        "name": "Nick Cat",
        "subject": "Gift card",
        "date": "2015-07-18T10:19:01",
        "body": $sce.trustAsHtml("<p>Hey John, </p><br><p>Consectetur adipiscing elit, Lorem ipsum dolor sit amet</p>"),
        "pic": "img/Nick.png",
        "email": "barlowshort@mail.com",
        "position": "Graphical designer",
        "tag": "study",
        "labels": ['inbox']
      },
      {
        "id": "8955asewf",
        "name": "Nick Cat",
        "subject": "Some news",
        "date": "2015-09-23T03:04:10",
        "body": $sce.trustAsHtml("<p>Hey John, </p><br><p>Integer eu nisl elit. Donec malesuada diam vitae tellus luctus tincidunt. Donec tempus blandit neque, rutrum egestas ipsum sagittis tempor. Curabitur volutpat ligula enim, nec vehicula purus molestie at. Sed a facilisis enim, nec molestie magna. Donec in augue non est viverra dapibus vel tempus risus. Nam porttitor purus sit amet hendrerit ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>"),
        "pic": "img/Nick.png",
        "email": "barlowshort@mail.com",
        "position": "Graphical designer",
        "tag": "work",
        "labels": ['inbox', 'important']
      },
      {
        "id": "2334uudsa",
        "name": "Kostya Danovsky",
        "subject": "Street Art",
        "date": "2015-11-22T10:05:09",
        "body": $sce.trustAsHtml("<p>Hey John, </p><p>Aliquam eu facilisis eros, quis varius est.</p>" +
          "<p>Consectetur adipiscing elit. Aliquam sodales sem in nibh pellentesque, ac dignissim mi dapibus.</p>" +
          "<p>Lorem ipsum dolor sit amet! Nullam imperdiet justo a ipsum laoreet euismod.</p>" +
          "<br><p>Cras tincidunt fermentum lectus, quis scelerisque lorem volutpat sed." +
          "Sed quis orci sed nisl sagittis viverra id at mauris. Nam venenatis mi nibh. Sed fringilla mattis vehic</p>"),
        "pic": "img/Kostya.png",
        "email": "schwart@mail.com",
        "position": "Technical Chef",
        "attachment": "file.doc",
        "tag": "family",
        "labels": ['inbox', 'important']
      },
      {
        "id": "2334aefvv",
        "name": "Kostya Danovsky",
        "subject": "New product",
        "date": "2015-06-22T06:26:10",
        "body": $sce.trustAsHtml("<p>Hello John, </p><p>Lorem ipsum dolor sit amet!</p>" +
          "<p>Consectetur adipiscing elit. Aliquam sodales sem in nibh pellentesque, ac dignissim mi dapibus.</p>" +
          "<p>Aliquam eu facilisis eros, quis varius est. Nullam imperdiet justo a ipsum laoreet euismod.</p>" +
          "<br><p>Nulla facilisi. Nulla congue, arcu eget blandit lacinia, leo ante ullamcorper lectus, vel pulvinar justo ipsum vitae justo." +
          "Cras tincidunt fermentum lectus, quis scelerisque lorem volutpat sed. Sed quis orci sed nisl sagittis viverra id at mauris. Nam venenatis mi nibh. Sed fringilla mattis vehic</p>"),
        "pic": "img/Kostya.png",
        "email": "schwart@mail.com",
        "position": "Technical Chef",
        "tag": "family",
        "labels": ['inbox', 'important']
      },
      {
        "id": "2334cvdss",
        "name": "Kostya Danovsky",
        "subject": "Old product",
        "date": "2015-06-22T06:26:10",
        "body": $sce.trustAsHtml("<p>Hello John, </p>" +
          "<p>Consectetur adipiscing elit. Aliquam sodales sem in nibh pellentesque, ac dignissim mi dapibus.</p>" +
          "<br>"+
          "<p>Cras tincidunt fermentum lectus, quis scelerisque lorem volutpat sed. Sed quis orci sed nisl sagittis viverra id at mauris. Nam venenatis mi nibh. Sed fringilla mattis vehic</p>"),
        "pic": "img/Kostya.png",
        "email": "schwart@mail.com",
        "position": "Technical Chef",
        "tag": "study",
        "labels": ['trash']
      },
      {
        "id": "8223xzxfn",
        "name": "Andrey Hrabouski",
        "subject": "Skype moji",
        "date": "2015-07-16T06:47:53",
        "body": $sce.trustAsHtml("<p>Hello John, </p><p>Aliquam sodales sem in nibh pellentesque</p>" +
          "<p>Lorem ipsum dolor I find moji in skype sit amet!.</p>"),
        "pic": "img/Andrey.png",
        "email": "lakeishaphillips@mail.com",
        "position": "Mobile Developer",
        "tag": 'family',
        "labels": ['trash']
      },
      {
        "id": "8223sdffn",
        "name": "Andrey Hrabouski",
        "subject": "My App",
        "date": "2015-06-20T07:05:02",
        "body": $sce.trustAsHtml("<p>Hey Vlad. </p><p>Lorem ipsum dolor sit amet!</p>" +
          "<p>Consectetur My Falasson App elit. Aliquam sodales sem in nibh pellentesque, ac dignissim mi dapibus.</p>"),
        "pic": "img/Andrey.png",
        "email": "lakeishaphillips@mail.com",
        "position": "Mobile Developer",
        "tag": 'family',
        "labels": ['spam']
      },
      {
        "id": "9391xdsff",
        "name": "Vlad Lugovsky",
        "subject": "Cool",
        "date": "2015-03-31T11:52:58",
        "body": $sce.trustAsHtml("<p>Hey Vlad. </p><p>Aliquam sodales sem in nibh pellentesque</p>" +
          "<p>Cras tincidunt fermentum lectus, quis scelerisque lorem volutpat sed.</p>"),
        "pic": "img/Vlad.png",
        "email": "carlsongoodman@mail.com",
        "position": "Fullstack man",
        "tag": "study",
        "labels": ['draft']
      },
      {
        "id": "8223xsdaa",
        "name": "Andrey Hrabouski",
        "subject": "Car rent",
        "date": "2015-02-25T10:58:58",
        "body": $sce.trustAsHtml("<p>Hey Andrey. </p>" +
          "<p>Cras tincidunt fermentum lectus, quis scelerisque lorem volutpat sed. Sed quis orci sed nisl sagittis viverra id at mauris. Nam venenatis mi nibh. Sed fringilla mattis vehic</p>"),
        "pic": "img/Andrey.png",
        "email": "lakeishaphillips@mail.com",
        "position": "Mobile Developer",
        "tag": "family",
        "labels": ['draft']
      },
      {
        "id": "9391xdsff",
        "name": "Vlad Lugovsky",
        "subject": "What next",
        "date": "2015-03-31T11:52:58",
        "body": $sce.trustAsHtml("<p>Hey Vlad. </p><p>Lorem ipsum dolor sit amet!</p>" +
          "<p>Esse esse labore tempor ullamco ullamco. Id veniam laborum c.</p>"),
        "pic": "img/Vlad.png",
        "email": "carlsongoodman@mail.com",
        "position": "Fullstack man",
        "tag": "study",
        "labels": ['sent']
      }
    ].sort(function (a, b) {
        if (a.date > b.date) return 1;
        if (a.date < b.date) return -1;
      }).reverse();
    var tabs = [{
      label: 'inbox',
      name: 'Inbox',
      newMails: 7
    }, {
      label: 'sent',
      name: 'Sent Mail'
    }, {
      label: 'important',
      name: 'Important'
    }, {
      label: 'draft',
      name: 'Draft',
      newMails: 2
    }, {
      label: 'spam',
      name: 'Spam'
    }, {
      label: 'trash',
      name: 'Trash'
    }];

    return{
      getTabs : function(){
        return tabs
      },
      getMessagesByLabel : function(label){
        return messages.filter(function(m){
          return m.labels.indexOf(label) != -1;
        });
      },
      getMessageById : function(id){
        return messages.filter(function(m){
          return m.id == id;
        })[0];
      }
    }

  }

})();
/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  MailTabCtrl.$inject = ["composeModal", "mailMessages"];
  angular.module('BlurAdmin.pages.components.mail')
      .controller('MailTabCtrl', MailTabCtrl);

  /** @ngInject */
  function MailTabCtrl(composeModal, mailMessages) {

    var vm = this;
    vm.navigationCollapsed = true;
    vm.showCompose = function(subject, to , text){
      composeModal.open({
        subject : subject,
        to: to,
        text: text
      })
    };

    vm.tabs = mailMessages.getTabs();
  }

})();

/**
 * @author a.demeshko
 * created on 12/21/15
 */
(function () {
  'use strict';

  treeCtrl.$inject = ["$scope", "$timeout"];
  angular.module('BlurAdmin.pages.components.tree')
    .controller('treeCtrl', treeCtrl);

  /** @ngInject */
  function treeCtrl($scope, $timeout) {

    $scope.ignoreChanges = false;
    var newId = 0;
    $scope.ignoreChanges = false;
    $scope.newNode = {};

    $scope.basicConfig = {
      core: {
        multiple: false,
        check_callback: true,
        worker: true
      },
      'types': {
        'folder': {
          'icon': 'ion-ios-folder'
        },
        'default': {
          'icon': 'ion-document-text'
        }
      },
      'plugins': ['types'],
      'version': 1
    };

    $scope.dragConfig = {
      'core': {
        'check_callback': true,
        'themes': {
          'responsive': false
        }
      },
      'types': {
        'folder': {
          'icon': 'ion-ios-folder'
        },
        'default': {
          'icon': 'ion-document-text'
        }
      },
      "plugins": ["dnd", 'types']
    };

    $scope.addNewNode = function () {
      $scope.ignoreChanges = true;
      var selected = this.basicTree.jstree(true).get_selected()[0];
      if (selected)
        $scope.treeData.push({
          id: (newId++).toString(),
          parent: selected,
          text: "New node " + newId,
          state: {opened: true}
        });
      $scope.basicConfig.version++;
    };


    $scope.refresh = function () {
      $scope.ignoreChanges = true;
      newId = 0;
      $scope.treeData = getDefaultData();
      $scope.basicConfig.version++;
    };

    $scope.expand = function () {
      $scope.ignoreChanges = true;
      $scope.treeData.forEach(function (n) {
        n.state.opened = true;
      });
      $scope.basicConfig.version++;
    };

    $scope.collapse = function () {
      $scope.ignoreChanges = true;
      $scope.treeData.forEach(function (n) {
        n.state.opened = false;
      });
      $scope.basicConfig.version++;
    };

    $scope.readyCB = function() {
      $timeout(function() {
        $scope.ignoreChanges = false;
      });
    };


    $scope.applyModelChanges = function() {
      return !$scope.ignoreChanges;
    };

    $scope.treeData = getDefaultData();
    $scope.dragData = [
      {
        "id": "nd1",
        "parent": "#",
        "type": "folder",
        "text": "Node 1",
        "state": {
          "opened": true
        }
      },
      {
        "id": "nd2",
        "parent": "#",
        "type": "folder",
        "text": "Node 2",
        "state": {
          "opened": true
        }
      },
      {
        "id": "nd3",
        "parent": "#",
        "type": "folder",
        "text": "Node 3",
        "state": {
          "opened": true
        }
      },
      {
        "id": "nd4",
        "parent": "#",
        "type": "folder",
        "text": "Node 4",
        "state": {
          "opened": true
        }
      },
      {
        "id": "nd5",
        "parent": "nd1",
        "text": "Node 1.1",
        "state": {
          "opened": true
        }
      },
      {
        "id": "nd6",
        "parent": "nd1",
        "text": "Node 1.2",
        "state": {
          "opened": true
        }
      },
      {
        "id": "nd7",
        "parent": "nd1",
        "text": "Node 1.3",
        "state": {
          "opened": true
        }
      },
      {
        "id": "nd8",
        "parent": "nd2",
        "text": "Node 2.1",
        "state": {
          "opened": true
        }
      },
      {
        "id": "nd9",
        "parent": "nd2",
        "text": "Node 2.2",
        "state": {
          "opened": true
        }
      },
      {
        "id": "nd10",
        "parent": "nd2",
        "text": "Node 2.3",
        "state": {
          "opened": true
        }
      },
      {
        "id": "nd11",
        "parent": "nd3",
        "text": "Node 3.1",
        "state": {
          "opened": true
        }
      },
      {
        "id": "nd12",
        "parent": "nd3",
        "text": "Node 3.2",
        "state": {
          "opened": true
        }
      },
      {
        "id": "nd13",
        "parent": "nd3",
        "text": "Node 3.3",
        "state": {
          "opened": true
        }
      },
      {
        "id": "nd14",
        "parent": "nd4",
        "text": "Node 4.1",
        "state": {
          "opened": true
        }
      },
      {
        "id": "nd15",
        "parent": "nd4",
        "text": "Node 4.2",
        "state": {
          "opened": true
        }
      },
      {
        "id": "nd16",
        "parent": "nd4",
        "text": "Node 4.3",
        "state": {
          "opened": true
        }
      }
    ];

    function getDefaultData() {
      return [
        {
          "id": "n1",
          "parent": "#",
          "type": "folder",
          "text": "Node 1",
          "state": {
            "opened": true
          }
        },
        {
          "id": "n2",
          "parent": "#",
          "type": "folder",
          "text": "Node 2",
          "state": {
            "opened": true
          }
        },
        {
          "id": "n3",
          "parent": "#",
          "type": "folder",
          "text": "Node 3",
          "state": {
            "opened": true
          }
        },
        {
          "id": "n5",
          "parent": "n1",
          "text": "Node 1.1",
          "state": {
            "opened": true
          }
        },
        {
          "id": "n6",
          "parent": "n1",
          "text": "Node 1.2",
          "state": {
            "opened": true
          }
        },
        {
          "id": "n7",
          "parent": "n1",
          "text": "Node 1.3",
          "state": {
            "opened": true
          }
        },
        {
          "id": "n8",
          "parent": "n1",
          "text": "Node 1.4",
          "state": {
            "opened": true
          }
        },
        {
          "id": "n9",
          "parent": "n2",
          "text": "Node 2.1",
          "state": {
            "opened": true
          }
        },
        {
          "id": "n10",
          "parent": "n2",
          "text": "Node 2.2 (Custom icon)",
          "icon": "ion-help-buoy",
          "state": {
            "opened": true
          }
        },
        {
          "id": "n12",
          "parent": "n3",
          "text": "Node 3.1",
          "state": {
            "opened": true
          }
        },
        {
          "id": "n13",
          "parent": "n3",
          "type": "folder",
          "text": "Node 3.2",
          "state": {
            "opened": true
          }
        },
        {
          "id": "n14",
          "parent": "n13",
          "text": "Node 3.2.1",
          "state": {
            "opened": true
          }
        },
        {
          "id": "n15",
          "parent": "n13",
          "text": "Node 3.2.2",
          "state": {
            "opened": true
          }
        },
        {
          "id": "n16",
          "parent": "n3",
          "text": "Node 3.3",
          "state": {
            "opened": true
          }
        },
        {
          "id": "n17",
          "parent": "n3",
          "text": "Node 3.4",
          "state": {
            "opened": true
          }
        },
        {
          "id": "n18",
          "parent": "n3",
          "text": "Node 3.5",
          "state": {
            "opened": true
          }
        },
        {
          "id": "n19",
          "parent": "n3",
          "text": "Node 3.6",
          "state": {
            "opened": true
          }
        }
      ]
    }


  }
})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.components.timeline')
      .controller('TimelineCtrl', TimelineCtrl);

  /** @ngInject */
  function TimelineCtrl() {
    var timelineBlocks = $('.cd-timeline-block'),
        offset = 0.8;

    //hide timeline blocks which are outside the viewport
    hideBlocks(timelineBlocks, offset);

    //on scolling, show/animate timeline blocks when enter the viewport
    $(window).on('scroll', function () {
      if (!window.requestAnimationFrame) {
        setTimeout(function () {
          showBlocks(timelineBlocks, offset);
        }, 100);
      } else {
        window.requestAnimationFrame(function () {
          showBlocks(timelineBlocks, offset);
        });
      }
    });

    function hideBlocks(blocks, offset) {
      blocks.each(function () {
        ( $(this).offset().top > $(window).scrollTop() + $(window).height() * offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
      });
    }

    function showBlocks(blocks, offset) {
      blocks.each(function () {
        ( $(this).offset().top <= $(window).scrollTop() + $(window).height() * offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
      });
    }
  }
})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.components')
      .directive('backTop', backTop);

  /** @ngInject */
  function backTop() {
    return {
      restrict: 'E',
      templateUrl: 'app/theme/components/backTop/backTop.html',
      controller: function () {
        $('#backTop').backTop({
          'position': 200,
          'speed': 100
        });
      }
    };
  }

})();
/**
 * @author v.lugovsky
 * created on 23.12.2015
 */
(function () {
  'use strict';

  /**
   * Includes basic panel layout inside of current element.
   */
  baPanel.$inject = ["baPanel", "baConfig"];
  angular.module('BlurAdmin.theme')
      .directive('baPanel', baPanel);

  /** @ngInject */
  function baPanel(baPanel, baConfig) {
    return angular.extend({}, baPanel, {
      template: function(el, attrs) {
        var res = '<div  class="panel ' + (baConfig.theme.blur ? 'panel-blur' : '') + ' full-invisible ' + (attrs.baPanelClass || '');
        res += '" zoom-in ' + (baConfig.theme.blur ? 'ba-panel-blur' : '') + '>';
        res += baPanel.template(el, attrs);
        res += '</div>';
        return res;
      }
    });
  }
})();

/**
 * @author v.lugovsky
 * created on 23.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
      .factory('baPanel', baPanel);

  /** @ngInject */
  function baPanel() {

    /** Base baPanel directive */
    return {
      restrict: 'A',
      transclude: true,
      template: function(elem, attrs) {
        var res = '<div class="panel-body" ng-transclude></div>';
        if (attrs.baPanelTitle) {
          var titleTpl = '<div class="panel-heading clearfix"><h3 class="panel-title">' + attrs.baPanelTitle + '</h3></div>';
          res = titleTpl + res; // title should be before
        }

        return res;
      }
    };
  }

})();

/**
 * @author v.lugovsky
 * created on 15.01.2016
 */
(function () {
  'use strict';

  baPanelBlur.$inject = ["baPanelBlurHelper", "$window", "$rootScope"];
  angular.module('BlurAdmin.theme')
      .directive('baPanelBlur', baPanelBlur);

  /** @ngInject */
  function baPanelBlur(baPanelBlurHelper, $window, $rootScope) {
    var bodyBgSize;

    baPanelBlurHelper.bodyBgLoad().then(function() {
      bodyBgSize = baPanelBlurHelper.getBodyBgImageSizes();
    });

    $window.addEventListener('resize', function() {
      bodyBgSize = baPanelBlurHelper.getBodyBgImageSizes();
    });

    return {
      restrict: 'A',
      link: function($scope, elem) {
        if(!$rootScope.$isMobile) {
          baPanelBlurHelper.bodyBgLoad().then(function () {
            setTimeout(recalculatePanelStyle);
          });
          $window.addEventListener('resize', recalculatePanelStyle);

          $scope.$on('$destroy', function () {
            $window.removeEventListener('resize', recalculatePanelStyle);
          });
        }

        function recalculatePanelStyle() {
          if (!bodyBgSize) {
            return;
          }
          elem.css({
            backgroundSize: Math.round(bodyBgSize.width) + 'px ' + Math.round(bodyBgSize.height) + 'px',
            backgroundPosition: Math.floor(bodyBgSize.positionX) + 'px ' + Math.floor(bodyBgSize.positionY) + 'px'
          });
        }

      }
    };
  }

})();

/**
 * @author v.lugovsky
 * created on 15.01.2016
 */
(function () {
  'use strict';

  baPanelBlurHelper.$inject = ["$q"];
  angular.module('BlurAdmin.theme')
      .service('baPanelBlurHelper', baPanelBlurHelper);

  /** @ngInject */
  function baPanelBlurHelper($q) {
    var res = $q.defer();
    var computedStyle = getComputedStyle(document.body, ':before');
    var image = new Image();
    image.src = computedStyle.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2');
    image.onerror = function() {
      res.reject();
    };
    image.onload = function() {
      res.resolve();
    };

    this.bodyBgLoad = function() {
      return res.promise;
    };

    this.getBodyBgImageSizes = function() {
      var elemW = document.documentElement.clientWidth;
      var elemH = document.documentElement.clientHeight;
      if(elemW <= 640) return;
      var imgRatio = (image.height / image.width);       // original img ratio
      var containerRatio = (elemH / elemW);     // container ratio

      var finalHeight, finalWidth;
      if (containerRatio > imgRatio) {
        finalHeight = elemH;
        finalWidth = (elemH / imgRatio);
      } else {
        finalWidth = elemW;
        finalHeight = (elemW * imgRatio);
      }
      return { width: finalWidth, height: finalHeight, positionX: (elemW - finalWidth)/2, positionY: (elemH - finalHeight)/2};
    };
  }

})();

/**
 * @author v.lugovsky
 * created on 23.12.2015
 */
(function () {
  'use strict';

  /**
   * Represents current element as panel, adding all necessary classes.
   */
  baPanelSelf.$inject = ["baPanel"];
  angular.module('BlurAdmin.theme')
      .directive('baPanelSelf', baPanelSelf);

  /** @ngInject */
  function baPanelSelf(baPanel) {
    return angular.extend({}, baPanel, {
      link: function(scope, el, attrs) {
        el.addClass('panel panel-white');
        if (attrs.baPanelClass) {
          el.addClass(attrs.baPanelClass);
        }
      }
    });
  }

})();

(function() {
  'use strict';

  angular.module('BlurAdmin.theme.components')
    .directive('baWizard', baWizard);

  /** @ngInject */
  function baWizard() {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'app/theme/components/baWizard/baWizard.html',
      controllerAs: '$baWizardController',
      controller: 'baWizardCtrl'
    }
  }
})();

(function() {
  'use strict';

  baWizardCtrl.$inject = ["$scope"];
  angular.module('BlurAdmin.theme.components')
    .controller('baWizardCtrl', baWizardCtrl);

  /** @ngInject */
  function baWizardCtrl($scope) {
    var vm = this;
    vm.tabs = [];

    vm.tabNum = 0;
    vm.progress = 0;

    vm.addTab = function(tab) {
      tab.setPrev(vm.tabs[vm.tabs.length - 1]);
      vm.tabs.push(tab);
      vm.selectTab(0);
    };

    $scope.$watch(angular.bind(vm, function () {return vm.tabNum;}), calcProgress);

    vm.selectTab = function (tabNum) {
      vm.tabs[vm.tabNum].submit();
      if (vm.tabs[tabNum].isAvailiable()) {
        vm.tabNum = tabNum;
        vm.tabs.forEach(function (t, tIndex) {
          tIndex == vm.tabNum ? t.select(true) : t.select(false);
        });
      }
    };

    vm.isFirstTab = function () {
      return vm.tabNum == 0;
    };

    vm.isLastTab = function () {
      return vm.tabNum == vm.tabs.length - 1 ;
    };

    vm.nextTab = function () {
      vm.selectTab(vm.tabNum + 1)
    };

    vm.previousTab = function () {
      vm.selectTab(vm.tabNum - 1)
    };

    function calcProgress() {
      vm.progress = ((vm.tabNum + 1) / vm.tabs.length) * 100;
    }
  }
})();


(function() {
  'use strict';

  angular.module('BlurAdmin.theme.components')
    .directive('baWizardStep', baWizardStep);

  /** @ngInject */
  function baWizardStep() {
    return {
      restrict: 'E',
      transclude: true,
      require: '^baWizard',
      scope: {
        form: '='
      },
      templateUrl:  'app/theme/components/baWizard/baWizardStep.html',
      link: function($scope, $element, $attrs, wizard) {
        $scope.selected = true;

        var tab = {
          title: $attrs.title,
          select: select,
          submit: submit,
          isComplete: isComplete,
          isAvailiable: isAvailiable,
          prevTab: undefined,
          setPrev: setPrev
        };

        wizard.addTab(tab);

        function select(isSelected) {
          if (isSelected) {
            $scope.selected = true;
          } else {
            $scope.selected = false;
          }
        }

        function submit() {
          $scope.form && $scope.form.$setSubmitted(true);
        }

        function isComplete() {
          return $scope.form ? $scope.form.$valid : true;
        }

        function isAvailiable() {
          return tab.prevTab ? tab.prevTab.isComplete() : true;
        }

        function setPrev(pTab) {
          tab.prevTab = pTab;
        }
      }
    };
  }
})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  contentTop.$inject = ["$location", "$state"];
  angular.module('BlurAdmin.theme.components')
      .directive('contentTop', contentTop);

  /** @ngInject */
  function contentTop($location, $state) {
    return {
      restrict: 'E',
      templateUrl: 'app/theme/components/contentTop/contentTop.html',
      link: function($scope) {
        $scope.$watch(function () {
          $scope.activePageTitle = $state.current.title;
        });
      }
    };
  }

})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  baSidebar.$inject = ["$timeout", "baSidebarService", "baUtil", "layoutSizes"];
  angular.module('BlurAdmin.theme.components')
      .directive('baSidebar', baSidebar);

  /** @ngInject */
  function baSidebar($timeout, baSidebarService, baUtil, layoutSizes) {
    var jqWindow = $(window);
    return {
      restrict: 'E',
      templateUrl: 'app/theme/components/baSidebar/ba-sidebar.html',
      controller: 'BaSidebarCtrl',
      link: function(scope, el) {

        scope.menuHeight = el[0].childNodes[0].clientHeight - 84;
        jqWindow.on('click', _onWindowClick);
        jqWindow.on('resize', _onWindowResize);

        scope.$on('$destroy', function() {
          jqWindow.off('click', _onWindowClick);
          jqWindow.off('resize', _onWindowResize);
        });

        function _onWindowClick($evt) {
          if (!baUtil.isDescendant(el[0], $evt.target) &&
              !$evt.originalEvent.$sidebarEventProcessed &&
              !baSidebarService.isMenuCollapsed() &&
              baSidebarService.canSidebarBeHidden()) {
            $evt.originalEvent.$sidebarEventProcessed = true;
            $timeout(function () {
              baSidebarService.setMenuCollapsed(true);
            }, 10);
          }
        }

        // watch window resize to change menu collapsed state if needed
        function _onWindowResize() {
          var newMenuCollapsed = baSidebarService.shouldMenuBeCollapsed();
          var newMenuHeight = _calculateMenuHeight();
          if (newMenuCollapsed != baSidebarService.isMenuCollapsed() || scope.menuHeight != newMenuHeight) {
            scope.$apply(function () {
              scope.menuHeight = newMenuHeight;
              baSidebarService.setMenuCollapsed(newMenuCollapsed)
            });
          }
        }

        function _calculateMenuHeight() {
          return el[0].childNodes[0].clientHeight - 84;
        }
      }
    };
  }

})();
(function() {
  'use strict';

  angular.module('BlurAdmin.theme.components')
      .provider('baSidebarService', baSidebarServiceProvider);

  /** @ngInject */
  function baSidebarServiceProvider() {
    var staticMenuItems = [];

    this.addStaticItem = function() {
      staticMenuItems.push.apply(staticMenuItems, arguments);
    };

    /** @ngInject */
    this.$get = ["$state", "layoutSizes", function($state, layoutSizes) {
      return new _factory();

      function _factory() {
        var isMenuCollapsed = shouldMenuBeCollapsed();

        this.getMenuItems = function() {
          var states = defineMenuItemStates();
          var menuItems = states.filter(function(item) {
            return item.level == 0;
          });

          menuItems.forEach(function(item) {
            var children = states.filter(function(child) {
              return child.level == 1 && child.name.indexOf(item.name) === 0;
            });
            item.subMenu = children.length ? children : null;
          });

          return menuItems.concat(staticMenuItems);
        };

        this.shouldMenuBeCollapsed = shouldMenuBeCollapsed;
        this.canSidebarBeHidden = canSidebarBeHidden;

        this.setMenuCollapsed = function(isCollapsed) {
          isMenuCollapsed = isCollapsed;
        };

        this.isMenuCollapsed = function() {
          return isMenuCollapsed;
        };

        this.toggleMenuCollapsed = function() {
          isMenuCollapsed = !isMenuCollapsed;
        };

        this.getAllStateRefsRecursive = function(item) {
          var result = [];
          _iterateSubItems(item);
          return result;

          function _iterateSubItems(currentItem) {
            currentItem.subMenu && currentItem.subMenu.forEach(function(subItem) {
              subItem.stateRef && result.push(subItem.stateRef);
              _iterateSubItems(subItem);
            });
          }
        };

        function defineMenuItemStates() {
          return $state.get()
              .filter(function(s) {
                return s.sidebarMeta;
              })
              .map(function(s) {
                var meta = s.sidebarMeta;
                return {
                  name: s.name,
                  title: s.title,
                  level: (s.name.match(/\./g) || []).length,
                  order: meta.order,
                  icon: meta.icon,
                  stateRef: s.name,
                };
              })
              .sort(function(a, b) {
                return (a.level - b.level) * 100 + a.order - b.order;
              });
        }

        function shouldMenuBeCollapsed() {
          return window.innerWidth <= layoutSizes.resWidthCollapseSidebar;
        }

        function canSidebarBeHidden() {
          return window.innerWidth <= layoutSizes.resWidthHideSidebar;
        }
      }

    }];
    this.$get.$inject = ["$state", "layoutSizes"];

  }
})();

/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  BaSidebarCtrl.$inject = ["$scope", "baSidebarService"];
  angular.module('BlurAdmin.theme.components')
    .controller('BaSidebarCtrl', BaSidebarCtrl);

  /** @ngInject */
  function BaSidebarCtrl($scope, baSidebarService) {

    $scope.menuItems = baSidebarService.getMenuItems();
    $scope.defaultSidebarState = $scope.menuItems[0].stateRef;

    $scope.hoverItem = function ($event) {
      $scope.showHoverElem = true;
      $scope.hoverElemHeight =  $event.currentTarget.clientHeight;
      var menuTopValue = 66;
      $scope.hoverElemTop = $event.currentTarget.getBoundingClientRect().top - menuTopValue;
    };

    $scope.$on('$stateChangeSuccess', function () {
      if (baSidebarService.canSidebarBeHidden()) {
        baSidebarService.setMenuCollapsed(true);
      }
    });
  }
})();
/**
 * @author v.lugovsky
 * created on 03.05.2016
 */
(function () {
  'use strict';

  baSidebarToggleMenu.$inject = ["baSidebarService"];
  baSidebarCollapseMenu.$inject = ["baSidebarService"];
  BaSidebarTogglingItemCtrl.$inject = ["$scope", "$element", "$attrs", "$state", "baSidebarService"];
  baUiSrefTogglingSubmenu.$inject = ["$state"];
  baUiSrefToggler.$inject = ["baSidebarService"];
  angular.module('BlurAdmin.theme.components')
      .directive('baSidebarToggleMenu', baSidebarToggleMenu)
      .directive('baSidebarCollapseMenu', baSidebarCollapseMenu)
      .directive('baSidebarTogglingItem', baSidebarTogglingItem)
      .controller('BaSidebarTogglingItemCtrl', BaSidebarTogglingItemCtrl)
      .directive('baUiSrefTogglingSubmenu', baUiSrefTogglingSubmenu)
      .directive('baUiSrefToggler', baUiSrefToggler);

  /** @ngInject */
  function baSidebarToggleMenu(baSidebarService) {
    return {
      restrict: 'A',
      link: function(scope, elem) {
        elem.on('click', function($evt) {
          $evt.originalEvent.$sidebarEventProcessed = true;
          scope.$apply(function() {
            baSidebarService.toggleMenuCollapsed();
          });
        });
      }
    };
  }

  /** @ngInject */
  function baSidebarCollapseMenu(baSidebarService) {
    return {
      restrict: 'A',
      link: function(scope, elem) {
        elem.on('click', function($evt) {
          $evt.originalEvent.$sidebarEventProcessed = true;
          if (!baSidebarService.isMenuCollapsed()) {
            scope.$apply(function() {
              baSidebarService.setMenuCollapsed(true);
            });
          }
        });
      }
    };
  }

  /** @ngInject */
  function baSidebarTogglingItem() {
    return {
      restrict: 'A',
      controller: 'BaSidebarTogglingItemCtrl'
    };
  }

  /** @ngInject */
  function BaSidebarTogglingItemCtrl($scope, $element, $attrs, $state, baSidebarService) {
    var vm = this;
    var menuItem = vm.$$menuItem = $scope.$eval($attrs.baSidebarTogglingItem);
    if (menuItem && menuItem.subMenu && menuItem.subMenu.length) {
      vm.$$expandSubmenu = function() { console.warn('$$expandMenu should be overwritten by baUiSrefTogglingSubmenu') };
      vm.$$collapseSubmenu = function() { console.warn('$$collapseSubmenu should be overwritten by baUiSrefTogglingSubmenu') };

      var subItemsStateRefs = baSidebarService.getAllStateRefsRecursive(menuItem);

      vm.$expand = function() {
        vm.$$expandSubmenu();
        $element.addClass('ba-sidebar-item-expanded');
      };

      vm.$collapse = function() {
        vm.$$collapseSubmenu();
        $element.removeClass('ba-sidebar-item-expanded');
      };

      vm.$toggle = function() {
        $element.hasClass('ba-sidebar-item-expanded') ?
            vm.$collapse() :
            vm.$expand();
      };

      if (_isState($state.current)) {
        $element.addClass('ba-sidebar-item-expanded');
      }

      $scope.$on('$stateChangeStart', function (event, toState) {
        if (!_isState(toState) && $element.hasClass('ba-sidebar-item-expanded')) {
          vm.$collapse();
          $element.removeClass('ba-sidebar-item-expanded');
        }
      });

      $scope.$on('$stateChangeSuccess', function (event, toState) {
        if (_isState(toState) && !$element.hasClass('ba-sidebar-item-expanded')) {
          vm.$expand();
          $element.addClass('ba-sidebar-item-expanded');
        }
      });
    }

    function _isState(state) {
      return state && subItemsStateRefs.some(function(subItemState) {
            return state.name.indexOf(subItemState) == 0;
          });
    }
  }

  /** @ngInject */
  function baUiSrefTogglingSubmenu($state) {
    return {
      restrict: 'A',
      require: '^baSidebarTogglingItem',
      link: function(scope, el, attrs, baSidebarTogglingItem) {
        baSidebarTogglingItem.$$expandSubmenu = function() { el.slideDown(); };
        baSidebarTogglingItem.$$collapseSubmenu = function() { el.slideUp(); };
      }
    };
  }

  /** @ngInject */
  function baUiSrefToggler(baSidebarService) {
    return {
      restrict: 'A',
      require: '^baSidebarTogglingItem',
      link: function(scope, el, attrs, baSidebarTogglingItem) {
        el.on('click', function() {
          if (baSidebarService.isMenuCollapsed()) {
            // If the whole sidebar is collapsed and this item has submenu. We need to open sidebar.
            // This should not affect mobiles, because on mobiles sidebar should be hidden at all
            scope.$apply(function() {
              baSidebarService.setMenuCollapsed(false);
            });
            baSidebarTogglingItem.$expand();
          } else {
            baSidebarTogglingItem.$toggle();
          }
        });
      }
    };
  }

})();

/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.components')
      .directive('msgCenter', msgCenter);

  /** @ngInject */
  function msgCenter() {
    return {
      restrict: 'E',
      templateUrl: 'app/theme/components/msgCenter/msgCenter.html',
      controller: 'MsgCenterCtrl'
    };
  }

})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  MsgCenterCtrl.$inject = ["$scope", "$sce"];
  angular.module('BlurAdmin.theme.components')
      .controller('MsgCenterCtrl', MsgCenterCtrl);

  /** @ngInject */
  function MsgCenterCtrl($scope, $sce) {
    $scope.users = {
      0: {
        name: 'Vlad',
      },
      1: {
        name: 'Kostya',
      },
      2: {
        name: 'Andrey',
      },
      3: {
        name: 'Nasta',
      }
    };

    $scope.notifications = [
      {
        userId: 0,
        template: '&name posted a new article.',
        time: '1 min ago'
      },
      {
        userId: 1,
        template: '&name changed his contact information.',
        time: '2 hrs ago'
      },
      {
        image: 'assets/img/shopping-cart.svg',
        template: 'New orders received.',
        time: '5 hrs ago'
      },
      {
        userId: 2,
        template: '&name replied to your comment.',
        time: '1 day ago'
      },
      {
        userId: 3,
        template: 'Today is &name\'s birthday.',
        time: '2 days ago'
      },
      {
        image: 'assets/img/comments.svg',
        template: 'New comments on your post.',
        time: '3 days ago'
      },
      {
        userId: 1,
        template: '&name invited you to join the event.',
        time: '1 week ago'
      }
    ];

    $scope.messages = [
      {
        userId: 3,
        text: 'After you get up and running, you can place Font Awesome icons just about...',
        time: '1 min ago'
      },
      {
        userId: 0,
        text: 'You asked, Font Awesome delivers with 40 shiny new icons in version 4.2.',
        time: '2 hrs ago'
      },
      {
        userId: 1,
        text: 'Want to request new icons? Here\'s how. Need vectors or want to use on the...',
        time: '10 hrs ago'
      },
      {
        userId: 2,
        text: 'Explore your passions and discover new ones by getting involved. Stretch your...',
        time: '1 day ago'
      },
      {
        userId: 3,
        text: 'Get to know who we are - from the inside out. From our history and culture, to the...',
        time: '1 day ago'
      },
      {
        userId: 1,
        text: 'Need some support to reach your goals? Apply for scholarships across a variety of...',
        time: '2 days ago'
      },
      {
        userId: 0,
        text: 'Wrap the dropdown\'s trigger and the dropdown menu within .dropdown, or...',
        time: '1 week ago'
      }
    ];

    $scope.getMessage = function(msg) {
      var text = msg.template;
      if (msg.userId || msg.userId === 0) {
        text = text.replace('&name', '<strong>' + $scope.users[msg.userId].name + '</strong>');
      }
      return $sce.trustAsHtml(text);
    };
  }
})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.components')
      .directive('pageTop', pageTop);

  /** @ngInject */
  function pageTop() {
    return {
      restrict: 'E',
      templateUrl: 'app/theme/components/pageTop/pageTop.html'
    };
  }

})();
/**
 * Created by n.poltoratsky
 * on 28.06.2016.
 */
(function () {
    'use strict';

    progressBarRound.$inject = ["baProgressModal"];
    angular.module('BlurAdmin.theme.components')
        .directive('progressBarRound', progressBarRound);

    /** @ngInject */
    function progressBarRound(baProgressModal) {
        return {
            restrict: 'E',
            templateUrl: 'app/theme/components/progressBarRound/progressBarRound.html',
            link:function($scope, element, attrs) {
                $scope.baProgressDialog = baProgressModal;
                $scope.$watch(function () {
                    return baProgressModal.getProgress();
                }, animateBar);

                function animateBar() {
                    var circle = element.find('#loader')[0];
                    circle.setAttribute("stroke-dasharray", baProgressModal.getProgress() * 180 * Math.PI / 100 + ", 20000");
                    $scope.progress = baProgressModal.getProgress();
                }
            }
        }
    }
})();
/**
 * @author v.lugovsky
 * created on 17.12.2015
 */
(function () {
  'use strict';

  appImage.$inject = ["layoutPaths"];
  angular.module('BlurAdmin.theme')
      .filter('appImage', appImage);

  /** @ngInject */
  function appImage(layoutPaths) {
    return function(input) {
      return layoutPaths.images.root + input;
    };
  }

})();

/**
 * @author v.lugovsky
 * created on 17.12.2015
 */
(function () {
  'use strict';

  kameleonImg.$inject = ["layoutPaths"];
  angular.module('BlurAdmin.theme')
      .filter('kameleonImg', kameleonImg);

  /** @ngInject */
  function kameleonImg(layoutPaths) {
    return function(input) {
      return layoutPaths.images.root + 'theme/icon/kameleon/' + input + '.svg';
    };
  }

})();

/**
 * @author v.lugovsky
 * created on 17.12.2015
 */
(function () {
  'use strict';

  profilePicture.$inject = ["layoutPaths"];
  angular.module('BlurAdmin.theme')
      .filter('profilePicture', profilePicture);

  /** @ngInject */
  function profilePicture(layoutPaths) {
    return function(input, ext) {
      ext = ext || 'png';
      return layoutPaths.images.profile + input + '.' + ext;
    };
  }

})();

/**
 * @author a.demeshko
 * created on 23.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
    .filter('plainText', plainText);

  /** @ngInject */
  function plainText() {
    return function(text) {
      return  text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
  }

})();

/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.components')
      .directive('widgets', widgets);

  /** @ngInject */
  function widgets() {
    return {
      restrict: 'EA',
      scope: {
        ngModel: '='
      },
      templateUrl: 'app/theme/components/widgets/widgets.html',
      replace: true
    };
  }

})();
/**
 * @author v.lugovsky
 * created on 10.12.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.inputs')
      .directive('baSwitcher', baSwitcher);

  /** @ngInject */
  function baSwitcher() {
    return {
      templateUrl: 'app/theme/inputs/baSwitcher/baSwitcher.html',
      scope: {
        switcherStyle: '@',
        switcherValue: '='
      }
    };
  }

})();

/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  AreaChartCtrl.$inject = ["$scope", "baConfig", "$element", "layoutPaths"];
  angular.module('BlurAdmin.pages.charts.amCharts')
      .controller('AreaChartCtrl', AreaChartCtrl);

  /** @ngInject */
  function AreaChartCtrl($scope, baConfig, $element, layoutPaths) {
    var layoutColors = baConfig.colors;
    var id = $element[0].getAttribute('id');
    var areaChart = AmCharts.makeChart(id, {
      type: 'serial',
      theme: 'blur',
      color: layoutColors.defaultText,
      dataProvider: [
        {
          lineColor: layoutColors.info,
          date: '2012-01-01',
          duration: 408
        },
        {
          date: '2012-01-02',
          duration: 482
        },
        {
          date: '2012-01-03',
          duration: 562
        },
        {
          date: '2012-01-04',
          duration: 379
        },
        {
          lineColor: layoutColors.warning,
          date: '2012-01-05',
          duration: 501
        },
        {
          date: '2012-01-06',
          duration: 443
        },
        {
          date: '2012-01-07',
          duration: 405
        },
        {
          date: '2012-01-08',
          duration: 309,
          lineColor: layoutColors.danger
        },
        {
          date: '2012-01-09',
          duration: 287
        },
        {
          date: '2012-01-10',
          duration: 485
        },
        {
          date: '2012-01-11',
          duration: 890
        },
        {
          date: '2012-01-12',
          duration: 810
        }
      ],
      balloon: {
        cornerRadius: 6,
        horizontalPadding: 15,
        verticalPadding: 10
      },
      valueAxes: [
        {
          duration: 'mm',
          durationUnits: {
            hh: 'h ',
            mm: 'min'
          },
          gridAlpha: 0.5,
          gridColor: layoutColors.border,
        }
      ],
      graphs: [
        {
          bullet: 'square',
          bulletBorderAlpha: 1,
          bulletBorderThickness: 1,
          fillAlphas: 0.5,
          fillColorsField: 'lineColor',
          legendValueText: '[[value]]',
          lineColorField: 'lineColor',
          title: 'duration',
          valueField: 'duration'
        }
      ],

      chartCursor: {
        categoryBalloonDateFormat: 'YYYY MMM DD',
        cursorAlpha: 0,
        fullWidth: true
      },
      dataDateFormat: 'YYYY-MM-DD',
      categoryField: 'date',
      categoryAxis: {
        dateFormats: [
          {
            period: 'DD',
            format: 'DD'
          },
          {
            period: 'WW',
            format: 'MMM DD'
          },
          {
            period: 'MM',
            format: 'MMM'
          },
          {
            period: 'YYYY',
            format: 'YYYY'
          }
        ],
        parseDates: true,
        autoGridCount: false,
        gridCount: 50,
        gridAlpha: 0.5,
        gridColor: layoutColors.border,
      },
      export: {
        enabled: true
      },
      pathToImages: layoutPaths.images.amChart
    });

    areaChart.addListener('dataUpdated', zoomAreaChart);

    function zoomAreaChart() {
      areaChart.zoomToDates(new Date(2012, 0, 3), new Date(2012, 0, 11));
    }
  }

})();

/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  BarChartCtrl.$inject = ["$scope", "baConfig", "$element", "layoutPaths"];
  angular.module('BlurAdmin.pages.charts.amCharts')
      .controller('BarChartCtrl', BarChartCtrl);

  /** @ngInject */
  function BarChartCtrl($scope, baConfig, $element, layoutPaths) {
    var layoutColors = baConfig.colors;
    var id = $element[0].getAttribute('id');
    var barChart = AmCharts.makeChart(id, {
      type: 'serial',
      theme: 'blur',
      color: layoutColors.defaultText,
      dataProvider: [
        {
          country: 'USA',
          visits: 3025,
          color: layoutColors.primary
        },
        {
          country: 'China',
          visits: 1882,
          color: layoutColors.danger

        },
        {
          country: 'Japan',
          visits: 1809,
          color: layoutColors.info
        },
        {
          country: 'Germany',
          visits: 1322,
          color: layoutColors.success
        },
        {
          country: 'UK',
          visits: 1122,
          color: layoutColors.warning
        },
        {
          country: 'France',
          visits: 1114,
          color: layoutColors.primaryLight
        }
      ],
      valueAxes: [
        {
          axisAlpha: 0,
          position: 'left',
          title: 'Visitors from country',
          gridAlpha: 0.5,
          gridColor: layoutColors.border,
        }
      ],
      startDuration: 1,
      graphs: [
        {
          balloonText: '<b>[[category]]: [[value]]</b>',
          fillColorsField: 'color',
          fillAlphas: 0.7,
          lineAlpha: 0.2,
          type: 'column',
          valueField: 'visits'
        }
      ],
      chartCursor: {
        categoryBalloonEnabled: false,
        cursorAlpha: 0,
        zoomable: false
      },
      categoryField: 'country',
      categoryAxis: {
        gridPosition: 'start',
        labelRotation: 45,
        gridAlpha: 0.5,
        gridColor: layoutColors.border,
      },
      export: {
        enabled: true
      },
      creditsPosition: 'top-right',
      pathToImages: layoutPaths.images.amChart
    });
  }
})();

/**
 * @author a.demeshko
 * created on 22.12.2015
 */
(function () {
  'use strict';

  combinedChartCtrl.$inject = ["$element", "baConfig", "layoutPaths"];
  angular.module('BlurAdmin.pages.charts.amCharts')
    .controller('combinedChartCtrl', combinedChartCtrl);

  /** @ngInject */
  function combinedChartCtrl($element, baConfig, layoutPaths) {
    var layoutColors = baConfig.colors;
    var id = $element[0].getAttribute('id');
    var chart = AmCharts.makeChart(id, {
      "type": "serial",
      "theme": "none",
      "color": layoutColors.defaultText,
      "dataDateFormat": "YYYY-MM-DD",
      "precision": 2,
      "valueAxes": [{
        color: layoutColors.defaultText,
        axisColor: layoutColors.defaultText,
        gridColor: layoutColors.defaultText,
        "id": "v1",
        "title": "Sales",
        "position": "left",
        "autoGridCount": false,
        "labelFunction": function(value) {
          return "$" + Math.round(value) + "M";
        }
      }, {
        color: layoutColors.defaultText,
        axisColor: layoutColors.defaultText,
        gridColor: layoutColors.defaultText,
        "id": "v2",
        "title": "Market Days",
        "gridAlpha": 0,
        "position": "right",
        "autoGridCount": false
      }],
      "graphs": [{
        "id": "g3",
        color: layoutColors.defaultText,
        "valueAxis": "v1",
        "lineColor": layoutColors.primaryLight,
        "fillColors": layoutColors.primaryLight,
        "fillAlphas": 0.8,
        "lineAlpha": 0.8,
        "type": "column",
        "title": "Actual Sales",
        "valueField": "sales2",
        "clustered": false,
        "columnWidth": 0.5,
        "lineColorField" : layoutColors.defaultText,
        "legendValueText": "$[[value]]M",
        "balloonText": "[[title]]<br/><b style='font-size: 130%'>$[[value]]M</b>"
      }, {
        "id": "g4",
        "valueAxis": "v1",
        color: layoutColors.defaultText,
        "lineColor": layoutColors.primary,
        "fillColors": layoutColors.primary,
        "fillAlphas": 0.9,
        "lineAlpha": 0.9,
        "type": "column",
        "title": "Target Sales",
        "valueField": "sales1",
        "clustered": false,
        "columnWidth": 0.3,
        "legendValueText": "$[[value]]M",
        "balloonText": "[[title]]<br/><b style='font-size: 130%'>$[[value]]M</b>"
      }, {
        "id": "g1",
        "valueAxis": "v2",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": layoutColors.defaultText,
        color: layoutColors.defaultText,
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "lineColor": layoutColors.danger,
        "type": "smoothedLine",
        "title": "Market Days",
        "useLineColorForBulletBorder": true,
        "valueField": "market1",
        "balloonText": "[[title]]<br/><b style='font-size: 130%'>[[value]]</b>"
      }, {
        "id": "g2",
        "valueAxis": "v2",
        color: layoutColors.defaultText,
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": layoutColors.defaultText,
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "lineColor": layoutColors.warning,
        "type": "smoothedLine",
        "dashLength": 5,
        "title": "Market Days ALL",
        "useLineColorForBulletBorder": true,
        "valueField": "market2",
        "balloonText": "[[title]]<br/><b style='font-size: 130%'>[[value]]</b>"
      }],
      "chartScrollbar": {
        "graph": "g1",
        "oppositeAxis": false,
        "offset": 30,
        gridAlpha: 0,
        color: layoutColors.defaultText,
        scrollbarHeight: 50,
        backgroundAlpha: 0,
        selectedBackgroundAlpha: 0.05,
        selectedBackgroundColor: layoutColors.defaultText,
        graphFillAlpha: 0,
        autoGridCount: true,
        selectedGraphFillAlpha: 0,
        graphLineAlpha: 0.2,
        selectedGraphLineColor: layoutColors.defaultText,
        selectedGraphLineAlpha: 1
      },
      "chartCursor": {
        "pan": true,
        "cursorColor" : layoutColors.danger,
        "valueLineEnabled": true,
        "valueLineBalloonEnabled": true,
        "cursorAlpha": 0,
        "valueLineAlpha": 0.2
      },
      "categoryField": "date",
      "categoryAxis": {
        "axisColor": layoutColors.defaultText,
        "color": layoutColors.defaultText,
        "gridColor": layoutColors.defaultText,
        "parseDates": true,
        "dashLength": 1,
        "minorGridEnabled": true
      },
      "legend": {
        "useGraphSettings": true,
        "position": "top",
        "color": layoutColors.defaultText
      },
      "balloon": {
        "borderThickness": 1,
        "shadowAlpha": 0
      },
      "export": {
        "enabled": true
      },
      "dataProvider": [{
        "date": "2013-01-16",
        "market1": 71,
        "market2": 75,
        "sales1": 5,
        "sales2": 8
      }, {
        "date": "2013-01-17",
        "market1": 74,
        "market2": 78,
        "sales1": 4,
        "sales2": 6
      }, {
        "date": "2013-01-18",
        "market1": 78,
        "market2": 88,
        "sales1": 5,
        "sales2": 2
      }, {
        "date": "2013-01-19",
        "market1": 85,
        "market2": 89,
        "sales1": 8,
        "sales2": 9
      }, {
        "date": "2013-01-20",
        "market1": 82,
        "market2": 89,
        "sales1": 9,
        "sales2": 6
      }, {
        "date": "2013-01-21",
        "market1": 83,
        "market2": 85,
        "sales1": 3,
        "sales2": 5
      }, {
        "date": "2013-01-22",
        "market1": 88,
        "market2": 92,
        "sales1": 5,
        "sales2": 7
      }, {
        "date": "2013-01-23",
        "market1": 85,
        "market2": 90,
        "sales1": 7,
        "sales2": 6
      }, {
        "date": "2013-01-24",
        "market1": 85,
        "market2": 91,
        "sales1": 9,
        "sales2": 5
      }, {
        "date": "2013-01-25",
        "market1": 80,
        "market2": 84,
        "sales1": 5,
        "sales2": 8
      }, {
        "date": "2013-01-26",
        "market1": 87,
        "market2": 92,
        "sales1": 4,
        "sales2": 8
      }, {
        "date": "2013-01-27",
        "market1": 84,
        "market2": 87,
        "sales1": 3,
        "sales2": 4
      }, {
        "date": "2013-01-28",
        "market1": 83,
        "market2": 88,
        "sales1": 5,
        "sales2": 7
      }, {
        "date": "2013-01-29",
        "market1": 84,
        "market2": 87,
        "sales1": 5,
        "sales2": 8
      }, {
        "date": "2013-01-30",
        "market1": 81,
        "market2": 85,
        "sales1": 4,
        "sales2": 7
      }],
      pathToImages: layoutPaths.images.amChart
    });
  }

})();

/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  FunnelChartCtrl.$inject = ["$scope", "$element", "layoutPaths", "baConfig"];
  angular.module('BlurAdmin.pages.charts.amCharts')
      .controller('FunnelChartCtrl', FunnelChartCtrl);

  /** @ngInject */
  function FunnelChartCtrl($scope, $element, layoutPaths, baConfig) {
    var layoutColors = baConfig.colors;
    var id = $element[0].getAttribute('id');
    var funnelChart = AmCharts.makeChart(id, {
      type: 'funnel',
      theme: 'blur',
      color: layoutColors.defaultText,
      labelTickColor: layoutColors.borderDark,
      dataProvider: [
        {
          title: 'Website visits',
          value: 300
        },
        {
          title: 'Downloads',
          value: 123
        },
        {
          title: 'Requested prices',
          value: 98
        },
        {
          title: 'Contaced',
          value: 72
        },
        {
          title: 'Purchased',
          value: 35
        },
        {
          title: 'Asked for support',
          value: 25
        },
        {
          title: 'Purchased more',
          value: 18
        }
      ],
      titleField: 'title',
      marginRight: 160,
      marginLeft: 15,
      labelPosition: 'right',
      funnelAlpha: 0.9,
      valueField: 'value',
      startX: 0,
      alpha: 0.8,
      neckWidth: '0%',
      startAlpha: 0,
      outlineThickness: 1,
      neckHeight: '0%',
      balloonText: '[[title]]:<b>[[value]]</b>',
      export: {
        enabled: true
      },
      creditsPosition: 'bottom-left',
      pathToImages: layoutPaths
    });
  }
})();

/**
 * @author a.demeshko
 * created on 22.12.2015
 */
(function () {
  'use strict';

  ganttChartCtrl.$inject = ["$element"];
  angular.module('BlurAdmin.pages.charts.amCharts')
    .controller('ganttChartCtrl', ganttChartCtrl);

  /** @ngInject */
  function ganttChartCtrl($element) {
    var id = $element[0].getAttribute('id');
    var chart = AmCharts.makeChart( id, {
      "type": "gantt",
      "theme": "light",
      "marginRight": 70,
      "period": "hh",
      "dataDateFormat":"YYYY-MM-DD",
      "balloonDateFormat": "JJ:NN",
      "columnWidth": 0.5,
      "valueAxis": {
        "type": "date",
        "minimum": 7,
        "maximum": 31
      },
      "brightnessStep": 10,
      "graph": {
        "fillAlphas": 1,
        "balloonText": "<b>[[task]]</b>: [[open]] [[value]]"
      },
      "rotate": true,
      "categoryField": "category",
      "segmentsField": "segments",
      "colorField": "color",
      "startDate": "2015-01-01",
      "startField": "start",
      "endField": "end",
      "durationField": "duration",
      "dataProvider": [
        {
        "category": "John",
        "segments": [ {
          "start": 7,
          "duration": 2,
          "color": "#46615e",
          "task": "Task #1"
        }, {
          "duration": 2,
          "color": "#727d6f",
          "task": "Task #2"
        }, {
          "duration": 2,
          "color": "#8dc49f",
          "task": "Task #3"
        } ]
      }, {
        "category": "Smith",
        "segments": [ {
          "start": 10,
          "duration": 2,
          "color": "#727d6f",
          "task": "Task #2"
        }, {
          "duration": 1,
          "color": "#8dc49f",
          "task": "Task #3"
        }, {
          "duration": 4,
          "color": "#46615e",
          "task": "Task #1"
        } ]
      }, {
        "category": "Ben",
        "segments": [ {
          "start": 12,
          "duration": 2,
          "color": "#727d6f",
          "task": "Task #2"
        }, {
          "start": 16,
          "duration": 2,
          "color": "#FFE4C4",
          "task": "Task #4"
        } ]
      }, {
        "category": "Mike",
        "segments": [ {
          "start": 9,
          "duration": 6,
          "color": "#46615e",
          "task": "Task #1"
        }, {
          "duration": 4,
          "color": "#727d6f",
          "task": "Task #2"
        } ]
      }, {
        "category": "Lenny",
        "segments": [ {
          "start": 8,
          "duration": 1,
          "color": "#8dc49f",
          "task": "Task #3"
        }, {
          "duration": 4,
          "color": "#46615e",
          "task": "Task #1"
        } ]
      }, {
        "category": "Scott",
        "segments": [ {
          "start": 15,
          "duration": 3,
          "color": "#727d6f",
          "task": "Task #2"
        } ]
      }, {
        "category": "Julia",
        "segments": [ {
          "start": 9,
          "duration": 2,
          "color": "#46615e",
          "task": "Task #1"
        }, {
          "duration": 1,
          "color": "#727d6f",
          "task": "Task #2"
        }, {
          "duration": 8,
          "color": "#8dc49f",
          "task": "Task #3"
        } ]
      }, {
        "category": "Bob",
        "segments": [ {
          "start": 9,
          "duration": 8,
          "color": "#727d6f",
          "task": "Task #2"
        }, {
          "duration": 7,
          "color": "#8dc49f",
          "task": "Task #3"
        } ]
      }, {
        "category": "Kendra",
        "segments": [ {
          "start": 11,
          "duration": 8,
          "color": "#727d6f",
          "task": "Task #2"
        }, {
          "start": 16,
          "duration": 2,
          "color": "#FFE4C4",
          "task": "Task #4"
        } ]
      }, {
        "category": "Tom",
        "segments": [ {
          "start": 9,
          "duration": 4,
          "color": "#46615e",
          "task": "Task #1"
        }, {
          "duration": 3,
          "color": "#727d6f",
          "task": "Task #2"
        }, {
          "duration": 5,
          "color": "#8dc49f",
          "task": "Task #3"
        } ]
      }, {
        "category": "Kyle",
        "segments": [ {
          "start": 6,
          "duration": 3,
          "color": "#727d6f",
          "task": "Task #2"
        } ]
      }, {
        "category": "Anita",
        "segments": [ {
          "start": 12,
          "duration": 2,
          "color": "#727d6f",
          "task": "Task #2"
        }, {
          "start": 16,
          "duration": 2,
          "color": "#FFE4C4",
          "task": "Task #4"
        } ]
      }, {
        "category": "Jack",
        "segments": [ {
          "start": 8,
          "duration": 10,
          "color": "#46615e",
          "task": "Task #1"
        }, {
          "duration": 2,
          "color": "#727d6f",
          "task": "Task #2"
        } ]
      }, {
        "category": "Kim",
        "segments": [ {
          "start": 12,
          "duration": 2,
          "color": "#727d6f",
          "task": "Task #2"
        }, {
          "duration": 3,
          "color": "#8dc49f",
          "task": "Task #3"
        } ]
      }, {
        "category": "Aaron",
        "segments": [ {
          "start": 18,
          "duration": 2,
          "color": "#727d6f",
          "task": "Task #2"
        }, {
          "duration": 2,
          "color": "#FFE4C4",
          "task": "Task #4"
        } ]
      }, {
        "category": "Alan",
        "segments": [ {
          "start": 17,
          "duration": 2,
          "color": "#46615e",
          "task": "Task #1"
        }, {
          "duration": 2,
          "color": "#727d6f",
          "task": "Task #2"
        }, {
          "duration": 2,
          "color": "#8dc49f",
          "task": "Task #3"
        } ]
      }, {
        "category": "Ruth",
        "segments": [ {
          "start": 13,
          "duration": 2,
          "color": "#727d6f",
          "task": "Task #2"
        }, {
          "duration": 1,
          "color": "#8dc49f",
          "task": "Task #3"
        }, {
          "duration": 4,
          "color": "#46615e",
          "task": "Task #1"
        } ]
      }, {
        "category": "Simon",
        "segments": [ {
          "start": 10,
          "duration": 3,
          "color": "#727d6f",
          "task": "Task #2"
        }, {
          "start": 17,
          "duration": 4,
          "color": "#FFE4C4",
          "task": "Task #4"
        } ]
      } ],
      "valueScrollbar": {
        "autoGridCount":true
      },
      "chartCursor": {
        "cursorColor":"#55bb76",
        "valueBalloonsEnabled": false,
        "cursorAlpha": 0,
        "valueLineAlpha":0.5,
        "valueLineBalloonEnabled": true,
        "valueLineEnabled": true,
        "zoomable":false,
        "valueZoomable":true
      },
      "export": {
        "enabled": true
      }
    });
  }

})();

/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  LineChartCtrl.$inject = ["$scope", "baConfig", "$element", "layoutPaths"];
  angular.module('BlurAdmin.pages.charts.amCharts')
      .controller('LineChartCtrl', LineChartCtrl);

  /** @ngInject */
  function LineChartCtrl($scope, baConfig, $element, layoutPaths) {
    var layoutColors = baConfig.colors;
    var id = $element[0].getAttribute('id');
    var lineChart = AmCharts.makeChart(id, {
      type: 'serial',
      theme: 'blur',
      color: layoutColors.defaultText,
      marginTop: 0,
      marginRight: 15,
      dataProvider: [
        {
          year: '1990',
          value: -0.17
        },
        {
          year: '1991',
          value: -0.254
        },
        {
          year: '1992',
          value: 0.019
        },
        {
          year: '1993',
          value: -0.063
        },
        {
          year: '1994',
          value: 0.005
        },
        {
          year: '1995',
          value: 0.077
        },
        {
          year: '1996',
          value: 0.12
        },
        {
          year: '1997',
          value: 0.011
        },
        {
          year: '1998',
          value: 0.177
        },
        {
          year: '1999',
          value: -0.021
        },
        {
          year: '2000',
          value: -0.037
        },
        {
          year: '2001',
          value: 0.03
        },
        {
          year: '2002',
          value: 0.179
        },
        {
          year: '2003',
          value: 0.2
        },
        {
          year: '2004',
          value: 0.180
        },
        {
          year: '2005',
          value: 0.21
        }
      ],
      valueAxes: [
        {
          axisAlpha: 0,
          position: 'left',
          gridAlpha: 0.5,
          gridColor: layoutColors.border,
        }
      ],
      graphs: [
        {
          id: 'g1',
          balloonText: '[[value]]',
          bullet: 'round',
          bulletSize: 8,
          lineColor: layoutColors.danger,
          lineThickness: 1,
          negativeLineColor: layoutColors.warning,
          type: 'smoothedLine',
          valueField: 'value'
        }
      ],
      chartScrollbar: {
        graph: 'g1',
        gridAlpha: 0,
        color: layoutColors.defaultText,
        scrollbarHeight: 55,
        backgroundAlpha: 0,
        selectedBackgroundAlpha: 0.05,
        selectedBackgroundColor: layoutColors.defaultText,
        graphFillAlpha: 0,
        autoGridCount: true,
        selectedGraphFillAlpha: 0,
        graphLineAlpha: 0.2,
        selectedGraphLineColor: layoutColors.defaultText,
        selectedGraphLineAlpha: 1
      },
      chartCursor: {
        categoryBalloonDateFormat: 'YYYY',
        cursorAlpha: 0,
        valueLineEnabled: true,
        valueLineBalloonEnabled: true,
        valueLineAlpha: 0.5,
        fullWidth: true
      },
      dataDateFormat: 'YYYY',
      categoryField: 'year',
      categoryAxis: {
        minPeriod: 'YYYY',
        parseDates: true,
        minorGridAlpha: 0.1,
        minorGridEnabled: true,
        gridAlpha: 0.5,
        gridColor: layoutColors.border,
      },
      export: {
        enabled: true
      },
      creditsPosition: 'bottom-right',
      pathToImages: layoutPaths.images.amChart
    });

    lineChart.addListener('rendered', zoomChart);
    if (lineChart.zoomChart) {
      lineChart.zoomChart();
    }

    function zoomChart() {
      lineChart.zoomToIndexes(Math.round(lineChart.dataProvider.length * 0.4), Math.round(lineChart.dataProvider.length * 0.55));
    }
  }

})();

/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  PieChartCtrl.$inject = ["$element", "layoutPaths", "baConfig"];
  angular.module('BlurAdmin.pages.charts.amCharts')
      .controller('PieChartCtrl', PieChartCtrl);

  /** @ngInject */
  function PieChartCtrl($element, layoutPaths, baConfig) {
    var layoutColors = baConfig.colors;
    var id = $element[0].getAttribute('id');
    var pieChart = AmCharts.makeChart(id, {
      type: 'pie',
      startDuration: 0,
      theme: 'blur',
      addClassNames: true,
      color: layoutColors.defaultText,
      labelTickColor: layoutColors.borderDark,
      legend: {
        position: 'right',
        marginRight: 100,
        autoMargins: false,
      },
      innerRadius: '40%',
      defs: {
        filter: [
          {
            id: 'shadow',
            width: '200%',
            height: '200%',
            feOffset: {
              result: 'offOut',
              in: 'SourceAlpha',
              dx: 0,
              dy: 0
            },
            feGaussianBlur: {
              result: 'blurOut',
              in: 'offOut',
              stdDeviation: 5
            },
            feBlend: {
              in: 'SourceGraphic',
              in2: 'blurOut',
              mode: 'normal'
            }
          }
        ]
      },
      dataProvider: [
        {
          country: 'Lithuania',
          litres: 501.9
        },
        {
          country: 'Czech Republic',
          litres: 301.9
        },
        {
          country: 'Ireland',
          litres: 201.1
        },
        {
          country: 'Germany',
          litres: 165.8
        },
        {
          country: 'Australia',
          litres: 139.9
        },
        {
          country: 'Austria',
          litres: 128.3
        },
        {
          country: 'UK',
          litres: 99
        },
        {
          country: 'Belgium',
          litres: 60
        }
      ],
      valueField: 'litres',
      titleField: 'country',
      export: {
        enabled: true
      },
      creditsPosition: 'bottom-left',

      autoMargins: false,
      marginTop: 10,
      alpha: 0.8,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      pullOutRadius: 0,
      pathToImages: layoutPaths.images.amChart,
      responsive: {
        enabled: true,
        rules: [
          // at 900px wide, we hide legend
          {
            maxWidth: 900,
            overrides: {
              legend: {
                enabled: false
              }
            }
          },

          // at 200 px we hide value axis labels altogether
          {
            maxWidth: 200,
            overrides: {
              valueAxes: {
                labelsEnabled: false
              },
              marginTop: 30,
              marginBottom: 30,
              marginLeft: 30,
              marginRight: 30
            }
          }
        ]
      }
    });

    pieChart.addListener('init', handleInit);

    pieChart.addListener('rollOverSlice', function (e) {
      handleRollOver(e);
    });

    function handleInit() {
      pieChart.legend.addListener('rollOverItem', handleRollOver);
    }

    function handleRollOver(e) {
      var wedge = e.dataItem.wedge.node;
      wedge.parentNode.appendChild(wedge);
    }
  }

})();

/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  NotificationsCtrl.$inject = ["$scope", "toastr"];
  angular.module('BlurAdmin.pages.ui.modals')
      .controller('NotificationsCtrl', NotificationsCtrl);

  /** @ngInject */
  function NotificationsCtrl($scope, toastr) {
    $scope.showSuccessMsg = function() {
      toastr.success('Your information has been saved successfully!');
    };

    $scope.showInfoMsg = function() {
      toastr.info("You've got a new email!", 'Information');
    };

    $scope.showErrorMsg = function() {
      toastr.error("Your information hasn't been saved!", 'Error');
    };

    $scope.showWarningMsg = function() {
      toastr.warning('Your computer is about to explode!', 'Warning');
    };
  }

})();

/**
 * Created by n.poltoratsky
 * on 24.06.2016.
 */
(function () {
    'use strict';

    ProgressModalCtrl.$inject = ["$timeout", "baProgressModal"];
    angular.module('BlurAdmin.pages.ui.modals')
        .controller('ProgressModalCtrl', ProgressModalCtrl);

    function ProgressModalCtrl($timeout, baProgressModal) {

        baProgressModal.setProgress(0);

        (function changeValue() {
            if (baProgressModal.getProgress() >= 100) {
                baProgressModal.close();
            } else {
                baProgressModal.setProgress(baProgressModal.getProgress() + 10);
                $timeout(changeValue, 300);
            }
        })();
    }

})();

/**
 * @author a.demeshko
 * created on 28.12.2015
 */
(function () {
  'use strict';

  MailDetailCtrl.$inject = ["$stateParams", "mailMessages"];
  angular.module('BlurAdmin.pages.components.mail')
    .controller('MailDetailCtrl', MailDetailCtrl);

  /** @ngInject */
  function MailDetailCtrl($stateParams, mailMessages) {
    var vm = this;
    vm.mail = mailMessages.getMessageById($stateParams.id);
    vm.label = $stateParams.label;
  }

})();

/**
 * @author a.demeshko
 * created on 24/12/15
 */
(function () {
  'use strict';

  composeBoxCtrl.$inject = ["subject", "to", "text"];
  angular.module('BlurAdmin.pages.components.mail')
    .controller('composeBoxCtrl', composeBoxCtrl);

  /** @ngInject */
  function composeBoxCtrl(subject, to, text) {
    var vm = this;
    vm.subject = subject;
    vm.to = to;
    vm.text = text;
  }
})();
/**
 * @author a.demeshko
 * created on 12/24/15
 */
(function () {
  'use strict';

  composeModal.$inject = ["$uibModal"];
  angular.module('BlurAdmin.pages.components.mail')
    .service('composeModal', composeModal);

  /** @ngInject */
  function composeModal($uibModal) {
      this.open = function(options){
        return $uibModal.open({
          animation: false,
          templateUrl: 'app/pages/components/mail/composeBox/compose.html',
          controller: 'composeBoxCtrl',
          controllerAs: 'boxCtrl',
          size: 'compose',
          resolve: {
            subject: function () {
              return options.subject;
            },
            to: function () {
              return options.to;
            },
            text: function () {
              return options.text;
            }
          }
        });
      }

  }

})();
/**
 * @author a.demeshko
 * created on 28.12.2015
 */
(function () {
  'use strict';

  MailListCtrl.$inject = ["$stateParams", "mailMessages"];
  angular.module('BlurAdmin.pages.components.mail')
    .controller('MailListCtrl', MailListCtrl);

  /** @ngInject */
  function MailListCtrl($stateParams,  mailMessages) {
    var vm = this;
    vm.messages = mailMessages.getMessagesByLabel($stateParams.label);
    vm.label = $stateParams.label;
  }

})();

/* Minified js for jQuery BackTop */
!function(o){o.fn.backTop=function(e){var n=this,i=o.extend({position:400,speed:500,color:"white"},e),t=i.position,c=i.speed,d=i.color;n.addClass("white"==d?"white":"red"==d?"red":"green"==d?"green":"black"),n.css({right:40,bottom:40,position:"fixed"}),o(document).scroll(function(){var e=o(window).scrollTop();e>=t?n.fadeIn(c):n.fadeOut(c)}),n.click(function(){o("html, body").animate({scrollTop:0},{duration:1200})})}}(jQuery);
/**
 * Created by n.poltoratsky
 * on 23.06.2016.
 */
(function(){
    'use strict';

    datepickerCtrl.$inject = ["$scope"];
    angular.module('BlurAdmin.pages.form')
        .controller('datepickerCtrl', datepickerCtrl);

    /** @ngInject */
    function datepickerCtrl($scope) {

        $scope.dt = new Date();
        $scope.options = {
            showWeeks: false
        };

    }
})();
/**
 * Created by n.poltoratsky
 * on 23.06.2016.
 */
(function(){
    'use strict';

    datepickerpopupCtrl.$inject = ["$scope"];
    angular.module('BlurAdmin.pages.form')
        .controller('datepickerpopupCtrl', datepickerpopupCtrl);

    /** @ngInject */
    function datepickerpopupCtrl($scope) {

        $scope.open = open;
        $scope.opened = false;
        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];
        $scope.options = {
            showWeeks: false
        };

        function open() {
            $scope.opened = true;
        }
    }
})();
/**
 * @author v.lugovsky
 * created on 22.04.2016
 * @deprecated
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.form')
      .controller('OldSelectpickerPanelCtrl', OldSelectpickerPanelCtrl);

  /** @ngInject */
  function OldSelectpickerPanelCtrl() {
    var vm = this;

    vm.standardSelectItems = [
      { label: 'Option 1', value: 1 },
      { label: 'Option 2', value: 2 },
      { label: 'Option 3', value: 3 },
      { label: 'Option 4', value: 4 },
    ];

    vm.selectWithSearchItems = [
      { label: 'Hot Dog, Fries and a Soda', value: 1 },
      { label: 'Burger, Shake and a Smile', value: 2 },
      { label: 'Sugar, Spice and all things nice', value: 3 },
      { label: 'Baby Back Ribs', value: 4 },
    ];

    vm.groupedSelectItems = [
      { label: 'Group 1 - Option 1', value: 1, group: 'Group 1' },
      { label: 'Group 2 - Option 2', value: 2, group: 'Group 2' },
      { label: 'Group 1 - Option 3', value: 3, group: 'Group 1' },
      { label: 'Group 2 - Option 4', value: 4, group: 'Group 2' },
    ];

  }

})();

/**
 * @author v.lugovksy
 * created on 16.12.2015
 * @deprecated
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.form')
      .directive('selectpicker', selectpicker);

  /** @ngInject */
  function selectpicker() {
    return {
      restrict: 'A',
      require: '?ngOptions',
      priority: 1500, // make priority bigger than ngOptions and ngRepeat
      link: {
        pre: function(scope, elem, attrs) {
          elem.append('<option data-hidden="true" disabled value="">' + (attrs.title || 'Select something') + '</option>')
        },
        post: function(scope, elem, attrs) {
          function refresh() {
            elem.selectpicker('refresh');
          }

          if (attrs.ngModel) {
            scope.$watch(attrs.ngModel, refresh);
          }

          if (attrs.ngDisabled) {
            scope.$watch(attrs.ngDisabled, refresh);
          }

          elem.selectpicker({ dropupAuto: false, hideDisabled: true });
        }
      }
    };
  }


})();
/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.form')
      .directive('tagInput', tagInput);

  /** @ngInject */
  function tagInput() {
    return {
      restrict: 'A',
      link: function( $scope, elem, attr) {
        $(elem).tagsinput({
          tagClass:  'label label-' + attr.tagInput
        });
      }
    };
  }
})();
/**
 * @author v.lugovsky
 * created on 07.06.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.form')
      .controller('OldSwitchPanelCtrl', OldSwitchPanelCtrl);

  /** @ngInject */
  function OldSwitchPanelCtrl() {
    var vm = this;

    vm.switcherValues = {
      primary: true,
      warning: true,
      danger: true,
      info: true,
      success: true
    };
  }

})();

/**
 * @author v.lugovksy
 * created on 16.12.2015
 *
 */
(function () {
  'use strict';

  switchDirective.$inject = ["$timeout"];
  angular.module('BlurAdmin.pages.form')
      .directive('switch', switchDirective);

  /** @ngInject */
  function switchDirective($timeout) {
    return {
      restrict: 'EA',
      replace: true,
      scope: {
        ngModel: '='
      },
      template: function(el, attrs) {
        return '<div class="switch-container ' + (attrs.color || '') + '"><input type="checkbox" ng-model="ngModel"></div>';
      },
      link: function (scope, elem, attr) {
        var input = $(elem).find('input');
        input.bootstrapSwitch({
          size: 'small',
          onColor: attr.color
        });
        input.on('switchChange.bootstrapSwitch', function(event, state) {
          scope.ngModel = state;
          scope.$apply();
        });

      }
    };
  }
})();

/**
 * @author v.lugovsky
 * created on 10.12.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.form')
      .controller('SwitchDemoPanelCtrl', SwitchDemoPanelCtrl);

  /** @ngInject */
  function SwitchDemoPanelCtrl() {
    var vm = this;
    vm.switches = {
      s1: true,
      s2: false,
      s3: true,
      s4: true,
      s5: false
    };
  }

})();

/**
 * @author p.maslava
 * created on 28.11.2016
 */

(function() {
  'use strict';

  angular.module('BlurAdmin.pages.form')
    .filter('groupSelectpickerOptions', GroupSelectpickerOptions);

  /** @ngInject */
  function GroupSelectpickerOptions() {
    return function (items, props) {
      var out = [];

      if (angular.isArray(items)) {
        var keys = Object.keys(props);

        items.forEach(function (item) {
          var itemMatches = false;

          for (var i = 0; i < keys.length; i++) {
            var prop = keys[i];
            var text = props[prop].toLowerCase();
            if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
              itemMatches = true;
              break;
            }
          }

          if (itemMatches) {
            out.push(item);
          }
        });
      } else {
        // Let the output be the input untouched
        out = items;
      }

      return out;
    };
  }
})();
/**
 * @author p.maslava
 * created on 28.11.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.form')
    .controller('SelectpickerPanelCtrl', SelectpickerPanelCtrl);

  /** @ngInject */
  function SelectpickerPanelCtrl() {

    var vm = this;
    vm.disabled = undefined;


    vm.standardItem = {};
    vm.standardSelectItems = [
      {label: 'Option 1', value: 1},
      {label: 'Option 2', value: 2},
      {label: 'Option 3', value: 3},
      {label: 'Option 4', value: 4}
    ];

    vm.withSearchItem = {};

    vm.selectWithSearchItems = [
      {label: 'Hot Dog, Fries and a Soda', value: 1},
      {label: 'Burger, Shake and a Smile', value: 2},
      {label: 'Sugar, Spice and all things nice', value: 3},
      {label: 'Baby Back Ribs', value: 4}
    ];
    vm.groupedItem = {};
    vm.groupedSelectItems = [
      {label: 'Group 1 - Option 1', value: 1, group: 'Group 1'},
      {label: 'Group 2 - Option 2', value: 2, group: 'Group 2'},
      {label: 'Group 1 - Option 3', value: 3, group: 'Group 1'},
      {label: 'Group 2 - Option 4', value: 4, group: 'Group 2'}
    ];

    vm.groupedByItem = {};
    vm.groupedBySelectItems = [
      {name: 'Adam', country: 'United States'},
      {name: 'Amalie', country: 'Argentina'},
      {name: 'Estefanía', country: 'Argentina'},
      {name: 'Adrian', country: 'Ecuador'},
      {name: 'Wladimir', country: 'Ecuador'},
      {name: 'Samantha', country: 'United States'},
      {name: 'Nicole', country: 'Colombia'},
      {name: 'Natasha', country: 'Ecuador'},
      {name: 'Michael', country: 'Colombia'},
      {name: 'Nicolás', country: 'Colombia'}
    ];
    vm.someGroupFn = function (item) {

      if (item.name[0] >= 'A' && item.name[0] <= 'M')
        return 'From A - M';
      if (item.name[0] >= 'N' && item.name[0] <= 'Z')
        return 'From N - Z';
    };

    vm.disableItem = {};
    vm.disableItems = [];

    vm.multipleItem = {};
    vm.multipleSelectItems = [
      {label: 'Option 1', value: 1},
      {label: 'Option 2', value: 2},
      {label: 'Option 3', value: 3},
      {label: 'Option 4', value: 4},
      {label: 'Option 5', value: 5},
      {label: 'Option 6', value: 6},
      {label: 'Option 7', value: 7},
      {label: 'Option 8', value: 8}
    ];
    vm.withDeleteItem = {};
    vm.withDeleteSelectItems = [
      {label: 'Option 1', value: 1},
      {label: 'Option 2', value: 2},
      {label: 'Option 3', value: 3},
      {label: 'Option 4', value: 4},
      {label: 'Option 5', value: 5},
      {label: 'Option 6', value: 6},
      {label: 'Option 7', value: 7},
      {label: 'Option 8', value: 8}
    ];

  }
})();



angular.module('BlurAdmin').run(['$templateCache', function($templateCache) {$templateCache.put('app/pages/maps/maps.html','<div class="widgets"><div class="row"><div class="col-md-12" ui-view="" autoscroll="true" autoscroll-body-top=""></div></div></div>');
$templateCache.put('app/pages/profile/profile.html','<div ba-panel="" ba-panel-class="profile-page"><div class="panel-content"><div class="progress-info">Your profile is 70% Complete</div><div class="progress"><div class="progress-bar progress-bar-primary progress-bar-striped active" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width: 70%"></div></div><h3 class="with-line">General Information</h3><div class="row"><div class="col-md-6"><div class="form-group row clearfix"><label for="inputFirstName" class="col-sm-3 control-label">Picture</label><div class="col-sm-9"><div class="userpic"><div class="userpic-wrapper"><img ng-src="{{ picture }}" ng-click="uploadPicture()"></div><i class="ion-ios-close-outline" ng-click="removePicture()" ng-if="!noPicture"></i> <a href="" class="change-userpic" ng-click="uploadPicture()">Change Profile Picture</a> <input type="file" ng-show="false" id="uploadFile" ng-file-select="onFileSelect($files)"></div></div></div></div><div class="col-md-6"></div></div><div class="row"><div class="col-md-6"><div class="form-group row clearfix"><label for="inputFirstName" class="col-sm-3 control-label">First Name</label><div class="col-sm-9"><input type="text" class="form-control" id="inputFirstName" placeholder="" value="Anastasiya"></div></div><div class="form-group row clearfix"><label for="inputLastName" class="col-sm-3 control-label">Last Name</label><div class="col-sm-9"><input type="text" class="form-control" id="inputLastName" placeholder="" value=""></div></div></div><div class="col-md-6"><div class="form-group row clearfix"><label class="col-sm-3 control-label">Department</label><div class="col-sm-9"><select class="form-control" selectpicker=""><option>Web Development</option><option>System Development</option><option>Sales</option><option>Human Resources</option></select></div></div><div class="form-group row clearfix"><label for="inputOccupation" class="col-sm-3 control-label">Occupation</label><div class="col-sm-9"><input type="text" class="form-control" id="inputOccupation" placeholder="" value="Front End Web Developer"></div></div></div></div><h3 class="with-line">Change Password</h3><div class="row"><div class="col-md-6"><div class="form-group row clearfix"><label for="inputPassword" class="col-sm-3 control-label">Password</label><div class="col-sm-9"><input type="password" class="form-control" id="inputPassword" placeholder="" value="12345678"></div></div></div><div class="col-md-6"><div class="form-group row clearfix"><label for="inputConfirmPassword" class="col-sm-3 control-label">Confirm Password</label><div class="col-sm-9"><input type="password" class="form-control" id="inputConfirmPassword" placeholder=""></div></div></div></div><h3 class="with-line">Contact Information</h3><div class="row"><div class="col-md-6"><div class="form-group row clearfix"><label for="inputEmail3" class="col-sm-3 control-label">Email</label><div class="col-sm-9"><input type="email" class="form-control" id="inputEmail3" placeholder="" value="contact@akveo.com"></div></div><div class="form-group row clearfix"><label for="inputPhone" class="col-sm-3 control-label">Phone</label><div class="col-sm-9"><input type="text" class="form-control" id="inputPhone" placeholder="" value="+1 (23) 456 7890"></div></div></div><div class="col-md-6"><div class="form-group row clearfix"><label class="col-sm-3 control-label">Office Location</label><div class="col-sm-9"><select class="form-control" title="Standard Select" selectpicker=""><option>San Francisco</option><option>London</option><option>Minsk</option><option>Tokio</option></select></div></div><div class="form-group row clearfix"><label for="inputRoom" class="col-sm-3 control-label">Room</label><div class="col-sm-9"><input type="text" class="form-control" id="inputRoom" placeholder="" value="303"></div></div></div></div><h3 class="with-line">Social Profiles</h3><div class="social-profiles row clearfix"><div class="col-md-3 col-sm-4" ng-repeat="item in socialProfiles"><a class="sn-link" href="" ng-click="showModal(item)" ng-if="!item.href"><i class="socicon {{ item.icon }}"></i> <span>{{ item.name }}</span></a> <a class="sn-link connected" href="{{ item.href }}" target="_blank" ng-if="item.href"><i class="socicon {{ item.icon }}"></i> <span>{{ item.name }}</span> <em class="ion-ios-close-empty sn-link-close" ng-mousedown="unconnect(item)"></em></a></div></div><h3 class="with-line">Send Email Notifications</h3><div class="notification row clearfix"><div class="col-sm-6"><div class="form-group row clearfix"><label class="col-xs-8">When I receive a message</label><div class="col-xs-4"><switch color="primary" ng-model="switches[0]"></switch></div></div><div class="form-group row clearfix"><label class="col-xs-8">When Someone sends me an invitation</label><div class="col-xs-4"><switch color="primary" ng-model="switches[1]"></switch></div></div><div class="form-group row clearfix"><label class="col-xs-8">When profile information changes</label><div class="col-xs-4"><switch color="primary" ng-model="switches[2]"></switch></div></div></div><div class="col-sm-6"><div class="form-group row clearfix"><label class="col-xs-8">When anyone logs into your account from a new device or browser</label><div class="col-xs-4"><switch color="primary" ng-model="switches[3]"></switch></div></div><div class="form-group row clearfix"><label class="col-xs-8">Weekly Reports</label><div class="col-xs-4"><switch color="primary" ng-model="switches[4]"></switch></div></div><div class="form-group row clearfix"><label class="col-xs-8">Daily Reports</label><div class="col-xs-4"><switch color="primary" ng-model="switches[5]"></switch></div></div></div></div><button type="button" class="btn btn-primary btn-with-icon save-profile"><i class="ion-android-checkmark-circle"></i>Update Profile</button></div></div>');
$templateCache.put('app/pages/profile/profileModal.html','<div class="modal-content"><div class="modal-header"><button type="button" class="close" ng-click="$dismiss()" aria-label="Close"><em class="ion-ios-close-empty sn-link-close"></em></button><h4 class="modal-title" id="myModalLabel">Add Account</h4></div><form name="linkForm"><div class="modal-body"><p>Paste a link to your profile into the box below</p><div class="form-group"><input type="text" class="form-control" placeholder="Link to Profile" ng-model="link"></div></div><div class="modal-footer"><button type="button" class="btn btn-primary" ng-click="ok(link)">Save changes</button></div></form></div>');
$templateCache.put('app/pages/dashboard/dashboard.html','<dashboard-pie-chart></dashboard-pie-chart><div class="row"><div class="col-lg-6 col-md-12 col-sm-12" ba-panel="" ba-panel-title="Acquisition Channels" ba-panel-class="medium-panel traffic-panel"><traffic-chart></traffic-chart></div><div class="col-lg-6 col-md-12 col-sm-12" ba-panel="" ba-panel-title="Users by Country" ba-panel-class="medium-panel"><dashboard-map></dashboard-map></div></div><div class="row"><div class="col-xlg-9 col-lg-6 col-md-6 col-sm-12 col-xs-12"><div class="row"><div class="col-xlg-8 col-lg-12 col-md-12 col-sm-7 col-xs-12" ba-panel="" ba-panel-title="Revenue" ba-panel-class="medium-panel"><dashboard-line-chart></dashboard-line-chart></div><div class="col-xlg-4 col-lg-12 col-md-12 col-sm-5 col-xs-12" ba-panel="" ba-panel-class="popular-app medium-panel"><popular-app></popular-app></div></div></div><div class="col-xlg-3 col-lg-6 col-md-6 col-sm-12 col-xs-12" ba-panel="" ba-panel-title="Feed" ba-panel-class="large-panel with-scroll feed-panel"><blur-feed></blur-feed></div></div><div class="row shift-up"><div class="col-xlg-3 col-lg-6 col-md-6 col-xs-12" ba-panel="" ba-panel-title="To Do List" ba-panel-class="xmedium-panel feed-comply-panel with-scroll todo-panel"><dashboard-todo></dashboard-todo></div><div class="col-xlg-6 col-lg-6 col-md-6 col-xs-12" ba-panel="" ba-panel-title="Calendar" ba-panel-class="xmedium-panel feed-comply-panel with-scroll calendar-panel"><dashboard-calendar></dashboard-calendar></div></div>');
$templateCache.put('app/theme/components/backTop/backTop.html','<i class="fa fa-angle-up back-top" id="backTop" title="Back to Top"></i>');
$templateCache.put('app/theme/components/baWizard/baWizard.html','<div class="ba-wizard"><div class="ba-wizard-navigation-container"><div ng-repeat="t in $baWizardController.tabs" class="ba-wizard-navigation {{$baWizardController.tabNum == $index ? \'active\' : \'\'}}" ng-click="$baWizardController.selectTab($index)">{{t.title}}</div></div><div class="progress ba-wizard-progress"><div class="progress-bar progress-bar-danger active" role="progressbar" aria-valuemin="0" aria-valuemax="100" ng-style="{width: $baWizardController.progress + \'%\'}"></div></div><div class="steps" ng-transclude=""></div><nav><ul class="pager ba-wizard-pager"><li class="previous"><button ng-disabled="$baWizardController.isFirstTab()" ng-click="$baWizardController.previousTab()" type="button" class="btn btn-primary"><span aria-hidden="true">&larr;</span> previous</button></li><li class="next"><button ng-disabled="$baWizardController.isLastTab()" ng-click="$baWizardController.nextTab()" type="button" class="btn btn-primary">next <span aria-hidden="true">&rarr;</span></button></li></ul></nav></div>');
$templateCache.put('app/theme/components/baWizard/baWizardStep.html','<section ng-show="selected" class="step" ng-transclude=""></section>');
$templateCache.put('app/theme/components/contentTop/contentTop.html','<div class="content-top clearfix"><h1 class="al-title">{{ activePageTitle }}</h1><ul class="breadcrumb al-breadcrumb"><li><a href="#/dashboard">Home</a></li><li>{{ activePageTitle }}</li></ul></div>');
$templateCache.put('app/theme/components/msgCenter/msgCenter.html','<ul class="al-msg-center clearfix"><li uib-dropdown=""><a href="" uib-dropdown-toggle=""><i class="fa fa-bell-o"></i><span>5</span><div class="notification-ring"></div></a><div uib-dropdown-menu="" class="top-dropdown-menu"><i class="dropdown-arr"></i><div class="header clearfix"><strong>Notifications</strong> <a href="">Mark All as Read</a> <a href="">Settings</a></div><div class="msg-list"><a href="" class="clearfix" ng-repeat="msg in notifications"><div class="img-area"><img ng-class="{\'photo-msg-item\' : !msg.image}" ng-src="{{::( msg.image || (users[msg.userId].name | profilePicture) )}}"></div><div class="msg-area"><div ng-bind-html="getMessage(msg)"></div><span>{{ msg.time }}</span></div></a></div><a href="">See all notifications</a></div></li><li uib-dropdown=""><a href="" class="msg" uib-dropdown-toggle=""><i class="fa fa-envelope-o"></i><span>5</span><div class="notification-ring"></div></a><div uib-dropdown-menu="" class="top-dropdown-menu"><i class="dropdown-arr"></i><div class="header clearfix"><strong>Messages</strong> <a href="">Mark All as Read</a> <a href="">Settings</a></div><div class="msg-list"><a href="" class="clearfix" ng-repeat="msg in messages"><div class="img-area"><img class="photo-msg-item" ng-src="{{::( users[msg.userId].name | profilePicture )}}"></div><div class="msg-area"><div>{{ msg.text }}</div><span>{{ msg.time }}</span></div></a></div><a href="">See all messages</a></div></li></ul>');
$templateCache.put('app/theme/components/pageTop/pageTop.html','<div class="page-top clearfix" scroll-position="scrolled" max-height="50" ng-class="{\'scrolled\': scrolled}"><a href="#/dashboard" class="al-logo clearfix"><span>Blur</span>Admin</a> <a href="" class="collapse-menu-link ion-navicon" ba-sidebar-toggle-menu=""></a><div class="search"><i class="ion-ios-search-strong" ng-click="startSearch()"></i> <input id="searchInput" type="text" placeholder="Search for..."></div><div class="user-profile clearfix"><div class="al-user-profile" uib-dropdown=""><a uib-dropdown-toggle="" class="profile-toggle-link"><img ng-src="{{::( \'Nasta\' | profilePicture )}}"></a><ul class="top-dropdown-menu profile-dropdown" uib-dropdown-menu=""><li><i class="dropdown-arr"></i></li><li><a href="#/profile"><i class="fa fa-user"></i>Profile</a></li><li><a href=""><i class="fa fa-cog"></i>Settings</a></li><li><a href="" class="signout"><i class="fa fa-power-off"></i>Sign out</a></li></ul></div><msg-center></msg-center></div></div>');
$templateCache.put('app/theme/components/progressBarRound/progressBarRound.html','<svg class="center-block progress-bar-round" width="200" height="200"><circle cx="100" cy="100" r="90" fill="none" stroke="#F8F8FF" stroke-width="8"></circle><circle cx="100" cy="100" r="90" fill="none" id="loader" class="" stroke="#209e91" stroke-width="8" stroke-dasharray="0,20000" transform="rotate(-90,100,100)" stroke-linecap="round"></circle><text text-anchor="middle" class="loading" x="100" y="90">Loading...</text><text class="percentage" text-anchor="middle" x="100" y="130">{{progress}}%</text></svg>');
$templateCache.put('app/theme/components/widgets/widgets.html','<div class="widgets"><div ng-repeat="widgetBlock in ngModel" ng-class="{\'row\': widgetBlock.widgets.length > 1}"><div ng-repeat="widgetCol in widgetBlock.widgets" ng-class="{\'col-md-6\': widgetBlock.widgets.length === 2}" ng-model="widgetCol" class="widgets-block"><div ba-panel="" ba-panel-title="{{::widget.title}}" ng-repeat="widget in widgetCol" ba-panel-class="with-scroll {{widget.panelClass}}"><div ng-include="widget.url"></div></div></div></div></div>');
$templateCache.put('app/theme/components/baSidebar/ba-sidebar.html','<aside class="al-sidebar" ng-swipe-right="$baSidebarService.setMenuCollapsed(false)" ng-swipe-left="$baSidebarService.setMenuCollapsed(true)" ng-mouseleave="hoverElemTop=selectElemTop"><ul class="al-sidebar-list" slimscroll="{height: \'{{menuHeight}}px\'}" slimscroll-watch="menuHeight"><li ng-repeat="item in ::menuItems" class="al-sidebar-list-item" ng-class="::{\'with-sub-menu\': item.subMenu}" ui-sref-active="selected" ba-sidebar-toggling-item="item"><a ng-mouseenter="hoverItem($event, item)" ui-state="item.stateRef || \'\'" ng-href="{{::(item.fixedHref ? item.fixedHref: \'\')}}" ng-if="::!item.subMenu" class="al-sidebar-list-link"><i class="{{ ::item.icon }}"></i><span>{{ ::item.title }}</span></a> <a ng-mouseenter="hoverItem($event, item)" ng-if="::item.subMenu" class="al-sidebar-list-link" ba-ui-sref-toggler=""><i class="{{ ::item.icon }}"></i><span>{{ ::item.title }}</span> <b class="fa fa-angle-down" ui-sref-active="fa-angle-up" ng-if="::item.subMenu"></b></a><ul ng-if="::item.subMenu" class="al-sidebar-sublist" ng-class="{\'slide-right\': item.slideRight}" ba-ui-sref-toggling-submenu=""><li ng-repeat="subitem in ::item.subMenu" ng-class="::{\'with-sub-menu\': subitem.subMenu}" ui-sref-active="selected" ba-sidebar-toggling-item="subitem" class="ba-sidebar-sublist-item"><a ng-mouseenter="hoverItem($event, item)" ng-if="::subitem.subMenu" ba-ui-sref-toggler="" class="al-sidebar-list-link subitem-submenu-link"><span>{{ ::subitem.title }}</span> <b class="fa" ng-class="{\'fa-angle-up\': subitem.expanded, \'fa-angle-down\': !subitem.expanded}" ng-if="::subitem.subMenu"></b></a><ul ng-if="::subitem.subMenu" class="al-sidebar-sublist subitem-submenu-list" ng-class="{expanded: subitem.expanded, \'slide-right\': subitem.slideRight}" ba-ui-sref-toggling-submenu=""><li ng-mouseenter="hoverItem($event, item)" ng-repeat="subSubitem in ::subitem.subMenu" ui-sref-active="selected"><a ng-mouseenter="hoverItem($event, item)" href="" ng-if="::subSubitem.disabled" class="al-sidebar-list-link">{{ ::subSubitem.title }}</a> <a ng-mouseenter="hoverItem($event, item)" ui-state="subSubitem.stateRef || \'\'" ng-if="::!subSubitem.disabled" ng-href="{{::(subSubitem.fixedHref ? subSubitem.fixedHref: \'\')}}">{{::subSubitem.title }}</a></li></ul><a ng-mouseenter="hoverItem($event, item)" href="" ng-if="::(!subitem.subMenu && subitem.disabled)" class="al-sidebar-list-link">{{ ::subitem.title }}</a> <a ng-mouseenter="hoverItem($event, item)" target="{{::(subitem.blank ? \'_blank\' : \'_self\')}}" ng-if="::(!subitem.subMenu && !subitem.disabled)" ui-state="subitem.stateRef || \'\'" ng-href="{{::(subitem.fixedHref ? subitem.fixedHref: \'\')}}">{{ ::subitem.title}}</a></li></ul></li></ul><div class="sidebar-hover-elem" ng-style="{top: hoverElemTop + \'px\', height: hoverElemHeight + \'px\'}" ng-class="{\'show-hover-elem\': showHoverElem }"></div></aside>');
$templateCache.put('app/theme/inputs/baSwitcher/baSwitcher.html','<label class="switcher-container"><input type="checkbox" ng-model="switcherValue"><div class="switcher" ng-class="::switcherStyle"><div class="handle-container"><span class="handle handle-on">ON</span> <span class="handle"></span> <span class="handle handle-off">OFF</span></div></div></label>');
$templateCache.put('app/pages/components/mail/mail.html','<div class="row mail-client-container transparent"><div class="col-md-12"><div ba-panel="" ba-panel-class="xmedium-panel mail-panel"><div class="letter-layout"><div class="mail-navigation-container" ng-class="{\'expanded\' : !tabCtrl.navigationCollapsed}"><div class="text-center"><button type="button" class="btn btn-default compose-button" ng-click="tabCtrl.showCompose(\'\',\'\',\'\')">Compose</button></div><div ng-repeat="t in tabCtrl.tabs" ui-sref-active="active" class="mail-navigation" ui-sref="components.mail.label({label: t.label})" ng-click="selectTab(t.label)">{{t.name}}<span class="new-mails" ng-show="t.newMails">{{t.newMails}}</span></div><div class="labels"><div class="labels-title"></div><div class="labels-container"><div class="label-item"><span class="tag label work">Work</span></div><div class="label-item"><span class="tag label family">Family</span></div><div class="label-item"><span class="tag label friend">Friend</span></div><div class="label-item"><span class="tag label study">Study</span></div></div></div><div class="add-label-container"><i class="ion-plus-round"></i><span class="label-input-stub">Add new label</span></div></div><ui-view></ui-view></div></div></div></div>');
$templateCache.put('app/pages/components/tree/tree.html','<div class="row" ng-controller="treeCtrl"><div class="col-md-6"><div ba-panel="" ba-panel-title="Basic Action" ba-panel-class="with-scroll tree-panel"><div class="row"><div class="col-sm-4"><div class="control-side text-center"><div><button class="btn btn-primary" ng-click="addNewNode()">Add</button></div><div><button class="btn btn-primary" ng-click="collapse()">Collapse All</button></div><div><button class="btn btn-primary" ng-click="expand()">Expand All</button></div><div><button class="btn btn-primary" ng-click="refresh()">Refresh</button></div></div></div><div class="col-sm-8"><div js-tree="basicConfig" ng-model="treeData" should-apply="applyModelChanges()" tree="basicTree" tree-events="ready:readyCB"></div></div></div></div></div><div class="col-md-6"><div ba-panel="" ba-panel-title="Drag & Drop" ba-panel-class="with-scroll tree-panel"><div js-tree="dragConfig" ng-model="dragData"></div></div></div></div>');
$templateCache.put('app/pages/components/timeline/timeline.html','<div ba-panel=""><section id="cd-timeline" class="cd-container cssanimations" ng-controller="TimelineCtrl"><div class="cd-timeline-block"><div class="cd-timeline-img"><div class="kameleon-icon with-round-bg warning"><img ng-src="{{::( \'Euro-Coin\' | kameleonImg )}}"></div></div><div class="cd-timeline-content warning"><h5>Title of section 1</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p><span class="cd-date">Jan 14</span></div></div><div class="cd-timeline-block"><div class="cd-timeline-img"><div class="kameleon-icon with-round-bg danger"><img ng-src="{{::( \'Laptop-Signal\' | kameleonImg )}}"></div></div><div class="cd-timeline-content danger"><h5>Title of section 2</h5><p>Donec dapibus at leo eget volutpat. Praesent dolor tellus, ultricies venenatis molestie eu, luctus eget nibh. Curabitur ullamcorper eleifend nisl.</p><span class="cd-date">Jan 18</span></div></div><div class="cd-timeline-block"><div class="cd-timeline-img"><div class="kameleon-icon with-round-bg primary"><img ng-src="{{::( \'Checklist\' | kameleonImg )}}"></div></div><div class="cd-timeline-content primary"><h5>Title of section 3</h5><p>Phasellus auctor tellus eget lacinia condimentum. Cum sociis natoque penatibus et magnis dis parturient montes.</p><span class="cd-date">Feb 18</span></div></div><div class="cd-timeline-block"><div class="cd-timeline-img"><div class="kameleon-icon with-round-bg warning"><img ng-src="{{::( \'Boss-3\' | kameleonImg )}}"></div></div><div class="cd-timeline-content warning"><h5>Title of section 4</h5><p>Morbi fringilla in massa ac posuere. Fusce non sagittis massa, id accumsan odio. Nullam eget tempor est. Etiam eu felis eu purus aliquam tristique id quis nisl. Nam eros nibh, consequat sed pulvinar eu, ultrices ornare ligula. Aenean interdum sed nunc sed hendrerit.</p><span class="cd-date">Feb 20</span></div></div><div class="cd-timeline-block"><div class="cd-timeline-img"><div class="kameleon-icon with-round-bg danger"><img ng-src="{{::( \'Online-Shopping\' | kameleonImg )}}"></div></div><div class="cd-timeline-content danger"><h5>Title of section 5</h5><p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur eget mattis metus. Nullam egestas eros metus, quis fringilla urna accumsan sed. Aliquam ultrices at arcu vitae tincidunt.</p><span class="cd-date">Feb 21</span></div></div><div class="cd-timeline-block"><div class="cd-timeline-img"><div class="kameleon-icon with-round-bg primary"><img ng-src="{{::( \'Money-Increase\' | kameleonImg )}}"></div></div><div class="cd-timeline-content primary"><h5>Title of section 6</h5><p>Praesent bibendum ante mattis augue consectetur, ut commodo turpis consequat. Donec ligula eros, porta in iaculis vel, semper ac sem. Integer at mauris lorem.</p><span class="cd-date">Feb 23</span></div></div><div class="cd-timeline-block"><div class="cd-timeline-img"><div class="kameleon-icon with-round-bg warning"><img ng-src="{{::( \'Vector\' | kameleonImg )}}"></div></div><div class="cd-timeline-content warning"><h5>Title of section 7</h5><p>Vivamus ut laoreet erat, vitae eleifend eros. Sed varius id tellus non lobortis. Sed dolor ante, cursus non scelerisque sed, euismod id eros.</p><span class="cd-date">Feb 24</span></div></div></section></div>');
$templateCache.put('app/pages/maps/google-maps/google-maps.html','<div ba-panel="" ba-panel-title="Google Maps" class="viewport100"><div id="google-maps"></div></div>');
$templateCache.put('app/pages/maps/leaflet/leaflet.html','<div ba-panel="" ba-panel-title="Leaflet" class="viewport100"><div id="leaflet-map"></div></div>');
$templateCache.put('app/pages/maps/map-lines/map-lines.html','<div ba-panel="" ba-panel-title="Line Map" class="viewport100"><div id="map-lines"></div></div>');
$templateCache.put('app/pages/maps/map-bubbles/map-bubbles.html','<div ba-panel="" ba-panel-title="Map with Bubbles" class="viewport100"><div id="map-bubbles"></div></div>');
$templateCache.put('app/pages/form/layouts/layouts.html','<div class="widgets"><div class="row"><div class="col-md-12" ba-panel="" ba-panel-title="Inline Form" ba-panel-class="with-scroll"><div ng-include="\'app/pages/form/layouts/widgets/inlineForm.html\'"></div></div></div><div class="row"><div class="col-md-6"><div ba-panel="" ba-panel-title="Basic Form" ba-panel-class="with-scroll"><div ng-include="\'app/pages/form/layouts/widgets/basicForm.html\'"></div></div><div ba-panel="" ba-panel-title="Horizontal Form" ba-panel-class="with-scroll"><div ng-include="\'app/pages/form/layouts/widgets/horizontalForm.html\'"></div></div></div><div class="col-md-6"><div ba-panel="" ba-panel-title="Form Without Labels" ba-panel-class="with-scroll"><div ng-include="\'app/pages/form/layouts/widgets/formWithoutLabels.html\'"></div></div><div ba-panel="" ba-panel-title="Block Form" ba-panel-class="with-scroll"><div ng-include="\'app/pages/form/layouts/widgets/blockForm.html\'"></div></div></div></div></div>');
$templateCache.put('app/pages/form/wizard/wizard.html','<div class="widgets"><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="Form Wizard" ba-panel-class="with-scroll"><ba-wizard><ba-wizard-step title="Personal info" form="vm.personalInfoForm"><form name="vm.personalInfoForm" novalidate=""><div class="row"><div class="col-md-6"><div class="form-group has-feedback" ng-class="{\'has-error\': vm.personalInfoForm.username.$invalid && (vm.personalInfoForm.username.$dirty || vm.personalInfoForm.$submitted)}"><label for="exampleUsername1">Username</label> <input type="text" class="form-control" id="exampleUsername1" name="username" placeholder="Username" ng-model="vm.personalInfo.username" required=""> <span class="help-block error-block basic-block">Required</span></div><div class="form-group" ng-class="{\'has-error\': vm.personalInfoForm.email.$invalid && (vm.personalInfoForm.email.$dirty || vm.personalInfoForm.$submitted)}"><label for="exampleInputEmail1">Email address</label> <input type="email" class="form-control" id="exampleInputEmail1" name="email" placeholder="Email" ng-model="vm.personalInfo.email" required=""> <span class="help-block error-block basic-block">Proper email required</span></div></div><div class="col-md-6"><div class="form-group" ng-class="{\'has-error\': vm.personalInfoForm.password.$invalid && (vm.personalInfoForm.password.$dirty || vm.personalInfoForm.$submitted)}"><label for="exampleInputPassword1">Password</label> <input type="password" class="form-control" id="exampleInputPassword1" name="password" placeholder="Password" ng-model="vm.personalInfo.password" required=""> <span class="help-block error-block basic-block">Required</span></div><div class="form-group" ng-class="{\'has-error\': !vm.arePersonalInfoPasswordsEqual() && (vm.personalInfoForm.confirmPassword.$dirty || vm.personalInfoForm.$submitted)}"><label for="exampleInputConfirmPassword1">Confirm Password</label> <input type="password" class="form-control" id="exampleInputConfirmPassword1" name="confirmPassword" placeholder="Confirm Password" ng-model="vm.personalInfo.confirmPassword" required=""> <span class="help-block error-block basic-block">Passwords should match</span></div></div></div></form></ba-wizard-step><ba-wizard-step title="Product Info" form="vm.productInfoForm"><form name="vm.productInfoForm" novalidate=""><div class="row"><div class="col-md-6"><div class="form-group has-feedback" ng-class="{\'has-error\': vm.productInfoForm.productName.$invalid && (vm.productInfoForm.productName.$dirty || vm.productInfoForm.$submitted)}"><label for="productName">Product name</label> <input type="text" class="form-control" id="productName" name="productName" placeholder="Product name" ng-model="vm.productInfo.productName" required=""> <span class="help-block error-block basic-block">Required</span></div><div class="form-group" ng-class="{\'has-error\': vm.productInfoForm.productId.$invalid && (vm.productInfoForm.productId.$dirty || vm.productInfoForm.$submitted)}"><label for="productId">Product id</label> <input type="text" class="form-control" id="productId" name="productId" placeholder="productId" ng-model="vm.productInfo.productId" required=""> <span class="help-block error-block basic-block">Required</span></div></div><div class="col-md-6"><div class="form-group"><label for="productName">Category</label><select class="form-control" title="Category" selectpicker=""><option selected="">Electronics</option><option>Toys</option><option>Accessories</option></select></div></div></div></form></ba-wizard-step><ba-wizard-step title="Shipment" form="vm.addressForm"><form name="vm.addressForm" novalidate=""><div class="row"><div class="col-md-6"><div class="form-group has-feedback" ng-class="{\'has-error\': vm.addressForm.address.$invalid && (vm.addressForm.address.$dirty || vm.addressForm.$submitted)}"><label for="productName">Shipment address</label> <input type="text" class="form-control" id="address" name="address" placeholder="Shipment address" ng-model="vm.shipment.address" required=""> <span class="help-block error-block basic-block">Required</span></div></div><div class="col-md-6"><div class="form-group"><label for="productName">Shipment method</label><select class="form-control" title="Category" selectpicker=""><option selected="">Fast & expensive</option><option>Cheap & free</option></select></div></div></div><div class="checkbox"><label class="custom-checkbox"><input type="checkbox"> <span>Save shipment info</span></label></div></form></ba-wizard-step><ba-wizard-step title="Finish"><form class="form-horizontal" name="vm.finishForm" novalidate="">Congratulations! You have successfully filled the form!</form></ba-wizard-step></ba-wizard></div></div></div></div>');
$templateCache.put('app/pages/ui/alerts/alerts.html','<div class="widgets"><div class="row"><div class="col-md-6" ba-panel="" ba-panel-title="Basic" ba-panel-class="with-scroll"><div><div class="alert bg-success"><strong>Well done!</strong> You successfully read this important alert message.</div><div class="alert bg-info"><strong>Heads up!</strong> This alert needs your attention, but it\'s not super important.</div><div class="alert bg-warning"><strong>Warning!</strong> Better check yourself, you\'re not looking too good.</div><div class="alert bg-danger"><strong>Oh snap!</strong> Change a few things up and try submitting again.</div></div></div><div class="col-md-6" ba-panel="" ba-panel-title="Dismissible alerts" ba-panel-class="with-scroll"><div><div class="alert bg-success closeable" role="alert"><button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Well done!</strong> You successfully read this important alert message.</div><div class="alert bg-info closeable" role="alert"><button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Heads up!</strong> This alert needs your attention, but it\'s not super important.</div><div class="alert bg-warning closeable" role="alert"><button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Warning!</strong> Better check yourself, you\'re not looking too good.</div><div class="alert bg-danger closeable" role="alert"><button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Oh snap!</strong> Change a few things up and try submitting again.</div></div></div></div><div class="row"><div class="col-md-6" ba-panel="" ba-panel-title="Links in alerts" ba-panel-class="with-scroll"><div><div class="alert bg-success"><strong>Well done!</strong> You successfully read <a href="" class="alert-link">this important alert message</a>.</div><div class="alert bg-info"><strong>Heads up!</strong> This <a href="" class="alert-link">alert needs your attention</a>, but it\'s not super important.</div><div class="alert bg-warning"><strong>Warning!</strong> Better check yourself, you\'re <a href="" class="alert-link">not looking too good</a>.</div><div class="alert bg-danger"><strong>Oh snap!</strong> <a href="" class="alert-link">Change a few things up</a> and try submitting again.</div></div></div><div class="col-md-6" ba-panel="" ba-panel-title="Composite alerts" ba-panel-class="with-scroll"><div><div class="alert bg-warning"><h4>Warning!</h4><strong>Pay attention.</strong> Change a few things up and try submitting again.<div class="control-alert"><button type="button" class="btn btn-danger">Pay Attention</button> <button type="button" class="btn btn-primary">Ignore</button></div></div></div></div></div></div>');
$templateCache.put('app/pages/form/inputs/inputs.html','<div class="widgets"><div class="row"><div class="col-md-6"><div ba-panel="" ba-panel-title="Standard Fields" ba-panel-class="with-scroll"><div ng-include="\'app/pages/form/inputs/widgets/standardFields.html\'"></div></div><div ba-panel="" ba-panel-title="Tags Input" ba-panel-class="with-scroll"><div ng-include="\'app/pages/form/inputs/widgets/tagsInput/tagsInput.html\'"></div></div><div ba-panel="" ba-panel-title="Input Groups" ba-panel-class="with-scroll"><div ng-include="\'app/pages/form/inputs/widgets/inputGroups.html\'"></div></div><div ba-panel="" ba-panel-title="Checkboxes & Radios" ba-panel-class="with-scroll"><div ng-include="\'app/pages/form/inputs/widgets/checkboxesRadios.html\'"></div></div><div ba-panel="" ba-panel-title="On/Off Switches" ba-panel-class="with-scroll"><div ng-include="\'app/pages/form/inputs/widgets/switches/switch.html\'"></div></div><div ba-panel="" ba-panel-title="Old On/Off Switches (Deprecated)" ba-panel-class="with-scroll"><div ng-include="\'app/pages/form/inputs/widgets/oldSwitches/switch.html\'"></div></div><div ba-panel="" ba-panel-title="Datepicker" ba-panel-class="with-scroll"><div ng-include="\'app/pages/form/inputs/widgets/datePickers/datePickers.html\'"></div></div></div><div class="col-md-6"><div ba-panel="" ba-panel-title="Validation States" ba-panel-class="with-scroll"><div ng-include="\'app/pages/form/inputs/widgets/validationStates.html\'"></div></div><div ba-panel="" ba-panel-title="Selects" ba-panel-class="with-scroll"><div ng-include="\'app/pages/form/inputs/widgets/select/select.html\'"></div></div><div ba-panel="" ba-panel-title="Old selects(deprecated)" ba-panel-class="with-scroll"><div ng-include="\'app/pages/form/inputs/widgets/oldSelect/select.html\'"></div></div></div></div></div>');
$templateCache.put('app/pages/ui/buttons/buttons.html','<div class="widgets"><div class="row"><div class="col-md-3" ba-panel="" ba-panel-title="Flat Buttons" ba-panel-class="with-scroll button-panel"><div class="button-wrapper"><button type="button" class="btn btn-default">Default</button></div><div class="button-wrapper"><button type="button" class="btn btn-primary">Primary</button></div><div class="button-wrapper"><button type="button" class="btn btn-success">Success</button></div><div class="button-wrapper"><button type="button" class="btn btn-info">Info</button></div><div class="button-wrapper"><button type="button" class="btn btn-warning">Warning</button></div><div class="button-wrapper"><button type="button" class="btn btn-danger">Danger</button></div></div><div class="col-md-3" ba-panel="" ba-panel-title="Raised Buttons" ba-panel-class="with-scroll button-panel"><div class="button-wrapper"><button type="button" class="btn btn-default btn-raised">Default</button></div><div class="button-wrapper"><button type="button" class="btn btn-primary btn-raised">Primary</button></div><div class="button-wrapper"><button type="button" class="btn btn-success btn-raised">Success</button></div><div class="button-wrapper"><button type="button" class="btn btn-info btn-raised">Info</button></div><div class="button-wrapper"><button type="button" class="btn btn-warning btn-raised">Warning</button></div><div class="button-wrapper"><button type="button" class="btn btn-danger btn-raised">Danger</button></div></div><div class="col-md-3" ba-panel="" ba-panel-title="Different sizes" ba-panel-class="with-scroll button-panel df-size-button-panel"><div class="button-wrapper"><button type="button" class="btn btn-default btn-xs">Default</button></div><div class="button-wrapper"><button type="button" class="btn btn-primary btn-sm">Primary</button></div><div class="button-wrapper"><button type="button" class="btn btn-success btn-mm">Success</button></div><div class="button-wrapper"><button type="button" class="btn btn-info btn-md">Info</button></div><div class="button-wrapper"><button type="button" class="btn btn-warning btn-xm">Warning</button></div><div class="button-wrapper"><button type="button" class="btn btn-danger btn-lg">Danger</button></div></div><div class="col-md-3" ba-panel="" ba-panel-title="Disabled" ba-panel-class="with-scroll button-panel"><div class="button-wrapper"><button type="button" class="btn btn-default" disabled="disabled">Default</button></div><div class="button-wrapper"><button type="button" class="btn btn-primary" disabled="disabled">Primary</button></div><div class="button-wrapper"><button type="button" class="btn btn-success" disabled="disabled">Success</button></div><div class="button-wrapper"><button type="button" class="btn btn-info" disabled="disabled">Info</button></div><div class="button-wrapper"><button type="button" class="btn btn-warning" disabled="disabled">Warning</button></div><div class="button-wrapper"><button type="button" class="btn btn-danger" disabled="disabled">Danger</button></div></div></div><div class="row"><div class="col-md-6"><div ba-panel="" ba-panel-title="Icon Buttons" ba-panel-class="with-scroll"><div ng-include="\'app/pages/ui/buttons/widgets/iconButtons.html\'"></div></div><div ba-panel="" ba-panel-title="Large Buttons" ba-panel-class="with-scroll large-buttons-panel"><div ng-include="\'app/pages/ui/buttons/widgets/largeButtons.html\'"></div></div></div><div class="col-md-6"><div ba-panel="" ba-panel-title="Button Dropdowns" ba-panel-class="with-scroll"><div ng-include="\'app/pages/ui/buttons/widgets/dropdowns.html\'"></div></div><div ba-panel="" ba-panel-title="Button Groups" ba-panel-class="with-scroll"><div ng-include="\'app/pages/ui/buttons/widgets/buttonGroups.html\'"></div></div></div></div><div class="row"><div class="col-md-12" ba-panel="" ba-panel-title="Progress Buttons" ba-panel-class="with-scroll"><div ng-include="\'app/pages/ui/buttons/widgets/progressButtons.html\'"></div></div></div></div>');
$templateCache.put('app/pages/ui/grid/baseGrid.html','<h4 class="grid-h">Stacked to horizontal</h4><div class="row show-grid"><div class="col-md-1"><div>.col-md-1</div></div><div class="col-md-1"><div>.col-md-1</div></div><div class="col-md-1"><div>.col-md-1</div></div><div class="col-md-1"><div>.col-md-1</div></div><div class="col-md-1"><div>.col-md-1</div></div><div class="col-md-1"><div>.col-md-1</div></div><div class="col-md-1"><div>.col-md-1</div></div><div class="col-md-1"><div>.col-md-1</div></div><div class="col-md-1"><div>.col-md-1</div></div><div class="col-md-1"><div>.col-md-1</div></div><div class="col-md-1"><div>.col-md-1</div></div><div class="col-md-1"><div>.col-md-1</div></div></div><div class="row show-grid"><div class="col-md-8"><div>.col-md-8</div></div><div class="col-md-4"><div>.col-md-4</div></div></div><div class="row show-grid"><div class="col-md-4"><div>.col-md-4</div></div><div class="col-md-4"><div>.col-md-4</div></div><div class="col-md-4"><div>.col-md-4</div></div></div><div class="row show-grid"><div class="col-md-6"><div>.col-md-6</div></div><div class="col-md-6"><div>.col-md-6</div></div></div><h4 class="grid-h">Mobile and desktop</h4><div class="row show-grid"><div class="col-xs-12 col-md-8"><div>xs-12 .col-md-8</div></div><div class="col-xs-6 col-md-4"><div>xs-6 .col-md-4</div></div></div><div class="row show-grid"><div class="col-xs-6 col-md-4"><div>xs-6 .col-md-4</div></div><div class="col-xs-6 col-md-4"><div>xs-6 .col-md-4</div></div><div class="col-xs-6 col-md-4"><div>xs-6 .col-md-4</div></div></div><div class="row show-grid"><div class="col-xs-6"><div>.col-xs-6</div></div><div class="col-xs-6"><div>.col-xs-6</div></div></div><h4 class="grid-h">Mobile, tablet, desktop</h4><div class="row show-grid"><div class="col-xs-12 col-sm-6 col-md-8"><div>.col-xs-12 .col-sm-6 .col-md-8</div></div><div class="col-xs-6 col-md-4"><div>.col-xs-6 .col-md-4</div></div></div><div class="row show-grid"><div class="col-xs-6 col-sm-4"><div>.col-xs-6 .col-sm-4</div></div><div class="col-xs-6 col-sm-4"><div>.col-xs-6 .col-sm-4</div></div><div class="clearfix visible-xs-block"></div><div class="col-xs-6 col-sm-4"><div>.col-xs-6 .col-sm-4</div></div></div><h4 class="grid-h">Column wrapping</h4><div class="row show-grid"><div class="col-xs-9"><div>.col-xs-9</div></div><div class="col-xs-4"><div>.col-xs-4<br>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div></div><div class="col-xs-6"><div>.col-xs-6<br>Subsequent columns continue along the new line.</div></div></div><h4 class="grid-h">Responsive column resets</h4><div class="row show-grid"><div class="col-xs-6 col-sm-3"><div>.col-xs-6 .col-sm-3<p>Resize your viewport or check it out on your phone for an example.</p></div></div><div class="col-xs-6 col-sm-3"><div>.col-xs-6 .col-sm-3</div></div><div class="clearfix visible-xs-block"></div><div class="col-xs-6 col-sm-3"><div>.col-xs-6 .col-sm-3</div></div><div class="col-xs-6 col-sm-3"><div>.col-xs-6 .col-sm-3</div></div></div><h4 class="grid-h">Offsetting columns</h4><div class="row show-grid"><div class="col-md-4"><div>.col-md-4</div></div><div class="col-md-4 col-md-offset-4"><div>.col-md-4 .col-md-offset-4</div></div></div><div class="row show-grid"><div class="col-md-3 col-md-offset-3"><div>.col-md-3 .col-md-offset-3</div></div><div class="col-md-3 col-md-offset-3"><div>.col-md-3 .col-md-offset-3</div></div></div><div class="row show-grid"><div class="col-md-6 col-md-offset-3"><div>.col-md-6 .col-md-offset-3</div></div></div><h4 class="grid-h">Grid options</h4><div class="table-responsive"><table class="table table-bordered table-striped"><thead><tr><th></th><th>Extra small devices <small>Phones (&lt;768px)</small></th><th>Small devices <small>Tablets (\u2265768px)</small></th><th>Medium devices <small>Desktops (\u2265992px)</small></th><th>Large devices <small>Desktops (\u22651200px)</small></th></tr></thead><tbody><tr><th class="text-nowrap" scope="row">Grid behavior</th><td>Horizontal at all times</td><td colspan="3">Collapsed to start, horizontal above breakpoints</td></tr><tr><th class="text-nowrap" scope="row">Container width</th><td>None (auto)</td><td>750px</td><td>970px</td><td>1170px</td></tr><tr><th class="text-nowrap" scope="row">Class prefix</th><td><code>.col-xs-</code></td><td><code>.col-sm-</code></td><td><code>.col-md-</code></td><td><code>.col-lg-</code></td></tr><tr><th class="text-nowrap" scope="row"># of columns</th><td colspan="4">12</td></tr><tr><th class="text-nowrap" scope="row">Column width</th><td class="text-muted">Auto</td><td>~62px</td><td>~81px</td><td>~97px</td></tr><tr><th class="text-nowrap" scope="row">Gutter width</th><td colspan="4">30px (15px on each side of a column)</td></tr><tr><th class="text-nowrap" scope="row">Nestable</th><td colspan="4">Yes</td></tr><tr><th class="text-nowrap" scope="row">Offsets</th><td colspan="4">Yes</td></tr><tr><th class="text-nowrap" scope="row">Column ordering</th><td colspan="4">Yes</td></tr></tbody></table></div>');
$templateCache.put('app/pages/ui/grid/grid.html','<div class="widgets"><div class="row"><div class="col-md-12" ba-panel="" ba-panel-title="Inline Form" ba-panel-class="with-scroll"><div ng-include="\'app/pages/ui/grid/baseGrid.html\'"></div></div></div></div>');
$templateCache.put('app/pages/ui/icons/icons.html','<div class="widgets"><div class="row"><div class="col-md-6"><div ba-panel="" ba-panel-title="Kameleon SVG Icons" ba-panel-class="with-scroll"><div include-with-scope="app/pages/ui/icons/widgets/kameleon.html"></div></div><div ba-panel="" ba-panel-title="Socicon" ba-panel-class="with-scroll"><div include-with-scope="app/pages/ui/icons/widgets/socicon.html"></div></div></div><div class="col-md-6"><div ba-panel="" ba-panel-title="Icons With Rounded Background" ba-panel-class="with-scroll"><div include-with-scope="app/pages/ui/icons/widgets/kameleonRounded.html"></div></div><div ba-panel="" ba-panel-title="ionicons" ba-panel-class="with-scroll"><div include-with-scope="app/pages/ui/icons/widgets/ionicons.html"></div></div><div ba-panel="" ba-panel-title="Font Awesome Icons" ba-panel-class="with-scroll"><div include-with-scope="app/pages/ui/icons/widgets/fontAwesomeIcons.html"></div></div></div></div></div>');
$templateCache.put('app/pages/ui/modals/modals.html','<div class="widgets"><div class="row"><div class="col-md-12" ba-panel="" ba-panel-title="Modals" ba-panel-class="with-scroll"><div class="modal-buttons clearfix"><button type="button" class="btn btn-primary" data-toggle="modal" ng-click="open(\'app/pages/ui/modals/modalTemplates/basicModal.html\', \'md\')">Default modal</button> <button type="button" class="btn btn-success" data-toggle="modal" ng-click="open(\'app/pages/ui/modals/modalTemplates/largeModal.html\', \'lg\')">Large modal</button> <button type="button" class="btn btn-warning" data-toggle="modal" ng-click="open(\'app/pages/ui/modals/modalTemplates/smallModal.html\', \'sm\')">Small modal</button></div></div></div><div class="row"><div class="col-md-6" ba-panel="" ba-panel-title="Message Modals" ba-panel-class="with-scroll"><div class="modal-buttons same-width clearfix"><button type="button" class="btn btn-success" data-toggle="modal" ng-click="open(\'app/pages/ui/modals/modalTemplates/successModal.html\')">Success Message</button> <button type="button" class="btn btn-info" data-toggle="modal" ng-click="open(\'app/pages/ui/modals/modalTemplates/infoModal.html\')">Info Message</button> <button type="button" class="btn btn-warning" data-toggle="modal" ng-click="open(\'app/pages/ui/modals/modalTemplates/warningModal.html\')">Warning Message</button> <button type="button" class="btn btn-danger" data-toggle="modal" ng-click="open(\'app/pages/ui/modals/modalTemplates/dangerModal.html\')">Danger Message</button></div></div><div class="col-md-6" ba-panel="" ba-panel-title="Notifications" ba-panel-class="with-scroll"><div ng-include="\'app/pages/ui/modals/notifications/notifications.html\'"></div></div></div><div class="row"><div class="col-md-6" ba-panel="" ba-panel-title="Progress dialogs" ba-panel-class="with-scroll"><div class="modal-buttons same-width clearfix"><button type="button" class="btn btn-info" data-toggle="modal" ng-click="openProgressDialog()">Progress dialog</button></div></div></div></div>');
$templateCache.put('app/pages/ui/progressBars/progressBars.html','<div class="widgets"><div class="row"><div class="col-md-6"><div ba-panel="" ba-panel-title="Basic" ba-panel-class="with-scroll"><div ng-include="\'app/pages/ui/progressBars/widgets/basic.html\'"></div></div><div ba-panel="" ba-panel-title="Striped" ba-panel-class="with-scroll"><div ng-include="\'app/pages/ui/progressBars/widgets/striped.html\'"></div></div></div><div class="col-md-6"><div ba-panel="" ba-panel-title="With label" ba-panel-class="with-scroll"><div ng-include="\'app/pages/ui/progressBars/widgets/label.html\'"></div></div><div ba-panel="" ba-panel-title="Animated" ba-panel-class="with-scroll"><div ng-include="\'app/pages/ui/progressBars/widgets/animated.html\'"></div></div></div></div><div class="row"><div class="col-md-12" ba-panel="" ba-panel-title="Stacked" ba-panel-class="with-scroll"><div ng-include="\'app/pages/ui/progressBars/widgets/stacked.html\'"></div></div></div></div>');
$templateCache.put('app/pages/ui/notifications/notifications.html','<div ba-panel="" ba-panel-class="with-scroll notification-panel"><div class="row"><div class="col-md-3 col-sm-4"><div class="control"><label for="title">Title</label> <input ng-model="options.title" type="text" class="form-control" id="title" placeholder="Enter a title ..."></div><div class="control"><label for="message">Message</label> <textarea ng-model="options.msg" class="form-control" id="message" rows="3" placeholder="Enter a message ..."></textarea></div><div class="control-group"><div class="control"><label class="checkbox-inline custom-checkbox nowrap"><input ng-model="options.closeButton" type="checkbox" id="closeButton"> <span>Close Button</span></label></div><div class="control"><label class="checkbox-inline custom-checkbox nowrap"><input ng-model="options.allowHtml" type="checkbox" id="html"> <span>Allow html</span></label></div><div class="control"><label class="checkbox-inline custom-checkbox nowrap"><input ng-model="options.progressBar" type="checkbox" id="progressBar"> <span>Progress bar</span></label></div><div class="control"><label class="checkbox-inline custom-checkbox nowrap"><input ng-model="options.preventDuplicates" type="checkbox" id="preventDuplicates"> <span>Prevent duplicates</span></label></div><div class="control"><label class="checkbox-inline custom-checkbox nowrap"><input ng-model="options.preventOpenDuplicates" type="checkbox" id="preventOpenDuplicates"> <span>Prevent open duplicates</span></label></div><div class="control"><label class="checkbox-inline custom-checkbox nowrap"><input ng-model="options.tapToDismiss" type="checkbox" id="tapToDismiss"> <span>Tap to dismiss</span></label></div><div class="control"><label class="checkbox-inline custom-checkbox nowrap"><input ng-model="options.newestOnTop" type="checkbox" id="newestOnTop"> <span>Newest on top</span></label></div></div></div><div class="col-md-2 col-sm-3 toastr-radio-setup"><div id="toastTypeGroup"><div class="controls radio-controls"><label class="radio-header">Toast Type</label> <label class="radio custom-radio"><input type="radio" ng-model="options.type" name="toasts" value="success"><span>Success</span></label> <label class="radio custom-radio"><input type="radio" ng-model="options.type" name="toasts" value="info"><span>Info</span></label> <label class="radio custom-radio"><input type="radio" ng-model="options.type" name="toasts" value="warning"><span>Warning</span></label> <label class="radio custom-radio"><input type="radio" ng-model="options.type" name="toasts" value="error"><span>Error</span></label></div></div><div id="positionGroup"><div class="controls radio-controls"><label class="radio-header position-header">Position</label> <label class="radio custom-radio"><input type="radio" ng-model="options.positionClass" name="positions" value="toast-top-right"> <span>Top Right</span></label> <label class="radio custom-radio"><input type="radio" ng-model="options.positionClass" name="positions" value="toast-bottom-right"> <span>Bottom Right</span></label> <label class="radio custom-radio"><input type="radio" ng-model="options.positionClass" name="positions" value="toast-bottom-left"> <span>Bottom Left</span></label> <label class="radio custom-radio"><input type="radio" ng-model="options.positionClass" name="positions" value="toast-top-left"> <span>Top Left</span></label> <label class="radio custom-radio"><input type="radio" ng-model="options.positionClass" name="positions" value="toast-top-full-width"> <span>Top Full Width</span></label> <label class="radio custom-radio"><input type="radio" ng-model="options.positionClass" name="positions" value="toast-bottom-full-width"> <span>Bottom Full Width</span></label> <label class="radio custom-radio"><input type="radio" ng-model="options.positionClass" name="positions" value="toast-top-center"> <span>Top Center</span></label> <label class="radio custom-radio"><input type="radio" ng-model="options.positionClass" name="positions" value="toast-bottom-center"> <span>Bottom Center</span></label></div></div></div><div class="col-md-2 col-sm-3"><div class="control"><label for="timeOut">Time out</label> <input type="text" class="form-control" id="timeOut" ng-model="options.timeOut" placeholder="ms"> <label class="sub-label" for="timeOut">If you set it to 0, it will stick</label></div><div class="control"><label for="extendedTimeOut">Extended time out</label> <input type="text" class="form-control" id="extendedTimeOut" ng-model="options.extendedTimeOut" placeholder="ms"></div><div class="control"><label for="maxOpened">Maximum number of toasts</label> <input type="text" class="form-control" id="maxOpened" ng-model="options.maxOpened" value="0"> <label for="maxOpened" class="sub-label">0 means no limit</label></div><div class="control"><label class="checkbox-inline custom-checkbox nowrap"><input ng-model="options.autoDismiss" type="checkbox" id="autoDismiss"> <span>Auto dismiss</span></label></div></div><div class="col-md-5 col-sm-12"><label>Result:</label><pre class="result-toastr" id="toastrOptions">{{optionsStr}}</pre></div></div><div class="row"><div class="col-md-12 button-row"><button ng-click="openToast()" class="btn btn-primary">Open Toast</button> <button ng-click="openRandomToast()" class="btn btn-primary">Random Toast</button> <button ng-click="clearToasts()" class="btn btn-danger">Clear Toasts</button> <button ng-click="clearLastToast()" class="btn btn-danger">Clear Last Toast</button></div></div></div>');
$templateCache.put('app/pages/ui/slider/slider.html','<div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="Ion Range Slider" ba-panel-class="with-scroll"><div class="slider-box"><h5>Basic</h5><ion-slider type="single" grid="false" min="0" max="100" from="45" disable="false"></ion-slider></div><div class="slider-box"><h5>With prefix</h5><ion-slider type="single" grid="true" min="100" max="1200" prefix="$" from="420" disable="false"></ion-slider></div><div class="slider-box"><h5>With postfix</h5><ion-slider type="single" grid="true" min="-90" max="90" postfix="\xB0" from="36" disable="false"></ion-slider></div><div class="slider-box"><h5>Two way range</h5><ion-slider type="double" grid="true" min="100" max="1200" from="420" to="900" disable="false"></ion-slider></div><div class="slider-box"><h5>With Steps</h5><ion-slider type="single" grid="true" min="0" max="1000" from="300" step="50" disable="false"></ion-slider></div><div class="slider-box"><h5>Decorating numbers</h5><ion-slider type="single" grid="true" min="0" max="1000000" from="300000" step="1000" prettify-separator="." prettify="true" disable="false"></ion-slider></div><div class="slider-box"><h5>Using custom values array</h5><ion-slider type="single" grid="true" from="5" step="1000" values="[\'January\', \'February\', \'March\', \'April\', \'May\', \'June\', \'July\', \'August\', \'September\', \'October\', \'November\', \'December\']" disable="false"></ion-slider></div><div class="slider-box"><h5>Disabled</h5><ion-slider type="single" grid="false" min="0" max="100" from="45" disable="true"></ion-slider></div></div></div></div>');
$templateCache.put('app/pages/ui/tabs/contextualAccordion.html','<uib-accordion><uib-accordion-group heading="Primary" panel-class="panel-primary bootstrap-panel accordion-panel">Primary <i class="ion-heart"></i></uib-accordion-group><uib-accordion-group heading="Success" panel-class="panel-success bootstrap-panel accordion-panel">Success <i class="ion-checkmark-round"></i></uib-accordion-group><uib-accordion-group heading="Info" panel-class="panel-info bootstrap-panel accordion-panel">Info <i class="ion-information-circled"></i></uib-accordion-group><uib-accordion-group heading="Warning" panel-class="panel-warning bootstrap-panel accordion-panel">Warning <i class="ion-alert"></i></uib-accordion-group><uib-accordion-group heading="Danger" panel-class="panel-danger bootstrap-panel accordion-panel">Danger <i class="ion-nuclear"></i></uib-accordion-group></uib-accordion>');
$templateCache.put('app/pages/ui/tabs/mainTabs.html','<uib-tabset active="$tabSetStatus.activeTab"><uib-tab heading="Start"><p>Take up one idea. Make that one idea your life--think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.</p><p>People who succeed have momentum. The more they succeed, the more they want to succeed, and the more they find a way to succeed. Similarly, when someone is failing, the tendency is to get on a downward spiral that can even become a self-fulfilling prophecy.</p><div class="text-center"><div class="kameleon-icon with-round-bg primary inline-icon"><img ng-src="{{::( \'Shop\' | kameleonImg )}}"></div><div class="kameleon-icon with-round-bg primary inline-icon"><img ng-src="{{::( \'Programming\' | kameleonImg )}}"></div><div class="kameleon-icon with-round-bg primary inline-icon"><img ng-src="{{::( \'Dna\' | kameleonImg )}}"></div></div><p>The reason most people never reach their goals is that they don\'t define them, or ever seriously consider them as believable or achievable. Winners can tell you where they are going, what they plan to do along the way, and who will be sharing the adventure with them.</p></uib-tab><uib-tab heading="Getting Done"><p>You can\'t connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future. You have to trust in something--your gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life.</p><p>The reason most people never reach their goals is that they don\'t define them, or ever seriously consider them as believable or achievable. Winners can tell you where they are going, what they plan to do along the way, and who will be sharing the adventure with them.</p></uib-tab><uib-tab ng-init="$dropdownTabActive = 1" class="with-dropdown"><uib-tab-heading uib-dropdown=""><a uib-dropdown-toggle="" ng-click="$event.stopPropagation()">Dropdown tab <i class="caret"></i></a><ul class="dropdown-menu" uib-dropdown-menu=""><li><a ng-click="$dropdownTabActive = 1; $tabSetStatus.activeTab = 3">Tab 1</a></li><li><a ng-click="$dropdownTabActive = 2; $tabSetStatus.activeTab = 3">Tab 2</a></li></ul></uib-tab-heading><div ng-show="$dropdownTabActive == 1"><p>Success is ... knowing your purpose in life, growing to reach your maximum potential, and sowing seeds that benefit others.</p><p>Failure is the condiment that gives success its flavor.</p></div><div ng-show="$dropdownTabActive == 2"><p class="text-center"><button class="btn btn-danger">I\'m just a dummy button</button></p></div></uib-tab></uib-tabset>');
$templateCache.put('app/pages/ui/tabs/sampleAccordion.html','<uib-accordion><uib-accordion-group is-open="true" heading="Static Header, initially expanded" panel-class="bootstrap-panel accordion-panel panel-default">This content is straight in the template.</uib-accordion-group><uib-accordion-group heading="Dynamic Body Content" panel-class="bootstrap-panel accordion-panel panel-default"><p>The body of the uib-accordion group grows to fit the contents</p><button type="button" class="btn btn-primary btn-sm">Add Item</button></uib-accordion-group><uib-accordion-group heading="Custom template" panel-class="bootstrap-panel accordion-panel panel-default">Hello</uib-accordion-group><uib-accordion-group panel-class="bootstrap-panel accordion-panel panel-default"><uib-accordion-heading>I can have markup, too! <i class="fa pull-right ion-settings"></i></uib-accordion-heading>This is just some content to illustrate fancy headings.</uib-accordion-group></uib-accordion>');
$templateCache.put('app/pages/ui/tabs/sideTabs.html','<div ba-panel="" ba-panel-class="tabs-panel xsmall-panel with-scroll"><uib-tabset class="tabs-left"><uib-tab heading="Start"><p class="text-center">Take up one idea.</p><div class="kameleon-icon-tabs kameleon-icon with-round-bg danger"><img ng-src="{{::( \'Key\' | kameleonImg )}}"></div><p>People who succeed have momentum. The more they succeed, the more they want to succeed, and the more they find a way to succeed.</p></uib-tab><uib-tab heading="Get it done"><p>You can\'t connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future. You have to trust in something--your gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life.</p><p>The reason most people never reach their goals is that they don\'t define them, or ever seriously consider them as believable or achievable. Winners can tell you where they are going, what they plan to do along the way, and who will be sharing the adventure with them.</p></uib-tab><uib-tab heading="Achieve"><p>Success is ... knowing your purpose in life, growing to reach your maximum potential, and sowing seeds that benefit others.</p><p>Failure is the condiment that gives success its flavor.</p></uib-tab></uib-tabset></div><div ba-panel="" ba-panel-class="tabs-panel xsmall-panel with-scroll"><uib-tabset class="tabs-right"><uib-tab heading="Start"><p class="text-center">Take up one idea.</p><div class="kameleon-icon-tabs kameleon-icon with-round-bg warning"><img ng-src="{{::( \'Phone-Booth\' | kameleonImg )}}"></div><p>People who succeed have momentum. The more they succeed, the more they want to succeed, and the more they find a way to succeed.</p></uib-tab><uib-tab heading="Get it done"><p>You can\'t connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future. You have to trust in something--your gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life.</p><p>The reason most people never reach their goals is that they don\'t define them, or ever seriously consider them as believable or achievable. Winners can tell you where they are going, what they plan to do along the way, and who will be sharing the adventure with them.</p></uib-tab><uib-tab heading="Achieve"><p>Success is ... knowing your purpose in life, growing to reach your maximum potential, and sowing seeds that benefit others.</p><p>Failure is the condiment that gives success its flavor.</p></uib-tab></uib-tabset></div>');
$templateCache.put('app/pages/ui/tabs/tabs.html','<div><div class="row"><div class="col-md-6"><div ba-panel="" ba-panel-class="with-scroll horizontal-tabs tabs-panel medium-panel"><div ng-include="\'app/pages/ui/tabs/mainTabs.html\'"></div></div></div><div class="col-md-6 tabset-group" ng-include="\'app/pages/ui/tabs/sideTabs.html\'"></div></div><div class="row accordions-row"><div class="col-md-6" ng-include="\'app/pages/ui/tabs/sampleAccordion.html\'"></div><div class="col-md-6" ng-include="\'app/pages/ui/tabs/contextualAccordion.html\'"></div></div></div>');
$templateCache.put('app/pages/ui/typography/typography.html','<div class="typography-document-samples row-fluid"><div class="col-xlg-3 col-lg-6 col-md-6 col-sm-6 col-xs-12 typography-widget"><div ba-panel="" ba-panel-class="with-scroll heading-widget" ba-panel-title="Text Size"><div class="section-block"><h1>H1. Heading 1</h1><p>Lorem ipsum dolor sit amet, id mollis iaculis mi nisl pulvinar, lacinia scelerisque pharetra, placerat vestibulum eleifend pellentesque.</p></div><div class="section-block"><h2>H2. Heading 2</h2><p>Lorem ipsum dolor sit amet, id mollis iaculis mi nisl pulvinar, lacinia scelerisque pharetra, placerat vestibulum eleifend pellentesque.</p></div><div class="section-block"><h3>H3. Heading 3</h3><p>Lorem ipsum dolor sit amet, id mollis iaculis mi nisl pulvinar, lacinia scelerisque pharetra, placerat vestibulum eleifend pellentesque.</p></div><div class="section-block"><h4>H4. Heading 4</h4><p>Lorem ipsum dolor sit amet, id mollis iaculis mi nisl pulvinar, lacinia scelerisque pharetra,.</p></div><div class="section-block"><h5>H5. Heading 5</h5><p>Lorem ipsum dolor sit amet, id mollis iaculis mi nisl pulvinar, lacinia scelerisque pharetra.</p></div></div></div><div class="col-xlg-3 col-lg-6 col-md-6 col-sm-6 col-xs-12 typography-widget"><div ba-panel="" ba-panel-class="with-scroll more-text-widget" ba-panel-title="Some more text"><div class="section-block light-text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales at. Nulla tellus elit, varius non commodo eget, mattis vel eros. In sed ornare nulla. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis.</p></div><div class="section-block regular-text"><p>Curabitur bibendum ornare dolor, quis ullamcorper ligula dfgz`zzsodales at. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id.</p></div><div class="section-block upper-text bold-text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales at. Nulla tellus elit, varius non commodo eget, mattis vel eros. In sed ornare nulla.</p></div><div class="section-block bold-text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullam-corper ligula sodales at. Nulla tellus elit, varius non commodo eget, mattis vel eros. In sed ornare nulla.</p></div><div class="section-block small-text"><p>Secondary text. Lorem ipsum dolor sit amet, id mollis iaculis mi nisl pulvinar,</p><p>lacinia scelerisque pharetra, placerat vestibulum eleifend</p><p>pellentesque, mi nam.</p></div></div></div><div class="col-xlg-3 col-lg-6 col-md-6 col-sm-6 col-xs-12 typography-widget"><div ba-panel="" ba-panel-class="with-scroll lists-widget" ba-panel-title="Lists"><div class="section-block"><h5 class="list-header">Unordered list:</h5><ul class="blur"><li>Lorem ipsum dolor sit amet</li><li>\u0421lacinia scelerisque pharetra<ul><li>Dui rhoncus quisque integer lorem<ul><li>Libero iaculis vestibulum eu vitae</li></ul></li></ul></li><li>Nisl lectus nibh habitasse suspendisse ut</li><li><span>Posuere cursus hac, vestibulum wisi nulla bibendum</span></li></ul><h5 class="list-header">Ordered Lists:</h5><ol class="blur"><li><span>Eu non nec cursus quis mollis, amet quam nec</span></li><li><span>Et suspendisse, adipiscing fringilla ornare sit ligula sed</span><ol><li><span>Interdum et justo nulla</span><ol><li><span>Magna amet, suscipit suscipit non amet</span></li></ol></li></ol></li><li><span>Metus duis eu non eu ridiculus turpis</span></li><li><span>Neque egestas id fringilla consectetuer justo curabitur, wisi magna neque commodo volutpat</span></li></ol><div class="accent">Important text fragment. Lorem ipsum dolor sit amet, id mollis iaculis mi nisl pulvinar, lacinia scelerisque pharetra.</div></div></div></div><div class="col-xlg-3 col-lg-6 col-md-6 col-sm-6 col-xs-12 typography-widget"><div ba-panel="" ba-panel-class="with-scroll color-widget" ba-panel-title="Text Color"><div class="section-block red-text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales at. Nulla tellus elit, varius non commodo eget, mattis vel eros. In sed ornare nulla. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p></div><div class="section-block yellow-text"><p>Curabitur bibendum ornare dolor, quis ullamcorper ligula dfgz`zzsodales at. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit. In sed ornare nulla.</p></div><div class="section-block links"><p>Lorem ipsum <a href="">dolor</a> sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis <a href="">ullamcorper</a> ligula sodales at. Nulla tellus elit, varius non commodo eget, <a href="">mattis</a> vel eros. In sed ornare nulla.</p></div><div class="section-block links"><p><a href="">Active link \u2014 #209e91</a></p><p class="hovered"><a href="">Hover link \u2014 #17857a</a></p></div></div></div></div><div class="row-fluid"><div class="col-lg-12 col-sm-12 col-xs-12"><div ba-panel="" ba-panel-class="banner-column-panel"><div class="banner"><div class="large-banner-wrapper"><img ng-src="{{::( \'app/typography/banner.png\' | appImage )}}" alt=""></div><div class="banner-text-wrapper"><div class="banner-text"><h1>Simple Banner Text</h1><p>Lorem ipsum dolor sit amet</p><p>Odio amet viverra rutrum</p></div></div></div><div class="section"><h2>Columns</h2><div class="row"><div class="col-sm-6"><div class="img-wrapper"><img ng-src="{{::( \'app/typography/typo03.png\' | appImage )}}" alt="" title=""></div><p>Vel elit, eros elementum, id lacinia, duis non ut ut tortor blandit. Mauris <a href="">dapibus</a> magna rutrum. Ornare neque suspendisse <a href="">phasellus wisi</a>, quam cras pede rutrum suspendisse, <a href="">felis amet eu</a>. Congue magna elit quisque quia, nullam justo sagittis, ante erat libero placerat, proin condimentum consectetuer lacus. Velit condimentum velit, sed penatibus arcu nulla.</p></div><div class="col-sm-6"><div class="img-wrapper"><img ng-src="{{::( \'app/typography/typo01.png\' | appImage )}}" alt="" title=""></div><p>Et suspendisse, adipiscing fringilla ornare sit ligula sed, vel nam. Interdum et justo nulla, fermentum lobortis purus ut eu, duis nibh dolor massa tristique elementum, nibh iste potenti risus fusce aliquet fusce, ullamcorper debitis primis arcu tellus vestibulum ac.</p></div></div><div class="separator"></div><div class="row"><div class="col-sm-4"><h4>Column heading example</h4><div class="img-wrapper"><img ng-src="{{::( \'app/typography/typo04.png\' | appImage )}}" alt=""></div><p>Eget augue, lacus erat ante egestas scelerisque aliquam, metus molestie leo in habitasse magna maecenas</p><a href="" class="learn-more">Lean more</a></div><div class="col-sm-4"><h4>Yet another column heading example</h4><div class="img-wrapper"><img ng-src="{{::( \'app/typography/typo05.png\' | appImage )}}" alt=""></div><p>Augue massa et parturient, suspendisse orci nec scelerisque sit, integer nam mauris pede consequat in velit</p><a href="" class="learn-more">Lean more</a></div><div class="col-sm-4"><h4>Third column heading example</h4><div class="img-wrapper"><img ng-src="{{::( \'app/typography/typo06.png\' | appImage )}}" alt=""></div><p>Eget turpis, tortor lobortis porttitor, vestibulum nullam vehicula aliquam</p><a href="" class="learn-more">Lean more</a></div></div><div class="separator"></div></div></div></div></div>');
$templateCache.put('app/pages/dashboard/blurFeed/blurFeed.html','<div class="feed-messages-container" track-width="smallContainerWidth" min-width="360"><div class="feed-message" ng-repeat="message in feed" ng-click="expandMessage(message)"><div class="message-icon" ng-if="message.type == \'text-message\'"><img class="photo-icon" ng-src="{{::( message.author | profilePicture )}}"></div><div class="message-icon" ng-if="message.type != \'text-message\'"><img class="photo-icon" ng-src="{{::( message.author | profilePicture )}}"> <span class="sub-photo-icon" ng-class="::message.type"></span></div><div class="text-block text-message"><div class="message-header"><span class="author">{{ ::message.author }} {{ ::message.surname}}</span></div><div class="message-content line-clamp" ng-class="{\'line-clamp-2\' : !message.expanded}"><span ng-if="message.preview">{{message.header}}</span>{{::message.text}}</div><div class="preview" ng-show="message.expanded" ng-if="message.preview"><a href="{{::message.link}}" target="_blank"><img ng-src="{{ ::( message.preview | appImage )}}"></a></div><div ng-show="message.expanded" class="message-time"><div class="post-time">{{::message.time}}</div><div class="ago-time">{{::message.ago}}</div></div></div></div></div>');
$templateCache.put('app/pages/dashboard/dashboardCalendar/dashboardCalendar.html','<div id="calendar" class="blurCalendar"></div>');
$templateCache.put('app/pages/dashboard/dashboardLineChart/dashboardLineChart.html','<div id="amchart"></div>');
$templateCache.put('app/pages/dashboard/dashboardMap/dashboardMap.html','<div id="amChartMap"></div>');
$templateCache.put('app/pages/dashboard/dashboardTodo/dashboardTodo.html','<div class="task-todo-container" ng-class="{\'transparent\': transparent}"><input type="text" value="" class="form-control task-todo" placeholder="Task to do.." ng-keyup="addToDoItem($event)" ng-model="newTodoText"> <i ng-click="addToDoItem(\'\',true)" class="add-item-icon ion-plus-round"></i><div class="box-shadow-border"></div><ul class="todo-list" ui-sortable="" ng-model="todoList"><li ng-repeat="item in todoList" ng-if="!item.deleted" ng-init="activeItem=false" ng-class="{checked: isChecked, active: activeItem}" ng-mouseenter="activeItem=true" ng-mouseleave="activeItem=false"><div class="blur-container"><div class="blur-box"></div></div><i class="mark" style="background-color: {{::item.color}}"></i> <label class="todo-checkbox custom-checkbox custom-input-success"><input type="checkbox" ng-model="isChecked"> <span class="cut-with-dots">{{ item.text }}</span></label> <i class="remove-todo ion-ios-close-empty" ng-click="item.deleted = true"></i></li></ul></div>');
$templateCache.put('app/pages/dashboard/popularApp/popularApp.html','<div class="popular-app-img-container"><div class="popular-app-img"><img ng-src="{{::( \'app/my-app-logo.png\' | appImage )}}"> <span class="logo-text">Super&nbspApp</span></div></div><div class="popular-app-cost row"><div class="col-xs-9">Most Popular App</div><div class="col-xs-3 text-right">175$</div></div><div class="popular-app-info row"><div class="col-xs-4 text-left"><div class="info-label">Total Visits</div><div>47,512</div></div><div class="col-xs-4 text-center"><div class="info-label">New Visits</div><div>9,217</div></div><div class="col-xs-4 text-right"><div class="info-label">Sales</div><div>2,928</div></div></div>');
$templateCache.put('app/pages/ui/panels/panels.html','<h2>Default panels</h2><div class="row"><div class="col-md-12 col-lg-4"><div ba-panel="" ba-panel-class="xsmall-panel light-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac mi erat. Phasellus placerat, elit a laoreet semper, enim ipsum ultricies orci, ac tincidunt tellus massa eu est. Nam non porta purus, sed facilisis justo. Nam pulvinar sagittis quam.</div></div><div class="col-md-12 col-lg-4"><div ba-panel="" ba-panel-title="Panel with header" ba-panel-class="xsmall-panel light-text">Phasellus maximus venenatis augue, et vestibulum neque aliquam ut. Morbi mattis libero vitae vulputate dignissim. Praesent placerat, sem non dapibus cursus, lacus nisi blandit quam, vitae porttitor lectus lacus non turpis. Donec suscipit consequat tellus.</div></div><div class="col-md-12 col-lg-4"><div ba-panel="" ba-panel-title="Panel with header & scroll" ba-panel-class="xsmall-panel with-scroll light-text"><p>Suspendisse nec tellus urna. Sed id est metus. Nullam sit amet dolor nec ipsum dictum suscipit. Mauris sed nisi mauris. Nulla iaculis nisl ut velit ornare imperdiet. Suspendisse potenti. In tempor leo sed sem malesuada pellentesque. Maecenas faucibus metus lacus, ac egestas diam vulputate vitae.</p><p>Sed dapibus, purus vel hendrerit consectetur, lectus orci gravida massa, sed bibendum dui mauris et eros. Nulla dolor massa, posuere et dictum sit amet, dignissim quis odio. Fusce mollis finibus dignissim. Integer sodales augue erat. Pellentesque laoreet vestibulum urna at iaculis. Nulla libero augue, euismod at diam eget, aliquam condimentum ligula. Donec a leo eu est molestie lacinia hendrerit sed lorem. Duis id diam eu metus sodales consequat vel eu elit. Praesent dolor nibh, convallis eleifend feugiat a, finibus porttitor nibh. Ut non libero vel velit pulvinar scelerisque non vel lorem. Integer porta tempor nulla. Sed nibh erat, ultrices vel lorem eu, rutrum vehicula sem.</p><p>Donec nec tellus urna. Sed id est metus. Nullam sit amet dolor nec ipsum dictum suscipit. Mauris sed nisi mauris. Nulla iaculis nisl ut velit ornare imperdiet. Suspendisse potenti. In tempor leo sed sem malesuada pellentesque. Maecenas faucibus metus lacus, ac egestas diam vulputate vitae.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum nec ligula egestas rhoncus. Sed dignissim, augue vel scelerisque vulputate, nisi ante posuere lorem, quis iaculis eros dolor eu nisl. Etiam sagittis, ipsum ac tempor iaculis, justo neque mattis ante, ac maximus sapien risus eu sapien. Morbi erat urna, varius et lectus vel, porta dictum orci. Duis bibendum euismod elit, et lobortis purus venenatis in. Mauris eget lacus enim. Cras quis sem et magna fringilla convallis. Proin hendrerit nulla vel gravida mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum consectetur quis purus vel aliquam.</p></div></div></div><h2>Bootstrap panels</h2><div class="row"><div class="col-md-12 col-lg-4"><div class="panel panel-default bootstrap-panel xsmall-panel"><div class="panel-body"><p>A panel in bootstrap is a bordered box with some padding around its content.</p><p class="p-with-code">Panels are created with the <code>.panel</code> class, and content inside the panel has a <code>.panel-body</code> class. The <code>.panel-default .panel-primary .panel-danger</code> and other classes are used to style the color of the panel. See the next example on this page for more contextual classes.</p></div></div></div><div class="col-md-12 col-lg-4"><div class="panel panel-default bootstrap-panel xsmall-panel"><div class="panel-heading">Panel Heading</div><div class="panel-body"><p class="p-with-code">The <code>.panel-heading</code> class adds a heading to the panel.Easily add a heading container to your panel with .panel-heading. You may also include any <code>h1-h6</code> with a <code>.panel-title</code> class to add a pre-styled heading.</p></div></div></div><div class="col-md-12 col-lg-4"><div class="panel panel-default bootstrap-panel"><div class="panel-body footer-panel"><p class="p-with-code">Wrap buttons or secondary text in <code>.panel-footer</code>. Note that panel footers do not inherit colors and borders when using contextual variations as they are not meant to be in the foreground.</p></div><div class="panel-footer">Panel Footer</div></div></div></div><h2>Panels with Contextual Classes</h2><div class="row"><div class="col-md-6 col-lg-4"><div class="panel panel-default contextual-example-panel bootstrap-panel"><div class="panel-heading">Panel with panel-default class</div><div class="panel-body">To color the panel, use contextual classes. This is sample <code>.panel-default</code> panel</div></div></div><div class="col-md-6 col-lg-4"><div class="panel panel-primary contextual-example-panel bootstrap-panel"><div class="panel-heading">Panel with panel-primary class</div><div class="panel-body">Sample <code>.panel-primary</code> panel</div></div></div><div class="col-md-6 col-lg-4"><div class="panel panel-success contextual-example-panel bootstrap-panel"><div class="panel-heading">Panel with panel-success class</div><div class="panel-body">Sample <code>.panel-success</code> panel</div></div></div><div class="col-md-6 col-lg-4"><div class="panel panel-info contextual-example-panel bootstrap-panel"><div class="panel-heading">Panel with panel-info class</div><div class="panel-body">Sample <code>.panel-info</code> panel</div></div></div><div class="col-md-6 col-lg-4"><div class="panel panel-warning contextual-example-panel bootstrap-panel"><div class="panel-heading">Panel with panel-warning class</div><div class="panel-body">Sample <code>.panel-warning</code> panel</div></div></div><div class="col-md-6 col-lg-4"><div class="panel panel-danger contextual-example-panel bootstrap-panel"><div class="panel-heading">Panel with panel-danger class</div><div class="panel-body">Sample <code>.panel-danger</code> panel</div></div></div></div><div class="row"><div class="col-md-12"><h2>Panel Group</h2><div class="panel-group"><div class="panel panel-default bootstrap-panel"><div class="panel-heading">Panel group 1</div><div class="panel-body"><p>To group many panels together, wrap a <code>&lt;div&gt;</code> with class <code>\r\n            .panel-group</code> around them.</p></div></div><div class="panel panel-default bootstrap-panel"><div class="panel-heading">Panel group 2</div><div class="panel-body"><p>The <code>.panel-group</code> class clears the bottom-margin of each panel.</p></div></div></div></div></div>');
$templateCache.put('app/pages/dashboard/weather/weather.html','<div class="weather-wrapper"><div class="weather-main-info"><h5 class="city-date font-x1dot5"><div>{{geoData.geoplugin_city}} - {{geoData.geoplugin_countryName | uppercase}}</div><div>{{ weather.days[weather.current].date | date : \'EEEE h:mm\'}}</div></h5><div class="weather-description font-x1dot5"><i class="font-x3 {{weatherIcons[weather.days[weather.current].icon]}}"></i><div class="weather-info">{{weather.days[weather.current].main}} - {{weather.days[weather.current].description}}</div></div><div class="weather-temp font-x1dot5"><i class="font-x2 ion-thermometer"></i><div class="weather-info" ng-switch="" on="units"><span ng-switch-when="metric">{{weather.days[weather.current].temp}} \xB0C | <a ng-click="switchUnits(\'imperial\')" href="">\xB0F</a></span> <span ng-switch-when="imperial">{{weather.days[weather.current].temp}} \xB0F | <a ng-click="switchUnits(\'metric\')" href="">\xB0C</a></span></div></div></div><div id="tempChart" class="temp-by-time"></div><div class="select-day"><div class="day" ng-repeat="day in weather.days" ng-click="switchDay($index)"><div><span class="font-x1dot25">{{day.temp}}</span></div><div><i class="weatherIcon font-x2 {{weatherIcons[day.icon]}}"></i> <span class="select-day-info">{{day.main}}</span></div><div><span>{{day.date | date : \'EEE\'}}</span></div></div></div></div>');
$templateCache.put('app/pages/dashboard/dashboardPieChart/dashboardPieChart.html','<div class="row pie-charts"><div class="pie-chart-item-container" ng-repeat="chart in charts"><div ba-panel=""><div class="pie-chart-item"><div class="chart" rel="{{ ::chart.color }}" data-percent="60"><span class="percent"></span></div><div class="description"><div>{{ ::chart.description }}</div><div class="description-stats">{{ ::chart.stats }}</div></div><i class="chart-icon i-{{ ::chart.icon }}"></i></div></div></div></div>');
$templateCache.put('app/pages/dashboard/trafficChart/trafficChart.html','<div class="channels-block" ng-class="{\'transparent\': transparent}"><div class="chart-bg"></div><div class="traffic-chart" id="trafficChart"><div class="canvas-holder"><canvas id="chart-area" width="280" height="280"></canvas><div class="traffic-text">1,900,128 <span>Views Total</span></div></div></div><div class="channels-info"><div><div class="channels-info-item" ng-repeat="label in doughnutData.labels" ng-init="i = $index; data = doughnutData.datasets[0]"><div class="legend-color" style="background-color: {{::data.backgroundColor[i]}}"></div><p>{{::label}}<span class="channel-number">+{{data.percentage[i]}}%</span></p><div class="progress progress-sm channel-progress"><div class="progress-bar" role="progressbar" aria-valuenow="{{data.percentage[i]}}" aria-valuemin="0" aria-valuemax="100" style="width: {{item.percentage}}%"></div></div></div></div></div></div>');
$templateCache.put('app/pages/tables/basic/tables.html','<div class="widgets"><div class="row"><div class="col-lg-6 col-md-12"><div ba-panel="" ba-panel-title="Hover Rows" ba-panel-class="with-scroll table-panel"><div include-with-scope="app/pages/tables/widgets/hoverRows.html"></div></div></div><div class="col-lg-6 col-md-12"><div ba-panel="" ba-panel-title="Bordered Table" ba-panel-class="with-scroll table-panel"><div include-with-scope="app/pages/tables/widgets/borderedTable.html"></div></div></div></div><div class="row"><div class="col-lg-6 col-md-12"><div ba-panel="" ba-panel-title="Condensed Table" ba-panel-class="with-scroll table-panel"><div include-with-scope="app/pages/tables/widgets/condensedTable.html"></div></div></div><div class="col-lg-6 col-md-12"><div ba-panel="" ba-panel-title="Striped Rows" ba-panel-class="with-scroll table-panel"><div include-with-scope="app/pages/tables/widgets/stripedRows.html"></div></div></div></div><div class="row"><div class="col-lg-6 col-md-12"><div ba-panel="" ba-panel-title="Contextual Table" ba-panel-class="with-scroll table-panel"><div include-with-scope="app/pages/tables/widgets/contextualTable.html"></div></div></div><div class="col-lg-6 col-md-12"><div ba-panel="" ba-panel-title="Responsive Table" ba-panel-class="with-scroll table-panel"><div include-with-scope="app/pages/tables/widgets/responsiveTable.html"></div></div></div></div></div>');
$templateCache.put('app/pages/tables/widgets/basicTable.html','<div class="horizontal-scroll"><table class="table"><thead><tr><th class="browser-icons"></th><th>Browser</th><th class="align-right">Visits</th><th class="table-arr"></th><th class="align-right">Downloads</th><th class="table-arr"></th><th class="align-right">Purchases</th><th class="table-arr"></th><th class="align-right">DAU</th><th class="table-arr"></th><th class="align-right">MAU</th><th class="table-arr"></th><th class="align-right">LTV</th><th class="table-arr"></th><th class="align-right">Users %</th><th class="table-arr"></th></tr></thead><tbody><tr><td><img src="img/chrome.svg" width="20" height="20"></td><td class="nowrap">Google Chrome</td><td class="align-right">10,392</td><td class="table-arr"><i class="icon-up"></i></td><td class="align-right">3,822</td><td class="table-arr"><i class="icon-up"></i></td><td class="align-right">4,214</td><td class="table-arr"><i class="icon-up"></i></td><td class="align-right">899</td><td class="table-arr"><i class="icon-up"></i></td><td class="align-right">7,098</td><td class="table-arr"><i class="icon-up"></i></td><td class="align-right">178</td><td class="table-arr"><i class="icon-up"></i></td><td class="align-right">45%</td><td class="table-arr"><i class="icon-up"></i></td></tr><tr><td><img src="img/firefox.svg" width="20" height="20"></td><td class="nowrap">Mozilla Firefox</td><td class="align-right">7,873</td><td class="table-arr"><i class="icon-down"></i></td><td class="align-right">6,003</td><td class="table-arr"><i class="icon-down"></i></td><td class="align-right">3,031</td><td class="table-arr"><i class="icon-up"></i></td><td class="align-right">897</td><td class="table-arr"><i class="icon-down"></i></td><td class="align-right">8,997</td><td class="table-arr"><i class="icon-up"></i></td><td class="align-right">102</td><td class="table-arr"><i class="icon-down"></i></td><td class="align-right">28%</td><td class="table-arr"><i class="icon-up"></i></td></tr><tr><td><img src="img/ie.svg" width="20" height="20"></td><td class="nowrap">Internet Explorer</td><td class="align-right">5,890</td><td class="table-arr"><i class="icon-down"></i></td><td class="align-right">3,492</td><td class="table-arr"><i class="icon-down"></i></td><td class="align-right">2,102</td><td class="table-arr"><i class="icon-down"></i></td><td class="align-right">27</td><td class="table-arr"><i class="icon-up"></i></td><td class="align-right">4,039</td><td class="table-arr"><i class="icon-down"></i></td><td class="align-right">99</td><td class="table-arr"><i class="icon-up"></i></td><td class="align-right">17%</td><td class="table-arr"><i class="icon-down"></i></td></tr><tr><td><img src="img/safari.svg" width="20" height="20"></td><td class="nowrap">Safari</td><td class="align-right">4,001</td><td class="table-arr"><i class="icon-up"></i></td><td class="align-right">2,039</td><td class="table-arr"><i class="icon-up"></i></td><td class="align-right">1,001</td><td class="table-arr"><i class="icon-down"></i></td><td class="align-right">104</td><td class="table-arr"><i class="icon-down"></i></td><td class="align-right">3,983</td><td class="table-arr"><i class="icon-down"></i></td><td class="align-right">209</td><td class="table-arr"><i class="icon-down"></i></td><td class="align-right">14%</td><td class="table-arr"><i class="icon-down"></i></td></tr><tr><td><img src="img/opera.svg" width="20" height="20"></td><td class="nowrap">Opera</td><td class="align-right">1,833</td><td class="table-arr"><i class="icon-up"></i></td><td class="align-right">983</td><td class="table-arr"><i class="icon-up"></i></td><td class="align-right">83</td><td class="table-arr"><i class="icon-up"></i></td><td class="align-right">19</td><td class="table-arr"><i class="icon-down"></i></td><td class="align-right">1,099</td><td class="table-arr"><i class="icon-down"></i></td><td class="align-right">103</td><td class="table-arr"><i class="icon-up"></i></td><td class="align-right">5%</td><td class="table-arr"><i class="icon-up"></i></td></tr></tbody></table></div>');
$templateCache.put('app/pages/tables/widgets/borderedTable.html','<div class="horizontal-scroll"><table class="table table-bordered"><thead><tr><th class="browser-icons"></th><th>Browser</th><th class="align-right">Visits</th><th class="align-right">Purchases</th><th class="align-right">%</th></tr></thead><tbody><tr ng-repeat="item in metricsTableData"><td><img ng-src="{{::( item.image | appImage )}}" width="20" height="20"></td><td ng-class="nowrap">{{item.browser}}</td><td class="align-right">{{item.visits}}</td><td class="align-right">{{item.purchases}}</td><td class="align-right">{{item.percent}}</td></tr></tbody></table></div>');
$templateCache.put('app/pages/tables/widgets/condensedTable.html','<div class="horizontal-scroll"><table class="table table-condensed"><thead><tr><th class="table-id">#</th><th>First Name</th><th>Last Name</th><th>Username</th><th>Email</th><th>Status</th></tr></thead><tbody><tr ng-repeat="item in peopleTableData"><td class="table-id">{{item.id}}</td><td>{{item.firstName}}</td><td>{{item.lastName}}</td><td>{{item.username}}</td><td><a class="email-link" ng-href="mailto:{{item.email}}">{{item.email}}</a></td><td><button class="status-button btn btn-xs btn-{{item.status}}">{{item.status}}</button></td></tr></tbody></table></div>');
$templateCache.put('app/pages/tables/widgets/contextualTable.html','<table class="table"><tr><th>#</th><th>First Name</th><th>Last Name</th><th>Username</th><th>Email</th><th>Age</th></tr><tr class="primary"><td>1</td><td>Mark</td><td>Otto</td><td>@mdo</td><td><a class="email-link" ng-href="mailto:mdo@gmail.com" href="mailto:mdo@gmail.com">mdo@gmail.com</a></td><td>28</td></tr><tr class="success"><td>2</td><td>Jacob</td><td>Thornton</td><td>@fat</td><td><a class="email-link" ng-href="mailto:fat@yandex.ru" href="mailto:fat@yandex.ru">fat@yandex.ru</a></td><td>45</td></tr><tr class="warning"><td>3</td><td>Larry</td><td>Bird</td><td>@twitter</td><td><a class="email-link" ng-href="mailto:twitter@outlook.com" href="mailto:twitter@outlook.com">twitter@outlook.com</a></td><td>18</td></tr><tr class="danger"><td>4</td><td>John</td><td>Snow</td><td>@snow</td><td><a class="email-link" ng-href="mailto:snow@gmail.com" href="mailto:snow@gmail.com">snow@gmail.com</a></td><td>20</td></tr><tr class="info"><td>5</td><td>Jack</td><td>Sparrow</td><td>@jack</td><td><a class="email-link" ng-href="mailto:jack@yandex.ru" href="mailto:jack@yandex.ru">jack@yandex.ru</a></td><td>30</td></tr></table>');
$templateCache.put('app/pages/tables/widgets/editableRowTable.html','<div class="add-row-editable-table"><button class="btn btn-primary" ng-click="addUser()">Add row</button></div><table class="table table-bordered table-hover table-condensed"><tr><td></td><td>Name</td><td>Status</td><td>Group</td><td>Actions</td></tr><tr ng-repeat="user in users" class="editable-row"><td>{{$index}}</td><td><span editable-text="user.name" e-name="name" e-form="rowform" e-required="">{{ user.name || \'empty\' }}</span></td><td class="select-td"><span editable-select="user.status" e-name="status" e-form="rowform" e-selectpicker="" e-ng-options="s.value as s.text for s in statuses">{{ showStatus(user) }}</span></td><td class="select-td"><span editable-select="user.group" e-name="group" onshow="loadGroups()" e-form="rowform" e-selectpicker="" e-ng-options="g.id as g.text for g in groups">{{ showGroup(user) }}</span></td><td><form editable-form="" name="rowform" ng-show="rowform.$visible" class="form-buttons form-inline" shown="inserted == user"><button type="submit" ng-disabled="rowform.$waiting" class="btn btn-primary editable-table-button btn-xs">Save</button> <button type="button" ng-disabled="rowform.$waiting" ng-click="rowform.$cancel()" class="btn btn-default editable-table-button btn-xs">Cancel</button></form><div class="buttons" ng-show="!rowform.$visible"><button class="btn btn-primary editable-table-button btn-xs" ng-click="rowform.$show()">Edit</button> <button class="btn btn-danger editable-table-button btn-xs" ng-click="removeUser($index)">Delete</button></div></td></tr></table>');
$templateCache.put('app/pages/tables/widgets/editableTable.html','<div class="horizontal-scroll"><table class="table table-hover" st-table="editableTableData"><thead><tr class="sortable"><th class="table-id" st-sort="id" st-sort-default="true">#</th><th st-sort="firstName">First Name</th><th st-sort="lastName">Last Name</th><th st-sort="username">Username</th><th st-sort="email">Email</th><th st-sort="age">Age</th></tr></thead><tbody><tr ng-repeat="item in editableTableData" class="editable-tr-wrap"><td class="table-id">{{item.id}}</td><td><span editable-text="item.firstName" blur="cancel">{{item.firstName}}</span></td><td><span editable-text="item.lastName" blur="cancel">{{item.lastName}}</span></td><td><span editable-text="item.username" blur="cancel">{{item.username}}</span></td><td><a class="email-link" ng-href="mailto:{{item.email}}">{{item.email}}</a></td><td><span editable-text="item.age" blur="cancel">{{item.age}}</span></td></tr></tbody><tfoot><tr><td colspan="6" class="text-center"><div st-pagination="" st-items-by-page="12" st-displayed-pages="5"></div></td></tr></tfoot></table></div>');
$templateCache.put('app/pages/tables/widgets/hoverRows.html','<div class="horizontal-scroll"><table class="table table-hover"><thead><tr class="black-muted-bg"><th class="browser-icons"></th><th>Browser</th><th class="align-right">Visits</th><th class="table-arr"></th><th class="align-right">Purchases</th><th class="table-arr"></th><th class="align-right">%</th><th class="table-arr"></th></tr></thead><tbody><tr ng-repeat="item in metricsTableData" class="no-top-border"><td><img ng-src="{{::( item.image | appImage )}}" width="20" height="20"></td><td ng-class="nowrap">{{item.browser}}</td><td class="align-right">{{item.visits}}</td><td class="table-arr"><i ng-class="{\'icon-up\': item.isVisitsUp, \'icon-down\': !item.isVisitsUp }"></i></td><td class="align-right">{{item.purchases}}</td><td class="table-arr"><i ng-class="{\'icon-up\': item.isPurchasesUp, \'icon-down\': !item.isPurchasesUp }"></i></td><td class="align-right">{{item.percent}}</td><td class="table-arr"><i ng-class="{\'icon-up\': item.isPercentUp, \'icon-down\': !item.isPercentUp }"></i></td></tr></tbody></table></div>');
$templateCache.put('app/pages/tables/widgets/responsiveTable.html','<div class="table-responsive"><table class="table"><tr><th>#</th><th>First Name</th><th>Last Name</th><th>Username</th><th>Email</th><th>Age</th></tr><tr><td>1</td><td>Mark</td><td>Otto</td><td>@mdo</td><td><a class="email-link" ng-href="mailto:mdo@gmail.com" href="mailto:mdo@gmail.com">mdo@gmail.com</a></td><td>28</td></tr><tr><td>2</td><td>Jacob</td><td>Thornton</td><td>@fat</td><td><a class="email-link" ng-href="mailto:fat@yandex.ru" href="mailto:fat@yandex.ru">fat@yandex.ru</a></td><td>45</td></tr><tr><td>3</td><td>Larry</td><td>Bird</td><td>@twitter</td><td><a class="email-link" ng-href="mailto:twitter@outlook.com" href="mailto:twitter@outlook.com">twitter@outlook.com</a></td><td>18</td></tr><tr><td>4</td><td>John</td><td>Snow</td><td>@snow</td><td><a class="email-link" ng-href="mailto:snow@gmail.com" href="mailto:snow@gmail.com">snow@gmail.com</a></td><td>20</td></tr><tr><td>5</td><td>Jack</td><td>Sparrow</td><td>@jack</td><td><a class="email-link" ng-href="mailto:jack@yandex.ru" href="mailto:jack@yandex.ru">jack@yandex.ru</a></td><td>30</td></tr></table></div>');
$templateCache.put('app/pages/tables/widgets/smartTable.html','<div class="horizontal-scroll"><div class="form-group select-page-size-wrap"><label>Rows on page<select class="form-control selectpicker show-tick" title="Rows on page" selectpicker="" ng-model="smartTablePageSize" ng-options="i for i in [5,10,15,20,25]"></select></label></div><table class="table" st-table="smartTableData"><thead><tr class="sortable"><th class="table-id" st-sort="id" st-sort-default="true">#</th><th st-sort="firstName">First Name</th><th st-sort="lastName">Last Name</th><th st-sort="username">Username</th><th st-sort="email">Email</th><th st-sort="age">Age</th></tr><tr><th></th><th><input st-search="firstName" placeholder="Search First Name" class="input-sm form-control search-input" type="search"></th><th><input st-search="lastName" placeholder="Search Last Name" class="input-sm form-control search-input" type="search"></th><th><input st-search="username" placeholder="Search Username" class="input-sm form-control search-input" type="search"></th><th><input st-search="email" placeholder="Search Email" class="input-sm form-control search-input" type="search"></th><th><input st-search="age" placeholder="Search Age" class="input-sm form-control search-input" type="search"></th></tr></thead><tbody><tr ng-repeat="item in smartTableData"><td class="table-id">{{item.id}}</td><td>{{item.firstName}}</td><td>{{item.lastName}}</td><td>{{item.username}}</td><td><a class="email-link" ng-href="mailto:{{item.email}}">{{item.email}}</a></td><td>{{item.age}}</td></tr></tbody><tfoot><tr><td colspan="6" class="text-center"><div st-pagination="" st-items-by-page="smartTablePageSize" st-displayed-pages="5"></div></td></tr></tfoot></table></div>');
$templateCache.put('app/pages/tables/widgets/stripedRows.html','<div class="vertical-scroll"><table class="table table-striped"><thead><tr><th class="table-id">#</th><th>First Name</th><th>Last Name</th><th>Username</th><th>Email</th><th>Age</th></tr></thead><tbody><tr ng-repeat="item in smartTableData"><td class="table-id">{{item.id}}</td><td>{{item.firstName}}</td><td>{{item.lastName}}</td><td>{{item.username}}</td><td><a class="email-link" ng-href="mailto:{{item.email}}">{{item.email}}</a></td><td>{{item.age}}</td></tr></tbody></table></div>');
$templateCache.put('app/pages/tables/smart/tables.html','<div class="widgets"><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="Editable Rows" ba-panel-class="with-scroll"><div include-with-scope="app/pages/tables/widgets/editableRowTable.html"></div></div></div></div><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="Editable Cells" ba-panel-class="with-scroll"><div include-with-scope="app/pages/tables/widgets/editableTable.html"></div></div></div></div><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="Smart Table With Filtering, Sorting And Pagination" ba-panel-class="with-scroll"><div include-with-scope="app/pages/tables/widgets/smartTable.html"></div></div></div></div></div>');
$templateCache.put('app/pages/charts/chartist/chartist.html','<section ng-controller="chartistCtrl" class="chartist"><div class="row"><div class="col-md-6"><div ba-panel="" ba-panel-title="Lines" ba-panel-class="with-scroll"><h5>Simple line chart</h5><div id="line-chart" class="ct-chart"></div><h5>Line chart with area</h5><div id="area-chart" class="ct-chart"></div><h5>Bi-polar line chart with area only</h5><div id="bi-chart" class="ct-chart"></div></div></div><div class="col-md-6"><div ba-panel="" ba-panel-title="Bars" ba-panel-class="with-scroll"><h5>Simple bar chart</h5><div id="simple-bar" class="ct-chart"></div><h5>Multi-line labels bar chart</h5><div id="multi-bar" class="ct-chart"></div><h5>Stacked bar chart</h5><div id="stacked-bar" class="ct-chart stacked-bar"></div></div></div></div><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="Pies & Donuts" ba-panel-class="with-scroll"><div class="row"><div class="col-md-12 col-lg-4"><h5>Simple Pie</h5><div id="simple-pie" class="ct-chart"></div></div><div class="col-md-12 col-lg-4"><h5>Pie with labels</h5><div id="label-pie" class="ct-chart"></div></div><div class="col-md-12 col-lg-4"><h5>Donut</h5><div id="donut" class="ct-chart"></div></div></div></div></div></div></section>');
$templateCache.put('app/pages/charts/amCharts/charts.html','<div class="widgets"><div class="row"><div class="col-lg-4 col-md-6" ba-panel="" ba-panel-title="Bar Chart" ba-panel-class="with-scroll"><div ng-include="\'app/pages/charts/amCharts/barChart/barChart.html\'"></div></div><div class="col-lg-4 col-md-6" ba-panel="" ba-panel-title="Area Chart" ba-panel-class="with-scroll"><div ng-include="\'app/pages/charts/amCharts/areaChart/areaChart.html\'"></div></div><div class="col-lg-4 col-md-12" ba-panel="" ba-panel-title="Line Chart" ba-panel-class="with-scroll"><div ng-include="\'app/pages/charts/amCharts/lineChart/lineChart.html\'"></div></div></div><div class="row"><div class="col-md-6" ba-panel="" ba-panel-title="Pie Chart" ba-panel-class="with-scroll"><div ng-include="\'app/pages/charts/amCharts/pieChart/pieChart.html\'"></div></div><div class="col-md-6" ba-panel="" ba-panel-title="Funnel Chart" ba-panel-class="with-scroll"><div ng-include="\'app/pages/charts/amCharts/funnelChart/funnelChart.html\'"></div></div></div><div class="row"><div class="col-md-12" ba-panel="" ba-panel-title="Combined bullet/column and line graphs with multiple value axes" ba-panel-class="with-scroll"><div ng-include="\'app/pages/charts/amCharts/combinedChart/combinedChart.html\'"></div></div></div></div>');
$templateCache.put('app/pages/charts/chartJs/chartJs.html','<div class="row"><div class="col-md-4" ng-controller="chartJs1DCtrl"><div ba-panel="" ba-panel-title="Pie" ba-panel-class="with-scroll"><div class="chartjs-canvas-holder-first-row"><canvas id="pie" class="chart chart-pie" chart-options="options" chart-data="data" chart-labels="labels" chart-click="changeData"></canvas></div></div></div><div class="col-md-4" ng-controller="chartJs1DCtrl"><div ba-panel="" ba-panel-title="Doughnut" ba-panel-class="with-scroll"><div class="chartjs-canvas-holder-first-row"><canvas id="doughnut" chart-options="options" class="chart chart-doughnut" chart-data="data" chart-labels="labels" chart-click="changeData"></canvas></div></div></div><div class="col-md-4" ng-controller="chartJs1DCtrl"><div ba-panel="" ba-panel-title="Polar" ba-panel-class="with-scroll"><div class="chartjs-canvas-holder-first-row"><canvas id="polar-area" class="chart chart-polar-area" chart-data="data" chart-options="options" chart-labels="labels" chart-click="changeData"></canvas></div></div></div></div><div class="row"><div class="col-md-6" ng-controller="chartJsWaveCtrl"><div ba-panel="" ba-panel-title="Animated Radar" ba-panel-class="col-eq-height"><div class="chartjs-canvas-holder-second-row"><canvas id="waveLine" class="chart chart-radar" chart-data="[data]" chart-labels="labels"></canvas></div></div></div><div class="col-md-6" ng-controller="chartJsWaveCtrl"><div ba-panel="" ba-panel-title="Animated Bars" ba-panel-class="col-eq-height"><div class="chartjs-canvas-holder-second-row"><canvas id="waveBars" class="chart chart-bar" chart-data="[data]" chart-labels="labels"></canvas></div></div></div></div><div class="row"><div class="col-lg-4 col-md-6" ng-controller="chartJs2DCtrl"><div ba-panel="" ba-panel-title="Radar" ba-panel-class="with-scroll"><div class="chartjs-canvas-holder-third-row"><canvas id="radar" class="chart chart-radar" chart-series="series" chart-data="data" chart-labels="labels" chart-click="changeData"></canvas></div></div></div><div class="col-lg-4 col-md-6" ng-controller="chartJs2DCtrl"><div ba-panel="" ba-panel-title="Line" ba-panel-class="with-scroll"><div class="chartjs-canvas-holder-third-row"><canvas id="line" class="chart chart-line" chart-data="data" chart-labels="labels" chart-series="series" chart-click="changeData"></canvas></div></div></div><div class="col-lg-4 col-md-12" ng-controller="chartJs2DCtrl"><div ba-panel="" ba-panel-title="Bars" ba-panel-class="with-scroll"><div class="chartjs-canvas-holder-third-row"><canvas id="bar" class="chart chart-bar" chart-data="data" chart-labels="labels" chart-series="series" chart-click="changeData" chart-update="updateC"></canvas></div></div></div></div>');
$templateCache.put('app/pages/charts/morris/morris.html','<section ng-controller="morrisCtrl"><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="Line Chart" ba-panel-class="with-scroll"><div line-chart="" line-data="lineData" line-xkey="y" line-ykeys=\'["a", "b"]\' line-labels=\'["Serie A", "Serie B"]\' line-colors="colors"></div></div></div></div><div class="row"><div class="col-md-4"><div ba-panel="" ba-panel-title="Donut" ba-panel-class="with-scroll"><div donut-chart="" donut-data="donutData" donut-colors="colors" donut-formatter=\'"currency"\'></div></div></div><div class="col-md-8"><div ba-panel="" ba-panel-title="Bar Chart" ba-panel-class="with-scroll"><div bar-chart="" bar-data="barData" bar-x="y" bar-y=\'["a", "b"]\' bar-labels=\'["Series A", "Series B"]\' bar-colors="colors"></div></div></div></div><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="Area Chart" ba-panel-class="with-scroll"><div area-chart="" area-data="areaData" area-xkey="y" area-ykeys=\'["a", "b"]\' %="" area-labels=\'["Serie A", "Serie B"]\' line-colors="colors"></div></div></div></div></section>');
$templateCache.put('app/pages/components/mail/composeBox/compose.html','<div class="compose-header"><span>New message</span> <span class="header-controls"><i class="ion-minus-round"></i> <i class="ion-arrow-resize"></i> <i ng-click="$dismiss()" class="ion-close-round"></i></span></div><div><input type="text" class="form-control compose-input default-color" placeholder="To" ng-model="boxCtrl.to"> <input type="text" class="form-control compose-input default-color" placeholder="Subject" ng-model="boxCtrl.subject"><div class="compose-container"><text-angular-toolbar ta-toolbar-class="toolbarMain" name="toolbarMain" ta-toolbar="[[\'h1\',\'h2\',\'h3\',\'bold\',\'italics\', \'underline\', \'justifyLeft\', \'justifyCenter\', \'justifyRight\', \'justifyFull\']]"></text-angular-toolbar><text-angular name="htmlcontent" ta-target-toolbars="toolbarMain,toolbarFooter" ng-model="boxCtrl.text"></text-angular></div></div><div class="compose-footer clearfix"><button type="button" ng-click="$dismiss()" class="btn btn-send">Send</button><text-angular-toolbar ta-toolbar-class="toolbarFooter" name="toolbarFooter" ta-toolbar="[[\'insertLink\', \'insertImage\', \'html\', \'quote\',\'insertVideo\']]"></text-angular-toolbar><div class="footer-controls"><i class="footer-control-first compose-footer-icon ion-arrow-down-b"></i> <i ng-click="$dismiss()" class="compose-footer-icon ion-android-delete"></i></div></div>');
$templateCache.put('app/pages/components/mail/list/mailList.html','<div class="side-message-navigation" ng-class="{\'expanded\': tabCtrl.navigationCollapsed}"><div class="mail-messages-control side-message-navigation-item"><div class="toggle-navigation-container"><a href="" class="collapse-navigation-link ion-navicon" ng-click="tabCtrl.navigationCollapsed=!tabCtrl.navigationCollapsed"></a></div><label class="checkbox-inline custom-checkbox nowrap"><input type="checkbox" id="inlineCheckbox01" value="option1"> <span class="select-all-label">Select All</span></label> <button type="button" class="btn btn-icon refresh-button"><i class="ion-refresh"></i></button><div class="btn-group" uib-dropdown=""><button type="button" class="btn more-button" uib-dropdown-toggle="">More <span class="caret"></span></button><ul uib-dropdown-menu=""><li><a href="">Action</a></li><li><a href="">Another action</a></li><li><a href="">Something else here</a></li><li role="separator" class="divider"></li><li><a href="">Separated link</a></li></ul></div></div><div class="messages"><table><tr ng-repeat="m in listCtrl.messages track by m.id | orderBy:\'-date\'" class="side-message-navigation-item little-human shineHover {{m.tag}}"><td class="check-td"><div class="mail-checkbox"><label class="checkbox-inline custom-checkbox nowrap"><input type="checkbox"> <span></span></label></div></td><td class="photo-td" ui-sref="components.mail.detail({id: m.id, label: listCtrl.label})"><img ng-src="{{m.name.split(\' \')[0] | profilePicture}}" class="little-human-picture"></td><td ui-sref="components.mail.detail({id: m.id, label: listCtrl.label})"><div class="name-container"><div><span class="name">{{m.name}}</span></div><div><span class="tag label label-primary {{m.tag}}">{{m.tag}}</span></div></div></td><td ui-sref="components.mail.detail({id: m.id, label: listCtrl.label})"><div class="additional-info"><span class="subject">{{m.subject}}</span></div></td><td ui-sref="components.mail.detail({id: m.id, label: listCtrl.label})"><div class="mail-body-part">{{m.body | plainText}}</div></td><td class="date"><span>{{m.date | date : \'MMM d HH:mm\'}}</span></td></tr></table></div></div>');
$templateCache.put('app/pages/form/layouts/widgets/basicForm.html','<form><div class="form-group"><label for="exampleInputEmail1">Email address</label> <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email"></div><div class="form-group"><label for="exampleInputPassword1">Password</label> <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></div><div class="checkbox"><label class="custom-checkbox"><input type="checkbox"> <span>Check me out</span></label></div><button type="submit" class="btn btn-danger">Submit</button></form>');
$templateCache.put('app/pages/form/layouts/widgets/blockForm.html','<div class="row"><div class="col-sm-6"><div class="form-group"><label for="inputFirstName">First Name</label> <input type="text" class="form-control" id="inputFirstName" placeholder="First Name"></div></div><div class="col-sm-6"><div class="form-group"><label for="inputLastName">Last Name</label> <input type="text" class="form-control" id="inputLastName" placeholder="Last Name"></div></div></div><div class="row"><div class="col-sm-6"><div class="form-group"><label for="inputFirstName">Email</label> <input type="email" class="form-control" id="inputEmail" placeholder="Email"></div></div><div class="col-sm-6"><div class="form-group"><label for="inputWebsite">Website</label> <input type="text" class="form-control" id="inputWebsite" placeholder="Website"></div></div></div><button type="submit" class="btn btn-primary">Submit</button>');
$templateCache.put('app/pages/form/layouts/widgets/formWithoutLabels.html','<form><div class="form-group"><input type="text" class="form-control" placeholder="Recipients"></div><div class="form-group"><input type="text" class="form-control" placeholder="Subject"></div><div class="form-group"><textarea class="form-control" placeholder="Message"></textarea></div><button type="submit" class="btn btn-success">Send</button></form>');
$templateCache.put('app/pages/form/layouts/widgets/horizontalForm.html','<form class="form-horizontal"><div class="form-group"><label for="inputEmail3" class="col-sm-2 control-label">Email</label><div class="col-sm-10"><input type="email" class="form-control" id="inputEmail3" placeholder="Email"></div></div><div class="form-group"><label for="inputPassword3" class="col-sm-2 control-label">Password</label><div class="col-sm-10"><input type="password" class="form-control" id="inputPassword3" placeholder="Password"></div></div><div class="form-group"><div class="col-sm-offset-2 col-sm-10"><div class="checkbox"><label class="custom-checkbox"><input type="checkbox"> <span>Remember me</span></label></div></div></div><div class="form-group"><div class="col-sm-offset-2 col-sm-10"><button type="submit" class="btn btn-warning">Sign in</button></div></div></form>');
$templateCache.put('app/pages/form/layouts/widgets/inlineForm.html','<form class="row form-inline"><div class="form-group col-sm-3 col-xs-6"><input type="text" class="form-control" id="exampleInputName2" placeholder="Name"></div><div class="form-group col-sm-3 col-xs-6"><input type="email" class="form-control" id="exampleInputEmail2" placeholder="Email"></div><div class="checkbox"><label class="custom-checkbox"><input type="checkbox"> <span>Remember me</span></label></div><button type="submit" class="btn btn-primary">Send invitation</button></form>');
$templateCache.put('app/pages/components/mail/detail/mailDetail.html','<div class="message-container" ng-class="{\'expanded\': tabCtrl.navigationCollapsed}"><div class="message"><div class="row"><div class="toggle-navigation-container detail-page"><a href="" class="collapse-navigation-link ion-navicon" ng-click="tabCtrl.navigationCollapsed=!tabCtrl.navigationCollapsed"></a></div><button ui-sref="components.mail.label({label : detailCtrl.label})" type="button" class="back-button btn btn-default btn-with-icon"><i class="ion-chevron-left"></i>Back</button></div><div class="person-info row"><div class="col-lg-4 col-md-12 no-padding"><img ng-src="{{detailCtrl.mail.name.split(\' \')[0] | profilePicture}}" class="human-picture"><div class="name"><h2 class="name-h">{{detailCtrl.mail.name.split(\' \')[0]}}</h2><h2 class="name-h second-name">{{detailCtrl.mail.name.split(\' \')[1]}}</h2><div><span class="mail-tag tag label {{detailCtrl.mail.tag}}">{{detailCtrl.mail.tag}}</span></div></div></div><div class="col-lg-4 col-md-6 col-xs-12 no-padding"><div class="contact-info phone-email"><div><i class="ion-iphone"></i> <span class="phone">777-777-7777</span></div><div><i class="ion-email"></i> <span class="email">{{detailCtrl.mail.email}}</span></div></div></div><div class="col-lg-4 col-md-6 col-xs-12 no-padding"><div class="contact-info position-address"><div><span class="position">{{detailCtrl.mail.position}}</span></div><div><span class="address">12 Nezavisimosti st. Vilnius, Lithuania</span></div></div></div></div><div class="row"></div><div class="line"></div><div class="message-details"><span class="subject">{{detailCtrl.mail.subject}}</span> <span class="date">\u2022 {{detailCtrl.mail.date | date : \'h:mm a MMMM d \'}}</span></div><div class="line"></div><div ng-bind-html="detailCtrl.mail.body" class="message-body"></div><div class="line"></div><div class="attachment" ng-show="detailCtrl.mail.attachment"><span class="file-links">1 Attachment - <a href="">View</a> | <a href="">Download</a></span><div><i class="file-icon ion-document"></i> <span class="file-name">{{detailCtrl.mail.attachment}}</span></div></div><div class="line" ng-show="detailCtrl.mail.attachment"></div><div class="answer-container"><button type="button" class="btn btn-with-icon" ng-click="tabCtrl.showCompose(detailCtrl.mail.subject,detailCtrl.mail.email,\'\')"><i class="ion-reply"></i>Reply</button> <button type="button" class="btn btn-with-icon" ng-click="tabCtrl.showCompose(detailCtrl.mail.subject,\'\',detailCtrl.mail.body)"><i class="ion-forward"></i>Forward</button> <button type="button" class="btn btn-with-icon"><i class="ion-printer"></i>Print</button> <button type="button" class="btn btn-with-icon"><i class="ion-android-remove-circle"></i>Spam</button> <button type="button" class="btn btn-with-icon"><i class="ion-android-delete"></i>Delete</button></div></div><div ng-show="!detailCtrl.mail"><h5 ng-class="text-center">Nothing to show</h5></div></div>');
$templateCache.put('app/pages/form/inputs/widgets/checkboxesRadios.html','<div class="checkbox-demo-row"><div class="input-demo checkbox-demo row"><div class="col-md-4"><label class="checkbox-inline custom-checkbox nowrap"><input type="checkbox" id="inlineCheckbox01" value="option1"> <span>Check 1</span></label></div><div class="col-md-4"><label class="checkbox-inline custom-checkbox nowrap"><input type="checkbox" id="inlineCheckbox02" value="option2"> <span>Check 2</span></label></div><div class="col-md-4"><label class="checkbox-inline custom-checkbox nowrap"><input type="checkbox" id="inlineCheckbox03" value="option3"> <span>Check 3</span></label></div></div><div class="input-demo radio-demo row"><div class="col-md-4"><label class="radio-inline custom-radio nowrap"><input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"> <span>Option 1</span></label></div><div class="col-md-4"><label class="radio-inline custom-radio nowrap"><input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"> <span>Option 2</span></label></div><div class="col-md-4"><label class="radio-inline custom-radio nowrap"><input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"> <span>Option3</span></label></div></div></div><div><div class="checkbox disabled"><label class="custom-checkbox nowrap"><input type="checkbox" value="" disabled=""> <span>Checkbox is disabled</span></label></div><div class="radio disabled"><label class="custom-radio nowrap"><input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled=""> <span>Disabled option</span></label></div></div>');
$templateCache.put('app/pages/form/inputs/widgets/inputGroups.html','<div class="input-group"><span class="input-group-addon input-group-addon-primary addon-left" id="basic-addon1">@</span> <input type="text" class="form-control with-primary-addon" placeholder="Username" aria-describedby="basic-addon1"></div><div class="input-group"><input type="text" class="form-control with-warning-addon" placeholder="Recipient\'s username" aria-describedby="basic-addon2"> <span class="input-group-addon input-group-addon-warning addon-right" id="basic-addon2">@example.com</span></div><div class="input-group"><span class="input-group-addon addon-left input-group-addon-success">$</span> <input type="text" class="form-control with-success-addon" aria-label="Amount (to the nearest dollar)"> <span class="input-group-addon addon-right input-group-addon-success">.00</span></div><div class="input-group"><input type="text" class="form-control with-danger-addon" placeholder="Search for..."> <span class="input-group-btn"><button class="btn btn-danger" type="button">Go!</button></span></div>');
$templateCache.put('app/pages/form/inputs/widgets/standardFields.html','<form><div class="form-group"><label for="input01">Text</label> <input type="text" class="form-control" id="input01" placeholder="Text"></div><div class="form-group"><label for="input02">Password</label> <input type="password" class="form-control" id="input02" placeholder="Password"></div><div class="form-group"><label for="input03">Rounded Corners</label> <input type="text" class="form-control form-control-rounded" id="input03" placeholder="Rounded Corners"></div><div class="form-group"><label for="input04">With help</label> <input type="text" class="form-control" id="input04" placeholder="With help"> <span class="help-block sub-little-text">A block of help text that breaks onto a new line and may extend beyond one line.</span></div><div class="form-group"><label for="input05">Disabled Input</label> <input type="text" class="form-control" id="input05" placeholder="Disabled Input" disabled=""></div><div class="form-group"><label for="textarea01">Textarea</label> <textarea placeholder="Default Input" class="form-control" id="textarea01"></textarea></div><div class="form-group"><input type="text" class="form-control input-sm" id="input2" placeholder="Small Input"></div><div class="form-group"><input type="text" class="form-control input-lg" id="input4" placeholder="Large Input"></div></form>');
$templateCache.put('app/pages/form/inputs/widgets/validationStates.html','<div class="form-group has-success"><label class="control-label" for="inputSuccess1">Input with success</label> <input type="text" class="form-control" id="inputSuccess1"></div><div class="form-group has-warning"><label class="control-label" for="inputWarning1">Input with warning</label> <input type="text" class="form-control" id="inputWarning1"></div><div class="form-group has-error"><label class="control-label" for="inputError1">Input with error</label> <input type="text" class="form-control" id="inputError1"></div><div class="has-success"><div class="checkbox"><label class="custom-checkbox"><input type="checkbox" id="checkboxSuccess" value="option1"> <span>Checkbox with success</span></label></div></div><div class="has-warning"><div class="checkbox"><label class="custom-checkbox"><input type="checkbox" id="checkboxWarning" value="option1"> <span>Checkbox with warning</span></label></div></div><div class="has-error"><div class="checkbox"><label class="custom-checkbox"><input type="checkbox" id="checkboxError" value="option1"> <span>Checkbox with error</span></label></div></div><div class="form-group has-success has-feedback"><label class="control-label" for="inputSuccess2">Input with success</label> <input type="text" class="form-control" id="inputSuccess2" aria-describedby="inputSuccess2Status"> <i class="ion-checkmark-circled form-control-feedback" aria-hidden="true"></i> <span id="inputSuccess2Status" class="sr-only">(success)</span></div><div class="form-group has-warning has-feedback"><label class="control-label" for="inputWarning2">Input with warning</label> <input type="text" class="form-control" id="inputWarning2" aria-describedby="inputWarning2Status"> <i class="ion-alert-circled form-control-feedback" aria-hidden="true"></i> <span id="inputWarning2Status" class="sr-only">(warning)</span></div><div class="form-group has-error has-feedback"><label class="control-label" for="inputError2">Input with error</label> <input type="text" class="form-control" id="inputError2" aria-describedby="inputError2Status"> <i class="ion-android-cancel form-control-feedback" aria-hidden="true"></i> <span id="inputError2Status" class="sr-only">(error)</span></div><div class="form-group has-success has-feedback"><label class="control-label" for="inputGroupSuccess1">Input group with success</label><div class="input-group"><span class="input-group-addon addon-left">@</span> <input type="text" class="form-control" id="inputGroupSuccess1" aria-describedby="inputGroupSuccess1Status"></div><i class="ion-checkmark-circled form-control-feedback" aria-hidden="true"></i> <span id="inputGroupSuccess1Status" class="sr-only">(success)</span></div>');
$templateCache.put('app/pages/ui/buttons/widgets/buttonGroups.html','<div class="btn-group-example"><div class="btn-group" role="group" aria-label="Basic example"><button type="button" class="btn btn-danger">Left</button> <button type="button" class="btn btn-danger">Middle</button> <button type="button" class="btn btn-danger">Right</button></div></div><div class="btn-toolbar-example"><div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups"><div class="btn-group" role="group" aria-label="First group"><button type="button" class="btn btn-primary">1</button> <button type="button" class="btn btn-primary">2</button> <button type="button" class="btn btn-primary">3</button> <button type="button" class="btn btn-primary">4</button></div><div class="btn-group" role="group" aria-label="Second group"><button type="button" class="btn btn-primary">5</button> <button type="button" class="btn btn-primary">6</button> <button type="button" class="btn btn-primary">7</button></div><div class="btn-group" role="group" aria-label="Third group"><button type="button" class="btn btn-primary">8</button></div></div></div>');
$templateCache.put('app/pages/ui/buttons/widgets/buttons.html','<div class="basic-btns"><div class="row"><div class="col-md-2"><h5>Default button</h5></div><div class="col-md-10"><div class="row btns-row btns-same-width-md"><div class="col-sm-2 col-xs-4"><button type="button" class="btn btn-primary">Primary</button></div><div class="col-sm-2 col-xs-4"><button type="button" class="btn btn-default">Default</button></div><div class="col-sm-2 col-xs-4"><button type="button" class="btn btn-success">Success</button></div><div class="col-sm-2 col-xs-4"><button type="button" class="btn btn-info">Info</button></div><div class="col-sm-2 col-xs-4"><button type="button" class="btn btn-warning">Warning</button></div><div class="col-sm-2 col-xs-4"><button type="button" class="btn btn-danger">Danger</button></div></div></div></div><div class="row"><div class="col-md-2"><h5 class="row-sm">Small button</h5></div><div class="col-md-10"><div class="row btns-row btns-same-width-md"><div class="col-sm-2 col-xs-4"><button type="button" class="btn btn-primary btn-sm">Primary</button></div><div class="col-sm-2 col-xs-4"><button type="button" class="btn btn-default btn-sm">Default</button></div><div class="col-sm-2 col-xs-4"><button type="button" class="btn btn-success btn-sm">Success</button></div><div class="col-sm-2 col-xs-4"><button type="button" class="btn btn-info btn-sm">Info</button></div><div class="col-sm-2 col-xs-4"><button type="button" class="btn btn-warning btn-sm">Warning</button></div><div class="col-sm-2 col-xs-4"><button type="button" class="btn btn-danger btn-sm">Danger</button></div></div></div></div><div class="row"><div class="col-md-2"><h5 class="row-xs">Extra small button</h5></div><div class="col-md-10"><div class="row btns-row btns-same-width-md"><div class="col-sm-2 col-xs-4"><button type="button" class="btn btn-primary btn-xs">Primary</button></div><div class="col-sm-2 col-xs-4"><button type="button" class="btn btn-default btn-xs">Default</button></div><div class="col-sm-2 col-xs-4"><button type="button" class="btn btn-success btn-xs">Success</button></div><div class="col-sm-2 col-xs-4"><button type="button" class="btn btn-info btn-xs">Info</button></div><div class="col-sm-2 col-xs-4"><button type="button" class="btn btn-warning btn-xs">Warning</button></div><div class="col-sm-2 col-xs-4"><button type="button" class="btn btn-danger btn-xs">Danger</button></div></div></div></div><div class="row"><div class="col-md-2"><h5>Disabled button</h5></div><div class="col-md-10"><div class="row btns-row btns-same-width-md"><div class="col-sm-2 col-xs-4"><button type="button" class="btn btn-primary" disabled="disabled">Primary</button></div><div class="col-sm-2 col-xs-4"><button type="button" class="btn btn-default" disabled="disabled">Default</button></div><div class="col-sm-2 col-xs-4"><button type="button" class="btn btn-success" disabled="disabled">Success</button></div><div class="col-sm-2 col-xs-4"><button type="button" class="btn btn-info" disabled="disabled">Info</button></div><div class="col-sm-2 col-xs-4"><button type="button" class="btn btn-warning" disabled="disabled">Warning</button></div><div class="col-sm-2 col-xs-4"><button type="button" class="btn btn-danger" disabled="disabled">Danger</button></div></div></div></div></div>');
$templateCache.put('app/pages/ui/buttons/widgets/dropdowns.html','<div class="row btns-row"><div class="col-sm-4 col-xs-6"><div class="btn-group" uib-dropdown="" dropdown-append-to-body=""><button type="button" class="btn btn-primary" uib-dropdown-toggle="">Primary <span class="caret"></span></button><ul uib-dropdown-menu=""><li><a href="">Action</a></li><li><a href="">Another action</a></li><li><a href="">Something else here</a></li><li role="separator" class="divider"></li><li><a href="">Separated link</a></li></ul></div></div><div class="col-sm-4 col-xs-6"><div class="btn-group" uib-dropdown="" dropdown-append-to-body=""><button type="button" class="btn btn-success" uib-dropdown-toggle="">Success <span class="caret"></span></button><ul uib-dropdown-menu=""><li><a href="">Action</a></li><li><a href="">Another action</a></li><li><a href="">Something else here</a></li><li role="separator" class="divider"></li><li><a href="">Separated link</a></li></ul></div></div><div class="col-sm-4 col-xs-6"><div class="btn-group" uib-dropdown="" dropdown-append-to-body=""><button type="button" class="btn btn-info" uib-dropdown-toggle="">Info <span class="caret"></span></button><ul uib-dropdown-menu=""><li><a href="">Action</a></li><li><a href="">Another action</a></li><li><a href="">Something else here</a></li><li role="separator" class="divider"></li><li><a href="">Separated link</a></li></ul></div></div><div class="col-sm-4 col-xs-6"><div class="btn-group" uib-dropdown="" dropdown-append-to-body=""><button type="button" class="btn btn-default" uib-dropdown-toggle="">Default <span class="caret"></span></button><ul uib-dropdown-menu=""><li><a href="">Action</a></li><li><a href="">Another action</a></li><li><a href="">Something else here</a></li><li role="separator" class="divider"></li><li><a href="">Separated link</a></li></ul></div></div><div class="col-sm-4 col-xs-6"><div class="btn-group" uib-dropdown="" dropdown-append-to-body=""><button type="button" class="btn btn-warning" uib-dropdown-toggle="">Warning <span class="caret"></span></button><ul uib-dropdown-menu=""><li><a href="">Action</a></li><li><a href="">Another action</a></li><li><a href="">Something else here</a></li><li role="separator" class="divider"></li><li><a href="">Separated link</a></li></ul></div></div><div class="col-sm-4 col-xs-6"><div class="btn-group" uib-dropdown="" dropdown-append-to-body=""><button type="button" class="btn btn-danger" uib-dropdown-toggle="">Danger <span class="caret"></span></button><ul uib-dropdown-menu=""><li><a href="">Action</a></li><li><a href="">Another action</a></li><li><a href="">Something else here</a></li><li role="separator" class="divider"></li><li><a href="">Separated link</a></li></ul></div></div></div><h5 class="panel-subtitle">Split button dropdowns</h5><div class="row btns-row"><div class="col-sm-4 col-xs-6"><div class="btn-group" uib-dropdown="" dropdown-append-to-body=""><button type="button" class="btn btn-primary">Primary</button> <button type="button" class="btn btn-primary" uib-dropdown-toggle=""><span class="caret"></span> <span class="sr-only">Toggle Dropdown</span></button><ul uib-dropdown-menu=""><li><a href="">Action</a></li><li><a href="">Another action</a></li><li><a href="">Something else here</a></li><li role="separator" class="divider"></li><li><a href="">Separated link</a></li></ul></div></div><div class="col-sm-4 col-xs-6"><div class="btn-group" uib-dropdown="" dropdown-append-to-body=""><button type="button" class="btn btn-success">Success</button> <button type="button" class="btn btn-success" uib-dropdown-toggle=""><span class="caret"></span> <span class="sr-only">Toggle Dropdown</span></button><ul uib-dropdown-menu=""><li><a href="">Action</a></li><li><a href="">Another action</a></li><li><a href="">Something else here</a></li><li role="separator" class="divider"></li><li><a href="">Separated link</a></li></ul></div></div><div class="col-sm-4 col-xs-6"><div class="btn-group" uib-dropdown="" dropdown-append-to-body=""><button type="button" class="btn btn-info">Info</button> <button type="button" class="btn btn-info" uib-dropdown-toggle=""><span class="caret"></span> <span class="sr-only">Toggle Dropdown</span></button><ul uib-dropdown-menu=""><li><a href="">Action</a></li><li><a href="">Another action</a></li><li><a href="">Something else here</a></li><li role="separator" class="divider"></li><li><a href="">Separated link</a></li></ul></div></div><div class="col-sm-4 col-xs-6"><div class="btn-group" uib-dropdown="" dropdown-append-to-body=""><button type="button" class="btn btn-default">Default</button> <button type="button" class="btn btn-default" uib-dropdown-toggle=""><span class="caret"></span> <span class="sr-only">Toggle Dropdown</span></button><ul uib-dropdown-menu=""><li><a href="">Action</a></li><li><a href="">Another action</a></li><li><a href="">Something else here</a></li><li role="separator" class="divider"></li><li><a href="">Separated link</a></li></ul></div></div><div class="col-sm-4 col-xs-6"><div class="btn-group" uib-dropdown="" dropdown-append-to-body=""><button type="button" class="btn btn-warning">Warning</button> <button type="button" class="btn btn-warning" uib-dropdown-toggle=""><span class="caret"></span> <span class="sr-only">Toggle Dropdown</span></button><ul uib-dropdown-menu=""><li><a href="">Action</a></li><li><a href="">Another action</a></li><li><a href="">Something else here</a></li><li role="separator" class="divider"></li><li><a href="">Separated link</a></li></ul></div></div><div class="col-sm-4 col-xs-6"><div class="btn-group" uib-dropdown="" dropdown-append-to-body=""><button type="button" class="btn btn-danger">Danger</button> <button type="button" class="btn btn-danger" uib-dropdown-toggle=""><span class="caret"></span> <span class="sr-only">Toggle Dropdown</span></button><ul uib-dropdown-menu=""><li><a href="">Action</a></li><li><a href="">Another action</a></li><li><a href="">Something else here</a></li><li role="separator" class="divider"></li><li><a href="">Separated link</a></li></ul></div></div></div>');
$templateCache.put('app/pages/ui/buttons/widgets/iconButtons.html','<ul class="btn-list clearfix"><li><button type="button" class="btn btn-primary btn-icon"><i class="ion-android-download"></i></button></li><li><button type="button" class="btn btn-default btn-icon"><i class="ion-stats-bars"></i></button></li><li><button type="button" class="btn btn-success btn-icon"><i class="ion-android-checkmark-circle"></i></button></li><li><button type="button" class="btn btn-info btn-icon"><i class="ion-information"></i></button></li><li><button type="button" class="btn btn-warning btn-icon"><i class="ion-android-warning"></i></button></li><li><button type="button" class="btn btn-danger btn-icon"><i class="ion-nuclear"></i></button></li></ul><h5 class="panel-subtitle">Buttons with icons</h5><ul class="btn-list clearfix"><li><button type="button" class="btn btn-primary btn-with-icon"><i class="ion-android-download"></i>Primary</button></li><li><button type="button" class="btn btn-default btn-with-icon"><i class="ion-stats-bars"></i>Default</button></li><li><button type="button" class="btn btn-success btn-with-icon"><i class="ion-android-checkmark-circle"></i>Success</button></li><li><button type="button" class="btn btn-info btn-with-icon"><i class="ion-information"></i>Info</button></li><li><button type="button" class="btn btn-warning btn-with-icon"><i class="ion-android-warning"></i>Warning</button></li><li><button type="button" class="btn btn-danger btn-with-icon"><i class="ion-nuclear"></i>Danger</button></li></ul>');
$templateCache.put('app/pages/ui/buttons/widgets/largeButtons.html','<div class="row btns-row btns-same-width-lg"><div class="col-sm-4 col-xs-6"><button type="button" class="btn btn-primary btn-lg">Primary</button></div><div class="col-sm-4 col-xs-6"><button type="button" class="btn btn-success btn-lg">Success</button></div><div class="col-sm-4 col-xs-6"><button type="button" class="btn btn-info btn-lg">Info</button></div><div class="col-sm-4 col-xs-6"><button type="button" class="btn btn-default btn-lg">Default</button></div><div class="col-sm-4 col-xs-6"><button type="button" class="btn btn-warning btn-lg">Warning</button></div><div class="col-sm-4 col-xs-6"><button type="button" class="btn btn-danger btn-lg">Danger</button></div></div>');
$templateCache.put('app/pages/ui/buttons/widgets/progressButtons.html','<div class="progress-buttons-container text-center default-text"><div class="row"><section class="col-md-6 col-lg-3"><span class="button-title">fill horizontal</span> <button progress-button="progressFunction()" class="btn btn-success">Submit</button></section><section class="col-md-6 col-lg-3"><span class="button-title">fill vertical</span> <button progress-button="progressFunction()" pb-direction="vertical" class="btn btn-danger">Submit</button></section><section class="col-md-6 col-lg-3"><span class="button-title">shrink horizontal</span> <button progress-button="progressFunction()" pb-style="shrink" class="btn btn-warning">Submit</button></section><section class="col-md-6 col-lg-3"><span class="button-title">shrink vertical</span> <button progress-button="progressFunction()" pb-style="shrink" pb-direction="vertical" class="btn btn-info">Submit</button></section></div><div class="row"><section class="col-md-6 col-lg-3"><span class="button-title">rotate-angle-bottom<br>perspective</span> <button progress-button="progressFunction()" pb-style="rotate-angle-bottom" class="btn btn-success">Submit</button></section><section class="col-md-6 col-lg-3"><span class="button-title">rotate-angle-top<br>perspective</span> <button progress-button="progressFunction()" pb-style="rotate-angle-top" class="btn btn-danger">Submit</button></section><section class="col-md-6 col-lg-3"><span class="button-title">rotate-angle-left<br>perspective</span> <button progress-button="progressFunction()" pb-style="rotate-angle-left" class="btn btn-warning">Submit</button></section><section class="col-md-6 col-lg-3"><span class="button-title">rotate-angle-right<br>perspective</span> <button progress-button="progressFunction()" pb-style="rotate-angle-right" class="btn btn-info">Submit</button></section></div><div class="row"><section class="col-md-6 col-lg-3"><span class="button-title">rotate-side-down<br>perspective</span> <button progress-button="progressFunction()" pb-style="rotate-side-down" class="btn btn-success">Submit</button></section><section class="col-md-6 col-lg-3"><span class="button-title">rotate-side-up<br>perspective</span> <button progress-button="progressFunction()" pb-style="rotate-side-up" class="btn btn-danger">Submit</button></section><section class="col-md-6 col-lg-3"><span class="button-title">rotate-side-left<br>perspective</span> <button progress-button="progressFunction()" pb-style="rotate-side-left" class="btn btn-warning">Submit</button></section><section class="col-md-6 col-lg-3"><span class="button-title">rotate-side-right<br>perspective</span> <button progress-button="progressFunction()" pb-style="rotate-side-right" class="btn btn-info">Submit</button></section></div><div class="row"><section class="col-md-6 col-lg-3"><span class="button-title">rotate-back<br>perspective</span> <button progress-button="progressFunction()" pb-style="rotate-back" class="btn btn-success">Submit</button></section><section class="col-md-6 col-lg-3"><span class="button-title">flip-open<br>perspective</span> <button progress-button="progressFunction()" pb-style="flip-open" class="btn btn-danger">Submit</button></section><section class="col-md-6 col-lg-3"><span class="button-title">slide-down<br>horizontal</span> <button progress-button="progressFunction()" pb-style="slide-down" class="btn btn-warning">Submit</button></section><section class="col-md-6 col-lg-3"><span class="button-title">move-up<br>horizontal</span> <button progress-button="progressFunction()" pb-style="move-up" class="btn btn-info">Submit</button></section></div><div class="row"><section class="col-md-6"><span class="button-title">top-line<br>horizontal</span> <button progress-button="progressFunction()" pb-style="top-line" class="btn btn-success">Submit</button></section><section class="col-md-6"><span class="button-title">lateral-lines<br>vertical</span> <button progress-button="progressFunction()" pb-style="lateral-lines" class="btn btn-info">Submit</button></section></div></div>');
$templateCache.put('app/pages/ui/icons/widgets/fontAwesomeIcons.html','<div class="row icons-list success awesomeIcons"><div class="col-xs-2" ng-repeat="icon in icons.fontAwesomeIcons"><i class="fa {{icon}}"></i></div></div><a href="http://fortawesome.github.io/Font-Awesome/icons/" target="_blank" class="see-all-icons">See all Font Awesome icons</a>');
$templateCache.put('app/pages/ui/icons/widgets/ionicons.html','<div class="row icons-list primary"><div class="col-xs-2" ng-repeat="icon in icons.ionicons"><i class="{{icon}}"></i></div></div><a href="http://ionicons.com/" target="_blank" class="see-all-icons">See all ionicons icons</a>');
$templateCache.put('app/pages/ui/icons/widgets/kameleon.html','<div class="row clearfix"><div class="kameleon-row" ng-repeat="icon in icons.kameleonIcons"><div class="kameleon-icon"><img ng-src="{{:: (icon.img | kameleonImg )}}"><span>{{icon.name}}</span></div></div></div><a href="http://www.kameleon.pics/" target="_blank" class="see-all-icons">See all Kamaleon icons</a>');
$templateCache.put('app/pages/ui/icons/widgets/kameleonRounded.html','<div class="row clearfix"><div class="kameleon-row" ng-repeat="icon in icons.kameleonRoundedIcons"><div class="kameleon-icon with-round-bg {{icon.color}}"><img ng-src="{{::( icon.img | kameleonImg )}}"><span>{{ icon.name }}</span></div></div></div><a href="http://www.kameleon.pics/" target="_blank" class="see-all-icons">See all Kamaleon icons</a>');
$templateCache.put('app/pages/ui/icons/widgets/socicon.html','<div class="row icons-list danger"><div class="col-xs-2" ng-repeat="icon in icons.socicon"><i class="socicon">{{ icon }}</i></div></div><a href="http://www.socicon.com/chart.php" target="_blank" class="see-all-icons">See all Socicon icons</a>');
$templateCache.put('app/pages/ui/modals/notifications/notifications.html','<div class="modal-buttons same-width clearfix" ng-controller="NotificationsCtrl"><button type="button" class="btn btn-success" ng-click="showSuccessMsg()">Success Notification</button> <button type="button" class="btn btn-info" ng-click="showInfoMsg()">Info Notification</button> <button type="button" class="btn btn-warning" ng-click="showWarningMsg()">Warning Notification</button> <button type="button" class="btn btn-danger" ng-click="showErrorMsg()">Danger Notification</button></div>');
$templateCache.put('app/pages/ui/modals/progressModal/progressModal.html','<div class="modal-content" ng-controller="ProgressModalCtrl"><div class="modal-body"><progress-bar-round></progress-bar-round></div><div class="modal-footer"></div></div>');
$templateCache.put('app/pages/ui/modals/modalTemplates/basicModal.html','<div class="modal-content"><div class="modal-header"><button type="button" class="close" ng-click="$dismiss()" aria-label="Close"><em class="ion-ios-close-empty sn-link-close"></em></button><h4 class="modal-title" id="myModalLabel">Modal title</h4></div><div class="modal-body">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div><div class="modal-footer"><button type="button" class="btn btn-primary" ng-click="$dismiss()">Save changes</button></div></div>');
$templateCache.put('app/pages/ui/modals/modalTemplates/dangerModal.html','<div class="modal-content"><div class="modal-header bg-danger"><i class="ion-flame modal-icon"></i><span>Error</span></div><div class="modal-body text-center">Your information hasn\'t been saved!</div><div class="modal-footer"><button type="button" class="btn btn-danger" ng-click="$dismiss()">OK</button></div></div>');
$templateCache.put('app/pages/ui/modals/modalTemplates/infoModal.html','<div class="modal-content"><div class="modal-header bg-info"><i class="ion-information-circled modal-icon"></i><span>Information</span></div><div class="modal-body text-center">You\'ve got a new email!</div><div class="modal-footer"><button type="button" class="btn btn-info" ng-click="$dismiss()">OK</button></div></div>');
$templateCache.put('app/pages/ui/modals/modalTemplates/largeModal.html','<div class="modal-content"><div class="modal-header"><button type="button" class="close" ng-click="$dismiss()" aria-label="Close"><em class="ion-ios-close-empty sn-link-close"></em></button><h4 class="modal-title">Modal title</h4></div><div class="modal-body">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div><div class="modal-footer"><button type="button" class="btn btn-primary" ng-click="$dismiss()">Save changes</button></div></div>');
$templateCache.put('app/pages/ui/modals/modalTemplates/smallModal.html','<div class="modal-content"><div class="modal-header"><button type="button" class="close" ng-click="$dismiss()" aria-label="Close"><em class="ion-ios-close-empty sn-link-close"></em></button><h4 class="modal-title">Modal title</h4></div><div class="modal-body">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div><div class="modal-footer"><button type="button" class="btn btn-primary" ng-click="$dismiss()">Save changes</button></div></div>');
$templateCache.put('app/pages/ui/modals/modalTemplates/successModal.html','<div class="modal-content"><div class="modal-header bg-success"><i class="ion-checkmark modal-icon"></i><span>Success</span></div><div class="modal-body text-center">Your information has been saved successfully</div><div class="modal-footer"><button type="button" class="btn btn-success" ng-click="$dismiss()">OK</button></div></div>');
$templateCache.put('app/pages/ui/modals/modalTemplates/warningModal.html','<div class="modal-content"><div class="modal-header bg-warning"><i class="ion-android-warning modal-icon"></i><span>Warning</span></div><div class="modal-body text-center">Your computer is about to explode!</div><div class="modal-footer"><button type="button" class="btn btn-warning" ng-click="$dismiss()">OK</button></div></div>');
$templateCache.put('app/pages/charts/amCharts/barChart/barChart.html','<div id="barChart" class="admin-chart" ng-controller="BarChartCtrl"></div>');
$templateCache.put('app/pages/ui/progressBars/widgets/animated.html','<div class="progress"><div class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%"><span class="sr-only">40% Complete (success)</span></div></div><div class="progress"><div class="progress-bar progress-bar-info progress-bar-striped active" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%"><span class="sr-only">20% Complete</span></div></div><div class="progress"><div class="progress-bar progress-bar-warning progress-bar-striped active" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%"><span class="sr-only">60% Complete (warning)</span></div></div><div class="progress"><div class="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%"><span class="sr-only">80% Complete (danger)</span></div></div>');
$templateCache.put('app/pages/ui/progressBars/widgets/basic.html','<div class="progress"><div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%"><span class="sr-only">40% Complete (success)</span></div></div><div class="progress"><div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%"><span class="sr-only">20% Complete</span></div></div><div class="progress"><div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%"><span class="sr-only">60% Complete (warning)</span></div></div><div class="progress"><div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%"><span class="sr-only">80% Complete (danger)</span></div></div>');
$templateCache.put('app/pages/ui/progressBars/widgets/label.html','<div class="progress"><div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">40% Complete (success)</div></div><div class="progress"><div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">20% Complete</div></div><div class="progress"><div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">60% Complete (warning)</div></div><div class="progress"><div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%">80% Complete (danger)</div></div>');
$templateCache.put('app/pages/ui/progressBars/widgets/stacked.html','<div class="progress"><div class="progress-bar progress-bar-success" style="width: 35%"><span class="sr-only">35% Complete (success)</span></div><div class="progress-bar progress-bar-warning progress-bar-striped" style="width: 20%"><span class="sr-only">20% Complete (warning)</span></div><div class="progress-bar progress-bar-danger" style="width: 10%"><span class="sr-only">10% Complete (danger)</span></div><div class="progress-bar progress-bar-info progress-bar-striped active" style="width: 20%"><span class="sr-only">20% Complete (warning)</span></div></div>');
$templateCache.put('app/pages/ui/progressBars/widgets/striped.html','<div class="progress"><div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%"><span class="sr-only">40% Complete (success)</span></div></div><div class="progress"><div class="progress-bar progress-bar-info progress-bar-striped" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%"><span class="sr-only">20% Complete</span></div></div><div class="progress"><div class="progress-bar progress-bar-warning progress-bar-striped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%"><span class="sr-only">60% Complete (warning)</span></div></div><div class="progress"><div class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%"><span class="sr-only">80% Complete (danger)</span></div></div>');
$templateCache.put('app/pages/charts/amCharts/combinedChart/combinedChart.html','<div id="zoomAxisChart" class="admin-chart" ng-controller="combinedChartCtrl"></div>');
$templateCache.put('app/pages/charts/amCharts/funnelChart/funnelChart.html','<div id="funnelChart" class="admin-chart" ng-controller="FunnelChartCtrl"></div>');
$templateCache.put('app/pages/charts/amCharts/ganttChart/ganttChart.html','<div id="gnattChart" class="admin-chart" ng-controller="ganttChartCtrl"></div>');
$templateCache.put('app/pages/charts/amCharts/pieChart/pieChart.html','<div id="pieChart" class="admin-chart" ng-controller="PieChartCtrl"></div>');
$templateCache.put('app/pages/charts/amCharts/lineChart/lineChart.html','<div id="lineChart" class="admin-chart" ng-controller="LineChartCtrl"></div>');
$templateCache.put('app/pages/charts/amCharts/areaChart/areaChart.html','<div id="areaChart" class="admin-chart" ng-controller="AreaChartCtrl"></div>');
$templateCache.put('app/pages/form/inputs/widgets/datePickers/datePickers.html','<div class="datepicker row"><div class="col-xlg-6 col-md-12 col-sm-6" ng-controller="datepickerCtrl"><h4>Inline</h4><label>Selected date is: <em>{{dt | date:\'fullDate\' }}</em></label><div class="uib-datepicker-wrap"><uib-datepicker ng-model="dt" datepicker-options="options"></uib-datepicker></div></div><div class="col-xlg-6 col-md-12 col-sm-6" ng-controller="datepickerpopupCtrl"><h4>Popup</h4><label>Selected date is: <em>{{dt | date:\'fullDate\' }}</em></label><p class="input-group"><input type="text" class="form-control" uib-datepicker-popup="{{format}}" datepicker-options="options" ng-model="dt" is-open="opened" ng-required="true" close-text="Close" alt-input-formats="altInputFormats" show-button-bar="false"> <span class="input-group-btn"><button type="button" class="btn btn-default" ng-click="open()"><i class="glyphicon glyphicon-calendar"></i></button></span></p><label>Format: <span class="muted-text">(manual alternate <em>{{altInputFormats[0]}}</em>)</span></label><select class="form-control" ng-model="format" ng-options="f for f in formats"><option></option></select></div></div>');
$templateCache.put('app/pages/form/inputs/widgets/oldSelect/select.html','<div ng-controller="OldSelectpickerPanelCtrl as selectpickerVm"><div class="form-group"><select class="form-control selectpicker" selectpicker="" title="Standard Select" ng-model="selectpickerVm.standardSelected" ng-options="item as item.label for item in selectpickerVm.standardSelectItems"></select></div><div class="form-group"><select class="form-control selectpicker with-search" data-live-search="true" title="Select With Search" selectpicker="" ng-model="selectpickerVm.searchSelectedItem" ng-options="item as item.label for item in selectpickerVm.selectWithSearchItems"></select></div><div class="form-group"><select class="form-control selectpicker" title="Option Types" selectpicker=""><option>Standard option</option><option data-subtext="option subtext">Option with subtext</option><option disabled="">Disabled Option</option><option data-icon="glyphicon-heart">Option with cion</option></select></div><div class="form-group"><select class="form-control selectpicker" disabled="" title="Disabled Select" selectpicker=""><option>Option 1</option><option>Option 2</option><option>Option 3</option></select></div><div class="row"><div class="col-sm-6"><div class="form-group"><select class="form-control" title="Select with Option Groups" selectpicker="" ng-model="selectpickerVm.groupedSelectedItem" ng-options="item as item.label group by item.group for item in selectpickerVm.groupedSelectItems"></select></div></div><div class="col-sm-6"><div class="form-group"><select class="form-control" title="Select with Divider" selectpicker=""><option>Group 1 - Option 1</option><option>Group 1 - Option 2</option><option data-divider="true"></option><option>Group 2 - Option 1</option><option>Group 2 - Option 2</option></select></div></div></div><div class="form-group"><select class="form-control" title="Multiple Select" multiple="" selectpicker="" ng-model="selectpickerVm.multipleSelectedItems" ng-options="item as item.label for item in selectpickerVm.standardSelectItems"><option>Option 1</option><option>Option 2</option><option>Option 3</option></select></div><div class="form-group"><select class="form-control" title="Multiple Select with Limit" multiple="" data-max-options="2" selectpicker="" ng-model="selectpickerVm.multipleSelectedItems2" ng-options="item as item.label for item in selectpickerVm.standardSelectItems"><option>Option 1</option><option>Option 2</option><option>Option 3</option></select></div><div class="row"><div class="col-sm-6"><div class="form-group"><select class="form-control" title="Primary Select" data-style="btn-primary" data-container="body" selectpicker=""><option>Option 1</option><option>Option 2</option><option>Option 3</option><option>Option 4</option></select></div><div class="form-group"><select class="form-control" title="Success Select" data-style="btn-success" data-container="body" selectpicker=""><option>Option 1</option><option>Option 2</option><option>Option 3</option><option>Option 4</option></select></div><div class="form-group"><select class="form-control" title="Warning Select" data-style="btn-warning" data-container="body" selectpicker=""><option>Option 1</option><option>Option 2</option><option>Option 3</option><option>Option 4</option></select></div></div><div class="col-sm-6"><div class="form-group"><select class="form-control" title="Info Select" data-style="btn-info" data-container="body" selectpicker=""><option>Option 1</option><option>Option 2</option><option>Option 3</option><option>Option 4</option></select></div><div class="form-group"><select class="form-control" title="Danger Select" data-style="btn-danger" data-container="body" selectpicker=""><option>Option 1</option><option>Option 2</option><option>Option 3</option><option>Option 4</option></select></div><div class="form-group"><select class="form-control" title="Inverse Select" data-style="btn-inverse" data-container="body" selectpicker=""><option>Option 1</option><option>Option 2</option><option>Option 3</option><option>Option 4</option></select></div></div></div></div>');
$templateCache.put('app/pages/form/inputs/widgets/select/select.html','<div class="ng-cloak" ng-controller="SelectpickerPanelCtrl as selectpickerVm"><div class="form-group"><ui-select ng-model="selectpickerVm.selectedItem.selected" class="btn-group bootstrap-select form-control" ng-disabled="false" append-to-body="true" search-enabled="false"><ui-select-match placeholder="Standard Select"><span>{{$select.selected.label}}</span></ui-select-match><ui-select-choices repeat="standardItem in selectpickerVm.standardSelectItems | filter: $select.search"><span ng-bind-html="standardItem.label"></span></ui-select-choices></ui-select></div><div class="form-group"><ui-select ng-model="selectpickerVm.withSearchItem.selected" class="btn-group bootstrap-select form-control" ng-disabled="false" append-to-body="true" search-enabled="true"><ui-select-match placeholder="Select With Search">{{$select.selected.label}}</ui-select-match><ui-select-choices repeat="withSearchItem in selectpickerVm.selectWithSearchItems | filter: $select.search"><span ng-bind-html="withSearchItem.label"></span></ui-select-choices></ui-select></div><div class="form-group"><ui-select ng-model="selectpickerVm.disableItem.selected" class="btn-group bootstrap-select form-control" ng-disabled="true" append-to-body="true" search-enabled="false"><ui-select-match placeholder="Disabled Selection"><span>{{$select.selected.label}}</span></ui-select-match><ui-select-choices repeat="disableItem in selectpickerVm.disableItems | filter: $select.search"><span ng-bind-html="disableItem.label"></span></ui-select-choices></ui-select></div><div class="form-group"><ui-select ng-model="selectpickerVm.groupedItems.selected" class="btn-group bootstrap-select form-control" ng-disabled="false" append-to-body="true" search-enabled="true"><ui-select-match placeholder="Select With Option Groups">{{$select.selected.label}}</ui-select-match><ui-select-choices repeat="groupedItems in selectpickerVm.groupedSelectItems | groupSelectpickerOptions: {label: $select.search}" group-by="\'group\'"><span ng-bind-html="groupedItems.label | highlight: $select.search"></span></ui-select-choices></ui-select></div><div class="form-group"><ui-select ng-model="selectpickerVm.groupedByItems.selected" class="btn-group bootstrap-select form-control" ng-disabled="false" append-to-body="true" search-enabled="true"><ui-select-match placeholder="Select With Option Groups Function">{{$select.selected.name}}</ui-select-match><ui-select-choices repeat="groupedByItems in selectpickerVm.groupedBySelectItems | filter: $select.search" group-by="selectpickerVm.someGroupFn"><span ng-bind-html="groupedByItems.name | highlight: $select.search"></span></ui-select-choices></ui-select></div><div class="form-group"><ui-select multiple="" ng-model="selectpickerVm.multipleItem.selected" ng-disabled="false" search-enabled="true" append-to-body="true" class="form-control"><ui-select-match placeholder="Multiple Select">{{$item.label}}</ui-select-match><ui-select-choices repeat="multipleItem in selectpickerVm.multipleSelectItems | filter: $select.search">{{multipleItem.label}}</ui-select-choices></ui-select></div><div class="form-group"><div class="input-group"><ui-select multiple="" ng-model="selectpickerVm.withDeleteItem.selected" ng-disabled="false" search-enabled="true" append-to-body="true" class="form-control form-control"><ui-select-match placeholder="Select With Clear Button">{{$item.label}}</ui-select-match><ui-select-choices repeat="withDeleteItem in selectpickerVm.withDeleteSelectItems | filter: $select.search">{{withDeleteItem.label}}</ui-select-choices></ui-select><span class="input-group-btn"><button type="button" ng-click="selectpickerVm.withDeleteItem.selected = undefined" class="btn btn-danger"><span class="glyphicon glyphicon-trash"></span></button></span></div></div></div>');
$templateCache.put('app/pages/form/inputs/widgets/oldSwitches/switch.html','<div ng-controller="OldSwitchPanelCtrl as switchPanelVm" class="switches clearfix"><switch color="primary" ng-model="switchPanelVm.switcherValues.primary"></switch><switch color="warning" ng-model="switchPanelVm.switcherValues.warning"></switch><switch color="danger" ng-model="switchPanelVm.switcherValues.danger"></switch><switch color="info" ng-model="switchPanelVm.switcherValues.info"></switch><switch color="success" ng-model="switchPanelVm.switcherValues.success"></switch></div>');
$templateCache.put('app/pages/form/inputs/widgets/switches/switch.html','<div ng-controller="SwitchDemoPanelCtrl as vm"><ba-switcher switcher-style="primary" switcher-value="vm.switches.s1"></ba-switcher><ba-switcher switcher-style="success" switcher-value="vm.switches.s2"></ba-switcher><ba-switcher switcher-style="warning" switcher-value="vm.switches.s3"></ba-switcher><ba-switcher switcher-style="danger" switcher-value="vm.switches.s4"></ba-switcher><ba-switcher switcher-style="info" switcher-value="vm.switches.s5"></ba-switcher></div>');
$templateCache.put('app/pages/form/inputs/widgets/tagsInput/tagsInput.html','<div class="form-group"><div class="form-group"><input type="text" tag-input="primary" value="Amsterdam,Washington,Sydney,Beijing,Cairo" data-role="tagsinput" placeholder="Add Tag"></div><div class="form-group"><input type="text" tag-input="warning" value="Minsk,Prague,Vilnius,Warsaw" data-role="tagsinput" placeholder="Add Tag"></div><div class="form-group"><input type="text" tag-input="danger" value="London,Berlin,Paris,Rome,Munich" data-role="tagsinput" placeholder="Add Tag"></div></div>');}]);
//# sourceMappingURL=../maps/scripts/app.js.map
