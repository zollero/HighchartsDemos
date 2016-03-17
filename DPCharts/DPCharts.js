/**
 * DPCharts: 用于德邦移动平台
 * 使用Highcharts封装，抽出公共方法，便于使用和调用
 * 语法使用原生JavaScript（ES5)
 * @param   options   自定义参数
 * @author  277651
 * @date    2016.03.15
 * @version 0.0.1
 */


var DPCharts = (function(window, document) {
    DPCharts = function(options) {

        "use strict";

        //检查依赖组件是否已引用
        this.checkSettings(options);

        //设置默认属性
        var defaults = {
            //图表背景色默认为白色，宽度和高度默认不设置
            chart: { chartBgColor: "#fff", width: "", height: ""},
            //图表容器ID值，默认为body元素
            renderTo: document.querySelector("body"),
            //图表类型：line(线性，默认值）,column(柱状), pie(饼状), combine(复合型)
            chartType: "line",
            //图表主标题
            title: "",
            //图表主标题样式
            titleStyle: {fontSize: "16px", "fontFamily": 'Microsoft YaHei,arial',color:'#606060'},
            //图表副标题
            subtitle: "",
            //图表副标题样式
            subtitleStyle: {fontSize: "14px", "fontFamily": 'Microsoft YaHei,arial',color:'#606060'},
            //x坐标轴标题，显示在x轴线下方居中
            xAxisTitle: "",
            //y坐标轴标题，显示在y轴线左边垂直居中
            yAxisTitle: "",
            //是否显示x、y轴坐标轴，默认不显示y轴
            labels: {enableX: true, enableY: false},
            //类别轴，显示在x轴上，每个元素为一个类别
            xCategories: [],
            //数据集合
            series: [],
            //是否显示导出按钮（即导出为图片或文件等），默认不显示
            exportButton: false,
            //图例。默认不显示，若图表类型为pie(饼状)或combine(复合型)，则会自动显示图例
            legend: {enabled: false, layout: "horizontal", floating: false, backgroundColor: "#fff", x: 0, y: 0},
            //图表序列（Series）的默认颜色数组，即图表的第 n 个序列的颜色是该数组的第 n 个值。
            //当序列的数量超过颜色数组的长度，后续的序列将会重复调用该数组里的值
            colors: ['#3493cd', '#f6b446', '#99CC33', '#FF6666', '#993366', '#009933', '#FF9655',
                '#FFF263', '#6AF9C4'],
            //x、y轴标题样式
            axisTitleStyle: {fontSize: "14px", "fontFamily": 'Microsoft YaHei,arial',color:'#606060'},
            //x、y轴轴线标线样式
            labelsStyle: {fontSize: "12px", "fontFamily": 'Microsoft YaHei,arial',color:'#606060'}
        };

        //深度复制，将自定义属性和默认属性合并到一起
        options = this.extendObject(true, defaults, options);

        //处理数据
        this.init({
            chartType: this.getChartType(options),
            title: options.title.toString(),
            subtitle: options.subtitle.toString(),
            xAxisTitle: options.xAxisTitle.toString(),
            renderTo: options.renderTo,
            yAxisTitle: options.yAxisTitle,
            colors: options.colors,
            xCategories: options.xCategories,
            series: options.series,
            exportBtn: options.exportButton,
            legend: options.legend,
            xAxisCategoryVal: [],
            xAxisSettingArr: {},
            yAxisSettingArr: [],
            labels: options.labels,
            width: options.chart.width === "" ? null : options.chart.width,
            height: options.chart.height === "" ? null : options.chart.height,
            chartBgColor: options.chart.chartBgColor,
            titleStyle: options.titleStyle,
            subtitleStyle: options.subtitleStyle,
            axisTitleStyle: options.axisTitleStyle,
            labelsStyle: options.labelsStyle
        });
    };

    //DPCharts原型
    DPCharts.prototype = {
        constructor: DPCharts,
        version: "0.0.1",
        checkSettings: function() {
            //该插件依赖于Highcharts，如果没有在该插件之前引用Highcharts，则抛出异常提示
            if(typeof Highcharts !== "object") {
                throw Error("Can't find Highcharts plugin!");
            }
            if(typeof arguments[0] !== "object") {
                throw Error("Need 'options' config.");
            }
        },
        /**
         * 初始化图标参数
         * @param options
         */
        init: function(options) {
            this.getChartSettings(options);
            this.createChart(options);
        },
        /**
         * 处理初始化的x, y轴设置参数
         * @param options
         */
        getChartSettings: function(options) {
            var xAxisCategories = options.xAxisCategoryVal,
                xCategories = options.xCategories,
                yAxisTitle = options.yAxisTitle;

            //X 轴设置
            for (var i = 0; i< xCategories.length; i++) {
                xAxisCategories.push(xCategories[i].toString());
            }
            //x轴默认设置
            options.xAxisSettingArr = {
                categories: xAxisCategories,
                title: {
                    text: options.xAxisTitle,
                    style: options.axisTitleStyle
                },
                labels: {
                    enabled: options.labels.enableX,
                    align: "center",
                    style: options.labelsStyle,
                    rotation: 0
                },
                tickInterval: 1,
                lineColor: "#808285",
                lineWidth:2,
                gridLineWidth: 1,
                gridLineColor: "#ddd",
                gridLineDashStyle: "ShortDash",
                tickColor: "#ffffff",
                crosshair: true //显示点击后的阴影（column有用）
            };

            //y轴默认设置
            var temp = {
                title: {
                    text: yAxisTitle,
                    style: options.axisTitleStyle
                },
                labels: {
                    enabled: options.labels.enableY,
                    style: options.labelsStyle
                },
                startOnTick: false,
                endOnTick: true,
                minPadding: 0.1,
                maxPadding: 0.1,
                gridLineColor: "#ddd",
                gridLineDashStyle: "ShortDash",
                tickmarkPlacement: 'on',
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            };
            temp.opposite = false;
            options.yAxisSettingArr.push(temp);

            //初始化图例设置，只有在Pie时才显示图例
            if (options.chartType === "pie" || options.chartType === "combine") {
                options.legend.enabled = true;
            }
        },
        getChartType: function(options) {
            var type = options.chartType;
            //图表的默认类型是线性图表
            if (typeof type === "string" && type.length > 0) {
                return type.toLowerCase();
            } else {
                return "line";
            }
        },
        /**
         * 生成一个图表
         * @param options
         */
        createChart: function(options) {
            new Highcharts.Chart({
                chart: {
                    renderTo: options.renderTo,
                    type: options.chartType,
                    width: options.width,
                    height: options.height,
                    backgroundColor: options.chartBgColor
                },
                colors: options.colors,
                title: {
                    text: options.title,
                    style: options.titleStyle
                },
                subtitle: {
                    text: options.subtitle,
                    style: options.subtitleStyle
                },
                tooltip: {  //当类型使用 pie 或 combine 时，点击时有提示框
                    enabled: options.chartType === "pie" || options.chartType === "combine",
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                xAxis: options.xAxisSettingArr,
                yAxis: options.yAxisSettingArr,
                legend: options.legend,
                exporting: {
                    enabled: false
                },
                credits: {
                    enabled: false
                },
                plotOptions: {
                    line: {
                        allowPointSelect: true,
                        dataLabels: {
                            enabled: true
                        },
                        enableMouseTracking: false
                    },
                    pie: {
                        allowPointSelect: true,
                        dataLabels: {
                            enabled: false
                        },
                        showInLegend: true
                    },
                    column: {
                        stacking: options.chartType === "stack"? "normal" : ""
                    },
                    scatter: {
                        maker: {
                            symbol: "circle"
                        }
                    }
                },
                series: options.series
            });

        },
        /**
         * 判断变量的类型（jquery源码）
         * @param obj
         * @returns {*}
         */
        type: function(obj) {
            var class2type = {};
            if ( obj == null ) {
                return obj + "";
            }
            // Support: Android<4.0, iOS<6 (functionish RegExp)
            return typeof obj === "object" || typeof obj === "function" ?
            class2type[ toString.call( obj ) ] || "object" :
                typeof obj;
        },
        /**
         * 是否是简单对象
         * @param obj
         * @returns {boolean}
         */
        isPlainObject: function( obj ) {
            var hasOwn = ({}).hasOwnProperty;

            if ( this.type( obj ) !== "object" || obj.nodeType || this.isWindow( obj ) ) {
                return false;
            }
            if ( obj.constructor &&
                !hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
                return false;
            }
            return true;
        },
        isWindow: function( obj ) {
            return obj != null && obj === obj.window;
        },
        /**
         * 扩展和复制属性（jquery源码）
         * @returns {*|{}}
         */
        extendObject: function() {
            var options, name, src, copy, copyIsArray, clone,
                target = arguments[ 0 ] || {},
                i = 1,
                length = arguments.length,
                deep = false;

            // 第一个参数是boolean且为true时，表示要深度复制
            if ( typeof target === "boolean" ) {
                deep = target;

                target = arguments[ i ] || {};
                i++;
            }
            // Handle case when target is a string or something (possible in deep copy)
            if ( typeof target !== "object" && this.type(target) !== "function" ) {
                target = {};
            }
            // Extend jQuery itself if only one argument is passed
            if ( i === length ) {
                target = this;
                i--;
            }

            for ( ; i < length; i++ ) {
                // Only deal with non-null/undefined values
                if ( ( options = arguments[ i ] ) != null ) {
                    // Extend the base object
                    for ( name in options ) {
                        src = target[ name ];
                        copy = options[ name ];
                        // Prevent never-ending loop
                        if ( target === copy ) {
                            continue;
                        }
                        // Recurse if we're merging plain objects or arrays
                        if ( deep && copy && ( this.isPlainObject( copy ) ||
                            ( copyIsArray = Array.isArray( copy ) ) ) ) {
                            if ( copyIsArray ) {
                                copyIsArray = false;
                                clone = src && Array.isArray( src ) ? src : [];
                            } else {
                                clone = src && this.isPlainObject( src ) ? src : {};
                            }
                            // Never move original objects, clone them
                            target[ name ] = this.extendObject( deep, clone, copy );
                            // Don't bring in undefined values
                        } else if ( copy !== undefined ) {
                            target[ name ] = copy;
                        }
                    }
                }
            }
            // Return the modified object
            return target;
        }
    };

    return DPCharts;
})(window, document);

