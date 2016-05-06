(function makeStatisticsChart($) {
    var diagramStatsData = [
        {
            "category": "Audio",
            "column-1": 55
        },
        {
            "category": "Video",
            "column-1": 23
        },
        {
            "category": "Photo",
            "column-1": 17
        },
        {
            "category": "Other",
            "column-1": 5
        }
    ];
    var labelsStatsData = ['2, 435 files', '47Gb'];

    var monthReportData = [
        {
            "category": "Audio",
            "column-1": 351
        },
        {
            "category": "Video",
            "column-1": 345
        },
        {
            "category": "Photo",
            "column-1": 117
        },
        {
            "category": "Other",
            "column-1": 500
        }
    ];
    var labelsReportData = ['102, 435 files', '512Gb'];

    var chartColors = [
        "#4cae7a",
        "#e35d3a",
        "#e9c65d",
        "#f2ebe5"
    ];

    var chartColorsMapClass = [
        'widgetLargestSize__itemLed_green',
        'widgetLargestSize__itemLed_red',
        'widgetLargestSize__itemLed_yellow',
        'widgetLargestSize__itemLed_gray'
    ];

    $(document).ready(function () {
        $('.widgetTabs__item').click(function (e, i) {
            var self = $(this);

            $('.widgetTabs__item').removeClass('widgetTabs__item_active');
            self.addClass('widgetTabs__item_active');

            if (self.hasClass('js-diagram_stats')){
                $('.widgetChart')
                    .removeClass('widgetChart_rightActive')
                    .addClass('widgetChart_leftActive');
                makeChart(diagramStatsData, labelsStatsData);
            } else if (self.hasClass('js-month_report')){
                $('.widgetChart')
                    .removeClass('widgetChart_leftActive')
                    .addClass('widgetChart_rightActive');
                makeChart(monthReportData, labelsReportData);}
            quickHack();
        });

        $('.widgetChart')
            .removeClass('widgetChart_rightActive')
            .addClass('widgetChart_leftActive');
        makeChart(diagramStatsData, labelsStatsData);
    });

    function quickHack() {
        try {
            var chartElement = document.getElementById('chartdiv');
            chartElement.getElementsByTagName('a')[0].remove()
        } catch (err) {

        }
    }

    function makeChart(data, labels) {
        AmCharts.makeChart("chartdiv", {
                "type": "pie",
                "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[percents]]%</b></span>",
                "innerRadius": 63,
                "pullOutRadius": 1,
                "startRadius": "200%",
                "colors": chartColors,
                "labelsEnabled": false,
                "marginBottom": 32,
                "pullOutDuration": .3,
                "pullOutEffect": "elastic",
                "pullOutOnlyOne": true,
                "sequencedAnimation": false,
                "titleField": "category",
                "valueField": "column-1",
                "accessible": false,
                "titles": [],
                "allLabels": [
                    {
                        "align": "center",
                        "bold": true,
                        "color": "#8d7e70",
                        "id": "Label-1",
                        "size": 28,
                        "text": labels[1],
                        "y": "42%"
                    },
                    {
                        "align": "center",
                        "bold": true,
                        "color": "#e35d3a",
                        "id": "Label-2",
                        "size": 12,
                        "text": labels[0],
                        "word-spacing": "1px",
                        "y": "37%"
                    }
                ],
                "balloon": {},
                "legend": {
                    "enabled": false,
                    "align": "center",
                    "markerType": "circle",
                    "valueWidth": 49
                },
                "dataProvider": data
            }
        );

        AmCharts.ready(function () {
            quickHack();
        });

        var total = 0;
        for (var i = 0; i < data.length; i++){
            total += data[i]['column-1'];
        }

        var tempData = data.slice(0);
        for (var j = 0; j < 3; j++){
            var tempMax = _.max(tempData, function(stooge){ return stooge['column-1']; });
            $('.widgetLargestSize__itemLed:eq(' + j + ')')
                .removeClass()
                .addClass('widgetLargestSize__itemLed')
                .addClass(chartColorsMapClass[_.indexOf(data, tempMax)]);
            $('.widgetLargestSize__itemTitle:eq(' + j + ')').text(tempMax.category);
            $('.widgetLargestSize__itemValue:eq(' + j + ')').text(Math.round(tempMax['column-1'] / total * 100) + '%');
            var tempIndex = _.indexOf(tempData, tempMax);
            tempData.splice(tempIndex, 1);
        }
    }
})(jQuery);