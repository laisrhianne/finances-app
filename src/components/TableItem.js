import React from 'react';

export default function TableItem({ transaction }){
  let mes = nomearMes(transaction);

    return (
        <tr
            style={{
              backgroundColor: transaction.credit ? '#1CE65B' : '#FF3B38',
              height: 20,
            }}
          >
            <td>{transaction.day}</td>
            <td>{mes}</td>
            <td>{transaction.description}</td>
            <td>R$ {transaction.value}</td>
          </tr>
    );
}

function nomearMes(transaction) {
  let mes = '';
  switch (transaction.month) {
    case 0:
      mes = 'Janeiro'
      break;
  
    case 1:
      mes = 'Fevereiro'
      break;
  
    case 2:
      mes = 'Março'
      break;
  
    case 3:
      mes = 'Abril'
      break;
  
    case 4:
      mes = 'Maio'
      break;
  
    case 5:
      mes = 'Junho'
      break;
  
    case 6:
      mes = 'Julho'
      break;
  
    case 7:
      mes = 'Agosto'
      break;
  
    case 8:
      mes = 'Setembro'
      break;
  
    case 9:
      mes = 'Outubro'
      break;
  
    case 10:
      mes = 'Novembro'
      break;
  
    case 11:
      mes = 'Dezembro'
      break;
  
    default:
      break;
  }

  return mes;
}