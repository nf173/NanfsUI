<template>
  <!-- 按钮组件 -->
  <button
    class="nf-button"
    :class="[
      type === 'primary' ? 'nf-button--primary' : '',
      size === 'small' ? 'nf-button--small' : '',
      loading === true ? 'is-loading' : '',
      disabled ? 'is-disabled' : '',
    ]"
    :disabled="disabled"
  >
    <nf-icon name="loader" class="nf-icon-loading" v-if="loading"></nf-icon>
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
import NfIcon from "../../nf-icon/src/nf-icon";

export default {
  name: "nf-button",
  components: {
    NfIcon,
  },
  props: {
    type: String,
    size: String,
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
/* normal style */
.nf-button {
  cursor: pointer;
  display: inline-block;
  box-sizing: border-box;
  outline: none;
  padding: 12px 20px;
  border: 1px solid #dbdbdb;
  border-radius: 0px;
  background: none;
  line-height: 1;
  font-weight: 500;
  font-size: 14px;
  color: #666;
  transition: all 0.1s;

  &:hover {
    border: 1px solid #c7c7c7;
    color: #444;
  }

  &:active {
    border: 1px solid #999;
  }
}

/* type='primary' style */
.nf-button--primary {
  border: 1px solid #333;
  background: #333;
  color: #fff;

  &:hover {
    border: 1px solid #555;
    background: #555;
    color: #fff;
  }

  &:active {
    border: 1px solid #333;
    background: #333;
    color: #fff;
  }
}

/* size='small' style */
.nf-button--small {
  padding: 9px 15px;
  font-size: 12px;
}

/* with icon */
.nf-button .svg-icon + span {
  margin-left: 5px;
}

/* loading=true style */
.nf-button.is-loading {
  pointer-events: none;
  position: relative;
}

.nf-button.is-loading:before {
  content: "";
  pointer-events: none;
  position: absolute;
  left: -1px;
  top: -1px;
  right: -1px;
  bottom: -1px;
  border-radius: inherit;
  background-color: hsla(0, 0%, 100%, 0.35);
}

.nf-icon-loading {
  animation: rotating 2s linear infinite;
}

@keyframes rotating {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(1turn);
  }
}

/* disabled normal style */
.nf-button.is-disabled {
  color: #c0c4cc;
  cursor: not-allowed;
  background-image: none;
  background-color: #fff;
  border-color: #ebeef5;
}
</style>