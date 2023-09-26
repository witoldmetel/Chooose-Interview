import { render } from '@testing-library/react';

import { Rating } from './Rating';

describe('Rating', () => {
  test('renders Rating component with stars and text', () => {
    const { container, asFragment } = render(<Rating rating={3.5} />);

    const stars = container.querySelectorAll('.chakra-icon');

    expect(stars.length).toBe(5);
    expect(asFragment()).toMatchSnapshot();
  });
});
