import { RxSwitch } from "react-icons/rx";
import { RiPagesLine } from "react-icons/ri";

export const builderStructure = (S: any) =>
  S.listItem()
    .title('Page Builder')
    .icon(RiPagesLine)
    .child(
      S.list()
        .title('Page Builder')
        .items([
          S.listItem().title('Pages').icon(RiPagesLine).child(S.documentList().title('Pages').filter('_type == "page"')),
          S.listItem().title('Buttons').icon(RxSwitch).child(S.documentList().title('Buttons').filter('_type == "landingPage"')),
        ])
    );
