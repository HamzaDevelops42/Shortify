import { Sour_Gummy } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Particles from "@/components/particles";





const sourGummy = Sour_Gummy({
  weight: '400', // Only 400 is available
  subsets: ['latin'],
});


export const metadata = {
  title: "Shortify-Url Shortener",
  description: "Shortify is a Url Shortener",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${sourGummy.className} antialiased relative`}
      >

        <div style={{ width: '100%', height: '100vh', position: 'absolute', zIndex: '-2' }}>
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={1000}
            particleSpread={10}
            speed={0.2}
            particleBaseSize={200}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>


        <Navbar />
        {children}
      </body>
    </html>
  );
}
