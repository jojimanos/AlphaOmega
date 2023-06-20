export default function HtmlText(newtest: any, props: any | null) {
  const { author, chapter, paragraph } = props || {};

  const text = <div>{newtest?.[author]?.[chapter]?.[paragraph]}</div>;

  return text;
}
