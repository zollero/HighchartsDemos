

angular.module("main.homeCtrl", ["ionic"])
    .controller("HomeCtrl", ["$scope", "$location", function($scope, $location) {
        //$scope.moduleTitle = "Home";
        //console.log($scope.name);
        //console.log($location);

        $scope.items = [
            {
                title: "介绍",
                content: ["Highcharts 是一个用纯JavaScript编写的一个图表库， 能够很简单便捷的在web网站或是web应用程序添加有交互性的图表。HighCharts支持的图表类型有曲线图、区域图、柱状图、饼状图、散状点图和综合图表。另外HighCharts还有很好的兼容性，能够完美支持当前大多数浏览器。"]
            },
            {
                title: "特点",
                content: [
                    "1. 兼容性：HighCharts采用纯JavaScript编写，兼容当今大部分的浏览器，包括Safari、IE和火狐等等；",
                    "2. 图表类型：HighCharts支持图表类型，包括曲线图、区域图、柱状图、饼状图、散状点图和综合图表等等，可以满足各种需求。",
                    "3. 不受语言约束：HighCharts可以在大多数的WEB开发中使用，并且对个人用户免费，支持ASP，PHP，JAVA，.NET等多种语言中使用。",
                    "4. 放大功能：HighCharts可以大量数据集中显示，并且可以放大某一部分的图形，将图表的精度增大，进行详细的显示，可以选择横向或者纵向放大",
                    "5. 外部数据：从服务器载入动态数据。",
                    "6. 文字旋转：支持在任意方向的标签旋转。"
                ]
            }
        ];
    }]);