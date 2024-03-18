import { CurrentStructure } from "./Currents/structure";
import { EntityStructure } from "./Entities/structure";
import { builderStructure } from "./Page Builder/structure";
import { settingsStructure } from "./Site Settings/structure";


export const Structure = (S: any) =>
  S.list()
    .title('Content')
    .items([settingsStructure(S), builderStructure(S), CurrentStructure(S), EntityStructure(S)]);
