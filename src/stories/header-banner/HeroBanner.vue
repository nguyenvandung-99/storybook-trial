<template>
  <div class="hero-banner" ref="heroBannerWrapper" :style="bannerStyle">
    <div class="hero-banner-gradient" v-if="gradient" :style="gradientStyle" />
    <div class="hero-banner-content" :style="contentStyle">
      <div class="hero-banner-title" :style="titleStyle">
        {{ title }}
      </div>
      <router-link
        class="hero-banner-link"
        :to="actionURL"
        :style="actionStyle"
      >
        <div class="hero-banner-link-action">
          <span>{{ callToAction }}</span>
        </div>
      </router-link>
    </div>
    <template v-if="isBeaconShown">
      <PBeacon
        v-for="(beacon, i) in beacons"
        :beacon="beacon"
        :key="i"
        :style="positionBeacon(beacon)"
      />
    </template>
  </div>
</template>

<script lang="ts">
import screenSizeHelper, { Breakpoint } from '@/utils/screenSize';
import { defineComponent, PropType, reactive, toRefs, ref } from 'vue';
import PBeacon, { Beacon } from '@/stories/beacon/Beacon.vue';
import { CSSProperties } from 'vue';
import { heroBanner, heroActionSize } from '@/utils/responsive';
import GetPropType from '@/utils/getPropType';

const mobileScreenSize = Breakpoint.SMALL;
const defaultScreenSize = 1920;

const props = {
  title: String,
  callToAction: {
    type: String,
    required: true,
  },
  actionURL: {
    type: String,
    required: true,
  },
  backgroundURL: {
    type: String,
    required: true,
  },
  gradient: {
    type: Boolean,
    default: false,
  },
  beacons: {
    type: Array as PropType<Beacon[]>,
    default: [],
  },
} as const;

export type HeroBannerProps = GetPropType<typeof props>;

export default defineComponent({
  name: 'PHeroBanner',
  components: {
    PBeacon,
  },
  props,
  setup(props) {
    const heroBannerWrapper = ref(null);
    const { width, screenSize, isMobile } = screenSizeHelper();

    const render = reactive({
      get bannerStyle(): CSSProperties {
        const marginX = `${heroBanner.marginX[screenSize.value]}px`;
        const marginBottom = `${heroBanner.marginBottom[screenSize.value]}rem`;
        return {
          borderRadius: isMobile.value ? 0 : '2rem',
          backgroundImage: `url(${props.backgroundURL})`,
          paddingTop: isMobile.value
            ? `50vh`
            : `${heroBanner.height[screenSize.value]}%`,
          margin: `0 ${marginX} ${marginBottom}`,
        };
      },
      get gradientStyle(): CSSProperties {
        return isMobile.value
          ? {
              backgroundImage:
                'linear-gradient(to top right, black, transparent)',
              width: '100%',
            }
          : {
              backgroundImage: 'linear-gradient(to right, black, transparent)',
              width: '70%',
            };
      },
      get contentStyle() {
        return isMobile.value
          ? {
              width: '80%',
              top: '45%',
              left: '10%',
            }
          : {
              width: '35%',
              top: '25%',
              left: '12%',
            };
      },
      get titleStyle(): CSSProperties {
        const size = isMobile.value
          ? (50 * width.value) / mobileScreenSize
          : (70 * width.value) / defaultScreenSize;
        return {
          fontSize: `${size}px`,
          get lineHeight() {
            return this.fontSize;
          },
        };
      },
      get actionStyle(): CSSProperties {
        const size = heroActionSize[screenSize.value];

        if (!isMobile.value) {
          const padding = size / 12;
          return {
            width: `${size - padding}px`,
            height: `${size / 5}px`,
            paddingLeft: `${padding}px`,
            fontSize: `${size / 15}px`,
          };
        }
        return {
          width: '100%',
          height: `${size / 4}px`,
          textAlign: 'center',
          fontSize: `${size / 10}px`,
        };
      },
    });

    const beacon = reactive({
      get isBeaconShown() {
        return width.value >= Breakpoint.MEDIUM;
      },
      positionBeacon: ({
        top,
        left,
      }: {
        top: number;
        left: number;
      }): CSSProperties => ({
        top: `${top}%`,
        left: `${left}%`,
      }),
    });

    return {
      ...toRefs(render),
      ...toRefs(beacon),
      heroBannerWrapper,
    };
  },
});
</script>

<style lang="scss" scoped>
.hero-banner {
  position: relative;
  background-size: cover;
  overflow: hidden;
  background-position: center center;
  z-index: auto;

  * {
    font-family: Arial, Helvetica, sans-serif;
  }

  > * {
    position: absolute;
  }

  &-development {
    top: 20px;
    left: 20px;
    color: black;
  }

  &-gradient {
    opacity: 0.25;
    height: 100%;
    top: 0;
  }

  &-title {
    color: white;
    font: normal normal 600 82px;
    text-transform: uppercase;
    margin-bottom: 7%;
  }

  &-link {
    display: block;
    background-color: coral;
    border-radius: 0.5rem;

    &:link,
    &:visited,
    &:hover,
    &:active {
      text-decoration: none;
    }

    &-action {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      > * {
        color: white;
        line-height: 0;
        font-weight: 600;
        font-family: Arial, Helvetica, sans-serif;
        padding-bottom: 1%;
      }
    }
  }
}
</style>
