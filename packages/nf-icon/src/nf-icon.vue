<template>
  <!-- icon组件 -->
  <svg class="svg-icon" aria-hidden="true" :style="{ fontSize: iconSize }">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default {
  name: "nf-icon",
  props: {
    name: {
      type: String,
      default: "",
      required: true,
    },
    size: {
      type: String,
      default: "",
      required: false,
    },
  },
  computed: {
    iconName() {
      return `#icon-${this.name}`;
    },
    iconSize() {
      return `${this.size}`;
    },
  },
};
</script>

<style>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  font-size: 1em;
  fill: currentColor;
  overflow: hidden;
}
</style>