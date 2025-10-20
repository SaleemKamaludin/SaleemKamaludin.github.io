---
layout: page
title: TOPIC 1 — Real Numbers
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





> **Example.** Consider the sets $X=\{a,b,c,d\}$ and $Y=\{a,b,c,d\}$.  
 Since $X=Y$, we have that $Y\subseteq X$, but not $Y\subset X$.  
 Therefore, $Y$ is a subset of $X$, but not a **proper** subset.
 $$
 Y \subseteq X \quad \text{but} \quad Y \not\subset X.
 $$




## Set Operations

Given sets $A$ and $B$ inside a universal set $U$:

- $A \cup B$ (*union*) contains elements in $A$ **or** $B$.
- $A \cap B$ (*intersection*) contains elements common to both.
- $A \setminus B$ (*relative complement*) comprises elements in $A$ but not in $B$.


## Venn Diagrams

Venn diagrams visualize relationships among sets. In the plane, sets are represented by regions (often circles) inside a rectangle indicating the universal set.

<!-- Inline SVG (works on GitHub Pages) -->
<figure>
  <svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="vennTitle vennDesc">
    <title id="vennTitle">Venn diagram of sets A and B inside universal set U</title>
    <desc id="vennDesc">U = {1,2,3,...,10}. A ∩ B = {5,6}. Left-only: 2,3,4. Right-only: 7,9,10.</desc>

    <!-- Universal set rectangle -->
    <rect x="20" y="20" width="760" height="360" fill="none" stroke="black" stroke-width="3"/>
    <text x="28" y="40" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto" font-size="16">U = {1,2,3,…,10}</text>

    <!-- Circles A and B -->
    <circle cx="320" cy="200" r="130" fill="none" stroke="black" stroke-width="3"/>
    <circle cx="480" cy="200" r="130" fill="none" stroke="black" stroke-width="3"/>

    <!-- Labels A and B -->
    <text x="300" y="70" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto" font-size="18">A</text>
    <text x="480" y="70" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto" font-size="18">B</text>

    <!-- Elements -->
    <!-- A only -->
    <text x="250" y="210" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto" font-size="18">2, 3, 4</text>
    <!-- Intersection -->
    <text x="390" y="210" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto" font-size="18">5, 6</text>
    <!-- B only -->
    <text x="540" y="210" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto" font-size="18">7, 9, 10</text>
  </svg>
  <figcaption style="font-size: 0.95rem; margin-top: 0.5rem;">
    A Venn diagram of sets $A$ and $B$ with $A \cap B = \{5,6\}$.
  </figcaption>
</figure>

## The Number Systems {#sec-number-systems}

Numbers encountered in calculus and the physical sciences are organised into nested sets, each extending the previous to include new objects.

### Natural Numbers $\mathbb{N}$

The natural numbers model counting:
$$
\mathbb{N} = \{0,1,2,3,\dots\}.
$$

### Integers $\mathbb{Z}$

Adding negative counterparts yields
$$
\mathbb{Z} = \{\dots,-3,-2,-1,0,1,2,3,\dots\}.
$$

### Rational Numbers $\mathbb{Q}$

A *rational* number is a ratio of integers:
$$
\mathbb{Q} = \left\{\,\frac{p}{q}\,\Bigm|\, p,q\in\mathbb{Z},\; q\neq 0\right\}.
$$
Because any integer $n$ can be written as $n=\dfrac{n}{1}$, we have $\mathbb{Z}\subset \mathbb{Q}$.


### Irrational Numbers

A real number is *irrational* if it is not rational, e.g. $\pi,\ e,\ \sqrt{2}$.
In decimal form, rationals terminate or eventually repeat, whereas irrationals are non-terminating and non-repeating.

