---
layout: page
title: Problem Paper 3 — Solutions
permalink: /courses/math-1115/problem-paper-solutions/pp3/
---

[← Back to Problem Papers]({{ '/courses/math-1115/problem-paper-solutions/' | relative_url }})

## Q1. Solve for $$x$$ in $$16^{x+1}=8^{-x}$$.

<div class="problem">
  <div class="prompt">Solve the exponential equation.</div>
</div>

<details class="solution">
  <summary><strong>Solution</strong></summary>

Write both sides with base \(2\).

 $$16=2^{4}$$, so
 $$
  16^{x+1}=(2^{4})^{x+1}=2^{4(x+1)}=2^{4x+4}.
 $$
 \(8=2^{3}\), so
  $$
  8^{-x}=(2^{3})^{-x}=2^{-3x}.
$$

Hence
$$
2^{\,4x+4}=2^{-3x}.
$$
Equal bases imply equal exponents:
$$
4x+4=-3x \ \Rightarrow\ 7x=-4 \ \Rightarrow\ x=-\frac{4}{7}.
$$

$$\boxed{x=-\dfrac{4}{7}}.$$
</details>






## Q2. Solve for $$x$$ in $$5^{\,2x-3}=125^{\,x+1}$$.

<div class="problem">
  <div class="prompt">Solve the exponential equation.</div>
</div>

<details class="solution">
  <summary><strong>Solution</strong></summary>

Recognize that $$125=5^{3}$$.
$$
125^{\,x+1}=(5^{3})^{\,x+1}=5^{\,3(x+1)}.
$$

Thus the equation becomes
$$
5^{\,2x-3}=5^{\,3(x+1)}.
$$

Since the bases are identical and positive, set the exponents equal:
$$
2x-3=3(x+1).
$$

Expand and solve:
$$
2x-3=3x+3 \quad\Longrightarrow\quad -x=6 \quad\Longrightarrow\quad x=-6.
$$

$$\boxed{x=-6}$$
</details>



## Q3. Solve for  $$x $$ in  $$4^{\,2x+1}=8^{\,x-2} $$.

<div class="problem">
  <div class="prompt">Solve the exponential equation.</div>
</div>

<details class="solution">
  <summary><strong>Solution</strong></summary>

Express both sides with base \(2\).

 $$4=2^{2} $$, so
  $$
  4^{\,2x+1}=(2^{2})^{\,2x+1}=2^{2(2x+1)}=2^{\,4x+2}.
  $$

 $$8=2^{3} $$, so
  $$
  8^{\,x-2}=(2^{3})^{\,x-2}=2^{\,3(x-2)}=2^{\,3x-6}.
  $$

Now compare exponents:
 $$
2^{\,4x+2}=2^{\,3x-6}\quad\Longrightarrow\quad 4x+2=3x-6.
 $$

Simplify:
 $$
x+2=-6 \quad\Longrightarrow\quad x=-8.
 $$

$$\boxed{x=-8}$$
</details>














## Q4. Express each in simplified surd form (if possible), where \(r,s,q\in \mathbb{R}^{+}\).

<div class="problem">
  <div class="prompt">Simplify each expression.</div>
  <ol type="a" class="options">
    <li>\(5\sqrt{32}-2\sqrt{18}\)</li>
    <li>\(\sqrt{\dfrac{q^{4}}{49}}\)</li>
    <li>\(4\sqrt{50}-6\sqrt{18}\)</li>
    <li>\(-\sqrt[4]{256\,r^{10}s^{14}}\)</li>
    <li>\(-5\sqrt{45}+3\sqrt{20}\)</li>
  </ol>
</div>

<details class="solution">
  <summary><strong>Solution</strong></summary>

<strong>(a)</strong> Factor perfect squares:
$$
\sqrt{32}=4\sqrt{2},\qquad \sqrt{18}=3\sqrt{2}.
$$
Hence
$$
5\sqrt{32}-2\sqrt{18}=5(4\sqrt{2})-2(3\sqrt{2})
=20\sqrt{2}-6\sqrt{2}
=\boxed{14\sqrt{2}}.
$$

<br>

<strong>(b)</strong> Use \(\sqrt{\tfrac{A}{B}}=\tfrac{\sqrt{A}}{\sqrt{B}}\) and \(49=7^{2}\):
$$
\sqrt{\frac{q^{4}}{49}}=\frac{\sqrt{q^{4}}}{\sqrt{49}}
=\frac{q^{2}}{7}
=\boxed{\frac{q^{2}}{7}}.
$$

<br>

<strong>(c)</strong> Pull perfect squares:
$$
\sqrt{50}=5\sqrt{2},\qquad \sqrt{18}=3\sqrt{2}.
$$
Thus
$$
4\sqrt{50}-6\sqrt{18}
=4(5\sqrt{2})-6(3\sqrt{2})
=20\sqrt{2}-18\sqrt{2}
=\boxed{2\sqrt{2}}.
$$

<br>

<strong>(d)</strong> Extract perfect fourth powers (\(256=4^{4}\); \(r^{10}=(r^{2})^{4}\cdot r^{2}\); \(s^{14}=(s^{3})^{4}\cdot s^{2}\)):
$$
-\sqrt[4]{256\,r^{10}s^{14}}
=-\,4\,\sqrt[4]{(r^{2})^{4}(s^{3})^{4}\,r^{2}s^{2}}
=-4\,r^{2}s^{3}\,\sqrt[4]{r^{2}s^{2}}
=\boxed{-4\,r^{2}s^{3}\,\sqrt[4]{r^{2}s^{2}}}.
$$


<br>

<strong>(e)</strong> Extract perfect squares:
$$
\sqrt{45}=3\sqrt{5},\qquad \sqrt{20}=2\sqrt{5}.
$$
Therefore
$$
-5\sqrt{45}+3\sqrt{20}
=-5(3\sqrt{5})+3(2\sqrt{5})
=-15\sqrt{5}+6\sqrt{5}
=\boxed{-9\sqrt{5}}.
$$
</details>

