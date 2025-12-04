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

<div id="ex-index-equation">
  <p><strong>Example.</strong></p>

  <div style="margin-top:0.7rem;">
    <p>Solve for \(x\) in \( 3^{x} = 27^{\,6 - 3x} \).</p>
  </div>
</div>



<div class="solution">
  <p><strong>Solution.</strong> We wish to determine the real number \(x\) that satisfies</p>

  <p style="text-align:center;">
    \( 3^{x} = 27^{\,6 - 3x}. \)
  </p>
</div>

<p style="margin-top:1rem;">
  <strong>Rewrite all powers with the <em>same</em> base.</strong><br>
  The base \(27\) is itself a power of \(3\) because \(27 = 3^{3}\). Hence
</p>

<p style="text-align:center;">
  \( 27^{\,6 - 3x}
    = \bigl(3^{3}\bigr)^{\,6 - 3x}
    = 3^{\,3(6 - 3x)}
    = 3^{\,18 - 9x}. \)
</p>

<p style="margin-top:0.75rem;">
  <strong>Equate exponents.</strong><br>
  Both sides of the original equation are now written as powers of \(3\).
  Because the exponential function with positive base \(3\) is one-to-one,
</p>

<p style="text-align:center;">
  \( 3^{x} = 3^{\,18 - 9x}
  \quad\Longrightarrow\quad
  x = 18 - 9x. \)
</p>

<p style="margin-top:0.75rem;">
  <strong>Now you can solve the resulting linear equation.</strong><br>
  Bringing like terms together gives
</p>




<p style="text-align:center;">
  \( x + 9x = 18
  \quad\Longrightarrow\quad
  10x = 18
  \quad\Longrightarrow\quad
  x = \frac{18}{10} = \frac{9}{5}. \)
</p>

<p style="margin-top:1rem;">
  The unique real solution is
</p>

<p style="text-align:center; font-size:1.15rem;">
  \( \boxed{\,x = \dfrac{9}{5}\,} \)
</p>


<div class="example">
  <p><strong>Example.</strong> Evaluate \(6^{-3}\).</p>
</div>




<div class="solution">
  <p style="text-align:center;">
    \( 6^{-3}
      = \dfrac{1}{6^{3}} \quad
      \textcolor{red}{\bigl(\text{negative–exponent rule}\bigr)} \)
  </p>
</div>

<div class="solution">
  <p style="text-align:center;">
    \( 6^{-3}
      = \dfrac{1}{6^{3}} \quad
      \textcolor{red}{\bigl(\text{negative–exponent rule}\bigr)} \)
  </p>
</div>

<p style="text-align:center;">
  \( =\, \left(\frac{1}{6}\right)^{3} \quad
     \textcolor{blue}{\bigl(\text{rewriting a reciprocal as a power}\bigr)} \)
</p>


<p style="text-align:center;">
  \( =\, \frac{1}{6} \times \frac{1}{6} \times \frac{1}{6} \quad
     \textcolor{olive}{\bigl(\text{exponent means repeated multiplication}\bigr)} \)
</p>


<p style="text-align:center;">
  \( =\, \frac{1}{216}. \)
</p>























<div class="example">
  <p><strong>Example.</strong> Evaluate \( \displaystyle \left(\frac{2}{5}\right)^{-3} \).</p>
</div>



<div class="solution">

  <p style="text-align:center;">
    \( \left(\frac{2}{5}\right)^{-3} \quad
       \text{is the reciprocal (inverse) of }
       \left(\frac{2}{5}\right)^{3}; \)
  </p>



<p style="text-align:center;">
    \( = \frac{1}{\bigl(\tfrac{2}{5}\bigr)^{3}} \quad
       \textcolor{red}{\bigl(\text{negative–exponent rule}\bigr)} \)
  </p>



<p style="text-align:center;">
    \( = \left(\frac{5}{2}\right)^{3} \quad
       \textcolor{blue}{\bigl(\text{rewriting the reciprocal}\bigr)} \)
  </p>


<p style="text-align:center;">
    \( = \frac{5^{3}}{2^{3}} \quad
       \textcolor{olive}{\bigl(\text{exponent distributes over a fraction}\bigr)} \)
  </p><p style="text-align:center;">
    \( = \frac{5^{3}}{2^{3}} \quad
       \textcolor{olive}{\bigl(\text{exponent distributes over a fraction}\bigr)} \)
  </p><p style="text-align:center;">
    \( = \frac{5^{3}}{2^{3}} \quad
       \textcolor{olive}{\bigl(\text{exponent distributes over a fraction}\bigr)} \)
  </p>

 <p style="text-align:center;">
    \( = \frac{125}{8}. \)
  </p>

</div>























<div class="example">
  <p><strong>Example.</strong> Evaluate \(81^{-\tfrac14}\) and justify each transformation.</p>
</div>


<div class="solution">

 <p style="text-align:center;">
    \( 81^{-\tfrac14}
       = \frac{1}{81^{\tfrac14}} \quad
       \textcolor{red}{\bigl(\text{negative–exponent rule}\bigr)} \)
  </p>


  <p style="text-align:center;">
    \( = \frac{1}{\sqrt[4]{81}} \quad
       \textcolor{blue}{\bigl(\text{fractional–exponent ↔ root rule}\bigr)} \)
  </p>

   <p style="text-align:center;">
    \( = \frac{1}{3}. \)
  </p>

</div>


















<div class="exercise">
  <p><strong>Exercise.</strong></p>
 <ol style="list-style-type: decimal;">
    <li>Evaluate \( 2^{3} \).</li>
    <li>Evaluate \( 5^{-1} \).</li>
    <li>Simplify \( 3^{4} \times 3^{2} \).</li>
    <li>Evaluate \( 8^{\tfrac{2}{3}} \).</li>
    <li>Solve \( 4^{x} = 64 \) for \(x\).</li>
     <li>Evaluate \( \displaystyle \frac{(9^{\tfrac12})^{3}}{3^{-2}} \).</li>
  </ol>
</div>































<h2 id="surds-and-irrational-roots">Surds and Irrational Roots</h2>

<div id="def-surd" class="definition" style="border: 2px solid #007acc; border-radius: 8px; padding: 1em; background-color: #f9f9f9;">
  <p><strong>Definition.</strong> A <em>surd</em> is an irrational number obtainable as a root of a rational number, for instance
    \( \sqrt{2} \), \( \sqrt{3} \), or \( \sqrt[3]{5} \).
  </p>
</div>


<p>
  Because such numbers possess non-terminating, non-recurring decimal expansions, one manipulates them symbolically via the rules inherited from rational exponents.
</p>

<h3 id="surd-simplification">Simplification</h3>

<p>
  An expression like \( \sqrt[n]{b} \) is simplified by extracting the largest perfect \(n\)th power dividing \(b\):
</p>


<p style="text-align:center;">
  \( \sqrt{48} = 4\sqrt{3}, \qquad
     \sqrt{\dfrac{12}{121}} = \dfrac{2\sqrt{3}}{11}. \)
  <span style="color:#c62828; font-style:normal;">
    (Solutions done in class)
  </span>
</p>





<p>
  The procedure relies on unique factorisation of integers.
</p>



<h3 id="surd-multiplication-division">Multiplication and Division</h3>


<p style="text-align:center;">
  \( \sqrt{ab} = \sqrt{a}\,\sqrt{b}, \qquad
     \sqrt{\dfrac{a}{b}} = \dfrac{\sqrt{a}}{\sqrt{b}} \quad (b \neq 0), \)
</p>

<p>
  with analogous identities for higher roots. Caution is necessary: in general
  \( \sqrt{a+b} \neq \sqrt{a} + \sqrt{b} \).
</p>






<div id="ex-product-surd" class="example">
  <p>
    <strong>Example.</strong>
    <span style="color:red;">(Solutions done in class)</span>
  </p>
  <p style="text-align:center;">
    \( \sqrt{8}\,\sqrt{16}\,\sqrt{32}
       = 2^{\left(\tfrac{3}{2} + \tfrac{4}{2} + \tfrac{5}{2}\right)}
       = 2^{6}
       = 64. \)
  </p>
</div>



























<h3 id="additional-surd-examples">Additional Worked Examples on Surds</h3>
<div class="example" style="border:1px solid #ddd; border-radius:8px; padding:0.85rem 1rem; margin:1rem 0; background:#fafafa;">
  <p><strong>Example.</strong> Demonstrate the property \( \sqrt{u}\,\sqrt{v} = \sqrt{uv} \) by evaluating the product \( \sqrt{12}\,\sqrt{3} \).</p>
</div>

<div class="proof" style="margin:0.75rem 0 1.5rem 0;">
  <p>
    Because \(12\) and \(3\) are non-negative, one may combine the radicals to obtain
 \( \sqrt{12 \cdot 3} = \sqrt{36} \). Since \(36\) is a perfect square, the expression
   collapses to the integer \(6\), thereby illustrating the multiplicative rule for
    square roots.
     </p>
</div>

<hr style="margin:2rem 0; border:none; border-top:1px solid #e0e0e0;">









<div class="example" style="border:1px solid #ddd; border-radius:8px; padding:0.85rem 1rem; margin:1rem 0; background:#fafafa;">
  <p><strong>Example.</strong> Express the surd \( \sqrt{72} \) in its simplest form.</p>
</div>



<div class="proof" style="margin:0.75rem 0 1.5rem 0;">
  <p>
    Decomposing \(72\) as \(36 \cdot 2\) reveals the largest square factor. Extracting the square root of
    \(36\) yields \(6\sqrt{2}\), and no further square divisor remains beneath the radical, so
    \(6\sqrt{2}\) is fully simplified.
  </p>
</div>




<div class="example" style="border:1px solid #ddd; border-radius:8px; padding:0.85rem 1rem; margin:1rem 0; background:#fafafa;">
  <p><strong>Example.</strong> Simplify the mixed radical \( \displaystyle \sqrt{\frac{40}{169}} \).</p>
</div>






























<div class="proof" style="margin:0.75rem 0 1.5rem 0;">
  <p>
    Writing \(40 = 4 \cdot 10\) allows one to split the radical:
  </p>


<p style="text-align:center;">
    \( \sqrt{\frac{40}{169}}
       = \sqrt{\frac{4\cdot 10}{169}}
       = \frac{\sqrt{4}\,\sqrt{10}}{\sqrt{169}}
       = \frac{2\sqrt{10}}{13}. \)
  </p>









  <p>
    The denominator is rational and the remaining radicand \(10\) contains no square factor,
    so \( \tfrac{2\sqrt{10}}{13} \) is as simple as possible.
  </p>
</div>






<h3 id="rationalising-conjugate" style="margin-top:1.5rem;">
  Rationalising a Denominator Using the Conjugate
</h3>


<p>
  <strong>Why do we do this?</strong>
  Fractions that contain square roots in the denominator are often awkward to compare or combine.
  By <em>rationalising</em> we rewrite the fraction so the denominator is an ordinary (rational) number.
</p>



<h3>The conjugate idea</h3>

<ul style="list-style-type: disc; padding-left: 1.4rem; line-height: 1.6;">
  <li>
    If the denominator is \( a + b \) we <em>flip</em> the sign in the middle and use \( a - b \).
  </li>
  <li>
    If the denominator is \( a - b \) we use \( a + b \).
  </li>
</ul>

<p style="margin-top:0.6rem;">
  This “sign–flip copy” is called the <strong>conjugate</strong>.
  When we multiply by the conjugate we get a <em>difference of two squares</em>:
</p>

<p style="text-align:center; margin:0.6rem 0;">
  \( (a-b)(a+b) = a^{2} - b^{2} \)
</p>

<p>
  and notice the annoying cross term cancels out!
</p>



























<p style="margin-top:1.2rem; font-weight:700;">Worked example</p>

<p style="text-align:center; margin:0.6rem 0;">
  $$\frac{1}{\color{#1565c0}{3}+\color{#c62828}{\sqrt{2}}}
    \quad\longrightarrow\quad
    \text{Multiply top and bottom by the conjugate }
    (\color{#1565c0}{3}-\color{#c62828}{\sqrt{2}}).$$
</p>

<p style="text-align:center; margin:0.6rem 0;">
  $$\frac{1}{\color{#1565c0}{3}+\color{#c62828}{\sqrt{2}}}
    \times
    \frac{\color{#1565c0}{3}-\color{#c62828}{\sqrt{2}}}
         {\color{#1565c0}{3}-\color{#c62828}{\sqrt{2}}}$$
</p>

<p style="text-align:center; margin:0.6rem 0;">
  $$\frac{\color{#1565c0}{3}-\color{#c62828}{\sqrt{2}}}
          {(\color{#1565c0}{3})^{2}-(\color{#c62828}{\sqrt{2}})^{2}}$$
  <span style="font-size:0.9em;">(using the difference of two squares)</span>
</p>




<p style="text-align:center; margin:0.6rem 0;">
  $$= \frac{\color{#1565c0}{3}-\color{#c62828}{\sqrt{2}}}{9-2}
    = \frac{\color{#1565c0}{3}-\color{#c62828}{\sqrt{2}}}{7}.$$
</p>



<p style="margin-top:0.8rem;">
  <strong>Understanding.</strong>
  Multiplying by the conjugate is <em>useful</em> because we are multiplying by \(1\)
  in a clever disguise, and it <u>guarantees</u> the radical disappears
  from the denominator.
</p>




























<p><strong>Example.</strong> Rationalise the denominator of</p>

<p style="text-align:center; margin:0.6rem 0;">
  $$\frac{1}{\;\color{#1565c0}{5}\;+\;\color{#c62828}{2\sqrt{3}}\;}$$
</p>



<p style="margin-top:1.2rem; font-weight:600;">Identify the conjugate.</p>
<p>
  The denominator has two parts:
  \(\color{#1565c0}{5}\) and \(\color{#c62828}{2\sqrt{3}}\).
  Its conjugate is obtained by flipping the sign:
</p>


<p style="text-align:center; margin:0.6rem 0;">
  $$\color{#1565c0}{5}-\color{#c62828}{2\sqrt{3}}.$$
</p>

<p style="margin-top:1.2rem; font-weight:600;">Multiply by <em>one</em> in disguise.</p>


<p style="text-align:center; margin:0.6rem 0;">
  $$\frac{1}{\color{#1565c0}{5}+\color{#c62828}{2\sqrt{3}}}
    \;\xrightarrow{\;\times
      \frac{\color{#1565c0}{5}-\color{#c62828}{2\sqrt{3}}}{
            \color{#1565c0}{5}-\color{#c62828}{2\sqrt{3}}}\;}
    \frac{1}{1}$$
</p>



<p style="text-align:center; font-size:0.9rem; margin-top:0;">
  (The arrow reminds us we are multiplying by \(1\), so the value is unchanged.)
</p>

<p style="margin-top:1.2rem; font-weight:600;">Perform the multiplication.</p>






<p style="text-align:center; margin:0.6rem 0;">
  $$\frac{1}{\color{#1565c0}{5}+\color{#c62828}{2\sqrt{3}}}
    \cdot
    \frac{\color{#1565c0}{5}-\color{#c62828}{2\sqrt{3}}}{
          \color{#1565c0}{5}-\color{#c62828}{2\sqrt{3}}}
    =
 \frac{\;\color{#1565c0}{5}-\color{#c62828}{2\sqrt{3}}\;}
         {(\color{#1565c0}{5})^{2}-(\color{#c62828}{2\sqrt{3}})^{2}}
    \;\color{#2e7d32}{\bigl(\text{difference of squares}\bigr)}$$
</p>





























---

**[← Back to Lecture Index](/courses/math-1115/lecture-notes/)**
