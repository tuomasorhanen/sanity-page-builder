import { blogStructure } from '../Blog/structure';
import { faqStructure } from '../Faq/structure';
import { builderStructure } from '../Page Builder/structure';
import { personStructure } from '../Person/structure';
import { serviceStructure } from '../Service/structure';
import { settingsStructure } from '../Site Settings/structure';

export const structure = (S: any) =>
  S.list()
    .title('Content')
    .items([settingsStructure(S), builderStructure(S), blogStructure(S), faqStructure(S), serviceStructure(S), personStructure(S)]);
