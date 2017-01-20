$(function () {
    // Create the chart
    Highcharts.chart('wirtschaft_1', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Verbrauch Landwirtschaft'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'in Mio. m3'
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
                name: 'Polen',
                y: 145.2
            }, {
                name: 'Belgien',
                y: 9
            }, {
                name: 'Kroatien',
                y: 0
            }],
        }],


            });
                Highcharts.chart('wirtschaft_2', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Verbrauch Industrie'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'in Mio. m3'
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
                name: 'Spanien',
                y: 361.9
            }, {
                name: 'Belgien',
                y: 103
            }, {
                name: 'Malta',
                y: 2.1
            }],
        }],


            }

    );
});
