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
  },
  {
    id: "day-11",
    name: "DAY 11",
    words: [
    { id: "0201", spelling: "solar", pos: "형", meaning: "태양의, 태양에 관한", emoji: "☀️" },
    { id: "0202", spelling: "captain", pos: "명", meaning: "1 선장, 기장 2 (팀의) 주장", emoji: "🧑‍✈️" },
    { id: "0203", spelling: "dialogue", pos: "명", meaning: "(소설 · 영화 등의) 대화, 회화", emoji: "💬" },
    { id: "0204", spelling: "fail", pos: "동", meaning: "1 실패하다 2 (시험에) 떨어지다", emoji: "❌" },
    { id: "0205", spelling: "actually", pos: "부", meaning: "실제로, 정말로", emoji: "💡" },
    { id: "0206", spelling: "special", pos: "형", meaning: "특별한", emoji: "✨" },
    { id: "0207", spelling: "tear", pos: "명/동", meaning: "명 눈물 동 찢다, 찢어지다", emoji: "😢" },
    { id: "0208", spelling: "however", pos: "부", meaning: "그러나, 그렇지만", emoji: "🔁" },
    { id: "0209", spelling: "burn", pos: "동", meaning: "(불에) 타다, 태우다", emoji: "🔥" },
    { id: "0210", spelling: "upstairs", pos: "부/형", meaning: "부 위층으로/에 형 위층의", emoji: "⬆️" },
    { id: "0211", spelling: "living", pos: "형/명", meaning: "형 살아 있는 명 생활비, 생계 수단", emoji: "🛋️" },
    { id: "0212", spelling: "report", pos: "동/명", meaning: "동 보고하다, 발표하다 2 보도하다 명 보고(서)", emoji: "📑" },
    { id: "0213", spelling: "produce", pos: "동", meaning: "1 생산하다 2 (결과 등을) 낳다, 일으키다", emoji: "🏭" },
    { id: "0214", spelling: "cheer", pos: "명/동", meaning: "명 환호(성) 동 환호/응원하다, 모으다", emoji: "📣" },
    { id: "0215", spelling: "excited", pos: "형", meaning: "신이 난, 흥분한", emoji: "🤩" },
    { id: "0216", spelling: "gather", pos: "동", meaning: "1 (사람들이) 모이다, 모으다 2 (정보 등을) 수집하다", emoji: "👥" },
    { id: "0217", spelling: "melt", pos: "동", meaning: "녹다, 녹이다", emoji: "🫠" },
    { id: "0218", spelling: "straw", pos: "명", meaning: "1 짚, 밀짚 2 빨대", emoji: "🥤" },
    { id: "0219", spelling: "take care of", pos: "숙어", meaning: "~을 돌보다", emoji: "🤱" },
    { id: "0220", spelling: "not ~ anymore", pos: "숙어", meaning: "더 이상 ~않다", emoji: "🚫" },
    ],
  },
  {
    id: "day-12",
    name: "DAY 12",
    words: [
    { id: "0221", spelling: "save", pos: "동", meaning: "1 (위험으로부터) 구하다 2 (돈을) 저축하다 3 (자원을) 절약하다", emoji: "💾" },
    { id: "0222", spelling: "cause", pos: "명/동", meaning: "명 원인 동 ~의 원인이 되다, 일으키다", emoji: "🎯" },
    { id: "0223", spelling: "exercise", pos: "명/동", meaning: "명 1 운동 2 훈련, 연습 동 운동하다", emoji: "🏋️" },
    { id: "0224", spelling: "member", pos: "명", meaning: "회원, 일원", emoji: "🧑‍🤝‍🧑" },
    { id: "0225", spelling: "press", pos: "동/명", meaning: "동 누르다 명 신문, 언론", emoji: "📰" },
    { id: "0226", spelling: "serious", pos: "형", meaning: "1 (상태 · 정도가) 심각한 2 진지한", emoji: "😐" },
    { id: "0227", spelling: "talent", pos: "명", meaning: "(타고난) 재능, 재주", emoji: "🌟" },
    { id: "0228", spelling: "greet", pos: "동", meaning: "맞이하다, 환영하다", emoji: "👋" },
    { id: "0229", spelling: "beat", pos: "동", meaning: "1 때리다, 두드리다 2 이기다", emoji: "🥊" },
    { id: "0230", spelling: "stress", pos: "명/동", meaning: "명 1 스트레스, 압박 2 강조 동 강조하다", emoji: "😣" },
    { id: "0231", spelling: "later", pos: "부", meaning: "나중에, 후에", emoji: "⏰" },
    { id: "0232", spelling: "create", pos: "동", meaning: "창조하다, 만들다", emoji: "🎨" },
    { id: "0233", spelling: "flat", pos: "형", meaning: "1 평평한 2 (타이어 등이) 바람이 빠진, 펑크가 난", emoji: "🛞" },
    { id: "0234", spelling: "return", pos: "동/명", meaning: "동 돌아가다/오다 2 돌려주다, 반납하다 명 돌아옴, 귀환", emoji: "🔙" },
    { id: "0235", spelling: "activity", pos: "명", meaning: "활동", emoji: "🤸" },
    { id: "0236", spelling: "afraid", pos: "형", meaning: "1 두려워하는 2 걱정하는", emoji: "😨" },
    { id: "0237", spelling: "dessert", pos: "명", meaning: "디저트, 후식", emoji: "🍰" },
    { id: "0238", spelling: "toothache", pos: "명", meaning: "치통", emoji: "🦷" },
    { id: "0239", spelling: "in fact", pos: "숙어", meaning: "사실은", emoji: "💬" },
    { id: "0240", spelling: "no longer", pos: "숙어", meaning: "더 이상 ~않다", emoji: "🚫" },
    ],
  },
  {
    id: "day-13",
    name: "DAY 13",
    words: [
    { id: "0241", spelling: "effect", pos: "명", meaning: "영향, 결과", emoji: "💥" },
    { id: "0242", spelling: "focus", pos: "동", meaning: "집중하다, 집중시키다", emoji: "🎯" },
    { id: "0243", spelling: "dictionary", pos: "명", meaning: "사전", emoji: "📖" },
    { id: "0244", spelling: "allow", pos: "동", meaning: "허락하다, 허용하다", emoji: "✅" },
    { id: "0245", spelling: "print", pos: "동", meaning: "1 인쇄하다 2 출판하다, 발행하다", emoji: "🖨️" },
    { id: "0246", spelling: "safely", pos: "부", meaning: "안전하게, 무사히", emoji: "🛡️" },
    { id: "0247", spelling: "giant", pos: "형/명", meaning: "형 거대한, 특대의 명 거인", emoji: "🦣" },
    { id: "0248", spelling: "usually", pos: "부", meaning: "보통, 대개", emoji: "🔄" },
    { id: "0249", spelling: "creative", pos: "형", meaning: "창의적인, 창조적인", emoji: "🎨" },
    { id: "0250", spelling: "review", pos: "명/동", meaning: "명 1 검토(하다) 2 평론(하다), 비평(하다) 3 복습(하다)", emoji: "📝" },
    { id: "0251", spelling: "kiss", pos: "명/동", meaning: "명 키스, 입맞춤 동 키스하다, 입맞추다", emoji: "💋" },
    { id: "0252", spelling: "strange", pos: "형", meaning: "1 이상한 2 낯선", emoji: "❓" },
    { id: "0253", spelling: "comic", pos: "형/명", meaning: "형 1 웃기는 2 코미디의, 희극의 명 만화책", emoji: "😂" },
    { id: "0254", spelling: "mark", pos: "명/동", meaning: "명 1 얼룩, 자국 2 표시 동 표시하다", emoji: "✏️" },
    { id: "0255", spelling: "shop", pos: "명/동", meaning: "명 가게, 상점 동 물건을 사다, 쇼핑하다", emoji: "🏬" },
    { id: "0256", spelling: "talented", pos: "형", meaning: "재능 있는, 유능한", emoji: "🌟" },
    { id: "0257", spelling: "bare", pos: "형", meaning: "벌거벗은, 살을 드러낸", emoji: "🦵" },
    { id: "0258", spelling: "housework", pos: "명", meaning: "집안일, 가사", emoji: "🧹" },
    { id: "0259", spelling: "at least", pos: "숙어", meaning: "적어도, 최소한", emoji: "➖" },
    { id: "0260", spelling: "pass through", pos: "숙어", meaning: "1 지나가다, 통과하다 2 겪다, 경험하다", emoji: "🚪" },
    ],
  },
  {
    id: "day-14",
    name: "DAY 14",
    words: [
    { id: "0261", spelling: "rise", pos: "동", meaning: "1 오르다, 상승하다 2 일어나다 3 (해 · 달이) 뜨다", emoji: "📈" },
    { id: "0262", spelling: "accept", pos: "동", meaning: "받아들이다, 수락하다", emoji: "🤝" },
    { id: "0263", spelling: "topic", pos: "명", meaning: "주제, 화제", emoji: "💬" },
    { id: "0264", spelling: "flight", pos: "명", meaning: "1 (비행기) 여행, 비행 2 항공편, 항공기", emoji: "✈️" },
    { id: "0265", spelling: "hunter", pos: "명", meaning: "사냥꾼", emoji: "🏹" },
    { id: "0266", spelling: "medicine", pos: "명", meaning: "1 약, 약물 2 의학, 의술", emoji: "💊" },
    { id: "0267", spelling: "text", pos: "명/동", meaning: "명 1 (책 등의) 글, 본문 2 (컴퓨터의) 텍스트, 문서 동 1 문자를 보내다 2 (물을) 삶다", emoji: "📝" },
    { id: "0268", spelling: "boil", pos: "동", meaning: "끓다, 끓이다", emoji: "🍲" },
    { id: "0269", spelling: "pleasure", pos: "명", meaning: "즐거움, 기쁨", emoji: "😊" },
    { id: "0270", spelling: "dirt", pos: "명", meaning: "1 먼지, 때 2 흙", emoji: "🪨" },
    { id: "0271", spelling: "everywhere", pos: "부", meaning: "모든 곳에, 어디든지", emoji: "🌍" },
    { id: "0272", spelling: "sheet", pos: "명", meaning: "1 시트, 얇은 천 2 (종이) 한 장", emoji: "📄" },
    { id: "0273", spelling: "village", pos: "명", meaning: "(시골) 마을", emoji: "🏘️" },
    { id: "0274", spelling: "powerful", pos: "형", meaning: "1 영향력 있는 2 강력한, 효과적인", emoji: "💪" },
    { id: "0275", spelling: "scare", pos: "동", meaning: "겁주다, 겁나게 하다", emoji: "👻" },
    { id: "0276", spelling: "step", pos: "명/동", meaning: "명 1 (발)걸음 2 조치 3 단계 동 걷다, 발을 내디디다", emoji: "👣" },
    { id: "0277", spelling: "cooking", pos: "명/형", meaning: "명 요리(하기) 형 요리(용)의", emoji: "🍳" },
    { id: "0278", spelling: "anger", pos: "명", meaning: "화, 분노", emoji: "😡" },
    { id: "0279", spelling: "look up", pos: "숙어", meaning: "1 (정보를) 찾아보다 2 올려다보다", emoji: "🔍" },
    { id: "0280", spelling: "cut ~ into pieces", pos: "숙어", meaning: "~을 여러 조각으로 자르다", emoji: "🔪" },
    ],
  },
  {
    id: "day-15",
    name: "DAY 15",
    words: [
    { id: "0281", spelling: "own", pos: "형/동", meaning: "형 자기 자신의 동 소유하다", emoji: "🪪" },
    { id: "0282", spelling: "praise", pos: "동/명", meaning: "동 칭찬하다 명 칭찬, 찬양", emoji: "👏" },
    { id: "0283", spelling: "continue", pos: "동", meaning: "계속되다, 계속하다", emoji: "➡️" },
    { id: "0284", spelling: "wooden", pos: "형", meaning: "나무로 된, 목제의", emoji: "🪵" },
    { id: "0285", spelling: "coast", pos: "명", meaning: "해안, 연안", emoji: "🏖️" },
    { id: "0286", spelling: "hike", pos: "동/명", meaning: "동 하이킹, 도보 여행 명 하이킹, 도보 여행", emoji: "🥾" },
    { id: "0287", spelling: "scared", pos: "형", meaning: "두려워하는, 겁먹은", emoji: "😱" },
    { id: "0288", spelling: "beyond", pos: "전", meaning: "1 (장소) ~저편에/너머에 2 (시간) ~을 지나서", emoji: "🌌" },
    { id: "0289", spelling: "meeting", pos: "명", meaning: "회의", emoji: "🗓️" },
    { id: "0290", spelling: "danger", pos: "명", meaning: "위험(성)", emoji: "⚠️" },
    { id: "0291", spelling: "traffic", pos: "명", meaning: "교통(량)", emoji: "🚦" },
    { id: "0292", spelling: "even", pos: "부", meaning: "1 ~조차, ~까지, ~도 2 (비교급 강조) 훨씬, 더욱", emoji: "➕" },
    { id: "0293", spelling: "foreign", pos: "형", meaning: "외국(의)", emoji: "🌐" },
    { id: "0294", spelling: "lie", pos: "동", meaning: "1 눕다 2 놓여 있다 3 거짓말하다", emoji: "🛌" },
    { id: "0295", spelling: "skip", pos: "동", meaning: "1 (일을) 빼다, 거르다 2 건너뛰다, 생략하다", emoji: "⏭️" },
    { id: "0296", spelling: "refuse", pos: "동", meaning: "거절하다, 거부하다", emoji: "🙅" },
    { id: "0297", spelling: "plate", pos: "명", meaning: "접시", emoji: "🍽️" },
    { id: "0298", spelling: "alive", pos: "형", meaning: "살아 있는", emoji: "🫀" },
    { id: "0299", spelling: "stay up", pos: "숙어", meaning: "(늦게까지) 깨어 있다, 안 자다", emoji: "🌙" },
    { id: "0300", spelling: "get along with", pos: "숙어", meaning: "~와 잘 지내다", emoji: "🤝" },
    ],
  },
  {
    id: "day-16",
    name: "DAY 16",
    words: [
    { id: "0301", spelling: "sign", pos: "명/동", meaning: "명 1 표지판 2 기미, 조짐 동 서명하다", emoji: "🪧" },
    { id: "0302", spelling: "branch", pos: "명", meaning: "1 나뭇가지 2 지점, 지사", emoji: "🌿" },
    { id: "0303", spelling: "reach", pos: "동", meaning: "1 도달하다 2 (손이) 닿다", emoji: "🤲" },
    { id: "0304", spelling: "common", pos: "형", meaning: "1 흔한 2 공통의, 공동의", emoji: "🔁" },
    { id: "0305", spelling: "path", pos: "명", meaning: "1 (밟아서 생긴) 길, 오솔길 2 경로, 방향", emoji: "🛤️" },
    { id: "0306", spelling: "core", pos: "명/형", meaning: "명 핵심, 중심부 형 핵심적인, 가장 중요한", emoji: "🍎" },
    { id: "0307", spelling: "foreigner", pos: "명", meaning: "외국인", emoji: "🧳" },
    { id: "0308", spelling: "toward", pos: "전", meaning: "~쪽으로, ~을 향하여", emoji: "➡️" },
    { id: "0309", spelling: "vote", pos: "동/명", meaning: "동 투표하다 명 투표, 표결", emoji: "🗳️" },
    { id: "0310", spelling: "headache", pos: "명", meaning: "두통", emoji: "🤕" },
    { id: "0311", spelling: "interest", pos: "명/동", meaning: "명 1 흥미, 관심 2 관심사 동 관심을 끌다", emoji: "🧐" },
    { id: "0312", spelling: "match", pos: "명/동", meaning: "명 1 경기, 시합 2 성냥 동 어울리다", emoji: "⚽" },
    { id: "0313", spelling: "owner", pos: "명", meaning: "주인, 소유자", emoji: "🔑" },
    { id: "0314", spelling: "scary", pos: "형", meaning: "무서운, 두려운", emoji: "👻" },
    { id: "0315", spelling: "aid", pos: "명/동", meaning: "명 1 도움 2 원조, 지원", emoji: "🆘" },
    { id: "0316", spelling: "tradition", pos: "명", meaning: "전통, 관습", emoji: "🎎" },
    { id: "0317", spelling: "per", pos: "전", meaning: "~당, ~마다", emoji: "➗" },
    { id: "0318", spelling: "wax", pos: "명/동", meaning: "명 밀랍, 왁스 동 왁스를 발라 광을 내다", emoji: "🕯️" },
    { id: "0319", spelling: "at that time", pos: "숙어", meaning: "그때, 그 당시", emoji: "⌛" },
    { id: "0320", spelling: "sooner or later", pos: "숙어", meaning: "조만간, 곧", emoji: "⏳" },
    ],
  },
  {
    id: "day-17",
    name: "DAY 17",
    words: [
    { id: "0321", spelling: "judge", pos: "명/동", meaning: "명 1 판사 2 심판, 심사위원 동 판단하다, 평가하다", emoji: "⚖️" },
    { id: "0322", spelling: "agree", pos: "동", meaning: "동의하다", emoji: "👍" },
    { id: "0323", spelling: "basic", pos: "형", meaning: "기본적인, 기초적인 명 기본, 기초", emoji: "🔤" },
    { id: "0324", spelling: "drawer", pos: "명", meaning: "서랍", emoji: "🗄️" },
    { id: "0325", spelling: "greenhouse", pos: "명", meaning: "온실", emoji: "🏡" },
    { id: "0326", spelling: "iron", pos: "명", meaning: "1 철, 쇠 2 다리미", emoji: "🪨" },
    { id: "0327", spelling: "tower", pos: "명", meaning: "탑", emoji: "🗼" },
    { id: "0328", spelling: "either", pos: "대/부", meaning: "대 (둘 중) 어느 한 쪽 부 부정문 ~도 또한 (~없다)", emoji: "↔️" },
    { id: "0329", spelling: "mad", pos: "형", meaning: "1 화가 난 2 미친", emoji: "😠" },
    { id: "0330", spelling: "straight", pos: "부/형", meaning: "부 똑바로, 곧장 형 곧은, 일직선의", emoji: "📏" },
    { id: "0331", spelling: "record", pos: "명/동", meaning: "명 1 (글 등으로 남긴) 기록 2 (스포츠 등의) 기록 동 기록하다", emoji: "📼" },
    { id: "0332", spelling: "solve", pos: "동", meaning: "(문제를) 풀다, 해결하다", emoji: "🧩" },
    { id: "0333", spelling: "company", pos: "명", meaning: "1 회사 2 동료, 일행", emoji: "🏢" },
    { id: "0334", spelling: "nation", pos: "명", meaning: "국가, 나라", emoji: "🏳️" },
    { id: "0335", spelling: "pleased", pos: "형", meaning: "기쁜, 만족스러운", emoji: "😊" },
    { id: "0336", spelling: "control", pos: "명/동", meaning: "명 통제(력), 지배(력) 동 통제하다, 지배하다", emoji: "🎛️" },
    { id: "0337", spelling: "helpful", pos: "형", meaning: "도움이 되는, 유익한", emoji: "🙌" },
    { id: "0338", spelling: "self", pos: "명", meaning: "자신, 자아", emoji: "🪞" },
    { id: "0339", spelling: "run out", pos: "숙어", meaning: "(시간 · 돈 등이) 다 되다, 다 떨어지다", emoji: "⏳" },
    { id: "0340", spelling: "after all", pos: "숙어", meaning: "결국, 어쨌든", emoji: "🤷" },
    ],
  },
  {
    id: "day-18",
    name: "DAY 18",
    words: [
    { id: "0341", spelling: "fry", pos: "동", meaning: "(기름에) 튀기다, 볶다", emoji: "🍳" },
    { id: "0342", spelling: "habit", pos: "명", meaning: "버릇, 습관", emoji: "🔁" },
    { id: "0343", spelling: "tax", pos: "명", meaning: "세금", emoji: "💸" },
    { id: "0344", spelling: "surprised", pos: "형", meaning: "놀란, 놀라는", emoji: "😲" },
    { id: "0345", spelling: "abroad", pos: "부", meaning: "해외에, 해외로", emoji: "🌏" },
    { id: "0346", spelling: "slide", pos: "동/명", meaning: "동 미끄러지다 명 미끄럼틀", emoji: "🛝" },
    { id: "0347", spelling: "disagree", pos: "동", meaning: "동의하지 않다", emoji: "👎" },
    { id: "0348", spelling: "while", pos: "접", meaning: "1 ~하는 동안 2 ~에 반하여 명 잠깐, 잠시", emoji: "⌛" },
    { id: "0349", spelling: "row", pos: "명", meaning: "1 열, 줄 2 (극장 등의 좌석) 줄", emoji: "📏" },
    { id: "0350", spelling: "festival", pos: "명", meaning: "축제", emoji: "🎪" },
    { id: "0351", spelling: "aloud", pos: "부", meaning: "1 소리 내어 2 큰 소리로", emoji: "📢" },
    { id: "0352", spelling: "shape", pos: "명/동", meaning: "명 1 형태, 모양 2 (건강) 상태, 몸매", emoji: "🔷" },
    { id: "0353", spelling: "tough", pos: "형", meaning: "1 힘든, 어려운 2 강인한, 굳센", emoji: "💪" },
    { id: "0354", spelling: "cafeteria", pos: "명", meaning: "카페테리아, 구내식당", emoji: "🍽️" },
    { id: "0355", spelling: "lock", pos: "동/명", meaning: "동 잠그다 명 자물쇠, 잠금장치", emoji: "🔒" },
    { id: "0356", spelling: "bottom", pos: "명/형", meaning: "명 맨 아래, 바닥 형 맨 아래의", emoji: "⬇️" },
    { id: "0357", spelling: "product", pos: "명", meaning: "생산품, 제품", emoji: "📦" },
    { id: "0358", spelling: "medal", pos: "명", meaning: "메달, 훈장", emoji: "🏅" },
    { id: "0359", spelling: "get to", pos: "숙어", meaning: "~에 도착하다, ~에 이르다", emoji: "🏁" },
    { id: "0360", spelling: "come true", pos: "숙어", meaning: "이루어지다, 실현되다", emoji: "🌠" },
    ],
  },
  {
    id: "day-19",
    name: "DAY 19",
    words: [
    { id: "0361", spelling: "sale", pos: "명", meaning: "1 판매 2 할인 판매, 세일", emoji: "🏷️" },
    { id: "0362", spelling: "metal", pos: "명", meaning: "금속", emoji: "⛓️" },
    { id: "0363", spelling: "complete", pos: "형/동", meaning: "형 완전한, 완벽한 동 1 완수하다 2 완성하다", emoji: "✅" },
    { id: "0364", spelling: "general", pos: "형/명", meaning: "형 1 전반/전체적인 2 일반적인, 일반의 명 장군", emoji: "🪖" },
    { id: "0365", spelling: "parade", pos: "명", meaning: "퍼레이드, 행진", emoji: "🎉" },
    { id: "0366", spelling: "royal", pos: "형", meaning: "왕실의, 왕족의", emoji: "👑" },
    { id: "0367", spelling: "ever", pos: "부", meaning: "1 의문문 · 조건문 언젠가, 지금까지 2 부정문 결코, 전혀", emoji: "♾️" },
    { id: "0368", spelling: "though", pos: "접/부", meaning: "접 비록 ~이지만 부 하지만", emoji: "🔁" },
    { id: "0369", spelling: "direct", pos: "형/동", meaning: "형 직접적인 동 1 지시/명령하다 2 (길을) 안내하다", emoji: "➡️" },
    { id: "0370", spelling: "amazing", pos: "형", meaning: "놀라운, 굉장한", emoji: "🤩" },
    { id: "0371", spelling: "clay", pos: "명", meaning: "점토, 찰흙", emoji: "🧱" },
    { id: "0372", spelling: "bow", pos: "동/명", meaning: "동 (허리를 굽혀) 인사하다, 절하다 명 1 인사, 절 2 활", emoji: "🎀" },
    { id: "0373", spelling: "interview", pos: "명/동", meaning: "명 1 면접 2 인터뷰, 회견 동 인터뷰하다", emoji: "🎤" },
    { id: "0374", spelling: "outdoor", pos: "형", meaning: "야외의", emoji: "🏕️" },
    { id: "0375", spelling: "normal", pos: "형", meaning: "1 보통의, 평범한 2 (심신이) 정상적인", emoji: "🆗" },
    { id: "0376", spelling: "factory", pos: "명", meaning: "공장", emoji: "🏭" },
    { id: "0377", spelling: "peer", pos: "명", meaning: "또래, 동료", emoji: "👥" },
    { id: "0378", spelling: "sketch", pos: "명/동", meaning: "명 스케치, 밑그림 동 스케치하다", emoji: "✏️" },
    { id: "0379", spelling: "after a while", pos: "숙어", meaning: "잠시 후에", emoji: "⏳" },
    { id: "0380", spelling: "slow down", pos: "숙어", meaning: "(속도를) 늦추다", emoji: "🐢" },
    ],
  },
  {
    id: "day-20",
    name: "DAY 20",
    words: [
    { id: "0381", spelling: "base", pos: "명/동", meaning: "명 1 맨 아랫부분, 밑바닥 2 바닥 동 기초, 기반", emoji: "🏗️" },
    { id: "0382", spelling: "grade", pos: "명", meaning: "1 등급 2 학년 3 성적", emoji: "🏅" },
    { id: "0383", spelling: "signal", pos: "명", meaning: "신호", emoji: "🚦" },
    { id: "0384", spelling: "meaning", pos: "명", meaning: "의미, 뜻", emoji: "💭" },
    { id: "0385", spelling: "cover", pos: "동/명", meaning: "동 1 덮다 2 (책 등을) 다루다, 포함하다 명 덮개", emoji: "📕" },
    { id: "0386", spelling: "awake", pos: "형/동", meaning: "형 깨어 있는 동 깨어나다", emoji: "👁️" },
    { id: "0387", spelling: "quickly", pos: "부", meaning: "빨리, 빠르게", emoji: "⚡" },
    { id: "0388", spelling: "trash", pos: "명", meaning: "쓰레기", emoji: "🗑️" },
    { id: "0389", spelling: "protect", pos: "동", meaning: "보호하다, 지키다", emoji: "🛡️" },
    { id: "0390", spelling: "evil", pos: "형/명", meaning: "형 사악한 명 악", emoji: "😈" },
    { id: "0391", spelling: "character", pos: "명", meaning: "1 성격, 성질 2 특징, 특색 3 등장인물", emoji: "🎭" },
    { id: "0392", spelling: "friendly", pos: "형", meaning: "친절한, 다정한", emoji: "😊" },
    { id: "0393", spelling: "worried", pos: "형", meaning: "걱정스러운", emoji: "😟" },
    { id: "0394", spelling: "director", pos: "명", meaning: "1 (회사의) 이사, 임원 2 책임자, 관리자 3 (영화 등의) 감독", emoji: "🎬" },
    { id: "0395", spelling: "sentence", pos: "명", meaning: "1 문장 2 선고, 판결", emoji: "📝" },
    { id: "0396", spelling: "loose", pos: "형", meaning: "1 헐거운, 느슨한 2 헐렁한", emoji: "👖" },
    { id: "0397", spelling: "indoor", pos: "형", meaning: "실내(용)의", emoji: "🏠" },
    { id: "0398", spelling: "puzzle", pos: "명", meaning: "1 퍼즐 2 (이해하기 힘든) 수수께끼, 미스터리", emoji: "🧩" },
    { id: "0399", spelling: "take away", pos: "숙어", meaning: "~을 치우다", emoji: "➖" },
    { id: "0400", spelling: "have ~ in common", pos: "숙어", meaning: "공통적으로 ~을 가지다", emoji: "♻️" },
    ],
  },
  {
    id: "day-21",
    name: "DAY 21",
    words: [
    { id: "0401", spelling: "bill", pos: "명", meaning: "1 고지서, 청구서 2 지폐", emoji: "🧾" },
    { id: "0402", spelling: "cough", pos: "동/명", meaning: "동 기침하다 명 기침", emoji: "😷" },
    { id: "0403", spelling: "image", pos: "명", meaning: "1 이미지, 인상 2 (거울 등에 비친) 상(像), 모습", emoji: "🖼️" },
    { id: "0404", spelling: "national", pos: "형", meaning: "1 국가의, 국가적인 2 국립의, 국영의", emoji: "🏳️" },
    { id: "0405", spelling: "seed", pos: "명", meaning: "씨앗, 종자", emoji: "🌱" },
    { id: "0406", spelling: "truth", pos: "명", meaning: "진실, 사실", emoji: "💯" },
    { id: "0407", spelling: "mixture", pos: "명", meaning: "혼합(물)", emoji: "🥣" },
    { id: "0408", spelling: "reuse", pos: "동", meaning: "재사용하다", emoji: "♻️" },
    { id: "0409", spelling: "discover", pos: "동", meaning: "1 발견하다 2 알게 되다, 깨닫다", emoji: "🔎" },
    { id: "0410", spelling: "junk", pos: "명", meaning: "쓸모 없는 물건, 쓰레기", emoji: "🗑️" },
    { id: "0411", spelling: "courage", pos: "명", meaning: "용기", emoji: "🦁" },
    { id: "0412", spelling: "shine", pos: "동", meaning: "빛나다, 반짝이다", emoji: "✨" },
    { id: "0413", spelling: "eastern", pos: "형", meaning: "동쪽의, 동쪽에 있는", emoji: "🧭" },
    { id: "0414", spelling: "peace", pos: "명", meaning: "평화, 평온함", emoji: "☮️" },
    { id: "0415", spelling: "fortune", pos: "명", meaning: "1 부(富), 재산 2 운", emoji: "🍀" },
    { id: "0416", spelling: "accident", pos: "명", meaning: "1 사고 2 우연(한 사건)", emoji: "🚑" },
    { id: "0417", spelling: "humor", pos: "명", meaning: "유머, 익살스러움", emoji: "😄" },
    { id: "0418", spelling: "wrap", pos: "동", meaning: "1 싸다, 포장하다 2 두르다", emoji: "🎁" },
    { id: "0419", spelling: "show up", pos: "숙어", meaning: "나타나다, 모습을 드러내다", emoji: "🚶" },
    { id: "0420", spelling: "be covered with", pos: "숙어", meaning: "~로 덮여 있다", emoji: "❄️" },
    ],
  },
  {
    id: "day-22",
    name: "DAY 22",
    words: [
    { id: "0421", spelling: "breathe", pos: "동", meaning: "숨 쉬다, 호흡하다", emoji: "🌬️" },
    { id: "0422", spelling: "gain", pos: "동", meaning: "1 (노력해서) 얻다 2 (체중 등이) 늘다, (경험 등을) 쌓다", emoji: "📈" },
    { id: "0423", spelling: "fit", pos: "동/형", meaning: "동 1 꼭 맞다 2 적합하다, 어울리다 형 건강한", emoji: "💪" },
    { id: "0424", spelling: "chief", pos: "명/형", meaning: "명 우두머리, 장(長) 형 1 (지위가) 최고의, 수석의 2 주요한", emoji: "🎖️" },
    { id: "0425", spelling: "humorous", pos: "형", meaning: "재미있는, 유머가 풍부한", emoji: "😆" },
    { id: "0426", spelling: "unique", pos: "형", meaning: "1 독특한, 특별한 2 유일한, 특유한", emoji: "🦄" },
    { id: "0427", spelling: "completely", pos: "부", meaning: "완전히, 완벽하게", emoji: "💯" },
    { id: "0428", spelling: "pose", pos: "동/명", meaning: "동 포즈를 취하다 명 자세, 포즈", emoji: "📸" },
    { id: "0429", spelling: "adventure", pos: "명", meaning: "모험", emoji: "🗺️" },
    { id: "0430", spelling: "tight", pos: "형/부", meaning: "형 1 (옷이) 꽉 끼는 2 빽빽한 부 단단히, 꽉", emoji: "🧷" },
    { id: "0431", spelling: "stupid", pos: "형", meaning: "어리석은, 우둔한", emoji: "🤪" },
    { id: "0432", spelling: "double", pos: "형/동", meaning: "형 1 이중의 2 2인용의 동 두 배로 되다/만들다", emoji: "✌️" },
    { id: "0433", spelling: "race", pos: "명", meaning: "1 경주, 경기 2 인종", emoji: "🏁" },
    { id: "0434", spelling: "express", pos: "동/명", meaning: "동 (감정 · 의견 등을) 표현하다, 나타내다 명 급행", emoji: "🗣️" },
    { id: "0435", spelling: "illegal", pos: "형", meaning: "불법의, 불법적인", emoji: "🚫" },
    { id: "0436", spelling: "symbol", pos: "명", meaning: "1 상징(물) 2 기호, 부호", emoji: "🔣" },
    { id: "0437", spelling: "mention", pos: "동", meaning: "(간단히) 말하다, 언급하다", emoji: "💬" },
    { id: "0438", spelling: "sum", pos: "명/동", meaning: "명 1 (돈의) 금액 2 합계 동 요약하다", emoji: "➕" },
    { id: "0439", spelling: "look through", pos: "숙어", meaning: "~을 훑어보다", emoji: "🔭" },
    { id: "0440", spelling: "throw away", pos: "숙어", meaning: "~을 버리다", emoji: "🗑️" },
    ],
  },
  {
    id: "day-23",
    name: "DAY 23",
    words: [
    { id: "0441", spelling: "bite", pos: "동/명", meaning: "동 물다 명 1 한 입 2 물린 상처", emoji: "🦷" },
    { id: "0442", spelling: "society", pos: "명", meaning: "1 사회 2 협회, 학회, 단체", emoji: "🏛️" },
    { id: "0443", spelling: "title", pos: "명", meaning: "제목, 표제", emoji: "🏷️" },
    { id: "0444", spelling: "anybody", pos: "대", meaning: "1 긍정문 누구나 2 의문문 누군가 3 부정문 아무도", emoji: "❓" },
    { id: "0445", spelling: "fever", pos: "명", meaning: "열", emoji: "🤒" },
    { id: "0446", spelling: "scenery", pos: "명", meaning: "풍경, 경치", emoji: "🏞️" },
    { id: "0447", spelling: "order", pos: "명/동", meaning: "명 순서 동 1 명령(하다) 2 주문(하다)", emoji: "📋" },
    { id: "0448", spelling: "neither", pos: "대/부", meaning: "(둘 중) 어느 쪽도 ~ 아니다", emoji: "❎" },
    { id: "0449", spelling: "diamond", pos: "명", meaning: "1 다이아몬드 2 마름모꼴", emoji: "💎" },
    { id: "0450", spelling: "source", pos: "명", meaning: "1 원천 2 근원, 원인 3 (정보의) 출처", emoji: "🌊" },
    { id: "0451", spelling: "contact", pos: "명/동", meaning: "명 1 연락 2 접촉, 맞닿음 동 연락하다", emoji: "📞" },
    { id: "0452", spelling: "equal", pos: "형/동", meaning: "형 1 동일한, 같은 2 평등한 동 (수 등이) ~과 같다, ~이다", emoji: "🟰" },
    { id: "0453", spelling: "none", pos: "대", meaning: "아무[하나도] ~ 않다", emoji: "🚫" },
    { id: "0454", spelling: "period", pos: "명", meaning: "1 기간 2 (역사의) 시대", emoji: "📅" },
    { id: "0455", spelling: "journey", pos: "명", meaning: "여행", emoji: "🧭" },
    { id: "0456", spelling: "rough", pos: "형", meaning: "1 (표면이) 거친 2 대강의 3 힘든", emoji: "🪨" },
    { id: "0457", spelling: "million", pos: "명/형", meaning: "1 100만, 백만 2 다수, 무수", emoji: "🔢" },
    { id: "0458", spelling: "ceiling", pos: "명", meaning: "천장", emoji: "🏠" },
    { id: "0459", spelling: "give up", pos: "숙어", meaning: "포기하다, 그만두다", emoji: "🏳️" },
    { id: "0460", spelling: "hang out with", pos: "숙어", meaning: "~와 어울리다, ~와 함께 다니다", emoji: "🧑‍🤝‍🧑" },
    ],
  },
  {
    id: "day-24",
    name: "DAY 24",
    words: [
    { id: "0461", spelling: "hug", pos: "동/명", meaning: "동 껴안다, 포옹하다 명 껴안기, 포옹", emoji: "🤗" },
    { id: "0462", spelling: "vision", pos: "명", meaning: "1 시력 2 전망, 비전", emoji: "👁️" },
    { id: "0463", spelling: "century", pos: "명", meaning: "1 세기 2 100년", emoji: "📅" },
    { id: "0464", spelling: "anywhere", pos: "부", meaning: "1 긍정문 어디든지 2 의문문 어딘가에 3 부정문 아무 데도", emoji: "🌍" },
    { id: "0465", spelling: "nearly", pos: "부", meaning: "거의", emoji: "📏" },
    { id: "0466", spelling: "beard", pos: "명", meaning: "턱수염", emoji: "🧔" },
    { id: "0467", spelling: "surround", pos: "동", meaning: "둘러싸다, 에워싸다", emoji: "⭕" },
    { id: "0468", spelling: "upper", pos: "형", meaning: "더 위의, 위쪽의", emoji: "⬆️" },
    { id: "0469", spelling: "dynasty", pos: "명", meaning: "왕조, 시대", emoji: "🏯" },
    { id: "0470", spelling: "whole", pos: "형", meaning: "전체의, 모든, 전체, 전부", emoji: "🟢" },
    { id: "0471", spelling: "follow", pos: "동", meaning: "1 따라가다/오다 2 (순서상) 뒤를 잇다 3 (규칙 등을) 따르다", emoji: "👣" },
    { id: "0472", spelling: "effort", pos: "명", meaning: "노력, 수고", emoji: "💪" },
    { id: "0473", spelling: "imagine", pos: "동", meaning: "상상하다", emoji: "💭" },
    { id: "0474", spelling: "shot", pos: "명", meaning: "1 (총기의) 발사 2 (농구 등에서) 슛", emoji: "🎯" },
    { id: "0475", spelling: "pimple", pos: "명", meaning: "여드름, 뾰루지", emoji: "🔴" },
    { id: "0476", spelling: "raindrop", pos: "명", meaning: "빗방울", emoji: "💧" },
    { id: "0477", spelling: "ghost", pos: "명", meaning: "유령, 귀신", emoji: "👻" },
    { id: "0478", spelling: "sweat", pos: "명/동", meaning: "명 땀 동 땀을 흘리다", emoji: "💦" },
    { id: "0479", spelling: "care for", pos: "숙어", meaning: "1 ~을 돌보다 2 ~을 좋아하다", emoji: "🤱" },
    { id: "0480", spelling: "make up", pos: "숙어", meaning: "1 이루다, 구성하다 2 지어내다", emoji: "🧩" },
    ],
  },
  {
    id: "day-25",
    name: "DAY 25",
    words: [
    { id: "0481", spelling: "huge", pos: "형", meaning: "1 (크기가) 거대한 2 (수량 · 정도가) 막대한", emoji: "🐘" },
    { id: "0482", spelling: "tool", pos: "명", meaning: "연장, 도구", emoji: "🛠️" },
    { id: "0483", spelling: "attack", pos: "동/명", meaning: "동 공격하다 명 공격", emoji: "⚔️" },
    { id: "0484", spelling: "battle", pos: "명/동", meaning: "명 전투, 교전 2 투쟁, 싸움", emoji: "⚔️" },
    { id: "0485", spelling: "universe", pos: "명", meaning: "우주", emoji: "🌌" },
    { id: "0486", spelling: "global", pos: "형", meaning: "세계적인, 지구 전체의", emoji: "🌐" },
    { id: "0487", spelling: "sudden", pos: "형", meaning: "갑작스러운", emoji: "⚡" },
    { id: "0488", spelling: "rude", pos: "형", meaning: "무례한, 버릇없는", emoji: "😤" },
    { id: "0489", spelling: "challenge", pos: "명/동", meaning: "명 도전, 난제 동 1 도전하다 2 이의를 제기하다", emoji: "🏆" },
    { id: "0490", spelling: "frankly", pos: "부", meaning: "1 솔직히 2 문장 수식 솔직히 말해서", emoji: "💬" },
    { id: "0491", spelling: "death", pos: "명", meaning: "죽음", emoji: "💀" },
    { id: "0492", spelling: "else", pos: "부/형", meaning: "부 그 밖의, 다른 형 그 밖에, 달리", emoji: "➕" },
    { id: "0493", spelling: "fantastic", pos: "형", meaning: "환상적인, 멋진", emoji: "🤩" },
    { id: "0494", spelling: "swing", pos: "동/명", meaning: "동 1 흔들리다, 흔들다 2 (방망이 등을) 휘두르다 명 그네", emoji: "🛝" },
    { id: "0495", spelling: "master", pos: "명/동", meaning: "명 1 대가, 명수 2 주인 동 숙달하다, 마스터하다", emoji: "🥋" },
    { id: "0496", spelling: "social", pos: "형", meaning: "1 사회의, 사회적인 2 사교의", emoji: "👥" },
    { id: "0497", spelling: "code", pos: "명", meaning: "암호, 부호", emoji: "🔐" },
    { id: "0498", spelling: "pedal", pos: "명", meaning: "(자전거 · 자동차 등의) 페달", emoji: "🚲" },
    { id: "0499", spelling: "watch out (for)", pos: "숙어", meaning: "(~을) 주의하다, 조심하다", emoji: "⚠️" },
    { id: "0500", spelling: "not ~ at all", pos: "숙어", meaning: "전혀 ~ 아니다", emoji: "🚫" },
    ],
  },
  {
    id: "day-26",
    name: "DAY 26",
    words: [
    { id: "0501", spelling: "action", pos: "명", meaning: "1 행동, 조치 2 행위, 동작", emoji: "🎬" },
    { id: "0502", spelling: "backward", pos: "부", meaning: "1 뒤로, 뒤쪽으로 2 (순서상) 거꾸로, 반대로", emoji: "↩️" },
    { id: "0503", spelling: "sore", pos: "형", meaning: "아픈, 따가운", emoji: "🤕" },
    { id: "0504", spelling: "daytime", pos: "명", meaning: "낮, 주간", emoji: "🌞" },
    { id: "0505", spelling: "chore", pos: "명", meaning: "(일상적으로 하는) 일", emoji: "🧹" },
    { id: "0506", spelling: "impress", pos: "동", meaning: "감동을 주다, (깊은) 인상을 주다", emoji: "😲" },
    { id: "0507", spelling: "fair", pos: "형", meaning: "1 타당한, 합당한 2 공정한, 공평한", emoji: "⚖️" },
    { id: "0508", spelling: "process", pos: "명/동", meaning: "명 과정, 절차 동 1 (식품 등을) 가공하다 2 (서류 등을) 처리하다", emoji: "⚙️" },
    { id: "0509", spelling: "comfort", pos: "명/동", meaning: "명 1 안락, 편안함 2 위로, 위안", emoji: "🛋️" },
    { id: "0510", spelling: "suddenly", pos: "부", meaning: "갑자기, 불현듯", emoji: "⚡" },
    { id: "0511", spelling: "host", pos: "명/동", meaning: "명 1 (손님을 초대한) 주인 2 (TV · 라디오의) 진행자 동 주최하다", emoji: "🎙️" },
    { id: "0512", spelling: "graphic", pos: "명/형", meaning: "명 그래픽 형 도표의, 도형의", emoji: "📊" },
    { id: "0513", spelling: "merry", pos: "형", meaning: "명랑한, 즐거운", emoji: "🎄" },
    { id: "0514", spelling: "silence", pos: "명", meaning: "1 고요, 정적 2 침묵", emoji: "🤫" },
    { id: "0515", spelling: "trade", pos: "명/동", meaning: "명 무역, 교역 동 1 무역하다 2 교환하다", emoji: "🤝" },
    { id: "0516", spelling: "enemy", pos: "명", meaning: "적", emoji: "😈" },
    { id: "0517", spelling: "volume", pos: "명", meaning: "1 (TV · 라디오 등의) 음량 2 양, 용량", emoji: "🔊" },
    { id: "0518", spelling: "journal", pos: "명", meaning: "1 잡지, 학술지 2 일기, 일지", emoji: "📓" },
    { id: "0519", spelling: "on time", pos: "숙어", meaning: "시간을 어기지 않고, 제시간에", emoji: "⏰" },
    { id: "0520", spelling: "make fun of", pos: "숙어", meaning: "~을 놀리다", emoji: "😜" },
    ],
  },
  {
    id: "day-27",
    name: "DAY 27",
    words: [
    { id: "0521", spelling: "pace", pos: "명", meaning: "1 속도 2 한 걸음, 보폭", emoji: "🏃" },
    { id: "0522", spelling: "compare", pos: "동", meaning: "1 비교하다, 견주다 2 비유하다", emoji: "⚖️" },
    { id: "0523", spelling: "cloth", pos: "명", meaning: "1 옷감 2 천, 헝겊", emoji: "🧵" },
    { id: "0524", spelling: "novel", pos: "명", meaning: "소설", emoji: "📕" },
    { id: "0525", spelling: "rate", pos: "명", meaning: "1 비율, -율 2 속도 3 요금", emoji: "📊" },
    { id: "0526", spelling: "gorgeous", pos: "형", meaning: "멋진, 우아한", emoji: "😍" },
    { id: "0527", spelling: "relax", pos: "동", meaning: "1 쉬다 2 (몸의) 긴장을 풀다, 이완시키다", emoji: "🧘" },
    { id: "0528", spelling: "against", pos: "전", meaning: "1 ~에 반대하여, ~에 반(反)하는 2 ~에 맞서/대항하여", emoji: "⚔️" },
    { id: "0529", spelling: "duty", pos: "명", meaning: "1 (도덕적 · 법률적) 의무 2 직무, 업무", emoji: "📋" },
    { id: "0530", spelling: "unfair", pos: "형", meaning: "불공평한, 불공정한", emoji: "⚖️" },
    { id: "0531", spelling: "traditional", pos: "형", meaning: "전통의, 전통적인", emoji: "🎎" },
    { id: "0532", spelling: "prove", pos: "동", meaning: "1 증명/입증하다 2 (~임이) 드러나다", emoji: "✅" },
    { id: "0533", spelling: "seem", pos: "동", meaning: "~처럼 보이다, ~인 것 같다", emoji: "🤔" },
    { id: "0534", spelling: "equally", pos: "부", meaning: "1 똑같이, 동등하게 2 균등하게", emoji: "⚖️" },
    { id: "0535", spelling: "modern", pos: "형", meaning: "현대의, 근대의", emoji: "🏙️" },
    { id: "0536", spelling: "footprint", pos: "명", meaning: "발자국", emoji: "👣" },
    { id: "0537", spelling: "loudly", pos: "부", meaning: "큰 소리로, 시끄럽게", emoji: "📢" },
    { id: "0538", spelling: "seafood", pos: "명", meaning: "해산물", emoji: "🦐" },
    { id: "0539", spelling: "stop by", pos: "숙어", meaning: "잠시 들르다", emoji: "🚏" },
    { id: "0540", spelling: "be over", pos: "숙어", meaning: "끝나다", emoji: "🏁" },
    ],
  },
  {
    id: "day-28",
    name: "DAY 28",
    words: [
    { id: "0541", spelling: "mild", pos: "형", meaning: "1 (정도가) 가벼운, 약한 2 (날씨가) 따뜻한 3 (사람이) 온화한", emoji: "🌤️" },
    { id: "0542", spelling: "absent", pos: "형", meaning: "결석한, 없는, 부재의", emoji: "🚫" },
    { id: "0543", spelling: "connect", pos: "동", meaning: "1 연결하다, 접속하다 2 관련시키다", emoji: "🔗" },
    { id: "0544", spelling: "fur", pos: "명", meaning: "1 (동물의 부드러운) 털 2 모피", emoji: "🧥" },
    { id: "0545", spelling: "interested", pos: "형", meaning: "흥미 있는, 관심 있는", emoji: "🧐" },
    { id: "0546", spelling: "rival", pos: "명", meaning: "경쟁자, 경쟁 상대", emoji: "🥊" },
    { id: "0547", spelling: "decide", pos: "동", meaning: "결정하다, 결심하다", emoji: "🤔" },
    { id: "0548", spelling: "throat", pos: "명", meaning: "목구멍, 목", emoji: "🗣️" },
    { id: "0549", spelling: "examination", pos: "명", meaning: "1 시험 2 조사, 검토 3 (의료) 검진, 검사", emoji: "📝" },
    { id: "0550", spelling: "bump", pos: "동", meaning: "부딪치다, 충돌하다", emoji: "💥" },
    { id: "0551", spelling: "golden", pos: "형", meaning: "1 금색의, 금빛의 2 금으로 된", emoji: "🟡" },
    { id: "0552", spelling: "swimsuit", pos: "명", meaning: "수영복", emoji: "🩱" },
    { id: "0553", spelling: "cancel", pos: "동", meaning: "취소하다", emoji: "❌" },
    { id: "0554", spelling: "passion", pos: "명", meaning: "열정, 열망", emoji: "🔥" },
    { id: "0555", spelling: "stomach", pos: "명", meaning: "위, 배", emoji: "🫃" },
    { id: "0556", spelling: "wheel", pos: "명", meaning: "1 바퀴 2 (자동차 등의) 핸들", emoji: "🛞" },
    { id: "0557", spelling: "sour", pos: "형", meaning: "1 (맛이) 신 2 (우유 등이) 상한", emoji: "🍋" },
    { id: "0558", spelling: "pole", pos: "명", meaning: "1 막대기, 기둥 2 (지구의) 극(極)", emoji: "🪵" },
    { id: "0559", spelling: "hand out", pos: "숙어", meaning: "~을 나눠주다", emoji: "🤲" },
    { id: "0560", spelling: "try one's best", pos: "숙어", meaning: "최선을 다하다", emoji: "💪" },
    ],
  },
  {
    id: "day-29",
    name: "DAY 29",
    words: [
    { id: "0561", spelling: "brick", pos: "명", meaning: "벽돌", emoji: "🧱" },
    { id: "0562", spelling: "edge", pos: "명", meaning: "1 가장자리, 모서리 2 (칼 등의) 날", emoji: "📐" },
    { id: "0563", spelling: "chase", pos: "동", meaning: "뒤쫓다, 추적/추격하다", emoji: "🏃" },
    { id: "0564", spelling: "fashionable", pos: "형", meaning: "유행의, 유행하는, 상류층이 애용하는, 고급의", emoji: "👗" },
    { id: "0565", spelling: "human", pos: "명/형", meaning: "명 인간, 사람 형 인간/사람의", emoji: "🧑" },
    { id: "0566", spelling: "mask", pos: "명", meaning: "(보호용) 마스크, 가면", emoji: "😷" },
    { id: "0567", spelling: "single", pos: "형", meaning: "1 단 하나의, 단독의 2 미혼의, 독신의 3 1인용의", emoji: "1️⃣" },
    { id: "0568", spelling: "therefore", pos: "부", meaning: "그러므로, 그 결과", emoji: "➡️" },
    { id: "0569", spelling: "closely", pos: "부", meaning: "1 면밀히, 자세히 2 밀접하게, 긴밀하게", emoji: "🔍" },
    { id: "0570", spelling: "divide", pos: "동", meaning: "1 나누다, 나뉘다 2 분배/배분하다", emoji: "➗" },
    { id: "0571", spelling: "impression", pos: "명", meaning: "인상, 감상", emoji: "💭" },
    { id: "0572", spelling: "animation", pos: "명", meaning: "만화 (영화), 애니메이션", emoji: "🎞️" },
    { id: "0573", spelling: "target", pos: "명/동", meaning: "명 1 목표 2 (공격 등의) 목표물, 표적 동 목표 대상으로 삼다", emoji: "🎯" },
    { id: "0574", spelling: "repair", pos: "동/명", meaning: "동 고치다, 수리하다 명 수리, 보수", emoji: "🔧" },
    { id: "0575", spelling: "skin", pos: "명", meaning: "피부", emoji: "🧴" },
    { id: "0576", spelling: "western", pos: "형", meaning: "서쪽의, 서쪽에 있는", emoji: "🧭" },
    { id: "0577", spelling: "speed", pos: "명/동", meaning: "명 속력, 속도 동 빨리 가다, 질주하다", emoji: "💨" },
    { id: "0578", spelling: "port", pos: "명", meaning: "항구", emoji: "⚓" },
    { id: "0579", spelling: "ask for ~", pos: "숙어", meaning: "~을 요청/부탁하다", emoji: "🙏" },
    { id: "0580", spelling: "for the first time", pos: "숙어", meaning: "처음으로", emoji: "🥇" },
    ],
  },
  {
    id: "day-30",
    name: "DAY 30",
    words: [
    { id: "0581", spelling: "forward", pos: "부", meaning: "앞쪽으로", emoji: "➡️" },
    { id: "0582", spelling: "track", pos: "명/동", meaning: "명 1 (밟아서 생긴) 길 2 자취, 흔적 동 추적하다", emoji: "🛤️" },
    { id: "0583", spelling: "choice", pos: "명", meaning: "1 선택(권) 2 선택(하는 행동)", emoji: "☑️" },
    { id: "0584", spelling: "shoot", pos: "동", meaning: "1 (총 등을) 쏘다 2 (농구 등에서) 슛하다", emoji: "🎯" },
    { id: "0585", spelling: "peel", pos: "동", meaning: "1 (과일 등의) 껍질을 벗기다 2 벗겨지다", emoji: "🍌" },
    { id: "0586", spelling: "decision", pos: "명", meaning: "결정, 결심", emoji: "✔️" },
    { id: "0587", spelling: "quietly", pos: "부", meaning: "조용히, 살짝", emoji: "🤫" },
    { id: "0588", spelling: "beside", pos: "전", meaning: "~ 옆에", emoji: "↔️" },
    { id: "0589", spelling: "clearly", pos: "부", meaning: "1 명확하게, 분명히 2 또렷하게", emoji: "🔆" },
    { id: "0590", spelling: "repeat", pos: "동", meaning: "1 다시 말하다/쓰다 2 반복/되풀이하다", emoji: "🔁" },
    { id: "0591", spelling: "switch", pos: "동", meaning: "1 스위치를 켜다/끄다 2 전환하다, 바꾸다", emoji: "🔀" },
    { id: "0592", spelling: "landmark", pos: "명", meaning: "주요 지형지물, 랜드마크", emoji: "🗽" },
    { id: "0593", spelling: "goods", pos: "명", meaning: "상품, 제품", emoji: "📦" },
    { id: "0594", spelling: "announce", pos: "동", meaning: "발표하다, 알리다", emoji: "📢" },
    { id: "0595", spelling: "poem", pos: "명", meaning: "(한 편의) 시(詩), 운문", emoji: "📜" },
    { id: "0596", spelling: "electric", pos: "형", meaning: "전기의, 전기로 움직이는", emoji: "⚡" },
    { id: "0597", spelling: "storm", pos: "명", meaning: "폭풍, 폭풍우", emoji: "⛈️" },
    { id: "0598", spelling: "wire", pos: "명", meaning: "1 철사 2 (전화 등의) 선, 전선", emoji: "🪢" },
    { id: "0599", spelling: "day by day", pos: "숙어", meaning: "나날이, 서서히", emoji: "📆" },
    { id: "0600", spelling: "turn ~ into ...", pos: "숙어", meaning: "~을 ...으로 바꾸다", emoji: "🔄" },
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
    if (!Array.isArray(parsed) || !parsed.length) return defaultDays();
    // 기존 저장본을 유지하면서, 새로 추가된 기본 DAY를 자동으로 병합한다.
    const existingIds = new Set(parsed.map((d) => d.id));
    const missing = DEFAULT_DAYS.filter((d) => !existingIds.has(d.id)).map((d) => ({
      ...d,
      words: [...d.words],
    }));
    const merged = [...parsed, ...missing];
    // day-N 숫자 순으로 정렬 (그 외 id는 뒤로)
    merged.sort((a, b) => {
      const na = Number(a.id.replace(/^day-/, ""));
      const nb = Number(b.id.replace(/^day-/, ""));
      if (Number.isNaN(na) && Number.isNaN(nb)) return a.id.localeCompare(b.id);
      if (Number.isNaN(na)) return 1;
      if (Number.isNaN(nb)) return -1;
      return na - nb;
    });
    if (missing.length) saveDays(merged);
    return merged;
  } catch {
    return defaultDays();
  }
}

// dayId로 안전하게 한 DAY를 조회 (없으면 undefined)
export function findDayById(days: Day[], dayId: string): Day | undefined {
  return days.find((d) => d.id === dayId);
}

// 특정 DAY의 단어만 필터링해서 반환 (없으면 빈 배열)
export function filterWordsByDayId(dayId: string): Word[] {
  return findDayById(loadDays(), dayId)?.words ?? [];
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
