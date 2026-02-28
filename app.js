// ================= LANGUAGES =================
const LANGS = {
  fil: "Filipino / Tagalog",
  ilo: "Ilocano",
  pam: "Kapampangan",
};

// ================= COMMON FIXES (shorthand) =================
const COMMON_FIXES = {
  fil: { ndi: "hindi", d: "di", wla: "wala", slmt: "salamat", kmsta: "kumusta" },
  ilo: {},
  pam: {},
};

// ================= TRILINGUAL DATA (WORDS + PHRASES) =================
const DATA = [
  { fil: "kumusta ka", ilo: "kumusta ka", pam: "komusta ka" },
  { fil: "maraming salamat", ilo: "agyamanak unay", pam: "dakal a salamat" },
  { fil: "magandang umaga", ilo: "naimbag a bigat", pam: "maragul a abak" },
  { fil: "magandang gabi", ilo: "naimbag a rabii", pam: "maragul a bengi" },
  { fil: "pasensya na", ilo: "dispensar", pam: "pasensya na" },
  { fil: "salamat po", ilo: "agyamanak po", pam: "salamat pu" },
  { fil: "ingat ka", ilo: "agannad ka", pam: "ingat ka" },
  { fil: "sandali lang", ilo: "maysa a bassit", pam: "sandali mu" },
  { fil: "good luck", ilo: "narinay a gundaway", pam: "good luck" },

  { fil: "salamat", ilo: "agyamanak", pam: "salamat" },
  { fil: "oo", ilo: "wen", pam: "wa" },
  { fil: "hindi", ilo: "saan", pam: "aliwa" },
  { fil: "bahay", ilo: "balay", pam: "balé" },
  { fil: "paaralan", ilo: "eskuela", pam: "eskuela" },
  { fil: "pagkain", ilo: "makan", pam: "pamangan" },
  { fil: "tubig", ilo: "danum", pam: "danum" },
  { fil: "banyo", ilo: "banyo", pam: "banyo" },
  { fil: "oras", ilo: "oras", pam: "oras" },
  { fil: "araw", ilo: "aldaw", pam: "aldo" },
  { fil: "gabi", ilo: "rabii", pam: "bengi" },
  { fil: "umaga", ilo: "bigat", pam: "abak" },
  { fil: "hapon", ilo: "malem", pam: "gatpanapun" },
  { fil: "kaibigan", ilo: "gayem", pam: "kaibigan" },
  { fil: "pamilya", ilo: "pamilya", pam: "pamilya" },
  { fil: "guro", ilo: "maestro", pam: "guro" },
  { fil: "estudyante", ilo: "estudiante", pam: "estudyante" },
  { fil: "trabaho", ilo: "trabaho", pam: "obra" },
  { fil: "pera", ilo: "kwarta", pam: "kwarta" },
  { fil: "bakit", ilo: "apay", pam: "obat" },
  { fil: "saan", ilo: "sadino", pam: "nukarin" },
  { fil: "ano", ilo: "ania", pam: "nanu" },
  { fil: "paano", ilo: "kasano", pam: "komusta" },
  { fil: "mahal", ilo: "ay-ayaten", pam: "malagu" },
  { fil: "mahal kita", ilo: "ay-ayatenka", pam: "malagu daka" },

  { fil: "kumain", ilo: "nangan", pam: "mengan" },
  { fil: "uminom", ilo: "naginum", pam: "minum" },
  { fil: "pumunta", ilo: "mapan", pam: "minta" },
  { fil: "bumalik", ilo: "agsubli", pam: "mibalik" },
  { fil: "pumasok", ilo: "sumrek", pam: "mipasok" },
  { fil: "lumabas", ilo: "ruar", pam: "luwal" },
  { fil: "tumulong", ilo: "timmulong", pam: "tumulung" },
  { fil: "maghintay", ilo: "aguray", pam: "maghintay" },
  { fil: "makinig", ilo: "agdengeg", pam: "makinig" },
  { fil: "magsalita", ilo: "agsao", pam: "magsalita" },
  { fil: "magbasa", ilo: "agbasa", pam: "magbasa" },
  { fil: "magsulat", ilo: "agsurat", pam: "magsulat" },
  { fil: "tumakbo", ilo: "agtaray", pam: "tumakbo" },

  { fil: "mabuti", ilo: "naimbag", pam: "mayap" },
  { fil: "masama", ilo: "dakes", pam: "mala" },
  { fil: "malaki", ilo: "dakkel", pam: "maragul" },
  { fil: "maliit", ilo: "bassit", pam: "malati" },
  { fil: "madali", ilo: "nalaka", pam: "malaut" },
  { fil: "mahirap", ilo: "narigat", pam: "masakit" },
  { fil: "mabilis", ilo: "napardas", pam: "mabilog" },
  { fil: "malapit", ilo: "asideg", pam: "marani" },
  { fil: "malayo", ilo: "adayu", pam: "marayu" },

  { fil: "ngayon", ilo: "ita", pam: "ngeni" },
  { fil: "bukas", ilo: "inton bigat", pam: "bukas" },
  { fil: "kahapon", ilo: "idi kalman", pam: "nangapan" },

  { fil: "kaliwa", ilo: "kaliwa", pam: "kaliwa" },
  { fil: "kanan", ilo: "kanan", pam: "kanan" },
  { fil: "diretso", ilo: "deretso", pam: "derecho" },
  { fil: "likod", ilo: "likod", pam: "likod" },
  { fil: "harap", ilo: "sango", pam: "harap" },
  { fil: "loob", ilo: "uneg", pam: "loob" },
  { fil: "labas", ilo: "ruar", pam: "luwal" },
  { fil: "dito", ilo: "ditoy", pam: "keni" },
  { fil: "doon", ilo: "idiay", pam: "keto" },

  { fil: "at", ilo: "ken", pam: "at" },
  { fil: "pero", ilo: "ngem", pam: "pero" },
  { fil: "dahil", ilo: "gapuna", pam: "dahil" },
  { fil: "kaya", ilo: "isu a", pam: "kaya" },

  { fil: "marami", ilo: "adu", pam: "dakal" },
  { fil: "kaunti", ilo: "bassit", pam: "ditak" },
  { fil: "lahat", ilo: "amin", pam: "eganagana" },
  { fil: "wala", ilo: "awan", pam: "ala" },
  { fil: "meron", ilo: "adda", pam: "atin" },
];

// ================= PRONUNCIATION (sample) =================
const PRON = {
  fil: { salamat: "sa-la-mat", "maraming salamat": "ma-ra-ming sa-la-mat", bukas: "bu-kas" },
  ilo: { agyamanak: "ag-ya-ma-nak", "agyamanak unay": "ag-ya-ma-nak u-nay", "inton bigat": "in-ton bi-gat" },
  pam: { "dakal a salamat": "da-kal a sa-la-mat", "balé": "ba-le", ngeni: "nge-ni" },
};

// ================= AMBIGUITY (sense chooser) =================
const AMBIG = {
  "fil|ilo": {
    bukas: [
      { out: "inton bigat", sense: "tomorrow (time)", pron: PRON.ilo["inton bigat"] || "" },
      { out: "luktan", sense: "open (verb)", pron: "luk-tan" },
    ],
    lobo: [
      { out: "lobo (animal)", sense: "wolf (animal)", pron: "lo-bo" },
      { out: "balon", sense: "balloon", pron: "ba-lon" },
    ],
  },
  "fil|pam": {
    bukas: [
      { out: "bukas", sense: "tomorrow (time)", pron: "bu-kas" },
      { out: "ibukas", sense: "open (verb)", pron: "i-bu-kas" },
    ],
    lobo: [
      { out: "lobo", sense: "wolf (animal)", pron: "lo-bo" },
      { out: "balun", sense: "balloon", pron: "ba-lun" },
    ],
  },
};

// ================= SENTENCE TEMPLATES =================
const TEMPLATES = [
  {
    src: "fil",
    pattern: /^nasaan\s+(?:ang\s+)?(.+)\?*$/i,
    build: { fil: (x) => `nasaan ang ${x}`, ilo: (x) => `sadino ti ${x}`, pam: (x) => `nukarin ya ing ${x}` },
  },
  {
    src: "fil",
    pattern: /^gusto\s+ko\s+(?:ng\s+)?(.+)$/i,
    build: { fil: (x) => `gusto ko ng ${x}`, ilo: (x) => `kayat ko ti ${x}`, pam: (x) => `buri ku ning ${x}` },
  },
  {
    src: "fil",
    pattern: /^magkano\s+(?:ang\s+)?(.+)\?*$/i,
    build: { fil: (x) => `magkano ang ${x}`, ilo: (x) => `mano ti ${x}`, pam: (x) => `magkano ya ing ${x}` },
  },
  {
    src: "fil",
    pattern: /^(pwede|puwede)\s+ba\s+akong\s+magtanong\?*$/i,
    build: {
      fil: () => `pwede ba akong magtanong`,
      ilo: () => `mabalin kadi nga agsaludsod`,
      pam: () => `malyari ku bang magtanong`,
    },
  },
];

// ================= BUILD LOOKUPS =================
const LOOKUPS = {};
["fil", "ilo", "pam"].forEach((a) => {
  LOOKUPS[a] = {};
  ["fil", "ilo", "pam"].forEach((b) => {
    if (a !== b) LOOKUPS[a][b] = new Map();
  });
});
DATA.forEach((r) => {
  ["fil", "ilo", "pam"].forEach((a) => {
    ["fil", "ilo", "pam"].forEach((b) => {
      if (a !== b && r[a] && r[b]) LOOKUPS[a][b].set(r[a].toLowerCase(), r[b].toLowerCase());
    });
  });
});

// ================= UI =================
const srcSel = document.getElementById("sourceLang");
const tgtSel = document.getElementById("targetLang");
const input = document.getElementById("inputText");
const output = document.getElementById("outputText");
const miss = document.getElementById("missingBox");
const pronBox = document.getElementById("pronBox");
const suggestBox = document.getElementById("suggestBox");
const suggestBar = document.getElementById("suggestBar");
const senseArea = document.getElementById("senseArea");
const senseSelect = document.getElementById("senseSelect");
const senseHint = document.getElementById("senseHint");
const onlineStatus = document.getElementById("onlineStatus");
const clearBtn = document.getElementById("clearBtn");
const copyBtn = document.getElementById("copyBtn");
const helpBtn = document.getElementById("helpBtn");

const tutorialModal = document.getElementById("tutorialModal");
const closeTutorial = document.getElementById("closeTutorial");

// tutorial first-run
(function () {
  const seen = localStorage.getItem("translator_tutorial_seen");
  if (!seen) tutorialModal.style.display = "block";
})();
closeTutorial.onclick = () => {
  tutorialModal.style.display = "none";
  localStorage.setItem("translator_tutorial_seen", "1");
};
helpBtn.onclick = () => {
  tutorialModal.style.display = "block";
};

// buttons
clearBtn.onclick = () => {
  if (!confirm("Clear input and output?")) return;
  input.value = "";
  output.innerText = "Translation will appear here…";
  miss.innerText = "";
  pronBox.innerText = "";
  suggestBox.innerText = "";
  hideSense();
  showSuggestChips([], "");
};
copyBtn.onclick = async () => {
  const text = (output.innerText || "").trim();
  if (!text || text === "Translation will appear here…") return;
  try {
    await navigator.clipboard.writeText(text);
    alert("Copied!");
  } catch (e) {
    alert("Copy failed. Browser permission issue.");
  }
};
async function googleFallbackTranslate(text, sl, tl) {
  const url = new URL("https://translate.googleapis.com/translate_a/single");
  url.searchParams.set("client", "gtx");
  url.searchParams.set("sl", sl);
  url.searchParams.set("tl", tl);
  url.searchParams.set("dt", "t");
  url.searchParams.set("q", text);

  const res = await fetch(url.toString(), { method: "GET" });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);

  const data = await res.json();
  // data[0] is an array of segments: [[translated, original, ...], ...]
  const translated = (data?.[0] || []).map((seg) => seg?.[0]).filter(Boolean).join("");
  return translated || "";
}
function shouldAutoFallback(inputText, dictOut, missing) {
  // fallback only if dictionary didn't fully translate
  if (!inputText) return false;

  // If there are missing tokens, it's definitely incomplete
  if (missing && missing.size) return true;

  // If output is identical to input, dictionary probably didn't help
  if (norm(dictOut) === norm(inputText)) return true;

  return false;
}
function init() {
  srcSel.innerHTML = Object.entries(LANGS).map(([k, v]) => `<option value="${k}">${v}</option>`).join("");
  srcSel.value = "fil";
  updateTargets();
  translate();
}
function updateTargets() {
  const src = srcSel.value;
  const current = tgtSel.value;
  tgtSel.innerHTML = Object.entries(LANGS)
    .filter(([k]) => k !== src)
    .map(([k, v]) => `<option value="${k}">${v}</option>`)
    .join("");
  const opts = [...tgtSel.options].map((o) => o.value);
  tgtSel.value = opts.includes(current) ? current : opts[0];
}

// ================= HELPERS =================
function norm(t) {
  return t.toLowerCase().trim().replace(/\s+/g, " ");
}

function setPron(targetLang, translatedText) {
  const key = norm(translatedText);
  const p = PRON[targetLang] && PRON[targetLang][key] ? PRON[targetLang][key] : "";
  pronBox.innerHTML = p ? `<span class="pill">Pronunciation:</span> ${p}` : "";
}

function showSense(options, originalKey) {
  senseArea.style.display = "block";
  senseSelect.innerHTML = options.map((o, i) => `<option value="${i}">${o.sense}</option>`).join("");
  senseHint.innerHTML = `<span class="pill">Ambiguous:</span> "${originalKey}" has multiple meanings. Choose one.`;
  senseSelect.onchange = () => {
    const chosen = options[Number(senseSelect.value)];
    output.innerText = chosen.out;
    miss.innerText = "";
    pronBox.innerHTML = chosen.pron ? `<span class="pill">Pronunciation:</span> ${chosen.pron}` : "";
  };
}
function hideSense() {
  senseArea.style.display = "none";
  senseSelect.innerHTML = "";
  senseHint.innerText = "";
  senseSelect.onchange = null;
}

// ===== keyboard-style suggest chips =====
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
}
function showSuggestChips(options, fullText) {
  if (!options || !options.length) {
    suggestBar.style.display = "none";
    suggestBar.innerHTML = "";
    return;
  }
  suggestBar.style.display = "flex";
  suggestBar.innerHTML = options
    .map((opt) => `<button type="button" class="schip" data-opt="${escapeHtml(opt)}">${escapeHtml(opt)}</button>`)
    .join("");

  [...suggestBar.querySelectorAll("button")].forEach((btn) => {
    btn.addEventListener("click", () => {
      const chosen = btn.getAttribute("data-opt");
      applySuggestion(fullText, chosen);
    });
  });
}
function applySuggestion(fullText, chosen) {
  const raw = input.value;
  const trimmed = raw.trim();
  if (!trimmed) return;

  const parts = trimmed.split(/\s+/);
  if (parts.length === 1) {
    input.value = chosen;
  } else {
    parts[parts.length - 1] = chosen;
    input.value = parts.join(" ") + " ";
  }
  translate();
}

// lightweight typo suggestions
function editDistance(a, b) {
  a = a || "";
  b = b || "";
  const m = a.length,
    n = b.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
    }
  }
  return dp[m][n];
}
function getClosestMatches(src, token, maxResults = 4) {
  const targets = Object.keys(LANGS).filter((x) => x !== src);
  if (!targets.length) return [];
  const dict = LOOKUPS[src][targets[0]];
  if (!dict) return [];

  const keys = Array.from(dict.keys()).filter((k) => !k.includes(" ")).slice(0, 1200);
  return keys
    .map((k) => ({ k, d: editDistance(token, k) }))
    .filter((x) => x.d <= 2 && x.k !== token)
    .sort((a, b) => a.d - b.d)
    .slice(0, maxResults)
    .map((x) => x.k);
}

function suggestIfAny(src, text) {
  if (!text) {
    suggestBox.innerText = "";
    showSuggestChips([], "");
    return;
  }

  const fixes = COMMON_FIXES[src] || {};
  const lastToken = text.split(" ").pop();

  if (fixes[lastToken]) {
    suggestBox.innerHTML = `<span class="warn">Suggestions:</span> tap a chip to replace`;
    showSuggestChips([fixes[lastToken]], text);
    return;
  }

  if (lastToken.length >= 3) {
    const matches = getClosestMatches(src, lastToken, 4);
    if (matches.length) {
      suggestBox.innerHTML = `<span class="warn">Did you mean:</span>`;
      showSuggestChips(matches, text);
      return;
    }
  }

  suggestBox.innerText = "";
  showSuggestChips([], text);
}

// ================= TRANSLATION ENGINE =================
async function translate() {
  const src = srcSel.value,
    tgt = tgtSel.value;
  const text = norm(input.value);

  hideSense();
  pronBox.innerText = "";
  suggestIfAny(src, text);

  if (!text) {
    output.innerText = "Translation will appear here…";
    miss.innerText = "";
    if (onlineStatus) onlineStatus.innerText = "";
    return;
  }


  const missing = new Set();

  const ambKey = `${src}|${tgt}`;
  if (AMBIG[ambKey] && AMBIG[ambKey][text]) {
    const options = AMBIG[ambKey][text];
    output.innerText = options[0].out;
    miss.innerText = "";
    pronBox.innerHTML = options[0].pron ? `<span class="pill">Pronunciation:</span> ${options[0].pron}` : "";
    showSense(options, text);
    return;
  }

  for (const t of TEMPLATES) {
    if (t.src !== src) continue;
    const m = text.match(t.pattern);
    if (m) {
      const captured = m[1] ? m[1].trim() : "";
      const capTranslated = captured ? translateChunk(src, tgt, captured, missing) : "";
      const finalOut = t.build[tgt](capTranslated);
      output.innerText = finalOut;
      miss.innerText = missing.size ? `Not found: ${[...missing].join(", ")}` : "";
      setPron(tgt, finalOut);
      // ✅ Auto fallback for templates too
if (shouldAutoFallback(text, finalOut, missing)) {
  if (onlineStatus) onlineStatus.innerHTML = `<span class="warn">Auto online:</span> translating…`;
  try {
    const online = await googleFallbackTranslate(text, src, tgt);
    if (online) {
      output.innerText = online;
      miss.innerText = "";
      pronBox.innerText = "";
      if (onlineStatus) onlineStatus.innerHTML = `<span class="ok">Auto online used.</span>`;
      return;
    }
  } catch (e) {
    if (onlineStatus) onlineStatus.innerHTML = `<span class="warn">Auto online failed:</span> ${e.message}`;
  }
}
if (onlineStatus) onlineStatus.innerText = "";
return;
    }
  }

  const out = translateChunk(src, tgt, text, missing);
  output.innerText = out;
  miss.innerText = missing.size ? `Not found: ${[...missing].join(", ")}` : "";
  setPron(tgt, out);
// ✅ AUTO online fallback (no checkbox)
if (shouldAutoFallback(text, out, missing)) {
  if (onlineStatus) onlineStatus.innerHTML = `<span class="warn">Auto online:</span> translating…`;
  try {
    const online = await googleFallbackTranslate(text, src, tgt);
    if (online) {
      output.innerText = online;

      // since online handled it, clear dictionary missing/pron
      miss.innerText = "";
      pronBox.innerText = "";
      if (onlineStatus) onlineStatus.innerHTML = `<span class="ok">Auto online used.</span>`;
      return;
    }
    if (onlineStatus) onlineStatus.innerHTML = `<span class="warn">Auto online:</span> empty result.`;
  } catch (e) {
    if (onlineStatus) onlineStatus.innerHTML = `<span class="warn">Auto online failed:</span> ${e.message}`;
  }
} else {
  if (onlineStatus) onlineStatus.innerText = "";
}
  // Online fallback if enabled + missing words exist
if (onlineToggle && onlineToggle.checked && missing.size) {
  onlineStatus.innerHTML = `<span class="warn">Online fallback:</span> translating full input…`;
  try {
    const online = await googleFallbackTranslate(text, src, tgt);
    if (online) {
      output.innerText = online;
      miss.innerText = "";
      pronBox.innerText = "";
      onlineStatus.innerHTML = `<span class="ok">Online fallback used.</span>`;
      return;
    }
    onlineStatus.innerHTML = `<span class="warn">Online fallback:</span> got empty result.`;
  } catch (e) {
    onlineStatus.innerHTML = `<span class="warn">Online fallback failed:</span> ${e.message}`;
  }
} else {
  if (onlineStatus) onlineStatus.innerText = "";
}
}

function translateChunk(src, tgt, text, missing) {
  const dict = LOOKUPS[src][tgt];
  const s = norm(text);

  if (dict.has(s)) return dict.get(s);

  const words = s.split(" ").filter(Boolean);

  const key = `${src}_${tgt}`;
  if (!translateChunk._cache) translateChunk._cache = {};
  if (!translateChunk._cache[key]) {
    translateChunk._cache[key] = Array.from(dict.keys()).sort((a, b) => b.split(" ").length - a.split(" ").length);
  }
  const phraseKeys = translateChunk._cache[key];

  let i = 0;
  const out = [];
  while (i < words.length) {
    let matched = false;

    for (const phrase of phraseKeys) {
      const pt = phrase.split(" ");
      const slice = words.slice(i, i + pt.length).join(" ");
      if (slice === phrase) {
        out.push(dict.get(phrase));
        i += pt.length;
        matched = true;
        break;
      }
    }

    if (!matched) {
      const w = words[i];
      if (dict.has(w)) out.push(dict.get(w));
      else {
        missing.add(w);
        out.push(w);
      }
      i++;
    }
  }
  return out.join(" ");
}

// events
srcSel.onchange = () => {
  updateTargets();
  translate();
};
tgtSel.onchange = translate;
let tmr = null;
input.oninput = () => {
  clearTimeout(tmr);
  tmr = setTimeout(() => translate(), 350);
};

init();