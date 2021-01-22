<template>
  <div id="app">
    <h1>Nanfs UI</h1>

    <section class="btn">
      <h3>按钮:</h3>
      <nf-button>默认按钮</nf-button>
      <nf-button type="primary">主要按钮</nf-button>
      <nf-button size="small" type="primary">小号按钮</nf-button>
      <nf-button size="small" type="primary" :loading="true">加载中</nf-button>
    </section>

    <section class="icon">
      <h3>图标:</h3>
      <nf-icon
        v-for="item in iconList"
        :key="item"
        :name="item"
        size="20px"
      ></nf-icon>
    </section>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      iconList: [
        "flag",
        "flag_fill",
        "home",
        "home_fill",
        "cloud",
        "cloud_off",
        "cloud_fill",
        "cloud_fill_off",
        "loader",
      ],
    };
  },
};
</script>

<style lang="scss">
.btn {
  .nf-button {
    margin-right: 10px;
  }
}

.icon {
  .svg-icon {
    margin-right: 10px;
  }
}
</style>



