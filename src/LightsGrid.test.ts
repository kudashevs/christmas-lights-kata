import {LightsGrid} from './LightsGrid';

describe('LightsGrid testsuite', () => {
  it('can be instantiated with height/width', () => {
    const grid = new LightsGrid(5, 5);

    expect(grid.getHeight()).toBe(5);
    expect(grid.getWidth()).toBe(5);
  });

  it('can be instantiated with default size', () => {
    const grid = new LightsGrid();

    expect(grid.getHeight()).toBe(1000);
    expect(grid.getWidth()).toBe(1000);
  });

  it('can be instantiated with lights off', () => {
    const grid = new LightsGrid(10, 10);

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        expect(grid.getLight(i, j).isOn()).toBe(false);
      }
    }
  });
});
