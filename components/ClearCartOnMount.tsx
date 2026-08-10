"use client";

import { useEffect } from "react";
import { cartActions } from "@/lib/cart";

// Empties the cart once, after a successful checkout redirect. This calls
// an external store action (not a React state setter), so it's safe to run
// directly in the effect body.
export default function ClearCartOnMount() {
  useEffect(() => {
    cartActions.clear();
  }, []);

  return null;
}
