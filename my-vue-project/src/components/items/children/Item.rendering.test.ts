import type { ItemInterface } from "@/models";
import ItemComponent from "./Item.component.vue";
import { render, screen } from "@/test-utils";

describe('Item.component rendering', () => {
  it('renders an Item text correctly', () => {
    const model: ItemInterface = {
      id: 1,
      name: 'Unit test item 1',
      selected: false,
    }

    const testid = 'unit-test-appearance-1';

    render<typeof ItemComponent>(ItemComponent, {
      props: {
        testid,
        model,
      }
    });

    const liElement = screen.getByTestId(testid);

    expect(liElement).not.toBeNull();
    expect(liElement.innerHTML).toContain('Unit test item 1');
  });

  it('has expected css class when selected is true', () => {
    const model: ItemInterface = {
      id: 1,
      name: 'Unit test item 2',
      selected: true,
    };

    const testid = 'unit-test-appearance-2';

    render<typeof ItemComponent>(ItemComponent, {
      props: {
        testid,
        model,
      }
    });

    const liElement = screen.getByTestId(testid);

    expect(liElement).not.toBeNull();
    expect(liElement.className).toContain('selected');
  });

  it('has expected css class when selected is false', () => {
    const model: ItemInterface = {
      id: 1,
      name: 'Unit test item 3',
      selected: false,
    };

    const testid = 'unit-test-appearance-3';

    render<typeof ItemComponent>(ItemComponent, {
      props: {
        testid,
        model,
      }
    });

    const liElement = screen.getByTestId(testid);

    expect(liElement).not.toBeNull();
    expect(liElement.className).not.toContain('selected');
  });
});
