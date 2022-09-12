// 포트 선택하기
const port = await navigator.serial.requestPort();

// 포트 열기
// 장치와 정상적으로 통신하기 위해 baudRate 필수 입력
await port.open({ baudRate: 9600 });

// 포트 데이터 읽기
const reader = port.readable.getReader();
const it = await reader.read();
console.log('value', it.value);
if (it.done) {
  reader.releaseLock();
}

// 포트 데이터 쓰기
const writer = port.writable.getWriter();
await writer.write(new Uint8Array([0x01, 0x02, ...]));
writer.releaseLock();
