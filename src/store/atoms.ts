import { atom } from "recoil";


export const subIntroState = atom<boolean>({
  key: "subIntroState",
  default: false
});

export const intersectionState = atom<boolean>({
  key: "intersectionState",
  default: false,
});

export const partnerState = atom<boolean>({
  key: "partnerState",
  default: false,
});

export const resetScrollState = atom<boolean>({
  key: "resetScrollState",
  default: false,
});

export const wallState = atom<boolean>({
  key: "wallState",
  default: false,
});

export const joinUsTextState = atom<boolean>({
  key: "joinUsTextState",
  default: false,
});

export const mainAnimationState = atom<boolean>({
  key: "mainAnimationState",
  default: false,
});