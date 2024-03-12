export const personStructure = (S: any) =>
  S.listItem()
    .title('People')
    .child(
      S.list()
        .title('People Documents')
        .items([S.listItem().title('People').child(S.documentList().title('People').filter('_type == "person"'))])
    );
