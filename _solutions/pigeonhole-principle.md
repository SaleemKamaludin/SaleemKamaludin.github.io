---
layout: default
title: Pigeonhole Principle — Classic Example
---

We use the **Pigeonhole Principle** to show that among any \(n+1\) integers chosen from
\(\{1,2,\dots,2n\}\), two must be consecutive.

**Argument.** Partition the set into \(n\) disjoint “holes”
\(\{1,2\},\{3,4\},\dots,\{2n-1,2n\}\).  
Placing \(n+1\) numbers (the “pigeons”) into \(n\) holes forces one hole to contain two numbers.
Those two numbers differ by exactly \(1\), hence are consecutive. \(\square\)

A polished version with a count:
$$
n+1 \text{ choices} \;\;>\;\; n \text{ holes} \;\;\Rightarrow\;\; \exists\ \text{a hole with}\ \ge 2 \text{ choices.}
$$
