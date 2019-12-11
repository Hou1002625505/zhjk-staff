<template>
  <div>
    <div class="course-qh">
      <button>团操课表</button>
      <button>客户分析</button>
    </div>
    <Calendar />
  </div>
</template>

<script>
import Calendar from './Calendar.vue';

export default {
  components: {
    Calendar
  },
};
</script>

<style lang="less" scoped>
.course-qh {
  display: flex;
  justify-content: space-around;
  margin: 0.3rem 0.3rem 0 0.3rem;
  button:nth-child(1) {
    width: 3.45rem;
    height: 0.7rem;
    border-width: 1px 1px 1px 1px;
    border-color: #4a77b0;
    border-style: solid;
    border-top-left-radius: 0.4em;
    border-bottom-left-radius: 0.4em;
    background: #4a77b0;
    font-size: 0.32rem;
    color: white;
  }
  button:nth-child(2) {
    width: 3.45rem;
    height: 0.7rem;
    border-width: 1px 1px 1px 0;
    border-color: #4a77b0;
    border-style: solid;
    border-top-right-radius: 0.4em;
    border-bottom-right-radius: 0.4em;
    background: #4a77b0;
    font-size: 0.32rem;
    color: white;
  }
}

</style>