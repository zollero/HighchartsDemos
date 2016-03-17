// Init page settings
var app = angular.module("HighchartDemoApp", ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "./views/home.html",
        controller: 'HomeController'
    }).when("/line", {
        templateUrl: "./views/line-list.html",
		controller: "LineController"
    }).when("/pie", {
        templateUrl: "./views/pie-list.html",
		controller: "PieController"
    }).when("/column", {
        templateUrl: "./views/column-list.html",
		controller: "ColumnController"
    }).when("/combine", {
        templateUrl: "./views/combine-list.html",
		controller: "CombineController"
    }).otherwise({
        redirectTo: "/"
    });
}]).controller("NavController", ["$scope", "$location", function($scope, $location) {
    //Init navIndex on route
    $scope.navIndex = $location.path() === "" ? "/" : $location.path();
    $scope.navs = [{
        name: "Home",
        url: "/"
    }, {
        name: "线性",
        url: "/line"
    }, {
        name: "饼状",
        url: "/pie"
    }, {
        name: "柱状",
        url: "/column"
    }, {
        name: "复合",
        url: "/combine"
    }];
    $scope.changeLocation = function(url) {
        $scope.navIndex = url;
        $location.url(url);
    };
}]).controller("HomeController", ["$scope", function($scope) {
    $scope.items = [{
        title: "介绍",
        content: [
			"DPCharts 组件，是在Highcharts的基础上，对Highcharts公共属性进行封装而成。它保留了Highcharts生成图表的灵活性，并减少了生成图表时的繁琐代码操作。",
			"Highcharts 是一个用纯 JavaScript 编写的图标库，能够狠简单便捷的在 web应用程序或移动端web程序添加有交互性的图表。Highcharts 支持的图表类型有线性图、柱状图、饼状图、散装图和综合图表。另外，Highcharts有很好的兼容性，能够完美支持当前大多数浏览器。"
		]
    }];
}]).controller("LineController", ["$scope", function($scope) {
	//线性图
	new DPCharts({
		renderTo: "line-chart",
		chartType: "line",
		xCategories: ['一月', '二月', '三月', '四月', '五月', '六月'],
		title: "降雨量 (mm)",
		series: [{
			name: 'Tokyo',
			data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0]
		}, {
			name: 'New York',
			data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5]

		}]
	});
}]).controller("ColumnController", ["$scope", function($scope) {
	//柱状图
	new DPCharts({
		renderTo: "column-chart",
		chartType: "column",
		xCategories: ['一月', '二月', '三月', '四月', '五月', '六月'],
		yAxisTitle: "降雨量 (mm)",
		xAxisTitle: "上半年月份",
		title: "上半年降雨将统计",
		subtitle: "四个城市降雨量数据",
		legend: {enabled: true},
		labels: {
			enableY: true
		},
		series: [{
			name: '北京',
			data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0]
		}, {
			name: '广州',
			data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5]

		}, {
			name: '上海',
			data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3]

		}, {
			name: '杭州',
			data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5]
		}]
	});
}]).controller("PieController", ["$scope", function($scope) {
	//饼状图
	new DPCharts({
		renderTo: "pie-chart",
		chartType: "pie",
		title: '2015年1月至5月浏览器市场占有率',
		series: [{
			name: '品牌',
			data: [{
				name: 'Microsoft Internet Explorer',
				y: 56.33
			}, {
				name: 'Chrome',
				y: 24.03
			}, {
				name: 'Firefox',
				y: 10.38
			}, {
				name: 'Safari',
				y: 4.77
			}, {
				name: 'Opera',
				y: 0.91
			}, {
				name: 'Proprietary or Undetectable',
				y: 0.2
			}]
		}]
	});
}]).controller("CombineController", ["$scope", function($scope) {
	//饼状图
	new DPCharts({
		renderTo: "combine-chart",
		chartType: "combine",
		title: '复合型图表',
		subtitle: '包含线性、柱状和饼状图',
		labels: {
			enableY: true
		},
		series: [{
			type: 'column',
			name: 'Jane',
			data: [3, 2, 1, 3, 4]
		}, {
			type: 'column',
			name: 'John',
			data: [2, 3, 5, 7, 6]
		}, {
			type: 'column',
			name: 'Joe',
			data: [4, 3, 3, 9, 0]
		}, {
			type: 'spline',
			name: 'Average',
			data: [3, 2.67, 3, 6.33, 3.33]
		}, {
			type: 'pie',
			name: '总量',
			data: [{
				name: 'Jane',
				y: 13
			}, {
				name: 'John',
				y: 23
			}, {
				name: 'Joe',
				y: 19
			}],
			center: [80, 80],
			size: 100
		}]
	});
}]);

