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












<section id="pp8-q1ii">
  <h3>Question 1(ii)</h3>
  <p><strong>Express the following as partial fractions:</strong></p>
  <p>
    $$\frac{4x-1}{(x+2)(x-6)}.$$
  </p>

  <details>
    <summary><strong>Solution</strong> (click to expand)</summary>

    <p>Assume constants \(A,B\) such that
      $$\frac{4x-1}{(x+2)(x-6)}=\frac{A}{x+2}+\frac{B}{x-6}.$$
      Clearing denominators gives
      $$4x-1=A(x-6)+B(x+2).$$
    </p>

    <p>Let \(x=6\) to eliminate \(A\):
      \(4(6)-1 = 8B \Rightarrow 23=8B \Rightarrow B=\dfrac{23}{8}\).
      <br>
      Let \(x=-2\) to eliminate \(B\):
      \(4(-2)-1 = -8A \Rightarrow -9=-8A \Rightarrow A=\dfrac{9}{8}\).
    </p>

    <p>Therefore,
      $$\boxed{\displaystyle
        \frac{4x-1}{(x+2)(x-6)}
        = \frac{9}{8}\cdot\frac{1}{x+2} + \frac{23}{8}\cdot\frac{1}{x-6}
      }.$$
    </p>

    <p><em>Check.</em>
      \(\dfrac{9}{8(x+2)}+\dfrac{23}{8(x-6)}
       = \dfrac{9(x-6)+23(x+2)}{8(x+2)(x-6)}
       = \dfrac{(9x-54)+(23x+46)}{8(x+2)(x-6)}
       = \dfrac{32x-8}{8(x+2)(x-6)}
       = \dfrac{4x-1}{(x+2)(x-6)}.\)
    </p>
  </details>
</section>














<section id="pp8-q1iii">
  <h3>Question 1(iii)</h3>
  <p><strong>Express the following as partial fractions:</strong></p>
  <p>
    $$\frac{2x^{2}+x+2}{(x+1)^{3}}.$$
  </p>

  <details>
    <summary><strong>Solution</strong> (click to expand)</summary>

    <p>For a repeated linear factor \((x+1)^{3}\), set
      $$\frac{2x^{2}+x+2}{(x+1)^{3}}
        = \frac{A}{x+1} + \frac{B}{(x+1)^{2}} + \frac{C}{(x+1)^{3}}.$$
      Clearing denominators gives
      $$2x^{2}+x+2 = A(x+1)^{2}+B(x+1)+C.$$
    </p>

    <p>Substitute \(x=-1\) to find \(C\):
      \(2(-1)^{2}+(-1)+2 = C \Rightarrow 2-1+2=3 \Rightarrow C=3.\)
    </p>

    <p>Expand and compare coefficients:
      \[
      A(x+1)^{2}+B(x+1)+C
      = A x^{2} + (2A+B)x + (A+B+C).
      \]
      Hence
      \[
      \begin{cases}
      A = 2,\\
      2A+B = 1 \Rightarrow B = -3,\\
      A+B+C = 2 \quad(\text{checks with } C=3).
      \end{cases}
      \]
    </p>

    <p>Therefore,
      $$\boxed{\displaystyle
        \frac{2x^{2}+x+2}{(x+1)^{3}}
        = \frac{2}{x+1} - \frac{3}{(x+1)^{2}} + \frac{3}{(x+1)^{3}}
      }.$$
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
