// components/sections/dashboard/DashboardSkeleton.tsx
import Skeleton from "@/components/ui/Skeleton";

export default function DashboardSkeleton() {
  return (
    <div className="p-4 pt-2">
      {/* navbar ske;eton */}
      <div className="w-full flex items-center justify-start gap-2 p-2 pl-0 mb-4">
        
        <Skeleton className="w-10 h-10"/>
        <Skeleton className="w-96 p-5"/>
      </div>
      {/* Stats Section Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow h-30">
              <div className="full h-full flex items-start justify-start gap-4">
                <div>
                  <Skeleton className="w-12 h-12"/>
                </div>
                <div className="flex flex-col gap-6">
                  <Skeleton className="w-56 h-5"/>
                  <Skeleton className="w-48 h-8"/>
                </div>
              </div>
          </div>
        ))}
      </div>

      {/* Notification Card Skeleton */}
      <div className="w-full bg-white p-6 rounded-md mb-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="flex-1">
            <Skeleton className="h-6 w-40 mb-2" />
            <Skeleton className="h-4 w-full mb-1" />
            <Skeleton className="h-4 w-full mb-1" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      </div>

      {/* Tasks Table Skeleton */}
      <div className="w-full bg-white p-4 rounded-md shadow">
        <Skeleton className="h-7 w-24 mb-4" />
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr>
                {Array.from({ length: 6 }).map((_, index) => (
                  <th key={index} className="p-3 text-left">
                    <Skeleton className="h-4 w-20" />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 3 }).map((_, rowIndex) => (
                <tr key={rowIndex} className="border-b border-gray-200">
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <Skeleton className="h-10 w-10 rounded" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                  </td>
                  {Array.from({ length: 4 }).map((_, colIndex) => (
                    <td key={colIndex} className="p-3">
                      <Skeleton className="h-4 w-16" />
                    </td>
                  ))}
                  <td className="p-3">
                    <Skeleton className="h-8 w-16 rounded-md" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Assistance Card Skeleton */}
      <div className="w-full bg-white p-6 mt-6 rounded-md shadow-lg">
        <Skeleton className="h-6 w-40 mb-2" />
        <Skeleton className="h-4 w-64 mb-4" />
        <Skeleton className="h-10 w-32 rounded-lg" />
      </div>
    </div>
  );
}