# Scoring Rules

This document defines the scoring model for quizzes and the phishing game. The goals are:

- Scores are deterministic and reproducible.
- Raw events/attempts are stored; leaderboards are computed from those events.

## Terminology

- **Attempt**: A single quiz submission or game run.
- **Raw events**: The data captured per attempt (score, duration, accuracy, metadata).
- **Leaderboard score**: A computed value derived from the raw events.

## Quiz Scoring

Each quiz attempt records the per-question outcomes. The leaderboard score is computed as:

```
score = (correct_answers * points_per_correct) + completion_bonus
```

Default parameters:

- `points_per_correct = 100`
- `completion_bonus = 200` (only if the user submits the quiz attempt)

Notes:

- `correct_answers` is the count of correct responses for that attempt.
- The completion bonus is applied once per attempt.
- If a quiz has `N` questions, the max score is:
  ```
  max_score = (N * points_per_correct) + completion_bonus
  ```

### Quiz Leaderboard

- Leaderboard score for a user is the **best attempt** score.
- Store all attempts; recompute leaderboard values from attempts.

## Game Scoring

The game returns a raw score (e.g., correct answers) and max score for the run.
To normalize across game configurations, compute a normalized score:

```
normalized_score = round((raw_score / max_score) * 1000)
```

Constraints:

- `max_score > 0`
- `0 <= raw_score <= max_score`
- `0 <= normalized_score <= 1000`

### Game Leaderboard

- Leaderboard score for a user is the **best normalized score** across attempts.
- Store every attempt with raw score, max score, accuracy, duration, and metadata.
- Leaderboard aggregates are computed from attempts (best score, last score, attempts count).

## Event Log & Computed Views

- Attempts are immutable event records.
- Leaderboard views are derived from attempts and updated via an upsert process.
- No direct overwrites of totals; the source of truth remains the attempts tables.

## Reproducibility

Given the raw event data (attempts), the same formulas will always yield the same leaderboard values. This allows re-computation if scoring parameters are adjusted in the future.
