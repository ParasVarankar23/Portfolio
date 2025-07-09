// /src/app/api/translate/route.js
export async function POST(req) {
    const { text, targetLang } = await req.json();

    const res = await fetch("https://libretranslate.com/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            q: text,
            source: "auto",
            target: targetLang,
            format: "text",
        }),
    });

    const data = await res.json();
    return Response.json(data);
}
