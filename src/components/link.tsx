import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
};

export default function Link({ page }: Props) {
  const lowerCasePage = page.toLocaleLowerCase().replace(/ /g, "");

  return (
    <AnchorLink
      className="text-white transition duration-500 hover:text-green-500"
      href={lowerCasePage}
    >
      {page}
    </AnchorLink>
  );
}
