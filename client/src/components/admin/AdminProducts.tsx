import DialogC from "./add-product"
import PaginationLayout from "../layouts/pagination-layout"
import Heading from "../common/Heading";
import TableRowC from "./products-table"
import axios from "axios";

export default function AdminProducts() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price.toString());
    formData.append("category", category);
    formData.append("files", imageFile); // Append single file

    try {
      const response = await axios.post("/api/v1/products/new", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Product created:", response.data);
      // Reset form or redirect
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return (
    <section className="size-full flex flex-col justify-evenly  gap-2">
      <div className="w-full h-[15%] lg:h-[10%]  flex justify-around flex-col">
        <div className="w-full flex justify-between items-center">
          <Heading heading="Products List" />
          <DialogC />
        </div>
      </div>

      <div className="size-full h-[90%] lg:h-[90%]  overflow-y-auto">
        <PaginationLayout>
        <TableRowC />
        </PaginationLayout>
      </div>
    </section>
  );
}
