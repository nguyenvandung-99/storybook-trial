/**
 * Create a responsive size object to be used with screenSize helper function
 * @param input [xs, sm, md, lg, xl] | [xs, sm, md, ml, lg, xl]: number
 * @returns {object} { xs, sm, md, ml, lg, xl }
 */
const responsive = (input: number[]) => {
  if (input.length === 5) {
    const [xs, sm, md, lg, xl] = input;
    const ml = md;
    return ({ xs, sm, md, ml, lg, xl })
  }
  if (input.length === 6) {
    const [xs, sm, md, ml, lg, xl] = input;
    return ({ xs, sm, md, ml, lg, xl })
  }
  throw 'Input must be 5 or 6 number';
};

export const carouselOptions = {
  image: {
    count: responsive([1.5, 3.5, 4, 5, 6]),
    headerPadding: responsive([1.9, 2, 2, 2, 2]),
    spaceBetween: 15,
  },
  blog: {
    count: responsive([1, 1.5, 2, 3, 4]),
    headerPadding: responsive([1.5, 2, 2, 2, 2]),
    spaceBetween: 64,
  },
  title: responsive([28, 24, 28, 36, 36]),
  marginLeft: responsive([0, 40, 100, 140, 140]),
  marginRight: responsive([0, 0, 100, 140, 140]),
  marginBottom: responsive([40, 30, 40, 50, 60]),
};

export const carouselImage = responsive([170, 148, 200, 250, 350]);
export const carouselBlog = responsive([130, 161, 161, 180, 180]);
export const blogTitle = {
  fontSize: responsive([18, 18, 20, 22, 26]),
  lineHeight: responsive([21, 21, 23, 25, 29]),
};

export const heroBanner = {
  height: responsive([0, 45, 40, 37.5, 37.5]),
  borderRadius: responsive([0, 2, 2, 2, 2]),
  marginX: responsive([0, 20, 20, 20, 20]),
  marginBottom: responsive([2, 2, -6, -6, -8])
};
export const heroActionSize = responsive([150, 200, 250, 250, 250]);

export const bannerOptions = {
  titleSize: responsive([40, 42, 50, 44, 48, 60]),
  descriptionSize: responsive([14, 14, 17, 15, 16, 20]),
}