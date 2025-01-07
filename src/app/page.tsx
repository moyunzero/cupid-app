'use client';

import { Button } from "@nextui-org/react";
import { GoSmiley } from "react-icons/go";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Hello World</h1>
      <Button 
        color="primary" 
        variant="shadow" 
        className="mt-4"
        startContent={<GoSmiley />}
      >
        Click me
      </Button>
    </div>
  );
}
