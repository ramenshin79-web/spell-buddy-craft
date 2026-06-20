export type Word = {
  id: string;
  spelling: string;
  pos: string;
  meaning: string;
  emoji: string;
};

export type Day = {
  id: string;
  name: string;
  words: Word[];
};

export const DEFAULT_DAYS: Day[] = [
  {
    id: "day-1",
    name: "DAY 1",
    words: [
    { id: "0001", spelling: "fix", pos: "\ub3d9", meaning: "1 \uc218\ub9ac\ud558\ub2e4, \uace0\uce58\ub2e4 2 \uace0\uc815\uc2dc\ud0a4\ub2e4 3 (\ub0a0\uc9dc \u00b7 \uc7a5\uc18c \ub4f1\uc744) \uc815\ud558\ub2e4", emoji: "\ud83d\udd27" },
    { id: "0002", spelling: "shade", pos: "\uba85", meaning: "\uadf8\ub298", emoji: "\ud83c\udf33" },
    { id: "0003", spelling: "bury", pos: "\ub3d9", meaning: "(\ub545\uc5d0) \ubb3b\ub2e4, \ub9e4\uc7a5\ud558\ub2e4", emoji: "\u26b0\ufe0f" },
    { id: "0004", spelling: "cave", pos: "\uba85", meaning: "\ub3d9\uad74, \uad74", emoji: "\ud83d\udd73\ufe0f" },
    { id: "0005", spelling: "useful", pos: "\ud615", meaning: "\uc4f8\ubaa8 \uc788\ub294, \uc720\uc6a9\ud55c", emoji: "\ud83d\udee0\ufe0f" },
    { id: "0006", spelling: "dot", pos: "\uba85", meaning: "(\ub3d9\uadf8\ub780) \uc810", emoji: "\ud83d\udd34" },
    { id: "0007", spelling: "copy", pos: "\uba85/\ub3d9", meaning: "\uba85 \ubcf5\uc0ac(\ubcf8) \ub3d9 1 \ubcf5\uc0ac\ubcf5\uc81c\ud558\ub2e4 2 \ub530\ub77c \ud558\ub2e4, \ubaa8\ubc29\ud558\ub2e4", emoji: "\ud83d\udcc4" },
    { id: "0008", spelling: "through", pos: "\uc804", meaning: "1 (\uc785\uad6c \ub4f1\uc744) \ud1b5(\uacfc)\ud558\uc5ec 2 (\uc7a5\uc18c\ub97c) \uc9c0\ub098\uc11c", emoji: "\ud83d\udeaa" },
    { id: "0009", spelling: "oven", pos: "\uba85", meaning: "\uc624\ube10", emoji: "\ud83d\udd25" },
    { id: "0010", spelling: "lend", pos: "\ub3d9", meaning: "\ube4c\ub824\uc8fc\ub2e4", emoji: "\ud83e\udd1d" },
    { id: "0011", spelling: "moment", pos: "\uba85", meaning: "1 (\ud2b9\uc815\ud55c) \uc21c\uac04, \uc2dc\uc810 2 \uc7a0\uae50, \uc7a0\uc2dc", emoji: "\u23f1\ufe0f" },
    { id: "0012", spelling: "wing", pos: "\uba85", meaning: "\ub0a0\uac1c", emoji: "\ud83e\udebd" },
    { id: "0013", spelling: "neighbor", pos: "\uba85", meaning: "\uc774\uc6c3", emoji: "\ud83c\udfd8\ufe0f" },
    { id: "0014", spelling: "piece", pos: "\uba85", meaning: "1 \uc870\uac01 2 \ud55c \uac1c, \ud55c \uc7a5", emoji: "\ud83e\udde9" },
    { id: "0015", spelling: "still", pos: "\ubd80", meaning: "\uc544\uc9c1\ub3c4, \uc5ec\uc804\ud788", emoji: "\u23f3" },
    { id: "0016", spelling: "twin", pos: "\uba85/\ud615", meaning: "\uba85 \uc30d\ub465\uc774 \ud615 \uc30d\ub465\uc774\uc758", emoji: "\ud83d\udc6f" },
    { id: "0017", spelling: "pure", pos: "\ud615", meaning: "1 (\ub2e4\ub978 \uac83\uc774 \uc11e\uc774\uc9c0 \uc54a\uace0) \uc21c\uc218\ud55c 2 \ub9d1\uc740, \uae68\ub057\ud55c", emoji: "\ud83d\udca7" },
    { id: "0018", spelling: "stage", pos: "\uba85", meaning: "1 \ub2e8\uacc4, \uc2dc\uae30 2 \ubb34\ub300", emoji: "\ud83c\udfad" },
    { id: "0019", spelling: "at first", pos: "\uc219\uc5b4", meaning: "\ucc98\uc74c\uc5d0\ub294", emoji: "\ud83e\udd47" },
    { id: "0020", spelling: "put on", pos: "\uc219\uc5b4", meaning: "~\uc744 \uc785\ub2e4/\uc2e0\ub2e4, \uc4f0\ub2e4", emoji: "\ud83d\udc55" }
    ],
  },
  {
    id: "day-2",
    name: "DAY 2",
    words: [
    { id: "0021", spelling: "war", pos: "\uba85", meaning: "\uc804\uc7c1", emoji: "\u2694\ufe0f" },
    { id: "0022", spelling: "cash", pos: "\uba85", meaning: "\ud604\uae08, \ud604\ucc30", emoji: "\ud83d\udcb5" },
    { id: "0023", spelling: "advice", pos: "\uba85", meaning: "\ucda9\uace0, \uc870\uc5b8", emoji: "\ud83d\udcac" },
    { id: "0024", spelling: "lead", pos: "\ub3d9", meaning: "1 \uc548\ub0b4\ud558\ub2e4 2 \uc9c0\ub3c4\ud558\ub2e4, \uc774\ub04c\ub2e4", emoji: "\ud83e\udded" },
    { id: "0025", spelling: "perfect", pos: "\ud615", meaning: "1 (\uacb0\uc810 \uc5c6\uc774) \uc644\ubcbd\ud55c 2 (\ubaa9\uc801\uc5d0) \uaf2d \uc54c\ub9de\uc740, \uc644\ubcbd\ud55c", emoji: "\ud83d\udcaf" },
    { id: "0026", spelling: "search", pos: "\ub3d9/\uba85", meaning: "\ub3d9 \ucc3e\ub2e4, \uc218\uc0c9\ud558\ub2e4 \uba85 \ucc3e\uae30, \uc218\uc0c9", emoji: "\ud83d\udd0e" },
    { id: "0027", spelling: "contest", pos: "\uba85", meaning: "\ub300\ud68c, \ucf58\ud14c\uc2a4\ud2b8", emoji: "\ud83c\udfc6" },
    { id: "0028", spelling: "display", pos: "\ub3d9", meaning: "\uc804\uc2dc\ud558\ub2e4, \uc9c4\uc5f4\ud558\ub2e4", emoji: "\ud83d\uddbc\ufe0f" },
    { id: "0029", spelling: "tip", pos: "\uba85", meaning: "1 (\ubfb0\uc871\ud55c) \ub05d 2 \ud301, \ubd09\uc0ac\ub8cc 3 \uc870\uc5b8", emoji: "\ud83d\udca1" },
    { id: "0030", spelling: "borrow", pos: "\ub3d9", meaning: "\ube4c\ub9ac\ub2e4", emoji: "\ud83d\udcda" },
    { id: "0031", spelling: "sharp", pos: "\ud615", meaning: "\ub0a0\uce74\ub85c\uc6b4, \ubfb0\uc871\ud55c", emoji: "\ud83d\udd2a" },
    { id: "0032", spelling: "machine", pos: "\uba85", meaning: "\uae30\uacc4", emoji: "\u2699\ufe0f" },
    { id: "0033", spelling: "trouble", pos: "\uba85", meaning: "\uc5b4\ub824\uc6c0, \ubb38\uc81c", emoji: "\u26a0\ufe0f" },
    { id: "0034", spelling: "roll", pos: "\ub3d9/\uba85", meaning: "\ub3d9 \uad6c\ub974\ub2e4, \uad74\ub9ac\ub2e4 \uba85 \ud1b5, \ub450\ub8e8\ub9c8\ub9ac", emoji: "\ud83e\uddfb" },
    { id: "0035", spelling: "exit", pos: "\uba85/\ub3d9", meaning: "\uba85 \ucd9c\uad6c \ub3d9 \ub098\uac00\ub2e4, \ud1f4\uc7a5\ud558\ub2e4", emoji: "\ud83d\udeaa" },
    { id: "0036", spelling: "proud", pos: "\ud615", meaning: "1 \uc790\ub791\uc2a4\ub7ec\uc6cc\ud558\ub294, \uc790\ub791\uc2a4\ub7ec\uc6b4 2 \uac70\ub9cc\ud55c", emoji: "\ud83d\ude24" },
    { id: "0037", spelling: "flood", pos: "\uba85", meaning: "\ud64d\uc218", emoji: "\ud83c\udf0a" },
    { id: "0038", spelling: "stamp", pos: "\uba85", meaning: "1 \uc6b0\ud45c 2 \ub3c4\uc7a5", emoji: "\ud83d\udcee" },
    { id: "0039", spelling: "at last", pos: "\uc219\uc5b4", meaning: "\ub9c8\uce68\ub0b4", emoji: "\ud83c\udf89" },
    { id: "0040", spelling: "grow up", pos: "\uc219\uc5b4", meaning: "\uc790\ub77c\ub2e4, \uc131\uc7a5\ud558\ub2e4", emoji: "\ud83c\udf31" }
    ],
  },
  {
    id: "day-3",
    name: "DAY 3",
    words: [
    { id: "0041", spelling: "mix", pos: "\ub3d9", meaning: "\uc11e\uc774\ub2e4, \uc11e\ub2e4", emoji: "\ud83e\udd63" },
    { id: "0042", spelling: "healthy", pos: "\ud615", meaning: "1 \uac74\uac15\ud55c 2 \uac74\uac15\uc5d0 \uc88b\uc740", emoji: "\ud83e\udd57" },
    { id: "0043", spelling: "active", pos: "\ud615", meaning: "1 \ud65c\ub3d9\uc801\uc778 2 \uc801\uadf9\uc801\uc778", emoji: "\ud83c\udfc3" },
    { id: "0044", spelling: "dig", pos: "\ub3d9", meaning: "(\uad6c\uba4d \ub4f1\uc744) \ud30c\ub2e4", emoji: "\u26cf\ufe0f" },
    { id: "0045", spelling: "simple", pos: "\ud615", meaning: "1 \uac04\ub2e8\ud55c, \ub2e8\uc21c\ud55c 2 \uc18c\ubc15\ud55c, \uc218\uc218\ud55c", emoji: "\u26aa" },
    { id: "0046", spelling: "view", pos: "\uba85", meaning: "1 \uacbd\uce58, \uc804\ub9dd 2 \uacac\ud574, \uc758\uacac", emoji: "\ud83c\udfde\ufe0f" },
    { id: "0047", spelling: "insect", pos: "\uba85", meaning: "\uace4\ucda9", emoji: "\ud83d\udc1b" },
    { id: "0048", spelling: "sleepy", pos: "\ud615", meaning: "\uc878\ub9ac\ub294", emoji: "\ud83d\ude34" },
    { id: "0049", spelling: "root", pos: "\uba85", meaning: "1 (\uc2dd\ubb3c\uc758) \ubfcc\ub9ac 2 \uadfc\uc6d0, \uc6d0\uc778", emoji: "\ud83c\udf3f" },
    { id: "0050", spelling: "total", pos: "\ud615/\uba85", meaning: "\ud615 1 \ucd1d, \uc804\uccb4\uc758 2 \uc644\uc804\ud55c, \uc804\uc801\uc778 \uba85 \ud569\uacc4, \ucd1d\uc561", emoji: "\u2795" },
    { id: "0051", spelling: "final", pos: "\ud615/\uba85", meaning: "\ud615 \ub9c8\uc9c0\ub9c9\uc758, \ucd5c\ud6c4\uc758 \uba85 \uacb0\uc2b9(\uc804)", emoji: "\ud83c\udfc1" },
    { id: "0052", spelling: "scene", pos: "\uba85", meaning: "1 (\uc5f0\uadf9, \uc601\ud654 \ub4f1\uc758) \uc7a5\uba74 2 \uacbd\uce58, \ud48d\uacbd", emoji: "\ud83c\udfac" },
    { id: "0053", spelling: "prize", pos: "\uba85", meaning: "\uc0c1, \uc0c1\ud488", emoji: "\ud83c\udfc5" },
    { id: "0054", spelling: "nickname", pos: "\uba85", meaning: "\ubcc4\uba85", emoji: "\ud83c\udff7\ufe0f" },
    { id: "0055", spelling: "pan", pos: "\uba85", meaning: "\ud32c, \ud504\ub77c\uc774\ud32c", emoji: "\ud83c\udf73" },
    { id: "0056", spelling: "cartoon", pos: "\uba85", meaning: "\ub9cc\ud654 (\uc601\ud654)", emoji: "\ud83d\udcfa" },
    { id: "0057", spelling: "leader", pos: "\uba85", meaning: "\uc9c0\ub3c4\uc790, \ub9ac\ub354", emoji: "\ud83d\udc51" },
    { id: "0058", spelling: "coach", pos: "\uba85", meaning: "(\uc2a4\ud3ec\uce20 \ud300\uc758) \ucf54\uce58, \uac10\ub3c5", emoji: "\ud83d\udce3" },
    { id: "0059", spelling: "find out", pos: "\uc219\uc5b4", meaning: "~\uc744 \uc54c\uc544\ub0b4\ub2e4", emoji: "\ud83d\udd0d" },
    { id: "0060", spelling: "be in trouble", pos: "\uc219\uc5b4", meaning: "\uc5b4\ub824\uc6c0/\uace4\uacbd\uc5d0 \ucc98\ud558\ub2e4", emoji: "\ud83d\ude30" }
    ],
  },
  {
    id: "day-4",
    name: "DAY 4",
    words: [
    { id: "0061", spelling: "lift", pos: "\ub3d9", meaning: "(\ub4e4\uc5b4) \uc62c\ub9ac\ub2e4", emoji: "\ud83c\udfcb\ufe0f" },
    { id: "0062", spelling: "pack", pos: "\ub3d9/\uba85", meaning: "\ub3d9 1 (\uc9d0\uc744) \uc2f8\ub2e4 2 \ud3ec\uc7a5\ud558\ub2e4 \uba85 (\ud55c \uac11, \uc0c1\uc790)", emoji: "\ud83c\udf92" },
    { id: "0063", spelling: "score", pos: "\uba85/\ub3d9", meaning: "\uba85 \ub4dd\uc810, \uc810\uc218 \ub3d9 \ub4dd\uc810\ud558\ub2e4", emoji: "\u26bd" },
    { id: "0064", spelling: "court", pos: "\uba85", meaning: "1 \ubc95\uc815, \ubc95\uc6d0 2 (\ud14c\ub2c8\uc2a4 \ub4f1\uc758) \uacbd\uae30\uc7a5, \ucf54\ud2b8", emoji: "\u2696\ufe0f" },
    { id: "0065", spelling: "desert", pos: "\uba85", meaning: "\uc0ac\ub9c9", emoji: "\ud83c\udfdc\ufe0f" },
    { id: "0066", spelling: "award", pos: "\uba85/\ub3d9", meaning: "\uba85 \uc0c1 (\uc0c1\ud488) \ub3d9 \uc218\uc5ec\ud558\ub2e4, \uc8fc\ub2e4", emoji: "\ud83c\udfc6" },
    { id: "0067", spelling: "elder", pos: "\ud615/\uba85", meaning: "\ud615 (\ub458 \uc911\uc5d0\uc11c) \ub098\uc774\uac00 \ub354 \ub9ce\uc740 \uba85 \ub178\uc778", emoji: "\ud83d\udc74" },
    { id: "0068", spelling: "among", pos: "\uc804", meaning: "1 ~ \uc0ac\uc774\uc5d0, ~\uc5d0 \ub458\ub7ec\uc2f8\uc5ec 2 (\uc14b \uc774\uc0c1) \uc911\uc5d0(\uc11c)", emoji: "\ud83d\udc65" },
    { id: "0069", spelling: "male", pos: "\ud615/\uba85", meaning: "\ud615 \ub0a8\uc131\uc758, \uc218\ucef7\uc758 \uba85 \ub0a8\uc131, \uc218\ucef7", emoji: "\ud83d\udc68" },
    { id: "0070", spelling: "finally", pos: "\ubd80", meaning: "1 \ub9c8\uce68\ub0b4, \uacb0\uad6d 2 \ub9c8\uc9c0\ub9c9\uc73c\ub85c", emoji: "\ud83c\udf8a" },
    { id: "0071", spelling: "sometime", pos: "\ubd80", meaning: "(\uacfc\uac70, \ubbf8\ub798\uc758) \uc5b8\uc820\uac00", emoji: "\ud83d\udcc5" },
    { id: "0072", spelling: "rule", pos: "\uba85/\ub3d9", meaning: "\uba85 \uaddc\uce59, \uaddc\uc815 \ub3d9 \uc9c0\ubc30\ud558\ub2e4, \ud1b5\uce58\ud558\ub2e4", emoji: "\ud83d\udccf" },
    { id: "0073", spelling: "harmony", pos: "\uba85", meaning: "1 \uc870\ud654, \ud654\ud569 2 \ud654\uc74c", emoji: "\ud83c\udfb6" },
    { id: "0074", spelling: "bark", pos: "\ub3d9", meaning: "(\uac1c \ub4f1\uc774) \uc9d6\ub2e4", emoji: "\ud83d\udc15" },
    { id: "0075", spelling: "crash", pos: "\ub3d9/\uba85", meaning: "\ub3d9 \ucda9\ub3cc/\ucd94\ub77d\ud558\ub2e4 \uba85 (\uc790\ub3d9\ucc28\uc758) \ucda9\ub3cc, (\ube44\ud589\uae30\uc758) \ucd94\ub77d", emoji: "\ud83d\udca5" },
    { id: "0076", spelling: "nature", pos: "\uba85", meaning: "1 \uc790\uc5f0 2 \ucc9c\uc131, \ubcf8\uc131", emoji: "\ud83c\udf32" },
    { id: "0077", spelling: "valley", pos: "\uba85", meaning: "\uacc4\uace1, \uace8\uc9dc\uae30", emoji: "\ud83c\udfde\ufe0f" },
    { id: "0078", spelling: "wonder", pos: "\ub3d9/\uba85", meaning: "\ub3d9 \uad81\uae08\ud558\ub2e4 \uba85 \uacbd\ud0c4, \ub180\ub77c\uc6c0", emoji: "\ud83e\udd14" },
    { id: "0079", spelling: "think up", pos: "\uc219\uc5b4", meaning: "~\uc744 \uc0dd\uac01\ud574\ub0b4\ub2e4", emoji: "\ud83d\udcad" },
    { id: "0080", spelling: "be famous for", pos: "\uc219\uc5b4", meaning: "~\ub85c \uc720\uba85\ud558\ub2e4", emoji: "\u2b50" }
    ],
  },
  {
    id: "day-5",
    name: "DAY 5",
    words: [
    { id: "0081", spelling: "hang", pos: "\ub3d9", meaning: "\uac78\ub2e4, \ub9e4\ub2ec(\ub9ac)\ub2e4", emoji: "\ud83e\ude9d" },
    { id: "0082", spelling: "able", pos: "\ud615", meaning: "1 ~\ud560 \uc218 \uc788\ub294 2 \ub2a5\ub825 \uc788\ub294, \uc720\ub2a5\ud55c", emoji: "\ud83d\udcaa" },
    { id: "0083", spelling: "pain", pos: "\uba85", meaning: "(\uc721\uccb4\uc801, \uc815\uc2e0\uc801) \ud1b5\uc99d, \uace0\ud1b5", emoji: "\ud83d\ude23" },
    { id: "0084", spelling: "uniform", pos: "\uba85/\ud615", meaning: "\uba85 \uc81c\ubcf5, \uc720\ub2c8\ud3fc \ud615 \uade0\uc77c\ud55c", emoji: "\ud83d\udc6e" },
    { id: "0085", spelling: "beauty", pos: "\uba85", meaning: "1 \uc544\ub984\ub2e4\uc6c0, \ubbf8(\u7f8e) 2 \ubbf8\uc778", emoji: "\ud83d\udc84" },
    { id: "0086", spelling: "taste", pos: "\uba85/\ub3d9", meaning: "\uba85 \ub9db \ub3d9 1 \ub9db\uc774 \ub098\ub2e4 2 \ub9db\ubcf4\ub2e4", emoji: "\ud83d\udc45" },
    { id: "0087", spelling: "shout", pos: "\ub3d9", meaning: "\uc18c\ub9ac\uce58\ub2e4, \uc678\uce58\ub2e4", emoji: "\ud83d\udce2" },
    { id: "0088", spelling: "without", pos: "\uc804", meaning: "1 ~ \uc5c6\uc774 2 ~\ud558\uc9c0 \uc54a\uace0", emoji: "\ud83d\udeab" },
    { id: "0089", spelling: "care", pos: "\uba85/\ub3d9", meaning: "\uba85 1 \uc8fc\uc758, \uc870\uc2ec 2 \ubcf4\uc0b4\ud54c \ub3d9 \uc0c1\uad00\ud558\ub2e4, \uc2e0\uacbd \uc4f0\ub2e4", emoji: "\u2764\ufe0f" },
    { id: "0090", spelling: "sunlight", pos: "\uba85", meaning: "\ud587\ube5b, \ud587\uc0b4", emoji: "\u2600\ufe0f" },
    { id: "0091", spelling: "female", pos: "\ud615/\uba85", meaning: "\ud615 \uc5ec\uc131\uc758, \uc554\ucef7\uc758 \uba85 \uc5ec\uc131, \uc554\ucef7", emoji: "\ud83d\udc69" },
    { id: "0092", spelling: "lower", pos: "\ud615/\ub3d9", meaning: "\ud615 \uc544\ub798(\ucabd)\uc758 \ub3d9 \ub0ae\ucd94\ub2e4, \ub0b4\ub9ac\ub2e4", emoji: "\u2b07\ufe0f" },
    { id: "0093", spelling: "miss", pos: "\ub3d9", meaning: "1 \ub193\uce58\ub2e4, \ube57\ub098\uac00\ub2e4 2 (\ub2a6\uc5b4\uc11c) \ub193\uce58\ub2e4 3 \uadf8\ub9ac\uc6cc\ud558\ub2e4", emoji: "\ud83d\udc94" },
    { id: "0094", spelling: "exact", pos: "\ud615", meaning: "\uc815\ud655\ud55c", emoji: "\ud83c\udfaf" },
    { id: "0095", spelling: "popular", pos: "\ud615", meaning: "1 \uc778\uae30 \uc788\ub294 2 \ub300\uc911\uc758, \ub300\uc911\uc801\uc778", emoji: "\ud83c\udf1f" },
    { id: "0096", spelling: "regular", pos: "\ud615", meaning: "1 \uc815\uae30\uc801\uc778, \uaddc\uce59\uc801\uc778 2 (\ud06c\uae30\uac00) \ubcf4\ud1b5\uc758, \ud45c\uc900\uc801\uc778", emoji: "\ud83d\udcc6" },
    { id: "0097", spelling: "noisy", pos: "\ud615", meaning: "\ub5a0\ub4e4\uc369\ud55c, \uc2dc\ub044\ub7ec\uc6b4", emoji: "\ud83d\udd0a" },
    { id: "0098", spelling: "dive", pos: "\ub3d9", meaning: "(\ubb3c\uc18d\uc73c\ub85c) \ub6f0\uc5b4\ub4e4\ub2e4, \ub2e4\uc774\ube59\ud558\ub2e4", emoji: "\ud83e\udd3f" },
    { id: "0099", spelling: "before long", pos: "\ubd80", meaning: "\uba38\uc9c0\uc54a\uc544, \uc5bc\ub9c8 \ud6c4\uc5d0", emoji: "\u23f0" },
    { id: "0100", spelling: "calm down", pos: "\ub3d9", meaning: "\uc9c4\uc815\ud558\ub2e4, ~\uc744 \uc9c4\uc815\uc2dc\ud0a4\ub2e4", emoji: "\ud83d\ude0c" }
    ],
  },
  {
    id: "day-6",
    name: "DAY 6",
    words: [
    { id: "0101", spelling: "pill", pos: "\uba85", meaning: "\uc54c\uc57d, \uc815\uc81c", emoji: "\ud83d\udc8a" },
    { id: "0102", spelling: "alarm", pos: "\uba85", meaning: "1 \uacbd\ubcf4(\uae30) 2 \uc790\uba85\uc885, \uc54c\ub78c", emoji: "\u23f0" },
    { id: "0103", spelling: "bored", pos: "\ud615", meaning: "\uc9c0\ub8e8\ud55c, \uc9c0\uaca8\uc6b4", emoji: "\ud83e\udd71" },
    { id: "0104", spelling: "freeze", pos: "\ub3d9", meaning: "\uc5bc\ub2e4, \uc5bc\ub9ac\ub2e4", emoji: "\ud83e\uddca" },
    { id: "0105", spelling: "nobody", pos: "\ub300", meaning: "\uc544\ubb34\ub3c4 ~\uc54a\ub2e4", emoji: "\ud83d\udeb7" },
    { id: "0106", spelling: "language", pos: "\uba85", meaning: "\uc5b8\uc5b4, \ub9d0", emoji: "\ud83d\udde3\ufe0f" },
    { id: "0107", spelling: "teenager", pos: "\uba85", meaning: "\uc2ed\ub300", emoji: "\ud83e\uddd2" },
    { id: "0108", spelling: "usual", pos: "\ud615", meaning: "\ud3c9\uc18c\uc758, \ubcf4\ud1b5\uc758", emoji: "\ud83d\udd01" },
    { id: "0109", spelling: "chance", pos: "\uba85", meaning: "1 \uac00\ub2a5\uc131 2 \uae30\ud68c 3 \uc6b0\uc5f0", emoji: "\ud83c\udfb2" },
    { id: "0110", spelling: "hero", pos: "\uba85", meaning: "1 \uc601\uc6c5 2 (\uc18c\uc124 \ub4f1\uc758) \ub0a8\uc790 \uc8fc\uc778\uacf5", emoji: "\ud83e\uddb8" },
    { id: "0111", spelling: "curl", pos: "\ub3d9", meaning: "\uacf1\uc2ac\uacf1\uc2ac\ud558\ub2e4, \uacf1\uc2ac\uacf1\uc2ac\ud558\uac8c \ud558\ub2e4", emoji: "\u27b0" },
    { id: "0112", spelling: "planet", pos: "\uba85", meaning: "\ud589\uc131", emoji: "\ud83e\ude90" },
    { id: "0113", spelling: "regularly", pos: "\ubd80", meaning: "\uc815\uae30\uc801\uc73c\ub85c, \uaddc\uce59\uc801\uc73c\ub85c", emoji: "\ud83d\udcc5" },
    { id: "0114", spelling: "invent", pos: "\ub3d9", meaning: "\ubc1c\uba85\ud558\ub2e4", emoji: "\ud83d\udca1" },
    { id: "0115", spelling: "smart", pos: "\ud615", meaning: "\uc601\ub9ac\ud55c, \ub611\ub611\ud55c", emoji: "\ud83e\udde0" },
    { id: "0116", spelling: "dead", pos: "\ud615", meaning: "\uc8fd\uc740", emoji: "\ud83d\udc80" },
    { id: "0117", spelling: "soil", pos: "\uba85", meaning: "\ud759, \ud1a0\uc591", emoji: "\ud83e\udeb4" },
    { id: "0118", spelling: "meal", pos: "\uba85", meaning: "\uc2dd\uc0ac, \ub07c\ub2c8", emoji: "\ud83c\udf7d\ufe0f" },
    { id: "0119", spelling: "take care", pos: "\uc219\uc5b4", meaning: "\uc870\uc2ec\ud558\ub2e4", emoji: "\ud83e\udd32" },
    { id: "0120", spelling: "because of", pos: "\uc804", meaning: "~ \ub54c\ubb38\uc5d0", emoji: "\u27a1\ufe0f" }
    ],
  },
  {
    id: "day-7",
    name: "DAY 7",
    words: [
    { id: "0121", spelling: "coin", pos: "\uba85", meaning: "\ub3d9\uc804", emoji: "\ud83e\ude99" },
    { id: "0122", spelling: "prepare", pos: "\ub3d9", meaning: "1 \uc900\ube44\ud558\ub2e4 2 (\uc74c\uc2dd\uc744) \uc900\ube44\ub9c8\ub828\ud558\ub2e4", emoji: "\ud83e\uddd1\u200d\ud83c\udf73" },
    { id: "0123", spelling: "quite", pos: "\ubd80", meaning: "\uaf64, \uc0c1\ub2f9\ud788", emoji: "\ud83d\udc4c" },
    { id: "0124", spelling: "collect", pos: "\ub3d9", meaning: "\ubaa8\uc73c\ub2e4, \uc218\uc9d1\ud558\ub2e4", emoji: "\ud83d\udce6" },
    { id: "0125", spelling: "main", pos: "\ud615", meaning: "\uc8fc\ub41c, \uc8fc\uc694\ud55c", emoji: "\ud83c\udfaf" },
    { id: "0126", spelling: "shower", pos: "\uba85", meaning: "1 \uc0e4\uc6cc 2 \uc18c\ub098\uae30", emoji: "\ud83d\udebf" },
    { id: "0127", spelling: "alike", pos: "\ubd80", meaning: "\ube44\uc2b7\ud558\uac8c, \ub9c8\ucc2c\uac00\uc9c0\ub85c", emoji: "\ud83d\udc6f" },
    { id: "0128", spelling: "blank", pos: "\uba85/\ud615", meaning: "\uba85 \uacf5\ubc31, \ube48\uce78 \ud615 \ube48, \uacf5\ub780\uc758", emoji: "\u2b1c" },
    { id: "0129", spelling: "freezing", pos: "\ud615", meaning: "\ubab9\uc2dc \ucd94\uc6b4", emoji: "\ud83e\udd76" },
    { id: "0130", spelling: "important", pos: "\ud615", meaning: "\uc911\uc694\ud55c", emoji: "\u2757" },
    { id: "0131", spelling: "spicy", pos: "\ud615", meaning: "\ub9e4\ucf64\ud55c, \uc790\uadf9\uc801\uc778", emoji: "\ud83c\udf36\ufe0f" },
    { id: "0132", spelling: "teen", pos: "\uba85", meaning: "\uc2ed\ub300", emoji: "\ud83e\uddd1" },
    { id: "0133", spelling: "weigh", pos: "\ub3d9", meaning: "1 \ubb34\uac8c\uac00 ~\uc774\ub2e4 2 \ubb34\uac8c\ub97c \uc7ac\ub2e4/\ub2ec\ub2e4", emoji: "\u2696\ufe0f" },
    { id: "0134", spelling: "deaf", pos: "\ud615", meaning: "\uadc0\uac00 \uba39\uc740, \uccad\uac01 \uc7a5\uc560\uac00 \uc788\ub294", emoji: "\ud83e\uddbb" },
    { id: "0135", spelling: "law", pos: "\uba85", meaning: "\ubc95, \ubc95\ub960", emoji: "\ud83d\udcdc" },
    { id: "0136", spelling: "rub", pos: "\ub3d9", meaning: "\ube44\ube44\ub2e4, \ubb38\uc9c0\ub974\ub2e4", emoji: "\ud83e\udd32" },
    { id: "0137", spelling: "pour", pos: "\ub3d9", meaning: "1 \ub530\ub974\ub2e4, \ubd93\ub2e4 2 (\ube44\uac00) \uc3df\uc544\uc9c0\ub2e4, \ud37c\ubd93\ub2e4", emoji: "\ud83e\uded7" },
    { id: "0138", spelling: "yet", pos: "\ubd80", meaning: "\ubd80\uc815\ubb38 \uc544\uc9c1, \uc758\ubb38\ubb38 \ubc8c\uc368", emoji: "\u231b" },
    { id: "0139", spelling: "take out", pos: "\uc219\uc5b4", meaning: "1 ~\uc744 \uaebc\ub0b4\ub2e4 2 ~\uc744 \ub370\ub9ac\uace0 \ub098\uac00\ub2e4", emoji: "\ud83e\udd61" },
    { id: "0140", spelling: "get out of", pos: "\uc219\uc5b4", meaning: "1 (\uc7a5\uc18c\uc5d0\uc11c) \ub098\uac00\ub2e4 2 (\ucc28\uc5d0\uc11c) \ub0b4\ub9ac\ub2e4", emoji: "\ud83d\ude97" }
    ],
  },
  {
    id: "day-8",
    name: "DAY 8",
    words: [
    { id: "0141", spelling: "skill", pos: "\uba85", meaning: "1 \uae30\ub7c9, \uc19c\uc528 2 \uae30\uc220", emoji: "\ud83c\udfaf" },
    { id: "0142", spelling: "neat", pos: "\ud615", meaning: "\uc815\ub3c8\ub41c, \ub2e8\uc815\ud55c", emoji: "\ud83e\uddf9" },
    { id: "0143", spelling: "ache", pos: "\ub3d9/\uba85", meaning: "\ub3d9 \uc544\ud504\ub2e4, \uc464\uc2dc\ub2e4 \uba85 \uc544\ud514, \ud1b5\uc99d", emoji: "\ud83e\udd15" },
    { id: "0144", spelling: "patient", pos: "\uba85/\ud615", meaning: "\uba85 \ud658\uc790 \ud615 \ucc38\uc744\uc131/\uc778\ub0b4\uc2ec \uc788\ub294", emoji: "\ud83c\udfe5" },
    { id: "0145", spelling: "elderly", pos: "\ud615", meaning: "\ub098\uc774\uac00 \uc9c0\uae0b\ud55c, \uc5f0\uc138\uac00 \ub4dc\uc2e0", emoji: "\ud83d\udc75" },
    { id: "0146", spelling: "mistake", pos: "\uba85", meaning: "\uc2e4\uc218, \uc798\ubabb", emoji: "\u274c" },
    { id: "0147", spelling: "channel", pos: "\uba85", meaning: "(TV \ub4f1\uc758) \ucc44\ub110", emoji: "\ud83d\udcfa" },
    { id: "0148", spelling: "during", pos: "\uc804", meaning: "~\ub3d9\uc548 (\ub0b4\ub0b4)", emoji: "\u23f3" },
    { id: "0149", spelling: "flour", pos: "\uba85", meaning: "\ubc00\uac00\ub8e8", emoji: "\ud83c\udf3e" },
    { id: "0150", spelling: "lawyer", pos: "\uba85", meaning: "\ubcc0\ud638\uc0ac", emoji: "\ud83d\udc68\u200d\u2696\ufe0f" },
    { id: "0151", spelling: "tire", pos: "\ub3d9", meaning: "\uc9c0\uce58\ub2e4, \uc9c0\uce58\uac8c \ud558\ub2e4", emoji: "\ud83d\ude29" },
    { id: "0152", spelling: "bar", pos: "\uba85", meaning: "1 \ub9c9\ub300\uae30, (\ucc3d\ubb38 \ub4f1\uc758) \uc0b4 2 (\ub9c9\ub300\uae30 \ubaa8\uc591\uc758) \ubc14", emoji: "\ud83c\udf6b" },
    { id: "0153", spelling: "soldier", pos: "\uba85", meaning: "\uad70\uc778, \ubcd1\uc0ac", emoji: "\ud83e\ude96" },
    { id: "0154", spelling: "recipe", pos: "\uba85", meaning: "\uc694\ub9ac\ubc95, \ub808\uc2dc\ud53c", emoji: "\ud83d\udcd6" },
    { id: "0155", spelling: "course", pos: "\uba85", meaning: "1 \uac15\uc758, \uac15\uc88c 2 \ud56d\ub85c, \ubc29\ud5a5", emoji: "\ud83d\udee4\ufe0f" },
    { id: "0156", spelling: "wallet", pos: "\uba85", meaning: "\uc9c0\uac11", emoji: "\ud83d\udc5b" },
    { id: "0157", spelling: "guide", pos: "\uba85/\ub3d9", meaning: "\uba85 \uc548\ub0b4\uc790, \uac00\uc774\ub4dc \ub3d9 \uc548\ub0b4\ud558\ub2e4", emoji: "\ud83d\uddfa\ufe0f" },
    { id: "0158", spelling: "silent", pos: "\ud615", meaning: "1 \ub9d0\uc774 \uc5c6\ub294, \uce68\ubb35\ud558\ub294 2 \uc870\uc6a9\ud55c, \uace0\uc694\ud55c", emoji: "\ud83e\udd2b" },
    { id: "0159", spelling: "fill in", pos: "\uc219\uc5b4", meaning: "1 (\ube48\uce78 \ub4f1\uc5d0) \uae30\uc785\ud558\ub2e4, \uc368\ub123\ub2e4 2 (\uad6c\uba4d \ub4f1\uc744) \uba54\uc6b0\ub2e4", emoji: "\u270d\ufe0f" },
    { id: "0160", spelling: "be different from", pos: "\uc219\uc5b4", meaning: "~\uc640 \ub2e4\ub974\ub2e4", emoji: "\ud83d\udd00" }
    ],
  },
  {
    id: "day-9",
    name: "DAY 9",
    words: [
    { id: "0161", spelling: "rail", pos: "\uba85", meaning: "1 (\ucca0\ub3c4\uc758) \ub808\uc77c 2 \ucca0\ub3c4, \uae30\ucc28", emoji: "\ud83d\ude86" },
    { id: "0162", spelling: "adult", pos: "\uba85/\ud615", meaning: "\uba85 \uc131\uc778, \uc5b4\ub978 \ud615 \uc131\uc778\uc758, \ub2e4 \uc790\ub780", emoji: "\ud83e\uddd1" },
    { id: "0163", spelling: "tasty", pos: "\ud615", meaning: "\ub9db\uc788\ub294", emoji: "\ud83d\ude0b" },
    { id: "0164", spelling: "couple", pos: "\uba85", meaning: "1 \ud55c \uc30d, \ub450 \uac1c 2 \ubd80\ubd80, \ucee4\ud50c", emoji: "\ud83d\udc91" },
    { id: "0165", spelling: "especially", pos: "\ubd80", meaning: "1 \ud2b9\ud788 2 \ud2b9\ubcc4\ud788, \uac01\ubcc4\ud788", emoji: "\u2728" },
    { id: "0166", spelling: "soap", pos: "\uba85", meaning: "\ube44\ub204", emoji: "\ud83e\uddfc" },
    { id: "0167", spelling: "lonely", pos: "\ud615", meaning: "\uc678\ub85c\uc6b4, \uc4f8\uc4f8\ud55c", emoji: "\ud83d\ude14" },
    { id: "0168", spelling: "mind", pos: "\uba85", meaning: "\ub9c8\uc74c, \uc815\uc2e0", emoji: "\ud83e\udde0" },
    { id: "0169", spelling: "invention", pos: "\uba85", meaning: "\ubc1c\uba85(\ud488)", emoji: "\ud83d\udca1" },
    { id: "0170", spelling: "blind", pos: "\ud615", meaning: "1 \ub208 \uba3c, \ub9f9\uc778\uc758 2 \uc54c\uc544\ucc28\ub9ac\uc9c0/\uae68\ub2eb\uc9c0 \ubabb\ud558\ub294", emoji: "\ud83e\uddaf" },
    { id: "0171", spelling: "curly", pos: "\ud615", meaning: "\uacf1\uc2ac\uacf1\uc2ac\ud55c", emoji: "\u27b0" },
    { id: "0172", spelling: "stick", pos: "\uba85", meaning: "1 \ub098\ubb47\uac00\uc9c0, \ub9c9\ub300\uae30 2 \ucc44, \uc2a4\ud2f1", emoji: "\ud83e\udd62" },
    { id: "0173", spelling: "purse", pos: "\uba85", meaning: "(\uc5ec\uc131\uc6a9) \uc9c0\uac11, \ud578\ub4dc\ubc31", emoji: "\ud83d\udc5c" },
    { id: "0174", spelling: "share", pos: "\ub3d9", meaning: "1 \ud568\uaed8 \uc4f0\ub2e4, \uacf5\uc720\ud558\ub2e4 2 \ub098\ub204\ub2e4", emoji: "\ud83e\udd1d" },
    { id: "0175", spelling: "design", pos: "\ub3d9/\uba85", meaning: "\ub3d9 \ub514\uc790\uc778/\uc124\uacc4\ud558\ub2e4 \uba85 \ub514\uc790\uc778, \uc124\uacc4", emoji: "\ud83d\udcd0" },
    { id: "0176", spelling: "form", pos: "\uba85", meaning: "1 \uc885\ub958, \uc720\ud615 2 (\ubb38\uc11c) \uc11c\uc2dd", emoji: "\ud83d\udccb" },
    { id: "0177", spelling: "wild", pos: "\ud615", meaning: "\uc57c\uc0dd\uc758", emoji: "\ud83e\udd81" },
    { id: "0178", spelling: "gallery", pos: "\uba85", meaning: "\ubbf8\uc220\uad00, \ud654\ub791", emoji: "\ud83d\uddbc\ufe0f" },
    { id: "0179", spelling: "pick up", pos: "\uc219\uc5b4", meaning: "1 ~\uc744 \ub4e4\uc5b4 \uc62c\ub9ac\ub2e4 2 ~\uc744 (\ucc28\uc5d0) \ud0dc\uc6b0\ub7ec \uac00\ub2e4/\uc624\ub2e4", emoji: "\ud83d\ude99" },
    { id: "0180", spelling: "help out", pos: "\uc219\uc5b4", meaning: "\ub3c4\uc640\uc8fc\ub2e4", emoji: "\ud83d\ude4c" }
    ],
  },
  {
    id: "day-10",
    name: "DAY 10",
    words: [
    { id: "0181", spelling: "chat", pos: "\ub3d9/\uba85", meaning: "\ub3d9 \uc218\ub2e4\ub97c \ub5a8\ub2e4, \ub2f4\uc18c\ub97c \ub098\ub204\ub2e4 \uba85 \uc218\ub2e4, \ub2f4\uc18c", emoji: "\ud83d\udcac" },
    { id: "0182", spelling: "designer", pos: "\uba85", meaning: "\ub514\uc790\uc774\ub108", emoji: "\ud83c\udfa8" },
    { id: "0183", spelling: "result", pos: "\uba85/\ub3d9", meaning: "\uba85 \uacb0\uacfc \ub3d9 (~\uc758 \uacb0\uacfc\ub85c) \ubc1c\uc0dd\ud558\ub2e4, \uc0dd\uae30\ub2e4", emoji: "\ud83d\udcca" },
    { id: "0184", spelling: "type", pos: "\uba85", meaning: "\uc885\ub958, \uc720\ud615", emoji: "\ud83d\uddc2\ufe0f" },
    { id: "0185", spelling: "someday", pos: "\ubd80", meaning: "(\ubbf8\ub798\uc758) \uc5b8\uc820\uac00", emoji: "\ud83c\udf05" },
    { id: "0186", spelling: "actual", pos: "\ud615", meaning: "\uc2e4\uc81c\uc758, \uc0ac\uc2e4\uc758", emoji: "\u2705" },
    { id: "0187", spelling: "culture", pos: "\uba85", meaning: "\ubb38\ud654", emoji: "\ud83c\udf8e" },
    { id: "0188", spelling: "lost", pos: "\ud615", meaning: "1 \uae38\uc744 \uc783\uc740 2 \uc783\uc5b4\ubc84\ub9b0, \ubd84\uc2e4\ub41c", emoji: "\ud83e\udded" },
    { id: "0189", spelling: "item", pos: "\uba85", meaning: "1 \ubb3c\ud488, \ud488\ubaa9 2 (\ubaa9\ub85d\uc758) \ud56d\ubaa9, \uc0ac\ud56d", emoji: "\ud83d\udce6" },
    { id: "0190", spelling: "natural", pos: "\ud615", meaning: "1 \uc790\uc5f0\uc758 2 \ub2f9\uc5f0\ud55c, \uc790\uc5f0\uc2a4\ub7ec\uc6b4 3 \ud0c0\uace0\ub09c, \uc120\ucc9c\uc801\uc778", emoji: "\ud83c\udf43" },
    { id: "0191", spelling: "secret", pos: "\uba85/\ud615", meaning: "\uba85 \ube44\ubc00 \ud615 \ube44\ubc00\uc758", emoji: "\ud83e\udd10" },
    { id: "0192", spelling: "breath", pos: "\uba85", meaning: "\uc228, \ud638\ud761", emoji: "\ud83c\udf2c\ufe0f" },
    { id: "0193", spelling: "excite", pos: "\ub3d9", meaning: "\ud765\ubd84\uc2dc\ud0a4\ub2e4, \ub4e4\ub728\uac8c \ud558\ub2e4", emoji: "\ud83e\udd29" },
    { id: "0194", spelling: "online", pos: "\ubd80/\ud615", meaning: "\ubd80 \uc628\ub77c\uc778\uc73c\ub85c \ud615 \uc628\ub77c\uc778\uc758", emoji: "\ud83d\udcbb" },
    { id: "0195", spelling: "garbage", pos: "\uba85", meaning: "\uc4f0\ub808\uae30", emoji: "\ud83d\uddd1\ufe0f" },
    { id: "0196", spelling: "suck", pos: "\ub3d9", meaning: "1 \ube68\uc544 \uba39\ub2e4/\ub9c8\uc2dc\ub2e4 2 \ube68\ub2e4", emoji: "\ud83e\udd64" },
    { id: "0197", spelling: "prison", pos: "\uba85", meaning: "\uad50\ub3c4\uc18c, \uac10\uc625", emoji: "\ud83d\udd12" },
    { id: "0198", spelling: "flow", pos: "\ub3d9/\uba85", meaning: "\ub3d9 \ud750\ub974\ub2e4 \uba85 \ud750\ub984", emoji: "\ud83c\udf0a" },
    { id: "0199", spelling: "make noise", pos: "\uc219\uc5b4", meaning: "\uc18c\ub780\uc744 \ud53c\uc6b0\ub2e4, \ub5a0\ub4e4\ub2e4", emoji: "\ud83d\udce3" },
    { id: "0200", spelling: "hand in hand", pos: "\uc219\uc5b4", meaning: "\uc11c\ub85c \uc190\uc744 \uc7a1\uace0", emoji: "\ud83e\udef1\ud83e\udef2" }
    ],
  }
];

// 하위 호환용: 첫 번째 DAY의 단어 목록
export const DEFAULT_WORDS: Word[] = DEFAULT_DAYS[0].words;

const DAYS_KEY = "spelling-days-v2";

function defaultDays(): Day[] {
  return DEFAULT_DAYS.map((d) => ({ ...d, words: [...d.words] }));
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

export function makeBlankPatternSeeded(spelling: string, seed: number): string[] {
  const chars = spelling.split("");
  const letters: { idx: number; ch: string }[] = [];
  chars.forEach((ch, idx) => {
    if (/[a-zA-Z]/.test(ch)) letters.push({ idx, ch });
  });
  if (letters.length <= 2) {
    return chars.map((ch) => (/[a-zA-Z]/.test(ch) ? "_" : ch));
  }
  // seeded PRNG
  let s = seed + spelling.length * 31 + 12345;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  // shuffle letter indices to decide which ones to show vs blank
  const indices = letters.map((l) => l.idx);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  // show first letter + ~half of the rest
  const showCount = Math.max(1, Math.ceil(letters.length * 0.45));
  const showSet = new Set(indices.slice(0, showCount));
  return chars.map((ch, idx) => {
    if (!/[a-zA-Z]/.test(ch)) return ch;
    return showSet.has(idx) ? ch : "_";
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
