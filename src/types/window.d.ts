interface ExtendedWindow {
  is_mobile: boolean;
}

declare global {
  // eslint-disable-next-line
  interface Window extends ExtendedWindow {}
}

export {};
