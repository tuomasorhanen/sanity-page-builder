import { TbLetterE } from "react-icons/tb";
import { RiServiceFill } from "react-icons/ri";
import { FaQuestion } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";
import { SiReacthookform } from "react-icons/si";

export const EntityStructure = (S: any) =>
  S.listItem()
    .title('Entities')
    .icon(TbLetterE)
    .child(
      S.list()
        .title('Entities')
        .items([
          S.listItem().title('Services').icon(RiServiceFill).child(S.documentList().title('Services').filter('_type == "service"')),
          S.listItem().title('FAQs').icon(FaQuestion).child(S.documentList().title('FAQs').filter('_type == "faq"')),
          S.listItem().title('People').icon(MdGroups).child(S.documentList().title('People').filter('_type == "person"')),
          S.listItem().title('Locations').icon(FaLocationDot).child(S.documentList().title('Locations').filter('_type == "location"')),
          S.listItem().title('Forms').icon(SiReacthookform).child(S.documentList().title('Forms').filter('_type == "form"')),
        ])
    );

