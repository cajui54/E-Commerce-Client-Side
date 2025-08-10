'use client';
import React from 'react';
import { CgLoadbar } from 'react-icons/cg';
import { FaPlus } from 'react-icons/fa';
import { GiDogBowl } from 'react-icons/gi';
import { TiShoppingCart } from 'react-icons/ti';

import { Button } from '@/components/ui/button';

const ManagerAmount = ({ idProduct }: { idProduct: string }) => {
  const [amount, setAmount] = React.useState(1);

  const handleIncrement = () => {
    setAmount((prev) => (prev += 1));
  };

  const handleDecrement = () => {
    setAmount((prev) => (prev > 1 ? prev - 1 : 1));
  };
  const handleAddOrder = () => {
    console.log(idProduct);
  };
  return (
    <div>
      <div className="flex w-fit items-center gap-3 rounded-2xl p-2">
        <Button
          onClick={handleDecrement}
          title="decrement"
          size="icon"
          className="bg-emerald-400"
        >
          <CgLoadbar />
        </Button>
        <span className="font-brand-oxygen text-lg font-bold text-neutral-600">
          {amount}
        </span>
        <Button
          onClick={handleIncrement}
          size="icon"
          className="bg-emerald-400"
        >
          <FaPlus />
        </Button>
      </div>
      <div className="my-5 space-y-2 sm:w-[350px]">
        <Button className="w-4/5 cursor-pointer" onClick={handleAddOrder}>
          <GiDogBowl />
          Comprar agora
        </Button>

        <Button className="w-4/5 cursor-pointer bg-emerald-500">
          <TiShoppingCart />
          Adicionar ao Carrinho
        </Button>
      </div>
    </div>
  );
};

export default ManagerAmount;
