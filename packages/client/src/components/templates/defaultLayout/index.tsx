import Header from "~/components/molecules/header";

export type Props = {
  children: JSX.Element;
};

export default function defaultLayout({ children }: Props) {
  return (
    <div className="wrapper">
      <Header />
      <main>{children}</main>
    </div>
  );
}
