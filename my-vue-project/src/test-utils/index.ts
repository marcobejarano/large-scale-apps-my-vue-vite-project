import { render } from '@testing-library/vue';

const customRender = <T>(ui: T, options = {}) =>
  render(ui, {
    ...options
  });

// Re-export everything from @testing-library/vue
export * from '@testing-library/vue';
// Re-export userEvent from @testing-library/user-event
export { default as userEvent } from '@testing-library/user-event'
// Override render export
export { customRender as render };
