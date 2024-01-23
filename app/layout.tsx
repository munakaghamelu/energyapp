import './globals.css';
import { inter } from '@/app/ui/fonts';
import Image from 'next/image';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
// import './globals.css'
// // import 'react-toastify/dist/ReactToastify.css';

// interface Props {
//   children: React.ReactNode
// }

//  const RootLayout: React.FC <Props> = ({ children } ) => {
//   return (
    
//     <html lang="tr">

//       <head />
//       <body>
//           {children}
//       </body>
//     </html>
//   )
// }

// export default RootLayout