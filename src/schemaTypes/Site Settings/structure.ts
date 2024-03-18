import { RiSettings5Line } from 'react-icons/ri';

export const settingsStructure = (S: any) =>
  S.listItem()
    .title('Site Settings')
    .icon(RiSettings5Line)
    .child(
      S.list()
        .title('Site Settings')
        .items([
          S.documentListItem()
            .title('Site Settings')
            .schemaType('siteSettings')
            .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
        ])
    );
