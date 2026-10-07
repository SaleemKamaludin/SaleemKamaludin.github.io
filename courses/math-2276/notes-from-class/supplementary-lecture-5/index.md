---
layout: default
title: MATH 2276 — Supplementary Notes from Lecture 5
permalink: /courses/math-2276/notes-from-class/supplementary-lecture-5/
---

<div class="math2276-notes" markdown="1">

# Supplementary Notes from Lecture 5

<div class="lecture-meta">

**MATH 2276 — Discrete Mathematics**

</div>

These supplementary notes contain typed and expanded material developed during Lecture 5.

---

<!-- Lecture 5 supplementary material will be added here. -->

<div id="thm-edge-count-trees" class="math-env theorem">

  <div class="math-env-heading">
    <span class="math-env-tag">Theorem 1.1</span>
    <span class="math-env-title">Edge count for trees</span>
  </div>

  <div class="math-env-body">

    <p>
      Let \(T\) be a tree with \(n\) vertices. Then
    </p>

    <div class="display-math">

    \[
    |E(T)|=n-1.
    \]

    </div>

  </div>

</div>

<div id="thm-edge-count-trees-proof" class="proof">

  <div class="proof-title">Proof.</div>

  <p>
    We prove the result by induction on \(n\).
  </p>

  <p>
    For \(n=1\), the tree \(T\) consists of a single vertex and has no
    edges. Hence
  </p>

  <div class="display-math">

  \[
  |E(T)|=0=1-1.
  \]

  </div>

  <p>
    Therefore, the result holds for \(n=1\).
  </p>

  <p>
    Now suppose that, for some \(n\geq 1\), every tree with \(n\) vertices
    has \(n-1\) edges. This is our induction hypothesis.
  </p>

  <p>
    Let \(T\) be a tree with \(n+1\) vertices. Since \(n+1\geq 2\), \(T\)
    is nontrivial. By the Leaf Theorem, \(T\) contains a leaf \(v\), that
    is, a vertex of degree \(1\). Let \(e\) be the unique edge incident
    with \(v\).
  </p>

  <p>
    Delete \(v\) together with the edge \(e\), and denote the resulting
    graph by
  </p>

  <div class="display-math">

  \[
  T'=T-v.
  \]

  </div>

  <p>
    By the leaf-deletion property of trees, \(T'\) is again a tree.
    Moreover,
  </p>

  <div class="display-math">

  \[
  |V(T')|=n.
  \]

  </div>

  <p>
    Therefore, by the induction hypothesis,
  </p>

  <div class="display-math">

  \[
  |E(T')|=n-1.
  \]

  </div>

  <p>
    The original tree \(T\) contains exactly one more edge than \(T'\),
    namely the edge \(e\). Thus
  </p>

  <div class="display-math">

  \[
  \begin{aligned}
  |E(T)|
  &=|E(T')|+1\\
  &=(n-1)+1\\
  &=n.
  \end{aligned}
  \]

  </div>

  <p>
    Since \(T\) has \(n+1\) vertices, this may be written as
  </p>

  <div class="display-math">

  \[
  |E(T)|=(n+1)-1.
  \]

  </div>

  <p>
    Hence, by mathematical induction, every tree with \(n\) vertices has
    exactly \(n-1\) edges.
  </p>

  <div style="text-align: right;">&#9633;</div>

</div>

<div id="cor-total-degree-tree" class="math-env corollary">

  <div class="math-env-heading">
    <span class="math-env-tag">Corollary 1.1</span>
    <span class="math-env-title">Total degree of a tree</span>
  </div>

  <div class="math-env-body">

    <p>
      Let \(T\) be a tree with \(n\) vertices. Then
    </p>

    <div class="display-math">

    \[
    \sum_{v\in V(T)} \deg(v)=2(n-1).
    \]

    </div>

  </div>

</div>

<div id="cor-total-degree-tree-proof" class="proof">

  <div class="proof-title">Proof.</div>

  <p>
    By the Handshaking Lemma,
  </p>

  <div class="display-math">

  \[
  \sum_{v\in V(T)} \deg(v)=2|E(T)|.
  \]

  </div>

  <p>
    Since \(T\) is a tree with \(n\) vertices, we have
  </p>

  <div class="display-math">

  \[
  |E(T)|=n-1.
  \]

  </div>

  <p>
    Therefore,
  </p>

  <div class="display-math">

  \[
  \sum_{v\in V(T)} \deg(v)
  =2|E(T)|
  =2(n-1).
  \]

  </div>

  <div style="text-align: right;">&#9633;</div>

</div>

<div id="supp-lecture-5-example-1" class="math-env example">

  <div class="math-env-heading">
    <span class="math-env-tag">Example 1.1</span>
  </div>

  <div class="math-env-body">

    <p>
      Can there exist a tree with \(9\) vertices and \(9\) edges?
    </p>

  </div>

</div>


<div id="supp-lecture-5-example-1-solution" class="solution">

  <div class="solution-title">Solution.</div>

  <p>
    No.
  </p>

  <p>
    A tree with \(n\) vertices has exactly \(n-1\) edges. Hence, a tree with
    \(9\) vertices must have
  </p>

  <div class="display-math">

  \[
  9-1=8
  \]

  </div>

  <p>
    edges.
  </p>

  <p>
    Therefore, a tree with \(9\) vertices and \(9\) edges cannot exist.
  </p>

</div>


<div id="supp-lecture-5-example-2" class="math-env example">

  <div class="math-env-heading">
    <span class="math-env-tag">Example 1.2</span>
  </div>

  <div class="math-env-body">

    <p>
      Can there exist a tree with \(6\) vertices whose total degree is
      \(14\)?
    </p>

  </div>

</div>


<div id="supp-lecture-5-example-2-solution" class="solution">

  <div class="solution-title">Solution.</div>

  <p>
    No.
  </p>

  <p>
    A tree with \(6\) vertices has
  </p>

  <div class="display-math">

  \[
  6-1=5
  \]

  </div>

  <p>
    edges.
  </p>

  <p>
    By the Handshaking Lemma, the total degree is therefore
  </p>

  <div class="display-math">

  \[
  \begin{aligned}
  \sum_{v\in V(T)}\deg(v)
  &=2|E(T)|\\
  &=2(5)\\
  &=10.
  \end{aligned}
  \]

  </div>

  <p>
    Hence, a tree with \(6\) vertices cannot have total degree \(14\).
  </p>

</div>

---

[← Back to Notes from Class]({{ '/courses/math-2276/notes-from-class/' | relative_url }})

</div>