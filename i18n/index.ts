import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import * as Localization from "expo-localization";
import AsyncStorage from "@react-native-async-storage/async-storage";
import translationPL from '@/i18n/locales/pl/translationPL.json';
import translationEN from '@/i18n/locales/en/translationEN.json'

const resources = {
    "pl-PL": {translation: translationPL},
    "en-US": {translation: translationEN},
} as const;

export type TranslationKeys = keyof typeof translationPL;

const initI18n = async () => {
    let savedLanguage = await AsyncStorage.getItem("language");

    if (!savedLanguage) {
        savedLanguage = Localization.getLocales()[0].languageTag;
    }

    i18n.use(initReactI18next).init({
        compatibilityJSON: "v4",
        resources,
        lng: savedLanguage,
        fallbackLng: "en-US",
        interpolation: {
            escapeValue: false,
        },
    });
};

initI18n();

export default i18n;