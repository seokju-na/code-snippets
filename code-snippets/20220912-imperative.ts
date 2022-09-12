const printer =
  document.createElement('printer');
const charSet =
  document.createElement('character-set');
charSet.setAttribute('value', 'euc-kr');

const text = document.createElement('text');
text.setAttribute('align', 'center');
text.setAttribute('width', '2');
text.setAttribute('height', '2');
text.innerText = '안녕하세요!';

const newLine =
  document.createElement('new-line');

printer.appendChild(charSet);
printer.appendChild(text);
printer.appendChild(newLine);
