import { BirdIcon, CatIcon, DogIcon, FishIcon, Home } from 'lucide-react';
export type iconsTypes = {
  home: string;
  dog: string;
  cat: string;
  fish: string;
  bird: string;
};

export interface NavbarItem {
  label: string;
  href: string;
  iconName: keyof iconsTypes;
}

export const icons = {
  home: Home,
  dog: DogIcon,
  cat: CatIcon,
  fish: FishIcon,
  bird: BirdIcon,
};
export const navbarItems: NavbarItem[] = [
  { label: 'Home', href: '/', iconName: 'home' },
  { label: 'Cachorro', href: '/pages/category-products/dog', iconName: 'dog' },
  { label: 'Gato', href: '/pages/category-products/cat', iconName: 'cat' },
  { label: 'Peixe', href: '/pages/category-products/fish', iconName: 'fish' },
  { label: 'Passaro', href: '/pages/category-products/bird', iconName: 'bird' },
];
