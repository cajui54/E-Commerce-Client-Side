import { CategoryProduct, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function main() {
  const seedCategoryProduct: Pick<CategoryProduct, 'name' | 'slug'>[] = [
    { name: 'Cachorro', slug: 'dog' },
    { name: 'Gato', slug: 'cat' },
    { name: 'Peixe', slug: 'fish' },
    { name: 'Pássaro', slug: 'bird' },
  ];

  const categoryDog = await prisma.categoryProduct.create({
    data: seedCategoryProduct[0],
  });

  const seedDogs = [
    {
      name: 'Golden Seleção Natural',
      brand: 'PremieR Pet',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quis ab molestias harum ex, cumque architecto, labore blanditiis cum deserunt culpa obcaecati eligendi. Enim nostrum ut eaque eius, inventore vitae.',
      slug: 'golden-selecao-natural',
      basePrice: 39.89,
      discountPercentage: 10,
      categoryId: categoryDog.id,
      imagesUrl: [
        'https://ahp1u5zcqg.ufs.sh/f/N8TNIzCsCLpdfNNLjycrm9bWC8qwT3RhZB6YN2SXQFnysLIa',
      ],
    },
    {
      name: 'Pedigree Sashe de Carne',
      brand: 'Pedigree',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quis ab molestias harum ex, cumque architecto, labore blanditiis cum deserunt culpa obcaecati eligendi. Enim nostrum ut eaque eius, inventore vitae.',
      slug: 'pedigree-sashe-carne',
      basePrice: 5.89,
      discountPercentage: 0,
      categoryId: categoryDog.id,
      imagesUrl: [
        'https://ahp1u5zcqg.ufs.sh/f/N8TNIzCsCLpdA3r0GsTEjO2TeyKMbLpDiZq387FUuRoXwnaf',
      ],
    },
    {
      name: 'Pedigree Patê de Carne',
      brand: 'pedigree-pate-carne',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quis ab molestias harum ex, cumque architecto, labore blanditiis cum deserunt culpa obcaecati eligendi. Enim nostrum ut eaque eius, inventore vitae.',
      slug: 'pedigree-sashe-carne',
      basePrice: 15.89,
      discountPercentage: 0,
      categoryId: categoryDog.id,
      imagesUrl: [
        'https://ahp1u5zcqg.ufs.sh/f/N8TNIzCsCLpdA3r0GsTEjO2TeyKMbLpDiZq387FUuRoXwnaf',
      ],
    },
  ];
  await prisma.product.createMany({
    data: seedDogs,
  });

  const categoryCat = await prisma.categoryProduct.create({
    data: seedCategoryProduct[1],
  });
  const seedCats = [
    {
      name: 'Gran Plus',
      brand: 'Choice',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quis ab molestias harum ex, cumque architecto, labore blanditiis cum deserunt culpa obcaecati eligendi. Enim nostrum ut eaque eius, inventore vitae.',
      slug: 'golden-selecao-natural',
      basePrice: 69.89,
      discountPercentage: 0,
      categoryId: categoryCat.id,
      imagesUrl: [
        'https://ahp1u5zcqg.ufs.sh/f/N8TNIzCsCLpdA3nLwbTEjO2TeyKMbLpDiZq387FUuRoXwnaf',
      ],
    },
    {
      name: 'Whiskas Petisco',
      brand: 'Whiskas',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quis ab molestias harum ex, cumque architecto, labore blanditiis cum deserunt culpa obcaecati eligendi. Enim nostrum ut eaque eius, inventore vitae.',
      slug: 'whiskas-petisco',
      basePrice: 3.89,
      discountPercentage: 0,
      categoryId: categoryCat.id,
      imagesUrl: [
        'https://ahp1u5zcqg.ufs.sh/f/N8TNIzCsCLpdQA9hHhE1oNJflM8vgES9jOT5mkbyxA2dYDpc',
      ],
    },
  ];
  await prisma.product.createMany({
    data: seedCats,
  });

  const categoryFish = await prisma.categoryProduct.create({
    data: seedCategoryProduct[2],
  });
  const seedFishs = [
    {
      name: 'Ração Tetra Min',
      brand: 'Tetra',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quis ab molestias harum ex, cumque architecto, labore blanditiis cum deserunt culpa obcaecati eligendi. Enim nostrum ut eaque eius, inventore vitae.',
      slug: 'racao-tetra-min',
      basePrice: 89.89,
      discountPercentage: 0,
      categoryId: categoryFish.id,
      imagesUrl: [
        'https://ahp1u5zcqg.ufs.sh/f/N8TNIzCsCLpdSf0Pvxhkdfh0mop5F4tU28iGCEYTLvZPwyWH',
      ],
    },
    {
      name: 'Ração Nutricon Bottom Premium',
      brand: 'Nutricon',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quis ab molestias harum ex, cumque architecto, labore blanditiis cum deserunt culpa obcaecati eligendi. Enim nostrum ut eaque eius, inventore vitae.',
      slug: 'racao-nutricon-bottom-premium',
      basePrice: 35.89,
      discountPercentage: 0,
      categoryId: categoryFish.id,
      imagesUrl: [
        'https://ahp1u5zcqg.ufs.sh/f/N8TNIzCsCLpdQA9hHhE1oNJflM8vgES9jOT5mkbyxA2dYDpc',
      ],
    },
    {
      name: 'Ração Tetra Color',
      brand: 'Tetra',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quis ab molestias harum ex, cumque architecto, labore blanditiis cum deserunt culpa obcaecati eligendi. Enim nostrum ut eaque eius, inventore vitae.',
      slug: 'racao-nutricon-bottom-premium',
      basePrice: 65.89,
      discountPercentage: 0,
      categoryId: categoryFish.id,
      imagesUrl: [
        'https://ahp1u5zcqg.ufs.sh/f/N8TNIzCsCLpduqdBR5JxFfU4Ck15rOgdEhPDLT8YM0yS27ln',
      ],
    },
    {
      name: 'Tetra Aqua Safe',
      brand: 'Tetra',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quis ab molestias harum ex, cumque architecto, labore blanditiis cum deserunt culpa obcaecati eligendi. Enim nostrum ut eaque eius, inventore vitae.',
      slug: 'racao-nutricon-bottom-premium',
      basePrice: 25.89,
      discountPercentage: 0,
      categoryId: categoryFish.id,
      imagesUrl: [
        'https://ahp1u5zcqg.ufs.sh/f/N8TNIzCsCLpdfOvRUzcrm9bWC8qwT3RhZB6YN2SXQFnysLIa',
      ],
    },
  ];
  await prisma.product.createMany({
    data: seedFishs,
  });

  const categoryBird = await prisma.categoryProduct.create({
    data: seedCategoryProduct[3],
  });
  const seedBirds = [
    {
      name: 'Ração Nutrópica',
      brand: 'Nutrópica',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quis ab molestias harum ex, cumque architecto, labore blanditiis cum deserunt culpa obcaecati eligendi. Enim nostrum ut eaque eius, inventore vitae.',
      slug: 'racao-nutropica-premium',
      basePrice: 109.89,
      discountPercentage: 0,
      categoryId: categoryBird.id,
      imagesUrl: [
        'https://ahp1u5zcqg.ufs.sh/f/N8TNIzCsCLpdYGwhQC5MtFS0WzpvLqEAiU1OVC74bfI5Xdsh',
      ],
    },
    {
      name: 'Ração Petz Calopsita',
      brand: 'Petz',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quis ab molestias harum ex, cumque architecto, labore blanditiis cum deserunt culpa obcaecati eligendi. Enim nostrum ut eaque eius, inventore vitae.',
      slug: 'racao-petz-calopsita',
      basePrice: 35.89,
      discountPercentage: 0,
      categoryId: categoryBird.id,
      imagesUrl: [
        'https://ahp1u5zcqg.ufs.sh/f/N8TNIzCsCLpdP5AgFM4UT5rk42t0BVcfbhnxzA8RCQMoygPH',
      ],
    },
    {
      name: 'Ração Nutrópica Calopsita',
      brand: 'Nutrópica',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quis ab molestias harum ex, cumque architecto, labore blanditiis cum deserunt culpa obcaecati eligendi. Enim nostrum ut eaque eius, inventore vitae.',
      slug: 'acao-nutropica-calopsita',
      basePrice: 65.89,
      discountPercentage: 0,
      categoryId: categoryBird.id,
      imagesUrl: [
        'https://ahp1u5zcqg.ufs.sh/f/N8TNIzCsCLpddL0BxgpCn9G4uJgHOKsX06y1LYMf7INvbhwF',
      ],
    },
  ];
  await prisma.product.createMany({
    data: seedBirds,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
