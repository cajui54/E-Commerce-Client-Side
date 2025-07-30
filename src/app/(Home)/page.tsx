import HeaderMain from '../_components/header-main';
import Hero from '../_components/hero';
import NavbarCategory from '../_components/navbar-category';

export default function Home() {
  return (
    <div className="h-full w-full space-y-2">
      <HeaderMain />
      <Hero />
      <NavbarCategory />
    </div>
  );
}
