export const faqStructure = (S: any) =>
  S.listItem()
    .title('Faq')
    .child(
      S.list()
        .title('Faq Documents')
        .items([S.listItem().title('FAQs').child(S.documentList().title('FAQs').filter('_type == "faq"'))])
    );
