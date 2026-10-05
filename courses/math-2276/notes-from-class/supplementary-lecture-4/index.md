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

<h2 id="isolated-vertices-and-leaves">Isolated Vertices and Leaves</h2>

<p>
  Recall that the degree of a vertex \(v\), denoted by \(\deg(v)\), is the
  number of edges incident with \(v\).
</p>


<div id="supp-lecture-4-definition-1" class="math-env definition">

  <div class="math-env-heading">
    <span class="math-env-tag">Definition 1.1</span>
  </div>

  <div class="math-env-body">

    <p>
      Let \(G\) be a graph.
    </p>

    <ul>
      <li>
        A vertex \(v\) is called an <strong>isolated vertex</strong> if
        \(\deg(v)=0\).
      </li>

      <li>
        A vertex \(v\) is called a <strong>leaf</strong> (or
        <strong>pendant vertex</strong>) if \(\deg(v)=1\).
      </li>
    </ul>

  </div>

</div>


<div id="supp-lecture-4-example-2" class="math-env example">

  <div class="math-env-heading">
    <span class="math-env-tag">Example 1.2</span>
    <span class="math-env-title">Isolated Vertex and Leaves</span>
  </div>

  <div class="math-env-body">

    <p>
      Consider the graph \(G\) shown below.
    </p>

    <div style="text-align:center; margin: 1rem 0 1.2rem 0;">
      <svg width="560" height="90" viewBox="0 0 560 90"
           xmlns="http://www.w3.org/2000/svg"
           role="img"
           aria-label="Graph with path a b c d and isolated vertex e">

        <line x1="70" y1="35" x2="170" y2="35"
              stroke="currentColor" stroke-width="2"/>

        <line x1="170" y1="35" x2="270" y2="35"
              stroke="currentColor" stroke-width="2"/>

        <line x1="270" y1="35" x2="370" y2="35"
              stroke="currentColor" stroke-width="2"/>

        <circle cx="70" cy="35" r="5" fill="currentColor"/>
        <circle cx="170" cy="35" r="5" fill="currentColor"/>
        <circle cx="270" cy="35" r="5" fill="currentColor"/>
        <circle cx="370" cy="35" r="5" fill="currentColor"/>
        <circle cx="470" cy="35" r="5" fill="currentColor"/>

        <text x="70" y="68" text-anchor="middle"
              font-size="18" fill="currentColor">a</text>

        <text x="170" y="68" text-anchor="middle"
              font-size="18" fill="currentColor">b</text>

        <text x="270" y="68" text-anchor="middle"
              font-size="18" fill="currentColor">c</text>

        <text x="370" y="68" text-anchor="middle"
              font-size="18" fill="currentColor">d</text>

        <text x="470" y="68" text-anchor="middle"
              font-size="18" fill="currentColor">e</text>

      </svg>
    </div>

    <p>
      Here,
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
    E(G)=\{ab,bc,cd\}.
    \]

    </div>

    <p>
      The degrees of the vertices are
    </p>

    <div class="display-math">

    \[
    \deg(a)=1,\qquad
    \deg(b)=2,\qquad
    \deg(c)=2,\qquad
    \deg(d)=1,\qquad
    \deg(e)=0.
    \]

    </div>

    <p>
      Therefore:
    </p>

    <ul>
      <li>
        \(e\) is an <strong>isolated vertex</strong>, since
        \(\deg(e)=0\);
      </li>

      <li>
        \(a\) and \(d\) are <strong>leaves</strong>, since
        \(\deg(a)=\deg(d)=1\);
      </li>

      <li>
        \(b\) and \(c\) are neither isolated vertices nor leaves,
        since each has degree \(2\).
      </li>
    </ul>

  </div>

</div>

<div id="supp-lecture-4-handshaking-theorem" class="math-env theorem">

  <div class="math-env-heading">
    <span class="math-env-tag">Theorem 1.1</span>
    <span class="math-env-title">Handshaking Lemma</span>
  </div>

  <div class="math-env-body">

    <p>
      Let \(G=(V,E)\) be a finite simple graph. Then
    </p>

    <div class="display-math">

    \[
    \boxed{
    \sum_{v\in V(G)} \deg(v)=2|E(G)|
    }.
    \]

    </div>

    <p>
      That is, the sum of the degrees of all vertices of \(G\) is twice the
      number of edges of \(G\).
    </p>

  </div>

</div>


<div id="supp-lecture-4-handshaking-proof" class="proof">

  <div class="proof-title">Proof.</div>

  <p>
    We count the incidences between vertices and edges of \(G\) in two
    different ways.
  </p>

  <p>
    An <em>incidence</em> occurs whenever a vertex is an endpoint of an edge.
  </p>

  <p>
    First, count the incidences edge by edge. Since \(G\) is a simple
    undirected graph, every edge has exactly two distinct endpoints.
    Therefore, every edge contributes exactly \(2\) incidences.
  </p>

  <p>
    Since \(G\) has \(|E(G)|\) edges, the total number of incidences is
  </p>

  <div class="display-math">

  \[
  2|E(G)|.
  \]

  </div>

  <p>
    Now count the same incidences vertex by vertex. A vertex \(v\) is incident
    with exactly \(\deg(v)\) edges, so \(v\) contributes exactly
    \(\deg(v)\) incidences.
  </p>

  <p>
    Hence, summing over all vertices, the total number of incidences is
  </p>

  <div class="display-math">

  \[
  \sum_{v\in V(G)} \deg(v).
  \]

  </div>

  <p>
    Both expressions count exactly the same set of vertex-edge incidences.
    Therefore,
  </p>

  <div class="display-math">

  \[
  \boxed{
  \sum_{v\in V(G)} \deg(v)=2|E(G)|
  }.
  \]

  </div>

  <p>
    This proves the result.
  </p>

  <div style="text-align: right;">&#9633;</div>

</div>


<div id="supp-lecture-4-handshaking-remark" class="math-env remark">

  <div class="math-env-heading">
    <span class="math-env-tag">Remark 1.1</span>
  </div>

  <div class="math-env-body">

    <p>
      The Handshaking Lemma does <em>not</em> say that the degree of each
      vertex is twice the number of edges. Rather, it says that the
      <em>sum</em> of all vertex degrees is twice the total number of edges:
    </p>

    <div class="display-math">

    \[
    \sum_{v\in V(G)}\deg(v)=2|E(G)|.
    \]

    </div>

    <p>
      The reason is simple: every edge contributes \(1\) to the degree of
      each of its two endpoints, and hence contributes \(2\) to the total
      degree sum.
    </p>

  </div>

</div>

<div id="supp-lecture-4-corollary-1" class="math-env corollary">

  <div class="math-env-heading">
    <span class="math-env-tag">Corollary 1.1</span>
  </div>

  <div class="math-env-body">

    <p>
      For every finite simple graph \(G\), the sum of the degrees of all
      vertices is even.
    </p>

  </div>

</div>


<div id="supp-lecture-4-corollary-1-proof" class="proof">

  <div class="proof-title">Proof.</div>

  <p>
    By the Handshaking Lemma,
  </p>

  <div class="display-math">

  \[
  \sum_{v\in V(G)} \deg(v)=2|E(G)|.
  \]

  </div>

  <p>
    Since \(2|E(G)|\) is divisible by \(2\), it is even. Therefore,
  </p>

  <div class="display-math">

  \[
  \boxed{
  \sum_{v\in V(G)} \deg(v)\text{ is even}
  }.
  \]

  </div>

  <p>
    Hence, the sum of the degrees of the vertices of any finite simple graph
    is always even.
  </p>

  <div style="text-align: right;">&#9633;</div>

</div>


<div id="supp-lecture-4-corollary-2" class="math-env corollary">

  <div class="math-env-heading">
    <span class="math-env-tag">Corollary 1.2</span>
  </div>

  <div class="math-env-body">

    <p>
      Let \(G\) be a finite simple graph. Then the number of edges of \(G\) is
    </p>

    <div class="display-math">

    \[
    \boxed{
    |E(G)|
    =
    \frac{1}{2}
    \sum_{v\in V(G)}\deg(v)
    }.
    \]

    </div>

  </div>

</div>


<div id="supp-lecture-4-corollary-2-proof" class="proof">

  <div class="proof-title">Proof.</div>

  <p>
    By the Handshaking Lemma,
  </p>

  <div class="display-math">

  \[
  \sum_{v\in V(G)}\deg(v)=2|E(G)|.
  \]

  </div>

  <p>
    Dividing both sides by \(2\) gives
  </p>

  <div class="display-math">

  \[
  |E(G)|
  =
  \frac{1}{2}
  \sum_{v\in V(G)}\deg(v).
  \]

  </div>

  <p>
    Thus, the number of edges in \(G\) is one-half of the sum of all vertex
    degrees.
  </p>

  <div style="text-align: right;">&#9633;</div>

</div>


<div id="supp-lecture-4-handshaking-remark-2" class="math-env remark">

  <div class="math-env-heading">
    <span class="math-env-tag">Remark 1.2</span>
  </div>

  <div class="math-env-body">

    <p>
      If the degrees of all vertices are known, then the number of edges can
      be found simply by adding the degrees and dividing the result by \(2\).
    </p>

  </div>

</div>

---

[← Back to Notes from Class]({{ '/courses/math-2276/notes-from-class/' | relative_url }})

</div>