import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

export default function Loading() {
  return (
    <div className="bg-background">
      <section className="bg-muted py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Skeleton className="h-12 w-3/4 mx-auto mb-4" />
          <Skeleton className="h-6 w-1/2 mx-auto" />
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <Card key={i} className="flex flex-col">
                <CardHeader className="items-center text-center">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <Skeleton className="h-8 w-1/2 mt-4" />
                  <Skeleton className="h-5 w-3/4 mt-2" />
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-5/6" />
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-4/6" />
                </CardContent>
                <CardFooter>
                  <Skeleton className="h-12 w-full" />
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
