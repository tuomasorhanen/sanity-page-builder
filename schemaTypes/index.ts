import Offers from "./Blog/Offers";
import groups from "./Blog/groups";
import post from "./Blog/post";
import faq from "./Faq/faq";
import LandingPage from "./Page Builder/landingPage";
import Page from "./Page Builder/page";
import Service from "./Service/Service";
import siteSettings from "./Site Settings/siteSettings";
import Card from "./types/card";
import carousel from "./types/carousel";
import columns from "./types/columns";
import ContactForm from "./types/contactForm";
import content from "./types/content";
import faqList from "./types/faqList";
import grid from "./types/grid";
import metaData from "./types/metadata";
import PriceTable from "./types/priceTable";
import PriceOption from "./types/pricing";
import textContent from "./types/textContent";
import uiElement from "./types/uiElement";
import Cta from "./types/cta";
import Hero from "./types/hero";

export const schemaTypes = [
    Page,
    LandingPage,
    siteSettings,
    post,
    Offers,
    groups,
    Service,
    faq,

    //Objects
    textContent,
    Card,
    ContactForm,
    columns,
    PriceOption,
    metaData,
    grid,
    Hero,
    Cta,
    uiElement,
    content,
    PriceTable,
    faqList,
    carousel,]
