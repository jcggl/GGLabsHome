"use strict";(self.webpackChunkgoodgang_labs=self.webpackChunkgoodgang_labs||[]).push([[472],{472:(e,n,t)=>{t.r(n),t.d(n,{cookie_consent_banner:()=>r});var o=t(413),i=t(515);const a=e=>document.cookie.split(";").reduce(((e,n)=>{const[t,i]=n.split("="),a=t.trim(),r=i.trim();return(0,o.Z)((0,o.Z)({},e),{},{[a]:r})}),{})[e],r=class{constructor(e){(0,i.r)(this,e),this.eventCookieConsentRestored=(0,i.c)(this,"cookie_consent_preferences_restored",7),this.eventCookieConsentUpdated=(0,i.c)(this,"cookie_consent_preferences_updated",7),this.availableCategories=[],this.cookieName="cookies_accepted_categories",this.cookieDomain=document.location.hostname,this.disableResetSiteCookiesOnConsentWithdrawn=!1,this.disableSlideInAnimation=!1,this.headline=void 0,this.btnLabelAcceptAndContinue=void 0,this.btnLabelOnlyEssentialAndContinue=void 0,this.btnLabelSelectAllAndContinue=void 0,this.btnLabelPersistSelectionAndContinue=void 0,this.contentSettingsDescription=void 0,this.handlePreferencesRestored=void 0,this.handlePreferencesUpdated=void 0,this.isShown=!1,this.acceptedCategoriesNext=[],this.acceptedCategoriesPersisted=[],this.isShownSettings=!1}eventListenerShow(){this.isShown=!0}eventListenerDetailsShow(){this.isShown=!0,this.isShownSettings=!0}componentWillLoad(){const e=this.availableCategories.filter((e=>e.isMandatory)).map((e=>e.key));let n=[];if(document.cookie){const e=a(this.cookieName);n=e?e.split(","):[]}0===n.length?(this.isShown=!0,this.acceptedCategoriesPersisted=e,this.acceptedCategoriesNext=e):(this.acceptedCategoriesPersisted=n,this.acceptedCategoriesNext=n,this.eventCookieConsentRestored.emit({acceptedCategories:n}),this.handlePreferencesRestored&&this.handlePreferencesRestored({acceptedCategories:n}))}persistSelection(){const e=Boolean(this.acceptedCategoriesPersisted.filter((e=>!this.acceptedCategoriesNext.includes(e))).length);!this.disableResetSiteCookiesOnConsentWithdrawn&&e&&document.cookie.split(";").forEach((e=>{document.cookie=e.replace(/^ +/,"").replace(/=.*/,"=;expires=".concat((new Date).toUTCString(),";path=/"))})),this.acceptedCategoriesPersisted=this.acceptedCategoriesNext;const n=this.acceptedCategoriesNext.join(",");document.cookie="".concat(this.cookieName,"=").concat(n,";domain=").concat(this.cookieDomain,";max-age=50400000;path=/"),this.eventCookieConsentUpdated.emit({acceptedCategories:this.acceptedCategoriesPersisted}),this.handlePreferencesUpdated&&this.handlePreferencesUpdated({acceptedCategories:this.acceptedCategoriesPersisted}),this.isShown=!1}handleAcceptAll(){this.acceptedCategoriesNext=this.availableCategories.map((e=>e.key)),this.persistSelection()}handleEssentialsOnly(){const e=this.availableCategories.filter((e=>e.isMandatory));this.acceptedCategoriesNext=e.map((e=>e.key)),this.persistSelection()}render(){return this.isShown?(0,i.h)("div",{class:this.disableSlideInAnimation?"cc cc_disable-slide-in":"cc"},(0,i.h)("div",{class:"cc_body",role:"dialog","aria-modal":"true","aria-label":"Cookie Consent Management",tabIndex:-1},Boolean(this.headline)&&(0,i.h)("h1",{class:"cc_headline"},this.headline),(0,i.h)("form",null,(0,i.h)("p",{class:"cc_text"},(0,i.h)("slot",null)),Boolean(this.isShownSettings)&&(0,i.h)("div",{class:"cc_settings"},(0,i.h)("p",{class:"cc_settings_description"},this.contentSettingsDescription),(0,i.h)("div",{class:"cc_checkboxes"},this.availableCategories.map((e=>{var n;return(0,i.h)("label",{class:"cc_checkboxes_item",htmlFor:"check-category-".concat(e.label)},(0,i.h)("input",{id:"check-category-".concat(e.label),type:"checkbox",disabled:null!==(n=e.isMandatory)&&void 0!==n&&n,checked:this.acceptedCategoriesNext.includes(e.key),onChange:n=>{const t=n.currentTarget.checked;this.acceptedCategoriesNext=t?[...this.acceptedCategoriesNext,e.key]:this.acceptedCategoriesNext.filter((n=>n!==e.key))}})," ",e.label,": ",e.description)})))),(0,i.h)("div",{class:"cc_buttons"},Boolean(this.isShownSettings)&&(0,i.h)("button",{type:"submit",class:"secondary",onClick:()=>this.persistSelection(),onKeyPress:()=>this.persistSelection()},this.btnLabelPersistSelectionAndContinue),!this.isShownSettings&&!!this.btnLabelOnlyEssentialAndContinue&&(0,i.h)("button",{class:"secondary",type:"button",onClick:()=>this.handleEssentialsOnly(),onKeyPress:()=>this.handleEssentialsOnly()},this.btnLabelOnlyEssentialAndContinue),(0,i.h)("button",{onClick:()=>this.handleAcceptAll(),onKeyPress:()=>this.handleAcceptAll(),type:"button"},this.isShownSettings?this.btnLabelSelectAllAndContinue:this.btnLabelAcceptAndContinue))))):null}};r.style=":host{display:block;-webkit-text-size-adjust:100%;--internal-cookie-consent-banner-colors-primary:var(\n    --cookie-consent-banner-colors-primary,\n    var(--theme-ui-colors-primary, #81c784)\n  );--internal-cookie-consent-banner-colors-primary-border:var(\n    --cookie-consent-banner-colors-primary,\n    var(--theme-ui-colors-primary, #81c784)\n  );--internal-cookie-consent-banner-colors-primary-content:var(\n    --cookie-consent-banner-colors-primary-content,\n    var(--theme-ui-colors-white, #fff)\n  );--internal-cookie-consent-banner-colors-secondary:var(\n    --cookie-consent-banner-colors-secondary,\n    var(--theme-ui-colors-secondary, transparent)\n  );--internal-cookie-consent-banner-colors-secondary-border:var(\n    --cookie-consent-banner-colors-secondary-border,\n    var(--theme-ui-colors-white, #fff)\n  );--internal-cookie-consent-banner-colors-secondary-content:var(\n    --cookie-consent-banner-colors-secondary-content,\n    var(--theme-ui-colors-white, #fff)\n  );--internal-cookie-consent-banner-colors-background-body:var(\n    --cookie-consent-banner-colors-background-body,\n    var(--theme-ui-colors-background, rgba(25, 31, 34, 0.92))\n  );--internal-cookie-consent-banner-colors-text:var(\n    --cookie-consent-banner-colors-text,\n    var(--theme-ui-colors-text, #fff)\n  );--internal-cookie-consent-banner-font-family-headline:var(\n    --cookie-consent-banner-font-family-headline,\n    var(--theme-ui-fonts-heading, inherit)\n  );--internal-cookie-consent-banner-font-family-body:var(\n    --cookie-consent-banner-font-family-body,\n    var(--theme-ui-fonts-body, inherit)\n  );--internal-cookie-consent-banner-font-size-headline:var(\n    --cookie-consent-banner-font-size-headline,\n    1.5rem\n  );--internal-cookie-consent-banner-font-size-body:var(\n    --cookie-consent-banner-font-size-body,\n    0.875rem\n  );--internal-cookie-consent-banner-border-radius-buttons:var(\n    --cookie-consent-banner-border-radius-buttons,\n    var(--theme-ui-radii-default, 0.6rem)\n  );--internal-cookie-consent-banner-border-radius-body:var(\n    --cookie-consent-banner-border-radius-body,\n    var(--theme-ui-radii-default, 0)\n  );--internal-cookie-consent-banner-spacings-container-padding-top:var(\n    --cookie-consent-banner-spacings-container-padding-top,\n    var(--theme-ui-spacings-2, 1rem)\n  );--internal-cookie-consent-banner-spacings-container-padding-left:var(\n    --cookie-consent-banner-spacings-container-padding-left,\n    var(--theme-ui-spacings-2, 1rem)\n  );--internal-cookie-consent-banner-spacings-container-padding-bottom:var(\n    --cookie-consent-banner-spacings-container-padding-bottom,\n    var(--theme-ui-spacings-2, 1rem)\n  );--internal-cookie-consent-banner-spacings-container-padding-right:var(\n    --cookie-consent-banner-spacings-container-padding-right,\n    var(--theme-ui-spacings-2, 1rem)\n  );--internal-cookie-consent-banner-spacings-body-padding-top:var(\n    --cookie-consent-banner-spacings-body-padding-top,\n    var(--theme-ui-spacings-2, 0)\n  );--internal-cookie-consent-banner-spacings-body-padding-left:var(\n    --cookie-consent-banner-spacings-body-padding-left,\n    var(--theme-ui-spacings-2, 2rem)\n  );--internal-cookie-consent-banner-spacings-body-padding-bottom:var(\n    --cookie-consent-banner-spacings-body-padding-bottom,\n    var(--theme-ui-spacings-2, 0)\n  );--internal-cookie-consent-banner-spacings-body-padding-right:var(\n    --cookie-consent-banner-spacings-body-padding-right,\n    var(--theme-ui-spacings-2, 2rem)\n  );--internal-cookie-consent-banner-z-index-container:var(\n    --cookie-consent-banner-z-index-container,\n    1\n  )}.launcher{position:fixed;left:0;bottom:0;z-index:var(--internal-cookie-consent-banner-z-index-container);margin-left:1rem;padding-top:1.2rem;padding-left:2rem;padding-bottom:1.2rem;padding-right:2rem;background-color:rgba(25, 31, 34, 0.92);box-shadow:0px -3px 13px 0px rgba(57, 57, 57, 0.38);color:#fff;transform:translateY(70%);transition:transform 1s ease}.launcher:hover{transform:translateY(0)}*,*:before,*:after{box-sizing:border-box}@keyframes slideup{0%{transform:translateY(110vh)}100%{transform:translateY(0vh)}}.cc{position:fixed;left:0;bottom:0;z-index:var(--internal-cookie-consent-banner-z-index-container);width:100%;max-height:100%;max-height:stretch;padding-top:calc(\n    var(--internal-cookie-consent-banner-spacings-container-padding-top) +\n      env(safe-area-inset-top)\n  );padding-left:calc(\n    var(--internal-cookie-consent-banner-spacings-container-padding-left) +\n      env(safe-area-inset-left)\n  );padding-bottom:calc(\n    var(--internal-cookie-consent-banner-spacings-container-padding-bottom) +\n      env(safe-area-inset-bottom)\n  );padding-right:calc(\n    var(--internal-cookie-consent-banner-spacings-container-padding-right) +\n      env(safe-area-inset-right)\n  );overflow-y:auto;transform:translateY(110vh);animation:slideup 1s forwards}.cc_disable-slide-in{transform:none;animation:none}.cc_body{background-color:var(\n    --internal-cookie-consent-banner-colors-background-body\n  );border-radius:var(--internal-cookie-consent-banner-border-radius-body);padding-top:var(--internal-cookie-consent-banner-spacings-body-padding-top);padding-left:var(\n    --internal-cookie-consent-banner-spacings-body-padding-left\n  );padding-bottom:var(\n    --internal-cookie-consent-banner-spacings-body-padding-bottom\n  );padding-right:var(\n    --internal-cookie-consent-banner-spacings-body-padding-right\n  );box-shadow:0px -3px 13px 0px rgba(57, 57, 57, 0.38)}.cc_headline{margin:0;padding-top:2rem;padding-bottom:0;font-size:var(--internal-cookie-consent-banner-font-size-headline);color:var(--internal-cookie-consent-banner-colors-text);font-family:var(--internal-cookie-consent-banner-font-family-headline)}.cc_text{padding-top:1rem;padding-bottom:1.5rem;font-family:var(--internal-cookie-consent-banner-font-family-body)}a,.textlink,::slotted(a){text-decoration:underline;color:var(--internal-cookie-consent-banner-colors-text)}.textlink:hover,::slotted(a:hover){cursor:pointer}label,p,::slotted(label),::slotted(p){box-sizing:border-box;margin:0;min-width:0;max-width:100%;font-size:var(--internal-cookie-consent-banner-font-size-body);line-height:1.37;font-weight:400;letter-spacing:0.02em;color:var(--internal-cookie-consent-banner-colors-text)}.cc_settings{padding-bottom:2rem}.cc_settings_description{padding-bottom:1rem}.cc_checkboxes{display:grid}.cc_checkboxes_item{display:block;width:100%;padding-bottom:1rem;padding-left:0.5rem}.cc_buttons{padding-bottom:1rem;text-align:right}.cc_buttons>button{width:100%;margin-bottom:1rem}.cc_buttons>button:hover{cursor:pointer}@media (min-width: 48em){.cc_buttons>button{width:auto;margin-bottom:0}}button{box-sizing:border-box;min-width:0;appearance:none;display:inline-block;margin-top:0;margin-left:0.25rem;margin-bottom:0;margin-right:0.25rem;padding-top:1rem;padding-left:2.5rem;padding-bottom:1rem;padding-right:2.5rem;background-color:var(--internal-cookie-consent-banner-colors-primary);border-radius:var(--internal-cookie-consent-banner-border-radius-buttons);border-width:1px;border-color:var(--internal-cookie-consent-banner-colors-primary-border);border-style:solid;color:var(--internal-cookie-consent-banner-colors-primary-content);font-size:inherit;font-size:1rem;font-weight:700;line-height:inherit;text-decoration:none;text-align:center}button.secondary{background-color:var(--internal-cookie-consent-banner-colors-secondary);border-color:var(--internal-cookie-consent-banner-colors-secondary-border);color:var(--internal-cookie-consent-banner-colors-secondary-content)}"}}]);