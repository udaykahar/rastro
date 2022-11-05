import i18next from "i18next";
import { initReactI18next, Trans } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18next
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        debug: true,
        resources: {
            en: {
                translation: {
                    title: "how you can help",
                    desc: "this is description"
                }
            },
            hn: {
                translation: {
                    title: "mu m lele",
                    desc: "mdarchod"
                }
            }
        }
    });

export default i18next;
