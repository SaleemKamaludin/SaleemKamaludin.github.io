---
layout: default
title: Lecture 3 – Order of Operations and Brackets
permalink: /courses/math-1115/lecture-notes/lecture3/
---

# Lecture 3: Order of Operations and Brackets

## Introduction
Mathematical expressions often contain several operations—addition, subtraction, multiplication, division, and powers.  
To ensure consistency, these operations must be performed in a **specific order**, known as the *Order of Operations*.

<h2 id="exponential-notation">Exponential Notation</h2>

<div id="def-positive-integer-power" style="border: 2px solid #007acc; border-radius: 8px; padding: 1em; background-color: #f9f9f9;">
  <h3 style="margin-top:0;">Definition — Positive Integer Power</h3>
  <p>
    Let \( a \neq 0 \) be a real number and let \( n \in \mathbb{Z}_{>0} \).
    The <em>\(n\)th power of \(a\)</em> is the product of \(n\) identical factors of \(a\):
  </p>
  <p style="text-align:center;">
    \( a^{n} = \underbrace{a \cdot a \cdot \dots \cdot a}_{n\ \text{factors}} \).
  </p>
</div>
































<div style="text-align:center; margin: 1.25rem 0;">
  <!-- Diagram -->
  <svg viewBox="0 0 600 260" role="img" aria-label="Base and exponent diagram" style="max-width:100%; height:auto;">
    <defs>
      <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z"></path>
      </marker>
      <style>
        .exp-text{ font: 700 38px system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif; }
        .label{ font: 700 18px system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif; }
        .blue{ fill:#1f78b4; stroke:#1f78b4; }
        .red{ fill:#e53935; stroke:#e53935; }
        .rule{ stroke:#333; stroke-width:3; }
      </style>
    </defs>

    <!-- a^n -->
    <text x="300" y="120" class="exp-text" text-anchor="middle" fill="#111">
      a<tspan dy="-14" font-size="70%">n</tspan>
      <tspan dy="14"></tspan>
    </text>

    <!-- Exponent label -->
    <text x="460" y="50" class="label blue">Exponent (n)</text>
    <!-- Arrow to exponent -->
    <line x1="430" y1="55" x2="320" y2="85" class="blue" stroke-width="3" marker-end="url(#arrow)"></line>

    <!-- Base label -->
    <text x="90" y="200" class="label red">Base (a)</text>
    <!-- Arrow to base -->
    <line x1="165" y1="195" x2="270" y2="135" class="red" stroke-width="3" marker-end="url(#arrow)"></line>
  </svg>

  <!-- Underbrace statement (rendered by KaTeX/MathJax on the page) -->
  <p style="margin-top:0.75rem; font-size:1.1rem;">
    \( a^{n} \;=\; \underbrace{a \times a \times \cdots \times a}_{n\text{ times}} \)
  </p>
</div>






<p>
  ( \(n\) factors ). The number \(a\) is called the <em>base</em>, and \(n\) is the
  <em>index</em> or <em>exponent</em>.
</p>



<p>
  When \(n=2\), the expression \(a^{2}\) is read “\(a\) squared,” while \(a^{3}\) is read “\(a\) cubed.”
  Special cases include \(0^{n}=0\) and \(1^{n}=1\) for every positive integer \(n\).
</p>



<h2 id="integral-laws-of-indices">Integral Laws of Indices</h2>
<p>The repeated multiplication viewpoint yields the familiar algebraic identities:</p>





<div id="prop-integral-laws">
  <p><strong>Proposition.</strong> For every non-zero real \(a\) and all integers \(m,n\),</p>
  <p style="text-align:center;">
   \( a^{m}a^{n}=a^{m+n}, \quad
       \dfrac{a^{m}}{a^{n}} = a^{\,m-n}, \quad
       \bigl(a^{m}\bigr)^{\!n} = a^{mn}. \)
  </p>
</div>


<p>
  To render \( a^{0} \) and \( a^{-n} \) coherent with Proposition&nbsp;<a href="#prop-integral-laws">Integral Laws</a>, one defines
</p>

<p style="text-align:center;">
  \( a^{0} = 1, \qquad a^{-n} = \dfrac{1}{a^{\,n}} \qquad (n \in \mathbb{Z}_{>0}). \)
</p>


<h2 id="rational-indices-and-roots">Rational Indices and Roots</h2>



<p>
  For positive integers \(m, n\) and any real \(a \ge 0\) when \(n\) is even, the expression
</p>

<p style="text-align:center;">
  \( a^{\tfrac{m}{n}} = \bigl( \sqrt[n]{a} \bigr)^{m} \)
</p>

<p>
  extends the index notation to rational exponents while preserving the identities in
  Proposition&nbsp;<a href="#prop-integral-laws">Integral Laws</a>. Consequently,
</p>

<p style="text-align:center;">
  \( \bigl(a^{\tfrac{m}{n}}\bigr)^{n} = a^{m}, \qquad
     \bigl(a^{r}\bigr)^{s} = a^{rs}, \quad
     \text{for all } r,s \in \mathbb{Q}. \)
</p>


<div id="thm-equality">
  <p><strong>Theorem (Equality of Indices).</strong></p>
</div>
<div style="margin-top:0.7rem; margin-bottom:0.7rem;">
  <p>
    Let \( a > 0 \) and \( r,s \in \mathbb{R} \).  
    If \( a^{r} = a^{s} \), then \( r = s \).
  </p>
</div>

---

**[← Back to Lecture Index](/courses/math-1115/lecture-notes/)**
