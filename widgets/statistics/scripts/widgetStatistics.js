(function makeStatisticsChart() {
    AmCharts.makeChart("chartdiv", {
            "type": "pie",
            "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[percents]]%</b></span>",
            "innerRadius": 63,
            "pullOutRadius": 1,
            "startRadius": "200%",
            "colors": [
                "#4cae7a",
                "#e35d3a",
                "#e9c65d",
                "#f2ebe5"
            ],
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
                    "text": "47Gb",
                    "y": "42%"
                },
                {
                    "align": "center",
                    "bold": true,
                    "color": "#e35d3a",
                    "id": "Label-2",
                    "size": 12,
                    "text": "2, 435 files",
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
            "dataProvider": [
                {
                    "category": "Audio",
                    "column-1": "55"
                },
                {
                    "category": "Video",
                    "column-1": "23"
                },
                {
                    "category": "Photo",
                    "column-1": "17"
                },
                {
                    "category": "Other",
                    "column-1": "5"
                }
            ]
        }
    );
    function quickHack() {
        try {
            var chartElement = document.getElementById('chartdiv');
            chartElement.getElementsByTagName('a')[0].remove()
        } catch (err) {

        }
    }

    AmCharts.ready(function () {
        quickHack();
    });
})();