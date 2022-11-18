import Link from "next/link";

function Gosp_tem(props: {gospsets: any}): JSX.Element {
  const { gospsets } = props || {};

  const { title_1, title_2, title_3, title_4, link_1, link_2, link_3, link_4 } = gospsets || {};

  return (
    <div className="font-serif">
      <div className="text-3xl text-center m-3">
        <Link href={link_1 as string || ''}>
          <div className="p-5">
            <p className="p-2">1 {title_1 as string}</p>
          </div>
        </Link>
      </div>
      <div className="text-3xl text-center m-3">
        <Link href={link_2 as string || ''}>
          <div className="p-5">
            <p className="p-2">2 {title_2 as string}</p>
          </div>
        </Link>
      </div>
      <div className="text-3xl text-center m-3">
        <Link href={link_3 as string || ''}>
          <div className="p-5">
            <p className="p-2">3 {title_3 as string}</p>
          </div>
        </Link>
      </div>
      <div className="text-3xl text-center m-3">
        <Link href={link_4 as string || ''}>
          <div className="p-5">
            <p className="p-2">4 {title_4 as string}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Gosp_tem;
