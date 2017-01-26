$(function () {
    var item = ["Rumaenien",42.3,581,5837,49,1.4,272.3,35.5,17.9];


    var landername = item[0];
    var suesswasserressourcen = item[1];
    var grundwasserentnahme = item[2];
    var oberflaechenwasserentnahme = item[3];
    var verbrauch_PrivateHaushalte = item[4];
    var verbrauch_Landwirtschaft = item[5];
    var verbrauch_Industrie = item[6];
    var klaeranlagen = item[7];
    var abfluss = item[8];

    $('.diagramm_no').hide();
    $('.diagramm_no_s_1').hide();
    $('.diagramm_no_s_2').hide();
    $('.drop_no_1').hide();
    $('.drop_no_2').hide();


    if (suesswasserressourcen ==null) {
      $('#suesswasser + .diagramm_no').show();

    }

    if (grundwasserentnahme ==null) {
      $('#entnahme_1 + .diagramm_no_s_1').show();
    }

    if (oberflaechenwasserentnahme ==null) {
      $('#entnahme_2 + .diagramm_no_s_2').show();
    }

    if (verbrauch_PrivateHaushalte ==null) {
      $('#verbrauch + .diagramm_no').show();
      $('#verbrauch_pro_person + .drop_no_1').show();
    }

    if (verbrauch_Landwirtschaft ==null) {
      $('#wirtschaft_1 + .diagramm_no_s_1').show();
    }

    if (verbrauch_Industrie ==null) {
      $('#wirtschaft_2 + .diagramm_no_s_2').show();
    }

    if (abfluss ==null) {
      $('#abfluss + .diagramm_no').show();

    }

    if (klaeranlagen == null) {
      $('#klare + .diagramm_no').show();
      $('#klaranlage_person + .drop_no_2').show();

    }

    if (!Highcharts.theme) {
        Highcharts.setOptions({
            chart: {
                backgroundColor: '#FCFCFC'
            },
            colors: ['#5d81ac', '#80bee5', '#b1d4f9'],
            title: {
                style: {
                    color: 'black'
                }
            },
            tooltip: {
                style: {
                    color: '#999999'
                }
            }
        });
    }

    $('.insel_name').html(landername);


    //übersicht 4 7
    $('#verbrauch_pro_person').html( verbrauch_PrivateHaushalte +' m&sup3');
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
         text: 'Angaben in Mrd. m³',
            style: {
                fontSize: '12px'
            }
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

    //Entnahme
    Highcharts.chart('entnahme_und_verbrauch', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Entnahme und Verbrauch'
        },
        subtitle: {
         text: 'Angaben in Mio. m³',
            style: {
                fontSize: '12px'
            }
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



    //
    $('.touchpoint, .divpoint').click(function() {
      Highcharts.chart('uebersicht_resourcen', {
          chart: {
              type: 'bar'
          },
          title: {
              text: 'Ressourcen und Abfluss'
          },
          subtitle: {
           text: 'Angaben in Mrd. m³',
              style: {
                  fontSize: '12px'
              }
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

      //Entnahme
      Highcharts.chart('entnahme_und_verbrauch', {
          chart: {
              type: 'bar'
          },
          title: {
              text: 'Entnahme und Verbrauch'
          },
          subtitle: {
           text: 'Angaben in Mio. m³',
              style: {
                  fontSize: '12px'
              }
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


    //klare
    Highcharts.chart('klare', {

        chart: {
            type: 'solidgauge',
            marginTop: 60
        },

        title: {
            text: 'Kläranlagenanschluss',
            style: {
                fontSize: '16px'
            }
        },

        subtitle: {
         text: 'Angaben in % der Bevölkerung',
            style: {
                fontSize: '12px'
            }
        },

        tooltip: {
            borderWidth: 0,
            backgroundColor: 'none',
            shadow: false,
            style: {
                fontSize: '16px'
            },
            pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}</span>',
            positioner: function (labelWidth) {
                return {
                    x: 225 - labelWidth / 2,
                    y: 180
                };
            }
        },

        pane: {
            startAngle: 0,
            endAngle: 360,
            background: [{ // Track for Move
                outerRadius: '112%',
                innerRadius: '88%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.3).get(),
                borderWidth: 0
            }, { // Track for Exercise
                outerRadius: '87%',
                innerRadius: '63%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.3).get(),
                borderWidth: 0
            }, { // Track for Stand
                outerRadius: '62%',
                innerRadius: '38%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2]).setOpacity(0.3).get(),
                borderWidth: 0
            }]
        },

        yAxis: {
            min: 0,
            max: 100,
            lineWidth: 0,
            tickPositions: []
        },

        plotOptions: {
            solidgauge: {
                borderWidth: '34px',
                dataLabels: {
                    enabled: false
                },
                linecap: 'round',
                stickyTracking: false
            }
        },

        series: [{
            name: 'Luxemburg',
            borderColor: Highcharts.getOptions().colors[0],
            data: [{
                color: Highcharts.getOptions().colors[0],
                radius: '100%',
                innerRadius: '100%',
                y: 96.3
            }]
        }, {
            name: landername,
            borderColor: Highcharts.getOptions().colors[1],
            data: [{
                color: Highcharts.getOptions().colors[1],
                radius: '75%',
                innerRadius: '75%',
                y: klaeranlagen
            }]
        }, {
            name: 'Rumänien',
            borderColor: Highcharts.getOptions().colors[2],
            data: [{
                color: Highcharts.getOptions().colors[2],
                radius: '50%',
                innerRadius: '50%',
                y: 35.5
            }]
        }]
    });



    // verbrauch
    Highcharts.chart('verbrauch', {

        chart: {
            type: 'solidgauge',
            marginTop: 60,
            animation: true
        },

        title: {
            text: 'Verbrauch pro Einwohner',
            style: {
                fontSize: '16px'
            }
        },

        subtitle: {
         text: 'Angaben in m³/pro Einwohner',
            style: {
                fontSize: '12px'
            }
        },

        tooltip: {
            borderWidth: 0,
            backgroundColor: 'none',
            shadow: false,
            style: {
                fontSize: '16px'
            },
            pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}</span>',
            positioner: function (labelWidth) {
                return {
                    x: 225 - labelWidth / 2,
                    y: 180
                };
            }
        },

        pane: {
            startAngle: 0,
            endAngle: 360,
            background: [{ // Track for Move
                outerRadius: '112%',
                innerRadius: '88%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.2).get(),
                borderWidth: 0
            }, { // Track for Exercise
                outerRadius: '87%',
                innerRadius: '63%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.2).get(),
                borderWidth: 0
            }, { // Track for Stand
                outerRadius: '62%',
                innerRadius: '38%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2]).setOpacity(0.2).get(),
                borderWidth: 0
            }]
        },

        yAxis: {
            min: 0,
            max: 149,
            lineWidth: 0,
            tickPositions: []
        },

        plotOptions: {
            solidgauge: {
                borderWidth: '34px',
                dataLabels: {
                    enabled: false
                },
                linecap: 'round',
                stickyTracking: false
            }
        },

        series: [{
            name: 'Irland',
            borderColor: Highcharts.getOptions().colors[0],
            data: [{
                color: Highcharts.getOptions().colors[0],
                radius: '100%',
                innerRadius: '100%',
                y: 144
            }]
        }, {
            name: landername,
            borderColor: Highcharts.getOptions().colors[1],
            data: [{
                color: Highcharts.getOptions().colors[1],
                radius: '75%',
                innerRadius: '75%',
                y: verbrauch_PrivateHaushalte
            }]
        }, {
            name: 'Belgien',
            borderColor: Highcharts.getOptions().colors[2],
            data: [{
                color: Highcharts.getOptions().colors[2],
                radius: '50%',
                innerRadius: '50%',
                y: 26
            }]
        }]
    });


    //Industrie_1  in Mio. m3
    Highcharts.chart('wirtschaft_1', {

        chart: {
            type: 'solidgauge',
            marginTop: 50,
            animation: true
        },

        title: {
            text: 'Verbrauch Landwirtschaft',
            style: {
                fontSize: '16px'
            }
        },

        subtitle: {
         text: 'Angaben in Mio. m³',
            style: {
                fontSize: '12px'
            }
        },

        tooltip: {
            borderWidth: 0,
            backgroundColor: 'none',
            shadow: false,
            style: {
                fontSize: '12px'
            },
            pointFormat: '{series.name}<br><span style="font-size:1.5em; color: {point.color}; font-weight: bold">{point.y}</span>',
            positioner: function (labelWidth) {
                return {
                    x: 225 - labelWidth / 2,
                    y: 140
                };
            }
        },

        pane: {
            startAngle: 0,
            endAngle: 360,
            background: [{ // Track for Move
                outerRadius: '82%',
                innerRadius: '67%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.2).get(),
                borderWidth: 0
            }, { // Track for Exercise
                outerRadius: '66%',
                innerRadius: '51%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.2).get(),
                borderWidth: 0
            }, { // Track for Stand
                outerRadius: '50%',
                innerRadius: '35%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2]).setOpacity(0.2).get(),
                borderWidth: 0
            }]
        },

        yAxis: {
            min: 0,
            max: 369,
            lineWidth: 0,
            tickPositions: []
        },

        plotOptions: {
            solidgauge: {
                borderWidth: '15px',
                dataLabels: {
                    enabled: false
                },
                linecap: 'round',
                stickyTracking: false
            }
        },

        series: [{
            name: 'Polen',
            borderColor: Highcharts.getOptions().colors[0],
            data: [{
                color: Highcharts.getOptions().colors[0],
                radius: '75%',
                innerRadius: '75%',
                y: 145.2
            }]
        }, {
            name: landername,
            borderColor: Highcharts.getOptions().colors[1],
            data: [{
                color: Highcharts.getOptions().colors[1],
                color: Highcharts.getOptions().colors[1],
                radius: '60%',
                innerRadius: '60%',
                y: verbrauch_Landwirtschaft
            }]
        }, {
            name: 'Kroatien',
            borderColor: Highcharts.getOptions().colors[2],
            data: [{
                color: Highcharts.getOptions().colors[2],
                radius: '45%',
                innerRadius: '45%',
                y: 0
            }]
        }]
    });


    //Industrie_2
    Highcharts.chart('wirtschaft_2', {

        chart: {
            type: 'solidgauge',
            marginTop: 50,
            animation: true
        },

        title: {
            text: 'Verbrauch Industrie',
            style: {
                fontSize: '16px'
            }
        },

        subtitle: {
         text: 'Angaben in Mio. m³',
            style: {
                fontSize: '12px'
            }
        },

        tooltip: {
            borderWidth: 0,
            backgroundColor: 'none',
            shadow: false,
            style: {
                fontSize: '12px'
            },
            pointFormat: '{series.name}<br><span style="font-size:1.5em; color: {point.color}; font-weight: bold">{point.y}</span>',
            positioner: function (labelWidth) {
                return {
                    x: 225 - labelWidth / 2,
                    y: 140
                };
            }
        },

        pane: {
            startAngle: 0,
            endAngle: 360,
            background: [{ // Track for Move
                outerRadius: '82%',
                innerRadius: '67%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.2).get(),
                borderWidth: 0
            }, { // Track for Exercise
                outerRadius: '66%',
                innerRadius: '51%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.2).get(),
                borderWidth: 0
            }, { // Track for Stand
                outerRadius: '50%',
                innerRadius: '35%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2]).setOpacity(0.2).get(),
                borderWidth: 0
            }]
        },

        yAxis: {
            min: 0,
            max: 369,
            lineWidth: 0,
            tickPositions: []
        },

        plotOptions: {
            solidgauge: {
                borderWidth: '15px',
                dataLabels: {
                    enabled: false
                },
                linecap: 'round',
                stickyTracking: false
            }
        },

        series: [{
            name: 'Spanien',
            borderColor: Highcharts.getOptions().colors[0],
            data: [{
                color: Highcharts.getOptions().colors[0],
                radius: '75%',
                innerRadius: '75%',
                y: 361.9
            }]
        }, {
            name: landername,
            borderColor: Highcharts.getOptions().colors[1],
            data: [{
                color: Highcharts.getOptions().colors[1],
                radius: '60%',
                innerRadius: '60%',
                y: verbrauch_Industrie
            }]
        }, {
            name: 'Malta',
            borderColor: Highcharts.getOptions().colors[2],
            data: [{
                color: Highcharts.getOptions().colors[2],
                radius: '45%',
                innerRadius: '45%',
                y: 2.1
            }]
        }]
    });

    //entnamhe
    Highcharts.chart('entnahme_1', {

        chart: {
            type: 'solidgauge',
            marginTop: 50,
            animation: true
        },

        title: {
            text: 'Grundwasserentnahme',
            style: {
                fontSize: '16px'
            }
        },

        subtitle: {
         text: 'Angaben in Mio. m³',
            style: {
                fontSize: '12px'
            }
        },

        tooltip: {
            borderWidth: 0,
            backgroundColor: 'none',
            shadow: false,
            style: {
                fontSize: '12px'
            },
            pointFormat: '{series.name}<br><span style="font-size:1.5em; color: {point.color}; font-weight: bold">{point.y}</span>',
            positioner: function (labelWidth) {
                return {
                    x: 225 - labelWidth / 2,
                    y: 140
                };
            }
        },

        pane: {
            startAngle: 0,
            endAngle: 360,
            background: [{ // Track for Move
                outerRadius: '82%',
                innerRadius: '67%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.2).get(),
                borderWidth: 0
            }, { // Track for Exercise
                outerRadius: '66%',
                innerRadius: '51%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.2).get(),
                borderWidth: 0
            }, { // Track for Stand
                outerRadius: '50%',
                innerRadius: '35%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2]).setOpacity(0.2).get(),
                borderWidth: 0
            }]
        },

        yAxis: {
            min: 0,
            max: 31000,
            lineWidth: 0,
            tickPositions: []
        },

        plotOptions: {
            solidgauge: {
                borderWidth: '15px',
                dataLabels: {
                    enabled: false
                },
                linecap: 'round',
                stickyTracking: false
            }
        },

        series: [{
            name: 'Spanien',
            borderColor: Highcharts.getOptions().colors[0],
            data: [{
                color: Highcharts.getOptions().colors[0],
                radius: '75%',
                innerRadius: '75%',
                y: 6884
            }]
        }, {
            name: landername,
            borderColor: Highcharts.getOptions().colors[1],
            data: [{
                color: Highcharts.getOptions().colors[1],
                radius: '60%',
                innerRadius: '60%',
                y: grundwasserentnahme
            }]
        }, {
            name: 'Luxemburg',
            borderColor: Highcharts.getOptions().colors[2],
            data: [{
                color: Highcharts.getOptions().colors[2],
                radius: '45%',
                innerRadius: '45%',
                y: 25
            }]
        }]
    });

    Highcharts.chart('entnahme_2', {

        chart: {
            type: 'solidgauge',
            marginTop: 50,
            animation: true
        },

        title: {
            text: 'Oberflächenwasserentnahme',
            style: {
                fontSize: '16px'
            }
        },

        subtitle: {
         text: 'Angaben in Mio. m³',
            style: {
                fontSize: '12px'
            }
        },

        tooltip: {
            borderWidth: 0,
            backgroundColor: 'none',
            shadow: false,
            style: {
                fontSize: '12px'
            },
            pointFormat: '{series.name}<br><span style="font-size:1.5em; color: {point.color}; font-weight: bold">{point.y}</span>',
            positioner: function (labelWidth) {
                return {
                    x: 225 - labelWidth / 2,
                    y: 140
                };
            }
        },

        pane: {
            startAngle: 0,
            endAngle: 360,
            background: [{ // Track for Move
                outerRadius: '82%',
                innerRadius: '67%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.2).get(),
                borderWidth: 0
            }, { // Track for Exercise
                outerRadius: '66%',
                innerRadius: '51%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.2).get(),
                borderWidth: 0
            }, { // Track for Stand
                outerRadius: '50%',
                innerRadius: '35%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2]).setOpacity(0.2).get(),
                borderWidth: 0
            }]
        },

        yAxis: {
            min: 0,
            max: 31000,
            lineWidth: 0,
            tickPositions: []
        },

        plotOptions: {
            solidgauge: {
                borderWidth: '15px',
                dataLabels: {
                    enabled: false
                },
                linecap: 'round',
                stickyTracking: false
            }
        },

        series: [{
            name: 'Spanien',
            borderColor: Highcharts.getOptions().colors[0],
            data: [{
                color: Highcharts.getOptions().colors[0],
                radius: '75%',
                innerRadius: '75%',
                y: 30465
            }]
        }, {
            name: landername,
            borderColor: Highcharts.getOptions().colors[1],
            data: [{
                color: Highcharts.getOptions().colors[1],
                radius: '60%',
                innerRadius: '60%',
                y: oberflaechenwasserentnahme
            }]
        }, {
            name: 'Malta',
            borderColor: Highcharts.getOptions().colors[2],
            data: [{
                color: Highcharts.getOptions().colors[2],
                radius: '45%',
                innerRadius: '45%',
                y: 0
            }]
        }]
    });



    Highcharts.chart('abfluss', {

        chart: {
            type: 'solidgauge',
            marginTop: 60,
            animation: true
        },

        title: {
            text: 'Abfluss',
            style: {
                fontSize: '16px'
            }
        },
        subtitle: {
         text: 'Angaben in Mrd. m³',
            style: {
                fontSize: '12px'
            }
        },

        tooltip: {
            borderWidth: 0,
            backgroundColor: 'none',
            shadow: false,
            style: {
                fontSize: '16px'
            },
            pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}</span>',
            positioner: function (labelWidth) {
                return {
                    x: 225 - labelWidth / 2,
                    y: 180
                };
            }
        },

        pane: {
            startAngle: 0,
            endAngle: 360,
            background: [{ // Track for Move
                outerRadius: '112%',
                innerRadius: '88%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.2).get(),
                borderWidth: 0
            }, { // Track for Exercise
                outerRadius: '87%',
                innerRadius: '63%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.2).get(),
                borderWidth: 0
            }, { // Track for Stand
                outerRadius: '62%',
                innerRadius: '38%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2]).setOpacity(0.2).get(),
                borderWidth: 0
            }]
        },

        yAxis: {
            min: 0,
            max: 193,
            lineWidth: 0,
            tickPositions: []
        },

        plotOptions: {
            solidgauge: {
                borderWidth: '34px',
                dataLabels: {
                    enabled: false
                },
                linecap: 'round',
                stickyTracking: false
            }
        },

        series: [{
            name: 'Schweden',
            borderColor: Highcharts.getOptions().colors[0],
            data: [{
                color: Highcharts.getOptions().colors[0],
                radius: '100%',
                innerRadius: '100%',
                y: 186.2
            }]
        }, {
            name: landername,
            borderColor: Highcharts.getOptions().colors[1],
            data: [{
                color: Highcharts.getOptions().colors[1],
                radius: '75%',
                innerRadius: '75%',
                y: abfluss
            }]
        }, {
            name: 'Malta',
            borderColor: Highcharts.getOptions().colors[2],
            data: [{
                color: Highcharts.getOptions().colors[2],
                radius: '50%',
                innerRadius: '50%',
                y: 0.1
            }]
        }]
    });

    // suesswasser
      Highcharts.chart('suesswasser', {

          chart: {
              type: 'solidgauge',
              marginTop: 60,
              animation: true
          },

          title: {
              text: 'Süßwasserressourcen',
              style: {
                  fontSize: '16px'
              }
          },

          subtitle: {
           text: 'Angaben in Mrd. m³',
              style: {
                  fontSize: '12px'
              }
          },

          tooltip: {
              borderWidth: 0,
              backgroundColor: 'none',
              shadow: false,
              style: {
                  fontSize: '16px'
              },
              pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}</span>',
              positioner: function (labelWidth) {
                  return {
                      x: 225 - labelWidth / 2,
                      y: 180
                  };
              }
          },

          pane: {
              startAngle: 0,
              endAngle: 360,
              background: [{ // Track for Move
                  outerRadius: '112%',
                  innerRadius: '88%',
                  backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.2).get(),
                  borderWidth: 0
              }, { // Track for Exercise
                  outerRadius: '87%',
                  innerRadius: '63%',
                  backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.2).get(),
                  borderWidth: 0
              }, { // Track for Stand
                  outerRadius: '62%',
                  innerRadius: '38%',
                  backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2]).setOpacity(0.2).get(),
                  borderWidth: 0
              }]
          },

          yAxis: {
              min: 0,
              max: 195,
              lineWidth: 0,
              tickPositions: []
          },

          plotOptions: {
              solidgauge: {
                  borderWidth: '34px',
                  dataLabels: {
                      enabled: false
                  },
                  linecap: 'round',
                  stickyTracking: false
              }
          },

          series: [{
              name: 'Deutschland',
              borderColor: Highcharts.getOptions().colors[0],
              data: [{
                  color: Highcharts.getOptions().colors[0],
                  radius: '100%',
                  innerRadius: '100%',
                  y: 188
              }]
          }, {
              name: landername,
              borderColor: Highcharts.getOptions().colors[1],
              data: [{
                  color: Highcharts.getOptions().colors[1],
                  radius: '75%',
                  innerRadius: '75%',
                  y: suesswasserressourcen
              }]
          }, {
              name: 'Malta',
              borderColor: Highcharts.getOptions().colors[2],
              data: [{
                  color: Highcharts.getOptions().colors[2],
                  radius: '50%',
                  innerRadius: '50%',
                  y: 0.1
              }]
          }]
      });

    });

});
