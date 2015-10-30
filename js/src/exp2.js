var exp2={
    stepTips:{
        1:"1、仪器组成介绍",
        2:"2、环向变形器",
        3:"3、轴向应变计",
        4:"4、胶套、压块及岩石试件",
        5:"5、测试附件安装",
        6:"6、传感器连接",
        7:"7、打开控制器和计算机电源",
        8:"8、打开站台管理软件",
        9:"9、选择岩石三轴实验站台",
        10:"10、打开实验方案设置窗口",
        11:"11、加载模式及速度",
        12:"12、需记录参数及采样速率",
        13:"13、保存路径、形式和格式",
        14:"14、打开其他窗口",
        15:"15、力-位移曲线显示窗口",
        16:"16、打开手动控制窗口",
        17:"17、打开实验保护设置窗口",
        18:"18、载荷清零",
        19:"19、打开液压源",
        20:"20、施加预载荷",
        21:"21、围压腔下落并固定",
        22:"22、注油",
        23:"23、注油",
        24:"24、放气",
        25:"25、输入围压",
        26:"26、设置参数",
        27:"27、设置保护及力-位移曲线显示",
        28:"28、自动控制，开始实验",
        29:"29、观察实验曲线",
        30:"30、打开手动控制窗口",
        31:"31、放油",
        32:"32、操作面板",
        33:"33、围压仓升起",
        34:"34、取出试件",
        35:"35、取下试件",
        36:"36、取出岩石"
    },
    setStepTip:function(index){
        $("#stepTipContent").text(this.stepTips[index]);
    },
    animated:function(){
        var me=this;
        $(".animate").animate({
            "opacity":0
        },600,function(){
            $(".animate").css("opacity",1);
            me.animated();
        });
    },
    isDown:false,
    lastX: 0,
    drag:function(){
        //left,最小15，最大300，divice的bottom最大20，最小-100
        var me=this;
        $("#slider").mousedown(function(event){
            if(!$(this).hasClass("error")){
                me.isDown=true;
                me.lastX=event.pageX;
            }
        });
        $(window).mousemove(function(event){
            var d=event.pageX-me.lastX;
            var lastLeft=parseInt($("#slider").css("left"));
            var lastBottom=parseInt($("#device").css("bottom"));
            if(me.isDown){
                if(lastLeft+d<=300&&lastLeft+d>=15){
                    $("#slider").css("left",lastLeft+d+"px");
                }
                if(lastBottom+d<=20&&lastBottom+d>=-100){
                    $("#device").css("bottom",lastBottom+d+"px");
                }

                if(lastBottom+d>=20){
                    $("#slider").addClass("error");
                    me.isDown=false;
                    $("#step20ControlModel1").remove();
                    $("#step20ControlModel2").removeClass("hidden");
                    me.unDrag();
                }

                me.lastX=event.pageX;
            }

            return false;
        });
        $(window).mouseup(function(){
            me.isDown=false;
        });
    },
    drag1:function(){
        //
        var me=this;
        $("#step34Slider").mousedown(function(event){
            me.isDown=true;
            me.lastX=event.pageX;
        });
        $(window).mousemove(function(event){
            var d=event.pageX-me.lastX;
            var lastLeft=parseInt($("#step34Slider").css("left"));
            var lastBottom=parseInt($("#step34Device").css("bottom"));
            if(me.isDown){
                console.log(d);
                if(d<=0){
                    if(lastLeft+d>=15){
                        $("#step34Slider").css("left",lastLeft+d+"px");
                    }

                    if(lastBottom+d>=-100){
                        $("#step34Device").css("bottom",lastBottom+d+"px");
                    }


                    if(lastBottom+d<=-100){
                        me.isDown=false;
                        $("#step34ControlModel1").remove();
                        $("#step34ControlModel2").removeClass("hidden");
                        $("#step34Ctrl2").removeClass("hidden");
                        me.unDrag1();
                    }
                }

                me.lastX=event.pageX;
            }

            return false;
        });
        $(window).mouseup(function(){
            me.isDown=false;
        });
    },
    unDrag:function(){
        $("#slider").unbind("mousedown");
        $(window).unbind("mousemove");
        $(window).unbind("mouseup");
        this.isDown=false;
        this.lastX=0;
    },
    unDrag1:function(){
        $("#step34Slider").unbind("mousedown");
        $(window).unbind("mousemove");
        $(window).unbind("mouseup");
        this.isDown=false;
        this.lastX=0;
    }
};
$(document).ready(function(){

    $("#menu a[data-page-name='"+pageName+"']").addClass("active");
    exp2.setStepTip(1);
    exp2.animated();

    $("#step1Ctrl").click(function(){
        $(".step1").remove();
        $(".step2Ctrl1,.step2Ctrl2,.step2Image1,.step2Image2").removeClass("hidden");
        exp2.setStepTip(2);
    });

    $("#step2Ctrl1").click(function(){
        $(this).remove();
        if($("#step2Ctrl2").length==0){
            $("#step2Ctrl3").removeClass("hidden");
            $("#step2Image3").removeClass("hidden");
            $("#step2Ctrl4").removeClass("hidden");
            $("#step2Image4").removeClass("hidden");
        }
    });
    $("#step2Ctrl2").click(function(){
        $(this).remove();
        if($("#step2Ctrl1").length==0){
            $("#step2Ctrl3").removeClass("hidden");
            $("#step2Image3").removeClass("hidden");
            $("#step2Ctrl4").removeClass("hidden");
            $("#step2Image4").removeClass("hidden");
        }
    });
    $("#step2Ctrl3").click(function(){
        $(this).remove();
        $("#step2Image3").attr("src","images/exp2/step2/image3.gif?noCache="+new Date().getTime());

        if($("#step2Ctrl4").length==0){
            $("#step2Ctrl5").removeClass("hidden");
        }
    });
    $("#step2Ctrl4").click(function(){
        $(this).remove();
        $("#step2Image4").attr("src","images/exp2/step2/image4.gif?noCache="+new Date().getTime());
        if($("#step2Ctrl3").length==0){
            $("#step2Ctrl5").removeClass("hidden");
        }
    });
    $("#step2Ctrl5").click(function(){
        $(".step2").remove();
        $(".step3Image,.step3Ctrl1").removeClass("hidden");
        exp2.setStepTip(3);
    });

    $("#step3Ctrl1").click(function(){
        $(this).remove();
        $("#step3Image").attr("src","images/exp2/step3/image.gif?noCache="+new Date().getTime());
        $("#step3Ctrl2").removeClass("hidden");
    });
    $("#step3Ctrl2").click(function(){
        $(".step3").remove();
        $(".step4Image1,.step4Ctrl1,.step4Image2,.step4Image3").removeClass("hidden");
        exp2.setStepTip(4);
    });

    $("#step4Ctrl1").click(function(){
        $(this).remove();
        $("#step4Ctrl2").removeClass("hidden");
        $("#step4Image1").attr("src","images/exp2/step4/image1.gif?noCache="+new Date().getTime());
    });
    $("#step4Ctrl2").click(function(){
        $(this).remove();
        $("#step4Image2").animate({
            top:240
        },1000,function(){
            $("#step4Ctrl3").removeClass("hidden");
        });
    });
    $("#step4Ctrl3").click(function(){
        $(".step4").remove();
        $(".step5").removeClass("hidden");
        exp2.setStepTip(5);
    });

    $("#step5Ctrl").click(function(){
        $(".step5").remove();
        $(".step6").removeClass("hidden");
        exp2.setStepTip(6);
    });

    $("#step6Ctrl").click(function(){
        $(".step6").remove();
        $(".step7").removeClass("hidden");
        exp2.setStepTip(7);
    });

    $("#step7Ctrl1").click(function(){
        $(this).remove();
        if($("#step7Ctrl2,#step7Ctrl3").length==0){
            $(".step7").remove();
            $(".step8").removeClass("hidden");
            exp2.setStepTip(8);
        }
    });
    $("#step7Ctrl2").click(function(){
        $(this).remove();
        if($("#step7Ctrl1,#step7Ctrl3").length==0){
            $(".step7").remove();
            $(".step8").removeClass("hidden");
            exp2.setStepTip(8);
        }
    });
    $("#step7Ctrl3").click(function(){
        $(this).remove();
        if($("#step7Ctrl1,#step7Ctrl2").length==0){
            $(".step7").remove();
            $(".step8").removeClass("hidden");
            exp2.setStepTip(8);
        }
    });

    $("#step8Ctrl").click(function(){
        $(".step8").remove();
        $(".step9").removeClass("hidden");
        exp2.setStepTip(9);
    });

    $("#step9Ctrl").click(function(){
        $(".step9").remove();
        $(".step10").removeClass("hidden");
        exp2.setStepTip(10);
    });

    $("#step10Ctrl").click(function(){
        $(".step10").remove();
        $(".step11").not(".step11Ctrl").removeClass("hidden");
        exp2.setStepTip(11);
    });


    $("#step11S1").change(function(){
        if($("#step11S2").val()!=""&&$("#step11S3").val()!=""&&$("#step11S4").val()!=""
            &&$("#step11S5").val()!=""&&$("#step11S6").val()!=""&&$("#step11S7").val()!=""){
            $("#step11Ctrl").removeClass("hidden");
        }
    });
    $("#step11S2").change(function(){
        if($("#step11S1").val()!=""&&$("#step11S3").val()!=""&&$("#step11S4").val()!=""
            &&$("#step11S5").val()!=""&&$("#step11S6").val()!=""&&$("#step11S7").val()!=""){
            $("#step11Ctrl").removeClass("hidden");
        }
    });
    $("#step11S3").change(function(){
        if($("#step11S2").val()!=""&&$("#step11S1").val()!=""&&$("#step11S4").val()!=""
            &&$("#step11S5").val()!=""&&$("#step11S6").val()!=""&&$("#step11S7").val()!=""){
            $("#step11Ctrl").removeClass("hidden");
        }
    });
    $("#step11S4").change(function(){
        if($("#step11S2").val()!=""&&$("#step11S3").val()!=""&&$("#step11S1").val()!=""
            &&$("#step11S5").val()!=""&&$("#step11S6").val()!=""&&$("#step11S7").val()!=""){
            $("#step11Ctrl").removeClass("hidden");
        }
    });
    $("#step11S5").keyup(function(){
        if($("#step11S2").val()!=""&&$("#step11S3").val()!=""&&$("#step11S4").val()!=""
            &&$("#step11S1").val()!=""&&$("#step11S6").val()!=""&&$("#step11S7").val()!=""){
            $("#step11Ctrl").removeClass("hidden");
        }
    });
    $("#step11S6").change(function(){
        if($("#step11S2").val()!=""&&$("#step11S3").val()!=""&&$("#step11S4").val()!=""
            &&$("#step11S5").val()!=""&&$("#step11S1").val()!=""&&$("#step11S7").val()!=""){
            $("#step11Ctrl").removeClass("hidden");
        }
    });
    $("#step11S7").keyup(function(){
        if($("#step11S2").val()!=""&&$("#step11S3").val()!=""&&$("#step11S4").val()!=""
            &&$("#step11S5").val()!=""&&$("#step11S6").val()!=""&&$("#step11S1").val()!=""){
            $("#step11Ctrl").removeClass("hidden");
        }
    });
    $("#step11Ctrl").click(function(){
        $(".step11").remove();
        $(".step12").not(".step12Ctrl").removeClass("hidden");
        exp2.setStepTip(12);
    });


    $("#step12S1").change(function(){
        if($("#step12S2").val()!=""&&$("#step12S3").val()!=""&&$("#step12S4").val()!=""){
            $("#step12Ctrl").removeClass("hidden");
        }
    });
    $("#step12S2").change(function(){
        if($("#step12S1").val()!=""&&$("#step12S3").val()!=""&&$("#step12S4").val()!=""){
            $("#step12Ctrl").removeClass("hidden");
        }
    });
    $("#step12S3").keyup(function(){
        if($("#step12S2").val()!=""&&$("#step12S1").val()!=""&&$("#step12S4").val()!=""){
            $("#step12Ctrl").removeClass("hidden");
        }
    });
    $("#step12S4").keyup(function(){
        if($("#step12S2").val()!=""&&$("#step12S3").val()!=""&&$("#step12S1").val()!=""){
            $("#step12Ctrl").removeClass("hidden");
        }
    });
    $("#step12Ctrl").click(function(){
        $(".step12").remove();
        $(".step13").not(".step13Ctrl").removeClass("hidden");
        exp2.setStepTip(13);
    });


    $("#step13S1").change(function(){
        if($("#step13S2").val()!=""&&$("#step13S3").val()!=""&&$("#step13S1").val()!=""){
            $("#step13Ctrl").removeClass("hidden");
        }
    });
    $("#step13S2").keyup(function(){
        if($("#step13S1").val()!=""&&$("#step13S3").val()!=""&&$("#step13S4").val()!=""){
            $("#step13Ctrl").removeClass("hidden");
        }
    });
    $("#step13S3").change(function(){
        if($("#step13S2").val()!=""&&$("#step13S1").val()!=""&&$("#step13S4").val()!=""){
            $("#step13Ctrl").removeClass("hidden");
        }
    });
    $("#step13S4").change(function(){
        if($("#step13S2").val()!=""&&$("#step13S3").val()!=""&&$("#step13S1").val()!=""){
            $("#step13Ctrl").removeClass("hidden");
        }
    });
    $("#step13Ctrl").click(function(){
        $(".step13").remove();
        $(".step14Image1,.step14Ctrl1").removeClass("hidden");
        exp2.setStepTip(14);
    });

    $("#step14Ctrl1").click(function(){
        $("#step14Image2").removeClass("hidden");
        $(this).remove();
        $("#step14Ctrl2").removeClass("hidden");
    });
    $("#step14Ctrl2").click(function(){
        $(".step14").remove();
        $(".step15Image1").removeClass("hidden");
        $(".step15Ctrl1").removeClass("hidden");
        exp2.setStepTip(15);
    });

    $("#step15Ctrl1").click(function(){
        $("#step15Image2").removeClass("hidden");
        $(this).remove();
        $("#step15Ctrl2").removeClass("hidden");
    });
    $("#step15Ctrl2").click(function(){
        $(".step15").remove();
        $(".step16Image1").removeClass("hidden");
        $(".step16Ctrl1").removeClass("hidden");
        exp2.setStepTip(16);
    });

    $("#step16Ctrl1").click(function(){
        $("#step16Image2").removeClass("hidden");
        $(this).remove();
        $("#step16Ctrl2").removeClass("hidden");
    });
    $("#step16Ctrl2").click(function(){
        $(".step16").remove();
        $(".step17Image1").removeClass("hidden");
        $(".step17Ctrl1").removeClass("hidden");
        exp2.setStepTip(17);
    });
    $("#step17Ctrl1").click(function(){
        $("#step17Image2").removeClass("hidden");
        $(this).remove();
        setTimeout(function(){
            $(".step17Image3").removeClass("hidden");
            $("#step17Image2").remove();
            $(".step17Image1").remove();
            $("#step17Ctrl2").removeClass("hidden");
        },1000);

    });
    $("#step17Ctrl2").click(function(){
        $(".step17").remove();
        $(".step18").not(".step18Ctrl2").removeClass("hidden");
        exp2.setStepTip(18);
    });

    $("#step18Ctrl1").click(function(){
        $("#step18Image1").attr("src","images/exp2/step18/image2.png");
        $("#step18Ctrl1").remove();
        $("#step18Ctrl2").removeClass("hidden");
    });
    $("#step18Ctrl2").click(function(){
        $(".step18").remove();
        $(".step19Image1,.step19Ctrl1").removeClass("hidden");
        exp2.setStepTip(19);
    });


    $("#step19Ctrl1").click(function(){
        $(this).remove();
        $("#step19Ctrl2").removeClass("hidden");
        $("#step19Image1").attr("src","images/exp2/step19/image2.jpg");
    });
    $("#step19Ctrl2").click(function(){
        $(this).remove();
        $("#step19Ctrl3").removeClass("hidden");
        $("#step19Image1").attr("src","images/exp2/step19/image3.jpg");

    });
    $("#step19Ctrl3").click(function(){
        $(this).remove();
        $("#step19Ctrl4").removeClass("hidden");
        $("#step19Image1").attr("src","images/exp2/step19/image4.jpg");

    });
    $("#step19Ctrl4").click(function(){
        $(".step19").remove();
        $("#step20Ctrl1").removeClass("hidden");
        $("#step20Image1").removeClass("hidden");
        $("#step20AnimateContainer").removeClass("hidden");
        $(".step20.tips").removeClass("hidden");
        exp2.drag();
        exp2.setStepTip(20);
    });

    $("#step20Ctrl1").click(function(){
        $(this).remove();
        $("#step20Image1").attr("src","images/exp2/step20/image2.png");
        $("#step20Controls").removeClass("hidden");
    });
    $("#step20S1").change(function(){
        if($("#step20S2").val()!=""&&$(this).val()!=""){
            $("#sliderContainer").removeClass("hidden");
        }
    });
    $("#step20S2").change(function(){
        if($("#step20S1").val()!=""&&$(this).val()!=""){
            $("#sliderContainer").removeClass("hidden");
        }
    });
    $("#step20S3").change(function(){
        if($(this).val()!=""){
            $("#step20InputContainer").removeClass("hidden");
        }
    });
    $("#step20InputContainer input").keyup(function(){
        if($(this).val()=="0.3"&&$("#step20S3").val()!=""){
            $("#step20Ctrl2").removeClass("hidden");
            $("#device").css("bottom","25px");
        }
    });

    $("#step20Ctrl2").click(function(){
        $(".step20").remove();
        $("#step21AnimateContainer,.step21Ctrl1,.step21.tips,.step21Image4,.step21Image5,.step21Image6").removeClass("hidden");
        exp2.setStepTip(21);
        exp2.unDrag();
    });

    $("#step21Ctrl1").click(function(){
        $(this).remove();
        $("#step21Ctrl2").removeClass("hidden");
        $("#step21Image4").attr("src","images/exp2/step21/image41.jpg");
    });
    $("#step21Ctrl2").click(function(){
        $(this).remove();
        $("#step21Ctrl3").removeClass("hidden");

        $("#step21Image5").attr("src","images/exp2/step21/image51.jpg");
    });
    $("#step21Ctrl3").click(function(){
        $(this).remove();
        $("#step21Image6").attr("src","images/exp2/step21/image61.jpg");
        $("#topDevice").animate({
            top:40
        },1000,function(){
            $("#step21Ctrl4").removeClass("hidden");
        });
    });
    $("#step21Ctrl4").click(function(){
        $(".step21").remove();
        $("#step22Ctrl1").removeClass("hidden");
        $("#step22Image1").removeClass("hidden");
        $("#step22Image2").removeClass("hidden");
        exp2.setStepTip(22);
    });

    $("#step22Ctrl1").click(function(){
        $(this).remove();
        $("#step22Image1").attr("src","images/exp2/step22/image11.jpg");
        $("#step22Ctrl2").removeClass("hidden");
    });
    $("#step22Ctrl2").click(function(){
        $(this).remove();
        $("#step22Image1").attr("src","images/exp2/step22/image12.jpg");
        $("#step22Ctrl3").removeClass("hidden");
    });
    $("#step22Ctrl3").click(function(){
        $(this).remove();
        $("#step22Image1").attr("src","images/exp2/step22/image13.jpg");
        $("#step22Ctrl4").removeClass("hidden");
    });
    $("#step22Ctrl4").click(function(){
        $(this).remove();
        $("#step22Image1").attr("src","images/exp2/step22/image14.jpg");
        $("#step22Ctrl5").removeClass("hidden");
    });
    $("#step22Ctrl5").click(function(){
        $(this).remove();
        $("#step22Image1").attr("src","images/exp2/step22/image15.jpg");
        $("#step22Ctrl6").removeClass("hidden");
    });
    $("#step22Ctrl6").click(function(){
        $(this).remove();
        $("#step22Image1").attr("src","images/exp2/step22/image16.jpg");
        $("#step22Ctrl7").removeClass("hidden");
    });
    $("#step22Ctrl7").click(function(){
        $(this).remove();
        $("#step22Image1").attr("src","images/exp2/step22/image17.jpg");
        $("#step22Image2").attr("src","images/exp2/step22/image2.gif?noCache="+new Date().getTime());
        $("#step22Ctrl8").removeClass("hidden");

    });
    $("#step22Ctrl8").click(function(){
        $(".step22").remove();
        $("#step23Image1,#step23Image2,#step23Ctrl1").removeClass("hidden");
        exp2.setStepTip(23);
    });

    $("#step23Ctrl1").click(function(){
        $(this).remove();
        $("#step23Image1").attr("src","images/exp2/step23/image11.jpg");
        $("#step23Ctrl2").removeClass("hidden");
    });
    $("#step23Ctrl2").click(function(){
        $(this).remove();
        $("#step23Image1").attr("src","images/exp2/step23/image12.jpg");
        $("#step23Ctrl3").removeClass("hidden");
    });
    $("#step23Ctrl3").click(function(){
        $(".step23").remove();
        $(".step24Image1,#step24Image2,#step24Controls,.step24.tips").removeClass("hidden");
        exp2.setStepTip(24);
    });

    $("#step24S1").change(function(){
        if($(this).val()!=""){
            $("#step24InputContainer").removeClass("hidden");
        }
    });
    $("#step24InputContainer input").keyup(function(){
        if($(this).val()=="0.5"){
            $("#step24Ctrl1").removeClass("hidden");
        }
    });
    $("#step24Ctrl1").click(function(){
        $(this).remove();
        $("#step24Image2").attr("src","images/exp2/step24/image21.jpg");
        $("#step24Ctrl2").removeClass("hidden");
    });
    $("#step24Ctrl2").click(function(){
        $(".step24").remove();
        $(".step25").removeClass("hidden");
        exp2.setStepTip(25);
    });

    $("#step25Ctrl1").click(function(){
        $(".step25").remove();
        $(".step26").not(".step26Ctrl2,.step26Ctrl1").removeClass("hidden");
        exp2.setStepTip(26);
    });

    $("#step26Input1").keyup(function(){
        if($("#step26Input2").val()!=""&&$("#step26Input3").val()!=""&&$("#step26Input4").val()!=""){
            $("#step26Ctrl1").removeClass("hidden");
        }
    });
    $("#step26Input2").keyup(function(){
        if($("#step26Input1").val()!=""&&$("#step26Input3").val()!=""&&$("#step26Input4").val()!=""){
            $("#step26Ctrl1").removeClass("hidden");
        }
    });
    $("#step26Input3").keyup(function(){
        if($("#step26Input2").val()!=""&&$("#step26Input1").val()!=""&&$("#step26Input4").val()!=""){
            $("#step26Ctrl1").removeClass("hidden");
        }
    });
    $("#step26Input4").keyup(function(){
        if($("#step26Input2").val()!=""&&$("#step26Input3").val()!=""&&$("#step26Input1").val()!=""){
            $("#step26Ctrl1").removeClass("hidden");
        }
    });
    $(".step26Ctrl1").click(function(){
        $(this).remove();
        $("#step26Ctrl2").removeClass("hidden");
        $("#step26Image2").attr("src","images/exp2/step26/image21.jpg");
    });
    $(".step26Ctrl2").click(function(){
        $(".step26").remove();
        $(".step27Image1,.step27Controls").removeClass("hidden");
        exp2.setStepTip(27);
    });

    $("#step27S1").change(function(){
        if($("#step27S2").val()!=""&&$("#step27S3").val()!=""&&$("#step27S4").val()!=""&&$("#step27S5").val()!=""){
            $("#step27Ctrl1").removeClass("hidden");
        }
    });
    $("#step27S2").change(function(){
        if($("#step27S1").val()!=""&&$("#step27S3").val()!=""&&$("#step27S4").val()!=""&&$("#step27S5").val()!=""){
            $("#step27Ctrl1").removeClass("hidden");
        }
    });
    $("#step27S3").change(function(){
        if($("#step27S2").val()!=""&&$("#step27S1").val()!=""&&$("#step27S4").val()!=""&&$("#step27S5").val()!=""){
            $("#step27Ctrl1").removeClass("hidden");
        }
    });
    $("#step27S4").keyup(function(){
        if($("#step27S2").val()!=""&&$("#step27S3").val()!=""&&$("#step27S1").val()!=""&&$("#step27S5").val()!=""){
            $("#step27Ctrl1").removeClass("hidden");
        }
    });
    $("#step27S5").change(function(){
        if($("#step27S2").val()!=""&&$("#step27S3").val()!=""&&$("#step27S4").val()!=""&&$("#step27S1").val()!=""){
            $("#step27Ctrl1").removeClass("hidden");
        }
    });

    $("#step27Ctrl1").click(function(){
        $(".step27").remove();
        $(".step28").not(".step28Ctrl2,.step28Ctrl3").removeClass("hidden");
        exp2.setStepTip(28);
    });

    $("#step28Ctrl1").click(function(){
        $(this).remove();
        $("#step28Image2").attr("src","images/exp2/step28/image21.jpg");
        $("#step28Ctrl2").removeClass("hidden");
    });
    $("#step28Ctrl2").click(function(){
        $(this).remove();
        $("#step28Image3").attr("src","images/exp2/step28/image31.jpg");
        $("#step28Ctrl3").removeClass("hidden");
    });
    $("#step28Ctrl3").click(function(){
        $(".step28").remove();
        $("#step29Image").attr("src","images/exp2/step29/image.gif?noCache="+new Date().getTime()).removeClass("hidden");
        setTimeout(function(){
            $("#step29Ctrl").removeClass("hidden");
        },15000);
        exp2.setStepTip(29);
    });

    $("#step29Ctrl").click(function(){
        $(".step29").remove();
        $(".step30").not("#step30Ctrl2").removeClass("hidden");
        exp2.setStepTip(30);
    });

    $("#step30Ctrl1").click(function(){
        $(this).remove();
        $("#step30Image").attr("src","images/exp2/step30/image11.jpg");
        $("#step30Ctrl2").removeClass("hidden");
    });
    $("#step30Ctrl2").click(function(){
        $(".step30").remove();
        $("#step31Image1,.step31.tips,#step31Ctrl1").removeClass("hidden");
        exp2.setStepTip(31);
    });

    $("#step31Ctrl1").click(function(){
        $(this).remove();
        $("#step31Ctrl2").removeClass("hidden");
        $("#step31Image1").attr("src","images/exp2/step31/image2.jpg");
    });
    $("#step31Ctrl2").click(function(){
        $(this).remove();
        $("#step31Ctrl3").removeClass("hidden");

        $("#step31Image1").attr("src","images/exp2/step31/image3.jpg");
    });
    $("#step31Ctrl3").click(function(){
        $(this).remove();
        $("#step31Ctrl4").removeClass("hidden");
        $("#step31Image1").attr("src","images/exp2/step31/image4.jpg");
    });
    $("#step31Ctrl4").click(function(){
        $(this).remove();
        $("#step31Ctrl5").removeClass("hidden");
        $("#step31Image1").attr("src","images/exp2/step31/image5.jpg");
        $("#step31Image2").attr("src","images/exp2/step31/image2.gif?noCache="+new Date().getTime()).removeClass("hidden");
    });
    $("#step31Ctrl5").click(function(){
        $(".step31").remove();
        $("#step32Image,.step32.tips,#step32Ctrl1").removeClass("hidden");

        exp2.setStepTip(32);
    });
    $("#step32Ctrl1").click(function(){
        $(this).remove();
        $("#step32Ctrl2").removeClass("hidden");
        $("#step32Image").attr("src","images/exp2/step32/image2.jpg");
    });
    $("#step32Ctrl2").click(function(){
        $(".step32").remove();
        $("#step33AnimateContainer,.step33Ctrl1,.step33.tips,.step33Image4,.step33Image5,.step33Image6").removeClass("hidden");
        exp2.setStepTip(33);
    });

    $("#step33Ctrl1").click(function(){
        $(this).remove();
        $("#step33Ctrl2").removeClass("hidden");
        $("#step33Image4").attr("src","images/exp2/step33/image41.jpg");
    });
    $("#step33Ctrl2").click(function(){
        $(this).remove();
        $("#step33Ctrl3").removeClass("hidden");

        $("#step33Image5").attr("src","images/exp2/step33/image51.jpg");
    });
    $("#step33Ctrl3").click(function(){
        $(this).remove();
        $("#step33Image6").attr("src","images/exp2/step33/image61.jpg");
        $("#step33TopDevice").animate({
            top:-240
        },1000,function(){
            $("#step33Ctrl4").removeClass("hidden");
        });
    });
    $("#step33Ctrl4").click(function(){
        $(".step33").remove();
        $(".step34").not(".step34Controls,.step34Ctrl2").removeClass("hidden");
        exp2.drag1();
        exp2.setStepTip(34);
    });

    $("#step34Ctrl1").click(function(){
        $(this).remove();
        $("#step34Controls").removeClass("hidden");
        $("#step34Image1").attr("src","images/exp2/step34/image2.png");
    });
    $("#step34S1").change(function(){
        if($("#step34S2").val()!=""&&$(this).val()!=""){
            $("#step34SliderContainer").removeClass("hidden");
        }
    });
    $("#step34S2").change(function(){
        if($("#step34S1").val()!=""&&$(this).val()!=""){
            $("#step34SliderContainer").removeClass("hidden");
        }
    });

    $("#step34Ctrl2").click(function(){
        exp2.unDrag1();
        $(".step34").remove();
        $(".step35").removeClass("hidden");
        exp2.setStepTip(35);
    });

    $("#step35Ctrl1").click(function(){
        $(".step35").remove();
        $(".step36").removeClass("hidden");
        exp2.setStepTip(36);

    });



    $("#restart").click(function(){
        window.location.reload();
    });
});
