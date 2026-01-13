---
layout: default
title: "COMP 1604 — Lecture 1: Logic (Statements & Truth Tables)"
permalink: /courses/comp1604/lecture-notes/lecture-01/
---

# COMP 1604 — Lecture 1: Logic (Statements & Truth Tables)

**Quick navigation:**  
- [1. Statements and propositions](#1-statements-and-propositions)  
- [2. Logical connectives](#2-logical-connectives)  
- [3. Truth tables](#3-truth-tables)  
- [4. Practice](#4-practice)

---

## 1. Statements and propositions

A **statement** (or **proposition**) is a sentence that is either **true** or **false**, but not both.

**Examples**
- “\(2+3=5\)” is a statement (true).
- “\(7\) is even” is a statement (false).
- “Close the door.” is **not** a statement (it is a command).
- “\(x>2\)” is **not** a statement (truth depends on \(x\)).

---

## 2. Logical connectives

Let \(p\) and \(q\) be statements.

- **Negation**: “not \(p\)” is written \( \lnot p \)
- **Conjunction**: “\(p\) and \(q\)” is written \( p \land q \)
- **Disjunction**: “\(p\) or \(q\)” is written \( p \lor q \)
- **Implication**: “if \(p\) then \(q\)” is written \( p \to q \)
- **Biconditional**: “\(p\) iff \(q\)” is written \( p \leftrightarrow q \)

---

## 3. Truth tables

Truth tables show the truth value of a compound statement for all possible truth values of its components.

### Example: \(p \land q\)

| \(p\) | \(q\) | \(p \land q\) |
|---|---|---|
| T | T | T |
| T | F | F |
| F | T | F |
| F | F | F |

### Example: \(p \to q\)

| \(p\) | \(q\) | \(p \to q\) |
|---|---|---|
| T | T | T |
| T | F | F |
| F | T | T |
| F | F | T |

---

## 4. Practice

### Practice 1
Construct a truth table for \( \lnot p \lor q \).

### Practice 2
Determine whether the statement \( (p \to q) \leftrightarrow (\lnot p \lor q) \) is always true.

---

## Downloads (optional)
- If you have a PDF, place it in `courses/comp1604/lectu
