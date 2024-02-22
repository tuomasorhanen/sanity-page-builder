export const serviceStructure = (S: any) =>
  S.listItem()
    .title('Services')
    .child(
      S.list()
        .title('Service Documents')
        .items([S.listItem().title('Services').child(S.documentList().title('Services').filter('_type == "service"'))])
    );
