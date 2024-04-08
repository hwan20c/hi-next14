import "../styles/global.css";
import { Metadata } from "next";
import Navigation from "../components/navigation";

export const metadata: Metadata = {
  //최상위의 layout에서는 밑과 같이 설정이 가능하다.
  title: { template: "%s | Next Movies", default: "Next Movies" },
  description: "The best movies on the best framework",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
