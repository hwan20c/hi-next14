import { Metadata } from "next";
import Navigation from "../components/navigation";

export const metadata: Metadata = {
  title: "Not found",
};

export default function NotFound() {
  return (
    <div>
      <Navigation />
      <h1>Not found!</h1>
    </div>
  );
}
