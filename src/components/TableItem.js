import React from 'react';

export default function TableItem({ transaction }){
    return (
        <tr
            style={{
              backgroundColor: transaction.credit ? '#1CE65B' : '#FF3B38',
              height: 20,
            }}
          >
            <td>{transaction.day}</td>
            <td>{transaction.month}</td>
            <td>{transaction.description}</td>
            <td>{transaction.value}</td>
          </tr>
    );
}