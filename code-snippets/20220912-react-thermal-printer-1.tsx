const receipt = (
  <Printer characterSet="euc-kr">
    <Text align="center" bold={true}>안녕하세요</Text>
    <Br />
    <QRCode content="https://tossplace.com" />
    <Line />
    <Barcode content="1234567890" />
    <Cut />
  </Printer>
);

const data = await render(receipt);
await writer.write(data);
