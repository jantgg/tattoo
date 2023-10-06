"use client";
import Link from "next/link";
import Image from "next/image";
import "./artistas.css";
import { useEffect, useState } from "react";
import AnimatedDivUp from "components/animateddiv/animateddivup.js";
import Footer from "components/footer/footer.js";

export default function Artistas() {

  const [isSmall, setIsSmall] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsSmall(window.innerWidth <= 1200);
      setIsMobile(window.innerWidth <= 700);
    }
  }, []);

  return (
    <main>

    </main>
  );
}
