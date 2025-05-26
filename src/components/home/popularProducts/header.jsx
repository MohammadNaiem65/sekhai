import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <Badge className="rounded-full border-transparent px-[1.125rem] py-2">
          Featured
        </Badge>
        <h2 className="mt-2 text-[2.5rem] font-medium text-title-one">
          Popular Products
        </h2>
      </div>

      <Button variant="outline">View all courses</Button>
    </div>
  );
}
