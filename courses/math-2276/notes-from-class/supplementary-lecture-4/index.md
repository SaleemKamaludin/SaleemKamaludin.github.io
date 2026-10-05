---
layout: default
title: MATH 2276 — Supplementary Notes from Lecture 4
permalink: /courses/math-2276/notes-from-class/supplementary-lecture-4/
---

<div class="math2276-notes" markdown="1">

# Supplementary Notes from Lecture 4

<div class="lecture-meta">

**MATH 2276 — Discrete Mathematics**

</div>

These supplementary notes contain typed and expanded material developed during Lecture 4.

---

<!-- Lecture 4 material will be added here. -->

<div id="supp-lecture-4-example-1" class="math-env example">

  <div class="math-env-heading">
    <span class="math-env-tag">Example 1.1</span>
    <span class="math-env-title">Degree of a Vertex and Degree Sequence</span>
  </div>

  <div class="math-env-body">

    <p>
      Let \(G\) be the graph shown below.
    </p>

    <div style="text-align:center; margin: 1rem 0 1.2rem 0;">
      <svg width="560" height="90" viewBox="0 0 560 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Path graph on five vertices a, b, c, d, e">
        <line x1="70" y1="35" x2="170" y2="35" stroke="currentColor" stroke-width="2"/>
        <line x1="170" y1="35" x2="270" y2="35" stroke="currentColor" stroke-width="2"/>
        <line x1="270" y1="35" x2="370" y2="35" stroke="currentColor" stroke-width="2"/>
        <line x1="370" y1="35" x2="470" y2="35" stroke="currentColor" stroke-width="2"/>

        <circle cx="70" cy="35" r="5" fill="currentColor"/>
        <circle cx="170" cy="35" r="5" fill="currentColor"/>
        <circle cx="270" cy="35" r="5" fill="currentColor"/>
        <circle cx="370" cy="35" r="5" fill="currentColor"/>
        <circle cx="470" cy="35" r="5" fill="currentColor"/>

        <text x="70" y="68" text-anchor="middle" font-size="18" fill="currentColor">a</text>
        <text x="170" y="68" text-anchor="middle" font-size="18" fill="currentColor">b</text>
        <text x="270" y="68" text-anchor="middle" font-size="18" fill="currentColor">c</text>
        <text x="370" y="68" text-anchor="middle" font-size="18" fill="currentColor">d</text>
        <text x="470" y="68" text-anchor="middle" font-size="18" fill="currentColor">e</text>
      </svg>
    </div>

    <p>
      Thus,
    </p>

    <div class="display-math">

    \[
    V(G)=\{a,b,c,d,e\}
    \]

    </div>

    <p>
      and
    </p>

    <div class="display-math">

    \[
    E(G)=\{ab,bc,cd,de\}.
    \]

    </div>

    <p>
      Recall that the <em>degree</em> of a vertex is the number of edges
      incident with that vertex.
    </p>

    <p>
      For the graph \(G\),
    </p>

    <div class="display-math">

    \[
    \deg(a)=1,\qquad
    \deg(b)=2,\qquad
    \deg(c)=2,\qquad
    \deg(d)=2,\qquad
    \deg(e)=1.
    \]

    </div>

    <p>
      Indeed:
    </p>

    <ul>
      <li>
        Vertex \(a\) is incident only with the edge \(ab\), so
        \(\deg(a)=1\).
      </li>
      <li>
        Vertex \(b\) is incident with \(ab\) and \(bc\), so
        \(\deg(b)=2\).
      </li>
      <li>
        Vertex \(c\) is incident with \(bc\) and \(cd\), so
        \(\deg(c)=2\).
      </li>
      <li>
        Vertex \(d\) is incident with \(cd\) and \(de\), so
        \(\deg(d)=2\).
      </li>
      <li>
        Vertex \(e\) is incident only with \(de\), so
        \(\deg(e)=1\).
      </li>
    </ul>

    <p>
      The <em>degree sequence</em> is obtained by listing the degrees of all
      vertices, usually in non-increasing order. Hence the degree sequence of
      \(G\) is
    </p>

    <div class="display-math">

    \[
    \boxed{(2,2,2,1,1)}.
    \]

    </div>

    <p>
      The two end vertices \(a\) and \(e\) have degree \(1\), while the three
      internal vertices \(b,c,d\) each have degree \(2\).
    </p>

    <p>
      Notice also that
    </p>

    <div class="display-math">

    \[
    1+2+2+2+1=8=2(4)=2|E(G)|,
    \]

    </div>

    <p>
      which agrees with the Handshaking Lemma.
    </p>

  </div>

</div>

---

[← Back to Notes from Class]({{ '/courses/math-2276/notes-from-class/' | relative_url }})

</div>