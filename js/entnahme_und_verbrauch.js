$(function () {
    Highcharts.chart('entnahme_und_verbrauch', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Entnahme und Verbrauch'
        },
        subtitle: {
            text: null
        },
        xAxis: {
            categories: ['Grundwasserentnahme', 'Oberflaechenwasserentnahme', 'Verbrauch: Landwirtschaft', 'Verbrauch: Industrie'],
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
            valueSuffix: ' Millionen m³'
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
            x: -450,
            y: 250,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Millionen m³',
            data: [602,4480,9,103]
        }]
    });
});
