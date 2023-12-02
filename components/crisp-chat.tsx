"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("c3dfd789-0d5e-408b-9fdd-350814587635");
  }, []);

  return null;
};
