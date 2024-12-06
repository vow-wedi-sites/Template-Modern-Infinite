import {
  Alice,
  Rouge_Script,
  Alex_Brush as Font1,
  Nunito_Sans as Font2,
  Playfair_Display as Font3
} from "next/font/google";

const alice = Alice({
  weight: ["400"],
  subsets: ["latin"],
});
const font1 = Font1({
  weight: ["400"],
  subsets: ["latin"],
});

const font2 = Font2({
  weight: ["200", "300", "400", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const font3 = Font3({
  weight: [  "400", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const rouge_Script = Rouge_Script({
  weight: ["400"],
  subsets: ["latin"],
});

const fonts = {
  MainFont: font2.className,
  TitleFont: alice.className,
  rouge_Script: rouge_Script.className,
  font1: font1.className,
  font3: font3.className,
};
export default fonts;
