/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_CI: boolean;
    readonly VITE_MAINTENANCE: string;
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }