---
layout: page
title: "Problem Paper 8 — Solutions "
permalink: /courses/math-1115/problem-paper-solutions/pp8/
description: "Fully worked, step-by-step solutions for Problem Paper 8."
nav_order: 8
---

<section id="pp8-q1i">
  <h3>Question 1(i)</h3>
  <p><strong>Express the following as partial fractions:</strong></p>
  <p>$$\frac{6}{x^{2}+7x+12}.$$</p>

  <details>
    <summary><strong>Solution</strong> (click to expand)</summary>

    <p>Factor the quadratic:
      \(x^{2}+7x+12=(x+4)(x+3)\).
    </p>

    <p>Write
      $$\frac{6}{(x+4)(x+3)}
        = \frac{A}{x+4} + \frac{B}{x+3}.$$
    </p>

    <p>Multiply through by \((x+4)(x+3)\) to clear denominators:
      $$6 = A(x+3) + B(x+4).$$
    </p>

    <p>Let \(x=-3\) to eliminate \(A\): \(6=B(1)\Rightarrow B=6\).<br>
       Let \(x=-4\) to eliminate \(B\): \(6=A(-1)\Rightarrow A=-6\).
    </p>

    <p>Hence,
      $$\boxed{\displaystyle \frac{6}{x^{2}+7x+12}
          = -\frac{6}{x+4} + \frac{6}{x+3}}.$$
    </p>

    <p><em>Check.</em>
      \(-\frac{6}{x+4}+\frac{6}{x+3}
        = \dfrac{-6(x+3)+6(x+4)}{(x+4)(x+3)}
        = \dfrac{6}{(x+4)(x+3)}\).
    </p>
  </details>
</section>



<script>
// Optional: "Expand All" / "Collapse All" helpers for convenience
function setAllDetails(open) {
  document.querySelectorAll('details').forEach(d => d.open = open);
}
</script>

<div class="pp-controls">
  <button onclick="setAllDetails(true)">Expand All</button>
  <button onclick="setAllDetails(false)">Collapse All</button>
</div>

<style>
.pp-nav { margin: 0.5rem 0 1rem; font-size: 0.95rem; }
.pp-nav a { text-decoration: none; }
details { border: 1px solid #e5e7eb; border-radius: 8px; padding: 0.75rem 1rem; margin: 0.75rem 0 1.25rem; background: #fafafa; }
summary { cursor: pointer; font-weight: 600; }
.pp-controls { margin-top: 1.5rem; display: flex; gap: 0.75rem; }
.pp-controls button {
  border: 1px solid #e5e7eb; border-radius: 8px; padding: 0.4rem 0.8rem; background: #f5f5f5; cursor: pointer;
}
.pp-controls button:hover { background: #efefef; }
</style>
