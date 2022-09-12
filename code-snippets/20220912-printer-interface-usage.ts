const printer = new Printer();
const receipt = printer
  .setCharacterSet('euc-kr')
  .setTextSize(2, 2)
  .setAlign('center')
  .text('안녕하세요')
  .newLine()
  .cut()
  .getData();

await writer.write(receipt);
