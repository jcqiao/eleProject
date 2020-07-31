<template>
  <!-- 筛选 -->
  <div :class="{'open':isSort || isFilter}" @click.self="hideView">
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
    <!-- 排序 -->
    <section class="filter_extend" v-if="isSort">
      <ul>
        <li
          v-for="(item,index) in filterData.sortBy"
          :key="index"
          :class="{'isActive': sortIndex === index }"
          @click="sortClick(item,index)"
        >
          <span>{{item.name}}</span>
          <i v-show="sortIndex === index" class="fa fa-check"></i>
        </li>
      </ul>
    </section>
    <!-- 更多筛选 -->
    <section class="filter-extend" v-if="isFilter">
      <div class="filter-sort">
        <div class="morefilter" v-for="(item,index) in filterData.screenBy" :key="index">
          <p class="title">{{item.title}}</p>
          <ul>
            <li
              v-for="(data,i) in item.data"
              :key="i"
              :class="{'selected':data.select}"
              @click="selectScreen(data,item)"
            >
              <!-- data是为了获取是否多选  item是为了改变是否选中 item.select-->
              <img v-if="data.icon" :src="data.icon" alt />
              <span>{{data.name}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="morefilter-btn">
        <span class="morefilter-clear">清空</span>
        <span class="morefilter-ok">确定</span>
      </div>
    </section>
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
      isSort: false,
      isFilter: false,
      sortIndex: 0,
    };
  },
  methods: {
    filterSort(index) {
      this.currentIndex = index;
      switch (index) {
        case 0:
          this.isSort = true;
          this.$emit("searchFixed", true);
          break;
        case 1:
          this.$emit("update", {
            condition: this.filterData.navTab[index].condition,
          });
          this.hideView();
          break;

        case 2:
          this.$emit("update", {
            condition: this.filterData.navTab[index].condition,
          });
          this.hideView();
          break;

        case 3:
          this.isFilter = true;
          this.$emit("searchFixed", true);
          break;
        default:
          this.hideView();
          break;
      }
    },
    hideView() {
      this.isSort = false;
      this.isFilter = false;
      this.$emit("searchFixed", false);
    },
    sortClick(item, index) {
      this.sortIndex = index;
      this.filterData.navTab[0].name = item.name;
      //隐藏遮罩
      this.hideView();
      //更新数据
      this.$emit("update", { condition: item.code });
    },
    selectScreen(data, item) {
      console.log("----");
      // data是为了获取是否多选  item是为了改变是否选中 item.select
      if (item.id !== "MPI") {
        console.log(item.id);
        //data参数是选中的那个li 要取消所有样式要遍历全部item.data
        item.data.forEach((ele) => {
          ele.select = false;
        });
      }
      data.select = !data.select;
      console.log(data.select);
    },
  },
};
</script>

<style scoped>
.filter {
  width: 100%;
  background: #fff;
  color: #999;
  position: sticky;
  top: 54px;
  z-index: 10;
}
.filter_wrap {
  display: flex;
  text-align: center;
  line-height: 15vw;
  justify-content: space-around;
}
.filter_item {
  flex: 1;
  text-align: center;
  color: #666;
  font-size: 0.8333rem;
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
.open {
  position: fixed;
  top: 44px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;
  z-index: 3;
}
.filter_extend {
  width: 100%;
  /* height: 60vh; */
  background: #fff;
  box-sizing: border-box;
  padding: 10px 15px;
}
.filter_extend li {
  width: 100%;
  height: 24px;
  line-height: 24px;
  font-size: 16px;
}
.filter_extend i {
  display: inline-block;
  float: right;
}
.isActive {
  color: #009eef;
}
/* 更多筛选 */
.filter-sort {
  background: #fff;
  padding: 0 2.666667vw;
  line-height: normal;
}
.morefilter {
  padding: 2.666667vw 0;
  overflow: hidden;
}
.morefilter .title {
  margin-bottom: 2vw;
  color: #666;
  font-size: 0.5rem;
}
.morefilter ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 0.8rem;
}
.morefilter li {
  box-sizing: border-box;
  width: 30%;
  height: 9.333333vw;
  line-height: 9.333333vw;
  margin: 0.8vw 1%;
  background: #fafafa;
}
.morefilter li img {
  width: 3.466667vw;
  height: 3.466667vw;
  vertical-align: middle;
  margin-right: 0.8vw;
}
.morefilter-btn {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fafafa;
  box-shadow: 0 -0.266667vw 0.533333vw 0 #ededed;
  line-height: 11.466667vw;
  box-sizing: border-box;
}
.morefilter-btn span {
  font-size: 0.826667rem;
  text-align: center;
  text-decoration: none;
  flex: 1;
}
.morefilter-clear {
  color: #ddd;
  background: #fff;
}
.morefilter-ok {
  color: #fff;
  background: #00d762;
  border: 0.133333vw solid #00d762;
}
.selected {
  color: #3190e8 !important;
  background-color: #edf5ff !important;
}

.edit {
  color: #333 !important;
}
</style>