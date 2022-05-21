<template>
  <div class="beacon-wrapper" @mouseenter="toggleHover(true)" @mouseleave="toggleHover(false)">
    <div
      class="beacon-circle"
      :class="{ 'beacon-circle-hover': allHover }"
      @mouseenter="beaconHover = true"
      @mouseleave="beaconHover = false"
    >
      <div class="beacon-circle-outer">
        <div class="beacon-circle-inner" :class="{ 'beacon-circle-inner-hover': beaconHover }" />
      </div>
    </div>
    <transition name="fade" @mouseenter="modalHover = true" @mouseleave="modalHover = false">
      <router-link
        class="beacon-modal"
        v-show="allHover"
        :style="modalStyle"
        :to="beacon.productURL"
      >
        <PHoverImage
          :src="beacon.image"
          :height="beaconInfo.height"
          :width="beaconInfo.height"
          :extHover="modalHover"
          class="beacon-modal-image"
          zoomOnHover
        />
        <div class="beacon-modal-info">
          <div class="beacon-modal-info-title" :class="{ 'beacon-modal-info-hover': modalHover }">
            {{ beacon.title }}
          </div>
          <div class="beacon-modal-info-action">
            {{ beacon.action }}
          </div>
        </div>
      </router-link>
    </transition>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, defineComponent, PropType } from 'vue';
import PHoverImage from '@/stories/hover-image/HoverImage.vue';
import screenSizeHelper from '@/utils/screenSize';
import debounce from '@/utils/debounce';
import GetPropType from "@/utils/getPropType";

const widthRatio = 0.18;
const heightFactor = 0.4;
const titleFactor = 0.07;
const actionFactor = 0.05;

export interface Beacon {
  top: number;
  left: number;
  image: string;
  title: string;
  action: string;
  productURL: string;
}

const props = {
  beacon: {
    type: Object as PropType<Beacon>,
    required: true,
  },
} as const;

export type BeaconProps = GetPropType<typeof props>;

export default defineComponent({
  name: 'PBeacon',
  components: {
    PHoverImage,
  },
  props,
  setup(props) {
    const { width: screenWidth } = screenSizeHelper();

    const hover = reactive({
      beaconHover: false,
      modalHover: false,
      allHover: false,
    });
    const debounceHover = debounce((newState: boolean) => (hover.allHover = newState), 400);
    const toggleHover = (newState: boolean) => {
      if (newState) hover.allHover = newState;
      debounceHover(newState);
    };

    const render = reactive({
      get modalStyle() {
        const horizontalBase = props.beacon.top > 80 ? 'bottom' : 'top';
        const verticalBase = props.beacon.left > 75 ? 'right' : 'left';

        return {
          [horizontalBase]: 0,
          [verticalBase]: '100%',
        };
      },
      get beaconInfo() {
        return {
          width: screenWidth.value * widthRatio,
          get height() {
            return this.width * heightFactor;
          },
          get widthPX() {
            return `${this.width}px`;
          },
          get titleSizePX() {
            return `${this.width * titleFactor}px`;
          },
          get actionSizePX() {
            return `${this.width * actionFactor}px`;
          },
        };
      },
    });

    return {
      ...toRefs(hover),
      toggleHover,
      ...toRefs(render),
    };
  },
});
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.beacon {
  &-wrapper {
    position: relative;
    padding: 0 0.7rem;
    display: inline-block;
    font-family: Arial, Helvetica, sans-serif;
  }

  &-circle {
    position: relative;

    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -0.75rem;
      margin-left: -0.75rem;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      border-style: solid;
      border-width: 0.1rem;
      border-color: white;
      box-sizing: border-box;
      animation: scale-after 2s infinite 0.3s;
      transition: border-color 0.2s ease;
    }

    @keyframes scale-after {
      0% {
        transform: scale(0);
        opacity: 1;
      }

      40% {
        opacity: 0.5;
      }

      100% {
        transform: scale(2);
        opacity: 0;
      }
    }

    &-hover:after {
      border-color: transparent;
    }

    &-outer {
      background-color: white;
      border-radius: 50%;
      height: 1.5rem;
      width: 1.5rem;
      z-index: 5;
      position: relative;
    }

    &-inner {
      position: absolute;
      background-color: DodgerBlue;
      border-radius: 50%;
      height: 25%;
      width: 25%;
      top: 37.5%;
      left: 37.5%;
      z-index: 5;

      &-hover {
        background-color: lighten($color: DodgerBlue, $amount: 20%);
      }
    }
  }

  &-modal {
    position: absolute;
    border-radius: 0.5rem;
    background-color: white;
    width: v-bind('beaconInfo.widthPX');
    padding: 0.6rem;
    display: flex;
    gap: 1rem;

    &:link,
    &:visited,
    &:hover,
    &:active {
      text-decoration: none;
    }

    &:hover {
      box-shadow: 0px 1px 15px #00000026;
    }

    &-image {
      flex-shrink: 0;
    }

    &-info {
      padding: 2px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      &-title {
        color: grey;
        font-weight: 600;
        font-size: v-bind('beaconInfo.titleSizePX');
        transition: color 0.2s ease;
        line-height: 1.4;
      }

      &-hover {
        color: DodgerBlue;
      }

      &-action {
        font-weight: 600;
        font-size: v-bind('beaconInfo.actionSizePX');
        color: DodgerBlue;
      }
    }
  }
}
</style>
