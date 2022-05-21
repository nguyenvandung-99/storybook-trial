import Beacon, { BeaconProps } from './Beacon.vue';
import { Meta, StoryFn } from '@storybook/vue3';
import vueRouter from 'storybook-vue3-router';

export default {
  title: 'Building Blocks/Beacon',
  component: Beacon,
  decorators: [vueRouter()],
} as Meta;

const Template: StoryFn<BeaconProps> = (args) => ({
  render() {
    return <Beacon {...args} />;
  },
});

export const Flyers = Template.bind({});
Flyers.args = {
  beacon: {
    top: 0,
    left: 0,
    image:
      'https://www.yourlittleblackbook.me/wp-content/uploads/2020/09/bubble-tea-amsterdam-mrstacks-2.jpg',
    title: 'Bubble tea cup',
    action: 'View all bags',
    productURL: '',
  },
};
