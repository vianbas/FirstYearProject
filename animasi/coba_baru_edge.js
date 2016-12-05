/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['286px', '1px', '264px', '38px', 'auto', 'auto'],
                            borderRadius: ["10px 10px", "10px 10px", "10px 10px", "10px 10px"],
                            fill: ["rgba(0,255,7,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            c: [
                            {
                                id: 'RectangleCopy',
                                type: 'rect',
                                rect: ['8px', '2px', '251px', '30px', 'auto', 'auto'],
                                borderRadius: ["10px 10px", "10px 10px", "10px 10px", "10px 10px"],
                                fill: ["rgba(255,255,255,1.00)",[270,[['rgba(44,139,50,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
                                stroke: [0,"rgba(0,0,0,1)","none"],
                                c: [
                                {
                                    id: 'Text',
                                    type: 'text',
                                    rect: ['14px', '4px', '278px', '19px', 'auto', 'auto'],
                                    text: "Hukum Segresi Mendel",
                                    font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(0,0,0,1)", "900", "none", "", "break-word", "normal"]
                                }]
                            }]
                        },
                        {
                            id: 'Animasi_mendel',
                            symbolName: 'Animasi_mendel',
                            display: 'block',
                            type: 'rect',
                            rect: ['162px', '52px', '541', '569', 'auto', 'auto']
                        },
                        {
                            id: 'playbuttonb',
                            display: 'block',
                            type: 'image',
                            rect: ['103px', '2px', '52px', '37px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"playbuttonb.png",'0px','0px']
                        },
                        {
                            id: 'pausebutton',
                            display: 'none',
                            type: 'image',
                            rect: ['103px', '2px', '51px', '38px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"pausebutton.png",'0px','0px']
                        },
                        {
                            id: 'reload',
                            type: 'image',
                            rect: ['161px', '1px', '52px', '36px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"reload.png",'0px','0px']
                        },
                        {
                            id: 'Home_pa',
                            symbolName: 'Home_pa',
                            type: 'rect',
                            rect: ['31', '60', '681', '556', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '732px', '630px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(211,255,197,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid624",
                            "left",
                            0,
                            0,
                            "linear",
                            "${playbuttonb}",
                            '103px',
                            '103px'
                        ],
                        [
                            "eid642",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Animasi_mendel}",
                            '162px',
                            '162px'
                        ],
                        [
                            "eid619",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Animasi_mendel}",
                            'block',
                            'block'
                        ],
                        [
                            "eid623",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Animasi_mendel}",
                            '52px',
                            '52px'
                        ],
                        [
                            "eid837",
                            "top",
                            0,
                            0,
                            "linear",
                            "${pausebutton}",
                            '2px',
                            '2px'
                        ],
                        [
                            "eid621",
                            "display",
                            0,
                            0,
                            "linear",
                            "${playbuttonb}",
                            'block',
                            'block'
                        ],
                        [
                            "eid627",
                            "top",
                            0,
                            0,
                            "linear",
                            "${reload}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid834",
                            "left",
                            0,
                            0,
                            "linear",
                            "${pausebutton}",
                            '103px',
                            '103px'
                        ],
                        [
                            "eid620",
                            "display",
                            0,
                            0,
                            "linear",
                            "${pausebutton}",
                            'none',
                            'none'
                        ],
                        [
                            "eid626",
                            "left",
                            0,
                            0,
                            "linear",
                            "${reload}",
                            '161px',
                            '161px'
                        ],
                        [
                            "eid625",
                            "top",
                            0,
                            0,
                            "linear",
                            "${playbuttonb}",
                            '2px',
                            '2px'
                        ]
                    ]
                }
            },
            "kotak": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'kotak_besar',
                            stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                            rect: ['0px', '0px', '217px', '218px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'kotak1',
                            stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                            rect: ['0px', '0px', '108px', '110px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'rect',
                            id: 'kotak2',
                            stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                            rect: ['109px', '0px', '108px', '110px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'rect',
                            id: 'kotak3',
                            stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                            rect: ['0px', '111px', '108px', '107px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'rect',
                            id: 'kotak4',
                            stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                            rect: ['109px', '111px', '108px', '107px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '219px', '220px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid64",
                            "left",
                            0,
                            0,
                            "linear",
                            "${kotak_besar}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid65",
                            "top",
                            0,
                            0,
                            "linear",
                            "${kotak_besar}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid4",
                            "border-color",
                            0,
                            0,
                            "linear",
                            "${kotak_besar}",
                            'rgb(0, 0, 0)',
                            'rgb(0, 0, 0)'
                        ],
                        [
                            "eid5",
                            "border-width",
                            0,
                            0,
                            "linear",
                            "${kotak_besar}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid13",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${kotak_besar}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid59",
                            "height",
                            0,
                            0,
                            "linear",
                            "${kotak_besar}",
                            '218px',
                            '218px'
                        ],
                        [
                            "eid61",
                            "width",
                            0,
                            0,
                            "linear",
                            "${kotak_besar}",
                            '217px',
                            '217px'
                        ]
                    ]
                }
            },
            "Bunga_Putih": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '84px', '76px', 'auto', 'auto'],
                            id: 'b_putih',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/PUTIH32.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '84px', '76px']
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: false,
                    data: [
                        [
                            "eid5",
                            "rotateZ",
                            0,
                            1250,
                            "linear",
                            "${b_putih}",
                            '0deg',
                            '360deg'
                        ]
                    ]
                }
            },
            "B_ungu": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['360'], [0, 0, 0], [1, 1, 1]],
                            id: 'b_ungu1',
                            type: 'image',
                            rect: ['0px', '0px', '81px', '77px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/UNGU6.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '81px', '77px']
                        }
                    }
                },
                timeline: {
                    duration: 1155,
                    autoPlay: false,
                    data: [
                        [
                            "eid2",
                            "rotateZ",
                            0,
                            1155,
                            "linear",
                            "${b_ungu1}",
                            '0deg',
                            '360deg'
                        ]
                    ]
                }
            },
            "Animasi_mendel": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['272px', '69px', '0px', '0px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            id: 'kotak_1',
                            opacity: 1,
                            display: 'block',
                            fill: ['rgba(119,204,91,1.00)']
                        },
                        {
                            rect: ['286px', '264px', '550px', '173px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            id: 'kotak_1Copy',
                            opacity: 1,
                            display: 'none',
                            fill: ['rgba(119,204,91,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text2',
                            opacity: 0.31791907514451,
                            cursor: 'pointer',
                            rect: ['11px', '16px', '158px', '30px', 'auto', 'auto'],
                            display: 'none',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(0,0,0,1)', '900', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            text: 'Generasi P'
                        },
                        {
                            rect: ['246px', '2px', '70px', '65px', 'auto', 'auto'],
                            type: 'image',
                            id: 'UNGU',
                            opacity: 0,
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/UNGU.png', '0px', '0px']
                        },
                        {
                            rect: ['383px', '2px', '71px', '65px', 'auto', 'auto'],
                            type: 'image',
                            id: 'PUTIH3',
                            opacity: 0,
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/PUTIH3.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text3',
                            opacity: 0,
                            cursor: 'pointer',
                            rect: ['11px', '55px', '158px', '19px', 'auto', 'auto'],
                            display: 'none',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(0,0,0,1)', '900', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            text: 'Penampakan '
                        },
                        {
                            type: 'text',
                            id: 'Text3Copy',
                            opacity: 0,
                            cursor: 'pointer',
                            rect: ['11px', '86px', '278px', '19px', 'auto', 'auto'],
                            display: 'none',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(0,0,0,1)', '900', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            text: 'Susunan Genetik'
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            rect: ['235px', '65px', '114px', '19px', 'auto', 'auto'],
                            align: 'left',
                            text: 'Bunga Ungu',
                            id: 'Text4',
                            opacity: 0,
                            display: 'none',
                            type: 'text'
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            rect: ['376px', '67px', '114px', '19px', 'auto', 'auto'],
                            align: 'left',
                            text: 'Bunga Putih',
                            id: 'Text4Copy',
                            opacity: 0,
                            display: 'none',
                            type: 'text'
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(0,0,0,1)', '900', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            rect: ['263px', '52px', '58px', '30px', 'auto', 'auto'],
                            align: 'left',
                            text: 'PP',
                            id: 'Text5',
                            opacity: 0,
                            display: 'none',
                            type: 'text'
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(0,0,0,1)', '500', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            rect: ['406px', '83px', '35px', '29px', 'auto', 'auto'],
                            align: 'left',
                            text: 'pp',
                            id: 'Text6',
                            opacity: 0,
                            display: 'none',
                            type: 'text'
                        },
                        {
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['256px', '110px', '40px', '36px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'Ellipse',
                            opacity: 0,
                            display: 'none',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text7',
                            opacity: 0.27745664739884,
                            cursor: 'pointer',
                            rect: ['12px', '114px', '158px', '30px', 'auto', 'auto'],
                            display: 'none',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(0,0,0,1)', '800', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            text: 'Gamet'
                        },
                        {
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['399px', '110px', '40px', '36px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'EllipseCopy',
                            opacity: 0,
                            display: 'none',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(0,0,0,1)', '800', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            rect: ['261px', '84px', '35px', '29px', 'auto', 'auto'],
                            align: 'left',
                            text: 'P',
                            id: 'Text8',
                            opacity: 0,
                            display: 'none',
                            type: 'text'
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(0,0,0,1)', '500', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            rect: ['406px', '114px', '40px', '38px', 'auto', 'auto'],
                            align: 'left',
                            text: 'p',
                            id: 'Text9',
                            opacity: 1,
                            display: 'none',
                            type: 'text'
                        },
                        {
                            type: 'text',
                            id: 'Text10',
                            opacity: 0,
                            cursor: 'pointer',
                            rect: ['11px', '197px', '190px', '36px', 'auto', 'auto'],
                            display: 'none',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(0,0,0,1)', '800', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            text: 'Generasi F1'
                        },
                        {
                            rect: ['284px', '146px', '122px', '30px', 'auto', 'auto'],
                            type: 'image',
                            id: 'panpan',
                            opacity: 0,
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/panpan.png', '0px', '0px']
                        },
                        {
                            rect: ['321px', '178px', '56px', '50px', 'auto', 'auto'],
                            type: 'image',
                            id: 'UNGU2',
                            opacity: 0.60240921521761,
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/UNGU2.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text11',
                            opacity: 0,
                            cursor: 'pointer',
                            rect: ['12px', '228px', '206px', '36px', 'auto', 'auto'],
                            display: 'none',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(0,0,0,1)', '800', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            text: 'Penampakan'
                        },
                        {
                            type: 'text',
                            id: 'Text13',
                            opacity: 0,
                            cursor: 'pointer',
                            rect: ['9px', '258px', '223px', '36px', 'auto', 'auto'],
                            display: 'none',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(0,0,0,1)', '800', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            text: 'Susunan Genetik'
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [26, 'px'], 'rgba(0,0,0,1)', '800', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            rect: ['332px', '258px', '22px', '30px', 'auto', 'auto'],
                            align: 'left',
                            text: 'P',
                            id: 'Text14',
                            opacity: 0,
                            display: 'none',
                            type: 'text'
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [26, 'px'], 'rgba(0,0,0,1)', '800', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            rect: ['347px', '258px', '35px', '36px', 'auto', 'auto'],
                            align: 'left',
                            text: 'p',
                            id: 'Text15',
                            opacity: 0,
                            display: 'none',
                            type: 'text'
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [6, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            rect: ['289px', '226px', '35px', '30px', 'auto', 'auto'],
                            align: 'left',
                            text: 'Bunga Ungu',
                            id: 'Text12',
                            opacity: 1,
                            display: 'none',
                            type: 'text'
                        },
                        {
                            type: 'text',
                            id: 'Text16',
                            opacity: 0.23699421965318,
                            cursor: 'pointer',
                            rect: ['10px', '288px', '175px', '30px', 'auto', 'auto'],
                            display: 'none',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(0,0,0,1)', '800', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            text: 'Gamet'
                        },
                        {
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['262px', '287px', '45px', '31px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'Ellipse2',
                            opacity: 0,
                            display: 'none',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [26, 'px'], 'rgba(0,0,0,1)', '800', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            rect: ['277px', '258px', '22px', '30px', 'auto', 'auto'],
                            align: 'left',
                            text: 'P',
                            id: 'Text14Copy',
                            opacity: 1,
                            display: 'none',
                            type: 'text'
                        },
                        {
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['405px', '287px', '45px', '31px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'Ellipse2Copy',
                            opacity: 0,
                            display: 'none',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [23, 'px'], 'rgba(0,0,0,1)', '800', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            rect: ['226px', '288px', '45px', '29px', 'auto', 'auto'],
                            align: 'left',
                            text: '1/2',
                            id: 'Text17',
                            opacity: 0.53179190751445,
                            display: 'none',
                            type: 'text'
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [26, 'px'], 'rgba(0,0,0,1)', '500', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            rect: ['420px', '287px', '35px', '36px', 'auto', 'auto'],
                            align: 'left',
                            text: 'p',
                            id: 'Text18',
                            opacity: 1,
                            display: 'none',
                            type: 'text'
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [23, 'px'], 'rgba(0,0,0,1)', '800', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            rect: ['454px', '294px', '56px', '29px', 'auto', 'auto'],
                            align: 'left',
                            text: '1/2',
                            id: 'Text19',
                            opacity: 0,
                            display: 'none',
                            type: 'text'
                        },
                        {
                            rect: ['284px', '449px', '550px', '210px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            id: 'Rectangle3',
                            opacity: 1,
                            display: 'none',
                            fill: ['rgba(119,204,91,1)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '800', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            rect: ['359px', '526px', '25px', '29px', 'auto', 'auto'],
                            align: 'left',
                            text: ':',
                            id: 'Text26',
                            opacity: 0,
                            display: 'none',
                            type: 'text'
                        },
                        {
                            rect: ['281px', '321px', '152px', '64px', 'auto', 'auto'],
                            type: 'image',
                            id: 'panpan2',
                            opacity: 1,
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/panpan.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text20',
                            opacity: 0,
                            cursor: 'pointer',
                            rect: ['0px', '431px', '152px', '38px', 'auto', 'auto'],
                            display: 'none',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(0,0,0,1)', '800', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            text: 'Generasi F2'
                        },
                        {
                            type: 'text',
                            id: 'Text22',
                            opacity: 0,
                            cursor: 'pointer',
                            rect: ['229px', '321px', '125px', '31px', 'auto', 'auto'],
                            display: 'none',
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '800', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            text: 'Ovum F1'
                        },
                        {
                            type: 'text',
                            id: 'Text22Copy',
                            opacity: 0,
                            cursor: 'pointer',
                            rect: ['391px', '317px', '130px', '31px', 'auto', 'auto'],
                            display: 'none',
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '800', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            text: 'Sperma F1'
                        },
                        {
                            type: 'rect',
                            transform: [[], ['45'], [], ['0.3242', '0.29545']],
                            opacity: 0,
                            display: 'none',
                            symbolName: 'kotak',
                            rect: ['254px', '340px', null, null, 'auto', 'auto'],
                            id: 'kotak'
                        },
                        {
                            rect: ['380px', '400px', '22px', '19px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            text: 'P',
                            id: 'Text21',
                            opacity: 0,
                            display: 'none',
                            type: 'text'
                        },
                        {
                            rect: ['331px', '400px', '22px', '19px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            text: 'P',
                            id: 'Text21Copy',
                            opacity: 0,
                            display: 'none',
                            type: 'text'
                        },
                        {
                            rect: ['400px', '419px', '22px', '19px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [21, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            text: 'p',
                            id: 'Text21Copy2',
                            opacity: 0,
                            display: 'none',
                            type: 'text'
                        },
                        {
                            rect: ['310px', '419px', '22px', '19px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [21, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            text: 'p',
                            id: 'Text21Copy3',
                            opacity: 0,
                            display: 'none',
                            type: 'text'
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['0.53704', '0.55195']],
                            opacity: 0,
                            display: 'none',
                            symbolName: 'B_ungu',
                            rect: ['324px', '388px', null, null, 'auto', 'auto'],
                            id: 'B_ungu2'
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [21, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            rect: ['283px', '526px', '25px', '19px', 'auto', 'auto'],
                            align: 'left',
                            text: '3',
                            id: 'Text25',
                            opacity: 0,
                            display: 'none',
                            type: 'text'
                        },
                        {
                            rect: ['296px', '514px', '61px', '54px', 'auto', 'auto'],
                            type: 'image',
                            id: 'UNGU3',
                            opacity: 0,
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/UNGU.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['0.48148', '0.48052']],
                            opacity: 0,
                            display: 'none',
                            symbolName: 'B_ungu',
                            rect: ['348px', '412px', null, null, 'auto', 'auto'],
                            id: 'B_ungu3'
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['0.48765', '0.56494']],
                            opacity: 0,
                            display: 'none',
                            symbolName: 'B_ungu',
                            rect: ['299px', '410px', null, null, 'auto', 'auto'],
                            id: 'B_ungu4'
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['0.53', '0.60965']],
                            opacity: 0,
                            display: 'none',
                            symbolName: 'Bunga_Putih',
                            rect: ['323px', '437px', null, null, 'auto', 'auto'],
                            id: 'Bunga_Putih2'
                        },
                        {
                            rect: ['405px', '515px', '59px', '54px', 'auto', 'auto'],
                            type: 'image',
                            id: 'PUTIH32',
                            opacity: 0,
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/PUTIH3.png', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [21, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            rect: ['390px', '527px', '25px', '29px', 'auto', 'auto'],
                            align: 'left',
                            text: '1',
                            id: 'Text27',
                            opacity: 0,
                            display: 'none',
                            type: 'text'
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            rect: ['375px', '437px', '22px', '19px', 'auto', 'auto'],
                            align: 'left',
                            text: 'P',
                            id: 'P1',
                            opacity: 1,
                            display: 'none',
                            type: 'text'
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            rect: ['330px', '400px', '22px', '19px', 'auto', 'auto'],
                            align: 'left',
                            text: 'P',
                            id: 'P2',
                            opacity: 1,
                            display: 'none',
                            type: 'text'
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            rect: ['349px', '400px', '22px', '19px', 'auto', 'auto'],
                            align: 'left',
                            text: 'P',
                            id: 'P3',
                            opacity: 1,
                            display: 'none',
                            type: 'text'
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            rect: ['380px', '401px', '22px', '19px', 'auto', 'auto'],
                            align: 'left',
                            text: 'P',
                            id: 'P4',
                            opacity: 1,
                            display: 'none',
                            type: 'text'
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [21, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            rect: ['338px', '440px', '22px', '19px', 'auto', 'auto'],
                            align: 'left',
                            text: 'p',
                            id: 'p22',
                            opacity: 1,
                            display: 'none',
                            type: 'text'
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [21, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            rect: ['390px', '441px', '22px', '19px', 'auto', 'auto'],
                            align: 'left',
                            text: 'p',
                            id: 'p23',
                            opacity: 1,
                            display: 'none',
                            type: 'text'
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [21, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            rect: ['354px', '462px', '22px', '19px', 'auto', 'auto'],
                            align: 'left',
                            text: 'p',
                            id: 'p24',
                            opacity: 1,
                            display: 'none',
                            type: 'text'
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [21, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            rect: ['399px', '463px', '22px', '19px', 'auto', 'auto'],
                            align: 'left',
                            text: 'p',
                            id: 'p21',
                            opacity: 1,
                            display: 'none',
                            type: 'text'
                        },
                        {
                            rect: ['18px', '264px', '518px', '525px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(119,204,91,1)']
                        },
                        {
                            type: 'rect',
                            display: 'block',
                            symbolName: 'Gen_R_P',
                            rect: ['-151', '28', '158', '57', 'auto', 'auto'],
                            id: 'Gen_R_P'
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'Penampakan',
                            rect: ['-181px', '96px', '158', '35', 'auto', 'auto'],
                            id: 'Penampakan'
                        },
                        {
                            type: 'rect',
                            display: 'block',
                            symbolName: 'Sugen_tek',
                            rect: ['-151px', '94px', '158', '57', 'auto', 'auto'],
                            id: 'Sugen_tek'
                        },
                        {
                            id: 'Gamet',
                            symbolName: 'Gamet',
                            rect: ['-151px', '128px', '158', '57', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'Fenotipe_',
                            symbolName: 'Fenotipe_',
                            rect: ['-169px', '208px', '158', '57', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'Penampakan2',
                            symbolName: 'Penampakan',
                            rect: ['-146px', '236px', undefined, undefined, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'Sugen_tek2',
                            symbolName: 'Sugen_tek',
                            rect: ['-146px', '268px', undefined, undefined, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'Gamet2',
                            symbolName: 'Gamet',
                            rect: ['-144px', '298px', undefined, undefined, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'Gen_f2',
                            symbolName: 'Gen_f2',
                            rect: ['-151px', '442px', '158', '57', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'jantan',
                            symbolName: 'jantan',
                            rect: ['0', '0', '0', '0', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'betina',
                            symbolName: 'betina',
                            rect: ['321', '369', '127', '57', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            rect: ['15px', '24px', '235px', '508px', 'auto', 'auto'],
                            type: 'image',
                            id: 'fentpy',
                            opacity: 0,
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/fentpy.png', '0px', '0px']
                        },
                        {
                            rect: ['306px', '23px', '235px', '508px', 'auto', 'auto'],
                            type: 'image',
                            id: 'gen',
                            opacity: 0,
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/gen.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['0.86831', '0.84416']],
                            display: 'none',
                            symbolName: 'B_ungu',
                            rect: ['244px', '74px', null, null, 'auto', 'auto'],
                            id: 'B_ungu5'
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['0.93827', '0.91342']],
                            display: 'none',
                            symbolName: 'B_ungu',
                            rect: ['245px', '181px', null, null, 'auto', 'auto'],
                            id: 'B_ungu6'
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['0.9881', '0.94737']],
                            display: 'none',
                            symbolName: 'Bunga_Putih',
                            rect: ['237px', '401px', null, null, 'auto', 'auto'],
                            id: 'Bunga_Putih3'
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['0.91358', '0.87879']],
                            display: 'none',
                            symbolName: 'B_ungu',
                            rect: ['243px', '288px', null, null, 'auto', 'auto'],
                            id: 'B_ungu7'
                        },
                        {
                            id: 'Genotipe',
                            symbolName: 'Genotipe',
                            rect: ['268px', '15px', '109', '57', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'Phenytp',
                            symbolName: 'Phenytp',
                            rect: ['-146', '39', '144', '143', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            rect: ['392px', '34px', '94px', '20px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle9',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(119,204,91,0.00)']
                        },
                        {
                            rect: ['64px', '34px', '109px', '20px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle10',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(119,204,91,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '541px', '569px']
                        }
                    }
                },
                timeline: {
                    duration: 59763,
                    autoPlay: false,
                    data: [
                        [
                            "eid191",
                            "display",
                            41859,
                            0,
                            "linear",
                            "${P4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid517",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${P4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid146",
                            "top",
                            34000,
                            1000,
                            "linear",
                            "${Text18}",
                            '258px',
                            '287px'
                        ],
                        [
                            "eid176",
                            "display",
                            40924,
                            0,
                            "linear",
                            "${Text21Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid529",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${Text21Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid573",
                            "top",
                            53750,
                            760,
                            "linear",
                            "${Rectangle2}",
                            '264px',
                            '15px'
                        ],
                        [
                            "eid289",
                            "height",
                            48555,
                            0,
                            "linear",
                            "${Text25}",
                            '19px',
                            '19px'
                        ],
                        [
                            "eid290",
                            "left",
                            48555,
                            0,
                            "linear",
                            "${Text25}",
                            '283px',
                            '283px'
                        ],
                        [
                            "eid108",
                            "width",
                            25250,
                            1250,
                            "linear",
                            "${Text12}",
                            '35px',
                            '130px'
                        ],
                        [
                            "eid177",
                            "display",
                            40924,
                            0,
                            "linear",
                            "${kotak}",
                            'none',
                            'block'
                        ],
                        [
                            "eid533",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${kotak}",
                            'block',
                            'none'
                        ],
                        [
                            "eid471",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${kotak_1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid175",
                            "opacity",
                            39980,
                            944,
                            "linear",
                            "${Text22Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid486",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${Text22Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid86",
                            "display",
                            18710,
                            0,
                            "linear",
                            "${Text10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid554",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${Text10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid23",
                            "opacity",
                            3915,
                            1085,
                            "linear",
                            "${Text3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid482",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${Text3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid192",
                            "display",
                            41859,
                            0,
                            "linear",
                            "${P3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid518",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${P3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid179",
                            "display",
                            40924,
                            0,
                            "linear",
                            "${Text21}",
                            'none',
                            'block'
                        ],
                        [
                            "eid532",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${Text21}",
                            'block',
                            'none'
                        ],
                        [
                            "eid592",
                            "scaleX",
                            57323,
                            0,
                            "linear",
                            "${B_ungu6}",
                            '0.93827',
                            '0.93827'
                        ],
                        [
                            "eid76",
                            "top",
                            14593,
                            1407,
                            "linear",
                            "${Text9}",
                            '86px',
                            '114px'
                        ],
                        [
                            "eid273",
                            "scaleY",
                            47305,
                            0,
                            "linear",
                            "${Bunga_Putih2}",
                            '0.60965',
                            '0.60965'
                        ],
                        [
                            "eid217",
                            "top",
                            46455,
                            725,
                            "linear",
                            "${p21}",
                            '422px',
                            '463px'
                        ],
                        [
                            "eid98",
                            "top",
                            21700,
                            1300,
                            "linear",
                            "${UNGU2}",
                            '0px',
                            '146px'
                        ],
                        [
                            "eid100",
                            "top",
                            23000,
                            655,
                            "linear",
                            "${UNGU2}",
                            '146px',
                            '178px'
                        ],
                        [
                            "eid21",
                            "display",
                            3915,
                            0,
                            "linear",
                            "${Text3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid565",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${Text3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid674",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Gen_R_P}",
                            'block',
                            'block'
                        ],
                        [
                            "eid57",
                            "opacity",
                            11093,
                            1100,
                            "linear",
                            "${Text7}",
                            '0.27745699882507324',
                            '1'
                        ],
                        [
                            "eid494",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${Text7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid144",
                            "display",
                            34000,
                            0,
                            "linear",
                            "${Text18}",
                            'none',
                            'block'
                        ],
                        [
                            "eid541",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${Text18}",
                            'block',
                            'none'
                        ],
                        [
                            "eid206",
                            "top",
                            43500,
                            636,
                            "linear",
                            "${p22}",
                            '420px',
                            '440px'
                        ],
                        [
                            "eid299",
                            "width",
                            48555,
                            0,
                            "linear",
                            "${UNGU3}",
                            '61px',
                            '61px'
                        ],
                        [
                            "eid265",
                            "scaleX",
                            47305,
                            0,
                            "linear",
                            "${Bunga_Putih2}",
                            '0.57143',
                            '0.57143'
                        ],
                        [
                            "eid583",
                            "scaleY",
                            56375,
                            0,
                            "linear",
                            "${B_ungu5}",
                            '0.84416',
                            '0.84416'
                        ],
                        [
                            "eid497",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid210",
                            "display",
                            44930,
                            0,
                            "linear",
                            "${p23}",
                            'none',
                            'block'
                        ],
                        [
                            "eid515",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${p23}",
                            'block',
                            'none'
                        ],
                        [
                            "eid58",
                            "display",
                            12343,
                            0,
                            "linear",
                            "${Ellipse}",
                            'none',
                            'block'
                        ],
                        [
                            "eid559",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${Ellipse}",
                            'block',
                            'none'
                        ],
                        [
                            "eid574",
                            "width",
                            54510,
                            830,
                            "linear",
                            "${Rectangle2}",
                            '25px',
                            '518px'
                        ],
                        [
                            "eid254",
                            "scaleY",
                            47305,
                            0,
                            "linear",
                            "${B_ungu4}",
                            '0.56494',
                            '0.56494'
                        ],
                        [
                            "eid318",
                            "display",
                            48555,
                            0,
                            "linear",
                            "${PUTIH32}",
                            'none',
                            'block'
                        ],
                        [
                            "eid522",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${PUTIH32}",
                            'block',
                            'none'
                        ],
                        [
                            "eid153",
                            "top",
                            35000,
                            691,
                            "linear",
                            "${Text19}",
                            '294px',
                            '292px'
                        ],
                        [
                            "eid2",
                            "height",
                            0,
                            500,
                            "linear",
                            "${kotak_1}",
                            '0px',
                            '48px'
                        ],
                        [
                            "eid3",
                            "height",
                            500,
                            500,
                            "linear",
                            "${kotak_1}",
                            '48px',
                            '117px'
                        ],
                        [
                            "eid7",
                            "height",
                            1000,
                            1000,
                            "linear",
                            "${kotak_1}",
                            '117px',
                            '148px'
                        ],
                        [
                            "eid715",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Sugen_tek}",
                            'block',
                            'block'
                        ],
                        [
                            "eid275",
                            "left",
                            47305,
                            0,
                            "linear",
                            "${B_ungu2}",
                            '324px',
                            '324px'
                        ],
                        [
                            "eid744",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Fenotipe_}",
                            '190px',
                            '208px'
                        ],
                        [
                            "eid170",
                            "display",
                            39980,
                            0,
                            "linear",
                            "${Text22Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid534",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${Text22Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid587",
                            "display",
                            56375,
                            0,
                            "linear",
                            "${B_ungu5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid278",
                            "display",
                            47305,
                            0,
                            "linear",
                            "${B_ungu3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid525",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${B_ungu3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid570",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${kotak_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid211",
                            "top",
                            44930,
                            820,
                            "linear",
                            "${p23}",
                            '421px',
                            '441px'
                        ],
                        [
                            "eid161",
                            "display",
                            38365,
                            0,
                            "linear",
                            "${panpan2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid537",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${panpan2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid198",
                            "left",
                            41859,
                            547,
                            "linear",
                            "${P4}",
                            '380px',
                            '363px'
                        ],
                        [
                            "eid47",
                            "top",
                            8065,
                            1343,
                            "linear",
                            "${Text5}",
                            '52px',
                            '84px'
                        ],
                        [
                            "eid641",
                            "top",
                            2750,
                            0,
                            "linear",
                            "${PUTIH3}",
                            '2px',
                            '2px'
                        ],
                        [
                            "eid169",
                            "opacity",
                            38365,
                            730,
                            "linear",
                            "${Text20}",
                            '0',
                            '1'
                        ],
                        [
                            "eid511",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${Text20}",
                            '1',
                            '0'
                        ],
                        [
                            "eid332",
                            "opacity",
                            48555,
                            945,
                            "linear",
                            "${PUTIH32}",
                            '0',
                            '1'
                        ],
                        [
                            "eid459",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${PUTIH32}",
                            '1',
                            '0'
                        ],
                        [
                            "eid581",
                            "opacity",
                            55340,
                            1035,
                            "linear",
                            "${gen}",
                            '0',
                            '1'
                        ],
                        [
                            "eid241",
                            "scaleX",
                            47305,
                            0,
                            "linear",
                            "${B_ungu3}",
                            '0.48148',
                            '0.48148'
                        ],
                        [
                            "eid125",
                            "display",
                            31250,
                            0,
                            "linear",
                            "${Ellipse2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid545",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${Ellipse2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid35",
                            "opacity",
                            5000,
                            1795,
                            "linear",
                            "${Text4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid461",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${Text4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid571",
                            "display",
                            53750,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid36",
                            "display",
                            6795,
                            0,
                            "linear",
                            "${Text3Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid564",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${Text3Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid20",
                            "opacity",
                            2750,
                            1165,
                            "linear",
                            "${UNGU}",
                            '0',
                            '1'
                        ],
                        [
                            "eid490",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${UNGU}",
                            '1',
                            '0'
                        ],
                        [
                            "eid475",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${P4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid612",
                            "left",
                            58513,
                            0,
                            "linear",
                            "${Bunga_Putih3}",
                            '237px',
                            '237px'
                        ],
                        [
                            "eid609",
                            "scaleY",
                            58513,
                            0,
                            "linear",
                            "${Bunga_Putih3}",
                            '0.94737',
                            '0.94737'
                        ],
                        [
                            "eid754",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Penampakan2}",
                            '236px',
                            '236px'
                        ],
                        [
                            "eid82",
                            "left",
                            17000,
                            1710,
                            "linear",
                            "${kotak_1Copy}",
                            '286px',
                            '0px'
                        ],
                        [
                            "eid107",
                            "font-size",
                            25250,
                            1250,
                            "linear",
                            "${Text12}",
                            '6px',
                            '21px'
                        ],
                        [
                            "eid77",
                            "left",
                            14593,
                            1407,
                            "linear",
                            "${Text9}",
                            '406px',
                            '412px'
                        ],
                        [
                            "eid34",
                            "opacity",
                            5000,
                            1795,
                            "linear",
                            "${Text4Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid485",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${Text4Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid90",
                            "top",
                            18710,
                            1131,
                            "linear",
                            "${Text10}",
                            '193px',
                            '197px'
                        ],
                        [
                            "eid303",
                            "left",
                            48555,
                            0,
                            "linear",
                            "${Text26}",
                            '359px',
                            '359px'
                        ],
                        [
                            "eid218",
                            "left",
                            46455,
                            725,
                            "linear",
                            "${p21}",
                            '399px',
                            '364px'
                        ],
                        [
                            "eid204",
                            "display",
                            43500,
                            0,
                            "linear",
                            "${p22}",
                            'none',
                            'block'
                        ],
                        [
                            "eid516",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${p22}",
                            'block',
                            'none'
                        ],
                        [
                            "eid145",
                            "left",
                            34000,
                            1000,
                            "linear",
                            "${Text18}",
                            '347px',
                            '420px'
                        ],
                        [
                            "eid102",
                            "display",
                            23655,
                            0,
                            "linear",
                            "${Text11}",
                            'none',
                            'block'
                        ],
                        [
                            "eid551",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${Text11}",
                            'block',
                            'none'
                        ],
                        [
                            "eid134",
                            "opacity",
                            33500,
                            0,
                            "linear",
                            "${Text14Copy}",
                            '1',
                            '1'
                        ],
                        [
                            "eid499",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${Text14Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid287",
                            "opacity",
                            47305,
                            866,
                            "linear",
                            "${B_ungu3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid466",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${B_ungu3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid455",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${panpan2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid197",
                            "top",
                            41859,
                            547,
                            "linear",
                            "${P4}",
                            '401px',
                            '416px'
                        ],
                        [
                            "eid19",
                            "opacity",
                            2750,
                            1165,
                            "linear",
                            "${PUTIH3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid476",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${PUTIH3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid78",
                            "display",
                            16000,
                            0,
                            "linear",
                            "${kotak_1Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid569",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${kotak_1Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid160",
                            "display",
                            35691,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid539",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid203",
                            "top",
                            42906,
                            594,
                            "linear",
                            "${P2}",
                            '400px',
                            '435px'
                        ],
                        [
                            "eid131",
                            "display",
                            32352,
                            0,
                            "linear",
                            "${Text14Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid544",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${Text14Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid599",
                            "scaleY",
                            58053,
                            0,
                            "linear",
                            "${B_ungu7}",
                            '0.87879',
                            '0.87879'
                        ],
                        [
                            "eid575",
                            "left",
                            54510,
                            830,
                            "linear",
                            "${Rectangle2}",
                            '268px',
                            '18px'
                        ],
                        [
                            "eid163",
                            "display",
                            39095,
                            0,
                            "linear",
                            "${Text22}",
                            'none',
                            'block'
                        ],
                        [
                            "eid535",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${Text22}",
                            'block',
                            'none'
                        ],
                        [
                            "eid572",
                            "height",
                            53750,
                            760,
                            "linear",
                            "${Rectangle2}",
                            '19px',
                            '525px'
                        ],
                        [
                            "eid106",
                            "top",
                            25250,
                            1250,
                            "linear",
                            "${Text12}",
                            '191px',
                            '226px'
                        ],
                        [
                            "eid507",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${p24}",
                            '1',
                            '0'
                        ],
                        [
                            "eid825",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Genotipe}",
                            '268px',
                            '268px'
                        ],
                        [
                            "eid137",
                            "opacity",
                            33500,
                            500,
                            "linear",
                            "${Text17}",
                            '0.5317919850349426',
                            '1'
                        ],
                        [
                            "eid504",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${Text17}",
                            '1',
                            '0'
                        ],
                        [
                            "eid209",
                            "left",
                            44136,
                            794,
                            "linear",
                            "${P1}",
                            '380px',
                            '375px'
                        ],
                        [
                            "eid597",
                            "display",
                            57323,
                            0,
                            "linear",
                            "${B_ungu6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid242",
                            "scaleY",
                            47305,
                            0,
                            "linear",
                            "${B_ungu3}",
                            '0.48052',
                            '0.48052'
                        ],
                        [
                            "eid187",
                            "opacity",
                            40924,
                            935,
                            "linear",
                            "${kotak}",
                            '0',
                            '1'
                        ],
                        [
                            "eid458",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${kotak}",
                            '1',
                            '0'
                        ],
                        [
                            "eid188",
                            "opacity",
                            40924,
                            935,
                            "linear",
                            "${Text21}",
                            '0',
                            '1'
                        ],
                        [
                            "eid491",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${Text21}",
                            '1',
                            '0'
                        ],
                        [
                            "eid328",
                            "opacity",
                            48555,
                            945,
                            "linear",
                            "${UNGU3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid512",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${UNGU3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid212",
                            "left",
                            44930,
                            820,
                            "linear",
                            "${p23}",
                            '401px',
                            '390px'
                        ],
                        [
                            "eid63",
                            "opacity",
                            12343,
                            970,
                            "linear",
                            "${EllipseCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid495",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${EllipseCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid64",
                            "display",
                            13313,
                            0,
                            "linear",
                            "${Text8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid556",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${Text8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid330",
                            "opacity",
                            48555,
                            945,
                            "linear",
                            "${Text26}",
                            '0',
                            '1'
                        ],
                        [
                            "eid509",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${Text26}",
                            '1',
                            '0'
                        ],
                        [
                            "eid94",
                            "height",
                            21065,
                            635,
                            "linear",
                            "${panpan}",
                            '30px',
                            '38px'
                        ],
                        [
                            "eid157",
                            "width",
                            35691,
                            1309,
                            "linear",
                            "${Rectangle3}",
                            '12px',
                            '8px'
                        ],
                        [
                            "eid158",
                            "width",
                            37000,
                            1365,
                            "linear",
                            "${Rectangle3}",
                            '8px',
                            '550px'
                        ],
                        [
                            "eid214",
                            "left",
                            45750,
                            705,
                            "linear",
                            "${p24}",
                            '309px',
                            '354px'
                        ],
                        [
                            "eid6",
                            "left",
                            1000,
                            1000,
                            "linear",
                            "${kotak_1}",
                            '272px',
                            '0px'
                        ],
                        [
                            "eid317",
                            "top",
                            48555,
                            0,
                            "linear",
                            "${Text27}",
                            '527px',
                            '527px'
                        ],
                        [
                            "eid253",
                            "scaleX",
                            47305,
                            0,
                            "linear",
                            "${B_ungu4}",
                            '0.48765',
                            '0.48765'
                        ],
                        [
                            "eid300",
                            "left",
                            48555,
                            0,
                            "linear",
                            "${UNGU3}",
                            '296px',
                            '296px'
                        ],
                        [
                            "eid91",
                            "display",
                            19841,
                            0,
                            "linear",
                            "${panpan}",
                            'none',
                            'block'
                        ],
                        [
                            "eid553",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${panpan}",
                            'block',
                            'none'
                        ],
                        [
                            "eid774",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Gen_f2}",
                            '-151px',
                            '-151px'
                        ],
                        [
                            "eid259",
                            "left",
                            47305,
                            0,
                            "linear",
                            "${B_ungu4}",
                            '299px',
                            '299px'
                        ],
                        [
                            "eid496",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${P3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid109",
                            "display",
                            25250,
                            0,
                            "linear",
                            "${Text12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid547",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${Text12}",
                            'block',
                            'none'
                        ],
                        [
                            "eid582",
                            "scaleX",
                            56375,
                            0,
                            "linear",
                            "${B_ungu5}",
                            '0.86831',
                            '0.86831'
                        ],
                        [
                            "eid124",
                            "opacity",
                            30067,
                            1183,
                            "linear",
                            "${Text16}",
                            '0.23699399828910828',
                            '1'
                        ],
                        [
                            "eid506",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${Text16}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13",
                            "opacity",
                            2000,
                            750,
                            "linear",
                            "${Text2}",
                            '0.317918986082077',
                            '1'
                        ],
                        [
                            "eid469",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid229",
                            "scaleX",
                            47305,
                            0,
                            "linear",
                            "${B_ungu2}",
                            '0.53704',
                            '0.53704'
                        ],
                        [
                            "eid297",
                            "top",
                            48555,
                            0,
                            "linear",
                            "${UNGU3}",
                            '514px',
                            '514px'
                        ],
                        [
                            "eid25",
                            "top",
                            2750,
                            0,
                            "linear",
                            "${UNGU}",
                            '2px',
                            '2px'
                        ],
                        [
                            "eid48",
                            "opacity",
                            8065,
                            1343,
                            "linear",
                            "${Text5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid488",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${Text5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid306",
                            "left",
                            48555,
                            0,
                            "linear",
                            "${PUTIH32}",
                            '405px',
                            '405px'
                        ],
                        [
                            "eid208",
                            "top",
                            44136,
                            794,
                            "linear",
                            "${P1}",
                            '400px',
                            '437px'
                        ],
                        [
                            "eid55",
                            "display",
                            11093,
                            0,
                            "linear",
                            "${Text7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid558",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${Text7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid274",
                            "left",
                            47305,
                            0,
                            "linear",
                            "${Bunga_Putih2}",
                            '323px',
                            '323px'
                        ],
                        [
                            "eid116",
                            "display",
                            29000,
                            0,
                            "linear",
                            "${Text15}",
                            'none',
                            'block'
                        ],
                        [
                            "eid548",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${Text15}",
                            'block',
                            'none'
                        ],
                        [
                            "eid608",
                            "scaleX",
                            58513,
                            0,
                            "linear",
                            "${Bunga_Putih3}",
                            '0.9881',
                            '0.9881'
                        ],
                        [
                            "eid593",
                            "scaleY",
                            57323,
                            0,
                            "linear",
                            "${B_ungu6}",
                            '0.91342',
                            '0.91342'
                        ],
                        [
                            "eid331",
                            "opacity",
                            48555,
                            945,
                            "linear",
                            "${Text27}",
                            '0',
                            '1'
                        ],
                        [
                            "eid468",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${Text27}",
                            '1',
                            '0'
                        ],
                        [
                            "eid271",
                            "top",
                            47305,
                            0,
                            "linear",
                            "${Bunga_Putih2}",
                            '437px',
                            '437px'
                        ],
                        [
                            "eid758",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Sugen_tek2}",
                            '268px',
                            '266px'
                        ],
                        [
                            "eid467",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${Text18}",
                            '1',
                            '0'
                        ],
                        [
                            "eid264",
                            "left",
                            47305,
                            0,
                            "linear",
                            "${B_ungu3}",
                            '348px',
                            '348px'
                        ],
                        [
                            "eid200",
                            "top",
                            42406,
                            500,
                            "linear",
                            "${P3}",
                            '400px',
                            '416px'
                        ],
                        [
                            "eid457",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${Text12}",
                            '1',
                            '0'
                        ],
                        [
                            "eid230",
                            "scaleY",
                            47305,
                            0,
                            "linear",
                            "${B_ungu2}",
                            '0.55195',
                            '0.55195'
                        ],
                        [
                            "eid298",
                            "height",
                            48555,
                            0,
                            "linear",
                            "${UNGU3}",
                            '54px',
                            '54px'
                        ],
                        [
                            "eid52",
                            "opacity",
                            9408,
                            1510,
                            "linear",
                            "${Text6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid489",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${Text6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid180",
                            "display",
                            40924,
                            0,
                            "linear",
                            "${Text21Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid531",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${Text21Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid312",
                            "width",
                            48555,
                            0,
                            "linear",
                            "${PUTIH32}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid329",
                            "opacity",
                            48555,
                            945,
                            "linear",
                            "${Text25}",
                            '0',
                            '1'
                        ],
                        [
                            "eid481",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${Text25}",
                            '1',
                            '0'
                        ],
                        [
                            "eid604",
                            "display",
                            58053,
                            0,
                            "linear",
                            "${B_ungu7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid62",
                            "opacity",
                            12343,
                            970,
                            "linear",
                            "${Ellipse}",
                            '0',
                            '1'
                        ],
                        [
                            "eid510",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${Ellipse}",
                            '1',
                            '0'
                        ],
                        [
                            "eid276",
                            "display",
                            47305,
                            0,
                            "linear",
                            "${B_ungu4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid524",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${B_ungu4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid59",
                            "display",
                            12343,
                            0,
                            "linear",
                            "${EllipseCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid557",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${EllipseCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid586",
                            "top",
                            56375,
                            0,
                            "linear",
                            "${B_ungu5}",
                            '74px',
                            '74px'
                        ],
                        [
                            "eid173",
                            "location",
                            39980,
                            944,
                            "linear",
                            "${Text22Copy}",
                            [[456, 332.5, 0, 0, 0, 0,0],[397.87, 336.81, -66.64, 24.02, -71.12, 25.63,58.67],[365.97, 373.51, 10.01, 41.38, 5.93, 24.51,109.99],[471, 394.5, 0, 0, 0, 0,218.61]]
                        ],
                        [
                            "eid178",
                            "display",
                            40924,
                            0,
                            "linear",
                            "${Text21Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid530",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${Text21Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid234",
                            "top",
                            47305,
                            0,
                            "linear",
                            "${B_ungu2}",
                            '388px',
                            '388px'
                        ],
                        [
                            "eid14",
                            "width",
                            2750,
                            0,
                            "linear",
                            "${Text2}",
                            '158px',
                            '158px'
                        ],
                        [
                            "eid756",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Sugen_tek2}",
                            '-146px',
                            '-147px'
                        ],
                        [
                            "eid257",
                            "top",
                            47305,
                            0,
                            "linear",
                            "${B_ungu4}",
                            '410px',
                            '410px'
                        ],
                        [
                            "eid291",
                            "top",
                            48555,
                            0,
                            "linear",
                            "${Text25}",
                            '526px',
                            '526px'
                        ],
                        [
                            "eid147",
                            "height",
                            34000,
                            1000,
                            "linear",
                            "${Text18}",
                            '36px',
                            '31px'
                        ],
                        [
                            "eid602",
                            "top",
                            58053,
                            0,
                            "linear",
                            "${B_ungu7}",
                            '288px',
                            '288px'
                        ],
                        [
                            "eid115",
                            "opacity",
                            27795,
                            1205,
                            "linear",
                            "${Text14}",
                            '0',
                            '1'
                        ],
                        [
                            "eid503",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${Text14}",
                            '1',
                            '0'
                        ],
                        [
                            "eid132",
                            "top",
                            32352,
                            1148,
                            "linear",
                            "${Text14Copy}",
                            '258px',
                            '288px'
                        ],
                        [
                            "eid321",
                            "display",
                            48555,
                            0,
                            "linear",
                            "${Text26}",
                            'none',
                            'block'
                        ],
                        [
                            "eid538",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${Text26}",
                            'block',
                            'none'
                        ],
                        [
                            "eid130",
                            "opacity",
                            31250,
                            1102,
                            "linear",
                            "${Ellipse2Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid492",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${Ellipse2Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid580",
                            "opacity",
                            55340,
                            1035,
                            "linear",
                            "${fentpy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid613",
                            "top",
                            58513,
                            0,
                            "linear",
                            "${Bunga_Putih3}",
                            '401px',
                            '401px'
                        ],
                        [
                            "eid643",
                            "width",
                            0,
                            1000,
                            "linear",
                            "${kotak_1}",
                            '0px',
                            '18px'
                        ],
                        [
                            "eid5",
                            "width",
                            1000,
                            1000,
                            "linear",
                            "${kotak_1}",
                            '18px',
                            '550px'
                        ],
                        [
                            "eid105",
                            "left",
                            25250,
                            1250,
                            "linear",
                            "${Text12}",
                            '337px',
                            '289px'
                        ],
                        [
                            "eid288",
                            "width",
                            48555,
                            0,
                            "linear",
                            "${Text25}",
                            '25px',
                            '25px'
                        ],
                        [
                            "eid166",
                            "opacity",
                            39095,
                            885,
                            "linear",
                            "${Text22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid477",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${Text22}",
                            '1',
                            '0'
                        ],
                        [
                            "eid54",
                            "width",
                            8065,
                            0,
                            "linear",
                            "${Text3Copy}",
                            '278px',
                            '278px'
                        ],
                        [
                            "eid826",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Genotipe}",
                            '15px',
                            '15px'
                        ],
                        [
                            "eid190",
                            "opacity",
                            40924,
                            935,
                            "linear",
                            "${Text21Copy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid465",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${Text21Copy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid584",
                            "left",
                            56375,
                            0,
                            "linear",
                            "${B_ungu5}",
                            '244px',
                            '244px'
                        ],
                        [
                            "eid37",
                            "opacity",
                            6795,
                            1270,
                            "linear",
                            "${Text3Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid483",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${Text3Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid686",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Penampakan}",
                            'none',
                            'block'
                        ],
                        [
                            "eid316",
                            "left",
                            48555,
                            0,
                            "linear",
                            "${Text27}",
                            '390px',
                            '390px'
                        ],
                        [
                            "eid151",
                            "opacity",
                            35000,
                            691,
                            "linear",
                            "${Text19}",
                            '0',
                            '1'
                        ],
                        [
                            "eid508",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${Text19}",
                            '1',
                            '0'
                        ],
                        [
                            "eid472",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${Text9}",
                            '1',
                            '0'
                        ],
                        [
                            "eid118",
                            "opacity",
                            29000,
                            1067,
                            "linear",
                            "${Text15}",
                            '0',
                            '1'
                        ],
                        [
                            "eid487",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${Text15}",
                            '1',
                            '0'
                        ],
                        [
                            "eid150",
                            "display",
                            35000,
                            0,
                            "linear",
                            "${Text19}",
                            'none',
                            'block'
                        ],
                        [
                            "eid540",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${Text19}",
                            'block',
                            'none'
                        ],
                        [
                            "eid777",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Gen_f2}",
                            '442px',
                            '442px'
                        ],
                        [
                            "eid215",
                            "top",
                            45750,
                            705,
                            "linear",
                            "${p24}",
                            '420px',
                            '462px'
                        ],
                        [
                            "eid81",
                            "width",
                            17000,
                            1710,
                            "linear",
                            "${kotak_1Copy}",
                            '10px',
                            '550px'
                        ],
                        [
                            "eid112",
                            "opacity",
                            26500,
                            1295,
                            "linear",
                            "${Text13}",
                            '0',
                            '1'
                        ],
                        [
                            "eid502",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${Text13}",
                            '1',
                            '0'
                        ],
                        [
                            "eid85",
                            "left",
                            13313,
                            1280,
                            "linear",
                            "${Text8}",
                            '261px',
                            '269px'
                        ],
                        [
                            "eid93",
                            "opacity",
                            19841,
                            1224,
                            "linear",
                            "${panpan}",
                            '0',
                            '1'
                        ],
                        [
                            "eid462",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${panpan}",
                            '1',
                            '0'
                        ],
                        [
                            "eid596",
                            "left",
                            57323,
                            0,
                            "linear",
                            "${B_ungu6}",
                            '245px',
                            '245px'
                        ],
                        [
                            "eid795",
                            "top",
                            0,
                            17,
                            "linear",
                            "${Gamet2}",
                            '298px',
                            '302px'
                        ],
                        [
                            "eid42",
                            "display",
                            8065,
                            0,
                            "linear",
                            "${Text5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid561",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${Text5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid207",
                            "display",
                            44136,
                            0,
                            "linear",
                            "${P1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid520",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${P1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid473",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${kotak_1Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid689",
                            "top",
                            0,
                            17,
                            "linear",
                            "${Penampakan}",
                            '96px',
                            '65px'
                        ],
                        [
                            "eid761",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Gamet2}",
                            '-144px',
                            '-147px'
                        ],
                        [
                            "eid31",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${Text4Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid562",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${Text4Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid88",
                            "opacity",
                            18710,
                            1131,
                            "linear",
                            "${Text10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid498",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${Text10}",
                            '1',
                            '0'
                        ],
                        [
                            "eid480",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${P1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid201",
                            "display",
                            42906,
                            0,
                            "linear",
                            "${P2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid519",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${P2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid322",
                            "display",
                            48555,
                            0,
                            "linear",
                            "${Text27}",
                            'none',
                            'block'
                        ],
                        [
                            "eid521",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${Text27}",
                            'block',
                            'none'
                        ],
                        [
                            "eid753",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Penampakan2}",
                            '-146px',
                            '-146px'
                        ],
                        [
                            "eid29",
                            "left",
                            2750,
                            0,
                            "linear",
                            "${PUTIH3}",
                            '383px',
                            '383px'
                        ],
                        [
                            "eid742",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Gamet}",
                            '128px',
                            '128px'
                        ],
                        [
                            "eid15",
                            "display",
                            2750,
                            0,
                            "linear",
                            "${PUTIH3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid566",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${PUTIH3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid741",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Gamet}",
                            '-151px',
                            '-151px'
                        ],
                        [
                            "eid104",
                            "opacity",
                            23655,
                            1595,
                            "linear",
                            "${Text11}",
                            '0',
                            '1'
                        ],
                        [
                            "eid501",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${Text11}",
                            '1',
                            '0'
                        ],
                        [
                            "eid84",
                            "top",
                            13313,
                            1280,
                            "linear",
                            "${Text8}",
                            '84px',
                            '114px'
                        ],
                        [
                            "eid315",
                            "font-size",
                            48555,
                            0,
                            "linear",
                            "${Text27}",
                            '21px',
                            '21px'
                        ],
                        [
                            "eid167",
                            "display",
                            38365,
                            0,
                            "linear",
                            "${Text20}",
                            'none',
                            'block'
                        ],
                        [
                            "eid536",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${Text20}",
                            'block',
                            'none'
                        ],
                        [
                            "eid152",
                            "left",
                            35000,
                            691,
                            "linear",
                            "${Text19}",
                            '454px',
                            '455px'
                        ],
                        [
                            "eid279",
                            "display",
                            47305,
                            0,
                            "linear",
                            "${Bunga_Putih2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid523",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${Bunga_Putih2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid743",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Fenotipe_}",
                            '-169px',
                            '-151px'
                        ],
                        [
                            "eid712",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Sugen_tek}",
                            '-151px',
                            '-151px'
                        ],
                        [
                            "eid576",
                            "display",
                            55340,
                            0,
                            "linear",
                            "${fentpy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid9",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${kotak_1}",
                            'rgba(119,204,91,1.00)',
                            'rgba(119,204,91,1.00)'
                        ],
                        [
                            "eid110",
                            "display",
                            26500,
                            0,
                            "linear",
                            "${Text13}",
                            'none',
                            'block'
                        ],
                        [
                            "eid550",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${Text13}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16",
                            "display",
                            2750,
                            0,
                            "linear",
                            "${UNGU}",
                            'none',
                            'block'
                        ],
                        [
                            "eid567",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${UNGU}",
                            'block',
                            'none'
                        ],
                        [
                            "eid129",
                            "opacity",
                            31250,
                            1102,
                            "linear",
                            "${Ellipse2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid505",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${Ellipse2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid607",
                            "left",
                            58053,
                            460,
                            "linear",
                            "${B_ungu7}",
                            '243px',
                            '237px'
                        ],
                        [
                            "eid68",
                            "opacity",
                            13313,
                            1280,
                            "linear",
                            "${Text8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid463",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${Text8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid30",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${Text4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid563",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${Text4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid51",
                            "top",
                            9408,
                            1510,
                            "linear",
                            "${Text6}",
                            '48px',
                            '83px'
                        ],
                        [
                            "eid479",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${p22}",
                            '1',
                            '0'
                        ],
                        [
                            "eid79",
                            "height",
                            16000,
                            1000,
                            "linear",
                            "${kotak_1Copy}",
                            '10px',
                            '181px'
                        ],
                        [
                            "eid83",
                            "height",
                            17000,
                            1710,
                            "linear",
                            "${kotak_1Copy}",
                            '181px',
                            '173px'
                        ],
                        [
                            "eid213",
                            "display",
                            45750,
                            0,
                            "linear",
                            "${p24}",
                            'none',
                            'block'
                        ],
                        [
                            "eid514",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${p24}",
                            'block',
                            'none'
                        ],
                        [
                            "eid159",
                            "left",
                            37000,
                            1365,
                            "linear",
                            "${Rectangle3}",
                            '284px',
                            '0px'
                        ],
                        [
                            "eid277",
                            "display",
                            47305,
                            0,
                            "linear",
                            "${B_ungu2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid528",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${B_ungu2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid99",
                            "opacity",
                            21700,
                            1300,
                            "linear",
                            "${UNGU2}",
                            '0',
                            '0.60240921521761'
                        ],
                        [
                            "eid101",
                            "opacity",
                            23000,
                            655,
                            "linear",
                            "${UNGU2}",
                            '0.6024090051651001',
                            '1'
                        ],
                        [
                            "eid500",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${UNGU2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid310",
                            "height",
                            48555,
                            0,
                            "linear",
                            "${PUTIH32}",
                            '54px',
                            '54px'
                        ],
                        [
                            "eid313",
                            "top",
                            48555,
                            0,
                            "linear",
                            "${PUTIH32}",
                            '515px',
                            '515px'
                        ],
                        [
                            "eid119",
                            "left",
                            28000,
                            0,
                            "linear",
                            "${Text14}",
                            '332px',
                            '332px'
                        ],
                        [
                            "eid95",
                            "display",
                            21700,
                            0,
                            "linear",
                            "${UNGU2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid552",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${UNGU2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid598",
                            "scaleX",
                            58053,
                            0,
                            "linear",
                            "${B_ungu7}",
                            '0.91358',
                            '0.91358'
                        ],
                        [
                            "eid301",
                            "font-size",
                            48555,
                            0,
                            "linear",
                            "${Text26}",
                            '24px',
                            '24px'
                        ],
                        [
                            "eid121",
                            "left",
                            29000,
                            0,
                            "linear",
                            "${Text15}",
                            '347px',
                            '347px'
                        ],
                        [
                            "eid11",
                            "font-size",
                            2000,
                            0,
                            "linear",
                            "${Text2}",
                            '22px',
                            '22px'
                        ],
                        [
                            "eid714",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Sugen_tek}",
                            '94px',
                            '94px'
                        ],
                        [
                            "eid155",
                            "height",
                            35691,
                            1309,
                            "linear",
                            "${Rectangle3}",
                            '19px',
                            '210px'
                        ],
                        [
                            "eid133",
                            "left",
                            32352,
                            1148,
                            "linear",
                            "${Text14Copy}",
                            '332px',
                            '277px'
                        ],
                        [
                            "eid4",
                            "top",
                            500,
                            500,
                            "linear",
                            "${kotak_1}",
                            '69px',
                            '0px'
                        ],
                        [
                            "eid28",
                            "left",
                            2750,
                            0,
                            "linear",
                            "${UNGU}",
                            '246px',
                            '246px'
                        ],
                        [
                            "eid71",
                            "display",
                            14593,
                            0,
                            "linear",
                            "${Text9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid555",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${Text9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid199",
                            "left",
                            42406,
                            500,
                            "linear",
                            "${P3}",
                            '330px',
                            '349px'
                        ],
                        [
                            "eid595",
                            "top",
                            57323,
                            0,
                            "linear",
                            "${B_ungu6}",
                            '181px',
                            '181px'
                        ],
                        [
                            "eid186",
                            "opacity",
                            40924,
                            935,
                            "linear",
                            "${Text21Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid474",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${Text21Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid319",
                            "display",
                            48555,
                            0,
                            "linear",
                            "${Text25}",
                            'none',
                            'block'
                        ],
                        [
                            "eid527",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${Text25}",
                            'block',
                            'none'
                        ],
                        [
                            "eid165",
                            "location",
                            39095,
                            885,
                            "linear",
                            "${Text22}",
                            [[291.5, 336.5, 0, 0, 0, 0,0],[345.83, 370.94, -21.24, 46.86, -22.24, 49.08,68.13],[262.5, 400.5, 0, 0, 0, 0,157.77]]
                        ],
                        [
                            "eid113",
                            "display",
                            27795,
                            0,
                            "linear",
                            "${Text14}",
                            'none',
                            'block'
                        ],
                        [
                            "eid549",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${Text14}",
                            'block',
                            'none'
                        ],
                        [
                            "eid690",
                            "left",
                            0,
                            17,
                            "linear",
                            "${Penampakan}",
                            '-181px',
                            '-147px'
                        ],
                        [
                            "eid156",
                            "top",
                            35691,
                            1309,
                            "linear",
                            "${Rectangle3}",
                            '449px',
                            '358px'
                        ],
                        [
                            "eid49",
                            "display",
                            9408,
                            0,
                            "linear",
                            "${Text6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid560",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${Text6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid493",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${P2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid135",
                            "display",
                            33500,
                            0,
                            "linear",
                            "${Text17}",
                            'none',
                            'block'
                        ],
                        [
                            "eid542",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${Text17}",
                            'block',
                            'none'
                        ],
                        [
                            "eid122",
                            "display",
                            30067,
                            0,
                            "linear",
                            "${Text16}",
                            'none',
                            'block'
                        ],
                        [
                            "eid546",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${Text16}",
                            'block',
                            'none'
                        ],
                        [
                            "eid614",
                            "display",
                            58513,
                            0,
                            "linear",
                            "${Bunga_Putih3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid577",
                            "display",
                            55340,
                            0,
                            "linear",
                            "${gen}",
                            'none',
                            'block'
                        ],
                        [
                            "eid216",
                            "display",
                            46455,
                            0,
                            "linear",
                            "${p21}",
                            'none',
                            'block'
                        ],
                        [
                            "eid513",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${p21}",
                            'block',
                            'none'
                        ],
                        [
                            "eid284",
                            "opacity",
                            47305,
                            866,
                            "linear",
                            "${B_ungu4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid470",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${B_ungu4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid80",
                            "top",
                            16000,
                            1000,
                            "linear",
                            "${kotak_1Copy}",
                            '264px',
                            '171px'
                        ],
                        [
                            "eid320",
                            "display",
                            48555,
                            0,
                            "linear",
                            "${UNGU3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid526",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${UNGU3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid46",
                            "left",
                            8065,
                            0,
                            "linear",
                            "${Text5}",
                            '263px',
                            '263px'
                        ],
                        [
                            "eid126",
                            "display",
                            31250,
                            0,
                            "linear",
                            "${Ellipse2Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid543",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${Ellipse2Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid148",
                            "width",
                            34000,
                            1000,
                            "linear",
                            "${Text18}",
                            '35px',
                            '32px'
                        ],
                        [
                            "eid286",
                            "opacity",
                            47305,
                            866,
                            "linear",
                            "${Bunga_Putih2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid484",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${Bunga_Putih2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid263",
                            "top",
                            47305,
                            0,
                            "linear",
                            "${B_ungu3}",
                            '412px',
                            '412px'
                        ],
                        [
                            "eid202",
                            "left",
                            42906,
                            594,
                            "linear",
                            "${P2}",
                            '330px',
                            '325px'
                        ],
                        [
                            "eid285",
                            "opacity",
                            47305,
                            866,
                            "linear",
                            "${B_ungu2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid456",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${B_ungu2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid478",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${p21}",
                            '1',
                            '0'
                        ],
                        [
                            "eid189",
                            "opacity",
                            40924,
                            935,
                            "linear",
                            "${Text21Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid464",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${Text21Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid205",
                            "left",
                            43500,
                            636,
                            "linear",
                            "${p22}",
                            '308px',
                            '338px'
                        ],
                        [
                            "eid10",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${Text2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid568",
                            "display",
                            52518,
                            0,
                            "linear",
                            "${Text2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid460",
                            "opacity",
                            51750,
                            768,
                            "linear",
                            "${p23}",
                            '1',
                            '0'
                        ],
                            [ "eid334", "trigger", 47305, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${B_ungu2}', [] ] ],
                            [ "eid335", "trigger", 47305, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${B_ungu3}', [] ] ],
                            [ "eid333", "trigger", 47305, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Bunga_Putih2}', [] ] ],
                            [ "eid336", "trigger", 47305, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${B_ungu4}', [] ] ],
                            [ "eid798", "trigger", 52069, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${Sugen_tek}', [] ] ],
                            [ "eid802", "trigger", 52069, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${Penampakan}', [] ] ],
                            [ "eid827", "trigger", 52069, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${Gen_f2}', [] ] ],
                            [ "eid797", "trigger", 52069, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${Gamet}', [] ] ],
                            [ "eid801", "trigger", 52069, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${Gen_R_P}', [] ] ],
                            [ "eid796", "trigger", 52069, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${Fenotipe_}', [] ] ],
                            [ "eid800", "trigger", 52069, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${Sugen_tek2}', [] ] ],
                            [ "eid828", "trigger", 52069, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${jantan}', [] ] ],
                            [ "eid799", "trigger", 52069, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${Penampakan2}', [] ] ],
                            [ "eid829", "trigger", 52069, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${betina}', [] ] ],
                            [ "eid803", "trigger", 52069, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${Gamet2}', [] ] ],
                            [ "eid615", "trigger", 56375, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${B_ungu5}', [] ] ],
                            [ "eid616", "trigger", 57323, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${B_ungu6}', [] ] ],
                            [ "eid618", "trigger", 58513, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Bunga_Putih3}', [] ] ]
                    ]
                }
            },
            "Generasi_P": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['137px', '15px', '4px', '10px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(143,236,145,1.00)']
                        },
                        {
                            type: 'rect',
                            rect: ['102px', '15px', '18px', '142px', 'auto', 'auto'],
                            id: 'Rectangle4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(143,236,145,1)']
                        },
                        {
                            rect: ['0px', '0px', '114px', '28px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [19, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', ''],
                            id: 'Text23',
                            text: 'Parental disingkat P , induk atau orangtua atau tetua',
                            display: 'none',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '141px', '28px']
                        }
                    }
                },
                timeline: {
                    duration: 8658,
                    autoPlay: false,
                    data: [
                        [
                            "eid633",
                            "left",
                            2750,
                            3173,
                            "linear",
                            "${Rectangle4}",
                            '102px',
                            '-5px'
                        ],
                        [
                            "eid636",
                            "top",
                            5923,
                            2735,
                            "linear",
                            "${Rectangle4}",
                            '15px',
                            '-8px'
                        ],
                        [
                            "eid630",
                            "left",
                            0,
                            2750,
                            "linear",
                            "${RoundRect}",
                            '137px',
                            '104px'
                        ],
                        [
                            "eid635",
                            "height",
                            5923,
                            2735,
                            "linear",
                            "${Rectangle4}",
                            '10px',
                            '142px'
                        ],
                        [
                            "eid631",
                            "width",
                            0,
                            2750,
                            "linear",
                            "${RoundRect}",
                            '4px',
                            '37px'
                        ],
                        [
                            "eid628",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text23}",
                            'none',
                            'none'
                        ],
                        [
                            "eid637",
                            "display",
                            8658,
                            0,
                            "linear",
                            "${Text23}",
                            'none',
                            'block'
                        ],
                        [
                            "eid632",
                            "display",
                            2750,
                            0,
                            "linear",
                            "${Rectangle4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid634",
                            "width",
                            2750,
                            3173,
                            "linear",
                            "${Rectangle4}",
                            '18px',
                            '125px'
                        ]
                    ]
                }
            },
            "Gen_R_P": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['152px', '0px', '6px', '6px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(119,204,91,1)']
                        },
                        {
                            rect: ['0px', '0px', '135px', '83px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle8',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(119,204,91,1)'],
                            c: [
                            {
                                rect: ['3px', '5px', '132px', '52px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(0,0,0,1)', '900', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                                align: 'left',
                                id: 'Text24',
                                text: 'Parental disingkat P berarti induk atau orangtua atau tetua',
                                display: 'none',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '158px', '57px']
                        }
                    }
                },
                timeline: {
                    duration: 1637,
                    autoPlay: false,
                    data: [
                        [
                            "eid658",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid659",
                            "display",
                            65,
                            0,
                            "linear",
                            "${Rectangle6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid661",
                            "width",
                            65,
                            742,
                            "linear",
                            "${Rectangle6}",
                            '6px',
                            '158px'
                        ],
                        [
                            "eid673",
                            "display",
                            1637,
                            0,
                            "linear",
                            "${Text24}",
                            'none',
                            'block'
                        ],
                        [
                            "eid672",
                            "top",
                            0,
                            65,
                            "linear",
                            "${Rectangle6}",
                            '18px',
                            '0px'
                        ],
                        [
                            "eid675",
                            "width",
                            1637,
                            0,
                            "linear",
                            "${Text24}",
                            '132px',
                            '132px'
                        ],
                        [
                            "eid660",
                            "left",
                            65,
                            742,
                            "linear",
                            "${Rectangle6}",
                            '152px',
                            '0px'
                        ],
                        [
                            "eid669",
                            "display",
                            806,
                            0,
                            "linear",
                            "${Rectangle8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid670",
                            "height",
                            806,
                            831,
                            "linear",
                            "${Rectangle8}",
                            '6px',
                            '83px'
                        ]
                    ]
                }
            },
            "Penampakan": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['152px', '0px', '6px', '6px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(119,204,91,1)']
                        },
                        {
                            rect: ['0px', '0px', '135px', '41px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle8',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(119,204,91,1)'],
                            c: [
                            {
                                rect: ['3px', '5px', '132px', '30px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(0,0,0,1)', '900', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                                align: 'left',
                                id: 'Text24',
                                text: 'suatu yang dilihat oleh  kasat mata',
                                display: 'none',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '158px', '35px']
                        }
                    }
                },
                timeline: {
                    duration: 1637,
                    autoPlay: false,
                    data: [
                        [
                            "eid681",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid682",
                            "display",
                            65,
                            0,
                            "linear",
                            "${Rectangle6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid684",
                            "width",
                            65,
                            742,
                            "linear",
                            "${Rectangle6}",
                            '6px',
                            '158px'
                        ],
                        [
                            "eid680",
                            "top",
                            0,
                            65,
                            "linear",
                            "${Rectangle6}",
                            '18px',
                            '0px'
                        ],
                        [
                            "eid683",
                            "left",
                            65,
                            742,
                            "linear",
                            "${Rectangle6}",
                            '152px',
                            '0px'
                        ],
                        [
                            "eid677",
                            "height",
                            806,
                            831,
                            "linear",
                            "${Rectangle8}",
                            '6px',
                            '41px'
                        ],
                        [
                            "eid679",
                            "width",
                            1637,
                            0,
                            "linear",
                            "${Text24}",
                            '132px',
                            '132px'
                        ],
                        [
                            "eid678",
                            "display",
                            1637,
                            0,
                            "linear",
                            "${Text24}",
                            'none',
                            'block'
                        ],
                        [
                            "eid676",
                            "display",
                            806,
                            0,
                            "linear",
                            "${Rectangle8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid685",
                            "height",
                            1637,
                            0,
                            "linear",
                            "${Text24}",
                            '30px',
                            '30px'
                        ]
                    ]
                }
            },
            "Sugen_tek": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['152px', '0px', '6px', '6px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle6Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(119,204,91,1)']
                        },
                        {
                            rect: ['0px', '0px', '135px', '135px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle8Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(119,204,91,1)'],
                            c: [
                            {
                                rect: ['3px', '5px', '132px', '52px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(0,0,0,1)', '900', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                                align: 'left',
                                id: 'Text24Copy',
                                text: 'suatu susunan genetik/genotipe suatu sifat yang dikandung individu yang menyebabkan munculnya sifat pada fenotipe',
                                display: 'none',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '158px', '57px']
                        }
                    }
                },
                timeline: {
                    duration: 1637,
                    autoPlay: false,
                    data: [
                        [
                            "eid747",
                            "width",
                            1637,
                            0,
                            "linear",
                            "${Text24Copy}",
                            '126px',
                            '126px'
                        ],
                        [
                            "eid748",
                            "width",
                            1637,
                            0,
                            "linear",
                            "${Text24Copy}",
                            '126px',
                            '126px'
                        ],
                        [
                            "eid700",
                            "display",
                            806,
                            0,
                            "linear",
                            "${Rectangle8Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid707",
                            "left",
                            65,
                            742,
                            "linear",
                            "${Rectangle6Copy}",
                            '152px',
                            '0px'
                        ],
                        [
                            "eid704",
                            "top",
                            0,
                            65,
                            "linear",
                            "${Rectangle6Copy}",
                            '18px',
                            '0px'
                        ],
                        [
                            "eid701",
                            "height",
                            806,
                            831,
                            "linear",
                            "${Rectangle8Copy}",
                            '6px',
                            '135px'
                        ],
                        [
                            "eid708",
                            "width",
                            65,
                            742,
                            "linear",
                            "${Rectangle6Copy}",
                            '6px',
                            '158px'
                        ],
                        [
                            "eid702",
                            "display",
                            1637,
                            0,
                            "linear",
                            "${Text24Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid705",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle6Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid706",
                            "display",
                            65,
                            0,
                            "linear",
                            "${Rectangle6Copy}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "Gamet": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['152px', '0px', '6px', '6px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle6Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(119,204,91,1)']
                        },
                        {
                            rect: ['0px', '0px', '135px', '83px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle8Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(119,204,91,1)'],
                            c: [
                            {
                                rect: ['3px', '0px', '132px', '52px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(0,0,0,1)', '900', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                                align: 'left',
                                id: 'Text24Copy2',
                                text: 'suatu yang diproduksi oleh organisme untuk tujuan reproduksi seksual',
                                display: 'none',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '158px', '57px']
                        }
                    }
                },
                timeline: {
                    duration: 1637,
                    autoPlay: false,
                    data: [
                        [
                            "eid724",
                            "width",
                            65,
                            742,
                            "linear",
                            "${Rectangle6Copy2}",
                            '6px',
                            '158px'
                        ],
                        [
                            "eid717",
                            "height",
                            806,
                            831,
                            "linear",
                            "${Rectangle8Copy2}",
                            '6px',
                            '83px'
                        ],
                        [
                            "eid719",
                            "width",
                            1637,
                            0,
                            "linear",
                            "${Text24Copy2}",
                            '132px',
                            '132px'
                        ],
                        [
                            "eid723",
                            "left",
                            65,
                            742,
                            "linear",
                            "${Rectangle6Copy2}",
                            '152px',
                            '0px'
                        ],
                        [
                            "eid718",
                            "display",
                            1637,
                            0,
                            "linear",
                            "${Text24Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid750",
                            "top",
                            1637,
                            0,
                            "linear",
                            "${Text24Copy2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid720",
                            "top",
                            0,
                            65,
                            "linear",
                            "${Rectangle6Copy2}",
                            '18px',
                            '0px'
                        ],
                        [
                            "eid716",
                            "display",
                            806,
                            0,
                            "linear",
                            "${Rectangle8Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid721",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle6Copy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid722",
                            "display",
                            65,
                            0,
                            "linear",
                            "${Rectangle6Copy2}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "Fenotipe_": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['152px', '0px', '6px', '6px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle6Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(119,204,91,1)']
                        },
                        {
                            rect: ['0px', '0px', '135px', '117px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle8Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(119,204,91,1)'],
                            c: [
                            {
                                rect: ['3px', '5px', '132px', '52px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(0,0,0,1)', '900', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                                align: 'left',
                                id: 'Text24Copy3',
                                text: 'Sifat lahiriah yang merupakan bentuk luar yang dapat dilihat atau diamati<br>F1 = Keturunan pertama',
                                display: 'none',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '158px', '57px']
                        }
                    }
                },
                timeline: {
                    duration: 1637,
                    autoPlay: false,
                    data: [
                        [
                            "eid733",
                            "width",
                            65,
                            742,
                            "linear",
                            "${Rectangle6Copy3}",
                            '6px',
                            '158px'
                        ],
                        [
                            "eid730",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle6Copy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid731",
                            "display",
                            65,
                            0,
                            "linear",
                            "${Rectangle6Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid725",
                            "display",
                            806,
                            0,
                            "linear",
                            "${Rectangle8Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid726",
                            "height",
                            806,
                            831,
                            "linear",
                            "${Rectangle8Copy3}",
                            '6px',
                            '117px'
                        ],
                        [
                            "eid728",
                            "width",
                            1637,
                            0,
                            "linear",
                            "${Text24Copy3}",
                            '132px',
                            '132px'
                        ],
                        [
                            "eid763",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text24Copy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid727",
                            "display",
                            1637,
                            0,
                            "linear",
                            "${Text24Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid732",
                            "left",
                            65,
                            742,
                            "linear",
                            "${Rectangle6Copy3}",
                            '152px',
                            '0px'
                        ],
                        [
                            "eid729",
                            "top",
                            0,
                            65,
                            "linear",
                            "${Rectangle6Copy3}",
                            '18px',
                            '0px'
                        ]
                    ]
                }
            },
            "Gen_f2": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['152px', '0px', '6px', '6px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle6Copy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(119,204,91,1)']
                        },
                        {
                            rect: ['0px', '0px', '135px', '109px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle8Copy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(119,204,91,1)'],
                            c: [
                            {
                                rect: ['3px', '5px', '132px', '52px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(0,0,0,1)', '900', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                                align: 'left',
                                id: 'Text24Copy4',
                                text: 'Sifat lahiriah yang merupakan bentuk luar yang dapat dilihat atau diamati<br>F2 = Keturunan kedua',
                                display: 'none',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '158px', '57px']
                        }
                    }
                },
                timeline: {
                    duration: 1637,
                    autoPlay: false,
                    data: [
                        [
                            "eid773",
                            "width",
                            65,
                            742,
                            "linear",
                            "${Rectangle6Copy4}",
                            '6px',
                            '158px'
                        ],
                        [
                            "eid765",
                            "height",
                            806,
                            831,
                            "linear",
                            "${Rectangle8Copy4}",
                            '6px',
                            '109px'
                        ],
                        [
                            "eid764",
                            "display",
                            806,
                            0,
                            "linear",
                            "${Rectangle8Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid770",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle6Copy4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid771",
                            "display",
                            65,
                            0,
                            "linear",
                            "${Rectangle6Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid769",
                            "top",
                            0,
                            65,
                            "linear",
                            "${Rectangle6Copy4}",
                            '18px',
                            '0px'
                        ],
                        [
                            "eid772",
                            "left",
                            65,
                            742,
                            "linear",
                            "${Rectangle6Copy4}",
                            '152px',
                            '0px'
                        ],
                        [
                            "eid766",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text24Copy4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid767",
                            "display",
                            1637,
                            0,
                            "linear",
                            "${Text24Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid768",
                            "width",
                            1637,
                            0,
                            "linear",
                            "${Text24Copy4}",
                            '132px',
                            '132px'
                        ]
                    ]
                }
            },
            "betina": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '-1px', '127px', '0px', 'auto', 'auto'],
                            id: 'Rectangle4Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(170,241,147,1.00)'],
                            c: [
                            {
                                rect: ['0px', '1px', '127px', '57px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(0,0,0,1)', '800', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                                align: 'left',
                                id: 'Text23Copy',
                                text: 'gamet yang dihasilkan dari sel jantan',
                                display: 'none',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '127px', '57px']
                        }
                    }
                },
                timeline: {
                    duration: 1121,
                    autoPlay: false,
                    data: [
                        [
                            "eid789",
                            "top",
                            0,
                            1121,
                            "linear",
                            "${Rectangle4Copy}",
                            '-1px',
                            '37px'
                        ],
                        [
                            "eid784",
                            "width",
                            0,
                            603,
                            "linear",
                            "${Rectangle4Copy}",
                            '0px',
                            '127px'
                        ],
                        [
                            "eid785",
                            "display",
                            1121,
                            0,
                            "linear",
                            "${Text23Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid783",
                            "height",
                            603,
                            518,
                            "linear",
                            "${Rectangle4Copy}",
                            '0px',
                            '63px'
                        ],
                        [
                            "eid788",
                            "left",
                            0,
                            1121,
                            "linear",
                            "${Rectangle4Copy}",
                            '0px',
                            '98px'
                        ]
                    ]
                }
            },
            "jantan": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '368px', '127px', '0px', 'auto', 'auto'],
                            id: 'Rectangle4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(170,241,147,1.00)'],
                            c: [
                            {
                                rect: ['0px', '1px', '127px', '57px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(0,0,0,1)', '800', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                                align: 'left',
                                id: 'Text23',
                                text: 'gamet yang dihasilkan dari sel betina',
                                display: 'none',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 1121,
                    autoPlay: false,
                    data: [
                        [
                            "eid793",
                            "left",
                            0,
                            1121,
                            "linear",
                            "${Rectangle4}",
                            '0px',
                            '64px'
                        ],
                        [
                            "eid791",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle4}",
                            '368px',
                            '368px'
                        ],
                        [
                            "eid794",
                            "top",
                            1121,
                            0,
                            "linear",
                            "${Rectangle4}",
                            '368px',
                            '368px'
                        ],
                        [
                            "eid782",
                            "display",
                            1121,
                            0,
                            "linear",
                            "${Text23}",
                            'none',
                            'block'
                        ],
                        [
                            "eid781",
                            "height",
                            603,
                            518,
                            "linear",
                            "${Rectangle4}",
                            '0px',
                            '63px'
                        ],
                        [
                            "eid780",
                            "width",
                            0,
                            603,
                            "linear",
                            "${Rectangle4}",
                            '0px',
                            '127px'
                        ]
                    ]
                }
            },
            "Phenytp": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['196px', '0px', '0px', '11px', 'auto', 'auto'],
                            id: 'Rectangle6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(119,204,91,1)']
                        },
                        {
                            rect: ['0px', '0px', '144px', '6px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle7',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(119,204,91,1)'],
                            c: [
                            {
                                rect: ['16px', '11px', '116px', '132px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '800', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                                align: 'left',
                                id: 'Text24',
                                text: 'bentuk yg diamati sebenarnya dari sifat',
                                display: 'none',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '144px', '143px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid811",
                            "display",
                            500,
                            0,
                            "linear",
                            "${Rectangle7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid806",
                            "width",
                            0,
                            101,
                            "linear",
                            "${Rectangle6}",
                            '0px',
                            '10px'
                        ],
                        [
                            "eid808",
                            "width",
                            101,
                            399,
                            "linear",
                            "${Rectangle6}",
                            '10px',
                            '206px'
                        ],
                        [
                            "eid833",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${Text24}",
                            'none',
                            'block'
                        ],
                        [
                            "eid807",
                            "left",
                            0,
                            500,
                            "linear",
                            "${Rectangle6}",
                            '196px',
                            '0px'
                        ],
                        [
                            "eid814",
                            "height",
                            500,
                            500,
                            "linear",
                            "${Rectangle7}",
                            '6px',
                            '152px'
                        ],
                        [
                            "eid809",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle6}",
                            '11px',
                            '11px'
                        ],
                        [
                            "eid810",
                            "height",
                            500,
                            0,
                            "linear",
                            "${Rectangle6}",
                            '11px',
                            '11px'
                        ]
                    ]
                }
            },
            "Genotipe": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-10px', '0px', '135px', '99px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle8',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(119,204,91,1)'],
                            c: [
                            {
                                rect: ['10px', '0px', '127px', '99px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '800', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                                align: 'left',
                                id: 'Text28',
                                text: 'DNA RNA sifat organisme',
                                display: 'none',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '109px', '57px']
                        }
                    }
                },
                timeline: {
                    duration: 1403,
                    autoPlay: false,
                    data: [
                        [
                            "eid820",
                            "height",
                            250,
                            611,
                            "linear",
                            "${Rectangle8}",
                            '0px',
                            '9px'
                        ],
                        [
                            "eid821",
                            "height",
                            861,
                            542,
                            "linear",
                            "${Rectangle8}",
                            '9px',
                            '99px'
                        ],
                        [
                            "eid830",
                            "display",
                            1403,
                            0,
                            "linear",
                            "${Text28}",
                            'none',
                            'block'
                        ],
                        [
                            "eid824",
                            "width",
                            250,
                            1153,
                            "linear",
                            "${Rectangle8}",
                            '103px',
                            '135px'
                        ],
                        [
                            "eid831",
                            "width",
                            1403,
                            0,
                            "linear",
                            "${Text28}",
                            '127px',
                            '127px'
                        ],
                        [
                            "eid832",
                            "height",
                            1403,
                            0,
                            "linear",
                            "${Text28}",
                            '99px',
                            '99px'
                        ],
                        [
                            "eid822",
                            "top",
                            250,
                            1153,
                            "linear",
                            "${Rectangle8}",
                            '0px',
                            '-48px'
                        ],
                        [
                            "eid823",
                            "left",
                            250,
                            1153,
                            "linear",
                            "${Rectangle8}",
                            '-10px',
                            '-34px'
                        ],
                        [
                            "eid815",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Rectangle8}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "Home_pa": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '681px', '556px', 'auto', 'auto'],
                            id: 'Rectangle11',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(119,204,91,1)']
                        },
                        {
                            id: 'Capturezxzx',
                            type: 'image',
                            rect: ['34px', '17px', '598px', '529px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Capturezxzx.jpg', '0px', '0px']
                        },
                        {
                            rect: ['265px', '58px', '129px', '75px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', '800', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', ''],
                            id: 'Text29',
                            text: 'klik untuk<br>memulai lagi<br>dari awal',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['177px', '144px', '101px', '75px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '800', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', ''],
                            id: 'Text30',
                            text: 'klik untuk<br>mulai',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['51px', '126px', '73px', '75px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '800', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            id: 'Text31',
                            text: 'klik untuk<br>pause',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['75px', '403px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '800', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                            id: 'Text32',
                            text: 'klik untuk<br>melihat<br>penjelasan<br>text',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '681px', '556px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("coba_baru_edgeActions.js");
})("EDGE-112388943");
