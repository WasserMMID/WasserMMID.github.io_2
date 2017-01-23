$(function () {
    var item = ["Tschechische Republik",16,371,1279,47,7.6,42.9,79.8,16];


    var landername = item[0];
    var suesswasserressourcen = item[1];
    var grundwasserentnahme = item[2];
    var oberflaechenwasserentnahme = item[3];
    var verbrauch_PrivateHaushalte = item[4];
    var verbrauch_Landwirtschaft = item[5];
    var verbrauch_Industrie = item[6];
    var klaeranlagen = item[7];
    var abfluss = item[8];

    $('.insel_name').html(landername);


    //übersicht 4 7
    $('#verbrauch_pro_person').html( verbrauch_PrivateHaushalte +' m &sup3');
  	$('#klaranlage_person').html( klaeranlagen +' %');

    //resource_übersicht 1 8
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
            // data: [19.9,15.6]
            data: [suesswasserressourcen,abfluss]
        }]
    });

    //klare
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
                name: landername,
                y: klaeranlagen
            }, {
                name: 'Rumänien',
                y: 35.5
            }],
        }],
      }
    );

    //Entnahme
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
            data: [grundwasserentnahme,oberflaechenwasserentnahme,verbrauch_Landwirtschaft,verbrauch_Industrie]
        }]
    });

    // verbrauch
    Highcharts.chart('verbrauch', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Verbrauch'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'm3/pro Einwohner'
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
                name: 'Irland',
                y: 144
            }, {
                name: landername,
                y: verbrauch_PrivateHaushalte
            }, {
                name: 'Belgien',
                y: 26
            }],
        }],
      }
    );

    //Industrie_1
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
                name: landername,
                y: verbrauch_Landwirtschaft
            }, {
                name: 'Kroatien',
                y: 0
            }],
        }],
    });

    //Industrie_2
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
                name: landername,
                y: verbrauch_Industrie
            }, {
                name: 'Malta',
                y: 2.1
            }],
        }],
      }
    );

    //entnamhe
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
                name: landername,
                y: grundwasserentnahme
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
                name: landername,
                y: oberflaechenwasserentnahme
            }, {
                name: 'Malta',
                y: 0
            }],
        }],
      }
    );



    Highcharts.chart('abfluss', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Abfluss'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'in Mrd. m3'
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
                name: 'Schweden',
                y: 186.2
            }, {
                name: landername,
                y: abfluss
            }, {
                name: 'Malta',
                y: 0.1
            }],
        }],
      }
    );

    // suesswasser
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
                name: landername,
                y: suesswasserressourcen
            }, {
                name: 'Malta',
                y: 0.1
            }],
        }],
      }
    );

});
