-- Migration 0001: Create logs table

CREATE TABLE IF NOT EXISTS logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  timestamp TEXT NOT NULL,
  route TEXT NOT NULL,
  model TEXT NOT NULL,
  run_id TEXT,
  item_id TEXT,
  state_hash TEXT NOT NULL,
  question_ids TEXT NOT NULL,
  answers_json TEXT NOT NULL,
  top_confidence REAL,
  latency_ms INTEGER NOT NULL,
  input_tokens INTEGER NOT NULL,
  cost_usd REAL NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_logs_run_id ON logs(run_id);
CREATE INDEX IF NOT EXISTS idx_logs_timestamp ON logs(timestamp);
CREATE INDEX IF NOT EXISTS idx_logs_route ON logs(route);
