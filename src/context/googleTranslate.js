// Utility to translate text using Google Translate API (client-side, free tier)
// NOTE: For production, use a backend proxy to hide your API key.

const GOOGLE_TRANSLATE_API_URL = "https://translation.googleapis.com/language/translate/v2";

export async function translateText(text, targetLang, apiKey) {
    const res = await fetch(GOOGLE_TRANSLATE_API_URL + `?key=${apiKey}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            q: text,
            target: targetLang,
        }),
    });
    if (!res.ok) throw new Error("Translation failed");
    const data = await res.json();
    return data.data.translations[0].translatedText;
}
