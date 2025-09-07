---
layout: default
title: "Session 2: Quadratics"
---

# Session 2: Quadratics

See below for slides

## Resources
- [Download the slides (PDF)]({{ '/assets/math-clinic/session-02/Quadratics_1.pdf' | relative_url }})

<!-- Embedded PDF viewer (with a fallback link) -->
<object
  data="{{ '/assets/math-clinic/session-02/Quadratics_1.pdf' | relative_url }}"
  type="application/pdf"
  width="100%"
  height="800">
  <p>PDF preview not available in this browser.
     <a href="{{ '/assets/math-clinic/session-02/Quadratics_1.pdf' | relative_url }}">Download the PDF</a>.
  </p>
</object>






---
 Session 2: Quadratics
---


Session 2: Extra Practice Solutions
---

# Session 2: Solutions

[← Back to Math Clinic](/courses/math-clinic/)

_Last updated: September 6, 2025_

Below are worked solutions in rendered math (MathJax).

---

## Q1. Successive Percentage Changes
A jacket marked at \$240 is discounted by 25%, then a further 10% off the reduced price. Find the final price and the single equivalent discount.

**Solution.** The first discount gives  
$$240(1-0.25)=240(0.75)=180.$$  
The second discount acts on \$180:  
$$180(1-0.10)=180(0.9)=162.$$  
Final price: **\$162**. Overall reduction: \$240 − \$162 = \$78, so  
$$\frac{78}{240}=0.325=32.5\%,$$  
i.e., a **single 32.5%** discount.

---

## Q2. Simple vs. Compound Interest
\$8{,}000 for 3 years at 6% p.a. (a) simple interest; (b) compounded quarterly; (c) the effective annual rate with quarterly compounding.

**Solution.** Simple interest:  
$$A_{\text{simple}}=8000(1+0.06\cdot3)=8000\cdot1.18=9440.$$
Quarterly compounding uses \(n=4\) periods/year, rate \(0.06/4=0.015\), over \(12\) periods:  
$$A_{\text{quarterly}}=8000(1+0.015)^{12}\approx 8000(1.19561817)\approx 9564.95.$$
Effective annual rate:  
$$(1+0.06/4)^4-1\approx 6.1364\%.$$

---

## Q3. Break-Even and Profit
Fixed costs \$12,000; variable cost \$18 per unit; price \$30. (i) Break-even quantity and revenue; (ii) profit at $q=1500$.

**Solution.**  
Revenue $R(q)=30q$, cost $C(q)=12000+18q$.  
Break-even from $R=C$: $30q=12000+18q \Rightarrow q=1000$, so revenue is $30{,}000$.  
At $q=1500$:
$\pi = R-C = 30(1500) - (12000+18\cdot1500) = 45000 - 39000 = 6000$.  
Profit: **\$6,000**.


---

## Q4. Maximize Revenue for Linear Demand
Inverse demand $p=200-0.5q$. (a) Find $q$ that maximizes $R$. (b) Find price and max revenue. (c) $MR$ at $q=100$.

**Solution.** $R(q)=q(200-0.5q)=200q-0.5q^2$ is a concave quadratic with vertex at  
$$q^\ast=\frac{-b}{2a}=\frac{-200}{2(-0.5)}=200.$$
Then $p^\ast=200-0.5(200)=100$ and $R_{\max}=200\cdot100=20{,}000$.  
Marginal revenue $R'(q)=200-q$, so $R'(100)=100$.


---

## Q5. Elasticity and Revenue
Demand $q(p)=5000\,p^{-1.5}$. (a) Compute absolute elasticity. (b) Approximate revenue change if price rises by $1\%$.

**Solution.**  
Elasticity $E=\left|\dfrac{p}{q}\dfrac{dq}{dp}\right|=1.5$ (constant), hence elastic.  
A $1\%$ price rise $\Rightarrow$ about $1.5\%$ drop in quantity; net revenue change $\approx 1\%-1.5\%=-0.5\%$.  
Revenue **falls by ≈0.5%**.


---

## Q6. Exponential Growth Timing
\(A(t)=12000\,e^{0.08t}\). Time to reach 20,000?

**Solution.**  
\(20000=12000e^{0.08t}\Rightarrow e^{0.08t}=5/3\Rightarrow t=\dfrac{\ln(5/3)}{0.08}\approx 6.39\) years.
