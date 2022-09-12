function Text({ children }: Props) {
  return <span>{children}</span>
}

Text.print = (props: Props, { printer }) => {
  const {
    align = 'left',
    bold = false,
    size = { width: 1, height: 1 },
    invert = false,
    children,
  } = props;

  printer
    .setAlign(align)
    .setTextBold(bold)
    .setTextSize(size.width, size.height)
    .invert(invert)
    .text(children)
    .newLine();
};
