---
layout: page
title: Problem Paper 6 — Solutions
permalink: /courses/math-1115/problem-paper-solutions/pp6/
---

# MATH 1115 — Problem Paper 6: Solutions
<!-- KaTeX: load once per page/layout -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css" integrity="sha384-3UiQGuEI4TTMaFmGIZumfRPtfKQ3trwQE2JgosJxCnGmQpL/lJdjpcHkua0MUl+0" crossorigin="anonymous">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js" integrity="sha384-3zX+qC0xOeQ0l8q0kAO2J3oBv7z1o2w4v7YH7pH6xCwG8g7k3+7O9v/0ZqU3H2wM" crossorigin="anonymous"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/contrib/auto-render.min.js" integrity="sha384-mll67QQbWIoF4Fvb8nL7+8bX2f+v8DkKf9g6Xv5U0b8k2iTq2n7QqN2U6E9mlUQK" crossorigin="anonymous"
        onload="renderMathInElement(document.body,{delimiters:[{left:'$$',right:'$$',display:true},{left:'\\(',right:'\\)',display:false}]});"></script>


<details open>
  <summary><strong>Q4(a)</strong> — Solve the system</summary>

  <h4>Given</h4>
  <p>
    $$\begin{aligned}
      3x - 2y &= 7 \quad &(1)\\
      -\tfrac{3}{2}x + y &= 5 \quad &(2)
    \end{aligned}$$
  </p>

  <h4>Step 1: Make \(y\) the subject of (2)</h4>
  <p>
    $$y = \tfrac{3}{2}x + 5 \quad (3)$$
  </p>

  <h4>Step 2: Substitute (3) into (1)</h4>
  <p>
    $$\begin{aligned}
      3x - 2\!\left(\tfrac{3}{2}x + 5\right) &= 7 \\
      3x - 3x - 10 &= 7 \\
      -10 &= 7
    \end{aligned}$$
  </p>

  <p><strong>Conclusion:</strong> \(-10=7\) is a contradiction, so the system has <strong>no solution</strong>.</p>
</details>








<details open>
  <summary><strong>Q4(b)</strong> — Solve the system</summary>

  <h4>Given</h4>
  <p>
    $$\begin{aligned}
      5y - 2x &= -2 \quad &(1)\\
      4x - 10y &= 4 \quad &(2)
    \end{aligned}$$
  </p>

  <h4>Step 1: Multiply equation (1) by 2</h4>
  <p>
    $$10y - 4x = -4 \quad (3)$$
  </p>

  <h4>Step 2: Compare equations (2) and (3)</h4>
  <p>
    $$\begin{cases}
      -4x + 10y = -4 \\
      4x - 10y = 4
    \end{cases}$$
  </p>

  <p>
    Notice that equation (3) is a scalar multiple of equation (2).  
    Hence, the two equations are <strong>dependent</strong>; they represent the same line.
  </p>

  <p><strong>Conclusion:</strong> There are infinitely many solutions.</p>
</details>




<details open>
  <summary><strong>Q4(c)</strong> — Solve the system</summary>

  <h4>Given</h4>
  <p>
    $$\begin{aligned}
      2x + y &= 1 \quad &(1)\\
      3x + 4y &= 14 \quad &(2)
    \end{aligned}$$
  </p>

  <h4>Step 1: Multiply (1) by 4</h4>
  <p>
    $$8x + 4y = 4 \quad (3)$$
  </p>

  <h4>Step 2: Eliminate \(y\) using (3) − (2)</h4>
  <p>
    $$\begin{aligned}
      (8x + 4y) - (3x + 4y) &= 4 - 14 \\
      5x &= -10 \\
      x &= -2
    \end{aligned}$$
  </p>

  <h4>Step 3: Substitute \(x=-2\) into (2)</h4>
  <p>
    $$\begin{aligned}
      3(-2) + 4y &= 14 \\
      -6 + 4y &= 14 \\
      4y &= 20 \\
      y &= 5
    \end{aligned}$$
  </p>

  <p><strong>Conclusion:</strong> The solution is \(\boxed{(x,y)=(-2,\,5)}\).</p>
</details>



<details open>
  <summary><strong>Q4(d)</strong> — Solve the system</summary>

  <h4>Given</h4>
  <p>
    $$\begin{aligned}
      3x + 2y &= 14 \quad &(1)\\
      x - 2y &= 2 \quad &(2)
    \end{aligned}$$
  </p>

  <h4>Step 1: Add equations (1) and (2)</h4>
  <p>
    $$\begin{aligned}
      (3x + 2y) + (x - 2y) &= 14 + 2 \\
      4x &= 16 \\
      x &= 4
    \end{aligned}$$
  </p>

  <h4> Substitute \(x = 4\) into (2)</h4>
  <p>
    $$\begin{aligned}
      4 - 2y &= 2 \\
      -2y &= -2 \\
      y &= 1
    \end{aligned}$$
  </p>

  <p><strong>Conclusion:</strong> The solution is \(\boxed{(x, y) = (4,\,1)}\).</p>
</details>
























<!-- Place this style block once on the page (above the table is fine) -->
<style>
  .mini-table{
    width:100%;
    max-width:420px;
    border-collapse:separate;
    border-spacing:0;
    margin:.5rem 0 1rem;
    font-variant-numeric: tabular-nums;
  }
  .mini-table caption{
    caption-side: top;
    text-align:left;
    font-weight:600;
    margin-bottom:.25rem;
  }
  .mini-table th,
  .mini-table td{
    padding:.45rem .65rem;
    border-bottom:1px solid #e9eef5;
  }
  .mini-table thead th{
    background:#f7f9fc;
    font-weight:700;
    letter-spacing:.02em;
  }
  .mini-table th{ text-align:right; }
  .mini-table td{ text-align:right; }
  .mini-table tr:nth-child(even) td{ background:#fcfdff; }
  .mini-table tr:hover td{ background:#f4f8ff; }
</style>

<table class="mini-table">
  <caption>Data</caption>
  <thead>
    <tr><th>x</th><th>y</th></tr>
  </thead>
  <tbody>
    <tr><td>2.1</td><td>2.4</td></tr>
    <tr><td>3.2</td><td>3.6</td></tr>
    <tr><td>4.2</td><td>4.8</td></tr>
    <tr><td>5.2</td><td>5.5</td></tr>
    <tr><td>6.0</td><td>7.2</td></tr>
  </tbody>
</table>


  <ol type="i">
    <li>
      \(\displaystyle \sum x_i = 20.7\)
    </li>
    <li>
      \(\displaystyle \sum x_i^{2} = 95.33\)
    </li>
    <li>
      \(\displaystyle \sum y_i = 23.5\)
    </li>
    <li>
      \(\displaystyle \sum y_i^{2} = 123.85\)
    </li>
    <li>
      \(\displaystyle \sum x_i y_i = 108.52\)
    </li>
    <li>
      \(\displaystyle \bar{x}=\frac{\sum x_i}{n}=\frac{20.7}{5}=4.14\)
    </li>
    <li>
      \(\displaystyle \bar{y}=\frac{\sum y_i}{n}=\frac{23.5}{5}=4.7\)
    </li>
  </ol>

  <p><em>Checked:</em> sums and products agree with the table values.</p>




<details open>
  <summary><strong>Q5(b)</strong> — Compute the regression coefficients</summary>

  <p>The simple linear regression model is \( y = a_0 + a_1 x \).</p>

  <h4>Slope \(a_1\)</h4>
  <p>
    $$a_1=\frac{\,n\sum x_i y_i-\left(\sum x_i\right)\left(\sum y_i\right)\,}{\,n\sum x_i^{2}-\left(\sum x_i\right)^2\,}$$
  </p>
  <p>$$
\begin{aligned}
a_1
&= \frac{(5)(108.52)-(20.7)(23.5)}{(5)(95.33)-(20.7)^2} \\[8pt]
&= \frac{542.60-486.45}{476.65-428.49} \\[8pt]
&= \frac{56.15}{48.16} \approx \boxed{1.1659}
\end{aligned}
$$</p>


  <h4>Intercept \(a_0\)</h4>
  <p>Using \(\bar x=4.14\) and \(\bar y=4.7\):</p>
  <p>
    $$\begin{aligned}
      a_0 &= \bar y - a_1 \bar x \\
          &= 4.7 - (1.1659)(4.14) \\
          &\approx \boxed{-0.1268}
    \end{aligned}$$
  </p>

  <p><strong>Regression line (to 4 d.p.):</strong>
    \(\displaystyle \boxed{\hat y = -0.1268 + 1.1659\,x}\).
  </p>
</details>

<details open>
  <summary><strong>Q5(c)</strong> — Regression equation</summary>

  <p>The least-squares line is</p>
  <p>
    $$\hat{y} \;=\; a_0 + a_1 x
      \;=\; -0.1268 \;+\; 1.1659\,x.$$
  </p>

  <p><em>(Coefficients from part (b); values shown to 4 d.p.)</em></p>
</details>




<a class="btn" href="{{ '/courses/math-1115/problem-paper-solutions/' | relative_url }}">← Back to Problem Paper Solutions</a>
&nbsp;
<a class="btn" href="{{ '/courses/math-1115/problem-paper-solutions/pp6/pp6-solutions.pdf' | relative_url }}">Download PDF</a>

