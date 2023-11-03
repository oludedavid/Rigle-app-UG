import MainFooter from "../footer/main-footer";
import MainHeader from "../header/main-header";

export default function Layout(props) {
  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
      <MainFooter />
    </>
  );
}
