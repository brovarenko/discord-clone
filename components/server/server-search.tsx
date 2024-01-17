"use client";

interface ServerSearchProps {
  data: {
    label: string;
    type: "channel" | "member";
    data: {
      icon: React.ReactNode;
      name: string;
      id: string;
    }[];
  }[];
}

export const ServerSearch = () => {
  return <div>Server Search Component</div>;
};
