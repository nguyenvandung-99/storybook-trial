import HeroBanner, { HeroBannerProps } from './HeroBanner.vue';
import { Meta, StoryFn } from '@storybook/vue3';
import vueRouter from 'storybook-vue3-router';

export default {
  title: 'Components/Header Banner',
  component: HeroBanner,
  decorators: [vueRouter()],
} as Meta;

const Template: StoryFn<HeroBannerProps> = (args) => ({
  render() {
    return <HeroBanner {...args} />;
  },
});

export const BannerOne = Template.bind({});
BannerOne.args = {
  title: 'A Very Fancy Title',
  callToAction: 'Biggie button',
  actionURL: '',
  backgroundURL:
    'https://img.freepik.com/vrije-vector/bubble-tea-banner-advertenties-met-opspattende-melk-en-groene-bladeren-3d-illustratie_317442-1436.jpg?w=2000',
  gradient: true,
  beacons: [
    {
      top: 80.2,
      left: 60.8,
      image:
        'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/AE8AB721-ACB5-4E82-845C-75CB6BCFFB96/Derivates/e3b88c15-1aea-4554-b9b0-77514681f359.jpg',
      title: 'Bubble tea',
      action: 'View all bags',
      productURL: '',
    },
    {
      top: 51,
      left: 74.3,
      image:
        'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/AE8AB721-ACB5-4E82-845C-75CB6BCFFB96/Derivates/e3b88c15-1aea-4554-b9b0-77514681f359.jpg',
      title: 'Just the pearls',
      action: 'View all pearls',
      productURL: '',
    },
    {
      top: 94,
      left: 92,
      image: 'https://www.collinsdictionary.com/images/full/leaf_198990134.jpg',
      title: 'Or the mints apparently',
      action: 'View all leaves',
      productURL: '',
    },
  ],
};
