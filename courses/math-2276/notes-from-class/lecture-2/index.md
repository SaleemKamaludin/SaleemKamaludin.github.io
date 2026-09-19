---
layout: default
title: MATH 2276 — Lecture 2 Notes
permalink: /courses/math-2276/notes-from-class/lecture-2/
---

<div class="math2276-notes" markdown="1">

# Lecture 2 Notes

<div class="lecture-meta">

**MATH 2276 — Discrete Mathematics**

</div>

---

<h2>1&nbsp;&nbsp;Recursive</h2>

<div class="math-env theorem">

  <div class="math-env-heading">
    <span class="math-env-tag">Theorem 1.1</span>

    <span class="math-env-title">
      Recursive Reduction of a Determinant
    </span>
  </div>

  <div class="math-env-body">

    <p>
      Let \(D_n=\det(A_n)\), where \(A_n\) is an
      \(n\times n\) matrix.
    </p>

    <p>
      Suppose that, for \(n\geq 3\),
    </p>

    <ol>
      <li>
        some row of \(A_n\) contains exactly one nonzero entry \(a\);
      </li>

      <li>
        after expanding along that row, the resulting
        \((n-1)\times(n-1)\) minor contains a row with exactly one
        nonzero entry \(a\); and
      </li>

      <li>
        after expanding along this second row, the remaining
        \((n-2)\times(n-2)\) determinant is \(D_{n-2}\).
      </li>
    </ol>

  </div>

</div>

<div class="proof">

  <div class="proof-title">
    Proof.
  </div>

  <p>
    Let \(D_n=\det(A_n)\).
  </p>

  <p>
    By hypothesis, there is a row of \(A_n\) containing exactly one
    nonzero entry, namely \(a\). Suppose this entry occurs in position
    \((i,j)\). Expanding the determinant along row \(i\), Laplace
    expansion gives
  </p>

  \[
  D_n
  =
  a(-1)^{i+j}\det(M_{ij}),
  \]

  <p>
    where \(M_{ij}\) is the matrix obtained from \(A_n\) by deleting
    row \(i\) and column \(j\).
  </p>

  <p>
    Since the corresponding cofactor sign is assumed to be positive,
  </p>

  \[
  D_n=a\det(M_{ij}).
  \]

  <p>
    By hypothesis, the determinant \(\det(M_{ij})\) again contains a
    row having exactly one nonzero entry, also equal to \(a\).
    Expanding along this row gives
  </p>

  \[
  \det(M_{ij})
  =
  a\det(B),
  \]

  <p>
    where \(B\) is the matrix remaining after the appropriate row and
    column have been deleted.
  </p>

  <p>
    The second cofactor sign is also positive, and by assumption the
    matrix \(B\) has precisely the same form as \(A_{n-2}\). Hence
  </p>

  \[
  \det(B)=D_{n-2}.
  \]

  <p>
    Therefore,
  </p>

  \[
  D_n
  =
  a\left(aD_{n-2}\right)
  =
  a^2D_{n-2}.
  \]

  <p>
    Thus
  </p>

  \[
  \boxed{D_n=a^2D_{n-2}}.
  \]

  <div style="text-align: right;">&#9633;</div>

</div>

<div class="math-env corollary">

  <div class="math-env-heading">
    <span class="math-env-tag">Corollary 1.1</span>
  </div>

  <div class="math-env-body">

    <p>
      Suppose that a sequence of determinants \(\{D_n\}_{n\geq 1}\)
      satisfies
    </p>

    \[
    D_n=a^2D_{n-2},
    \qquad n\geq 3,
    \]

    <p>
      with initial values
    </p>

    \[
    D_1=a
    \qquad\text{and}\qquad
    D_2=a^2.
    \]

    <p>
      Then
    </p>

    \[
    D_n=a^n
    \]

    <p>
      for every positive integer \(n\).
    </p>

  </div>

</div>

<div class="proof">

  <div class="proof-title">
    Proof.
  </div>

  <p>
    We prove the result by strong induction on \(n\).
  </p>

  <p>
    For \(n=1\),
  </p>

  \[
  D_1=a=a^1,
  \]

  <p>
    and for \(n=2\),
  </p>

  \[
  D_2=a^2.
  \]

  <p>
    Now let \(n\geq 3\), and assume that
  </p>

  \[
  D_k=a^k
  \]

  <p>
    for all positive integers \(k<n\).
  </p>

  <p>
    Using the recurrence,
  </p>

  \[
  D_n=a^2D_{n-2}.
  \]

  <p>
    Since \(n-2<n\), the induction hypothesis gives
  </p>

  \[
  D_{n-2}=a^{n-2}.
  \]

  <p>
    Therefore,
  </p>

  \[
  D_n
  =
  a^2a^{n-2}
  =
  a^n.
  \]

  <p>
    Hence, by strong induction,
  </p>

  \[
  \boxed{D_n=a^n}
  \]

  <p>
    for every positive integer \(n\).
  </p>

  <div style="text-align: right;">&#9633;</div>

</div>

<div class="math-env lemma">

  <div class="math-env-heading">
    <span class="math-env-tag">Lemma 1.1</span>

    <span class="math-env-title">
      Sparse Diagonal Row or Column
    </span>
  </div>

  <div class="math-env-body">

    <p>
      Let \(A=(a_{ij})\) be an \(n\times n\) matrix. Suppose that row \(i\)
      contains exactly one nonzero entry, namely the diagonal entry
      \(a_{ii}\). Then
    </p>

    \[
    \det(A)=a_{ii}\det(A_{ii}),
    \]

    <p>
      where \(A_{ii}\) denotes the matrix obtained from \(A\) by deleting
      row \(i\) and column \(i\).
    </p>

    <p>
      The analogous result holds if column \(i\) contains exactly one
      nonzero entry \(a_{ii}\).
    </p>

  </div>

</div>

<div class="proof">

  <div class="proof-title">
    Proof.
  </div>

  <p>
    Expanding \(\det(A)\) along row \(i\), we have
  </p>

  \[
  \det(A)
  =
  \sum_{j=1}^{n}
  a_{ij}(-1)^{i+j}\det(A_{ij}).
  \]

  <p>
    By hypothesis, \(a_{ij}=0\) whenever \(j\neq i\). Therefore,
  </p>

  \[
  \det(A)
  =
  a_{ii}(-1)^{i+i}\det(A_{ii}).
  \]

  <p>
    Since
  </p>

  \[
  (-1)^{2i}=1,
  \]

  <p>
    it follows that
  </p>

  \[
  \boxed{\det(A)=a_{ii}\det(A_{ii})}.
  \]

  <p>
    The proof for a column is identical, using cofactor expansion along
    that column.
  </p>

  <div style="text-align: right;">&#9633;</div>

</div>

<p>
  Consider the determinant
</p>

<div class="display-math">

\[
E_n=
\begin{vmatrix}
b & 1 & 0 & 0 & \cdots & 0\\
0 & b & 0 & 0 & \cdots & 0\\
0 & 1 & b & 1 & \cdots & 0\\
0 & 0 & 0 & b & \cdots & 0\\
\vdots & \vdots & \vdots & \vdots & \ddots & \vdots\\
0 & 0 & 0 & 0 & \cdots & b
\end{vmatrix}.
\]

</div>

<p>
  We shall determine a recurrence relation satisfied by \(E_n\).
</p>

<div class="math-env example">

  <div class="math-env-heading">
    <span class="math-env-tag">Example 1.1</span>
  </div>

  <div class="math-env-body">

    <p>
      For the determinant \(E_n\) above, show that
    </p>

    \[
    E_n=b^2E_{n-2}.
    \]

  </div>

</div>

<div class="solution">

  <div class="solution-title">
    Solution.
  </div>

  <p>
    The second row contains exactly one nonzero entry, namely the
    diagonal entry \(b\). Expanding along the second row gives
  </p>

  \[
  E_n=bE_{n-1}^{*},
  \]

  <p>
    where \(E_{n-1}^{*}\) denotes the resulting minor.
  </p>

  <p>
    In this minor, the first row again contains exactly one nonzero
    entry, namely \(b\). Expanding along this row gives
  </p>

  \[
  E_{n-1}^{*}=bE_{n-2}.
  \]

  <p>
    Hence
  </p>

  \[
  E_n
  =
  b\left(bE_{n-2}\right)
  =
  \boxed{b^2E_{n-2}}.
  \]

</div>

<div class="math-env example">

  <div class="math-env-heading">
    <span class="math-env-tag">Example 1.2</span>
  </div>

  <div class="math-env-body">

    <p>
      Let
    </p>

    \[
    D_n=
    \begin{vmatrix}
    a & 1 & 0 & 0 & \cdots & 0\\
    0 & a & 1 & 0 & \cdots & 0\\
    0 & 0 & a & 1 & \ddots & \vdots\\
    \vdots & \vdots & \ddots & \ddots & \ddots & 0\\
    0 & 0 & \cdots & 0 & a & 1\\
    0 & 0 & \cdots & 0 & 0 & a
    \end{vmatrix}.
    \]

    <p>
      Prove by mathematical induction that
    </p>

    \[
    D_n=a^n
    \]

    <p>
      for every \(n\geq 1\).
    </p>

  </div>

</div>

<div class="proof">

  <div class="proof-title">
    Proof.
  </div>

  <p>
    Let \(M_n=(m_{ij})\) be the \(n\times n\) upper bidiagonal matrix
    whose determinant is \(D_n\). Its entries are defined by
  </p>

  \[
  m_{ij}
  =
  \begin{cases}
  a, & i=j,\\[2mm]
  1, & j=i+1,\\[2mm]
  0, & \text{otherwise}.
  \end{cases}
  \]

</div>

---

[← Back to Notes from Class]({{ '/courses/math-2276/notes-from-class/' | relative_url }})

</div>