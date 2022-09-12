async function render(elem: ReactElement): Promise<Uint8Array> {
  const { children } = elem.props;
  const printer = new Printer();

  await printAll(children, { printer });

  return printer.getData();
}

async function printAll(node: ReactNode, context) {
  const children = Children.toArray(node);
  for (const child of children) {
    if (typeof child.type?.print === 'function') {
      await child.type.print(child, context);
    } else {
      await printAll(child.props.children, context);
    }
  }
}
