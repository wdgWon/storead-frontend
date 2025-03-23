"use client";

import { CommonResponse } from "api-domain";

import { Profile } from "@/apis/generated/models";

import { clientInstance } from "../client-instance";

export const userFollow = async (userId: string) => {
  const res = await clientInstance<CommonResponse<Profile>>({
    endPoint: `/profiles/${userId}/follow`,
    method: "POST",
    cache: "no-store",
  });

  return res;
};
