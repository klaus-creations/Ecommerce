import PaginationTable from "../../components/common/pagination-table"
import PaginationHeader from "../../components/common/pagination-header"
const PaginationLayout = function ({children}: {children: React.ReactNode}) {
    return <div className="size-full overflow-hidden flex flex-col items-center">
        <div className="w-full h-[7%]">
            <PaginationHeader />
        </div>

        <div className="w-full h-[86%] overflow-hidden">
           { children }
        </div>


       <div className="w-full h-[7%]">
            <PaginationTable />
        </div>
    </div>
}

export default PaginationLayout
