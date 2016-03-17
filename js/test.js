

(function(){

    new DPCharts({
        renderTo: "line",
        chartType: "line",
        xCategories: ['一月', '二月', '三月', '四月', '五月', '六月'],
        yAxisTitle: "降雨量 (mm)",
        series: [{
            name: 'Tokyo',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0]
        }, {
            name: 'New York',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5]

        }, {
            name: 'London',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3]

        }, {
            name: 'Berlin',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5]
        }]
    });

    new DPCharts({
        renderTo: "column",
        chartType: "column",
        xCategories: ['一月', '二月', '三月', '四月', '五月', '六月'],
        yAxisTitle: "降雨量 (mm)",
        title: "上半年降雨将统计",
        labels: {
            enableY: false
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

    new DPCharts({
        renderTo: "pie",
        chartType: "pie",
        title: '2015年1月至5月浏览器市场占有率',
        series: [{
            name: '品牌',
            //colorByPoint: true,
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

    new DPCharts({
        renderTo: "combine",
        chartType: "combine",
        title: '复合型图表',
        subtitle: '包含线性、柱状和饼状图',
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
            name: 'Total consumption',
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

}());