import { Magic } from "magic-sdk";
 const createMagic = () => {
   return (
     typeof window !== "undefined" &&
     new Magic(<string>process.env.NEXT_PUBLIC_MAGIC_API_KEY) // ✨
   );
 }; 
 export const magic = createMagic();
console.log("magic set up", magic);
