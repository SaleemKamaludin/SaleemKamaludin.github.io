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

    
      <div id="example-hungarian-independent-zeros-method">

        <p>
          A convenient method is to begin with a row or
          column containing the fewest available zeros.
        </p>

        <p>
          Once a zero is selected, all other zeros in its
          row and column are excluded from consideration.
        </p>

        <p>
          For the reduced matrix \(C_2\), we select:
        </p>

      </div>

      <div id="example-hungarian-independent-zeros-selection-matrix">

        <div class="display-math">

\[
\begin{array}{c|cccc}
& J_1 & J_2 & J_3 & J_4 \\ \hline
w_1 & 4 & \boxed{0} & 5 & 6\\
w_2 & \boxed{0} & 1 & 0 & 4\\
w_3 & 1 & 7 & \boxed{0} & 7\\
w_4 & 0 & 2 & 5 & \boxed{0}
\end{array}
\]

        </div>

      </div>

      <div id="example-hungarian-independent-zeros-optimal-conclusion">

        <p>
          Since we have selected \(4\) independent zeros,
          one from each row and column, an optimal
          assignment has been obtained.
        </p>

      </div>
</div>

    <div id="example-hungarian-minimum-total-cost-step-4">

      <p>
        <strong>Step 4: Determine the Minimum Total Cost</strong>
      </p>

      <p>
        The optimal assignment is
      </p>

      <div class="display-math">

\[
\begin{aligned}
w_1 &\longrightarrow J_2,\\
w_2 &\longrightarrow J_1,\\
w_3 &\longrightarrow J_3,\\
w_4 &\longrightarrow J_4.
\end{aligned}
\]

      </div>

    
      <div id="example-hungarian-original-costs-table">

        <p>
          Using the entries from the <em>original cost matrix</em>,
          the corresponding costs are
        </p>

        <div class="display-math">

\[
\begin{array}{c|c|c}
\text{Worker} & \text{Job} & \text{Cost} \\ \hline
w_1 & J_2 & 2\\
w_2 & J_1 & 6\\
w_3 & J_3 & 1\\
w_4 & J_4 & 4
\end{array}
\]

        </div>

      </div>

      <div id="example-hungarian-minimum-total-cost-calculation">

        <p>
          Hence, the minimum total cost is
        </p>

        <div class="display-math">

\[
\begin{aligned}
C_{\min}
&=2+6+1+4\\
&=\boxed{13}.
\end{aligned}
\]

        </div>

      </div>
</div>

  </div>

</div>

<div id="remark-hungarian-original-cost-matrix" class="math-env remark">

  <div class="math-env-heading">
    <span class="math-env-tag">Remark 1.1</span>
  </div>

  <div class="math-env-body">

    <p>
      Always calculate the final assignment cost using
      the original cost matrix, not the reduced matrix.
    </p>

    <p>
      Subtracting row and column minima preserves the
      optimal assignment, but changes the numerical
      values of the costs.
    </p>

  </div>

</div>

<div id="example-hungarian-additional-matrix-reduction" class="math-env example">

  <div class="math-env-heading">
    <span class="math-env-tag">Example 1.2</span>
    <span class="math-env-title">Hungarian Algorithm: Additional Matrix Reduction</span>
  </div>

  <div class="math-env-body">

    <p>
      Consider the following cost matrix for assigning
      four workers \(w_1,w_2,w_3,w_4\) to four jobs
      \(J_1,J_2,J_3,J_4\):
    </p>

  
    <div id="example-hungarian-additional-original-cost-matrix">

      <div class="display-math">

\[
C=
\begin{array}{c|cccc}
& J_1 & J_2 & J_3 & J_4\\ \hline
w_1 & 82 & 83 & 69 & 92\\
w_2 & 77 & 37 & 49 & 92\\
w_3 & 11 & 69 & 5 & 86\\
w_4 & 8 & 9 & 98 & 23
\end{array}
\]

      </div>

    </div>

    <div id="example-hungarian-additional-step-1-row-reduction">

      <p>
        We wish to determine an assignment that minimizes
        the total cost.
      </p>

      <p>
        <strong>Step 1: Row Reduction</strong>
      </p>

      <p>
        First, identify the minimum entry in each row.
      </p>

      <div class="display-math">

\[
\begin{array}{c|cccc|c}
& J_1 & J_2 & J_3 & J_4
& \text{Minimum}\\ \hline
w_1 & 82 & 83 & 69 & 92 & 69\\
w_2 & 77 & 37 & 49 & 92 & 37\\
w_3 & 11 & 69 & 5 & 86 & 5\\
w_4 & 8 & 9 & 98 & 23 & 8
\end{array}
\]

      </div>

    
      <div id="example-hungarian-additional-row-subtraction">

        <p>
          Subtract the minimum entry from every entry
          in its corresponding row.
        </p>

        <p>
          Therefore, the row-reduced matrix is
        </p>

      </div>

      <div id="example-hungarian-additional-row-reduced-matrix-c1">

        <div class="display-math">

\[
C_1=
\begin{pmatrix}
13 & 14 & 0 & 23\\
40 & 0 & 12 & 55\\
6 & 64 & 0 & 81\\
0 & 1 & 90 & 15
\end{pmatrix}.
\]

        </div>

      </div>
</div>

    <div id="example-hungarian-additional-step-2-column-reduction">

      <p>
        <strong>Step 2: Column Reduction</strong>
      </p>

      <p>
        We now identify the minimum entry in each column
        of \(C_1\).
      </p>

      <p>
        The column minima are
      </p>

      <div class="display-math">

\[
0,\quad 0,\quad 0,\quad 15.
\]

      </div>

    
      <div id="example-hungarian-additional-column-adjustment">

        <p>
          Notice that the first three columns already
          contain zeros.
        </p>

        <p>
          Thus, only the fourth column requires adjustment.
        </p>

        <p>
          Subtracting \(15\) from every entry in the fourth
          column gives
        </p>

      </div>

      <div id="example-hungarian-additional-column-reduced-matrix-c2">

        <div class="display-math">

\[
C_2=
\begin{pmatrix}
13 & 14 & 0 & 8\\
40 & 0 & 12 & 40\\
6 & 64 & 0 & 66\\
0 & 1 & 90 & 0
\end{pmatrix}.
\]

        </div>

      </div>
</div>

    <div id="example-hungarian-additional-step-3-cover-zeros">

      <p>
        <strong>Step 3: Cover All Zeros Using the Minimum Number of Lines</strong>
      </p>

      <p>
        We now cover all zeros in \(C_2\) using the
        smallest possible number of horizontal and
        vertical lines.
      </p>

    
      <div id="example-hungarian-additional-minimum-covering-lines">

        <p>
          One possible minimum covering consists of:
        </p>

        <ol>
          <li>
            A horizontal line through row \(w_2\).
          </li>
          <li>
            A horizontal line through row \(w_4\).
          </li>
          <li>
            A vertical line through column \(J_3\).
          </li>
        </ol>

      </div>

      <div id="example-hungarian-additional-covering-conclusion">

        <p>
          Hence, all zeros can be covered using \(3\) lines.
        </p>

        <p>
          Since the matrix is of order \(4\), we require
          \(4\) independent zeros to complete the assignment.
        </p>

      </div>

      <div id="example-hungarian-additional-insufficient-independent-zeros">

        <p>
          As the minimum number of covering lines is
        </p>

        <div class="display-math">

\[
3<4,
\]

        </div>

        <p>
          the current matrix does not contain enough
          independent zeros.
        </p>

      </div>

      <div id="example-hungarian-additional-further-reduction-required">

        <p>
          Therefore, further reduction is required.
        </p>

      </div>
</div>

    <div id="example-hungarian-additional-step-4-adjust-matrix">

      <p>
        <strong>Step 4: Adjust the Reduced Matrix</strong>
      </p>

      <p>
        We identify the smallest entry that is not
        covered by any line.
      </p>

    
      <div id="example-hungarian-additional-uncovered-entries">

        <p>
          The uncovered entries are
        </p>

        <div class="display-math">

\[
13,\quad 14,\quad 8,\quad 6,\quad 64,\quad 66.
\]

        </div>

      </div>

      <div id="example-hungarian-additional-smallest-uncovered-entry">

        <p>
          Therefore, the smallest uncovered entry is
        </p>

        <div class="display-math">

\[
k=6.
\]

        </div>

      </div>

      <div id="example-hungarian-additional-adjustment-operations">

        <p>
          We now perform the following operations:
        </p>

        <ol>
          <li>
            Subtract \(6\) from every uncovered entry.
          </li>

          <li>
            Add \(6\) to every entry lying at the
            intersection of two covering lines.
          </li>

          <li>
            Leave all entries covered by exactly
            one line unchanged.
          </li>
        </ol>

      </div>

      <div id="example-hungarian-additional-adjusted-matrix-c3">

        <p>
          Consequently, the adjusted matrix becomes
        </p>

        <div class="display-math">

\[
C_3=
\begin{pmatrix}
7 & 8 & 0 & 2\\
40 & 0 & 18 & 40\\
0 & 58 & 0 & 60\\
0 & 1 & 96 & 0
\end{pmatrix}.
\]

        </div>

      </div>

      <div id="example-hungarian-additional-step-4-additional-zero">

        <p>
          Notice that the adjustment has introduced an
          additional zero in the third row.
        </p>

      </div>
</div>

    <div id="example-hungarian-additional-step-5-independent-zeros">

      <p>
        <strong>Step 5: Select Independent Zeros</strong>
      </p>

    
      <div id="example-hungarian-additional-step-5-selection-intro">

        <p>
          We again attempt to select \(4\) independent zeros.
        </p>

        <p>
          Recall that independent zeros must lie in
          different rows and different columns.
        </p>

        <p>
          For \(C_3\), we can select
        </p>

      </div>

      <div id="example-hungarian-additional-step-5-selection-matrix">

        <div class="display-math">

\[
\begin{array}{c|cccc}
& J_1 & J_2 & J_3 & J_4\\ \hline
w_1 & 7 & 8 & \boxed{0} & 2\\
w_2 & 40 & \boxed{0} & 18 & 40\\
w_3 & \boxed{0} & 58 & 0 & 60\\
w_4 & 0 & 1 & 96 & \boxed{0}
\end{array}
\]

        </div>

      </div>

      <div id="example-hungarian-additional-step-5-optimal-conclusion">

        <p>
          We have successfully selected \(4\) independent
          zeros, one in each row and each column.
        </p>

        <p>
          Therefore, an optimal assignment has been found.
        </p>

      </div>
</div>

    <div id="example-hungarian-additional-step-6-minimum-total-cost">

      <p>
        <strong>Step 6: Determine the Minimum Total Cost</strong>
      </p>

      <p>
        The optimal assignment is
      </p>

    
      <div id="example-hungarian-additional-step-6-optimal-assignment">

        <div class="display-math">

\[
\begin{aligned}
w_1 &\longrightarrow J_3,\\
w_2 &\longrightarrow J_2,\\
w_3 &\longrightarrow J_1,\\
w_4 &\longrightarrow J_4.
\end{aligned}
\]

        </div>

      </div>

      <div id="example-hungarian-additional-step-6-original-costs-intro">

        <p>
          Returning to the original cost matrix, the
          corresponding costs are
        </p>

      </div>

      <div id="example-hungarian-additional-step-6-original-costs-table">

        <div class="display-math">

\[
\begin{array}{c|c|c}
\text{Worker} & \text{Job} & \text{Cost}\\ \hline
w_1 & J_3 & 69\\
w_2 & J_2 & 37\\
w_3 & J_1 & 11\\
w_4 & J_4 & 23
\end{array}
\]

        </div>

      </div>

      <div id="example-hungarian-additional-step-6-minimum-cost-conclusion">

        <p>
          Hence,
        </p>

        <div class="display-math">

\[
\begin{aligned}
C_{\min}
&=69+37+11+23\\
&=\boxed{140}.
\end{aligned}
\]

        </div>

        <p>
          Therefore, the minimum total assignment cost
          is \(140\).
        </p>

      </div>
</div>

</div>

</div>

<div id="remark-hungarian-important-observations" class="math-env remark">

  <div class="math-env-heading">
    <span class="math-env-tag">Remark 1.2</span>
    <span class="math-env-title">Important Observations</span>
  </div>

  <p>
    When applying the Hungarian algorithm, keep
    the following points in mind.
  </p>


  <div id="remark-hungarian-important-observations-list">

    <ol id="hungarian-important-observations-list">

      <li>
        <strong>Row and column reduction:</strong>

        <p>
          Subtract the smallest entry in each row
          and then in each column.
        </p>
      </li>

    
      <li id="remark-hungarian-important-observations-item-2">
        <strong>Independent zeros:</strong>

        <p>
          Two zeros are independent if they do not
          lie in the same row or column.
        </p>
      </li>

      <li id="remark-hungarian-important-observations-item-3">
        <strong>Optimal assignment:</strong>

        <p>
          For an \(n\times n\) cost matrix, an optimal
          assignment is obtained when \(n\) independent
          zeros can be selected.
        </p>
      </li>

      <li id="remark-hungarian-important-observations-item-4">
        <strong>Insufficient independent zeros:</strong>

        <p>
          If fewer than \(n\) independent zeros can
          be selected, cover all zeros using the
          minimum number of horizontal and vertical
          lines, and adjust the matrix.
        </p>
      </li>

      <li id="remark-hungarian-important-observations-item-5">
        <strong>Matrix adjustment:</strong>

        <p>
          Let \(k\) be the smallest uncovered entry.
        </p>

        <p>
          Subtract \(k\) from every uncovered entry,
          add \(k\) to entries covered by two lines,
          and leave entries covered by exactly one
          line unchanged.
        </p>

        <p>
          Repeat until \(n\) independent zeros can
          be selected.
        </p>
      </li>

      <li id="remark-hungarian-important-observations-item-6">
        <strong>Final cost:</strong>

        <p>
          Always use the original cost matrix
          to calculate the minimum total cost.
        </p>
      </li>
</ol>

  </div>
</div>

<div id="example-hungarian-five-by-five-assignment" class="math-env example">

  <div class="math-env-heading">
    <span class="math-env-tag">Example 1.3</span>
    <span class="math-env-title">Hungarian Algorithm: A \(5\times5\) Assignment Problem</span>
  </div>

  <p>
    Consider the following cost matrix for assigning five workers
    \(w_1,w_2,w_3,w_4,w_5\) to five jobs
    \(J_1,J_2,J_3,J_4,J_5\):
  </p>


  <div id="example-hungarian-five-by-five-original-cost-matrix">

    <div class="display-math">

\[
C=
\begin{array}{c|ccccc}
& J_1 & J_2 & J_3 & J_4 & J_5\\ \hline
w_1 & 9 & 19 & 11 & 7 & 13\\
w_2 & 15 & 13 & 7 & 6 & 5\\
w_3 & 16 & 3 & 11 & 18 & 10\\
w_4 & 4 & 13 & 4 & 11 & 17\\
w_5 & 19 & 10 & 19 & 4 & 13
\end{array}
\]

    </div>

  </div>

  <div id="example-hungarian-five-by-five-problem-instruction">

    <p>
      Use the Hungarian algorithm to determine an assignment
      that minimizes the total cost.
    </p>

  </div>
</div>


<hr>

<p>
  <a href="../">← Back to Notes from Class</a>
</p>

</div>