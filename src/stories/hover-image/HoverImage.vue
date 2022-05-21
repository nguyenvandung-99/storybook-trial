<template>
  <div class="hover-image">
    <img
      :src="src"
      :height="height"
      :width="width"
      :class="{ 'hover-image-enlarge': hover, 'hover-image-wrap': wrap }"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GetPropType from '@/utils/getPropType';

const props = {
  src: {
    type: String,
  },
  height: {
    type: Number,
    default: undefined,
  },
  width: {
    type: Number,
    default: undefined,
  },
  hover: {
    type: Boolean,
    default: false,
  },
  wrap: {
    type: Boolean,
    default: false,
  },
} as const;

export type HoverImageProps = GetPropType<typeof props>;

export default defineComponent({
  name: 'PHoverImage',
  props,
});
</script>

<style lang="scss" scoped>
.hover-image {
  overflow: hidden;
  border-radius: 0.5rem;
  line-height: 0;
  display: inline-block;

  * {
    font-family: 'Barlow', sans-serif;
  }

  img {
    border-radius: 0.5rem;
    margin-bottom: 0rem;
    object-fit: cover;
    transition: transform 0.4s;
  }

  img:hover,
  &-enlarge {
    transform: scale(1.1);
  }

  &-wrap {
    width: 100%;
    height: 100%;
  }
}
</style>
