"use client";
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";


// Use local API route to avoid CORS issues
const LOCAL_TRANSLATE_API = "/api/translate";

export function TranslatedText({ text }) {
    const { language } = useContext(LanguageContext);
    const [translated, setTranslated] = useState(text);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let cancelled = false;
        if (language === "en") {
            setTranslated(text);
            return;
        }
        setLoading(true);
        fetch(LOCAL_TRANSLATE_API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text, targetLang: language }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (!cancelled && data.translatedText) setTranslated(data.translatedText);
                else if (!cancelled && data.translated) setTranslated(data.translated);
                else if (!cancelled) setTranslated(text);
            })
            .catch(() => {
                if (!cancelled) setTranslated(text);
            })
            .finally(() => {
                if (!cancelled) setLoading(false);
            });
        return () => { cancelled = true; };
    }, [text, language]);

    if (loading) return <span>...</span>;
    return <span>{translated}</span>;
}
