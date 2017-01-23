$(function () {
    Highcharts.chart('uebersicht_resourcen', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Ressourcen und Abfluss'
        },
        subtitle: {
            text: null
        },
        xAxis: {
            categories: ['Süßwasserressourcen', 'Abfluss'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: null,
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' Milliarden m³'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: false
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -250,
            y: 250,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        colors: ['#A2C9DD'],
        series: [{
            name: 'Milliarden m³',
            data: [19.9,15.6]
        }]
    });
});
