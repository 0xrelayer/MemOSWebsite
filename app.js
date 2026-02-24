async function injectLore() {
  const el = document.getElementById('lore-line');
  if (!el) return;

  try {
    const res = await fetch('../lore.json');
    if (!res.ok) throw new Error('lore unavailable');
    const lore = await res.json();
    const line = lore ? .profile ? .lore ? . [5] || lore ? .postExamples ? . [0];
    if (line) el.textContent = `Lore signal: ${line}`;
  } catch {
    el.textContent = 'Network signal: Link established. Build ongoing.';
  }
}

injectLore();