// import Navbar from "@/components/organisms/Navbar/Navbar";


import { createFileRoute } from "@tanstack/react-router";


export const Route = createFileRoute("/_authenticated/")({
  component: RouteComponent,
});

function RouteComponent() {
  
  return <div className="w-full">{/* <Navbar /> */}</div>;
}
