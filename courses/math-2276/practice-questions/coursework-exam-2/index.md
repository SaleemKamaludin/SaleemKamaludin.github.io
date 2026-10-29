---
layout: default
title: MATH 2276 — Coursework Exam 2 Practice Questions
permalink: /courses/math-2276/practice-questions/coursework-exam-2/
---

<div class="math2276-notes" markdown="1">

# Coursework Exam 2 (and Final Exam) Practice Questions

**MATH 2276 — Discrete Mathematics**

These questions are provided for additional practice for **Coursework Exam 2** and for revision toward the **Final Examination**.

---

<!-- Practice questions will be added here. -->

<div id="cw2-question-1" class="math-env exercise">
  <div class="math-env-heading">
    <span class="math-env-tag">Question 1</span>
  </div>
  <div class="math-env-body">
    <p><strong>(a)</strong> Let \(G\) be a finite simple bipartite graph with partite sets \(X\) and \(Y\), where \(|X|=|Y|=n\) and \(n\geq 1\). Suppose that every vertex of \(G\) has degree at least \(n/2\). Using Hall's condition, prove that \(G\) has a perfect matching.</p>
  
<p id="cw2-question-1b">
<strong>(b)</strong>
Let \(G\) be a finite bipartite graph with
partite sets \(X\) and \(Y\), where
\(|X|=|Y|\).
</p>

<p>
Suppose that there exists a positive integer
\(r\) such that
</p>

\[
\deg(x)\geq r
\quad\text{for every }x\in X,
\]

<p>and</p>

\[
\deg(y)\leq r
\quad\text{for every }y\in Y.
\]

<p>
Prove that \(G\) has a perfect matching.
</p>

<p id="cw2-question-1c">
<strong>(c)</strong>
Let \(G\) be a finite \(r\)-regular bipartite
graph, where \(r\geq 1\).

Prove, by mathematical induction on \(r\),
that the edge set of \(G\) can be partitioned
into \(r\) pairwise edge-disjoint
perfect matchings.
</p>

<p>
You may use the result that every finite
\(r\)-regular bipartite graph, where
\(r\geq 1\), has a perfect matching.
</p>
</div>
</div>

<style>
#cw2-question-2 ol {
    list-style-type: none;
    counter-reset: part;
    padding-left: 2.5em;
}

#cw2-question-2 ol > li {
    counter-increment: part;
    position: relative;
}

#cw2-question-2 ol > li::before {
    content: "(" counter(part, lower-alpha) ")";
    position: absolute;
    left: -2.5em;
}
</style>
<div id="cw2-question-2" class="math-env exercise">

<div class="math-env-heading">
<span class="math-env-tag">Question 2</span>
</div>

<div class="math-env-body">

<p>
For each of the following families of sets,
construct a system of distinct representatives (SDR),
or prove that no such system exists.
</p>

<ol type="a">

<li>
\(\{a,c\},\ \{b,c,d\},\ \{a,d,e\},\
\{b,e\},\ \{c,d,e\}\).
</li>

<li>
\(\{a,b\},\ \{b,c\},\ \{a,c\},\
\{a,b,c\},\ \{d,e\}\).
</li>

<li>
\(\{p,q,r\},\ \{q,s\},\ \{p,t\},\
\{r,s,u\},\ \{t,u\},\ \{q,u,v\}\).
</li>

<li>
\(\{a,d,e\},\ \{b,e,f\},\ \{a,b,c\},\
\{b,c\},\ \{a,c\},\ \{a,b,c\}\).
</li>

<li>
\(\{a,d,h\},\ \{b,d,e\},\ \{c,e,g\},\
\{a,f,g\},\ \{c,f,h\},\ \{b,g,h\},\
\{d,e,f,i\}\).
</li>

</ol>

</div>
</div>

<div id="cw2-question-3" class="math-env exercise">

<div class="math-env-heading">
<span class="math-env-tag">Question 3</span>
</div>

<div class="math-env-body">

<p id="cw2-question-3a">
<strong>(a)</strong>
Let \(T\) be a tournament of order \(n\geq 3\).
</p>

<p>
Prove that if \(T\) contains a directed cycle,
then \(T\) contains a directed cycle of length \(3\).
</p>

<p>
Hence, deduce that a tournament containing no
directed \(3\)-cycle must be transitive.
</p>


<p id="cw2-question-3b">
<strong>(b)</strong>
Let \(T\) be a tournament of order \(n\geq 1\),
and suppose that the scores of all its vertices
are distinct.
</p>

<p>
Prove, by mathematical induction on \(n\),
that \(T\) is transitive.
</p>

<p>
You must not assume the corollary relating
distinct vertex scores to transitivity.
</p>

<p id="cw2-question-3c">
<strong>(c)</strong>
Let \(T\) be a finite \(r\)-regular tournament,
where \(r\geq 1\).
</p>

<ol style="list-style-type: none; padding-left: 2em;">

<li style="margin-bottom: 0.8em;">
<strong>(i)</strong>
Prove that \(T\) has odd order.
</li>

<li style="margin-bottom: 0.8em;">
<strong>(ii)</strong>
Prove that \(T\) cannot be transitive.
</li>

<li style="margin-bottom: 0.8em;">
<strong>(iii)</strong>
Prove that every vertex of \(T\)
belongs to a directed cycle of length \(3\).
</li>

</ol>
</div>
</div>

<div id="cw2-question-4" class="math-env exercise">

<div class="math-env-heading">
<span class="math-env-tag">Question 4</span>
</div>

<div class="math-env-body">

<p>
For each of the following sequences, determine whether
there exists a tournament having that score sequence
by using Landau's conditions.
</p>

<p>
Justify your answers. If such a tournament exists,
construct one.
</p>

<ol style="list-style-type: none; padding-left: 2em;">

<li style="margin-bottom: 0.8em;">
<strong>(a)</strong> \((3,3,2,1,1)\).
</li>

<li style="margin-bottom: 0.8em;">
<strong>(b)</strong> \((4,4,1,1,0)\).
</li>

<li style="margin-bottom: 0.8em;">
<strong>(c)</strong> \((2,2,2,2,2)\).
</li>

<li style="margin-bottom: 0.8em;">
<strong>(d)</strong> \((4,3,3,0,0)\).
</li>

<li style="margin-bottom: 0.8em;">
<strong>(e)</strong> \((4,2,2,1,1)\).
</li>

</ol>

</div>
</div>

<style>
/* Question 5 preference table spacing */

#cw2-question-5 table td:nth-child(3) {
    padding-left: 60px !important;
}

#cw2-question-5 table th:nth-child(2) {
    padding-left: 60px !important;
}

#cw2-question-5 table td {
    white-space: nowrap;
    padding-top: 6px;
    padding-bottom: 6px;
}

#cw2-question-5 table td:nth-child(1),
#cw2-question-5 table td:nth-child(3) {
    padding-right: 12px !important;
}
</style>
<div id="cw2-question-5" class="math-env exercise">

<div class="math-env-heading">
<span class="math-env-tag">Question 5</span>
</div>

<div class="math-env-body">

<p id="cw2-question-5a">
<strong>(a)</strong>
Five women \(a,b,c,d,e\) are to be matched with
five men \(u,v,w,x,y\). Their preference orderings,
from most preferred to least preferred, are given below.
</p>

<table style="width: auto; margin: 1em auto; border-collapse: collapse;">
<thead>
<tr>
<th colspan="2" style="text-align:center;">Women</th>
<th colspan="2" style="text-align:center;">Men</th>
</tr>
</thead>

<tbody>
<tr>
<td>\(a:\)</td>
<td>\(w>x>v>u>y\)</td>
<td>\(u:\)</td>
<td>\(d>a>b>e>c\)</td>
</tr>

<tr>
<td>\(b:\)</td>
<td>\(y>w>u>v>x\)</td>
<td>\(v:\)</td>
<td>\(c>a>e>d>b\)</td>
</tr>

<tr>
<td>\(c:\)</td>
<td>\(y>w>v>x>u\)</td>
<td>\(w:\)</td>
<td>\(c>a>e>b>d\)</td>
</tr>

<tr>
<td>\(d:\)</td>
<td>\(y>v>u>w>x\)</td>
<td>\(x:\)</td>
<td>\(c>b>a>e>d\)</td>
</tr>

<tr>
<td>\(e:\)</td>
<td>\(u>w>v>y>x\)</td>
<td>\(y:\)</td>
<td>\(b>e>c>a>d\)</td>
</tr>
</tbody>
</table>

<ol style="list-style-type: none; padding-left: 2em;">

<li style="margin-bottom: 0.8em;">
<strong>(i)</strong>
Using the Gale--Shapley Proposal Algorithm,
determine a stable matching that is optimal
for the men.
</li>

<li style="margin-bottom: 0.8em;">
<strong>(ii)</strong>
Is this the only stable matching?
Justify your answer.
</li>

</ol>



<hr style="margin: 1.5em 0;">

<p id="cw2-question-5b">
<strong>(b)</strong>
Five women \(a,b,c,d,e\) are to be matched with
five men \(u,v,w,x,y\). Their preference orderings,
from most preferred to least preferred, are given below.
</p>

<table style="width: auto; margin: 1em auto; border-collapse: collapse;">
<thead>
<tr>
<th colspan="2" style="text-align:center;">Women</th>
<th colspan="2" style="text-align:center; padding-left:60px;">Men</th>
</tr>
</thead>

<tbody>
<tr>
<td>\(a:\)</td>
<td>\(v>u>w>x>y\)</td>
<td style="padding-left:60px;">\(u:\)</td>
<td>\(a>b>e>d>c\)</td>
</tr>

<tr>
<td>\(b:\)</td>
<td>\(v>y>w>u>x\)</td>
<td style="padding-left:60px;">\(v:\)</td>
<td>\(b>e>d>c>a\)</td>
</tr>

<tr>
<td>\(c:\)</td>
<td>\(w>v>y>u>x\)</td>
<td style="padding-left:60px;">\(w:\)</td>
<td>\(a>c>d>b>e\)</td>
</tr>

<tr>
<td>\(d:\)</td>
<td>\(y>w>u>x>v\)</td>
<td style="padding-left:60px;">\(x:\)</td>
<td>\(c>e>b>d>a\)</td>
</tr>

<tr>
<td>\(e:\)</td>
<td>\(u>x>w>v>y\)</td>
<td style="padding-left:60px;">\(y:\)</td>
<td>\(b>e>d>c>a\)</td>
</tr>
</tbody>
</table>

<ol style="list-style-type: none; padding-left: 2em;">

<li style="margin-bottom: 0.8em;">
<strong>(i)</strong>
Using the Gale--Shapley Proposal Algorithm,
determine a stable matching that is optimal
for the men.
</li>

<li style="margin-bottom: 0.8em;">
<strong>(ii)</strong>
Is this the only stable matching?
Justify your answer.
</li>

</ol>

</div>
</div>

---

[← Back to Practice Questions]({{ '/courses/math-2276/practice-questions/' | relative_url }})

</div>