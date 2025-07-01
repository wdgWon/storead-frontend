"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

import logo_dark from "@/public/storead_logo_dark.svg";
import logo_light from "@/public/storead_logo_light.svg";
import { useLoginModalStore } from "@/store/login-modal-store";

function Logo() {
  const { close } = useLoginModalStore();
  const { resolvedTheme } = useTheme();

  return (
    <div className="flex items-center justify-center py-6">
      <Link
        href="/"
        onClick={() => close()}
      >
        <Image
          src={resolvedTheme === "dark" ? logo_dark : logo_light}
          alt="storead logo"
          className="w-[var(--logo-width)] h-[var(--logo-height)] object-cover"
          priority
        />
      </Link>
    </div>
  );
}

export default Logo;
