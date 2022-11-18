import Link from "next/link";

function Chapmath_tem(props: any): JSX.Element {
  const { chapsets } = props;

  const {
    title_1,
    title_2,
    title_3,
    title_4,
    title_5,
    title_6,
    link_1,
    link_2,
  } = chapsets;

  return (
    <div className="text-center m-3 font-serif">
      <Link href={chapsets?.[link_1 as string]}>
        <div>
          <p className="text-3xl whitespace-pre py-2">1 {chapsets?.[title_1 as string]}</p>
        </div>
      </Link>
      <Link href={link_2 as string}>
        <div>
          <p className="text-3xl whitespace-pre py-2">2 {title_2 as string}</p>
        </div>
      </Link>
      <Link href={link_2 as string}>
        <div>
          <p className="text-3xl whitespace-pre py-2">3 {title_3 as string}</p>
        </div>
      </Link>
      <Link href={link_2 as string}>
        <div>
          <p className="text-3xl whitespace-pre py-2">4 {title_4 as string}</p>
        </div>
      </Link>
      <Link href={link_2 as string}>
        <div>
          <p className="text-3xl whitespace-pre py-2">5 {title_5 as string}</p>
        </div>
      </Link>
      <Link href={link_2 as string}>
        <div>
          <p className="text-3xl whitespace-pre py-2">6 {title_6 as string}</p>
        </div>
      </Link>
    </div>
  );
}

export default Chapmath_tem;
