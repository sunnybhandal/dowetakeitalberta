"use client";

import { createContext, useContext, useMemo, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";

type BobChatValue = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const BobChatContext = createContext<BobChatValue | null>(null);

export function BobChatProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const value = useMemo(() => ({ open, setOpen }), [open]);

  return <BobChatContext.Provider value={value}>{children}</BobChatContext.Provider>;
}

export function useBobChat() {
  const value = useContext(BobChatContext);
  if (!value) {
    throw new Error("useBobChat must be used within BobChatProvider");
  }
  return value;
}
