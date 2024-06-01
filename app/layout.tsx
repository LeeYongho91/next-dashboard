import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {




  function add(a:number, b: number) {
    return a+b;
  }

  let name = 10;

  const foo = {
    x: [1,2,3],
    bar: {
      name: 'test'
    }
  }

const response = fetch("http://naver.com")

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
