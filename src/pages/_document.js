import EVENT_DETAILS from "@/constants/event_details";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {

  const title = `${EVENT_DETAILS.groom.name} & ${EVENT_DETAILS.bride.name}`

  return (
    <Html lang="en">
      <Head />
      <title>{title}</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
