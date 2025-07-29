type icons = {
  home: string;
  dog: string;
  cat: string;
  fish: string;
};

export interface NavbarItem {
  label: string;
  href: string;
  iconName: keyof icons;
}
export const navbarItems: NavbarItem[] = [
  { label: 'Home', href: '/', iconName: 'home' },
  { label: 'Cachorro', href: '/dog', iconName: 'dog' },
  { label: 'Gato', href: '/cat', iconName: 'cat' },
  { label: 'Peixe', href: '/fish', iconName: 'fish' },
];
