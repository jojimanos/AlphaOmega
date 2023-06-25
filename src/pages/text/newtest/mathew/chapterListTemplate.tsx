import Link from "next/link";

function MathewTemplate(props: any): JSX.Element {
  const { mathewsets } = props || {};

  const { title_1, title_2, title_3, title_4, title_5, title_6, link } =
    mathewsets || {};

  const hrefTemplate = link + "[chapter]";

  return (
    <div className="text-center m-3 font-serif">
      <Link
        href={"/text/newtest/mathew/chapters/[chapter]" || ""}
        as="/text/newtest/mathew/chapters/chapter_1"
      >
        <div>
          <p className="text-3xl py-2">1 {title_1 as string}</p>
        </div>
      </Link>
      <Link href={link + "[chapter]" || ""} as={link + "chapter_2"}>
        <div>
          <p className="text-3xl py-2">2 {title_2 as string}</p>
        </div>
      </Link>
      <Link href={link + "[chapter]" || ""} as={link + "chapter_3"}>
        <div>
          <p className="text-3xl py-2">3 {title_3 as string}</p>
        </div>
      </Link>
      <Link href={hrefTemplate || ""} as={link + "chapter_4"}>
        <div>
          <p className="text-3xl py-2">4 {title_4 as string}</p>
        </div>
      </Link>
      <Link href={hrefTemplate || ""} as={link + "chapter_5"}>
        <div>
          <p className="text-3xl py-2">5 {title_5 as string}</p>
        </div>
      </Link>
      {/*
      <Link href={link_2 || ""}>
        <div>
          <p className="text-3xl py-2">6 {title_6 as string}</p>
        </div>
      </Link>
  */}
    </div>
  );
}

export default MathewTemplate;
