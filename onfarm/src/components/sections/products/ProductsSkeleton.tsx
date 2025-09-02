// components/sections/dashboard/DashboardSkeleton.tsx
import Skeleton from "@/components/ui/Skeleton";

export default function ProductsSkeleton() {
  return (
    <div className="p-4 pt-2">
      {/* navbar ske;eton */}
      <div className="w-full flex items-center justify-start gap-2 p-2 pl-0 mb-4">
        
        <Skeleton className="w-10 h-10"/>
        <Skeleton className="w-96 p-5"/>
      </div>
      {/* Stats Section Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {Array.from({ length: 3 }).map((_, index) => (
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


      <div className="w-full grid lg:grid-cols-4 grid-cols-1 gap-4 mt-3">
        {Array.from({length:10}).map((_, index) =>(
          <div key={index} className="flex flex-col gap-2 p-4 bg-white rounded-md shadow-lg">
              <Skeleton className="w-full items-center h-[200px] justify-center overflow-hidden relative"/>
              <div className="w-full flex items-center justify-center flex-col gap-1">
                  <Skeleton className="w-48 h-6"/>
                  <Skeleton className="w-44 h-6"/>
                  <Skeleton className="w-60 h-6"/>
                  <Skeleton className="w-48 h-6"/>
                  <Skeleton className="w-60 h-6"/>
                  <Skeleton className="w-48 h-6"/>
              </div>
               <div className="w-full">
                  <Skeleton className="w-full h-12"/>
               </div>
          </div>
        ))}
      </div>
    </div>
  );
}