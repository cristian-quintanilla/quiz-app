import { Header } from '../components';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="w-11/12 lg:w-10/12 xl:w-9/12 mx-auto m-4">
        { children }
      </main>
    </>
  );
}
