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
    }).when("/complex", {
        templateUrl: "./views/complex-list.html",
        controller: "ComplexController"
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
        url: "/complex"
    }];
    $scope.changeLocation = function(url) {
        $scope.navIndex = url;
        $location.url(url);
    }
}]).controller("HomeController", ["$scope", function($scope) {
    $scope.items = [{
        title: "介绍",
        content: ["Highcharts 是一个用纯JavaScript编写的一个图表库， 能够很简单便捷的在web网站或是web应用程序添加有交互性的图表。HighCharts支持的图表类型有曲线图、区域图、柱状图、饼状图、散状点图和综合图表。另外HighCharts还有很好的兼容性，能够完美支持当前大多数浏览器。"]
    }, {
        title: "特点",
        content: [
            "1. 兼容性：HighCharts采用纯JavaScript编写，兼容当今大部分的浏览器，包括Safari、IE和火狐等等；",
            "2. 图表类型：HighCharts支持图表类型，包括曲线图、区域图、柱状图、饼状图、散状点图和综合图表等等，可以满足各种需求。",
            "3. 不受语言约束：HighCharts可以在大多数的WEB开发中使用，并且对个人用户免费，支持ASP，PHP，JAVA，.NET等多种语言中使用。",
            "4. 放大功能：HighCharts可以大量数据集中显示，并且可以放大某一部分的图形，将图表的精度增大，进行详细的显示，可以选择横向或者纵向放大",
            "5. 外部数据：从服务器载入动态数据。",
            "6. 文字旋转：支持在任意方向的标签旋转。"
        ]
    }];
}]).controller("LineController", ["$scope", function($scope) {

}]).controller("PieController", ["$scope", function($scope) {
    //$scope.navs = ["Home", "线性", "饼状", "柱状", "复合"];
}]).controller("ColumnController", ["$scope", function($scope) {
    //$scope.navs = ["Home", "线性", "饼状", "柱状", "复合"];
}]).controller("ComplexController", ["$scope", function($scope) {
    //$scope.navs = ["Home", "线性", "饼状", "柱状", "复合"];
}]);

//线性图标
app.directive("lineChart", function() {
    return function(scope, element, attrs) {
        // 线性图标调用
        $(element).highcharts({
            chart: {
                type: 'line'
            },
            title: {
                text: 'Monthly Average Temperature'
            },
            subtitle: {
                text: 'Source: WorldClimate.com'
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: 'Temperature (°C)'
                }
            },
            tooltip: {
                enabled: false,
                formatter: function() {
                    return '<b>'+ this.series.name +'</b><br/>'+this.x +': '+ this.y +'°C';
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: false
                }
            },
            series: [{
                name: 'Tokyo',
                data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
            }, {
                name: 'London',
                data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
            }]
        });
    }
});

//饼图
app.directive("pieChart", function() {
	return function(scope, element, attrs) {
		$(element).highcharts({
			chart: {
//	            plotBackgroundColor: null,
//	            plotBorderWidth: null,
//	            plotShadow: false
	        },
	        title: {
	            text: 'Browser market shares at a specific website, 2010'
	        },
	        tooltip: {
	    	    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
	        },
//	        plotOptions: {
//	            pie: {
//	                allowPointSelect: true,
//	                cursor: 'pointer',
//	                dataLabels: {
//	                    enabled: true,
//	                    color: '#000000',
//	                    connectorColor: '#000000',
//	                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
//	                }
//	            }
//	        },
			plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
	        series: [{
	            type: 'pie',
	            name: 'Browser share',
	            data: [
	                ['Firefox',   45.0],
	                ['IE',       26.8],
	                {
	                    name: 'Chrome',
	                    y: 12.8,
	                    sliced: true,
	                    selected: true
	                },
	                ['Safari',    8.5],
	                ['Opera',     6.2],
	                ['Others',   0.7]
	            ]
	        }]
		})
	}
});

