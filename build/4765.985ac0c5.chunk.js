"use strict";(self.webpackChunkseafood_backend=self.webpackChunkseafood_backend||[]).push([[4765],{14765:e=>{e.exports=JSON.parse(`{"Plugin.name":"SEO Plugin","SEOPage.header.button.edit-component":"Edit SEO component","SEOPage.header.title":"SEO","SEOPage.header.subtitle":"Optimize your content to be SEO friendly","SEOPage.empty-component-layout.github-error":"This GitHub repository doesn't contains shared.seo or shared.meta-social component","SEOPage.empty-component-layout.regexp-error":"Please provide a valid GitHub repository URL","SEOPage.empty-component-layout.no-component":"You don't have any SEO component yet","SEOPage.empty-component-layout.input.tooltip":"The strapi/components GitHub repository contains the default SEO component","SEOPage.info.information":"Make sure to use the imported shared.seo component, name it 'seo' and to add it in the root of your Content-Type.","SEOPage.info.no-collection-types":"You don't have any collection-types yet...","SEOPage.info.no-single-types":"You don't have any single-types yet...","SEOPage.info.create-collection-type":"Create your first collection-type","SEOPage.info.create-single-type":"Create your first single-type","SEOPage.info.added":"Added","SEOPage.info.add":"Add component","SEOPage.info.settings":"Settings","SEOPage.info.settings.meta-title-check":"Meta Title","SEOPage.info.settings.meta-description-check":"Meta Description","SEOPage.info.settings.meta-robots-check":"Meta Robots","SEOPage.info.settings.meta-social-check":"Meta Social","SEOPage.info.settings.word-count-check":"Word Count","SEOPage.info.settings.canonical-url-check":"Canonical URL","SEOPage.info.settings.keyword-density-check":"Keyword Density","SEOPage.info.settings.structured-data-check":"Structured Data","SEOPage.info.settings.alternative-text-check":"Alt Text","SEOPage.info.settings.last-updated-at-check":"Last Updated At","SEOPage.info.settings.cancel.button":"Cancel","SEOPage.info.settings.save.button":"Save","SEOPage.info.settings.information":"Disable SEO checks for this specific content-type.","SEOPage.tab.collection-type-title":"Collection Types","SEOPage.tab.single-type-title":"Single Types","SEOPage.tab-panel.column-name":"Name","SEORightLinks.summary-title":"SEO Summary","SEOSocialPreview.website-url":"url-of-your-website.io","SEOModal.summary-title.meta-title":"Meta Title","SEOModal.summary-title.meta-description":"Meta Description","SEOModal.summary-title.word-counter":"Word Counter","SEOModal.summary-title.word-densisty":"Keyword Density","SEOModal.summary-title.meta-social":"Meta Social Tags","SEOModal.summary-title.canonical-url":"Canonical URL","SEOModal.summary-title.structured-data":"JSON Structured Data","SEOModal.summary-title.meta-robots":"Meta Robots","SEOModal.summary-title.alt-attributes":"Alternative Texts","SEOModal.summary-title.last-updated-at":"Last updated at","SEOChecks.keywordsDensityCheck.default":"Every keyword are used more than 2 times.","SEOChecks.keywordsDensityCheck.no-keywords":"No keywords were found in your SEO component.","SEOChecks.keywordsDensityCheck.one-not-used":"One keyword is not being used in your content.","SEOChecks.keywordsDensityCheck.one-used-once":"One keyword is only used once in your content.","SEOChecks.keywordsDensityCheck.label":"Define keywords you want to rank for in your SEO component. This will analyze the density of your keywords in your 1st level richtext editors.","SEOChecks.alternativeTextCheck.default":"All your images contain an alt attribute! Congrats!","SEOChecks.alternativeTextCheck.intersection-zero":"The name and the alternative text of your images are all the same. Strapi automatically generates the alt attribute from the name by default if the field was empty during the media upload. Having alt attribute clearly describing images is a very good practice.","SEOChecks.alternativeTextCheck.intersection-negative":"image(s) from a media field is/are missing an alt attribute.","SEOChecks.alternativeTextCheck.richtext-missing-one":"At least one image in any 1st level richtext editor is missing an alt attribute.","SEOChecks.alternativeTextCheck.label":"This will check if you have any missing alternative text for your images (media field) and in your 1st level richtext editors.","SEOChecks.alternativeTextCheck.missing-text":"missing alt in the following richtext field:","SEOChecks.canonicalUrlCheck.default":"No canonical URL has been found.","SEOChecks.canonicalUrlCheck.found":"A Canonical URL has been found!","SEOChecks.canonicalUrlCheck.label":"This will check if you have a canonical URL.","SEOChecks.canonicalUrlCheck.url":"Canonical URL:","SEOChecks.lastUpdatedAtCheck.default":"This content was modified over a year ago! Search engines love fresh content.","SEOChecks.lastUpdatedAtCheck.save-content":"You must save this entry first.","SEOChecks.lastUpdatedAtCheck.success":"Awesome! This content was last modified less than a year ago!","SEOChecks.lastUpdatedAtCheck.label":"Search engines love fresh content. This will check if your entry was last modified less than a year ago.","SEOChecks.lastUpdatedAtCheck.last":"Last updated at:","SEOChecks.metaDescriptionCheck.default":"A Meta Description has been found!","SEOChecks.metaDescriptionCheck.not-found":"No Meta Description has been found.","SEOChecks.metaRobotsCheck.default":"Robot meta tags have been found!","SEOChecks.metaRobotsCheck.label":"The robot's meta tag informs search engines which pages on your site should be indexed and more.","SEOChecks.metaSocialCheck.not-found":"No Meta Social tags have been found.","SEOChecks.metaSocialCheck.one":"Only one Meta Social tag is being used.","SEOChecks.metaSocialCheck.configured":"Meta Social tags are configured","SEOChecks.metaSocialCheck.label":"Meta social tags allow you to manage the title, description & image of your posts.","SEOChecks.metaTitleCheck.default":"A Meta Title has been found!","SEOChecks.metaTitleCheck.not-found":"No Meta Title has been found.","SEOChecks.structuredDataCheck.default":"A Structured Data JSON has been found! However, we can't validate the accuracy of its content.","SEOChecks.structuredDataCheck.not-found":"No Structured Data JSON has been found.","SEOChecks.structuredDataCheck.label":"Structured data is a standardized format for providing information about a page and classifying the page content.","SEOChecks.wordCountCheck.default":"You have more than 300 words. The word count is not a direct ranking factor. But your content should be as high quality as possible, with relevant and unique information. To meet these conditions, your content requires a minimum of paragraphs, and therefore of words.","SEOChecks.wordCountCheck.not-found":"No Richtext content have been found.","SEOChecks.wordCountCheck.300":"Your 1st level Richtext contents have less than 300 words.","SEOChecks.wordCountCheck.label":"Your content should be as high quality as possible, with relevant and unique information. Your entry requires a minimum of paragraphs, and therefore of words.","SEOChecks.wordCountCheck.words":"Words:","Modal.seo-component-empy":"Your SEO component is empty...","Tabs.title-settings":"Title settings","Tabs.social-network":"Social networks","Tabs.seo-analyse":"SEO analyze","Title-settings.metaTitle-too-long":"Meta Title is too long","Title-settings.metaTitle-tooltip":"The title tag is one of the first things that users notice in the SERPs. It\u2019s the title of your page that offers a preview of what your content is about.","Title-settings.metaDescription-too-long":"Meta Description is too long","Title-settings.metaDescription-too-short":"Meta Description is too short","Title-settings.metaDescription-tooltip":"The meta description is of equal importance to the title tag. If the title tag is the title that appears at the top of a search result, the meta description is the snippet that displays underneath.","Title-settings.metaTitle-hint":"/60 characters (recommended maximum limit)","Title-settings.metaDescription-hint":"/160 characters (recommended maximum limit)","Social-network.metaTitle-hint":"/60 characters (recommended maximum limit)","Social-network.metaDescription-hint":"/65 characters (recommended maximum limit)","Social-network.accordion.description":"See how your content will look like posted on","Social-network.no-tags":"You don't have any meta social tags yet.","Modal.cancel":"Cancel","Button.see-details":"SEE DETAILS","Button.social-preview":"Social Preview","Button.browser-preview":"Browser Preview","Button.seo-analyze":"SEO Analyze","Good":"Good","Improvements":"Improvements","Bad":"Bad","Social-preview.alert":"Complete your social component to see the preview","Information":"Information"}`)}}]);
