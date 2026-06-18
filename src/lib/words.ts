export type Word = {
  id: string;
  spelling: string;
  pos: string; // 품사
  meaning: string;
  emoji: string;
};

export type Day = {
  id: string;     // 예: "day-1"
  name: string;   // 예: "DAY 1"
  words: Word[];
};

export const DEFAULT_WORDS: Word[] = [
  { id: "0001", spelling: "fix", pos: "동사", meaning: "1 수리하다, 고치다  2 고정시키다  3 (날짜·장소 등을) 정하다", emoji: "🔧" },
  { id: "0002", spelling: "shade", pos: "명사", meaning: "그늘", emoji: "🌳" },
  { id: "0003", spelling: "bury", pos: "동사", meaning: "(땅에) 묻다, 매장하다", emoji: "⚰️" },
  { id: "0004", spelling: "cave", pos: "명사", meaning: "동굴, 굴", emoji: "🕳️" },
  { id: "0005", spelling: "useful", pos: "형용사", meaning: "쓸모 있는, 유용한", emoji: "🛠️" },
  { id: "0006", spelling: "dot", pos: "명사", meaning: "(동그란) 점", emoji: "🔴" },
  { id: "0007", spelling: "copy", pos: "명사/동사", meaning: "[명] 복사(본)  [동] 1 복사[복제]하다  2 따라 하다, 모방하다", emoji: "📄" },
  { id: "0008", spelling: "through", pos: "전치사", meaning: "1 (입구 등을) 통(과)하여  2 (장소를) 지나서", emoji: "🚪" },
  { id: "0009", spelling: "oven", pos: "명사", meaning: "오븐", emoji: "🔥" },
  { id: "0010", spelling: "lend", pos: "동사", meaning: "빌려주다", emoji: "🤝" },
  { id: "0011", spelling: "moment", pos: "명사", meaning: "1 (특정한) 순간, 시점  2 잠깐, 잠시", emoji: "⏱️" },
  { id: "0012", spelling: "wing", pos: "명사", meaning: "날개", emoji: "🪽" },
  { id: "0013", spelling: "neighbor", pos: "명사", meaning: "이웃", emoji: "🏘️" },
  { id: "0014", spelling: "piece", pos: "명사", meaning: "1 조각  2 한 개, 한 장", emoji: "🧩" },
  { id: "0015", spelling: "still", pos: "부사", meaning: "아직도, 여전히", emoji: "⏳" },
  { id: "0016", spelling: "twin", pos: "명사/형용사", meaning: "[명] 쌍둥이  [형] 쌍둥이의", emoji: "👯" },
  { id: "0017", spelling: "pure", pos: "형용사", meaning: "1 (다른 것이 섞이지 않고) 순수한  2 맑은, 깨끗한", emoji: "💧" },
  { id: "0018", spelling: "stage", pos: "명사", meaning: "1 단계, 시기  2 무대", emoji: "🎭" },
  { id: "0019", spelling: "at first", pos: "숙어(부사구)", meaning: "처음에는", emoji: "🥇" },
  { id: "0020", spelling: "put on", pos: "숙어(동사구)", meaning: "~을 입다 [신다, 쓰다]", emoji: "👕" },
];

const DAYS_KEY = "spelling-days-v1";
const LEGACY_WORDS_KEY = "spelling-words-v1";

function defaultDays(): Day[] {
  // 레거시 단일 단어 리스트가 있으면 DAY 1로 마이그레이션
  if (typeof window !== "undefined") {
    try {
      const legacy = localStorage.getItem(LEGACY_WORDS_KEY);
      if (legacy) {
        const words = JSON.parse(legacy) as Word[];
        if (Array.isArray(words) && words.length) {
          return [{ id: "day-1", name: "DAY 1", words }];
        }
      }
    } catch {/* ignore */}
  }
  return [{ id: "day-1", name: "DAY 1", words: DEFAULT_WORDS }];
}

export function loadDays(): Day[] {
  if (typeof window === "undefined") return defaultDays();
  try {
    const raw = localStorage.getItem(DAYS_KEY);
    if (!raw) return defaultDays();
    const parsed = JSON.parse(raw) as Day[];
    return Array.isArray(parsed) && parsed.length ? parsed : defaultDays();
  } catch {
    return defaultDays();
  }
}

export function saveDays(days: Day[]) {
  localStorage.setItem(DAYS_KEY, JSON.stringify(days));
}

export function getDay(days: Day[], id: string): Day | undefined {
  return days.find((d) => d.id === id);
}

export function nextDayId(days: Day[]): string {
  const nums = days
    .map((d) => Number(d.id.replace(/^day-/, "")))
    .filter((n) => !Number.isNaN(n));
  const n = (nums.length ? Math.max(...nums) : 0) + 1;
  return `day-${n}`;
}

// 단계 1: 일부 글자를 빈칸으로. 첫 글자는 유지, 나머지는 짝수 인덱스만 노출.
export function makeBlankPattern(spelling: string): string[] {
  const chars = spelling.split("");
  let letterIdx = 0;
  return chars.map((ch) => {
    if (!/[a-zA-Z]/.test(ch)) return ch;
    const i = letterIdx++;
    if (i === 0) return ch;
    if (i % 2 === 0) return ch;
    return "_";
  });
}

// 단계 2: 글자 섞기
export function scramble(spelling: string, seed = 1): string {
  const words = spelling.split(" ");
  return words
    .map((w) => {
      if (w.length <= 2) return w;
      const arr = w.split("");
      let s = seed + w.length * 7;
      const rand = () => {
        s = (s * 9301 + 49297) % 233280;
        return s / 233280;
      };
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(rand() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      if (arr.join("") === w) {
        [arr[0], arr[1]] = [arr[1], arr[0]];
      }
      return arr.join("");
    })
    .join(" ");
}
