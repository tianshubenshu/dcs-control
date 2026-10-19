'use strict';
// Presentation-only translations. Profile values, bridge messages and log files stay untouched.
(() => {
  const catalog = window.dcsZhCN || {};
  const normalize = text => text.replace(/\s+/g, ' ').trim();
  const originals = new WeakMap();
  const attributes = ['title', 'aria-label', 'placeholder'];
  const excluded = 'script,style,pre,code,kbd,textarea,[data-i18n-skip],.release-notes';
  let language = 'zh-CN';
  try { language = localStorage.getItem('dcsControlLanguage') === 'en' ? 'en' : 'zh-CN'; } catch {}
  const patterns = [
    [/^Enter a value from ([-\d.]+) to ([-\d.]+)\.$/, (_, a, b) => `请输入 ${a} 到 ${b} 之间的数值。`],
    [/^Step (\d+) of (\d+)$/, (_, a, b) => `第 ${a} 步，共 ${b} 步`],
    [/^(\d+) of (\d+)$/, (_, a, b) => `${a} / ${b}`],
    [/^(\d+) checks passed$/, (_, n) => `${n} 项检查通过`],
    [/^Open (.+) settings$/, (_, name) => `打开${lookup(name)}设置`],
    [/^(.+) \(Ctrl (\d+)\)$/, (_, name, key) => `${lookup(name)} (Ctrl ${key})`],
    [/^(.+) slider$/, (_, name) => `${lookup(name)}滑块`],
    [/^DCS Control ([\w.-]+) is available$/, (_, version) => `DCS Control ${version} 可更新`],
    [/^What's new in DCS Control ([\w.-]+)$/, (_, version) => `DCS Control ${version} 更新内容`],
    [/^DCS also uses (.+) by default\.$/, (_, key) => `DCS 默认也使用 ${key}。`],
    [/^(\d+) of (\d+) on$/, (_, on, total) => `${on} / ${total} 项已开启`],
    [/^(\d+) of (\d+) on · stays on outside the app$/, (_, on, total) => `${on} / ${total} 项开启 · 从其他方式启动 DCS 也生效`],
    [/^(\d+) must fix$/, (_, n) => `${n} 项必须解决`],
    [/^(\d+) to check yourself$/, (_, n) => `${n} 项需手动检查`],
    [/^This PC was checked with these settings: (\d+) to fix, (\d+) to check yourself\.$/, (_, fix, check) => `已按当前设置检查此电脑：${fix} 项需解决，${check} 项需手动检查。`],
    [/^(\d+) FILES$/, (_, n) => `${n} 个文件`],
    [/^(\d+) apps moved$/, (_, n) => `已调整 ${n} 个应用`],
    [/^renders ([\d.]+) FPS$/, (_, fps) => `渲染 ${fps} FPS`],
    [/^Central (\d+)%$/, (_, area) => `中央 ${area}%`],
    [/^Original files · (\d+) files? changed by DCS Control$/, (_, n) => `原始文件 · DCS Control 修改了 ${n} 个文件`],
    [/^DCS's bin folder has a dxgi.dll from (.+), and DLSS 5 needs that file name\. Keep it working: DCS Control backs it up and loads it together with DLSS 5, so (.+) still works in DCS\. Set it aside: it is backed up and stays off in DCS while this profile is applied\.$/, (_, name) => `DCS 的 bin 文件夹中已有来自 ${name} 的 dxgi.dll，而 DLSS 5 也需要使用此文件名。“保留并继续加载”：先备份，再与 DLSS 5 一起加载，让 ${name} 继续生效。“暂时停用”：先备份，在此配置生效期间不加载它。`]
  ];
  function lookup(text) {
    const key = normalize(String(text));
    if (Object.hasOwn(catalog, key)) return catalog[key];
    for (const [pattern, replace] of patterns) if (pattern.test(key)) return key.replace(pattern, replace);
    // UI labels are often joined by these separators. Translate whole fragments only.
    for (const separator of [' · ', ' + ']) if (key.includes(separator)) return key.split(separator).map(lookup).join(separator);
    const arrow = /^(.*?)( [→↗›])$/.exec(key);
    if (arrow) return lookup(arrow[1]) + arrow[2];
    return text; // New upstream strings remain readable until translated.
  }
  function translate(text) {
    if (language === 'en') return text;
    const translated = lookup(text);
    return translated === text ? text : text.match(/^\s*/)[0] + translated + text.match(/\s*$/)[0];
  }
  function project(target, key, read, write) {
    let saved = originals.get(target);
    if (!saved) { saved = new Map(); originals.set(target, saved); }
    const current = read();
    let item = saved.get(key);
    // The app may replace an existing text node or attribute with a fresh status.
    if (!item || current !== item.rendered) { item = {source:current, rendered:current}; saved.set(key, item); }
    const next = translate(item.source);
    if (next !== current) write(next);
    item.rendered = next;
  }
  function visit(root) {
    if (root.nodeType === Node.TEXT_NODE) {
      if (root.parentElement && !root.parentElement.closest(excluded)) project(root, 'text', () => root.nodeValue, value => { root.nodeValue = value; });
      return;
    }
    if (root.nodeType !== Node.ELEMENT_NODE || root.matches(excluded)) return;
    for (const name of attributes) if (root.hasAttribute(name)) project(root, name, () => root.getAttribute(name), value => root.setAttribute(name, value));
    for (const child of root.childNodes) visit(child);
  }
  function refresh() { document.documentElement.lang = language; visit(document.body); }
  window.dcsI18n = {translate:lookup, get language() { return language; }, refresh};
  function start() {
    const host = document.querySelector('.rail-bottom');
    if (host) {
      const label = document.createElement('label');
      label.className = 'language-choice'; label.dataset.i18nSkip = '';
      label.append(document.createTextNode('语言 / Language '));
      const select = document.createElement('select'); select.id = 'uiLanguage'; select.setAttribute('aria-label', '语言 / Language');
      for (const [value, text] of [['zh-CN','简体中文'], ['en','English']]) { const option = document.createElement('option'); option.value = value; option.textContent = text; select.append(option); }
      select.value = language; label.append(select); host.prepend(label);
      select.addEventListener('change', () => { language = select.value; try { localStorage.setItem('dcsControlLanguage', language); } catch {} refresh(); });
    }
    refresh();
    new MutationObserver(records => {
      const roots = new Set();
      for (const record of records) {
        if (record.type === 'childList') for (const node of record.addedNodes) roots.add(node);
        else roots.add(record.target);
      }
      for (const root of roots) if (root.isConnected) visit(root);
    }).observe(document.body, {subtree:true, childList:true, characterData:true, attributes:true, attributeFilter:attributes});
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, {once:true}); else start();
})();
