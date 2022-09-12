const receipt = (
  <Printer type="epson" characterSet="korea" width={42}>
    <Text
      align="center"
      invert={true}
      bold={true}
      size={{ width: 1, height: 2 }}
    >
      React로 영수증 출력해보기
    </Text>
    <Text align="center">@ JSConf Korea 2022</Text>
    <Line />
    <Row left={<Text bold={true}>발표자</Text>} right="나석주" />
    <Row left={<Text bold={true}>일자</Text>} right="2022년 9월 17일" />
    <Row left={<Text bold={true}>시간</Text>} right="12:00 - 12:25" />
    <Line />
    <Barcode align="center" type="CODE39" content="1234567890" />
    <Cut />
  </Printer>
);

const data = await render(receipt);
await writer.write(data);
