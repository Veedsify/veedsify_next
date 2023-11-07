// 1. import `ChakraProvider` component
import { Karla } from "next/font/google";
import "./assets/css/style.css"

interface DashboardProps {
  children: React.ReactNode;
}
const font = Karla({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
});

const DashboardLayout = ({ children }: DashboardProps) => {
  return (
    <>
      <html>
        <body className={`${font.className}`}>{children}</body>
      </html>
    </>
  );
};

export default DashboardLayout;
