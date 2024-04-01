
import React, { useRef, useEffect } from "react";

function takeEffect (aboutRef1,aboutRef2 )  {

      useEffect(() => {
        const handleScroll = () => {
          const about1 = aboutRef1.current;
          const about2 = aboutRef2.current;
          
          if (about1 && about2) {

            const rect1 = about1.getBoundingClientRect();
            const rect2 = about2.getBoundingClientRect();
            const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
            
            if (rect1.top <= viewHeight && rect1.bottom >= 0) {
              about1.classList.add("animate__animated", "animate__bounceInLeft");
            }
            
            if (rect2.top <= viewHeight && rect2.bottom >= 0) {
              about2.classList.add("animate__animated", "animate__bounceInRight");
            }
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
}

export{takeEffect}