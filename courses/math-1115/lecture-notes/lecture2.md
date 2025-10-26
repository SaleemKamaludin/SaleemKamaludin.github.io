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



[⬅ Back to Lecture Index]({{ '/courses/math-1115/lecture-notes/' | relative_url }})
