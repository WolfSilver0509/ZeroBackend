"use strict";

// DATA
const includes = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const excludes = [":", ",", "#", "°", "-", "/", "\\", ";", "@", "$", "%", "(", ")", "[", "]", "{", "}", "à", "â", "ª", "æ", "á", "ä", "ã", "å", "ā", "é", "è", "ê", "ë", "ę", "ė", "ē", "û", "ù", "ü", "ú", "ū", "î", "ï", "ì", "í", "į", "ī", "ô", "œ", "º", "ö", "ò", "ó", "õ", "ø", "ō", "ÿ", "ç", "ć", "č", "ñ", "ń", "$", "€", "*", "`", "£", "=", "+", "&", "§", "..", " "];
const exts = ["abogado", "academy", "accountant", "accountants", "actor", "adult", "ae", "africa", "agency", "ai", "airforce", "alsace", "amsterdam", "apartments", "app", "archi", "army", "art", "asia", "associates", "at", "attorney", "auction", "audio", "autos", "baby", "band", "bank", "bar", "barcelona", "bargains", "basketball", "bayern", "be", "beauty", "beer", "berlin", "best", "bet", "bible", "bid", "bike", "bingo", "bio", "biz", "biz", "black", "blackfriday", "blog", "blue", "boats", "boston", "boutique", "br.com", "brussels", "build", "builders", "business", "buzz", "bzh", "cab", "cafe", "cam", "camera", "camp", "capetown", "capital", "cards", "care", "career", "careers", "casa", "cash", "casino", "catering", "cc", "cc", "center", "ceo", "cfd", "ch", "charity", "chat", "cheap", "christmas", "church", "city", "claims", "cleaning", "click", "clinic", "clothing", "cloud", "club", "cn", "co", "co", "co.uk", "coach", "codes", "coffee", "college", "cologne", "com", "com.br", "community", "company", "compare", "computer", "condos", "construction", "consulting", "contact", "contractors", "cooking", "cool", "corsica", "country", "coupons", "courses", "credit", "creditcard", "cricket", "cruises", "cymru", "cyou", "cz", "dance", "date", "dating", "de", "deals", "degree", "delivery", "democrat", "dental", "dentist", "desi", "design", "dev", "diamonds", "diet", "digital", "direct", "directory", "discount", "dog", "domains", "download", "durban", "earth", "eco", "education", "email", "energy", "engineer", "engineering", "enterprises", "equipment", "es", "estate", "eu", "eu", "eus", "events", "exchange", "expert", "exposed", "express", "fail", "faith", "family", "fan", "fans", "farm", "fashion", "film", "finance", "financial", "fish", "fishing", "fit", "fitness", "flights", "florist", "flowers", "fm", "football", "forsale", "foundation", "fr", "frl", "fun", "fund", "furniture", "futbol", "fyi", "gal", "gallery", "game", "games", "garden", "gay", "gdn", "gent", "gift", "gifts", "gives", "glass", "global", "gmbh", "gold", "golf", "gr", "graphics", "gratis", "green", "gripe", "group", "guide", "guitars", "guru", "hair", "hamburg", "haus", "health", "healthcare", "help", "hiphop", "hiv", "hockey", "holdings", "holiday", "homes", "horse", "host", "hosting", "house", "how", "icu", "id", "im", "immo", "immobilien", "in", "industries", "info", "info", "ink", "institute", "insure", "international", "investments", "io", "irish", "ist", "istanbul", "it", "jetzt", "jewelry", "jobs", "joburg", "jp", "juegos", "kaufen", "kim", "kitchen", "kiwi", "koeln", "land", "lat", "law", "lawyer", "lease", "legal", "lgbt", "li", "life", "lighting", "limited", "limo", "link", "live", "llc", "loan", "loans", "lol", "london", "lotto", "love", "lt", "ltd", "ltda", "lu", "luxe", "luxury", "ly", "ly", "madrid", "maison", "makeup", "management", "market", "marketing", "markets", "mba", "me", "me", "media", "melbourne", "memorial", "men", "menu", "mg", "miami", "mobi", "mobi", "moda", "moe", "moi", "mom", "money", "monster", "mortgage", "moscow", "motorcycles", "movie", "museum", "mx", "mx", "nagoya", "navy", "net", "network", "news", "ngo", "ninja", "nl", "nowruz", "nrw", "nyc", "nz", "observer", "one", "onl", "online", "ooo", "org", "organic", "osaka", "page", "paris", "partners", "parts", "party", "pe", "pet", "photo", "photography", "photos", "physio", "pics", "pictures", "pink", "pizza", "place", "plumbing", "plus", "pm", "pm", "poker", "porn", "press", "pro", "productions", "promo", "properties", "property", "pt", "pub", "pw", "qa", "qpon", "quebec", "quest", "racing", "radio", "re", "re", "realestate", "realty", "recipes", "red", "rehab", "reise", "reisen", "rent", "rentals", "repair", "report", "republican", "rest", "restaurant", "review", "reviews", "rio", "rip", "rocks", "rodeo", "rugby", "ruhr", "run", "saarland", "sale", "salon", "sarl", "sbs", "school", "schule", "science", "scot", "se", "select", "services", "sex", "sexy", "shiksha", "shoes", "shop", "shopping", "show", "singles", "site", "ski", "skin", "soccer", "social", "software", "solar", "solutions", "soy", "spa", "space", "sport", "srl", "store", "stream", "studio", "study", "style", "sucks", "supplies", "supply", "support", "surf", "surgery", "swiss", "sydney", "systems", "taipei", "tattoo", "tax", "taxi", "team", "tech", "technology", "tel", "tennis", "tf", "tf", "theater", "theatre", "tickets", "tienda", "tips", "tires", "tirol", "today", "tokyo", "tools", "top", "tours", "town", "toys", "trade", "trading", "training", "travel", "trust", "tube", "tv", "tw", "uk", "university", "uno", "us", "us", "vacations", "vegas", "ventures", "versicherung", "vet", "viajes", "video", "villas", "vin", "vip", "vision", "vlaanderen", "vodka", "vote", "voting", "voto", "voyage", "vu", "wales", "wang", "watch", "webcam", "website", "wedding", "wf", "wf", "whoswho", "wien", "wiki", "win", "wine", "work", "works", "world", "ws", "wtf", "xyz", "yachts", "yoga", "yokohama", "yt", "yt", "zone"];
const maxBytes = 254;

// Check the number of bytes (max 254):
const checkBytes = (email: string): boolean => {
    return email.length <= maxBytes;
};

// Check local before @:
const checkLocal = (email: string): boolean => {
    if (typeof email === "string") {
        if (email.lastIndexOf("@") !== -1) {
            const local = [...email].slice(0, email.lastIndexOf("@")).join("");
            const start = local.charAt(0) !== "." && local.charAt(0) !== "-" && includes.filter(char => local.charAt(0) === char).length > 0;
            const all = excludes.filter(char => local.includes(char)).length === 0;
            const end = !local.endsWith(".") && !local.endsWith("-");
            return start === true && all === true && end === true;
        } else {
            return false;
        }
    }
};

// Check hostname after @ and before .extension:
const checkHostname = (email: string): boolean => {
    if (typeof email === "string") {
        const hostname = email.slice(email.lastIndexOf("@") + 1, email.lastIndexOf("."));
        const start = hostname.charAt(0) !== "." && excludes.filter(char => hostname.charAt(0) === char).length === 0;
        const all = excludes.filter(char => hostname.includes(char)).length > 0 && !hostname.includes("-") || hostname.includes(".") ? false : true;
        const end = !hostname.endsWith(".") ? true : false;
        return start === true && all === true && end === true;
    }
};

// Check hostname extension:
const checkExtension = (email: string): boolean => {
    return exts.filter(ext => email.endsWith(ext)).length > 0 ? true : false;
};

// Global function:
const checkMail = (email: string): boolean => checkBytes(email.toLowerCase()) && checkLocal(email.toLowerCase()) && checkHostname(email.toLowerCase()) && checkExtension(email.toLowerCase());

export default checkMail;