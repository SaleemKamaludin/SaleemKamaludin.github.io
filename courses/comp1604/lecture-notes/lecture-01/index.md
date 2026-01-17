---
layout: default
title: "COMP 1604 — Lecture 1: Logic (Statements & Truth Tables)"
permalink: /courses/comp1604/lecture-notes/lecture-01/
---

# COMP 1604 — Lecture 1: Logic (Statements & Truth Tables)
<section class="notes-block" id="valid-invalid-arguments">
  <style>
    /* Minimal, drop-in styling scoped to this section */
    #valid-invalid-arguments{
      margin: 1.25rem 0;
      padding: 0;
    }
    #valid-invalid-arguments .subhead{
      font-size: 1.25rem;
      font-weight: 650;
      margin: 0 0 .5rem;
      color:#111;
    }
    #valid-invalid-arguments p{
      margin: .65rem 0;
      color:#222;
    }
    #valid-invalid-arguments em{ font-style: italic; }
    #valid-invalid-arguments .example{
      border: 1px solid #e6e8eb;
      border-radius: .75rem;
      padding: 1rem 1.1rem;
      background: #fff;
      margin: 1rem 0;
    }
    #valid-invalid-arguments .example-header{
      display:flex;
      align-items: baseline;
      gap:.5rem;
      margin-bottom:.6rem;
    }
    #valid-invalid-arguments .example-tag{
      display:inline-block;
      font-size:.78rem;
      padding:.15rem .5rem;
      border-radius:999px;
      border:1px solid #d0d7de;
      background:#f6f8fa;
      color:#57606a;
      white-space: nowrap;
    }
    #valid-invalid-arguments .example-title{
      margin:0;
      font-weight:650;
      color:#111;
      font-size:1rem;
    }
    #valid-invalid-arguments .argument{
      border-left: 3px solid #4c8bf5;
      padding: .75rem 1rem;
      margin: .75rem 0;
      background: rgba(76,139,245,.08);
      border-radius: .5rem;
    }
    #valid-invalid-arguments .argument .line{
      margin: .25rem 0;
    }
    #valid-invalid-arguments .therefore{
      font-weight: 650;
      letter-spacing: .02em;
    }
    #valid-invalid-arguments .form{
      margin-top:.75rem;
      padding:.75rem 1rem;
      border:1px dashed #d0d7de;
      border-radius:.6rem;
      background:#fafafa;
    }
    #valid-invalid-arguments .form .line{
      margin:.25rem 0;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
      font-size: .95rem;
    }
  </style>

  <h3 class="subhead">Valid and Invalid Arguments</h3>









   <p>
    In mathematics and logic, an <em>argument</em> is not a dispute. It is a sequence of statements
    (the <em>premises</em>) ending in a <em>conclusion</em>. In this section we study how to decide whether
    an argument is <em>valid</em>—that is, whether the conclusion follows <em>necessarily</em> from the premises.
    Importantly, validity depends only on the <em>form</em> of an argument, not on its content.
  </p>

  <div class="example" id="ex-socrates-mp">
    <div class="example-header">
      <span class="example-tag">Example</span>
      <h4 class="example-title">A simple argument and its form</h4>
    </div>





 <p style="margin:.25rem 0 .5rem;">Consider the argument:</p>

    <div class="argument" aria-label="Argument">
      <div class="line">If Socrates is a man, then Socrates is mortal.</div>
      <div class="line">Socrates is a man.</div>
      <div class="line therefore">∴ Socrates is mortal.</div>
    </div>




 <p style="margin:.75rem 0 .5rem;">This argument has the abstract form</p>





    <div class="form" aria-label="Abstract form">
      <div class="line">\(p \to q\)</div>
      <div class="line">\(p\)</div>
      <div class="line">∴ \(q\)</div>
    </div>
  </div>
</section>













 <div class="callout">
    When considering the abstract form of an argument, think of \(p\) and \(q\) as variables for which
    statements may be substituted.
  </div>



<div class="definition" id="def-valid-argument-form">
    <div class="definition-header">
      <span class="definition-tag">Definition</span>
      <h4 class="definition-title">Valid argument form</h4>
    </div>








<h4 class="subsubhead">Key terminology</h4>


















    

