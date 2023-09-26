import { render } from '@testing-library/react';

import { ErrorLabel } from './ErrorLabel';

describe('ErrorLabel', () => {
  test('renders ErrorLabel component correctly', () => {
    const { asFragment } = render(<ErrorLabel />);

    expect(asFragment()).toMatchSnapshot();
  });
});
