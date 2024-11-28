import React from "react";
import { FixedSizeList as List } from "react-window";

const items = Array.from({ length: 1000 }, (_, index) => `item ${index + 1}`);

function ListVirtualization() {
  return (
    <>
      <h1>List Virtualization</h1>
      <List height={300} itemCount={items.length} itemSize={35} width="100%">
        {({ index, style }) => <li style={style}>{items[index]}</li>}
      </List>
    </>
  );
};

export default ListVirtualization;
