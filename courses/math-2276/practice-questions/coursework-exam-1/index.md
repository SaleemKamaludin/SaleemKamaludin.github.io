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

---

[← Back to Practice Questions]({{ '/courses/math-2276/practice-questions/' | relative_url }})

</div>