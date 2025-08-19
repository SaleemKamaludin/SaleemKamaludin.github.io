---
layout: default
title: Home
---

Welcome! This site hosts worked solutions for a final-year **Discrete Mathematics** course.  
All mathematics is typeset using LaTeX (via MathJax). For example:

Inline math like \( \chi(G) \le \Delta(G)+1 \) and display math:
$$
\sum_{k=0}^{n} \binom{n}{k} = 2^n.
$$

## Solutions
Below is the newest set of solutions. Click any item to read it.

<ul>
{%- assign items = site.solutions | sort: 'title' -%}
{%- for s in items -%}
  <li><a href="{{ s.url | relative_url }}">{{ s.title }}</a></li>
{%- endfor -%}
</ul>
