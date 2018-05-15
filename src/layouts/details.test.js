import React from 'react';
import { DetailsLayout } from './details';
import renderer from 'react-test-renderer';

jest.mock('./details.scss', () => ({}));
jest.mock('../components/header/header');
jest.mock('../components/content/content');
jest.mock('../components/footer/footer');
jest.mock('../components/movie-details/movie-details');
jest.mock('../components/sub-header/sub-header');
jest.mock('../components/movie-list/movie-list');

describe('DetailsLayout', () => {
  it('renders', () => {
    const tree = renderer
      .create(<DetailsLayout />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
