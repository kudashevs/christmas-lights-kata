import {GridNavigator} from './GridNavigator';
import {LightsGrid} from './LightsGrid';

describe('GridNavigator test suite', () => {
  it('can invoke a method on a grid', () => {
    const grid = new LightsGrid(5, 5);

    for (let i = 0; i < grid.getHeight(); i++) {
      for (let j = 0; j < grid.getWidth(); j++) {
        expect(grid.getLight(i, j).isOn()).toBe(false);
      }
    }

    const navigator = new GridNavigator();
    navigator.invoke(grid, 'turnOn');

    for (let i = 0; i < grid.getHeight(); i++) {
      for (let j = 0; j < grid.getWidth(); j++) {
        expect(grid.getLight(i, j).isOn()).toBe(true);
      }
    }
  });
});
