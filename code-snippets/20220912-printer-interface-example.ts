const ESC = 0x1b;
const GS = 0x1d;
const LF = 0x0a;

class Printer {
  #data: number[][] = [];
  #characterSet: string;

  newLine() {
    this.#data.push([LF]);
    return this;
  }

  text(text: string) {
    const data = encode(text, this.#characterSet);
    this.#data.push(Array.from(data));
    return this;
  }

  cut() {
    this.#data.push([GS, 0x56, 65, 0]);
    return this;
  }

  setCharacterSet(charcterSet: string) { ... }
  setTextSize(width: number, height: number) { ... }
  setAlign(align: 'left' | 'center' | 'right') { ... }

  getData() {
    return new Uint8Array(this.#data.flat());
  }
}
