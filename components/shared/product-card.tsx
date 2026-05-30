import React from 'react';
import { Product, Pizza } from '@prisma/client';

import { Title } from './title';
import { ProductCard } from './product-card';

type ProductWithPizzas = Product & {
  pizzas: Pizza[];
};

interface Props {
  title: string;
  items: ProductWithPizzas[];
  className?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  items,
  className,
}) => {
  return (
    <div className={className}>
      <Title
        text={title}
        size="lg"
        className="font-extrabold mb-5"
      />

      <div className="grid grid-cols-3 gap-[50px]">
        {items.map((item) => (
          <ProductCard
            key={item.id}
            name={item.name}
            imageUrl={item.imageUrl}
            price={Math.min(...item.pizzas.map((pizza) => pizza.price))}
          />
        ))}
      </div>
    </div>
  );
};


// import React from 'react';
// import { Button } from '@/components/ui/button';
// import { Plus } from 'lucide-react';
// import { cn } from '@/lib/utils';
// import { Title } from './title';
// import { CountButton } from './count-button';

// interface Props {
//   name: string;
//   price: number;
//   count?: number;
//   imageUrl?: string;
//   className?: string;
// }

// export const ProductCard: React.FC<Props> = ({ name, price, count, imageUrl, className }) => {
//   return (
//     <div className={cn(className)}>
//       <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
//         <img className="w-[215px] h-[215px]" src={imageUrl} alt="Logo" />
//       </div>
//       <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
//       <p className="text-sm text-gray-400">
//         Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок
//       </p>

//       <div className="flex justify-between items-center mt-4">
//         <span className="text-[20px]">
//           от <b>{price} ₽</b>
//         </span>

//         {count ? (
//           <CountButton value={count} size="lg" />
//         ) : (
//           <Button variant="secondary">
//             <Plus className="w-4 h-4 mr-1" />
//             Добавить
//           </Button>
//         )}
//       </div>
//     </div>
//   );
// };
