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

---

[← Back to Notes from Class]({{ '/courses/math-2276/notes-from-class/' | relative_url }})

</div>