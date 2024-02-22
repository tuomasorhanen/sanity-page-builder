import { blogStructure } from "./Blog/structure";
import { faqStructure } from "./Faq/structure";
import { builderStructure } from "./Page Builder/structure";
import { serviceStructure } from "./Service/structure";
import { settingsStructure } from "./Site Settings/structure";


export const Structure = (S: any) =>
  S.list()
    .title('Content')
    .items([settingsStructure(S), builderStructure(S), blogStructure(S), faqStructure(S), serviceStructure(S)]);
