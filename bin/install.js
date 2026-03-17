#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

const SKILL_NAME = 'qa-assessment';
const SKILL_SOURCE = path.join(__dirname, '..', 'SKILL.md');

const TARGETS = [
  { label: 'Claude Code (global)', dir: path.join(os.homedir(), '.claude', 'commands') },
  { label: 'Claude Code (project)', dir: path.join(process.cwd(), '.claude', 'commands') },
];

function detectEditors() {
  const found = [];

  // Claude Code global
  const claudeGlobal = path.join(os.homedir(), '.claude');
  if (fs.existsSync(claudeGlobal)) {
    found.push(TARGETS[0]);
  }

  // Claude Code project-level
  const claudeProject = path.join(process.cwd(), '.claude');
  if (fs.existsSync(claudeProject)) {
    found.push(TARGETS[1]);
  }

  return found;
}

function install(target) {
  fs.mkdirSync(target.dir, { recursive: true });
  const dest = path.join(target.dir, `${SKILL_NAME}.md`);
  fs.copyFileSync(SKILL_SOURCE, dest);
  return dest;
}

function main() {
  console.log('\n🎯 QA Assessment Skill Installer\n');

  if (!fs.existsSync(SKILL_SOURCE)) {
    console.error('❌ SKILL.md not found. Make sure the package is not corrupted.');
    process.exit(1);
  }

  const detected = detectEditors();

  if (detected.length === 0) {
    // Fallback: install to Claude Code global regardless
    const target = TARGETS[0];
    const dest = install(target);
    console.log(`✅ Installed to ${dest}`);
  } else {
    detected.forEach((target) => {
      const dest = install(target);
      console.log(`✅ ${target.label} → ${dest}`);
    });
  }

  console.log('\n📋 How to use:');
  console.log('   Claude Code  →  /skill qa-assessment');
  console.log('   Cursor / Windsurf  →  "Run the QA maturity assessment for our team."\n');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('🚀 Full Assessment: https://www.qualityassessment.dev');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
}

main();
