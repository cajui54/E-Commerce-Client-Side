import { BirdIcon, CatIcon, DogIcon, FishIcon, Home } from 'lucide-react';
type icons = {
  home: string;
  dog: string;
  cat: string;
  fish: string;
  bird: string;
};

export interface NavbarItem {
  label: string;
  href: string;
  iconName: keyof icons;
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
  { label: 'Cachorro', href: '/dog', iconName: 'dog' },
  { label: 'Gato', href: '/cat', iconName: 'cat' },
  { label: 'Peixe', href: '/fish', iconName: 'fish' },
  { label: 'Passaro', href: '/bird', iconName: 'bird' },
];
