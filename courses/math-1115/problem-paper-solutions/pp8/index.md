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
  <p>$$\frac{2x^{2}+x+2}{(x+1)^{3}}.$$</p>

  <details>
    <summary><strong>Solution</strong> (click to expand)</summary>

    <p>For a repeated linear factor \((x+1)^{3}\), set</p>
    $$
      \frac{2x^{2}+x+2}{(x+1)^{3}}
      = \frac{A}{x+1} + \frac{B}{(x+1)^{2}} + \frac{C}{(x+1)^{3}}.
    $$
    <p>Clearing denominators gives</p>
    $$
      2x^{2}+x+2 = A(x+1)^{2}+B(x+1)+C.
    $$

    <p>Substitute \(x=-1\) to find \(C\):
      \(2(-1)^{2}+(-1)+2 = 3 \Rightarrow C=3\).
    </p>

    <p>Expand and compare coefficients:</p>
    $$
      A(x+1)^{2}+B(x+1)+C
      = A x^{2} + (2A+B)x + (A+B+C).
    $$
    $$
      \begin{cases}
      A = 2,\\
      2A+B = 1,\\
      A+B+C = 2
      \end{cases}
      \;\Rightarrow\; B=-3,\; C=3.
    $$

    <p>Therefore,</p>
    $$
      \boxed{
        \frac{2x^{2}+x+2}{(x+1)^{3}}
        = \frac{2}{x+1} - \frac{3}{(x+1)^{2}} + \frac{3}{(x+1)^{3}}
      }.
    $$
  </details>
</section>







































<section id="pp8-q1iv">
  <h3>Question 1(iv)</h3>
  <p><strong>Express the following as partial fractions:</strong></p>
  <p>
    $$\frac{4x^{2}+4}{(x-1)^{2}(x+1)}.$$
  </p>

  <details>
    <summary><strong>Solution</strong> (click to expand)</summary>

    <p>Because \((x-1)\) is repeated, write
      $$
      \frac{4x^{2}+4}{(x-1)^{2}(x+1)}
      = \frac{A}{x-1}+\frac{B}{(x-1)^{2}}+\frac{C}{x+1}.
      $$
      Clearing denominators:
      $$
      4x^{2}+4 = A(x-1)(x+1) + B(x+1) + C(x-1)^{2}.
      $$
    </p>

    <p>Let \(x=1\): \(4(1)^{2}+4 = 2B \Rightarrow 8=2B \Rightarrow B=4\).</p>
    <p>Let \(x=-1\): \(4(-1)^{2}+4 = 4C \Rightarrow 8=4C \Rightarrow C=2\).</p>

    <p>Use any convenient \(x\) (e.g. \(x=0\)) to find \(A\):  
      \(4 = A(-1)(1) + 4(1) + 2(1)\Rightarrow 4 = -A+6 \Rightarrow A=2.\)
    </p>

    <p>Therefore,
      $$
      \boxed{\displaystyle
      \frac{4x^{2}+4}{(x-1)^{2}(x+1)}
      = \frac{2}{x-1}+\frac{4}{(x-1)^{2}}+\frac{2}{x+1}}
      $$
      (coefficients check: \(A+C=4\), \(B-2C=0\), \(-A+B+C=4\)).
    </p>
  </details>
</section>

































<section id="pp8-q1v">
  <h3>Question 1(v)</h3>
  <p><strong>Express the following as partial fractions:</strong></p>
  <p>$$\frac{34}{(3x+5)(x^{2}+1)}.$$</p>

  <details>
    <summary><strong>Solution</strong> (click to expand)</summary>

    <p>Since \(x^{2}+1\) is irreducible over \(\mathbb{R}\), write</p>
    $$
      \frac{34}{(3x+5)(x^{2}+1)}
      = \frac{A}{3x+5} + \frac{Bx+C}{x^{2}+1}.
    $$
    <p>Clearing denominators gives</p>
    $$
      34 = A(x^{2}+1) + (Bx+C)(3x+5).
    $$

    <p>Let \(x=-\tfrac{5}{3}\) (so \(3x+5=0\)):</p>
    $$
      34 = A\!\left(\left(-\tfrac{5}{3}\right)^{2}+1\right)
         = A\!\left(\tfrac{25}{9}+1\right)
         = A\!\left(\tfrac{34}{9}\right)
         \;\Rightarrow\; A=9.
    $$

    <p>Now compare coefficients in</p>
    $$
      34=(A+3B)x^{2} + (5B+3C)x + (A+5C).
    $$
    $$
      \begin{cases}
        A+3B=0,\\
        5B+3C=0,\\
        A+5C=34,
      \end{cases}
      \qquad\Rightarrow\qquad
      A=9,\; B=-3,\; C=5.
    $$

    <p>Therefore,</p>
    $$
      \boxed{\displaystyle
      \frac{34}{(3x+5)(x^{2}+1)}
      = \frac{9}{3x+5} + \frac{-3x+5}{x^{2}+1}}
      \quad\text{(equivalently } \frac{9}{3x+5} + \frac{5-3x}{x^{2}+1}\text{)}.
    $$
  </details>
</section>





























<section id="pp8-q1vi">
  <h3>Question 1(vi)</h3>
  <p><strong>Express the following as partial fractions:</strong></p>
  <p>
    $$\frac{x^{4}+8}{x^{3}+8x}.$$
  </p>

  <details>
    <summary><strong>Solution</strong> (click to expand)</summary>

    <p>The degree of the numerator exceeds that of the denominator, so first do
       polynomial division:
    </p>
    $$
      \frac{x^{4}+8}{x^{3}+8x}
      = x \;+\; \frac{\,8-8x^{2}\,}{x^{3}+8x}
      = x \;+\; \frac{\,8-8x^{2}\,}{x(x^{2}+8)}.
    $$

    <p>Decompose the remainder term using
      $$\frac{8-8x^{2}}{x(x^{2}+8)}=\frac{A}{x}+\frac{Bx+C}{x^{2}+8}.$$
      Clearing denominators gives
      $$8-8x^{2}=A(x^{2}+8)+(Bx+C)x=(A+B)x^{2}+Cx+8A.$$
      Equating coefficients:
      $$
      \begin{cases}
      -8=A+B,\\
      0=C,\\
      8=8A
      \end{cases}
      \;\Rightarrow\;
      A=1,\quad B=-9,\quad C=0.
      $$
    </p>

    <p>Therefore,
      $$
      \boxed{\displaystyle
      \frac{x^{4}+8}{x^{3}+8x}
      = x \;+\; \frac{1}{x} \;-\; \frac{9x}{x^{2}+8}}
      $$
      (equivalently \(x + \dfrac{1}{x} - \dfrac{9x}{x^{2}+8}\)).
    </p>
  </details>
</section>




<!-- Question 2 -->
<div style="border:1px solid #444; border-radius:16px; padding:1.2rem 1.5rem; margin:1.5rem 0; position:relative;">

  <div style="position:absolute; top:-0.95rem; left:1.2rem; background:#fff; border:1px solid #444; border-radius:16px; padding:0.15rem 0.9rem; font-size:1.1rem;">
    <strong>Question 2</strong>
  </div>

  <p style="margin-top:0.8rem; font-size:1.1rem;">
    (a)&nbsp; Simplify the following:
  </p>

  <ol style="margin:0.4rem 0 0.8rem 3rem; list-style:none; font-size:1.05rem;">
    <li style="margin-bottom:0.35rem;">
      (i)&nbsp; Simplify \( \log a^{2} + \log b^{3} + \log c^{4} \).
    </li>
    <li>
      (ii)&nbsp; Simplify \( -\log x + \log 10 \).
    </li>
  </ol>

  <p style="margin-top:0.8rem; font-size:1.1rem;">
    (b)&nbsp; Evaluate the following without using calculators:
  </p>

  <ol style="margin:0.4rem 0 0 3rem; list-style:none; font-size:1.05rem;">
    <li style="margin-bottom:0.35rem;">
      (i)&nbsp; \( \displaystyle \frac{\log_{3} 81}{\log_{4} 64} \)
    </li>
    <li>
      (ii)&nbsp; \( \log_{81} 22 \times \log_{2} 243 \times \log_{22} 16 \)
    </li>
  </ol>

</div>


<details>
  <summary><strong>Solution</strong> (click to expand)</summary>

  <p><strong>(i)</strong> We combine the logarithms using the product rule.</p>

  <p style="text-align:center;">
    \( \log a^{2} + \log b^{3} + \log c^{4}
      = \log\bigl(a^{2} \times b^{3} \times c^{4}\bigr)
      = \log\bigl(a^{2} b^{3} c^{4}\bigr). \)
  </p>

  <p><strong>(ii)</strong> We rewrite the expression as a difference of logs and then apply the quotient rule.</p>

  <p style="text-align:center;">
    \( \log(10x) - \log x
      = \log\!\left(\dfrac{10x}{x}\right)
      = \log 10. \)
  </p>

</details>



<details>
  <summary><strong>Solution</strong> (click to expand)</summary>

  <!-- (b)(i) -->
  <p><strong>(i)</strong> Evaluate \( \displaystyle \frac{\log_{3} 81}{\log_{4} 64} \).</p>

  <p style="text-align:center;">
    \( \displaystyle
      \frac{\log_{3} 81}{\log_{4} 64}
      = \frac{\log_{3} 3^{4}}{\log_{4} 4^{3}}
      = \frac{4\log_{3} 3}{3\log_{4} 4}
      = \frac{4}{3}.
    \)
  </p>

  <!-- (b)(ii) -->
  <p style="margin-top:0.75rem;">
    <strong>(ii)</strong> Evaluate
    \( \log_{81} 22 \times \log_{2} 243 \times \log_{22} 16 \).
  </p>

  <p>
    Use the change–of–base formula \( \log_{a} b = \dfrac{\log b}{\log a} \):
  </p>

  <p style="text-align:center;">
    \( \displaystyle
      \log_{81} 22 \times \log_{2} 243 \times \log_{22} 16
      = \frac{\log 22}{\log 81} \times \frac{\log 243}{\log 2} \times \frac{\log 16}{\log 22}.
    \)
  </p>

  <p>
    The factors \( \log 22 \) cancel, leaving
  </p>

  <p style="text-align:center;">
    \( \displaystyle
      = \frac{\log 243 \,\log 16}{\log 81 \,\log 2}.
    \)
  </p>

  <p>
    Now write each number as a power:
    \( 243 = 3^{5} \), \( 81 = 3^{4} \), \( 16 = 2^{4} \).
  </p>

  <p style="text-align:center;">
    \( \displaystyle
      \frac{\log 3^{5} \,\log 2^{4}}{\log 3^{4} \,\log 2}
      = \frac{5\log 3 \cdot 4\log 2}{4\log 3 \cdot \log 2}
      = 5.
    \)
  </p>

</details>




























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
