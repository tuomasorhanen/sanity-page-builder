# Sanity Studio README - Extended Version
Welcome to the extended setup guide for your Sanity Studio, designed to manage your website's content efficiently. This document includes instructions on configuring your project, running your local development server, connecting to a frontend repository, and basic guidelines for the special features in this Studio.

## Initial Setup
1. Begin by updating the projectId in your sanity.config.ts file to match your Sanity project's ID.
```
projectId: "your id here",
```
3. Install necessary dependencies:
```
yarn
```
3. Then, start your development server:
```
yarn dev
```
Your Sanity Studio will now be running locally at http://localhost:3333.

## Connecting to the Frontend
A realted frontend repository is available designed to work alongside your Sanity Studio. To integrate with this frontend:
### Fork Before Cloning
Navigate to the repository URL on GitHub: https://github.com/tuomasorhanen/next-sanity-site.git. Click on the "Fork" button at the top right corner of the page. This action creates a copy of the repository under your GitHub account, allowing you to make changes without affecting the original repository.

Once the repository is forked, you can clone it to your local machine. Open your terminal and run the following command, replacing your-username with your GitHub username:
```
git clone https://github.com/your-username/next-sanity-site.git
```

**IMPORTANT!** Create the home page and make sure the slug is **"etusivu"**. This slug is automatically directed to the root path and works as the index page. Note: The name of the page can be anything as long as the slug does not change!

## Sanity Studio Configuration
### Plugins and Tools used in this project

- **Structure Tool:** Customize the document structure within your studio (to create the folders).
- **Vision Tool:** Test and run GROQ queries directly in your studio (developer tool that can be removed if not needed).
- **Media Plugin:** An enhanced media library for managing images and files.
- **Simpler Color Input:** A plugin for color selection in themes and rich text editor (you can configure your own colors in the sanity.config.ts file).

## Comprehensive Studio Overview
**Site Settings:** Manage global settings like company name, logo, SEO metadata, and social links.
**Page Builder:** A tool for creating dynamic pages from a wide range of components.
**Entities:** Contains reusable content snippets such as services, people, Locations, etc., that can be integrated into page content.
**Current:** Dedicated to content types that require frequent updates, like blogs, offers, and groups. This section ensures dynamic content is easily manageable and regularly refreshed.

## Authors notes
This project was created for a real probono client case and some architecture decisions were made based on specific client needs. slugs "pienryhmat", "blogi" and "tarjoukset" have been reserved for Currents content and for these slugs content is predetermined. 

To allow for schema "rich snippets" the slug "faq" will automatically generate a page from all the FAQ's in entities (though the faq's can still be used individually on all pages).
