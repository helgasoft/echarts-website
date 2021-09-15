/*
title: GEO SVG Traffic
category: map
titleCN: 交通（SVG）
*/

$.get(ROOT_PATH + '/data/asset/geo/ksia-ext-plan-min.svg', function (svg) {


    echarts.registerMap('ksia-ext-plan', { svg: svg });

    option = {
        tooltip: {
        },
        geo: {
            map: 'ksia-ext-plan',
            roam: true,
            layoutCenter: ['50%', '50%'],
            layoutSize: '100%'
        },
        series: [{
            name: 'Route',
            type: 'lines',
            coordinateSystem: 'geo',
            geoIndex: 0,
            emphasis: {
                label: {
                    show: false
                }
            },
            polyline: true,
            lineStyle: {
                color: '#c46e54',
                width: 0
            },
            effect: {
                show: true,
                period: 8,
                color: '#a10000',
                // constantSpeed: 80,
                trailLength: 0,
                symbolSize: [12, 30],
                symbol: 'path://M87.1667 3.8333L80.5.5h-60l-6.6667 3.3333L.5 70.5v130l10 10h80l10 -10v-130zM15.5 190.5l15 -20h40l15 20zm75 -65l-15 5v35l15 15zm-80 0l15 5v35l-15 15zm65 0l15 -5v-40l-15 20zm-50 0l-15 -5v-40l15 20zm 65,-55 -15,25 c -15,-5 -35,-5 -50,0 l -15,-25 c 25,-15 55,-15 80,0 z'
            },
            z: 100,
            data: [{
                effect: {
                    color: '#a10000',
                    constantSpeed: 100,
                    delay: 0,
                },
                coords: [
                    [50.875133928571415, 242.66287667410717],
                    [62.03696428571425, 264.482421875],
                    [72.63357421874997, 273.62779017857144],
                    [92.78291852678569, 285.869140625],
                    [113.43637834821425, 287.21854073660717],
                    [141.44788783482142, 288.92947823660717],
                    [191.71686104910714, 289.5507114955357],
                    [198.3060072544643, 294.0673828125],
                    [204.99699497767858, 304.60288783482144],
                    [210.79177734375003, 316.7373046875],
                    [212.45179408482142, 329.3656529017857],
                    [210.8885267857143, 443.3925083705358],
                    [215.35936941964286, 453.00634765625],
                    [224.38761997767858, 452.15087890625],
                    [265.71490792410714, 452.20179966517856],
                    [493.3408844866072, 453.77525111607144],
                    [572.8892940848216, 448.77992466517856],
                    [608.9513755580358, 448.43366350446433],
                    [619.99099609375, 450.8778599330358],
                    [624.2479715401787, 456.2194475446429],
                    [628.1434095982145, 463.9899553571429],
                    [629.8492550223216, 476.0276227678571],
                    [631.2750362723216, 535.7322126116071],
                    [624.6757059151787, 546.6496233258929],
                    [617.1801702008929, 552.6480887276786],
                    [603.7269056919645, 554.5066964285714],
                    [588.0178515625, 557.5517578125],
                    [529.4386104910716, 556.2991071428571],
                    [422.1994921875001, 551.38525390625],
                    [291.66921875, 552.5767996651786],
                    [219.4279380580357, 547.4949079241071],
                    [209.53912667410714, 541.5931919642858],
                    [206.70793247767858, 526.1947544642858],
                    [206.70793247767858, 507.4049944196429],
                    [206.12234375000003, 468.7663225446429],
                    [204.48778738839286, 459.44782366071433],
                    [197.56256417410714, 452.8943219866071],
                    [170.31995814732142, 456.27546037946433],
                    [1.8078906249999704, 460.5935407366071]
                ]
            }, {
                effect: {
                    color: '#00067d',
                    constantSpeed: 80,
                    delay: 0,
                },
                coords: [
                    [779.4595368303574, 287.98744419642856],
                    [689.07009765625, 291.0477818080357],
                    [301.83300223214286, 290.49783761160717],
                    [229.31165736607142, 291.73011997767856],
                    [220.73660156250003, 297.4077845982143],
                    [214.74832031250003, 308.52378627232144],
                    [213.82156250000003, 421.35400390625],
                    [213.19523716517858, 443.0564313616071],
                    [222.31005301339286, 455.95465959821433],
                    [271.71846540178575, 454.37611607142856],
                    [359.64843191964286, 455.9393833705358],
                    [580.2524358258929, 448.11286272321433],
                    [627.7156752232145, 460.7463030133929],
                    [632.3290959821429, 536.6386021205358],
                    [628.9123130580358, 548.4776785714286],
                    [612.5667494419645, 556.8235909598214],
                    [543.7167912946429, 555.4741908482143],
                    [429.1756361607143, 551.9402901785714],
                    [293.42089285714286, 551.2172154017858],
                    [226.20039899553575, 556.0699637276786],
                    [215.49176339285714, 562.7253069196429],
                    [213.21051339285714, 591.6024693080358],
                    [212.00878348214286, 625.6735491071429],
                    [197.43017020089286, 645.0743582589286],
                    [187.41405691964286, 647.0857282366071],
                    [101.79589285714286, 649.0207170758929],
                    [69.96023437499997, 650.1613420758929],
                    [56.48150948660714, 656.8268694196429],
                    [51.11446149553569, 665.2542550223214]
                ]
            }, {
                effect: {
                    color: '#997405',
                    constantSpeed: 60,
                    delay: 0,
                },
                coords: [
                    [2.5920703124999704, 450.66908482142856],
                    [204.0651450892857, 453.13364955357144],
                    [378.72844029017864, 453.13874162946433],
                    [551.1817745535716, 456.1532505580358],
                    [578.3734598214287, 456.91196986607144],
                    [601.2317885044645, 458.9895368303571],
                    [614.1503850446429, 462.1669921875],
                    [618.99294921875, 479.68882533482144],
                    [620.0826534598216, 513.5969587053571],
                    [615.6932840401787, 528.7306082589286],
                    [608.4829045758929, 533.2625558035714],
                    [592.7127455357145, 534.9582170758929],
                    [583.09890625, 527.5492466517858],
                    [578.6535239955358, 516.4077845982143],
                    [578.6535239955358, 498.36146763392856],
                    [577.9966462053571, 477.0613141741071],
                    [575.3691350446429, 469.1940569196429],
                    [569.0753292410716, 462.63037109375],
                    [553.9518638392858, 460.6444614955358],
                    [298.10051060267864, 465.61432756696433],
                    [193.49908761160714, 460.1759905133929],
                    [116.40505859374997, 465.78236607142856],
                    [3.5137360491071092, 463.47565569196433]
                ]
            }]
        }]
    };

    myChart.setOption(option);

});

export {}