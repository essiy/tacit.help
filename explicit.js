const explicit =["∇ Df ← explicit train",":With ⎕ns''",""," ⎕fix ':Class cl' '∇ k' ':Implements Destructor' '⎕ ← ⎕json 2⍴⊂''      ''' '∇' ':EndClass'"," _ ← ⎕new cl",""," ns ← ⎕ns''"," {ns⍎⍵ ,'←{⍺←⊢ ⋄ (pad⍣(⍬≢⍵)) ⍺,''',(⍵),''',⍵}'}¨⎕C ⎕A"," ns.(A B C D E F G H I J K L M N O P Q R S T U V W X Y Z)←(A B C D E F G H I J K L M N O P Q R S T U V W X Y Z)←906401581768974 965716949993291 67988852284969 98297622389679 420080984422572 438841153165603 263430821026629 690829283312793 318417192647479 930034785351725 464464550011771 880199480693265 129642677927034 45849984323459 990924798541774 947049885552331 763259430847382 547116999329207 422237344533662 708685652211964 237187712939992 782976986292862 74374989772666 692244492137717 834182236843806 680542243721638","SIGNAL ← {"," ⍺←⊢"," syntax ← 2"," index  ← 3"," rank   ← 4"," length ← 5"," value  ← 6"," ⍵≡'monadic'    : ⎕SIGNAL 1⊆('EN' syntax)('Message' 'The function does not take a left argument')"," ⍵≡'syntax'     : ⎕SIGNAL syntax"," ⍵≡'dyadic'     : ⎕SIGNAL 1⊆('EN' syntax)('Message' 'The function requires a left argument')"," ⍵≡'impossible' : ⎕SIGNAL 1⊆('EN' syntax)('Message' ('Cannot translate \"',⍺,'\"'))","}",""," illegal ← '⎕load' '⎕cy' '⎕this' '⎕dmx' '⎕' '⍞'",""," _ ← '[A-Za-z](?=(\\s*)←)' ⎕S {⎕EX 'ns.',⍵.Match}⊢train",""," :Trap 0","  :If 0≠idx ← illegal {⊃⍸<\\⍺ {(⊂,⍺)∊(('''[^'']+''|',⍺,'(?![a-z])') ⎕S '&')⊢⍵}¨⊂⎕c ⍵} train ⋄ 'impossible' SIGNAL⍨ ⊃illegal[idx] ⋄ :Endif","     aa ← ns⍎train","  :If 0=⍴⎕nr 'aa'","   Df ← 2⍴⊂'SYNTAX ERROR'","   →0","  :EndIf"," :Else","  Df ← 2⍴⊂⎕DMX.(Message{⍵,⍺,⍨': '/⍨×≢⍺}⎕EM EN)","  →0"," :EndTrap",""," {⍎('∆',∘⍕⍵),'←{⍺←⊢ ⋄ (pad⍣(⍬≢⍵)) ⍺,''',(⎕ucs ⍵),''',⍵}'}¨2031⌶6"," {⍎('∆',1↓⍵),'←{⍺←⊢ ⋄ (pad⍣(⍬≢⍵)) ⍺,''',(     ⍵),''',⍵}'}¨2031⌶7"," {⍎('∆',1↓⍵),'←{v ← 0≠40 ⎕atx ''⍺'' ⋄ ⍺←⊢ ⋄ (pad⍣(⍬≢⍵)) ⍺,(pad (⍺⍺_o v),''',⍵,''',(⍵⍵_o v)),⍵}'}¨ '⎕OPT' '⎕R' '⎕S'",""," ⎕pp ← 34",""," ⎕FIX 'file://',(2 ⎕NQ # 'GetEnvironment' 'DYALOG'),'/SALT/core/Utils.dyalog'"," repObj ← Utils.repObj",""," dfn     ← '}',⍨'{',⊢(/⍨)∨∘⌽⍨⍤⍷⍨⍲∊∘'()' ⍝ Confused? https://tacit.help"," pad     ← '(',,∘')'"," flatten ← ⊃,/",""," _apply ← {","  ⍺←⊢","  (pad⍣(⍬≢⍵)) ⍺,(∊62 ⎕atx '⍺⍺'),⍵","  ⍺⍺"," }",""," _o ← {","  ((1=1⊥'_apply'⍷∊)>1⊥'∆⍙'∊∊)62 ⎕atx '⍺⍺' : ⍺⍺ ⍬","  ⍵∧3.3=42 ⎕atx '⍺⍺' : dfn '⍺' ⍺⍺ '⍵'","  ⍵<3.3=42 ⎕atx '⍺⍺' : dfn     ⍺⍺ '⍵'","  ⍺⍺,⍬"," }",""," ∆xr ← 183⌶","","⍙64 ← {"," v ← 0≠40 ⎕atx '⍺'"," ⍺←⊢"," (pad⍣(⍬≢⍵)) ⍺,(pad (⍺⍺_o v),'@',(⍵⍵_o v)),⍵","}","⍙92 ← {"," 0≠40 ⎕atx '⍺' : SIGNAL 'monadic'"," (pad⍣(⍬≢⍵)) (pad (⍺⍺_o 1),'\\'),⍵","}","⍙9024 ← {"," 0≠40 ⎕atx '⍺' : SIGNAL 'monadic'"," (pad⍣(⍬≢⍵)) (pad (⍺⍺_o 1),'⍀'),⍵","}","⍙9061 ← { "," ⍵≡⍬: (⍺⍺,⍬),'⍥',(⍵⍵,⍬)"," ⍺←⊢"," ⍺(⍺⍺⍥⍵⍵)⍵ ","}","⍙168 ← { "," v ← 0≠40 ⎕atx '⍺'"," ⍺←⊢"," (pad⍣(⍬≢⍵)) ⍺,(pad (⍺⍺_o v),'¨'),⍵","}","⍙46 ← { "," 0=40 ⎕atx '⍺': SIGNAL 'dyadic'"," pad ⍺,(pad (⍺⍺_o 1),'.',(⍵⍵_o 1)),⍵ ","}","⍙8728 ← { "," ⍵≡⍬: (⍺⍺,⍬),'∘',(⍵⍵,⍬)"," ⍺←⊢"," ⍺(⍺⍺∘⍵⍵)⍵","}","⍙9060 ← {"," ⍵≡⍬: (⍺⍺,⍬),'⍤',(⍵⍵,⍬)"," v ← 0≠40 ⎕atx '⍺'"," ⍺←⊢"," 2=40 ⎕atx '⍵⍵' : pad ⍺,(pad(⍺⍺_o v),'⍤',⍵⍵),⍵"," ⍺(⍺⍺⍤⍵⍵)⍵","}","⍙91 ← {","  ⍺←⊢","  2≠40 ⎕atx '⍵⍵' : SIGNAL 'syntax'","  pad ⍺,(pad (⍺⍺_o 0≠40 ⎕atx '⍺'),'[',⍵⍵,']'),⍵","}","∆8867 ← {"," ⍺←⊢"," ⍵≡⍬ : '⊣'"," ⍺⊣⍵ ","}","⍙9018 ← { "," 0≠40 ⎕atx '⍺' : SIGNAL 'monadic'"," pad (pad (⍺⍺_o 1),'⌺',(⍵⍵_o 1)),⍵ ","}","⍙9016 ← {"," ⍺←⊢"," (pad⍣(⍬≢⍵)) ⍺,(pad (⍺⍺_o 1),'⌸'),⍵","}","∆8866 ← {"," ⍺←⊢"," ⍵≡⍬ : '⊢'"," ⍺⊢⍵ ","}","⍙47 ← {"," ⍺←⊢"," (pad⍣(⍬≢⍵)) ⍺,(pad (⍺⍺_o 1),'/'),⍵","}","⍙9023 ← {"," ⍺←⊢"," (pad⍣(⍬≢⍵)) ⍺,(pad (⍺⍺_o 1),'⌿'),⍵","}","⍙9059 ← {"," v ← 0≠40 ⎕atx '⍺'"," ⍺←⊢"," '¯1'≡⍵⍵,⍬ : pad ⍺,(pad (⍺⍺,⍬)  ,'⍣',(⍵⍵)    ),⍵","             pad ⍺,(pad (⍺⍺_o v),'⍣',(⍵⍵_o v)),⍵","}","⍙9064 ← {"," ⍵≡⍬: (⍺⍺,⍬),'⍨'"," ⍺←⍵"," 2≠40 ⎕atx '⍺⍺' : ⍵ (⍺⍺⊣⊢) ⍺"," '⍺⍺'≡⍺⍺ : ⍺,'(⍺⍺⍨)',⍵"," ⍺⍺","}","⍙8592 ← {"," (pad⍣(⍬≢⍵)) ⍺,(pad (⍺⍺_o 1),'←'),⍵","}","⍙38 ← {"," v ← 0≠40 ⎕atx '⍺'"," ⍺←⊢"," (pad⍣(⍬≢⍵)) ⍺,(pad (⍺⍺_o v),'&'),⍵","}","⍙9014 ← {"," v ← 0≠40 ⎕atx '⍺'"," ⍺←⊢"," (pad⍣(⍬≢⍵)) ⍺,(pad (⍺⍺_o v),'⌶'),⍵","}",""," tree ← (∆xr 'aa') {","    ⍙ ← pad ∘ flatten 1 ↓∘, ' ' ,⍤0 ∇¨","    1≤|≡⍺ : ⍺ ⍙ ⍵","    n ← ∊⍵","     ('{'=⊃n)∧'}'=⊃⌽n : '(',(n),'_apply)'","     ('{'=⊃n)<'}'=⊃⌽n : '(',(n),      ')'","    (3 4∨.=⊃⍺)∧'⎕'=1↑n : '∆',1↓n","        ⍺=2 : '(1 repObj ',(repObj ⍵),')'","       1≠⍴n : {((≢⍵)⍴3 4) ⍙ ⍵}n⊂⍨~¯1⌽≠\\n∊'{}'","        ⍺=3 : '∆',⍕⎕UCS n","        ⍺=4 : '⍙',⍕⎕UCS n","     '(⍕',(⍕⍵),')'","   } ⎕nr 'aa'","   ","  f ← ⍎tree","","  :If 4∊⎕nc'f'","   :Trap 0 ⋄ Df ←⊂dfn   ('⍺⍺'f)'⍵' ⋄ :Else ⋄ Df ←⊂⎕DMX.(Message{⍵,⍺,⍨': '/⍨×≢⍺}⎕EM EN) ⋄ :EndTrap","   :Trap 0 ⋄ Df,←⊂dfn'⍺'('⍺⍺'f)'⍵' ⋄ :Else ⋄ Df,←⊂⎕DMX.(Message{⍵,⍺,⍨': '/⍨×≢⍺}⎕EM EN) ⋄ :EndTrap","  :Else","   :Trap 0 ⋄ Df ←⊂dfn   f'⍵' ⋄ :Else ⋄ Df ←⊂⎕DMX.(Message{⍵,⍺,⍨': '/⍨×≢⍺}⎕EM EN) ⋄ :EndTrap","   :Trap 0 ⋄ Df,←⊂dfn'⍺'f'⍵' ⋄ :Else ⋄ Df,←⊂⎕DMX.(Message{⍵,⍺,⍨': '/⍨×≢⍺}⎕EM EN) ⋄ :EndTrap","  :EndIf","","  Df ← (⍕¨A B C D E F G H I J K L M N O P Q R S T U V W X Y Z)⎕R(,¨⎕A)⍠'Regex' 0¨Df",":EndWith","∇"].join('\n')
