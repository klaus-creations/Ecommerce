import PaginationLayout from "@/components/layouts/pagination-layout"
import Heading from "@/components/common/Heading";
import CategoriesTable from "./categories-table"
import AddCategoryDialog from "./add-categories"
export default function AdminCategoriesControl() {
  return (
    <section className="size-full flex flex-col justify-evenly  gap-2">
      <div className="w-full h-[15%] lg:h-[10%]  flex justify-around flex-col">
        <div className="w-full flex justify-between items-center">
          <Heading heading="Products List" />
          <AddCategoryDialog />
        </div>
      </div>

      <div className="w-full h-[90%] lg:h-[90%]  overflow-y-auto">
        <PaginationLayout>
        <CategoriesTable />
        </PaginationLayout>
      </div>
    </section>
  );
}
