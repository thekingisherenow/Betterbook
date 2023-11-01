import { PropsWithChildren } from "react";
import { typography } from "../../core/styles/theme";

interface TypographyProps extends PropsWithChildren {
  variation:
    | "title1"
    | "title2"
    | "title3"
    | "title4"
    | "bannerTitle"
    | "bannerSubtitle"
    | "bigvs"                                            
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
    
    default:
      return null;
  }
};

export default Typography;
