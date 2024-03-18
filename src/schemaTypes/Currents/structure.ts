import { BsCalendar2Week } from "react-icons/bs";
import { SiBloglovin } from "react-icons/si";
import { MdGroups } from "react-icons/md";
import { MdOutlineLocalOffer } from "react-icons/md";

export const CurrentStructure = (S: any) =>
  S.listItem()
    .title('Currents')
    .icon(BsCalendar2Week)
    .child(
      S.list()
        .title('Current Documents')
        .items([
          S.listItem().title('Blogs').icon(SiBloglovin).child(S.documentList().title('Blogs').filter('_type == "post"')),
          S.listItem().title('Offers').icon(MdOutlineLocalOffer).child(S.documentList().title('Offers').filter('_type == "offers"')),
          S.listItem().title('Groups').icon(MdGroups).child(S.documentList().title('Groups').filter('_type == "groups"')),
        ])
    );
