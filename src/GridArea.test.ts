import {GridArea} from './GridArea';

describe('Area test suite', () => {
  it('can be instatiated', () => {
    const area = new GridArea(0, 1, 3, 4);

    expect(area.getLeftX()).toBe(0);
    expect(area.getLeftY()).toBe(1);
    expect(area.getRightX()).toBe(3);
    expect(area.getRightY()).toBe(4);
  });
});
