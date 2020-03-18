<template>
  <div class="chart-body">
    <!-- echart表格 使用ref获取dom元素 避免在一个组件中重复使用覆盖的问题-->
    <div ref="myChart" id="chart"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  props: {
    // 标题文本
    titleText: {
      type: String,
      default: ""
    },
    // 扇形区域名称
    opinion: {
      type: Array,
      default() {
        return [];
      }
    },
    // 扇形区域数据
    opinionData: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      width: ""
    };
  },
  created() {
    this.$nextTick(function() {
      this.$refs.myChart.style.width =
        document.getElementById("chart").offsetWidth + "px";
    });
  },
  mounted() {
    // alert(document.getElementById("chart").offsetWidth)
    //  this.width=document.getElementById("chart").offsetWidth+"px";
    //  alert(this.width)
    this.$nextTick(function() {
      this.Pie();
    });
  },
  methods: {
    // 监听扇形图点击
    // eConsole(param) {
    //   console.log(param);
    //   // 向父组件传值 看需求
    //   // this.$emit("currentEchartData", param.name);
    // },
    // 饼状图
    Pie() {
      this.charts = echarts.init(this.$refs.myChart);
      this.charts.setOption({
        // title: {
        //   x: "center",
        //   // 标题文本
        //   text: this.titleText,
        //   bottom: 0,
        //   textStyle: {
        //     fontWeight: "normal",
        //     fontSize: 12
        //   }
        // },
        // tooltip: {
        //   trigger: "item",
        //   formatter: "{d}%"
        // },
        // legend: {
        //   padding:[10,0],
        //   orient: "horizontal",
        //   itemGap: 40,
        //   itemGapHeight:10,
        //   bottom: 30, //数值越小距离越大
        //   icon: "circle",
        //   itemWidth: 14,
        //   itemHeight: 14,
        //    textStyle:{
        //      height:20
        //    },
        //   // 扇形区域名称
        //   data: this.opinion
        // },
        series: [
          {
            type: "pie",
            color: ["#f09542", "#42a3d8", "#6ec290", "#777", "#666"],
            center: ["50%", "40%"],
            radius: ["0%", "50%"],
            // 默认防止标签重叠
            avoidLabelOverlap: false,
            startAngle: 80,
            label: {
              normal: {
                // \n\n让文字再视觉引导线的上面
                formatter: "{d}%\n\n",
                padding: [0, 0],
                position: "outer",
                fontSize: "1rem"
              }
            },
            labelLine: {
              normal: {
                show: true,
                length: 10,
                length2: 30
              }
            },
            // 扇形区域数据
            data: this.opinionData
          }
        ]
      });
    }
  }
};
</script> 
<style lang="less" scoped>
.chart-body {
  width: 100%;
  height: 3rem;
  overflow: hidden;
  #chart {
    width: 100%;
    height: 4rem;
    // div {
    //   width: 100%;
    //   height: 100%;
    // }
  }
}
</style>
