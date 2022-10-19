import React from "react";

const List = ({
  items,
  onClick,
}: {
  items: string[];
  onClick: (item: string) => void; //void means it doesn't return anything
}) => {
  return (
    <div>
      {items.map((item, index) => (
        <li key={index} onClick={() => onClick(item)}></li>
      ))}
    </div>
  );
};

export default List;
