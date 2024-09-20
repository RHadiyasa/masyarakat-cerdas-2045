import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

const MainPage = () => {
  const tableOfContent = [
    {
      title: "Introduction to Computer System",
    },
    {
      title: "Application Program",
    },
    {
      title: "Programming Language",
    },
    {
      title: "Compiler and Interpreter",
    },
  ];
  return (
    <main className="flex items-start min-h-screen">
      <div className="grid gap-2">
        <Card className="bg-white/10 border-none text-foreground">
          <CardHeader>
            <CardTitle className="font-bold text-xl">
              Algorithm and Programming
            </CardTitle>
            <CardDescription>
              Introduction to Algorithm and Programming
            </CardDescription>
          </CardHeader>
          <CardContent>
            {tableOfContent.map((toc) => (
              <div className="flex items-center space-x-2 py-2">
                <span className="flex h-2 w-2 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {toc.title}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Button>Learn</Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
};

export default MainPage;
