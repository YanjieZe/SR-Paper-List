import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SR Papers | Robot learning in Science Robotics',
  description:
    'Every learning-based robotics paper in Science Robotics, January 2020 to September 2026, tagged by task and by learning method.',
};

export const viewport = {
  themeColor: '#f2f2f7',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
