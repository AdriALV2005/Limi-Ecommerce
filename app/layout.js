import '../styles/main.scss'

export const metadata = {
  title: "Limi-Ecommerce",
  description: "With Next-Js and MongoDB",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
