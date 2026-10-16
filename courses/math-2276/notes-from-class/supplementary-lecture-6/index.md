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

  <p>
    Since \(G\) is circuit-free, it is a forest.
  </p>

  <p>
    Suppose that \(G\) has \(c\) connected components,
    say \(G_1,G_2,\ldots,G_c\), where each component
    \(G_i\) has \(n_i\) vertices.
  </p>

  <p>
    Since each connected component of a forest is a tree,
    it follows that \(G_i\) has \(n_i-1\) edges.
  </p>

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

  <p>
    However, we are given that \(|E(G)|=n-1\).
  </p>

  <p>
    Hence,
  </p>

  <div class="display-math">

\[
n-1=n-c.
\]

  </div>

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

    <div class="display-math">

\[
C=
\begin{array}{c|cccc}
      & J_1 & J_2 & J_3 & J_4 \\ \hline
w_1 & 9 & 2 & 7 & 8 \\
w_2 & 6 & 4 & 3 & 7 \\
w_3 & 5 & 8 & 1 & 8 \\
w_4 & 7 & 6 & 9 & 4
\end{array}
\]

    </div>


    <div id="example-hungarian-row-reduction-step-1">

      <p>
        <strong>Step 1: Row Reduction</strong>
      </p>

      <p>
        Identify the minimum entry in each row and subtract
        it from every entry in that row.
      </p>

      <p>
        The row minima are shown below:
      </p>

      <div class="display-math">

\[
\begin{array}{c|cccc|c}
      & J_1 & J_2 & J_3 & J_4
      & \text{Row Minimum} \\ \hline
w_1 & 9 & 2 & 7 & 8 & 2 \\
w_2 & 6 & 4 & 3 & 7 & 3 \\
w_3 & 5 & 8 & 1 & 8 & 1 \\
w_4 & 7 & 6 & 9 & 4 & 4
\end{array}
\]

      </div>

      <p>
        We perform the following row operations:
      </p>

      <div class="display-math">

\[
\begin{aligned}
R_1 &\longrightarrow R_1-2,\\
R_2 &\longrightarrow R_2-3,\\
R_3 &\longrightarrow R_3-1,\\
R_4 &\longrightarrow R_4-4.
\end{aligned}
\]

      </div>

      <p>
        Hence, the row-reduced cost matrix is
      </p>

      <div class="display-math">

\[
C_1=
\begin{pmatrix}
7 & 0 & 5 & 6\\
3 & 1 & 0 & 4\\
4 & 7 & 0 & 7\\
3 & 2 & 5 & 0
\end{pmatrix}.
\]

      </div>

      <p>
        Notice that every row now contains at least one zero.
      </p>

    </div>


    <div id="example-hungarian-row-reduction-column-step">

      <p>
        <strong>Step 2: Column Reduction</strong>
      </p>

      <p>
        After performing row reduction, we obtained
      </p>

      <div class="display-math">

\[
C_1=
\begin{pmatrix}
7 & 0 & 5 & 6\\
3 & 1 & 0 & 4\\
4 & 7 & 0 & 7\\
3 & 2 & 5 & 0
\end{pmatrix}.
\]

      </div>

      <p>
        We now identify the minimum entry in each column:
      </p>

      <div class="display-math">

\[
\begin{array}{c|cccc}
& J_1 & J_2 & J_3 & J_4 \\ \hline
\text{Column minimum} & 3 & 0 & 0 & 0
\end{array}
\]

      </div>

      <p>
        Subtract the minimum entry from every entry in
        its corresponding column.
      </p>

      <p>
        Only the first column requires adjustment, since
        the remaining columns already contain zeros.
      </p>

      <p>
        Thus,
      </p>

      <div class="display-math">

\[
C_2=
\begin{pmatrix}
4 & 0 & 5 & 6\\
0 & 1 & 0 & 4\\
1 & 7 & 0 & 7\\
0 & 2 & 5 & 0
\end{pmatrix}.
\]

      </div>

    </div>

    <div id="example-hungarian-select-independent-zeros-step-3">

      <p>
        <strong>Step 3: Select Independent Zeros</strong>
      </p>

      <p>
        We now attempt to select \(4\) independent zeros,
        that is, exactly one zero from each row and each
        column.
      </p>

    </div>

  </div>

</div>


<hr>

<p>
  <a href="../">← Back to Notes from Class</a>
</p>

</div>