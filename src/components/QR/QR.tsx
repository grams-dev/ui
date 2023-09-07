import React, {
  useState,
  useEffect
} from "react";
import QRCode from "easyqrcodejs";

import { QRProps } from "./QR.types";

/**
 * A QR component can be used to display a QR code based on any text provided. It's aesthetic is defaulted grams but it can be overridden.
 */
const QR: React.FC<QRProps> = ({
  size = 256,
  logo = "https://assets.grams.dev/logo/social.logo.png",
  logoSize = 45,
  text
}) => {

  const code = React.createRef<HTMLDivElement>();

  useEffect(() => {
    new QRCode(code.current, {
      width: size,
      height: size,
      text,
      logo,
      logoWidth: logoSize,
      logoHeight: logoSize
    });
  }, [code]);

  return (
    <div
      data-testid="QR"
    >
      <div ref={code}></div>
    </div>
  );
}

export default QR;
