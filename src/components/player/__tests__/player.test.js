import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Player } from '../..';

describe('<Player />', () => {
  it('renders the <Player with a minion video/>', () => {
    const { container, getByText, queryByTestId } = render(
      <Player>
        <Player.Button />
        <Player.Video />
      </Player>
    );

    expect(queryByTestId('player')).toBeFalsy();
    fireEvent.click(getByText('Play'));

    expect(queryByTestId('player')).toBeTruthy();
    fireEvent.click(queryByTestId('player'));

    expect(queryByTestId('player')).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
