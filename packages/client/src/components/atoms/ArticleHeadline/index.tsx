export type Props = {
  children: JSX.Element | string;
};

export default function ArticleHeadline({ children }: Props) {
  return <h2 className="article-headline">{children}</h2>;
}
