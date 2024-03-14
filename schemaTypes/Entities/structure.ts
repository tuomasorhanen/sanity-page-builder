export const EntityStructure = (S: any) =>
  S.listItem()
    .title('Entities')
    .child(
      S.list()
        .title('Entities')
        .items([
          S.listItem().title('People').child(S.documentList().title('People').filter('_type == "person"')),
          S.listItem().title('Locations').child(S.documentList().title('Locations').filter('_type == "location"')),
          S.listItem().title('Forms').child(S.documentList().title('Forms').filter('_type == "form"')),
        ])
    );

