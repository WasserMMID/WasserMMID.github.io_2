$(function () {
    // Create the chart
    Highcharts.chart('suesswasser', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Süßwasserressourcen'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'in m3'
            }

        },
     legend: {
           enabled: false
            },
        plotOptions: {
column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:14px;color:#dedede"></span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0;font-size:12px;"> </td>' +
                '<td style="padding:0;font-size:12px">{point.y:.1f}</td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },

        series: [{
            name: 'Länder',
            colorByPoint: true,
            data: [{
                name: 'Deutschland',
                y: 188
            }, {
                name: 'Belgien',
                y: 19.9
            }, {
                name: 'Malta',
                y: 0.1
            }],
        }],


            }

    );
});
