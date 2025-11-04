---
layout: default
title: Lecture 2 — Manipulating Numbers, Ratios, Percentages and Proportions
permalink: /courses/math-1115/lecture-notes/lecture2/
---

# Lecture 2: Manipulating Numbers, Ratios, Percentages and Proportions



## Negative Numbers

Numbers that are less than 0 are called *negative numbers*.  
Handling their signs correctly is essential across algebra, calculus, and even data science.


<h3 id="addsub">Addition and Subtraction</h3>

<div style="border: 2px solid #007acc; border-radius: 8px; padding: 1em; background-color: #f9f9f9;">
  <h4>Sign Rules for <span style="font-family: KaTeX_Main;">+</span> and <span style="font-family: KaTeX_Main;">−</span> <em>(Quick Reference)</em></h4>
  <table style="width:100%; border-collapse: collapse;">
    <thead>
      <tr style="border-bottom: 2px solid #007acc;">
        <th align="left">Operation</th>
        <th align="left">Rule (Result Sign)</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>+ or −</td><td>Positive ± Positive → Positive or Negative as usual</td></tr>
      <tr><td></td><td>Positive + (Negative) → Subtract, keep sign of larger magnitude</td></tr>
      <tr><td></td><td>Negative + (Negative) → Negative</td></tr>
    </tbody>
  </table>
</div>






<div style="border-left: 4px solid #007acc; background-color: #f4faff; padding: 1em; border-radius: 6px; margin: 1em 0;">
  <strong>Example</strong><br><br>
  Compute \( 9 - 15 \).<br><br>
  Because \( |15| > |9| \), subtract and keep the sign of 15:
  <p style="text-align:center;">\( 9 - 15 = -(15 - 9) = -6 \)</p>
</div>



<div style="border-left:4px solid #d97706; background:#fff7ed; padding:1em; border-radius:6px; margin:1em 0;">
  <strong>Example A – Common exam mistakes</strong><br><br>
  Evaluate \( -4 - ( -5 - 2) \). Be careful: distribute the outer minus first.
  <p style="text-align:center; margin-top:0.6em;">\( -4 -(-5 - 2) = -4 + 5 + 2 = 3 \).</p>
</div>















<h3 id="ex-neg1">Exercise</h3>
<p>Find the values of:</p>
<ol type="a">
  <li>\(9 - 15\)</li>
  <li>\(13 - 4\)</li>
  <li>\(15 - 7 - 8\)</li>
  <li>\(-4 - (-5)\)</li>
  <li>\(8 - (-6)\)</li>
</ol>
<span style="font-style: normal;">
  (Answers appear in the <a href="#answers">Appendix</a>.)
</span>






<h3 id="subsec-muldiv">Multiplication and Division</h3>
<p>
The product or quotient of two numbers has a <strong>positive</strong> sign if the signs are the same, and a <strong>negative</strong> sign if they differ.
</p>




<table>
  <tr><td>(+)&middot;(+) = +</td><td>(−)&middot;(−) = +</td><td>(+)&middot;(−) = −</td></tr>
  <tr><td>(+)/(+) = +</td><td>(−)/(−) = +</td><td>(+)/(−) = −</td></tr>
</table>



<div style="border-left:4px solid #007acc; background:#f4faff; padding:1em; border-radius:6px; margin:1em 0;">
  <strong>Example</strong><br><br>
  <p style="text-align:center;">
    \( 7 \times (-3) = -21, \qquad
    \frac{-14}{2} = -7, \qquad
    \frac{20}{-5} = -4 \)
  </p>
</div>



<h2 id="sec-modulus">The Modulus (Absolute Value) Function</h2>
<p>For any real number \(x\),</p>
<p style="text-align:center;">
  \(
  |x|=\begin{cases}
  x, & x \ge 0,\\
  -x, & x < 0.
  \end{cases}
  \)
</p>
<p>Thus \( |x| \) measures the distance of \(x\) from \(0\) on the real line.</p>


<h3>Core Properties</h3>
<p>For all real \(x, y\) with \(y \ne 0\),</p>
<p style="text-align:center;">
  \(
  |xy| = |x|\,|y|, \qquad
  \left|\frac{x}{y}\right| = \frac{|x|}{|y|}, \qquad
  |x - y| = |y - x|.
  \)
</p>


<div style="border-left:4px solid #007acc; background:#f4faff; padding:1em; border-radius:6px; margin:1em 0;">
  <strong>Example</strong>
  <p style="text-align:center; margin-top:0.6em;">
    \( \left|\frac{-24}{3}\right| = \frac{|{-24}|}{|3|} = 8,\quad
       |8 - 15| = |15 - 8| = 7. \)
  </p>
</div>

<div style="border-left:4px solid #6366f1; background:#eef2ff; padding:1em; border-radius:6px; margin:1em 0;">
  <strong>Example B – Nested absolute values</strong><br><br>
  Evaluate \( \left|\,5 - |7 - 12|\,\right| \).<br><br>
  First \( |7 - 12| = 5 \), so the expression becomes \( \left|\,5 - 5\,\right| = 0 \).
</div>

<h3>Exercise</h3>
<p>Compute:</p>
<ol type="a">
  <li>\( |4| + |-2| \)</li>
  <li>\( \left|\dfrac{15}{-5}\right| \)</li>
  <li>\( |7 - 17| \)</li>
</ol>




<h2 id="sec-fractions">Fractions and Reciprocals</h2>
<p>
A fraction \( \dfrac{p}{q} \) consists of a <em>numerator</em> \( p \) and a
<em>denominator</em> \( q \), where \( q \ne 0 \).
</p>


<h3>Types</h3>
<ul>
  <li><strong>Proper:</strong> \( |p| < |q| \) (value \(< 1\)), e.g. \( \tfrac{3}{4} \).</li>
  <li><strong>Improper:</strong> \( |p| > |q| \), e.g. \( \tfrac{4}{3} \).</li>
  <li><strong>Mixed:</strong> integer \( \pm \) proper fraction, e.g. \( 4\tfrac{2}{3} \).</li>
</ul>


<h3>Conversions (Recap)</h3>
<p>To convert \( 8\dfrac{3}{4} \) into an improper fraction:</p>
<p style="text-align:center;">
  \( 8 + \frac{3}{4} = \frac{8 \cdot 4 + 3}{4} = \frac{35}{4}. \)
</p>

<h3>Addition and Subtraction</h3>
<p>Find a common denominator:</p>
<p style="text-align:center;">
  \( \frac{25}{2} + \frac{38}{7}
  = \frac{175 + 76}{14}
  = \frac{251}{14}
  = 17\dfrac{13}{14}. \)
</p>


<h3>Reciprocals and Division</h3>
<p>
The <em>reciprocal</em> of \( x \), where \( x \ne 0 \), is \( \dfrac{1}{x} \).  
To divide fractions, multiply by the reciprocal of the second:
</p>
<p style="text-align:center;">
  \( \frac{2}{5} \div \frac{3}{4}
  = \frac{2}{5} \cdot \frac{4}{3}
  = \frac{8}{15}. \)
</p>
































<div style="border-left:4px solid #007acc; background:#f4faff; padding:1.2em; border-radius:6px; margin:1.2em 0;">
  <strong>Example</strong><br><br>
  <em>Evaluate:</em><br><br>

  <strong>a)</strong> \( \dfrac{3}{4} \times 1\dfrac{7}{9} \)<br>
  Convert to improper fraction:<br>
  <p style="text-align:center;">
    \( 1\dfrac{7}{9} = \frac{16}{9}, \quad \text{so} \quad \frac{3}{4} \times \frac{16}{9} = \frac{48}{36} = \frac{4}{3}. \)
  </p>

  <hr style="border:none; border-top:1px solid #ccc;">

  <strong>b)</strong> \( 3\dfrac{1}{4} - 2\dfrac{3}{8} \)<br>
  Convert to improper fractions:<br>
  <p style="text-align:center;">
    \( 3\dfrac{1}{4} = \frac{13}{4}, \quad 2\dfrac{3}{8} = \frac{19}{8} \)<br>
    \( \frac{13}{4} - \frac{19}{8} = \frac{26}{8} - \frac{19}{8} = \frac{7}{8}. \)
  </p>

  <hr style="border:none; border-top:1px solid #ccc;">

  <strong>c)</strong> \( 7\dfrac{2}{3} + 6\dfrac{3}{5} \)<br>
  Convert to improper fractions:<br>
  <p style="text-align:center;">
    \( 7\dfrac{2}{3} = \frac{23}{3}, \quad 6\dfrac{3}{5} = \frac{33}{5} \)<br>
    \( \frac{23}{3} + \frac{33}{5} = \frac{115}{15} + \frac{99}{15} = \frac{214}{15} = 14\dfrac{4}{15}. \)
  </p>

  <hr style="border:none; border-top:1px solid #ccc;">

  <strong>d)</strong> \( \dfrac{5}{8} \div \dfrac{15}{32} \)<br>
  Multiply by the reciprocal:<br>
  <p style="text-align:center;">
    \( \frac{5}{8} \div \frac{15}{32} = \frac{5}{8} \times \frac{32}{15} = \frac{160}{120} = \frac{4}{3}. \)
  </p>
</div>


<h2 id="sec-decimals">Decimals to Fractions</h2>
<p>Write the decimal digits over an appropriate power of 10 and simplify:</p>
<p style="text-align:center;">
  \( 0.28 = \frac{28}{10^2} = \frac{7}{25}, \qquad
     1.25 = 1 + \frac{25}{100} = 1\dfrac{1}{4}. \)
</p>






<div style="border-left:4px solid #10b981; background:#ecfdf5; padding:1em; border-radius:6px; margin:1em 0;">
  <strong>Example C – Repeating decimals</strong><br><br>
  Express \( 0.\overline{36} \) as a fraction.<br><br>
  Let \( x = 0.\overline{36} \). Then \( 100x = 36.\overline{36} \).<br><br>
  Subtract:<br>
  <p style="text-align:center;">
    \( 99x = 36 \implies x = \frac{36}{99} = \frac{4}{11}. \)
  </p>
</div>


<h2 id="sec-factorials">Factorials</h2>


<div style="border-left:4px solid #007acc; background:#f4faff; padding:1em; border-radius:6px; margin:1em 0;">
  <strong>Example</strong>
  <p style="text-align:center; margin-top:0.6em;">
    \( \frac{7!}{5!} = 7 \cdot 6 = 42. \)
  </p>
</div>


<div style="border-left:4px solid #0ea5e9; background:#f0f9ff; padding:1em; border-radius:6px; margin:1em 0;">
  <strong>Example D – Simplifying large ratios</strong><br><br>
  Show that \( \dfrac{10!}{8!\,2!} = 45 \).
  <p style="text-align:center; margin-top:0.6em;">
    \( \frac{10 \cdot 9 \cdot 8!}{8! \cdot 2!}
    = \frac{10 \cdot 9}{2}
    = 45. \)
  </p>
</div>


<h2 id="sec-ratios">Ratios, Proportions and Percentages</h2>
<p>
A <em>ratio</em> compares two quantities, \( a : b = \dfrac{a}{b} \).  
A <em>proportion</em> is an equality of two ratios.
</p>


<h3>Direct and Inverse Proportions</h3>
<p>
Quantities \( x \) and \( y \) are <strong>directly proportional</strong> (\( x \propto y \)) if
\( \dfrac{x}{y} \) is constant;
<strong>inversely proportional</strong> (\( x \propto \tfrac{1}{y} \)) if \( xy \) is constant.
</p>


<h3>Percentages</h3>
<p>
A percentage is a fraction with denominator \( 100 \).
</p>

<div style="border-left:4px solid #22c55e; background:#f0fdf4; padding:1em; border-radius:6px; margin:1em 0;">
  <strong>Example</strong><br><br>
  A chair bought for \$1000 is sold for \$1200.<br>
  Profit \( = 1200 - 1000 = 200 \); hence
  <p style="text-align:center; margin-top:0.6em;">
    \( \text{Profit \%} = \frac{200}{1000} \times 100 = 20\%.\)
  </p>
</div>



[⬅ Back to Lecture Index]({{ '/courses/math-1115/lecture-notes/' | relative_url }})
