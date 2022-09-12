async function render(elem: ReactElement) {
  const { children } = elem.props;
  const printer = new Printer();

  await printAll(children, { printer });

  return printer.getData();
}

async function printAll(node: ReactNode, context) {
  for (const child of Children.toArray(node)) {
    if (typeof child.type?.print === 'function') {
      await child.type.print(child, context);
    } else {
      await printAll(child.props.children, context);
    }
  }
}
