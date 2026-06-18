// 페이지의 특정 엘리먼트를 단독 HTML 파일로 다운로드.
// 현재 문서의 스타일 시트를 모두 포함시켜 동일한 모양을 유지함.
export function downloadElementAsHtml(filename: string, element: HTMLElement, title: string) {
  if (typeof document === "undefined") return;

  const headParts: string[] = [];
  document.querySelectorAll('link[rel="stylesheet"]').forEach((n) => {
    const href = (n as HTMLLinkElement).href; // 절대 URL로 직렬화됨
    if (href) headParts.push(`<link rel="stylesheet" href="${href}">`);
  });
  document.querySelectorAll("style").forEach((n) => {
    headParts.push(n.outerHTML);
  });

  const html = `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>${escapeHtml(title)}</title>
${headParts.join("\n")}
<style>
  body { padding: 24px; background: #fff; }
  .no-print { display: none !important; }
</style>
</head>
<body>
${element.outerHTML}
</body>
</html>`;

  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${filename}.html`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!),
  );
}
