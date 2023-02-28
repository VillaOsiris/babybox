import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
};

export default function Link({ page }: Props) {
  const lowerCasePage = page.toLocaleLowerCase().replace(/ /g, "");

  return (
    <AnchorLink
      className="text-green-700 transition duration-500 hover:text-green-400"
      href={lowerCasePage}
    >
      {page}
    </AnchorLink>
  );
}
