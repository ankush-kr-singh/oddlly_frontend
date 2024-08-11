type ProductDetailsCardProps = {
  bg_img_url: string;
  img_title: string;
  title: string;
  points: { key: string; value: string }[];
  alignment: "LEFT" | "RIGHT";
};

type SectionProps = {
  title?: string;
  className?: string;
  titleStyle?: string;
  children?: React.ReactNode;
};
export type { ProductDetailsCardProps, SectionProps };
