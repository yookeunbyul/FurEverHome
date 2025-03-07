/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_KAKAOMAP_KEY: string;
    readonly VITE_API_KEY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Kakao: any;
}
