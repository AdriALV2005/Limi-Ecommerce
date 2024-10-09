import Providers from "@/context/Providers";
import "../styles/main.scss";

export const metadata = {
  title: "Limi-Ecommerce",
  description: "With Next-Js and MongoDB",
};

export default function RootLayout({ children }) {
  return (
    <html className = 'dark'>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
