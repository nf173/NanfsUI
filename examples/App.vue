<template>
  <div id="app">
    <h1>Nanfs UI</h1>

    <section class="icon">
      <h3>图标:</h3>
      <nf-icon
        v-for="item in iconList"
        :key="item"
        :name="item"
        size="20px"
      ></nf-icon>
    </section>

    <section class="input">
      <h3>输入框:</h3>
      <nf-input v-model="input_value" placeholder="请输入"></nf-input>
      <nf-input size="small" placeholder="小号输入框"></nf-input>
      <nf-input
        size="small"
        placeholder="限制输入长度4个字符"
        :maxlength="4"
      ></nf-input>
      <nf-input placeholder="带图标">
        <nf-icon slot="prefix" name="search"></nf-icon>
      </nf-input>
      <nf-input size="small" placeholder="可清除" clearable></nf-input>
      <nf-input placeholder="禁用" disabled></nf-input>
    </section>

    <section class="btn">
      <h3>按钮:</h3>
      <nf-button>默认按钮</nf-button>
      <nf-button type="primary">主要按钮</nf-button>
      <nf-button size="small" type="primary">小号按钮</nf-button>
      <nf-button size="small" type="primary" :loading="true">加载中</nf-button>
      <nf-button type="primary" :disabled="true">默认按钮</nf-button>
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
        "close",
        "close_circle",
        "close_circle_fill",
        "eye",
        "eye_off",
        "eye_close",
        "search",
        "search_fill",
      ],
      input_value: "",
    };
  },
};
</script>

<style lang="scss">
.icon {
  .svg-icon {
    margin-right: 10px;
  }
}

.input {
  .nf-input {
    margin-right: 10px;
  }
}

.btn {
  .nf-button {
    margin-right: 10px;
  }
}
</style>



