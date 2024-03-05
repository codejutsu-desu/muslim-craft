"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("02f19258-875a-447c-80b5-ee60a234a2e2");
  }, []);

  return null;
};
