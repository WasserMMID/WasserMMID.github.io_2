$(function () {
    // Create the chart
    Highcharts.chart('entnahme_1', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Grundwasserentnahme'
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
                y: 6884
            }, {
                name: 'Belgien',
                y: 602
            }, {
                name: 'Luxemburg',
                y: 25
            }],
        }],


            });
                Highcharts.chart('entnahme_2', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Oberflächenwasserentnahme'
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
                y: 30465
            }, {
                name: 'Belgien',
                y: 4480
            }, {
                name: 'Malta',
                y: 0
            }],
        }],


            }

    );
});
