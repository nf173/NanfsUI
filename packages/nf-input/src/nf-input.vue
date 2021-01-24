<template>
  <div
    class="nf-input"
    :class="[
      size === 'small' ? 'nf-input--small' : '',
      disabled ? 'is-disabled' : '',
      $scopedSlots.prefix ? 'nf-input--prefix' : '',
      $scopedSlots.suffix || clearable ? 'nf-input--suffix' : '',
    ]"
  >
    <span class="nf-input__prefix" v-if="$scopedSlots.prefix">
      <slot name="prefix"></slot>
    </span>

    <input
      ref="input"
      class="nf-input__inner"
      :autocomplete="autocomplete"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :disabled="disabled"
      :value="value"
      :type="type"
      @input="input"
      @change="change"
      @focus="focus"
      @blur="blur"
    />

    <span class="nf-input__suffix" v-if="$scopedSlots.suffix || clearable">
      <slot name="suffix"></slot>

      <nf-icon
        v-show="clearable"
        name="close"
        class="nf-input--clearable"
        @mousedown.prevent
        @click.native="clear"
      ></nf-icon>
    </span>
  </div>
</template>

<script>
export default {
  name: "nf-input",
  props: {
    value: [String, Number],
    size: String,
    maxlength: Number,
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    autocomplete: {
      type: String,
      default: "off",
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    input($e) {
      this.$emit("input", $e.target.value);
    },
    change($e) {
      this.$emit("change", $e.target.value);
    },
    focus() {
      this.$emit("focus");
    },
    blur() {
      this.$emit("blur");
    },
    clear() {
      this.$emit("input", "");
      this.$emit("change", "");
      this.$emit("clear");
      this.$refs.input.value = "";
    },
  },
};
</script>

<style lang='scss'>
/* normal style */
.nf-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
}

.nf-input__inner {
  height: 40px;
  padding: 0 15px;
  box-sizing: border-box;
  border-radius: 0;
  border: 1px solid #dbdbdb;
  outline: none;
  background: #fff;
  line-height: 40px;
  font-size: inherit;
  color: #666;
  transition: all 0.2s ease;

  &:hover {
    border: 1px solid #c0c4cc;
  }

  &:focus {
    border: 1px solid #666;
  }

  &::placeholder {
    color: #999;
  }
}

// 清除 password 样式
input[type="password"]::-ms-reveal {
  display: none;
}

/* size='small' style */
.nf-input--small {
  font-size: 12px;

  .nf-input__inner {
    height: 32px;
    line-height: 32px;
  }
}

/* slot='suffix' style */
.nf-input--suffix .nf-input__inner {
  padding-right: 30px;
}

.nf-input__suffix {
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 100%;
}

.nf-input--clearable {
  cursor: pointer;
  font-size: 14px;
  color: #666;

  &:hover {
    color: #333;
  }
}

/* slot='prefix' style */
.nf-input--prefix .nf-input__inner {
  padding-left: 30px;
}

.nf-input__prefix {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 100%;
}

/* disabled style */
.nf-input.is-disabled .nf-input__inner {
  background-color: #f5f7fa;
  border-color: #e4e7ed;
  cursor: not-allowed;
}
</style>