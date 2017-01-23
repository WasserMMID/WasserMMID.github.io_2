$(function () {
    // Create the chart
    Highcharts.chart('klare', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Kläranlagenanschlüsse'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'in % der Bevölkerung'
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
                name: 'Luxemburg',
                y: 96.3
            }, {
                name: 'Belgien',
                y: 84
            }, {
                name: 'Rumänien',
                y: 35.5
            }],
        }],


            }

    );
});
