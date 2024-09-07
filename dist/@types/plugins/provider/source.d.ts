import { ProviderServer } from "./server";
import type { ProviderID } from "./types";
export type ProviderSourceRequest = {
    item_id?: ProviderID;
    game_id: string;
    game_name: string;
};
export type ProviderSourceResponse = {
    id: string;
    name: string;
    description?: string;
    servers: Array<ProviderServer>;
};
//# sourceMappingURL=source.d.ts.map