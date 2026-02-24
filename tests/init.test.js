import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, rm, stat, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { init } from '../src/init.js';

test('init creates _squados directory structure', async () => {
  const tempDir = await mkdtemp(join(tmpdir(), 'squados-test-'));

  try {
    await init(tempDir);

    await stat(join(tempDir, '_squados'));
    await stat(join(tempDir, '_squados', 'core'));
    await stat(join(tempDir, '_squados', 'core', 'architect.agent.yaml'));
    await stat(join(tempDir, '_squados', 'core', 'runner.pipeline.md'));
    await stat(join(tempDir, '_squados', '_memory'));
    await stat(join(tempDir, '.claude', 'skills', 'squados.md'));
    await stat(join(tempDir, 'CLAUDE.md'));
  } finally {
    await rm(tempDir, { recursive: true, force: true });
  }
});

test('init creates example squad', async () => {
  const tempDir = await mkdtemp(join(tmpdir(), 'squados-test-'));

  try {
    await init(tempDir);

    await stat(join(tempDir, 'squads', 'instagram-content', 'squad.yaml'));
    await stat(join(tempDir, 'squads', 'instagram-content', 'squad-party.csv'));
    await stat(join(tempDir, 'squads', 'instagram-content', 'agents'));
    await stat(join(tempDir, 'squads', 'instagram-content', 'pipeline', 'steps'));
  } finally {
    await rm(tempDir, { recursive: true, force: true });
  }
});

test('init does not overwrite if already initialized', async () => {
  const tempDir = await mkdtemp(join(tmpdir(), 'squados-test-'));

  try {
    await init(tempDir);
    await init(tempDir); // Should not throw, just warn
  } finally {
    await rm(tempDir, { recursive: true, force: true });
  }
});

test('CLAUDE.md contains SquadOS instructions', async () => {
  const tempDir = await mkdtemp(join(tmpdir(), 'squados-test-'));

  try {
    await init(tempDir);

    const content = await readFile(join(tempDir, 'CLAUDE.md'), 'utf-8');
    assert.ok(content.includes('SquadOS'));
    assert.ok(content.includes('/squados'));
  } finally {
    await rm(tempDir, { recursive: true, force: true });
  }
});
