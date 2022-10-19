import React from 'react';
import List from './List';

const Lists = () => {
    const items: string[] = ['item1', 'item2', 'item3'];
    const onClick = (text: string) => alert(text);
    return (
        <div>
            <List items={items} onClick={onClick}></List> 
        </div>
    );
};

export default Lists;