import debounce from "@/utils/debounce";
import { reactive, toRefs } from "vue";

export enum Breakpoint {
  SMALL = 600,
  MEDIUM = 1024,
  MLARGE = 1440,
  LARGE = 1700,
  XLARGE = 2440
}

export enum ScreenSize {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  ml = 'ml',
  lg = 'lg',
  xl = 'xl',
}

const debounceTime = 50;
const navigationWidth = 200;

export default function screenSizeHelper(withNavigation = true) {
  const viewport = reactive({
    width: document.body.clientWidth,
    widthListener() {
      const callback = () => {
        viewport.width = document.body.clientWidth;
      };
      window.addEventListener("resize", debounce(callback, debounceTime));
    },
    get screenSize() {
      const { width } = viewport;
      const { SMALL, MEDIUM, MLARGE, LARGE, XLARGE } = Breakpoint;
      const { xs, sm, md, ml, lg, xl } = ScreenSize;
      if (width <= SMALL) return xs;
      if (width <= MEDIUM) return sm;
      if (width <= MLARGE) return md;
      if (width <= LARGE) return ml;
      if (width <= XLARGE) return lg;
      return xl;
    },
    get isMobile() {
      return this.screenSize === ScreenSize.xs;
    },
    get isTablet() {
      return this.screenSize === ScreenSize.sm;
    },
    get isSmallScreen(): boolean {
      return this.isMobile || this.isTablet;
    }
  })
  viewport.widthListener();

  return {
    ...toRefs(viewport)
  }
}