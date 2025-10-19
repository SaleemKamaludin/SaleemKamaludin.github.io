---
layout: page
title: Week 1 — Real Numbers
math: true
permalink: /courses/math-1115/lecture-notes/week-1/
---

<!-- TEMP: page-level MathJax to prove it works -->
<script>
  window.MathJax = {
    tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']],
      displayMath: [['$$','$$'], ['\\[','\\]']],
      processEscapes: true,
      tags: 'ams'
    },
    svg: { fontCache: 'global' }
  };
</script>
<script id="MathJax-script" async
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"></script>


### Basic Terms

Sets are the building blocks of mathematics. Before diving into formal definitions, we recall some fundamental ideas and notation.

<ul style="margin-top:0.75rem; line-height:1.7;">
  <li>The notation \( \mathbb{N} \) denotes the <em>set of natural numbers</em>.</li>
  <li>Set-builder notation:
    $$
    \{\,x : x \text{ has property } P\,\}.
    $$
  </li>
  <li>Example:
    $$
    \{\,x : x \text{ is a natural number between } 3 \text{ and } 15\,\}
    = \{4,5,6,7,\dots,14\}.
    $$
  </li>
</ul>


### Sets: Fundamental Concepts

Sets constitute the language in which modern mathematics is written.  
A *set* is a well-defined collection of distinct objects called *elements*.  
Sets are usually denoted by capital letters, while their elements are written in braces, for example  
 \{0,1,2,3\}.

---

#### Definition — Membership

Given a set $$A$$ and an object $$x$$:

- The notation $$x \in A $$ means “$$x$$ is an element of $$A$$.”
- Conversely, $$x \notin A$$ means that $$x$$ is **not** contained in $$A$$.

---

> **Example (notation in context):**  
>
> $$3 \in \{1,2,3,4,5\}$$, but $$7 \notin \{1,2,3,4,5\}$$.





### The Empty Set and Infinite Sets

The *empty set*, written $$\varnothing$$, contains no elements.  
Some sets are *finite*, while others contain *infinitely many* elements.  
For example:


$$\mathbb{N} = \{0,1,2,3,4,5,\dots\},$$


where the dots (an *ellipsis*) indicate that the list continues in the same pattern.






### Set-builder Notation

A concise way to specify large or infinite sets is *set-builder notation*:

$$
\{\,x \mid x \text{ has property } P\,\}.
$$

For example:

$$
\{\,x \in \mathbb{N} \mid 3 < x < 15\,\} = \{4,5,6,7,\dots,14\}.
$$






## Subsets

If every element of $B$ is also an element of $A$, we write $B\subseteq A$ and say “$B$ is a subset of $A$.”

If $A$ and $B$ have the same elements, then $A=B$.

When $B\subseteq A$ and $B\neq A$ we write $B\subset A$ (a *proper* subset).

So, if $A$ and $B$ are sets, then $B$ is a **proper subset** of $A$, written $B\subset A$, if and only if every element of $B$ is an element of $A$ but there is at least one element of $A$ that is not in $B$.



> **Example.** Let $A=\{1,2,3,4,5,6\}$ and $B=\{2,4,6\}$.  
> Since every element of $B$ lies in $A$, we have $B\subset A$.











