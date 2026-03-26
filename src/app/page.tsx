"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const page = () => {
  return (
    <div>
      <Button onClick={() => toast.success("Wawiwoo!!")}>CLick me </Button>
    </div>
  );
};

export default page;
