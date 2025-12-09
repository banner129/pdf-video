// .source folder will be generated when you run `next dev`
import { docs } from "@/.source";
import { loader } from "fumadocs-core/source";
import { icons } from "lucide-react";
import type { I18nConfig } from "fumadocs-core/i18n";
import { createElement } from "react";

// 在构建时只使用英文，避免 Orama 搜索库不支持中文导致的错误
// 运行时仍然支持多语言，只是搜索功能使用英文
export const i18n: I18nConfig = {
  defaultLanguage: "en",
  languages: process.env.NODE_ENV === "production" ? ["en"] : ["en", "zh"],
};

export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
  i18n,
  icon(icon) {
    if (!icon) {
      // You may set a default icon
      return;
    }
    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
  },
});
