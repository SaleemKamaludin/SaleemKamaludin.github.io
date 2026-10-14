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

  <div id="cor-circuit-free-n-minus-1-tree-proof-equate-edge-counts">

    <p>
      Hence,
    </p>

    <div class="display-math">

\[
n-1=n-c.
\]

    </div>

  </div>

  <div id="cor-circuit-free-n-minus-1-tree-proof-conclusion">

    <p>
      Simplifying, we obtain \(c=1\).
    </p>

    <p>
      Thus, \(G\) has exactly one connected component,
      which means that \(G\) is connected.
    </p>

    <p>
      Since \(G\) is both connected and circuit-free,
      \(G\) is a tree.
    </p>

    <div style="text-align: right;">&#9633;</div>

  </div>
</div>

<div id="example-hungarian-row-reduction" class="math-env example">

  <div class="math-env-heading">
    <span class="math-env-tag">Example 1.1</span>
    <span class="math-env-title">Hungarian Algorithm: Row Reduction</span>
  </div>

  <div class="math-env-body">

    <p>
      Consider the following cost matrix, where the rows
      represent workers \(w_1,w_2,w_3,w_4\) and the columns
      represent jobs \(J_1,J_2,J_3,J_4\):
    </p>

  </div>

</div>

---

[← Back to Notes from Class](../)

</div>