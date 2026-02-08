"use client"
import { useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";

interface LayoutBoxProps {
    children: React.ReactNode;
}

export default function LayoutBox({ children }: LayoutBoxProps) {
    const [sideopen , setsideopen] = useState<boolean>(false);
    
  return (
    <div className=" ">
      
      {/* Header فوق الكل */}
      <Header onMenuClick = {() => setsideopen(!sideopen)}/>

      <div className="flex">
        <SideBar onMenuClick = {() => setsideopen(!sideopen)} isOpen = {sideopen}/>

        <main className="flex-1">
          {children}
        </main>
      </div>

    </div>
    );
}
