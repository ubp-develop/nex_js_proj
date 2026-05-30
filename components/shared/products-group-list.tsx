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
            price={
              item.pizzas.length
                ? Math.min(...item.pizzas.map((pizza) => pizza.price))
                : 0
            }
            count={0}
          />
        ))}
      </div>
    </div>
  );
};

// import React from 'react';
// import { Product, Pizza } from '@prisma/client';

// import { Title } from './title';
// import { ProductCard } from './product-card';

// type ProductWithPizzas = Product & {
//   pizzas: Pizza[];
// };

// interface Props {
//   title: string;
//   items: ProductWithPizzas[];
//   className?: string;
// }

// export const ProductsGroupList: React.FC<Props> = ({
//   title,
//   items,
//   className,
// }) => {
//   return (
//     <div className={className}>
//       <Title
//         text={title}
//         size="lg"
//         className="font-extrabold mb-5"
//       />

//       <div className="grid grid-cols-3 gap-[50px]">
//         {items.map((item) => (
//           <ProductCard
//             key={item.id}
//             name={item.name}
//             imageUrl={item.imageUrl}
//             price={item.pizzas[0]?.price || 0}
//             count={0}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };


// 1// import React from 'react';
// // import { Title } from './title';
// // import { ProductCard } from './product-card';

// // interface Props {
// //   title: string;
// //   items: any[];
// //   className?: string;
// // }

// // export const ProductsGroupList: React.FC<Props> = ({ title, items, className }) => {
// //   return (
// //     <div className={className}>
// //       <Title text={title} size="lg" className="font-extrabold mb-5" />
// //       <div className="grid grid-cols-3 gap-[50px]">
// //         {items.map((item, i) => (
// //           <ProductCard
// //             key={item.id}
// //             name="Маргарита"
// //             imageUrl="https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp"
// //             price={390}
// //             count={i % 2}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };
