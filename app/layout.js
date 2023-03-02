import TopNav from "@/components/navigation/TopNav";
import Themes from "@/components/Themes";
import Themeprovider from "@/components/Themes";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <Themes>{children}</Themes>
      </body>
    </html>
  );
}
