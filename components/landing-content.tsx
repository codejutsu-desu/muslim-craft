"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const learnings = [
  {
    name: "Learn Islamic History",

    description: "Uncover the profound narrative of Islamic history    ",
  },
  {
    name: "Ask Fiqh Question",

    description: "Obtain quick  answers to your Fiqh Mas'ala.",
  },
  {
    name: "Learn Relevant Hadith",

    description:
      "Access Prophetic Narrations, Hadith teachings for guidance.    ",
  },
  {
    name: "Remind yourself",

    description: "Receive daily spiritual Naseehah and guidance.    ",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Making the Most of It
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {learnings.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
