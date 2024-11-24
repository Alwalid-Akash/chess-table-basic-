function renderChessboard(pov) {
  const rows = ['8', '7', '6', '5', '4', '3', '2', '1'];
  const cols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  let board = '<table>';

  if (pov === 'white') {
      rows.reverse();
      cols.reverse();
  }

  rows.forEach(row => {
      board += '<tr>';
      cols.forEach((col, index) => {
          const id = col + row;
          const color = (index + rows.indexOf(row)) % 2 === 0 ? 'white' : 'black';
          board += `<td class="cell ${color}" id="${id}">${id}</td>`;
      });
      board += '</tr>';
  });

  board += '</table>';
  return board;
}
