import GridItem from "@/components/GridItem";
import { categoryData } from "@/data/Banner";

const CategoriesSection = () => (
  <div className="flex flex-col gap-6 justify-center items-center py-10 my-12">
    <h2 className="text-center font-bold text-4xl text-neutral-800 dark:text-neutral-100">
      Kategori Pilihan
    </h2>
    <p className="text-center text-muted-foreground max-w-2xl">
      Dari perayaan besar hingga cemilan sore, kami memiliki kategori kue yang
      sempurna untuk setiap selera dan acara.
    </p>
    <div className="w-full max-w-6xl mx-auto px-4 mt-6">
      <ul className="grid grid-cols-1 md:grid-cols-11 md:grid-rows-2 gap-4 h-[auto] md:h-[30rem]">
        {categoryData.map((item) => (
          <GridItem
            key={item.title}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            area={item.className}
          />
        ))}
      </ul>
    </div>
  </div>
);

export default CategoriesSection;
