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
        14:"14、各参数清零、实时显示窗口",
        15:"15、力-位移曲线显示窗口",
        16:"16、设置参数",
        17:"17、打开手动控制窗口",
        18:"18、力清零",
        19:"19、设置参数",
        20:"20、施加预载荷",
        21:"21、围压腔下落并固定",
        22:"22、注油",
        23:"23、放气",
        24:"24、位移清零，设置保护",
        25:"25、打开实验保护设置窗口",
        26:"26、设置参数",
        27:"27、自动控制（取消钩子），开始实验",
        28:"28、实验结果",
        29:"29、回油",
        30:"30、三轴腔的升起，取出试件"


    },
    setStepTip:function(index){
        $("#stepTipContent").text(this.stepTips[index]);
    }
};
$(document).ready(function(){
    $("#menu a[data-page-name='"+pageName+"']").addClass("active");
    exp2.setStepTip(1);

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
        $(".step4Image1,.step4Ctrl1,.step4Image2").removeClass("hidden");
        exp2.setStepTip(4);
    });

    $("#step4Ctrl1").click(function(){
        $(this).remove();
        $("#step4Ctrl2").removeClass("hidden");
        $("#step4Image1").attr("src","images/exp2/step4/image1.gif?noCache="+new Date().getTime());
    });
    $("#step4Ctrl2").click(function(){
        $(this).remove();
        $("#step4Ctrl3").removeClass("hidden");
        $("#step4Image2").attr("src","images/exp2/step4/image2.gif?noCache="+new Date().getTime());
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
        if($("#step7Ctrl2").length==0){
            $(".step7").remove();
            $(".step8").removeClass("hidden");
            exp2.setStepTip(8);
        }
    });
    $("#step7Ctrl2").click(function(){
        $(this).remove();
        if($("#step7Ctrl1").length==0){
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
        $(".step11").removeClass("hidden");
        exp2.setStepTip(11);
    });

    $("#step11Ctrl").click(function(){
        $(".step11").remove();
        $(".step12").removeClass("hidden");
        exp2.setStepTip(12);
    });

    $("#step12Ctrl1").click(function(){
        $(this).remove();
        if($("#step12Ctrl2").length==0){
            $(".step12").remove();
            $(".step13").removeClass("hidden");
            exp2.setStepTip(13);
        }
    });
    $("#step12Ctrl2").click(function(){
        $(this).remove();
        if($("#step12Ctrl1").length==0){
            $(".step12").remove();
            $(".step13").removeClass("hidden");
            exp2.setStepTip(13);
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
        $(".step16").removeClass("hidden");
        exp2.setStepTip(16);
    });

    $("#step16Ctrl").click(function(){
        $(".step16").remove();
        $(".step17Image1").removeClass("hidden");
        $(".step17Ctrl1").removeClass("hidden");
        exp2.setStepTip(17);
    });

    $("#step17Ctrl1").click(function(){
        $("#step17Image2").removeClass("hidden");
        $(this).remove();
        $("#step17Ctrl2").removeClass("hidden");
    });
    $("#step17Ctrl2").click(function(){
        $(".step17").remove();
        $(".step18Image1").removeClass("hidden");
        $(".step18Ctrl1").removeClass("hidden");
        exp2.setStepTip(18);
    });

    $("#step18Ctrl1").click(function(){
        $("#step18Image2").removeClass("hidden");
        $(this).remove();
        $("#step18Ctrl2").removeClass("hidden");
    });
    $("#step18Ctrl2").click(function(){
        $(".step18").remove();
        $(".step19").removeClass("hidden");
        exp2.setStepTip(19);
    });

    $("#step19Ctrl1").click(function(){
        $(this).remove();
        if($("#step19Ctrl2").length==0){
            $(".step19").remove();
            $(".step20").removeClass("hidden");
            exp2.setStepTip(20);
        }
    });
    $("#step19Ctrl2").click(function(){
        $(this).remove();
        if($("#step19Ctrl1").length==0){
            $(".step19").remove();
            $(".step20").not(".step20Ctrl2").removeClass("hidden");
            exp2.setStepTip(20);
        }
    });

    $("#step20Ctrl1").click(function(){
        $(this).remove();
        $("#step20Ctrl2").removeClass("hidden");
        $("#step20Image1").attr("src","images/exp2/step20/image1.gif?noCache="+new Date().getTime());
    });
    $("#step20Ctrl2").click(function(){
        $(".step20").remove();
        $("#step21Image,.step21Ctrl1").removeClass("hidden");
        exp2.setStepTip(21);
    });

    $("#step21Ctrl1").click(function(){
        $(this).remove();
        $("#step21Ctrl2").removeClass("hidden");
        $("#step21Image").attr("src","images/exp2/step21/image.gif?noCache="+new Date().getTime());
    });
    $("#step21Ctrl2").click(function(){
        $(".step21").remove();
        $(".step22").not("#step22Ctrl2").removeClass("hidden");
        exp2.setStepTip(22);
    });

    $("#step22Ctrl1").click(function(){
        $(this).remove();
        $("#step22Image2").attr("src","images/exp2/step22/image2.gif?noCache="+new Date().getTime());
        $("#step22Ctrl2").removeClass("hidden");
    });
    $("#step22Ctrl2").click(function(){
        $(".step22").remove();
        $(".step23").removeClass("hidden");
        exp2.setStepTip(23);
    });

    $("#step23Ctrl1").click(function(){
        $(this).remove();
        $("#step23Ctrl2").removeClass("hidden");
    });
    $("#step23Ctrl2").click(function(){
        $(".step23").remove();
        $(".step24Image1").removeClass("hidden");
        $(".step24Ctrl1").removeClass("hidden");
        exp2.setStepTip(24);
    });

    $("#step24Ctrl1").click(function(){
        $("#step24Image2").removeClass("hidden");
        $(this).remove();
        $("#step24Ctrl2").removeClass("hidden");
    });
    $("#step24Ctrl2").click(function(){
        $(".step24").remove();
        $(".step25Image1").removeClass("hidden");
        $(".step25Ctrl1").removeClass("hidden");
        exp2.setStepTip(25);
    });

    $("#step25Ctrl1").click(function(){
        $("#step25Image2").removeClass("hidden");
        $(this).remove();
        $("#step25Ctrl2").removeClass("hidden");
    });
    $("#step25Ctrl2").click(function(){
        $(".step25").remove();
        $(".step26").removeClass("hidden");
        exp2.setStepTip(26);
    });

    $(".step26Ctrl").click(function(){
        $(this).remove();
        if($(".step26Ctrl").length==0){
            $(".step26").remove();
            $(".step27Image1,.step27Ctrl1").removeClass("hidden");
            exp2.setStepTip(27);
        }
    });

    $("#step27Ctrl1").click(function(){
        $("#step27Image2").removeClass("hidden");
        $(this).remove();
        $("#step27Ctrl2").removeClass("hidden");
    });
    $("#step27Ctrl2").click(function(){
        $(".step27").remove();
        $(".step28").removeClass("hidden").attr("src","images/exp2/step28/image.gif?noCache="+new Date().getTime());
        exp2.setStepTip(28);
    });

    $("#step28Ctrl").click(function(){
        $(".step28").remove();
        $(".step29").removeClass("hidden");
        exp2.setStepTip(29);
    });

    $("#step29Ctrl").click(function(){
        $(".step29").remove();
        $(".step30").removeClass("hidden");
        exp2.setStepTip(30);
    });

    $("#step30Ctrl").click(function(){
        $(this).remove();
        $("#step30Image").attr("src","images/exp2/step30/image.gif?noCache="+new Date().getTime())
    });

    $("#restart").click(function(){
        window.location.reload();
    });
});
