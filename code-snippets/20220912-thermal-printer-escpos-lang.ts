const writer = port.writable.getWriter();
const data = [
  // ESC R n (euc-kr 사용)
  0x1b, 0x52, 0x0d,
  // 안녕하세요! (euc-kr)
  0xbe, 0xc8, 0xb3, 0xe7, 0xc7, 0xcf,
  0xbc, 0xbc, 0xbf, 0xe4, 0x21,
  // LF (출력 및 개행)
  0x0a,
  // ESC @ (초기화)
  0x1b, 0x40
];

await writer.write(new Uint8Array(data));
