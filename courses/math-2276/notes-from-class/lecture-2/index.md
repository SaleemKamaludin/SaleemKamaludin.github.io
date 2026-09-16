---
layout: default
title: MATH 2276 — Lecture 2 Notes
permalink: /courses/math-2276/notes-from-class/lecture-2/
---

<div class="math2276-notes">

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

---

[← Back to Notes from Class]({{ '/courses/math-2276/notes-from-class/' | relative_url }})

</div>