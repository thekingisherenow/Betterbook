import { PropsWithChildren } from "react";
import { typography } from "../../core/styles/theme";

interface TypographyProps extends PropsWithChildren {
  variation:
    | "title1"
    | "title2"
    | "title3"
    | "subtitle1"
    | "subtitle2"
    | "subtitle3"
    | "subtitle4"
    | "p1"
    | "p2";
}

const Typography: React.FC<TypographyProps> = (props) => {
  const { variation = "p1", children } = props;

  let classNames = typography[variation];

  switch (variation) {
    case "title1":
      return <h1 className={classNames}>{children}</h1>;
    case "title2":
      return <h2 className={classNames}>{children}</h2>;
      case "title3":
      return <h2 className={classNames}>{children}</h2>;
      case "subtitle1":
      return <h3 className={classNames}>{children}</h3>;
    default:
      return null;
  }
};

export default Typography;
