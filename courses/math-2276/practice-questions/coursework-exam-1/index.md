---
layout: default
title: MATH 2276 — Coursework Exam 1 Practice Questions
permalink: /courses/math-2276/practice-questions/coursework-exam-1/
---

<div class="math2276-notes" markdown="1">

# Coursework Exam 1 (and Final Exam) Practice Questions

**MATH 2276 — Discrete Mathematics**

These questions are provided for additional practice for **Coursework Exam 1** and for revision toward the **Final Examination**.

---

<!-- Practice questions will be added here. -->

<div id="cw1-question-1" class="math-env exercise">

  <div class="math-env-heading">
    <span class="math-env-tag">Question 1</span>
  </div>

  <div class="math-env-body">

    <p>
      Let \(D_n\) be the determinant of the \(n\times n\) matrix
    </p>

    <div class="display-math">

    \[
    D_n=
    \begin{vmatrix}
    p & r & r & r & \cdots & r & r\\
    q & s & 0 & 0 & \cdots & 0 & 0\\
    0 & q & s & 0 & \cdots & 0 & 0\\
    0 & 0 & q & s & \cdots & 0 & 0\\
    \vdots & \vdots & \vdots & \ddots & \ddots & \vdots & \vdots\\
    0 & 0 & 0 & 0 & \cdots & q & s
    \end{vmatrix}.
    \]

    </div>

    <p>
      Prove, by mathematical induction, that for every integer
      \(n\geq 2\),
    </p>

    <div class="display-math">

    \[
    D_n
    =
    ps^{\,n-1}
    -
    rq\left(
    \frac{s^{\,n-1}+(-1)^n q^{\,n-1}}{s+q}
    \right),
    \]

    </div>

    <p>
      provided that \(s+q\neq 0\).
    </p>

  </div>

</div>

<div id="cw1-question-2" class="math-env exercise">

  <div class="math-env-heading">
    <span class="math-env-tag">Question 2</span>
  </div>

  <div class="math-env-body">

    <p>
      Let \(F_n\) be the determinant of the \(n\times n\) matrix
    </p>

    <div class="display-math">

    \[
    F_n=
    \begin{vmatrix}
    u & v & v & v & \cdots & v & v\\
    -w & t & 0 & 0 & \cdots & 0 & 0\\
    0 & -w & t & 0 & \cdots & 0 & 0\\
    0 & 0 & -w & t & \cdots & 0 & 0\\
    \vdots & \vdots & \vdots & \ddots & \ddots & \vdots & \vdots\\
    0 & 0 & 0 & 0 & \cdots & -w & t
    \end{vmatrix}.
    \]

    </div>

    <p>
      Prove, by mathematical induction, that for every integer
      \(n\geq 2\),
    </p>

    <div class="display-math">

    \[
    F_n
    =
    ut^{\,n-1}
    +
    vw\left(
    \frac{t^{\,n-1}-w^{\,n-1}}{t-w}
    \right),
    \]

    </div>

    <p>
      provided that \(t-w\neq 0\).
    </p>

  </div>

</div>

<div id="cw1-question-3" class="math-env exercise">

  <div class="math-env-heading">
    <span class="math-env-tag">Question 3</span>
  </div>

  <div class="math-env-body">

    <p>
      Let \(T_n\) be the determinant of the \(n\times n\) matrix
    </p>

    <div class="display-math">

    \[
    T_n=
    \begin{vmatrix}
    2 & -1 & 0 & 0 & \cdots & 0\\
    -1 & 2 & -1 & 0 & \cdots & 0\\
    0 & -1 & 2 & -1 & \cdots & 0\\
    0 & 0 & -1 & 2 & \ddots & \vdots\\
    \vdots & \vdots & \vdots & \ddots & \ddots & -1\\
    0 & 0 & 0 & \cdots & -1 & 2
    \end{vmatrix}.
    \]

    </div>

    <p>
      Prove, by mathematical induction, that for every integer
      \(n\geq 1\),
    </p>

    <div class="display-math">

    \[
    T_n=n+1.
    \]

    </div>

  </div>

</div>

<div id="cw1-question-4" class="math-env exercise">

  <div class="math-env-heading">
    <span class="math-env-tag">Question 4</span>
  </div>

  <div class="math-env-body">

    <p>
      Let \(H_n\) be the determinant of the \(n\times n\) matrix
    </p>

    <div class="display-math">

    \[
    H_n=
    \begin{vmatrix}
    7 & 3 & 3 & 3 & \cdots & 3 & 3\\
    2 & 5 & 0 & 0 & \cdots & 0 & 0\\
    0 & 2 & 5 & 0 & \cdots & 0 & 0\\
    0 & 0 & 2 & 5 & \cdots & 0 & 0\\
    \vdots & \vdots & \vdots & \ddots & \ddots & \vdots & \vdots\\
    0 & 0 & 0 & 0 & \cdots & 2 & 5
    \end{vmatrix}.
    \]

    </div>

    <p>
      Prove, by mathematical induction, that for every integer
      \(n\geq 2\),
    </p>

    <div class="display-math">

    \[
    H_n
    =
    7(5^{\,n-1})
    -
    6\left(
    \frac{5^{\,n-1}+(-1)^n2^{\,n-1}}{7}
    \right).
    \]

    </div>

  </div>

</div>

<div id="cw1-question-5" class="math-env exercise">

  <div class="math-env-heading">
    <span class="math-env-tag">Question 5</span>
  </div>

  <div class="math-env-body">

    <p>
      For parts (i)&ndash;(x) below, either draw a graph with the specified
      properties or justify why no such graph exists.
    </p>

    <ol type="i">

      <li>
        <p>
          A simple graph with six vertices of degrees
          \(1,\,1,\,2,\,2,\,3,\,3\).
        </p>
      </li>

      <li>
        <p>
          A simple graph with six vertices of degrees
          \(1,\,1,\,2,\,2,\,2,\,3\).
        </p>
      </li>

      <li>
        <p>
          A simple graph with seven vertices, each of degree \(2\).
        </p>
      </li>

      <li>
        <p>
          A simple graph with five vertices of degrees
          \(0,\,1,\,1,\,4,\,4\).
        </p>
      </li>

      <li>
        <p>
          A simple graph with eight vertices of degrees
          \(1,\,1,\,2,\,2,\,3,\,3,\,4,\,4\).
        </p>
      </li>

      <li>
        <p>
          A simple graph with fifteen edges in which every vertex has
          degree \(3\).
        </p>
      </li>

      <li>
        <p>
          A simple graph with fourteen edges in which every vertex has
          degree \(4\).
        </p>
      </li>

      <li>
        <p>
          A simple graph with ten edges in which every vertex has
          degree \(3\).
        </p>
      </li>

      <li>
        <p>
          A simple graph with six edges in which every vertex has
          degree \(4\).
        </p>
      </li>

      <li>
        <p>
          A simple graph with twenty-one edges in which every vertex has
          degree \(6\).
        </p>
      </li>

    </ol>

  </div>

</div>

<div id="cw1-question-6" class="math-env exercise">

  <div class="math-env-heading">
    <span class="math-env-tag">Question 6</span>
  </div>

  <div class="math-env-body">

    <p>
      Let \(G\) be a connected graph, and let \(C\) be any circuit in \(G\)
      that does not contain every vertex of \(G\). Let \(G'\) be the subgraph
      obtained by removing all the edges of \(C\) from \(G\) and also any
      vertices that become isolated when the edges of \(C\) are removed.
    </p>

    <p>
      Prove that there exists a vertex \(v\) such that \(v\) is in both
      \(C\) and \(G'\).
    </p>

  </div>

</div>

---

[← Back to Practice Questions]({{ '/courses/math-2276/practice-questions/' | relative_url }})

</div>