<template>
  <div class="filter" v-if="filterData">
    <aside class="filter_wrap">
      <div
        class="filter_item"
        v-for="(item,index) in filterData.navTab"
        :key="index"
        :class="{'filter_bold': currentIndex === index}"
        @click="filterSort(index)"
      >
        <span>{{item.name}}</span>
        <i v-if="item.icon" :class="'fa fa-'+item.icon"></i>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  name: "FilterView",
  props: {
    filterData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    filterSort(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped>
.filter {
  width: 100%;
  height: 15vw;
  background: #fff;
  color: #999;
}
.filter_wrap {
  display: flex;
  text-align: center;
  line-height: 15vw;
  /* justify-content: space-evenly; */
}
.filter_item {
  flex: 1;
}
.filter_item i {
  width: 1.6vw;
  height: 0.8vw;
  margin-left: 1.333333vw;
  margin-bottom: 0.533333vw;
}
.filter_bold {
  font-weight: bold;
  color: #000;
}
</style>