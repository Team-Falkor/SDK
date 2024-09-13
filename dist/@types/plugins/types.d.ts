import { fetch } from "@tauri-apps/plugin-http";
import * as cheerio from "cheerio";
import { toast } from "sonner";
import fuse from "fuse.js";
export declare enum PluginType {
    "provider" = 0
}
export interface PluginMetadata {
    name: string;
    version: string;
    type: PluginType;
    creator?: {
        name: string;
        url?: string;
        image?: string;
        github?: {
            username: string;
            url?: string;
        };
    };
}
export interface PluginContext {
    fetch: typeof fetch;
    toast: typeof toast;
    cheerio: typeof cheerio;
    fuse: typeof fuse;
}
//# sourceMappingURL=types.d.ts.map