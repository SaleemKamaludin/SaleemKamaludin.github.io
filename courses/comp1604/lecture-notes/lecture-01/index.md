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
    an argument is <em>valid</em>, that is, whether the conclusion follows <em>necessarily</em> from the premises.
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

<section class="notes-block" id="def-valid-argument-form">
  <style>
    /* Minimal, drop-in styling scoped to this definition */
    #def-valid-argument-form{ margin:1rem 0 1.1rem; }
    #def-valid-argument-form .box{
      border:1px solid #e6e8eb;
      border-radius:.75rem;
      padding:1rem 1.1rem;
      background:#fff;
    }
    #def-valid-argument-form .box-header{
      display:flex;
      align-items:baseline;
      gap:.5rem;
      margin-bottom:.6rem;
    }
    #def-valid-argument-form .tag{
      display:inline-block;
      font-size:.78rem;
      padding:.15rem .5rem;
      border-radius:999px;
      border:1px solid #d0d7de;
      background:#f6f8fa;
      color:#57606a;
      white-space:nowrap;
    }
    #def-valid-argument-form .title{
      margin:0;
      font-weight:650;
      font-size:1rem;
      color:#111;
    }
    #def-valid-argument-form p{ margin:.55rem 0 0; color:#222; }
    #def-valid-argument-form em{ font-style:italic; }
  </style>

  <div class="box">
    <div class="box-header">
      <span class="tag">Definition</span>
      <h5 class="title">Valid argument form</h5>
    </div>

    <p>
      An argument form is called <em>valid</em> if, and only if, whenever statements are substituted in such a way that
      all the premises are true, the conclusion is also true.
    </p>
  </div>
</section>









<h4 class="subsubhead">Key terminology</h4>







  <div class="box" id="def-argument-premise-conclusion">
    <div class="box-header">
      <h5 class="box-title">Arguments, premises, and conclusions</h5>
    </div>




 <p class="lead">
      An <em>argument</em> is a sequence of statements, and an <em>argument form</em> is a sequence of statement forms.
      All statements in an argument (and all statement forms in an argument form), except for the final one, are called
      the <em>premises</em> (also called <em>assumptions</em> or <em>hypotheses</em>).
      The final statement (or statement form) is called the <em>conclusion</em>.
    </p>



 <p>      The symbol \( \therefore \), read “therefore,” is normally placed just before the conclusion.    </p>

    
 <p>
      To say that an <em>argument form</em> is <em>valid</em> means that no matter what particular statements are substituted
      for the statement variables in its premises, if the resulting premises are all true, then the conclusion is also true.
      To say that an <em>argument</em> is <em>valid</em> means that its form is valid.
    </p>
  </div>









  <p>
    When an argument is valid and its premises are true, the truth of the conclusion is said to be
    <em>inferred</em> or <em>deduced</em> from the truth of the premises.
    If a conclusion “ain’t necessarily so,” then it isn’t a valid deduction.
  </p>










 <hr class="divider" />





  <h4 class="subsubhead">Testing an argument form for validity</h4>




 <div class="box" id="rem-truth-table-validity-test">
    <div class="box-header">
      <h5 class="box-title">Truth-table test for validity</h5>
    </div>



    <p class="lead">To test whether an argument form is valid, proceed as follows.</p>




      <ol>
      <li>Identify the premises and the conclusion of the argument form.</li>
      <li>Construct a truth table showing the truth values of all the premises and the conclusion.</li>
      <li>
        A row of the truth table in which all the premises are true is called a <em>critical row</em>.
        If there is a critical row in which the conclusion is false, then it is possible for an argument of the given form
        to have true premises and a false conclusion, and so the argument form is <em>invalid</em>.
        If the conclusion in <em>every</em> critical row is true, then the argument form is <em>valid</em>.
      </li>
    </ol>









































  <section class="notes-block" id="def-valid-argument-form">
  <style>
    /* Minimal, drop-in styling scoped to this definition */
    #def-valid-argument-form{ margin:1rem 0 1.1rem; }
    #def-valid-argument-form .box{
      border:1px solid #e6e8eb;
      border-radius:.75rem;
      padding:1rem 1.1rem;
      background:#fff;
    }
    #def-valid-argument-form .box-header{
      display:flex;
      align-items:baseline;
      gap:.5rem;
      margin-bottom:.6rem;
    }
    #def-valid-argument-form .tag{
      display:inline-block;
      font-size:.78rem;
      padding:.15rem .5rem;
      border-radius:999px;
      border:1px solid #d0d7de;
      background:#f6f8fa;
      color:#57606a;
      white-space:nowrap;
    }
    #def-valid-argument-form .title{
      margin:0;
      font-weight:650;
      font-size:1rem;
      color:#111;
    }
    #def-valid-argument-form p{ margin:.55rem 0 0; color:#222; }
    #def-valid-argument-form em{ font-style:italic; }
  </style>

  <div class="box">
    <div class="box-header">
      <span class="tag">Definition</span>
      <h5 class="title">Valid argument form</h5>
    </div>

  <p>
      An argument form is called <em>valid</em> if, and only if, whenever statements are substituted in such a way that
      all the premises are true, the conclusion is also true.
    </p>
  </div>
</section>

































<section class="notes-block" id="key-terminology">
  <style>
    /* Minimal, drop-in styling scoped to this section */
    #key-terminology{ margin:1.25rem 0; }
    #key-terminology .subsubhead{
      font-size:1.05rem;
      font-weight:650;
      margin:0 0 .5rem;
      color:#111;
    }
    #key-terminology p{ margin:.65rem 0; color:#222; }
    #key-terminology em{ font-style:italic; }

    #key-terminology .box{
      border:1px solid #e6e8eb;
      border-radius:.75rem;
      padding:1rem 1.1rem;
      background:#fff;
      margin:.9rem 0 1.1rem;
    }
    #key-terminology .box-header{
      display:flex;
      align-items:baseline;
      gap:.5rem;
      margin-bottom:.6rem;
    }
    #key-terminology .tag{
      display:inline-block;
      font-size:.78rem;
      padding:.15rem .5rem;
      border-radius:999px;
      border:1px solid #d0d7de;
      background:#f6f8fa;
      color:#57606a;
      white-space:nowrap;
    }
    #key-terminology .box-title{
      margin:0;
      font-weight:650;
      font-size:1rem;
      color:#111;
    }
    #key-terminology .box p{ margin:.55rem 0; }
    #key-terminology .box p:first-of-type{ margin-top:0; }
  </style>

  <h4 class="subsubhead">Key terminology</h4>


  <div class="box" id="def-argument-premise-conclusion">
    <div class="box-header">
      <span class="tag">Definition</span>
      <h5 class="box-title">Arguments, premises, and conclusions</h5>
    </div>








 <p>
      An <em>argument</em> is a sequence of statements, and an <em>argument form</em> is a sequence of statement forms.
      All statements in an argument (and all statement forms in an argument form), except for the final one, are called
      the <em>premises</em> (also called <em>assumptions</em> or <em>hypotheses</em>).
      The final statement (or statement form) is called the <em>conclusion</em>.
    </p>







 <p>
      The symbol \( \therefore \), read “therefore,” is normally placed just before the conclusion.
    </p>







<p>
      To say that an <em>argument form</em> is <em>valid</em> means that no matter what particular statements are substituted
      for the statement variables in its premises, if the resulting premises are all true, then the conclusion is also true.
      To say that an <em>argument</em> is <em>valid</em> means that its form is valid.
    </p>
  </div>



  <p>
    When an argument is valid and its premises are true, the truth of the conclusion is said to be
    <em>inferred</em> or <em>deduced</em> from the truth of the premises.
    If a conclusion “ain’t necessarily so,” then it isn’t a valid deduction.
  </p>
</section>





<section class="notes-block" id="validity-test">
  <style>
    /* Minimal, drop-in styling scoped to this section */
    #validity-test{ margin:1.25rem 0; }
    #validity-test .subsubhead{
      font-size:1.05rem;
      font-weight:650;
      margin:0 0 .5rem;
      color:#111;
    }
    #validity-test p{ margin:.65rem 0; color:#222; }
    #validity-test em{ font-style:italic; }

    #validity-test .box{
      border:1px solid #e6e8eb;
      border-radius:.75rem;
      padding:1rem 1.1rem;
      background:#fff;
      margin:.9rem 0 1.1rem;
    }
    #validity-test .box-header{
      display:flex;
      align-items:baseline;
      gap:.5rem;
      margin-bottom:.6rem;
    }
    #validity-test .tag{
      display:inline-block;
      font-size:.78rem;
      padding:.15rem .5rem;
      border-radius:999px;
      border:1px solid #d0d7de;
      background:#f6f8fa;
      color:#57606a;
      white-space:nowrap;
    }
    #validity-test .box-title{
      margin:0;
      font-weight:650;
      font-size:1rem;
      color:#111;
    }
    #validity-test ol{
      margin:.5rem 0 0;
      padding-left:1.25rem;
    }
    #validity-test li{ margin:.45rem 0; }
    #validity-test .divider{
      border:0;
      border-top:1px solid #e6e8eb;
      margin:1.25rem 0;
    }
  </style>

  <hr class="divider" />
  
  <h4 class="subsubhead">Testing an argument form for validity</h4>



































<section class="notes-block" id="ex-validity-truthtable">
  <style>
    /* Minimal, drop-in styling scoped to this example+solution */
    #ex-validity-truthtable{ margin:1.25rem 0; }
    #ex-validity-truthtable p{ margin:.65rem 0; color:#222; }
    #ex-validity-truthtable em{ font-style:italic; }

    #ex-validity-truthtable .box{
      border:1px solid #e6e8eb;
      border-radius:.75rem;
      padding:1rem 1.1rem;
      background:#fff;
      margin:.9rem 0 1.1rem;
    }
    #ex-validity-truthtable .box-header{
      display:flex;
      align-items:baseline;
      gap:.5rem;
      margin-bottom:.6rem;
    }
    #ex-validity-truthtable .tag{
      display:inline-block;
      font-size:.78rem;
      padding:.15rem .5rem;
      border-radius:999px;
      border:1px solid #d0d7de;
      background:#f6f8fa;
      color:#57606a;
      white-space:nowrap;
    }
    #ex-validity-truthtable .title{
      margin:0;
      font-weight:650;
      font-size:1rem;
      color:#111;
    }

    #ex-validity-truthtable .arg{
      border-left: 3px solid #4c8bf5;
      padding: .75rem 1rem;
      margin: .75rem 0;
      background: rgba(76,139,245,.08);
      border-radius: .5rem;
    }
    #ex-validity-truthtable .arg .line{
      margin:.25rem 0;
    }
    #ex-validity-truthtable .therefore{
      font-weight:650;
      letter-spacing:.02em;
    }

    #ex-validity-truthtable .math-block{
      margin:.75rem 0;
      padding:.75rem 1rem;
      border:1px dashed #d0d7de;
      border-radius:.6rem;
      background:#fafafa;
    }

    #ex-validity-truthtable .muted{
      color:#555;
      font-size:.95rem;
    }
  </style>








 <!-- Example -->
  <div class="box">
    <div class="box-header">
      <span class="tag">Example</span>
      <h5 class="title">Determining validity or invalidity</h5>
    </div>



   <p>
      Determine whether the following argument form is <b>valid</b> or <b>invalid</b> by drawing a truth table.
      Clearly indicate which columns represent the premises and which represent the conclusion, and justify your answer.
    </p>



  <p class="muted">
      When constructing the truth table, it is sufficient to record the truth value of the conclusion only in those rows
      where all the premises are true (the <em>critical rows</em>), since the remaining rows are irrelevant to validity.
    </p>
  </div>



<!-- Solution -->
  <div class="box">
    <div class="box-header">
      <span class="tag">Solution</span>
      <h5 class="title">Truth-table check</h5>
    </div>




























 <div class="arg" aria-label="Argument form">
      <div class="line">\(p \to (q \lor \lnot r)\)</div>
  <div class="line">\(q \to (p \land r)\)</div>
      <div class="line therefore">∴ \(p \to r\)</div>
    </div>



<p>
      We construct a truth table for the premises
      <span class="math-block">\(p \to (q \lor \lnot r)\quad \text{and} \quad q \to (p \land r),\)</span>
      and for the conclusion
   <span class="math-block">\(p \to r.\)</span>
    </p>






    <p>
      Although there are several rows in which both premises and the conclusion are true, there exists at least one
      <em>critical row</em> in which the premises are true and the conclusion is false. Hence, it is possible for an argument
      of this form to have true premises and a false conclusion.
    </p>
  </div>
</section>







  
<section class="notes-block" id="truth-table-and-modus">
  <style>
    /* Minimal, drop-in styling scoped to this whole block */
    #truth-table-and-modus{ margin:1.25rem 0; }
    #truth-table-and-modus p{ margin:.65rem 0; color:#222; }
    #truth-table-and-modus em{ font-style:italic; }

    #truth-table-and-modus .box{
      border:1px solid #e6e8eb;
      border-radius:.75rem;
      padding:1rem 1.1rem;
      background:#fff;
      margin:.9rem 0 1.1rem;
    }
    #truth-table-and-modus .box-header{
      display:flex;
      align-items:baseline;
      gap:.5rem;
      margin-bottom:.6rem;
    }
    #truth-table-and-modus .tag{
      display:inline-block;
      font-size:.78rem;
      padding:.15rem .5rem;
      border-radius:999px;
      border:1px solid #d0d7de;
      background:#f6f8fa;
      color:#57606a;
      white-space:nowrap;
    }
    #truth-table-and-modus .title{
      margin:0;
      font-weight:650;
      font-size:1rem;
      color:#111;
    }

    /* Table styling */
    #truth-table-and-modus .table-wrap{
      overflow-x:auto;
      -webkit-overflow-scrolling:touch;
      margin:.5rem 0 0;
      border:1px solid #e6e8eb;
      border-radius:.65rem;
    }
    #truth-table-and-modus table{
      width:100%;
      border-collapse:collapse;
      min-width: 860px; /* helps prevent cramped columns */
      font-size:.95rem;
    }
    #truth-table-and-modus th, #truth-table-and-modus td{
      padding:.55rem .6rem;
      border-bottom:1px solid #e6e8eb;
      text-align:center;
      vertical-align:middle;
      white-space:nowrap;
    }
    #truth-table-and-modus thead th{
      background:#f6f8fa;
      font-weight:650;
      color:#111;
    }
    #truth-table-and-modus tbody tr:last-child td{ border-bottom:0; }
    #truth-table-and-modus .bad{
      font-weight:750;
      color:#b42318;
    }

    /* Small math block box */
    #truth-table-and-modus .math-block{
      margin:.75rem 0 0;
      padding:.75rem 1rem;
      border:1px dashed #d0d7de;
      border-radius:.6rem;
      background:#fafafa;
    }

    #truth-table-and-modus h3{
      font-size:1.25rem;
      font-weight:650;
      margin:1.5rem 0 .5rem;
      color:#111;
    }
  </style>






<!-- Truth table (from the solution) -->
  <div class="box" id="tt-invalid-arg">
    <div class="box-header">
      <span class="tag">Truth table</span>
      <h5 class="title">Critical row shows invalidity</h5>
    </div>





 <div class="table-wrap" aria-label="Truth table for validity test">
      <table>
        <thead>
          <tr>
            <th>\(p\)</th>
            <th>\(q\)</th>
            <th>\(r\)</th>
            <th>\(\lnot r\)</th>
            <th>\(q \lor \lnot r\)</th>
            <th>\(p \land r\)</th>
            <th>\(p \to (q \lor \lnot r)\)</th>
            <th>\(q \to (p \land r)\)</th>
            <th>\(p \to r\)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>T</td><td>T</td><td>T</td><td>F</td><td>T</td><td>T</td><td>T</td><td>T</td><td>T</td></tr>
          <tr><td>T</td><td>T</td><td>F</td><td>T</td><td>T</td><td>F</td><td>T</td><td>F</td><td>F</td></tr>
          <tr><td>T</td><td>F</td><td>T</td><td>F</td><td>F</td><td>T</td><td>F</td><td>T</td><td>T</td></tr>
          <tr><td>T</td><td>F</td><td>F</td><td>T</td><td>T</td><td>F</td><td>T</td><td>T</td><td class="bad">F</td></tr>
          <tr><td>F</td><td>T</td><td>T</td><td>F</td><td>T</td><td>F</td><td>T</td><td>F</td><td>T</td></tr>
          <tr><td>F</td><td>T</td><td>F</td><td>T</td><td>T</td><td>F</td><td>T</td><td>F</td><td>T</td></tr>
          <tr><td>F</td><td>F</td><td>T</td><td>F</td><td>F</td><td>F</td><td>T</td><td>T</td><td>T</td></tr>
          <tr><td>F</td><td>F</td><td>F</td><td>T</td><td>T</td><td>F</td><td>T</td><td>T</td><td>T</td></tr>
        </tbody>
      </table>
    </div>
  </div>




  <!-- Remark -->
  <div class="box" id="rem-invalid-example">
    <div class="box-header">
      <span class="tag">Remark</span>
      <h5 class="title">Conclusion</h5>
    </div>
 <p>
      There exists a critical row in which both premises are true while the conclusion is false.
      Therefore, this argument form is <em>invalid</em>.
    </p>
  </div>



<!-- New subsection -->
  <h3>Modus Ponens and Modus Tollens</h3>

  <!-- Definition: Syllogism -->
  <div class="box" id="def-syllogism">
    <div class="box-header">
<span class="tag">Definition</span>
      <h5 class="title">Syllogism</h5>
    </div>

<p>
      An argument form consisting of two premises and a conclusion is called a <em>syllogism</em>.
      The first premise is called the <em>major premise</em>, and the second premise is called the <em>minor premise</em>.
    </p>
  </div>



 <!-- Definition: Modus Ponens -->
  <div class="box" id="def-modus-ponens">
    <div class="box-header">
      <span class="tag">Definition</span>
      <h5 class="title">Modus Ponens</h5>
    </div>



    <p>
      The most famous form of syllogism in logic is called <em>modus ponens</em>. It has the form
    </p>




   <div class="math-block" aria-label="Modus ponens form">
      <p style="margin:0;">\(p \to q,\)</p>
      <p style="margin:0;">\(p,\)</p>
      <p style="margin:0; font-weight:650;">∴ \(q.\)</p>
    </div>
  </div>


<p>
It is instructive to verify that modus ponens is a valid argument form. Doing so helps confirm the agreement between
    the formal definition of validity and our intuitive understanding of logical reasoning.
 </p>




<p>
 To verify its validity, we construct a truth table for the premises and the conclusion.
  </p>
</section>























<section class="notes-block" id="modus-ponens-table-and-mt">
  <style>
    /* Minimal, drop-in styling scoped to this block */
    #modus-ponens-table-and-mt{ margin:1.25rem 0; }
    #modus-ponens-table-and-mt p{ margin:.65rem 0; color:#222; }
    #modus-ponens-table-and-mt em{ font-style:italic; }

    #modus-ponens-table-and-mt .box{
      border:1px solid #e6e8eb;
      border-radius:.75rem;
      padding:1rem 1.1rem;
      background:#fff;
      margin:.9rem 0 1.1rem;
    }
    #modus-ponens-table-and-mt .box-header{
      display:flex;
      align-items:baseline;
      gap:.5rem;
      margin-bottom:.6rem;
    }
    #modus-ponens-table-and-mt .tag{
      display:inline-block;
      font-size:.78rem;
      padding:.15rem .5rem;
      border-radius:999px;
      border:1px solid #d0d7de;
      background:#f6f8fa;
      color:#57606a;
      white-space:nowrap;
    }
    #modus-ponens-table-and-mt .title{
      margin:0;
      font-weight:650;
      font-size:1rem;
      color:#111;
    }

    /* Table styling */
    #modus-ponens-table-and-mt .table-wrap{
      overflow-x:auto;
      -webkit-overflow-scrolling:touch;
      margin:.5rem 0 0;
      border:1px solid #e6e8eb;
      border-radius:.65rem;
    }
    #modus-ponens-table-and-mt table{
      width:100%;
      border-collapse:collapse;
      min-width: 520px;
      font-size:.95rem;
    }
    #modus-ponens-table-and-mt th,
    #modus-ponens-table-and-mt td{
      padding:.55rem .6rem;
      border-bottom:1px solid #e6e8eb;
      text-align:center;
      vertical-align:middle;
      white-space:nowrap;
    }
    #modus-ponens-table-and-mt thead th{
      background:#f6f8fa;
      font-weight:650;
      color:#111;
    }
    #modus-ponens-table-and-mt tbody tr:last-child td{ border-bottom:0; }

    /* Simple math block */
    #modus-ponens-table-and-mt .math-block{
      margin:.75rem 0 0;
      padding:.75rem 1rem;
      border:1px dashed #d0d7de;
      border-radius:.6rem;
      background:#fafafa;
    }

    #modus-ponens-table-and-mt .divider{
      border:0;
      border-top:1px solid #e6e8eb;
      margin:1.25rem 0;
    }
  </style>












  <!-- Truth table for modus ponens -->
  <div class="box" id="tt-modus-ponens">
    <div class="box-header">
      <span class="tag">Truth table</span>
      <h5 class="title">Modus ponens</h5>
    </div>




<div class="table-wrap" aria-label="Truth table for modus ponens">
      <table>
        <thead>
<tr>
            <th>\(p\)</th>
            <th>\(q\)</th>
            <th>\(p \to q\)</th>
            <th>\(p\)</th>
            <th>\(q\)</th>
          </tr>
</thead>
        <tbody>
          <tr><td>T</td><td>T</td><td>T</td><td>T</td><td>T</td></tr>
          <tr><td>T</td><td>F</td><td>F</td><td>T</td><td>F</td></tr>
          <tr><td>F</td><td>T</td><td>T</td><td>F</td><td>T</td></tr>
          <tr><td>F</td><td>F</td><td>T</td><td>F</td><td>F</td></tr>
        </tbody>
 </table>
    </div>
  </div>





 <hr class="divider" />




<!-- Remark: validity of modus ponens -->
  <div class="box" id="rem-mp-valid">
    <div class="box-header">
 <span class="tag">Remark</span>
      <h5 class="title">Validity of modus ponens</h5>
    </div>
<p>
      The first row is the only one in which both premises are true, and in that row the conclusion is also true.
      Hence, the argument form <em>modus ponens</em> is valid.
</p>
  </div>







 <!-- Definition: Modus Tollens -->
  <div class="box" id="def-modus-tollens">
 <div class="box-header">
      <span class="tag">Definition</span>

 <h5 class="title">Modus Tollens</h5>
    </div>
<p>
      Another important valid argument form is called <em>modus tollens</em>. It has the form
    </p>


 <div class="math-block" aria-label="Modus tollens form">
      <p style="margin:0;">\(p \to q,\)</p>
      <p style="margin:0;">\(\lnot q,\)</p>
      <p style="margin:0; font-weight:650;">∴ \(\lnot p.\)</p>
    </div>
  </div>
</section>
















<section class="notes-block" id="rem-mt-valid">
  <style>
    /* Minimal, drop-in styling scoped to this remark */
    #rem-mt-valid{ margin:1.25rem 0; }
    #rem-mt-valid p{ margin:.65rem 0; color:#222; }
    #rem-mt-valid em{ font-style:italic; }

    #rem-mt-valid .box{
      border:1px solid #e6e8eb;
      border-radius:.75rem;
      padding:1rem 1.1rem;
      background:#fff;
      margin:.9rem 0 1.1rem;
    }
    #rem-mt-valid .box-header{
      display:flex;
      align-items:baseline;
      gap:.5rem;
      margin-bottom:.6rem;
    }
    #rem-mt-valid .tag{
      display:inline-block;
      font-size:.78rem;
      padding:.15rem .5rem;
      border-radius:999px;
      border:1px solid #d0d7de;
      background:#f6f8fa;
      color:#57606a;
      white-space:nowrap;
    }
    #rem-mt-valid .title{
      margin:0;
      font-weight:650;
      font-size:1rem;
      color:#111;
    }

    #rem-mt-valid .math-block{
      margin:.75rem 0;
      padding:.75rem 1rem;
      border:1px dashed #d0d7de;
      border-radius:.6rem;
      background:#fafafa;
    }

    /* Table styling */
    #rem-mt-valid .table-wrap{
      overflow-x:auto;
      -webkit-overflow-scrolling:touch;
      margin:.5rem 0 .25rem;
      border:1px solid #e6e8eb;
      border-radius:.65rem;
    }
    #rem-mt-valid table{
      width:100%;
      border-collapse:collapse;
      min-width: 520px;
      font-size:.95rem;
    }
    #rem-mt-valid th,
    #rem-mt-valid td{
      padding:.55rem .6rem;
      border-bottom:1px solid #e6e8eb;
      text-align:center;
      vertical-align:middle;
      white-space:nowrap;
    }
    #rem-mt-valid thead th{
      background:#f6f8fa;
      font-weight:650;
      color:#111;
    }
    #rem-mt-valid tbody tr:last-child td{ border-bottom:0; }
  </style>










<div class="box">
    <div class="box-header">
      <span class="tag">Remark</span>
      <h5 class="title">Validity of modus tollens</h5>
    </div>




    <p>We verify the validity of <em>modus tollens</em> using a truth table.</p>








<div class="math-block" aria-label="Modus tollens form">
      <p style="margin:0;">\(p \to q,\)</p>
<p style="margin:0;">\(\lnot q,\)</p>
      <p style="margin:0; font-weight:650;">∴ \(\lnot p.\)</p>
    </div>






    <div class="table-wrap" aria-label="Truth table for modus tollens">
<table>
        <thead>
          <tr>
             <th>\(p\)</th>
            <th>\(q\)</th>
            <th>\(p \to q\)</th>
            <th>\(\lnot q\)</th>
            <th>\(\lnot p\)</th>
          </tr>
        </thead>
<tbody>
          <tr><td>T</td><td>T</td><td>T</td><td>F</td><td>F</td></tr>
          <tr><td>T</td><td>F</td><td>F</td><td>T</td><td>F</td></tr>
          <tr><td>F</td><td>T</td><td>T</td><td>F</td><td>T</td></tr>
          <tr><td>F</td><td>F</td><td>T</td><td>T</td><td>T</td></tr>
        </tbody>
      </table>
    </div>






  <p>
      The fourth row is the only <em>critical row</em>, since both premises are true in that row. In this case,
      the conclusion \(\lnot p\) is also true. Hence, the argument form is valid.
    </p>
  </div>
</section>



































































<section class="notes-block" id="ex-recognizing-mp-mt">
  <style>
    /* Minimal, drop-in styling scoped to this example+solution */
    #ex-recognizing-mp-mt{ margin:1.25rem 0; }
    #ex-recognizing-mp-mt p{ margin:.65rem 0; color:#222; }
    #ex-recognizing-mp-mt em{ font-style:italic; }

    #ex-recognizing-mp-mt .box{
      border:1px solid #e6e8eb;
      border-radius:.75rem;
      padding:1rem 1.1rem;
      background:#fff;
      margin:.9rem 0 1.1rem;
    }
    #ex-recognizing-mp-mt .box-header{
      display:flex;
      align-items:baseline;
      gap:.5rem;
      margin-bottom:.6rem;
    }
    #ex-recognizing-mp-mt .tag{
      display:inline-block;
      font-size:.78rem;
      padding:.15rem .5rem;
      border-radius:999px;
      border:1px solid #d0d7de;
      background:#f6f8fa;
      color:#57606a;
      white-space:nowrap;
    }
    #ex-recognizing-mp-mt .title{
      margin:0;
      font-weight:650;
      font-size:1rem;
      color:#111;
    }

    #ex-recognizing-mp-mt ol{
      margin:.5rem 0 0;
      padding-left:1.25rem;
    }
    #ex-recognizing-mp-mt li{ margin:.85rem 0; }

    #ex-recognizing-mp-mt .blank{
      display:inline-block;
      width:min(100%, 520px);
      border-bottom:2px solid #cfd6dd;
      height:1.2em;
      vertical-align:baseline;
      margin-left:.25rem;
    }

    #ex-recognizing-mp-mt .therefore{
      font-weight:650;
      letter-spacing:.02em;
    }

    #ex-recognizing-mp-mt .answer{
      display:flex;
      justify-content:space-between;
      gap:1rem;
      flex-wrap:wrap;
      align-items:baseline;
      margin:.25rem 0 0;
      padding:.6rem .75rem;
      border:1px dashed #d0d7de;
      border-radius:.6rem;
      background:#fafafa;
    }
    #ex-recognizing-mp-mt .answer .method{
      color:#555;
      font-size:.92rem;
      white-space:nowrap;
    }

    #ex-recognizing-mp-mt .divider{
      border:0;
      border-top:1px solid #e6e8eb;
      margin:1.25rem 0;
    }
  </style>





<!-- Example -->
  <div class="box">
    <div class="box-header">
 <span class="tag">Example</span>
      <h5 class="title">Recognizing modus ponens and modus tollens</h5>
  </div>


 <p>
    Use <em>modus ponens</em> or <em>modus tollens</em> to fill in the blanks so that each argument becomes a valid inference.
 </p>








 <ol type="a">
<li>
  <p style="margin:.35rem 0;">
 If there are more pigeons than there are pigeonholes, then at least two pigeons roost in the same hole.<br>
          There are more pigeons than there are pigeonholes.
 </p>





























  <li>
  <p style="margin:.35rem 0;">
 If \(870{,}232\) is divisible by \(6\), then it is divisible by \(3\).<br>
          \(870{,}232\) is not divisible by \(3\).
 </p>
        <p class="therefore" style="margin:.35rem 0;">
   ∴ <span class="blank" aria-label="blank for conclusion"></span>
        </p>
      </li>
   
















  <hr class="divider" />
  <!-- Solution -->
  <div class="box">
   <div class="box-header">
 <span class="tag">Solution</span>
      <h5 class="title">Completed conclusions</h5>
  </div>















 <ol type="a">
<li>
        <div class="answer">
  <span>At least two pigeons roost in the same hole.</span>
      <span class="method">(by modus ponens)</span>
   </div>
      </li>









 <li>
 <div class="answer">
          <span>\(870{,}232\) is not divisible by \(6\).</span>
 <span class="method">(by modus tollens)</span>
        </div>
 </li>
    </ol>
  </div>



































































<section class="notes-block" id="rules-of-inference">
  <style>
    /* Minimal, drop-in styling scoped to this section */
    #rules-of-inference{ margin:1.25rem 0; }
    #rules-of-inference h3{
      font-size:1.25rem;
      font-weight:650;
      margin:0 0 .5rem;
      color:#111;
    }
    #rules-of-inference p{ margin:.65rem 0; color:#222; }
    #rules-of-inference em{ font-style:italic; }

    #rules-of-inference .box{
      border:1px solid #e6e8eb;
      border-radius:.75rem;
      padding:1rem 1.1rem;
      background:#fff;
      margin:.9rem 0 1.1rem;
    }
    #rules-of-inference .box-header{
      display:flex;
      align-items:baseline;
      gap:.5rem;
      margin-bottom:.6rem;
    }
    #rules-of-inference .tag{
      display:inline-block;
      font-size:.78rem;
      padding:.15rem .5rem;
      border-radius:999px;
      border:1px solid #d0d7de;
      background:#f6f8fa;
      color:#57606a;
      white-space:nowrap;
    }
    #rules-of-inference .title{
      margin:0;
      font-weight:650;
      font-size:1rem;
      color:#111;
    }

    #rules-of-inference .math-block{
      display:flex;
      gap:2rem;
      flex-wrap:wrap;
      margin:.75rem 0;
      padding:.75rem 1rem;
      border:1px dashed #d0d7de;
      border-radius:.6rem;
      background:#fafafa;
    }
    #rules-of-inference .math-col{
      min-width:180px;
    }
    #rules-of-inference .math-col p{
      margin:.2rem 0;
    }
  </style>











 <h3>Additional Valid Argument Forms: Rules of Inference</h3>
  <!-- Definition -->
<div class="box" id="def-rule-of-inference">
 <div class="box-header">
  <span class="tag">Definition</span>
  <h5 class="title">Rule of inference</h5>
   </div>















  <p>
 A <em>rule of inference</em> is a form of argument that is valid.
      In particular, both <em>modus ponens</em> and <em>modus tollens</em> are rules of inference.
    </p>
  </div>









<p>
   The following
are additional examples
of rules of inference that are frequently
used in deductive reasoning.
  </p>

















  <!-- Example: Generalization -->
  <div class="box" id="ex-generalization">
 <div class="box-header">
<span class="tag">Example</span>
<h5 class="title">Generalization</h5>
  </div>









    <p>The following argument forms are valid:</p>
<div class="math-block" aria-label="Generalization forms">
<div class="math-col">
 <p><b>(a)</b></p>
  <p>\(p\)</p>
  <p style="font-weight:650;">∴ \(p \lor q\)</p>
  </div>










<div class="math-col">
 <p><b>(b)</b></p>
   <p>\(q\)</p>
     <p style="font-weight:650;">∴ \(p \lor q\)</p>
  </div>
   </div>











   <p>
 These argument forms are used for making <em>generalizations</em>.
    According to the first form, if \(p\) is true, then more generally the statement
      “\(p\) or \(q\)” is true for any statement \(q\).
  </p>
 </div>
</section>




























<section class="remark" id="rem-generalization-illustration" aria-labelledby="rem-title-generalization-illustration">
  <div class="remark__header">
    <span class="remark__label">Remark</span>
    <span class="remark__title" id="rem-title-generalization-illustration">Illustration of generalization</span>
  </div>

  <div class="remark__body">
  <p>
  Suppose you are given the job of counting the upperclassmen at your school.
You ask what class Anton is in and are told that he is a junior.
</p>













    <p>You reason as follows:</p>
 <div class="math-block">
 
 \begin{array}{l}
    \text{Anton is a junior.}\\
 \therefore\ \text{(more generally) Anton is a junior or Anton is a senior.}
 \end{array}
  
    </div>









<p>
Knowing that an upperclassman is either a junior or a senior, you add Anton to your list.
</p>
 </div>
</section>






























<section class="example" id="ex-specialization" aria-labelledby="ex-title-specialization">
  <div class="example__header">
    <span class="example__label">Example</span>
    <span class="example__title" id="ex-title-specialization">Specialization</span>
  </div>




<div class="example__body">

  <p> The following argument forms are valid: </p>










 <div class="math-block">
\[
 \begin{array}{ll}  \text{(a)} & p \wedge q \\[4pt]
  & \therefore \ p
\end{array}
\qquad
 \begin{array}{ll}
\text{(b)} & p
