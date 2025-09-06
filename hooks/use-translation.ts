"use client"

import { translations, type TranslationKey } from "@/lib/translations"
import { useLanguage } from "./use-language"

export function useTranslation() {
  const { language } = useLanguage()

  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations.en[key] || key
  }

  return { t, language }
}
