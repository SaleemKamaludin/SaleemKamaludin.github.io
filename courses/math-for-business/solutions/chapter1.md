---
layout: default
title: Chapter 1 Solutions
permalink: /courses/math-for-business/solutions/chapter1/
---

# Chapter 1 — Worked Solutions
[← Back to course page](/courses/math-for-business/) · [Solutions index](/courses/math-for-business/solutions/)

Below, click to expand each solution. Math renders with MathJax.

---

## Contents
- [Problem 1 — Linear demand & revenue maximization](#p1)
- [Problem 2 — Break-even with cost & price](#p2)
- [Problem 3 — Simple vs compound interest](#p3)

---

## <a id="p1"></a>Problem 1 — Linear demand & revenue maximization

<details>
<summary><strong>Show/Hide Solution</strong></summary>

A market has linear demand $p = a- bq$ with $a,b>0$. Revenue is $R(q)=pq$.

Find the output $q^*$ that maximizes revenue and the corresponding price $p^*$.

**Solution.** 

Revenue:
$$
R(q) = (a-bq)\,q = aq - bq^2.
$$
Differentiate and set to zero:
$$
R'(q) = a - 2bq = 0 \;\;\Rightarrow\;\; q^*=\frac{a}{2b}.
$$
Second derivative $R''(q)=-2b<0$ (since $b>0$), so $q^*$ gives a max.
Then
$$
p^* = a - bq^* = a - b\left(\frac{a}{2b}\right)=\frac{a}{2}.
$$
Thus revenue is maximized at $q^*=\dfrac{a}{2b}$ and $p^*=\dfrac{a}{2}$.


</details>

---

## <a id="p2"></a>Problem 2 — Break-even with cost & price

<details>
<summary><strong>Show/Hide Solution</strong></summary>

**Prompt.** A firm sells at price \(p\) per unit with linear cost \(C(q)=F+cq\) where \(F>0\), \(c>0\).
Find the break-even quantity \(q_{\text{BE}}\).

**Solution.** Profit \(\pi(q)=pq - (F+cq)=(p-c)q - F\).
Break-even when \(\pi(q)=0\):
$$
(p-c)q_{\text{BE}} - F = 0
\quad\Rightarrow\quad
q_{\text{BE}}=\frac{F}{\,p-c\,}.
$$
A finite break-even requires \(p>c\).

</details>

---

## <a id="p3"></a>Problem 3 — Simple vs compound interest

<details>
<summary><strong>Show/Hide Solution</strong></summary>

**Prompt.** Compare the future values of principal \(P\) at annual nominal rate \(r\) over \(t\) years under  
(i) simple interest, and (ii) compounding \(m\) times per year.

**Solution.**
Simple interest:
$$
\text{FV}_{\text{simple}} = P\,(1+rt).
$$
Compound \(m\) times:
$$
\text{FV}_{\text{compound}} = P\left(1+\frac{r}{m}\right)^{mt}.
$$
For \(r>0\) and \(t>0\), \(\text{FV}_{\text{compound}}\ge \text{FV}_{\text{simple}}\) with strict inequality unless \(m=0\) (not meaningful) or \(rt\) is negligibly small.

</details>

---

*Add more problems by copying a `<details>…</details>` block and changing the IDs and titles.*
