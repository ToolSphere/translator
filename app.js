const LANGS = {
  fil: "Filipino",
  ilo: "Ilocano",
  pam: "Kapampangan"
};

// ~50 sample entries (prototype dataset)
const DATA = [
  { fil: "kumusta ka", ilo: "kumusta ka", pam: "komusta ka" },
  { fil: "maraming salamat", ilo: "agyamanak unay", pam: "dakal a salamat" },
  { fil: "salamat", ilo: "agyamanak", pam: "salamat" },
  { fil: "paalam", ilo: "agpakadaakon", pam: "paalam" },
  { fil: "oo", ilo: "wen", pam: "wa" },
  { fil: "hindi", ilo: "saan", pam: "aliwa" },
  { fil: "bahay", ilo: "balay", pam: "balé" },
  { fil: "paaralan", ilo: "eskuela", pam: "eskuela" },
  { fil: "pagkain", ilo: "makan", pam: "pamangan" },
  { fil: "tubig", ilo: "danum", pam: "danum" },
  { fil: "bakit", ilo: "apay", pam: "obat" },
  { fil: "saan", ilo: "sadino", pam: "nukarin" },
  { fil: "ano", ilo: "ania", pam: "nanu" },
  { fil: "mahal kita", ilo: "ay-ayatenka", pam: "malagu daka" },
  { fil: "mabuti", ilo: "naimbag", pam: "mayap" },
  { fil: "masama", ilo: "dakes", pam: "mala" },
  { fil: "ngayon", ilo: "ita", pam: "ngeni" },
  { fil: "kahapon", ilo: "idi kalman", pam: "nangapan" },
  { fil: "bukas", ilo: "inton bigat", pam: "bukas" }
];

// Build lookups: LOOKUPS[src][tgt] -> Map
const LOOKUPS = {};
const codes = Object.keys(LANGS);

for (const a of codes) {
  LOOKUPS[a] = {};
  for (const b of codes) {
    if (a !== b) LOOKUPS[a][b] = new Map();
  }
}

for (const row of DATA) {
  for (const a of codes) {
    for (const b of codes) {
      if (a === b) continue;
      const from = (row[a] || "").toLowerCase().trim();
      const to = (row[b] || "").toLowerCase().trim();
      if (from && to) LOOKUPS[a][b].set(from, to);
    }
  }
}

// UI elements
const sourceSel = document.getElementById("sourceLang");
const targetSel = document.getElementById("targetLang");
const inputEl = document.getElementById("inputText");
const outputEl = document.getElementById("outputText");
const missingBox = document.getElementById("missingBox");

function initUI() {
  sourceSel.innerHTML = codes
    .map(c => `<option value="${c}">${LANGS[c]}</option>`)
    .join("");
  sourceSel.value = "fil";
  updateTargets();
  translate();
}

function updateTargets() {
  const src = sourceSel.value;
  targetSel.innerHTML = codes
    .filter(c => c !== src)
    .map(c => `<option value="${c}">${LANGS[c]}</option>`)
    .join("");
  targetSel.value = codes.find(c => c !== src);
}

function normalize(t) {
  return t.toLowerCase().trim().replace(/\s+/g, " ");
}

function translate() {
  const src = sourceSel.value;
  const tgt = targetSel.value;
  const dict = LOOKUPS[src][tgt];

  const input = normalize(inputEl.value);
  if (!input) {
    outputEl.innerText = "Translation will appear here…";
    missingBox.innerText = "";
    return;
  }

  const words = input.split(" ");
  const missing = new Set();
  let result = [];

  let i = 0;

  while (i < words.length) {
    let matched = false;

    // Try longest phrase match first (3 → 2 → 1 words)
    for (let size = 3; size > 0; size--) {
      if (i + size > words.length) continue;

      const phrase = words.slice(i, i + size).join(" ");
      if (dict.has(phrase)) {
        result.push(dict.get(phrase));
        i += size;
        matched = true;
        break;
      }
    }

    if (!matched) {
      const word = words[i];
      const translated = dict.get(word);
      if (!translated) missing.add(word);
      result.push(translated || word);
      i++;
    }
  }

  outputEl.innerText = result.join(" ");
  missingBox.innerText = missing.size
    ? "Not found (prototype): " + Array.from(missing).join(", ")
    : "";
}


// events
sourceSel.addEventListener("change", () => {
  updateTargets();
  translate();
});
targetSel.addEventListener("change", translate);
inputEl.addEventListener("input", translate);

initUI();
