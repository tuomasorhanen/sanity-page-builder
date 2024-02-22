export const blogStructure = (S: any) =>
  S.listItem()
    .title('Current')
    .child(
      S.list()
        .title('Current Documents')
        .items([
          S.listItem().title('Blogs').child(S.documentList().title('Blogs').filter('_type == "post"')),
          S.listItem().title('Offers').child(S.documentList().title('Offers').filter('_type == "offers"')),
          S.listItem().title('Groups').child(S.documentList().title('Groups').filter('_type == "groups"')),
        ])
    );
