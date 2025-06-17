import { TableBody, TableCell, TableRow } from "@/components/ui/table";

const TableSkeleton = () => (
  <TableBody>
    {Array.from({ length: 8 }).map((_, index) => (
      <TableRow key={`skeleton-material-${index}`}>
        {Array.from({ length: 6 }).map((_, cellIndex) => (
          <TableCell key={cellIndex}>
            <div className="h-6 bg-muted animate-pulse rounded-md"></div>
          </TableCell>
        ))}
      </TableRow>
    ))}
  </TableBody>
);

export default TableSkeleton;
