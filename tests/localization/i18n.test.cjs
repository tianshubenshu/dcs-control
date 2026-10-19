const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {JSDOM} = require('jsdom');
const ui = path.resolve(__dirname, '../../src/DcsVr.App/ui');
const read = name => fs.readFileSync(path.join(ui, name), 'utf8');
const tick = () => new Promise(resolve => setTimeout(resolve, 0));

(async () => {
  const dom = new JSDOM(read('index.html'), {url:'https://dcs-control.test/', runScripts:'outside-only'});
  const w = dom.window, d = w.document;
  w.structuredClone = structuredClone;
  w.HTMLElement.prototype.scrollIntoView = function() {};
  w.HTMLDialogElement.prototype.showModal = function() { this.open = true; };
  w.HTMLDialogElement.prototype.show = function() { this.open = true; };
  w.HTMLDialogElement.prototype.close = function() { this.open = false; };
  try {
    for (const file of ['zh-CN.js','i18n.js','app.js','setup.js']) w.eval(read(file));
    await tick();
    const text = id => d.getElementById(id).textContent.trim();
    const language = value => { const select = d.getElementById('uiLanguage'); select.value = value; select.dispatchEvent(new w.Event('change')); };
    assert.equal(d.documentElement.lang, 'zh-CN');
    assert.equal(text('pageTitle'), '概览');
    assert.equal(d.querySelector('#nav-engine b').textContent, '引擎');
    assert.equal(d.getElementById('searchInput').placeholder, '搜索设置和页面…');
    assert.equal(w.dcsUi.fields.length, 119);
    for (const field of w.dcsUi.fields) {
      assert.match(w.dcsI18n.translate(field.description), /[\u3400-\u9fff]/u, `Untranslated description: ${field.path}`);
      if (!['DCS','DLSS 5','OSD'].includes(field.title)) assert.match(w.dcsI18n.translate(field.title), /[\u3400-\u9fff]/u, `Untranslated label: ${field.path}`);
    }
    const input = d.getElementById('input-dcs'); input.value = 'C:\\Games\\DCS\\bin\\DCS.exe';
    const option = d.querySelector('#input-frameGen option[value="Off"]');
    assert.equal(option.textContent, '关闭'); assert.equal(option.value, 'Off');
    assert.equal(d.querySelector('[data-route="Desktop"]').dataset.route, 'Desktop');
    const status = d.getElementById('status'); status.textContent = 'Working…'; await tick();
    assert.equal(status.textContent, '处理中…');
    status.textContent = 'Enter a value from 50 to 80.'; await tick();
    assert.equal(status.textContent, '请输入 50 到 80 之间的数值。');
    language('en'); await tick();
    assert.equal(text('pageTitle'), 'Overview');
    assert.equal(option.textContent, 'Off');
    assert.equal(status.textContent, 'Enter a value from 50 to 80.');
    assert.equal(input.value, 'C:\\Games\\DCS\\bin\\DCS.exe');
    assert.equal(d.getElementById('searchInput').placeholder, 'Search settings and pages…');
    // An upstream redraw while English is active must become the new source text.
    status.textContent = 'Ready to fly'; await tick();
    language('zh-CN'); await tick(); assert.equal(status.textContent, '可以起飞');
    assert.equal(w.localStorage.getItem('dcsControlLanguage'), 'zh-CN');
    d.getElementById('searchOpen').click();
    const search = d.getElementById('searchInput'); search.value = '瞳距'; search.dispatchEvent(new w.Event('input')); await tick();
    assert.ok(d.querySelectorAll('.search-result').length > 0);
    assert.ok([...d.querySelectorAll('.search-result')].some(node => node.textContent.includes('渲染瞳距')));
    search.value = '不存在的设置'; search.dispatchEvent(new w.Event('input')); await tick();
    assert.equal(d.querySelectorAll('.search-result').length, 0);
    language('en'); search.value = 'eye distance'; search.dispatchEvent(new w.Event('input')); await tick();
    assert.ok(d.querySelectorAll('.search-result').length > 0);
    language('zh-CN');
    const pre = d.getElementById('report'); pre.textContent = 'Engine Optimizations';
    const notes = d.getElementById('updateNotes'); notes.textContent = 'Ready to fly';
    const kbd = d.createElement('kbd'); kbd.textContent = 'Off'; d.body.append(kbd);
    const hostile = d.createElement('p'); hostile.textContent = '<img src=x onerror=alert(1)> new upstream text'; d.body.append(hostile);
    await tick();
    assert.equal(pre.textContent, 'Engine Optimizations');
    assert.equal(notes.textContent, 'Ready to fly'); assert.equal(kbd.textContent, 'Off');
    assert.equal(hostile.querySelector('img'), null);
    assert.equal(hostile.textContent, '<img src=x onerror=alert(1)> new upstream text');
    // Newly inserted cards are translated, and switching back restores their source.
    const card = d.createElement('button'); card.title = 'Open Eye distance settings'; card.textContent = 'Refresh'; d.body.append(card); await tick();
    assert.equal(card.textContent, '刷新'); assert.equal(card.title, '打开渲染瞳距设置');
    language('en'); await tick(); assert.equal(card.title, 'Open Eye distance settings'); assert.equal(card.textContent, 'Refresh');
    console.log('PASS: 119 settings, labels, Chinese/English search, dynamic redraws, round-trip switching, persistence, accessibility attributes, protocol values and inert log/release text.');
  } finally { w.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
