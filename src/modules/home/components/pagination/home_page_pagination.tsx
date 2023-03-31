import { ButtonGroup, Button, IconButton, Icon } from '@hope-ui/solid';
import { Component, For, Show } from 'solid-js';
import { useProducts } from '../../contexts/product_context';

const HomePagePagination: Component = (props) => {
  const context = useProducts();
  const page = () => context?.page() ?? 0;
  const beforeIndicators = () =>
    Array(2)
      .fill(null)
      .map((_, i) => page() - (i + 1))
      .reverse();
  const afterIndicators = () =>
    Array(3)
      .fill(null)
      .map((_, i) => page() + (i + 1));

  return (
    <>
      <ButtonGroup variant="outline" attached>
        <Button
          class="w-16"
          disabled={page() === 1}
          onclick={() => context?.actions.prevProducts()}
        >
          <i class="fa-solid fa-chevron-left"></i>
        </Button>

        <Show when={page() > 3}>
          <Button onclick={() => context?.actions.goToPage(1)}>1</Button>
          <Button>... </Button>
        </Show>
        <For each={beforeIndicators()}>
          {(item, _) => (
            <>
              <Show when={item > 0}>
                <Button onclick={() => context?.actions.goToPage(item)}>{item}</Button>
              </Show>
            </>
          )}
        </For>
        <Button variant="solid">{page()}</Button>
        <For each={afterIndicators()}>
          {(item, _) => (
            <>
              <Show when={item > 0 && !context?.isLastPage()}>
                <Button onclick={() => context?.actions.goToPage(item)}>{item}</Button>
              </Show>
            </>
          )}
        </For>
        <Button
          class="w-16"
          disabled={context?.isLastPage()}
          onclick={() => context?.actions.nextProducts()}
        >
          <i class="fa-solid fa-chevron-right"></i>
        </Button>
      </ButtonGroup>
    </>
  );
};

export default HomePagePagination;
