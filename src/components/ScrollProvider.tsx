// import React, { useEffect, useRef } from "react";

// interface ScrollProviderProps {
//   children: React.ReactNode;
// }

// const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
//   const wrapperRef = useRef<HTMLDivElement>(null);
//   const contentRef = useRef<HTMLDivElement>(null);
//   const targetScrollTop = useRef(0);
//   const currentScrollTop = useRef(0);
//   const rafId = useRef<number | null>(null);

//   useEffect(() => {
//     const content = contentRef.current;
//     if (!content) return;

//     // Set body overflow to hidden to prevent default scroll behavior
//     document.body.style.overflow = "hidden";

//     // Set content height dynamically
//     content.style.position = "absolute";
//     content.style.width = "100%";
//     content.style.willChange = "transform";

//     const ease = 0.08; // Adjust for smoothness (lower = smoother)
    
//     const smoothScroll = () => {
//       currentScrollTop.current += (targetScrollTop.current - currentScrollTop.current) * ease;
//       content.style.transform = `translateY(-${currentScrollTop.current}px)`;
//       rafId.current = requestAnimationFrame(smoothScroll);
//     };

//     // Start smooth animation loop
//     rafId.current = requestAnimationFrame(smoothScroll);

//     // Scroll event listener
//     const handleScroll = (event: WheelEvent) => {
//       targetScrollTop.current += event.deltaY;
//       targetScrollTop.current = Math.max(0, Math.min(targetScrollTop.current, content.scrollHeight - window.innerHeight));
//     };

//     window.addEventListener("wheel", handleScroll);

//     return () => {
//       window.removeEventListener("wheel", handleScroll);
//       if (rafId.current) cancelAnimationFrame(rafId.current);
//       document.body.style.overflow = ""; // Reset overflow on unmount
//     };
//   }, []);

//   return (
//     <div ref={wrapperRef} style={{ height: "100vh", width: "100vw", overflow: "hidden", position: "relative" }}>
//       <div ref={contentRef}>{children}</div>
//     </div>
//   );
// };

// export default ScrollProvider;

 