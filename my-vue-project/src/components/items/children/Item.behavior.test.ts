import type { ItemInterface } from "@/models";
import ItemComponent from "./Item.component.vue";
import { fireEvent, render, screen } from "@/test-utils";

describe('Item.component: behavior', () => {
  it('click event invokes selectItem handler as expected', () => {
    const model: ItemInterface = {
      id: 1,
      name: 'Unit test item 1',
      selected: false
    };

    const testid = 'unit-test-behavior-1'

    const { emitted } = render<typeof ItemComponent>(ItemComponent, {
      props: {
        testid,
        model,
      }
    });

    const liElement = screen.getByTestId(testid);

    fireEvent.click(liElement);

    const result = emitted() as { selectItem: any[][] }
    expect(result.selectItem).not.toBeUndefined();
    const expectedParam = result.selectItem[0][0];
    expect(expectedParam).not.toBeUndefined();
    expect(expectedParam).toEqual(model.id);
  });
});
