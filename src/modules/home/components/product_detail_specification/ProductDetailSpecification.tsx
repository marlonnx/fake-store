import { Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot } from '@hope-ui/solid';
import { Component, For } from 'solid-js';

interface IProductDetailSpecification {
  title: string;
  tableContent: { name: string; description: string }[];
}

const ProductDetailSpecification: Component<IProductDetailSpecification> = (props) => {
  return (
    <>
      <Table striped="odd">
        <Thead>
          <Tr>
            <Th>
              <span class="text-lg font-bold">{props.title}</span>
            </Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          <For each={props.tableContent}>
            {(item, index) => (
              <Tr>
                <Td>
                  <span class="font-bold">{item.name}</span>
                </Td>
                <Td>{item.description}</Td>
              </Tr>
            )}
          </For>
        </Tbody>
      </Table>
    </>
  );
};

export default ProductDetailSpecification;
