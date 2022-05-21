import HoverImage, { HoverImageProps } from './HoverImage.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Building Blocks/Hover Image',
  component: HoverImage,
} as Meta;

const Template: StoryFn<HoverImageProps> = (args) => ({
  render() {
    return <HoverImage {...args} />;
  },
});

export const Flyers = Template.bind({});
Flyers.args = {
  src: 'https://cdn.shopify.com/s/files/1/0265/1858/5453/products/Schermafbeelding2020-03-15om13.17.21.png?v=1584274660',
  height: 200,
  width: 300,
};
