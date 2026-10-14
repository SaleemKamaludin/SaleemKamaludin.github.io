---
layout: default
title: Supplementary Notes from Lecture 6
---

<div class="math2276-notes" markdown="1">

# Supplementary Notes from Lecture 6

These notes are typed and expanded versions of material developed during Lecture 6 for **MATH 2276 — Discrete Mathematics**.

They are intended to supplement the material presented in class.

<div id="cor-circuit-free-n-minus-1-tree" class="math-env corollary">

  <div class="math-env-heading">
    <span class="math-env-tag">Corollary 1.1</span>
  </div>

  <div class="math-env-body">

    <p>
      A circuit-free graph with \(n\) vertices and \(n-1\) edges is a tree.
    </p>

  </div>

</div>

<div id="cor-circuit-free-n-minus-1-tree-proof" class="proof">

  <div class="proof-title">Proof.</div>

  <p>
    Let \(G\) be a circuit-free graph such that
    \(|V(G)|=n\) and \(|E(G)|=n-1\).
  </p>


  <div id="cor-circuit-free-n-minus-1-tree-proof-components">

    <p>
      Since \(G\) is circuit-free, it is a forest.
    </p>

    <p>
      Suppose that \(G\) has \(c\) connected components,
      say \(G_1,G_2,\ldots,G_c\), where each component
      \(G_i\) has \(n_i\) vertices.
    </p>

  </div>

  <div id="cor-circuit-free-n-minus-1-tree-proof-component-edges">

    <p>
      Since each connected component of a forest is a tree,
      it follows that \(G_i\) has \(n_i-1\) edges.
    </p>

  </div>

  <div id="cor-circuit-free-n-minus-1-tree-proof-edge-sum">

    <p>
      Therefore,
    </p>

    <div class="display-math">

\[
\begin{aligned}
|E(G)|
&=\sum_{i=1}^{c}(n_i-1)\\
&=\sum_{i=1}^{c}n_i-c\\
&=n-c.
\end{aligned}
\]

    </div>

  </div>

  <div id="cor-circuit-free-n-minus-1-tree-proof-given-edge-count">

    <p>
      However, we are given that \(|E(G)|=n-1\).
    </p>

  </div>
</div>

---

[← Back to Notes from Class](../)

</div>