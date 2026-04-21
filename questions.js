
window.QUESTION_BANK = [
// Mini Exam Practice 1
// ---------------------------
{
  statement: "If vector $\\vec{u}$ is a linear combination of vectors $\\vec{v}$ and $\\vec{w}$, then $\\vec{w}$ must be a linear combination of $\\vec{u}$ and $\\vec{v}$.",
  answer: false,
  explanation: "For example, let $\\vec{u}=\\begin{bmatrix}2\\\\0\\end{bmatrix}$, $\\vec{v}=\\begin{bmatrix}1\\\\0\\end{bmatrix}$, and $\\vec{w}=\\begin{bmatrix}0\\\\1\\end{bmatrix}$. Then $\\vec{u}=2\\vec{v}+0\\vec{w}$, but $\\vec{w}$ is not a linear combination of $\\vec{u}$ and $\\vec{v}$.",
  tags: ["Linear Combinations"]
},
{
  statement: "If $\\begin{bmatrix}1\\\\2\\\\5\\end{bmatrix}$ and $\\begin{bmatrix}3\\\\7\\\\2\\end{bmatrix}$ are solutions of $A\\vec{x}=\\vec{b}$, then $\\begin{bmatrix}2\\\\5\\\\-3\\end{bmatrix}$ is a solution to $A\\vec{x}=\\vec{0}$.",
  answer: true,
  explanation: "If $A\\vec{x}_1=\\vec{b}$ and $A\\vec{x}_2=\\vec{b}$ then $A(\\vec{x}_2-\\vec{x}_1)=\\vec{b}-\\vec{b}=\\vec{0}$. Here $\\vec{x}_2-\\vec{x}_1=\\begin{bmatrix}2\\\\5\\\\-3\\end{bmatrix}$.",
  tags: ["Linear Systems", "Linear Combinations"]
},
{
  statement: "There exists a system of four linear equations with four unknowns that has exactly four solutions.",
  answer: false,
  explanation: "A linear system must have zero, one, or infinitely many solutions.",
  tags: ["Linear Systems"]
},
{
  statement: "If $T: \\mathbb{R}^2 \\rightarrow \\mathbb{R}^2$ is linear and $T(\\vec{a})=\\vec{0}$ for all vectors on the line $y=x$ and $T(\\vec{b})=\\vec{0}$ for all vectors on the line $y=2x$, then $T(\\vec{x})=\\vec{0}$ for all $\\vec{x}$ in $\\mathbb{R}^2$.",
  answer: true,
  explanation: "$\\begin{bmatrix}1\\\\1\\end{bmatrix}$ and $\\begin{bmatrix}1\\\\2\\end{bmatrix}$ lie on the two lines and are linearly independent, so they form a basis of $\\mathbb{R}^2$. Since $T$ sends both basis vectors to $\\vec{0}$, it must be the zero transformation.",
  tags: ["Linear Transformations"]
},
{
  statement: "Let $A$ be a $5\\times 7$ matrix. If $A\\vec{x}=\\vec{0}$ has infinitely many solutions, then $A\\vec{x}=\\vec{b}$ has infinitely many solutions for every $\\vec{b}$ in $\\mathbb{R}^5$.",
  answer: false,
  explanation: "The system $A\\vec{x}=\\vec{b}$ could be inconsistent. For example, if $A$ is the zero matrix, then $A\\vec{x}=\\vec{0}$ has infinitely many solutions, but $A\\vec{x}=\\vec{b}$ is inconsistent for nonzero $\\vec{b}$.",
  tags: ["Linear Systems", "Image, Kernel and Rank Nullity"]
},
{
  statement: "Let $T: \\mathbb{R}^m \\to \\mathbb{R}^n$ be linear and let $\\{\\vec{v}_1,\\dots,\\vec{v}_m\\}$ be a basis of $\\mathbb{R}^m$. Then $\\{T(\\vec{v}_1),\\dots,T(\\vec{v}_m)\\}$ is a basis of $\\mathbb{R}^n$.",
  answer: false,
  explanation: "For example, if $T$ is the zero transformation, then all $T(\\vec{v}_i)=\\vec{0}$, which cannot form a basis.",
  tags: ["Linear Transformations"]
},
{
  statement: "There is a $2\\times 4$ matrix $A$ whose rref has exactly three nonzero entries.",
  answer: true,
  explanation: "For example $A=\\begin{bmatrix}1&0&0&2\\\\0&1&0&0\\end{bmatrix}$ has exactly three nonzero entries in rref.",
  tags: ["Linear Systems"]
},
{
  statement: "If $T: \\mathbb{R}^3 \\rightarrow \\mathbb{R}^2$ is linear and $T(\\vec{x}_1)=\\begin{bmatrix}1\\\\0\\end{bmatrix}$ and $T(\\vec{x}_2)=\\begin{bmatrix}0\\\\1\\end{bmatrix}$ for some $\\vec{x}_1,\\vec{x}_2$, then $T(\\vec{x})=\\begin{bmatrix}3\\\\2\\end{bmatrix}$ has a solution.",
  answer: true,
  explanation: "By linearity, $T(3\\vec{x}_1+2\\vec{x}_2)=3T(\\vec{x}_1)+2T(\\vec{x}_2)=\\begin{bmatrix}3\\\\2\\end{bmatrix}$.",
  tags: ["Linear Transformations"]
},
{
  statement: "If $L$ is a line through the origin in $\\mathbb{R}^6$ and $\\vec{x}$ is in $\\mathbb{R}^6$, then $(\\mathrm{proj}_L \\vec{x}) \\cdot (\\vec{x}-\\mathrm{proj}_L \\vec{x})=0$.",
  answer: true,
  explanation: "Projection onto a line decomposes $\\vec{x}$ into a component along the line and a perpendicular component, which are orthogonal.",
  tags: ["Orthogonal Matrices", "Geometric Transformations"]
},

// Mini Exam Practice 2
// ---------------------------
{
  statement: "If $A\\vec{x}=\\vec{b}$ has exactly one solution, then $A$ must be square (same number of rows as columns).",
  answer: false,
  explanation: "For example $A=\\begin{bmatrix}1&0\\\\0&1\\\\0&0\\end{bmatrix}$ and $\\vec{b}=\\begin{bmatrix}1\\\\2\\\\0\\end{bmatrix}$ give a unique solution even though $A$ is not square.",
  tags: ["Linear Systems"]
},

{
  statement: "$T : \\mathbb{R}^2 \\rightarrow \\mathbb{R}^2$ defined by $T\\left( \\begin{bmatrix} x_1 \\\\ x_2 \\end{bmatrix} \\right) = \\begin{bmatrix} \\sin(x_1) \\\\ \\cos(x_2) \\end{bmatrix}$ is a linear transformation.",
  answer: false,
  explanation: "$T\\left( \\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix} \\right) = \\begin{bmatrix} \\sin(0) \\\\ \\cos(0) \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ 1 \\end{bmatrix}$. Since $T(\\vec{0}) \\neq \\vec{0}$, $T$ is not linear.",
  tags: ["Linear Transformations"]
},

{
  statement: "The matrix $\\begin{bmatrix} 0 & 1 & 2 \\\\ 0 & 0 & 0 \\end{bmatrix}$ is in reduced row echelon form.",
  answer: true,
  explanation: "The first nonzero entry in each row is a 1. Each leading 1 is the only nonzero entry in its column. There are no violations of the echelon conditions, so the matrix is in reduced row echelon form.",
  tags: ["Linear Systems"]
},

{
  statement: "A system of $5$ linear equations and $6$ unknowns must have infinitely many solutions.",
  answer: false,
  explanation: "The system could be inconsistent. For example, an augmented matrix that row reduces to $\\begin{bmatrix} 1&0&0&0&2&3&\\mid&1\\\\ 0&1&0&0&4&5&\\mid&2\\\\ 0&0&1&0&6&7&\\mid&3\\\\ 0&0&0&1&8&9&\\mid&4\\\\ 0&0&0&0&0&0&\\mid&5 \\end{bmatrix}$ is inconsistent.",
  tags: ["Linear Systems"]
},

{
  statement: "If $A\\begin{bmatrix} 3\\\\-1 \\end{bmatrix}= \\begin{bmatrix} 1\\\\2 \\end{bmatrix}$ and $A\\begin{bmatrix} 5\\\\7 \\end{bmatrix}= \\begin{bmatrix} 1\\\\2 \\end{bmatrix}$, then $A\\vec{x}= \\begin{bmatrix} 1\\\\2 \\end{bmatrix}$ must have infinitely many solutions.",
  answer: true,
  explanation: "A linear system has 0, 1, or infinitely many solutions. Since $\\begin{bmatrix} 3\\\\-1 \\end{bmatrix}$ and $\\begin{bmatrix} 5\\\\7 \\end{bmatrix}$ are two distinct solutions, the system must have infinitely many solutions.",
  tags: ["Linear Systems"]
},

{
  statement: "Let $A$ be a $4 \\times 4$ matrix. If the system $A \\vec{x} = \\vec{e}_1$ has infinitely many solutions, then the system $A \\vec{x} = 0$ has infinitely many solutions, too.",
  answer: true,
  explanation: "If $A \\vec{x} = \\vec{e}_1$ has infinitely many solutions, then $A$ has a free variable. The homogeneous system $A \\vec{x} = 0$ therefore also has a free variable, and hence infinitely many solutions.",
  tags: ["Linear Systems"]
},

{
  statement: "Let $A$ be a $3 \\times 3$ matrix. If $A \\vec{e}_1 \\neq 0$ and $A \\vec{e}_2 \\neq 0$ then $A(\\vec{e}_1+\\vec{e}_2) \\neq 0$.",
  answer: false,
  explanation: "For example, $A = \\begin{bmatrix} 1 & -1 & 0\\\\ 2 & -2 & 0\\\\ 3 & -3 & 0 \\end{bmatrix}$. Then $A\\vec{e}_1 \\neq 0$ and $A\\vec{e}_2 \\neq 0$, but $A(\\vec{e}_1+\\vec{e}_2)=0$.",
  tags: ["Linear Transformations"]
},

{
  statement: "If $\\operatorname{rref}\\begin{bmatrix} A & | & \\vec{b} \\end{bmatrix} = \\begin{bmatrix} 1 & 2 & 3 & 0 & \\mid & 4\\\\ 0 & 0 & 0 & 1 & \\mid & 0 \\end{bmatrix}$, then the linear system $A\\vec{x} = \\vec{b}$ is inconsistent.",
  answer: false,
  explanation: "The corresponding system is $x_1 + 2x_2 + 3x_3 = 4$ and $x_4 = 0$, which is consistent. An inconsistent system would have a row of the form $[0 \\; 0 \\; \\dots \\mid c]$ with $c \\neq 0$.",
  tags: ["Linear Systems"]
},

{
  statement: "If $A = \\begin{bmatrix} \\vec{v}_1 & \\vec{v}_2 \\end{bmatrix}$ is the matrix of projection onto a line $L$, then $\\vec{v}_1$ and $\\vec{v}_2$ are parallel to $L$.",
  answer: true,
  explanation: "The columns of $A$ are $T(\\vec{e}_1)$ and $T(\\vec{e}_2)$, where $T$ is projection onto $L$. Projections of vectors lie on $L$, so both columns are parallel to $L$.",
  tags: ["Geometric Transformations"]
},

{
  statement: "If $A = \\begin{bmatrix} \\vec{u} & \\vec{v} & \\vec{w} \\end{bmatrix}$ and $\\operatorname{rref}(A) = \\begin{bmatrix} 1 & 0 & 2\\\\ 0 & 1 & 5 \\end{bmatrix}$, then $\\vec{w}$ is a linear combination of $\\vec{u}$ and $\\vec{v}$.",
  answer: true,
  explanation: "From the rref form, the third column equals $2$ times the first column plus $5$ times the second column. Thus $\\vec{w} = 2\\vec{u} + 5\\vec{v}$.",
  tags: ["Linear Combinations"]
},

{
  statement: "If $\\operatorname{rref}(A)$ has a row of zeros, then the linear system $A\\vec{x}=\\vec{b}$ has either no solutions or infinitely many solutions.",
  answer: false,
  explanation: "For example, $\\begin{bmatrix} 1 & 0 & \\mid & 1\\\\ 0 & 1 & \\mid & 2\\\\ 0 & 0 & | & 0 \\end{bmatrix}$ is consistent and has a unique solution, even though $\\operatorname{rref}(A)$ has a zero row.",
  tags: ["Linear Systems"]
},

{
  statement: "$\\left\\{ \\begin{bmatrix} 1\\\\0\\\\1 \\end{bmatrix}, \\begin{bmatrix} 0\\\\1\\\\0 \\end{bmatrix}, \\begin{bmatrix} 1\\\\1\\\\1 \\end{bmatrix} \\right\\}$ is a basis of $\\mathbb{R}^3$.",
  answer: false,
  explanation: "$\\begin{bmatrix} 1\\\\0\\\\1 \\end{bmatrix} + \\begin{bmatrix} 0\\\\1\\\\0 \\end{bmatrix} = \\begin{bmatrix} 1\\\\1\\\\1 \\end{bmatrix}$, so the vectors are linearly dependent and do not form a basis of $\\mathbb{R}^3$.",
  tags: ["Linear Combinations"]
},

{
  statement: "If $\\operatorname{rref}(A) = \\begin{bmatrix} 1 & 3 & 0\\\\ 0 & 0 & 1\\\\ 0 & 0 & 0 \\end{bmatrix}$, then $A \\vec{x} = \\begin{bmatrix} 0\\\\ 0\\\\ 1 \\end{bmatrix}$ must be inconsistent.",
  answer: false,
  explanation: "One must distinguish $A$ from $\\operatorname{rref}(A)$. For example, $A = \\begin{bmatrix} 1 & 3 & 0\\\\ 0 & 0 & 0\\\\ 0 & 0 & 1 \\end{bmatrix}$ satisfies the given rref form, and $A\\vec{x} = \\begin{bmatrix} 0\\\\0\\\\1 \\end{bmatrix}$ is consistent.",
  tags: ["Linear Systems"]
},

{
  statement: "If $L$ is a line in $\\mathbb{R}^3$ and $A$ is the matrix of projection onto $L$, then the system $A\\vec{x}=\\vec{0}$ has infinitely many solutions.",
  answer: true,
  explanation: "The solutions are vectors whose projection onto $L$ is zero. These form a plane through the origin perpendicular to $L$, which contains infinitely many vectors.",
  tags: ["Geometric Transformations"]
},

{
  statement: "If the system $A\\vec{x}=\\begin{bmatrix} 2\\\\1 \\end{bmatrix}$ is consistent and the system $A\\vec{x}=\\begin{bmatrix} -1\\\\2 \\end{bmatrix}$ is consistent, then the system $A\\vec{x}=\\begin{bmatrix} 1\\\\3 \\end{bmatrix}$ is consistent.",
  answer: true,
  explanation: "If $A\\vec{v}_1 = \\begin{bmatrix}2\\\\1\\end{bmatrix}$ and $A\\vec{v}_2 = \\begin{bmatrix}-1\\\\2\\end{bmatrix}$, then by linearity $A(\\vec{v}_1+\\vec{v}_2) = \\begin{bmatrix}1\\\\3\\end{bmatrix}$, so the system is consistent.",
  tags: ["Linear Systems"]
},
// Mini Exam Practice 3
// ---------------------------
{
  statement: "The matrices $\\begin{bmatrix} 1 & 2 & 1\\\\ 0 & 0 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}$ and $\\begin{bmatrix} 0 & 0 & 0\\\\ 1 & 2 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}$ have the same rref (reduced row echelon form).",
  answer: true,
  explanation: "The rref of both matrices is $\\begin{bmatrix} 1 & 2 & 0\\\\ 0 & 0 & 1\\\\ 0 & 0 & 0 \\end{bmatrix}$.",
  tags: ["Linear Systems"]
},

{
  statement: "If $\\operatorname{rref}(A)$ has a column of zeros, then $A\\vec{x}=\\vec{b}$ must have infinite solutions.",
  answer: false,
  explanation: "The system could be inconsistent and therefore have no solutions. For example, $\\begin{bmatrix} 1 & 0 & \\mid & 1\\\\ 0 & 0 & \\mid & 1 \\end{bmatrix}$ is inconsistent.",
  tags: ["Linear Systems"]
},

{
  statement: "If $\\operatorname{rref}(A)$ has a row of zeros, then $A\\vec{x}=\\vec{b}$ must have infinite solutions.",
  answer: false,
  explanation: "If $A$ has no free variables and $\\vec{b}=\\vec{0}$, the system can have a unique solution. For example, $\\begin{bmatrix} 1 & 0 & \\mid & 1\\\\ 0 & 1 & \\mid & 1\\\\ 0 & 0 & \\mid & 0 \\end{bmatrix}$ corresponds to a system with a unique solution.",
  tags: ["Linear Systems"]
},

{
  statement: "If $A$ is a $3 \\times 4$ matrix and the system $A\\vec{x}=\\vec{b}$ is consistent, then it must have at least one free variable.",
  answer: true,
  explanation: "There are at most three leading variables since there are three rows. Because there are four columns, there must be at least one free variable.",
  tags: ["Linear Systems"]
},

{
  statement: "Suppose that the system $A\\vec{x}=\\vec{b}$ is consistent and that $\\mathrm{rref}(A)=\\mathrm{rref}(B)$. Then the system $B\\vec{x}=\\vec{b}$ must also be consistent.",
  answer: false,
  explanation: "Take $A=\\begin{bmatrix} 1 & 0 \\\\ 0 & 0 \\end{bmatrix}$ and $B=\\begin{bmatrix} 0 & 0 \\\\ 1 & 0 \\end{bmatrix}$, which have the same rref. For $\\vec{b}=\\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix}$, the system $A\\vec{x}=\\vec{b}$ is consistent but $B\\vec{x}=\\vec{b}$ is not.",
  tags: ["Linear Systems"]
},

{
  statement: "If $T: \\mathbb{R}^m \\to \\mathbb{R}^n$ is a linear transformation, the matrix of $T$ is an $m \\times n$ matrix.",
  answer: false,
  explanation: "The matrix of $T$ is $\\begin{bmatrix} T(\\vec{e}_1) & T(\\vec{e}_2) & \\cdots & T(\\vec{e}_m) \\end{bmatrix}$. Each column has $n$ entries, so the matrix has $n$ rows and $m$ columns. Thus the matrix is $n \\times m$.",
  tags: ["Linear Transformations"]
},

{
  statement: "If $\\vec{v}_1$ and $\\vec{v}_2$ are any two distinct vectors in $\\mathbb{R}^2$, then $\\text{span}(\\vec{v}_1,\\vec{v}_2)=\\mathbb{R}^2$.",
  answer: false,
  explanation: "If the two vectors are scalar multiples of each other (same or opposite direction), then their span is a line, not all of $\\mathbb{R}^2$.",
  tags: ["Linear Combinations"]
},

{
  statement: "In $\\mathbb{R}^3$, if $\\vec{v}_1$ is perpendicular to $\\vec{v}_2$, $\\vec{v}_2$ is perpendicular to $\\vec{v}_3$, and $\\vec{v}_3$ is perpendicular to $\\vec{v}_1$, then $\\vec{v}_1$, $\\vec{v}_2$, and $\\vec{v}_3$ form a basis of $\\mathbb{R}^3$.",
  answer: true,
  explanation: "Pairwise perpendicular nonzero vectors are linearly independent. Three linearly independent vectors in $\\mathbb{R}^3$ form a basis.",
  tags: ["Linear Combinations"]
},

{
  statement: "The function $T\\colon \\mathbb{R}^2 \\rightarrow \\mathbb{R}$ defined by $T\\left(\\begin{bmatrix} x \\\\ y \\end{bmatrix}\\right)=2x+y$ is a linear transformation.",
  answer: true,
  explanation: "We can write $T\\left(\\begin{bmatrix} x \\\\ y \\end{bmatrix}\\right)=\\begin{bmatrix} 2 & 1 \\end{bmatrix}\\begin{bmatrix} x \\\\ y \\end{bmatrix}$, so $T$ is given by matrix multiplication and is linear.",
  tags: ["Linear Transformations"]
},

{
  statement: "The function $T\\colon \\mathbb{R}^2 \\rightarrow \\mathbb{R}$ defined by $T\\left(\\begin{bmatrix} x \\\\ y \\end{bmatrix}\\right)=2x+1$ is a linear transformation.",
  answer: false,
  explanation: "Since $T(\\vec{0})=1 \\neq 0$, the function does not satisfy $T(\\vec{0})=0$, so it is not linear.",
  tags: ["Linear Transformations"]
},

// Mini Exam Spring 2026

{
  statement: "The matrix $\\begin{bmatrix} 1 & 0 & 0\\\\ 0 & 1 & 0\\\\ 0 & 0 & 1\\\\ 0 & 0 & 1 \\end{bmatrix}$ is in reduced row echelon form.",
  answer: false,
  explanation: "In reduced row echelon form, each pivot column must have zeros everywhere except at the leading 1. Here the third column has a leading 1 in row 3, but it also has a 1 in row 4, so the matrix is not in reduced row echelon form.",
  tags: ["Linear Systems"]
},

{
  statement: "Let $A$ be a $4\\times 2$ matrix, and let $\\vec b\\in \\mathbb{R}^4$. If all the columns of $\\mathrm{rref}(A)$ have leading ones, then the linear system $A\\vec x=\\vec b$ must be consistent.",
  answer: false,
  explanation: "If both columns have leading ones, then $A$ has a pivot in each column, so there are no free variables. However, the system may still be inconsistent if the augmented matrix row reduces to a row of the form $[0\\;0\\mid c]$ with $c \\neq 0$. Therefore, the system need not be consistent for every $\\vec b$.",
  tags: ["Linear Systems"]
},

{
  statement: "Let $A$ be a $2\\times 3$ matrix and $\\vec b\\in\\mathbb{R}^2$. If the system $A\\vec x=\\vec b$ is consistent, then it must have infinitely many solutions.",
  answer: true,
  explanation: "A $2\\times 3$ matrix has at most two pivot columns. Since there are three variables, there must be at least one free variable. If the system is consistent, the presence of a free variable guarantees infinitely many solutions.",
  tags: ["Linear Systems"]
},

{
  statement: "The function $T:\\mathbb{R}^2\\to\\mathbb{R}^2$ defined by $T\\!\\left(\\begin{bmatrix}x\\\\y\\end{bmatrix}\\right)=\\begin{bmatrix} x+y\\\\ \\sin(y) \\end{bmatrix}$ is a linear transformation.",
  answer: false,
  explanation: "Linearity requires $T(\\vec 0)=\\vec 0$. But $T\\!\\left(\\begin{bmatrix}0\\\\0\\end{bmatrix}\\right)=\\begin{bmatrix}0\\\\0\\end{bmatrix}$ is satisfied; however, $\\sin(y)$ is not linear since $\\sin(y_1+y_2) \\neq \\sin(y_1)+\\sin(y_2)$ in general. Therefore $T$ is not linear.",
  tags: ["Linear Transformations"]
},

{
  statement: "There is exactly one possible $4\\times 3$ matrix in reduced row-echelon form with three leading ones.",
  answer: true,
  explanation: "If there are three leading ones in a $4\\times 3$ matrix, then each of the three columns must be a pivot column. The pivots must occur in rows 1, 2, and 3, and the fourth row must be all zeros. Reduced row echelon form forces all other entries in pivot columns to be zero. Thus the only possibility is $\\begin{bmatrix}1&0&0\\\\0&1&0\\\\0&0&1\\\\0&0&0\\end{bmatrix}$.",
  tags: ["Linear Systems"]
},
{
  statement: "Suppose $\\mathrm{rref}(A)=\\begin{bmatrix} 1&2&0\\\\ 0&0&1\\\\ 0&0&0 \\end{bmatrix}$ and $\\vec b=\\begin{bmatrix} 1\\\\0\\\\0 \\end{bmatrix}$. Then the system $A\\vec x=\\vec b$ must be consistent.",
  answer: false,
  explanation: "Row operations that produce $\\mathrm{rref}(A)$ must also be applied to $\\vec b$. Without knowing how $\\vec b$ transforms under those row operations, we cannot conclude consistency. It is possible that the augmented matrix row reduces to a row of the form $[0\\;0\\;0\\mid c]$ with $c \\neq 0$, making the system inconsistent.",
  tags: ["Linear Systems"]
},

{
  statement: "The vector $\\begin{bmatrix}1\\\\2\\end{bmatrix}$ is in $\\mathrm{span}\\!\\left( \\begin{bmatrix}3\\\\4\\end{bmatrix}, \\begin{bmatrix}-6\\\\-8\\end{bmatrix} \\right)$.",
  answer: false,
  explanation: "Since $\\begin{bmatrix}-6\\\\-8\\end{bmatrix} = -2\\begin{bmatrix}3\\\\4\\end{bmatrix}$, the span is all scalar multiples of $\\begin{bmatrix}3\\\\4\\end{bmatrix}$. The vector $\\begin{bmatrix}1\\\\2\\end{bmatrix}$ is not a scalar multiple of $\\begin{bmatrix}3\\\\4\\end{bmatrix}$, so it is not in the span.",
  tags: ["Linear Combinations"]
},

{
  statement: "Let $\\vec v_1,\\vec v_2,\\vec v_3$ be three vectors in $\\mathbb{R}^{100}$. Then $\\mathrm{span}(\\vec v_1,\\vec v_2,\\vec v_3)=\\mathrm{span}(\\vec v_1+\\vec v_2+\\vec v_3,\\vec v_2+\\vec v_3,\\vec v_3)$.",
  answer: true,
  explanation: "Each new vector is a linear combination of $\\vec v_1,\\vec v_2,\\vec v_3$, so the new span is contained in the original span. Conversely, we can solve for the original vectors: $\\vec v_3$ is already present, $\\vec v_2 = (\\vec v_2+\\vec v_3) - \\vec v_3$, and $\\vec v_1 = (\\vec v_1+\\vec v_2+\\vec v_3) - (\\vec v_2+\\vec v_3)$. Thus the spans are equal.",
  tags: ["Linear Combinations"]
},

{
  statement: "Let $P$ be the plane $x-y+z=0$ in $\\mathbb{R}^3$, and let $\\mathrm{ref}_P$ be reflection about $P$. Then for every $\\vec v\\in\\mathbb{R}^3$, $\\mathrm{ref}_P(\\mathrm{ref}_P(\\mathrm{ref}_P(\\vec v)))=\\mathrm{ref}_P(\\vec v)$.",
  answer: true,
  explanation: "Reflection about a plane is an involution, meaning $\\mathrm{ref}_P(\\mathrm{ref}_P(\\vec v)) = \\vec v$. Applying reflection three times gives $\\mathrm{ref}_P(\\vec v)$.",
  tags: ["Geometric Transformations"]
},

{
  statement: "There is exactly one possible $2\\times 4$ matrix in reduced row-echelon form with two leading ones.",
  answer: false,
  explanation: "The pivot columns could be any two of the four columns, and the non-pivot columns can contain arbitrary entries (subject to rref rules). Therefore, there are many possible $2\\times 4$ matrices in reduced row-echelon form with two leading ones.",
  tags: ["Linear Systems"]
},
// ---------------------------
// ---------------------------
// ---------------------------
// ---------------------------

// Midterm 1 Practice 1

{
  statement: "Any five vectors $\\vec{v}_1, \\vec{v}_2, \\vec{v}_3, \\vec{v}_4, \\vec{v}_5$ in $\\mathbb{R}^4$ are linearly dependent.",
  answer: true,
  explanation: "$\\mathbb{R}^4$ is 4-dimensional, so there can be at most 4 linearly independent vectors in $\\mathbb{R}^4$.",
  tags: ["Linear Combinations"]
},

{
  statement: "The composition of a shear and a rotation in $\\mathbb{R}^2$ is an invertible transformation.",
  answer: true,
  explanation: "Shears and rotations are both invertible linear transformations. The composition of invertible transformations is invertible.",
  tags: ["Matrix Inverses"]
},

{
  statement: "If $A$ is a matrix and the solutions of $A\\vec{x} = \\vec{e}_1$ form a plane, then the solutions of $A\\vec{x} = \\vec{0}$ also form a plane.",
  answer: true,
  explanation: "If $\\vec{x}_1$ is a solution to $A\\vec{x} = \\vec{e}_1$, then the solutions to $A\\vec{x} = \\vec{e}_1$ are exactly $\\vec{x}_1 + \\ker(A)$. If this set forms a plane, then $\\ker(A)$ must form a plane as well.",
  tags: ["Image, Kernel and Rank Nullity"]
},

{
  statement: "If $A$ is a matrix and the solutions of $A\\vec{x} = \\vec{0}$ form a plane, then the solutions of $A\\vec{x} = \\vec{e}_1$ also form a plane.",
  answer: false,
  explanation: "It is possible that $A\\vec{x} = \\vec{e}_1$ has no solutions. For example, $A = \\begin{bmatrix} 0 & 0 & 0 \\\\ 1 & 0 & 0 \\end{bmatrix}$.",
  tags: ["Image, Kernel and Rank Nullity"]
},

{
  statement: "If $A$ is a $3 \\times 3$ matrix which represents rotation about a line in $\\mathbb{R}^3$, then the columns of $A$ form a basis of $\\mathbb{R}^3$.",
  answer: true,
  explanation: "A rotation is invertible, so its matrix is invertible. The columns of an invertible matrix form a basis.",
  tags: ["Matrix Inverses"]
},

{
  statement: "The function $T: \\mathbb{R}^3 \\to \\mathbb{R}^3$ defined by $T\\left(\\begin{bmatrix} x \\\\ y \\\\ z \\end{bmatrix}\\right)=\\begin{bmatrix} x+1 \\\\ y+1 \\\\ z+1 \\end{bmatrix}$ is a linear transformation.",
  answer: false,
  explanation: "$T(\\vec{0}) = \\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\end{bmatrix} \\neq \\vec{0}$, so $T$ is not linear.",
  tags: ["Linear Transformations"]
},

{
  statement: "The matrices $A = \\begin{bmatrix} 1 & 3 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & 0 & 0 \\end{bmatrix}$ and $B = \\begin{bmatrix} 1 & 1 & -5 \\\\ 1 & 2 & 4 \\\\ 1 & -3 & 1 \\end{bmatrix}$ have the same image.",
  answer: false,
  explanation: "Every vector in $\\operatorname{im}(A)$ has 0 as its last entry. The columns of $B$ do not all have 0 as their last entry, so the images are not equal.",
  tags: ["Image, Kernel and Rank Nullity"]
},

{
  statement: "If $\\vec{u}, \\vec{v}, \\vec{w}$ are linearly independent vectors in $\\mathbb{R}^3$ and $A$ is an invertible $3 \\times 3$ matrix, then $A\\vec{u}, A\\vec{v}, A\\vec{w}$ are also linearly independent.",
  answer: true,
  explanation: "If $c_1 A\\vec{u} + c_2 A\\vec{v} + c_3 A\\vec{w} = 0$, then $A(c_1\\vec{u} + c_2\\vec{v} + c_3\\vec{w})=0$. Since $A$ is invertible, this implies $c_1\\vec{u} + c_2\\vec{v} + c_3\\vec{w}=0$, and linear independence gives $c_1=c_2=c_3=0$.",
  tags: ["Matrix Inverses", "Linear Combinations"]
},

{
  statement: "There is an invertible $2 \\times 2$ matrix $S$ such that $S^{-1}\\begin{bmatrix}0&1\\\\0&0\\end{bmatrix}S = \\begin{bmatrix}1&0\\\\0&0\\end{bmatrix}$.",
  answer: false,
  explanation: "Solving the similarity equation forces $S$ to have determinant 0, so no invertible matrix $S$ satisfies the equation.",
  tags: ["Matrix Inverses"]
},

{
  statement: "Let $\\vec{v}$ be a non-zero vector in $\\mathbb{R}^n$ and $L=\\operatorname{span}(\\vec{v})$. If $\\vec{x}$ is any vector in $\\mathbb{R}^n$, then $\\operatorname{proj}_L \\vec{x}$ is a scalar multiple of $\\vec{v}$.",
  answer: true,
  explanation: "$\\operatorname{proj}_L \\vec{x}$ lies in $L$, and every vector in $L=\\operatorname{span}(\\vec{v})$ is a scalar multiple of $\\vec{v}$.",
  tags: ["Geometric Transformations"]
},

{
  statement: "Let $T: \\mathbb{R}^n \\to \\mathbb{R}^n$ be linear and $\\mathfrak{B}$ a basis. If the standard matrix of $T$ is invertible, then the $\\mathfrak{B}$-matrix of $T$ is also invertible.",
  answer: true,
  explanation: "If $A$ is the standard matrix and $C$ is the $\\mathfrak{B}$-matrix, then $A = SCS^{-1}$ for some invertible $S$. Hence $C = S^{-1}AS$, a product of invertible matrices.",
  tags: ["Coordinates", "Matrix Inverses"]
},

{
  statement: "If $A$ is invertible and $AB$ is the zero matrix, then $B$ is the zero matrix.",
  answer: true,
  explanation: "Multiplying $AB=0$ on the left by $A^{-1}$ gives $B=0$.",
  tags: ["Matrix Inverses"]
},

{
  statement: "If $A$ is a $2 \\times 2$ matrix satisfying $A^2=I_2$, then $A$ is either $I_2$ or $-I_2$.",
  answer: false,
  explanation: "Reflection across a line through the origin satisfies $A^2=I$ but is neither $I$ nor $-I$.",
  tags: ["Linear Transformations"]
},

{
  statement: "If $A$ and $B$ are invertible $5 \\times 5$ matrices, then $A-B$ is also invertible.",
  answer: false,
  explanation: "If $A=B$, then $A-B=0$, which is not invertible.",
  tags: ["Determinants", "Invertible Matrices"]
},

{
  statement: "Let $S,T: \\mathbb{R}^3 \\to \\mathbb{R}^5$ be linear. If they agree on three linearly independent vectors, then $S=T$.",
  answer: true,
  explanation: "Three linearly independent vectors form a basis of $\\mathbb{R}^3$. Linear transformations are determined by their values on a basis.",
  tags: ["Linear Transformations"]
},

{
  statement: "If $\\vec{v}_1$ and $\\vec{v}_2$ are solutions of $A\\vec{x}=\\vec{b}$, then $2\\vec{v}_1-\\vec{v}_2$ is also a solution.",
  answer: true,
  explanation: "Since $A\\vec{v}_1=\\vec{b}$ and $A\\vec{v}_2=\\vec{b}$, we have $A(2\\vec{v}_1-\\vec{v}_2)=2\\vec{b}-\\vec{b}=\\vec{b}$.",
  tags: ["Linear Systems"]
},

{
  statement: "If $\\mathfrak{B} = \\left( \\begin{bmatrix}1\\\\2\\\\3\\end{bmatrix}, \\begin{bmatrix}1\\\\5\\\\4\\end{bmatrix}, \\begin{bmatrix}3\\\\2\\\\-3\\end{bmatrix} \\right)$ and $\\vec{x}=\\begin{bmatrix}1\\\\-1\\\\2\\end{bmatrix}$, then $[\\vec{x}]_{\\mathfrak{B}}=\\begin{bmatrix}2\\\\-1\\\\0\\end{bmatrix}$.",
  answer: true,
  explanation: "This coordinate statement is equivalent to expressing $\\vec{x}$ as $2\\vec{b}_1 - \\vec{b}_2 + 0\\vec{b}_3$, which can be verified directly.",
  tags: ["Coordinates"]
},

{
  statement: "The kernel of a matrix $A$ is always the same as the kernel of $\\operatorname{rref}(A)$.",
  answer: true,
  explanation: "Solving $A\\vec{x}=0$ is equivalent to solving $\\operatorname{rref}(A)\\vec{x}=0$ because row operations do not change the solution set of the homogeneous system.",
  tags: ["Image, Kernel and Rank Nullity"]
},

{
  statement: "If $A$ is a $10 \\times 10$ matrix such that $A^2=0$, then $\\operatorname{rank}(A) \\le 5$.",
  answer: true,
  explanation: "Since $A^2=0$, $\\operatorname{im}(A) \\subseteq \\ker(A)$. By rank-nullity, $\\operatorname{rank}(A)+\\operatorname{nullity}(A)=10$, so $\\operatorname{rank}(A) \\le 5$.",
  tags: ["Image, Kernel and Rank Nullity"]
},

// Midterm 1 Practice 2

{
  statement: "If the linear system $A\\vec{x}=\\vec{b}$ has exactly one solution, then the linear system $A\\vec{x}=\\vec{c}$ has exactly one solution for all vectors $\\vec{c}$.",
  answer: false,
  explanation: "Having exactly one solution for $A\\vec{x}=\\vec{b}$ implies there are no free variables, so $A\\vec{x}=\\vec{c}$ has at most one solution. But it may be inconsistent. For example, let $A=\\begin{bmatrix}1\\\\2\\end{bmatrix}$, $\\vec{b}=\\begin{bmatrix}2\\\\4\\end{bmatrix}$, and $\\vec{c}=\\begin{bmatrix}1\\\\0\\end{bmatrix}$.",
  tags: ["Linear Systems"]
},

{
  statement: "There is a $3\\times 3$ invertible matrix $A$ with 7 entries equal to 0.",
  answer: false,
  explanation: "If a $3\\times 3$ matrix has 7 zero entries, it has only two nonzero entries, so at least one row is all zeros. Then $\\operatorname{rref}(A)\\neq I_3$, so $A$ is not invertible.",
  tags: ["Determinants"]
},

{
  statement: "The set $S=\\left\\{\\begin{bmatrix}x\\\\y\\end{bmatrix}: x \\text{ is an integer}\\right\\}$ is closed under addition.",
  answer: true,
  explanation: "If $x$ and $x'$ are integers, then $x+x'$ is an integer, so $\\begin{bmatrix}x+x'\\\\y+y'\\end{bmatrix}$ is still in $S$.",
  tags: ["Linear Combinations"]
},

{
  statement: "The set $S=\\left\\{\\begin{bmatrix}x\\\\y\\end{bmatrix}: x \\text{ is an integer}\\right\\}$ is closed under scalar multiplication.",
  answer: false,
  explanation: "If $\\begin{bmatrix}x\\\\y\\end{bmatrix}\\in S$ and $c$ is any scalar, then $cx$ need not be an integer. For example, $\\begin{bmatrix}1\\\\1\\end{bmatrix}\\in S$ but $\\pi\\begin{bmatrix}1\\\\1\\end{bmatrix}\\notin S$.",
  tags: ["Linear Combinations"]
},

{
  statement: "If the vectors $\\vec{v}_1,\\vec{v}_2,\\vec{v}_3,\\vec{v}_4$ are linearly independent, then $\\vec{v}_2,\\vec{v}_3,\\vec{v}_4$ must be linearly independent as well.",
  answer: true,
  explanation: "Any relation $c_2\\vec{v}_2+c_3\\vec{v}_3+c_4\\vec{v}_4=\\vec{0}$ can be viewed as $0\\vec{v}_1+c_2\\vec{v}_2+c_3\\vec{v}_3+c_4\\vec{v}_4=\\vec{0}$. By independence of the four vectors, $c_2=c_3=c_4=0$.",
  tags: ["Linear Combinations"]
},

{
  statement: "If $A$ is a $5\\times 4$ matrix of rank 4, the system $A\\vec{x}=\\vec{e}_1$ must be consistent.",
  answer: false,
  explanation: "A counterexample is $A=\\begin{bmatrix}0&0&0&0\\\\1&0&0&0\\\\0&1&0&0\\\\0&0&1&0\\\\0&0&0&1\\end{bmatrix}$. Then the first row forces $0=1$ in the equation $A\\vec{x}=\\vec{e}_1$, so it is inconsistent.",
  tags: ["Linear Systems"]
},

{
  statement: "The function $T:\\mathbb{R}^2\\to\\mathbb{R}^3$ given by $T\\left(\\begin{bmatrix}x\\\\y\\end{bmatrix}\\right)=(x-y)\\begin{bmatrix}1\\\\2\\\\-3\\end{bmatrix}$ is a linear transformation.",
  answer: true,
  explanation: "We can rewrite $T\\left(\\begin{bmatrix}x\\\\y\\end{bmatrix}\\right)=\\begin{bmatrix}1&-1\\\\2&-2\\\\-3&3\\end{bmatrix}\\begin{bmatrix}x\\\\y\\end{bmatrix}$, so $T$ is given by matrix multiplication and is linear.",
  tags: ["Linear Transformations"]
},

{
  statement: "A linear transformation $T:\\mathbb{R}^2\\to\\mathbb{R}^2$ that sends $\\begin{bmatrix}1\\\\2\\end{bmatrix}$ to $\\begin{bmatrix}1\\\\4\\end{bmatrix}$ must send $\\begin{bmatrix}1\\\\4\\end{bmatrix}$ to $\\begin{bmatrix}1\\\\8\\end{bmatrix}$.",
  answer: false,
  explanation: "$\\begin{bmatrix}1\\\\2\\end{bmatrix}$ and $\\begin{bmatrix}1\\\\4\\end{bmatrix}$ are linearly independent, so knowing $T\\left(\\begin{bmatrix}1\\\\2\\end{bmatrix}\\right)$ does not determine $T\\left(\\begin{bmatrix}1\\\\4\\end{bmatrix}\\right)$.",
  tags: ["Linear Transformations"]
},

{
  statement: "If $P$ is the plane in $\\mathbb{R}^3$ spanned by $\\vec{e}_1$ and $\\vec{e}_2$, then $\\vec{x}-\\operatorname{proj}_P\\vec{x}$ is a scalar multiple of $\\vec{e}_3$.",
  answer: true,
  explanation: "$\\vec{x}-\\operatorname{proj}_P\\vec{x}$ is perpendicular to $P=\\operatorname{span}(\\vec{e}_1,\\vec{e}_2)$. The vectors perpendicular to this plane are exactly scalar multiples of $\\vec{e}_3$.",
  tags: ["Geometric Transformations"]
},

{
  statement: "If $A$ and $B$ are matrices and $AB$ is invertible, then so are $A$ and $B$.",
  answer: false,
  explanation: "A counterexample is $A=\\begin{bmatrix}1&2\\end{bmatrix}$ and $B=\\begin{bmatrix}1\\\\2\\end{bmatrix}$, where $AB$ is $1\\times 1$ and invertible, but $A$ and $B$ are not invertible matrices.",
  tags: ["Determinants"]
},

{
  statement: "If $A$ is an $n\\times n$ matrix and $A=AA$, then $A$ must be either the zero matrix or the identity matrix.",
  answer: false,
  explanation: "Any projection matrix satisfies $A^2=A$ but is not necessarily $0$ or $I$.",
  tags: ["Geometric Transformations"]
},

{
  statement: "Suppose $\\mathfrak{A}$ and $\\mathfrak{B}$ are bases of $\\mathbb{R}^n$. Let $A$ be the matrix whose columns are the vectors of $\\mathfrak{A}$, and let $B$ be the matrix whose columns are the vectors of $\\mathfrak{B}$. Then there exists an invertible matrix $S$ such that $B=SA$.",
  answer: true,
  explanation: "Since $A$ and $B$ are invertible, taking $S=BA^{-1}$ gives $B=SA$, and $S$ is invertible as a product of invertible matrices.",
  tags: ["Coordinates"]
},

{
  statement: "If $T$ is a linear transformation from $\\mathbb{R}^5$ to $\\mathbb{R}^2$, then $\\dim(\\ker T)\\le 2$.",
  answer: false,
  explanation: "$\\dim(\\operatorname{im}T)\\le 2$, so by rank-nullity $\\dim(\\ker T)=5-\\dim(\\operatorname{im}T)\\ge 3$.",
  tags: ["Image, Kernel and Rank Nullity"]
},

{
  statement: "The function $T:\\mathbb{R}^2\\to\\mathbb{R}^3$ defined by $T\\left(\\begin{bmatrix}s\\\\t\\end{bmatrix}\\right)=\\begin{bmatrix}1\\\\2\\\\3\\end{bmatrix}+s\\begin{bmatrix}4\\\\5\\\\6\\end{bmatrix}+t\\begin{bmatrix}7\\\\8\\\\9\\end{bmatrix}$ is a linear transformation.",
  answer: false,
  explanation: "$T\\left(\\begin{bmatrix}0\\\\0\\end{bmatrix}\\right)=\\begin{bmatrix}1\\\\2\\\\3\\end{bmatrix}\\ne \\vec{0}$, so $T$ is not linear.",
  tags: ["Linear Transformations"]
},

{
  statement: "If $A$ and $B$ are invertible $6\\times 6$ matrices, then $(A+B)^{-1}=A^{-1}+B^{-1}$.",
  answer: false,
  explanation: "For example, take $A=B=I$. Then $(A+B)^{-1}=(2I)^{-1}=\\tfrac{1}{2}I$, but $A^{-1}+B^{-1}=I+I=2I$.",
  tags: ["Determinants"]
},

{
  statement: "If a $3\\times 3$ matrix $R$ represents reflection about a plane in $\\mathbb{R}^3$, then there is an invertible matrix $S$ such that $R=S\\begin{bmatrix}0&1&0\\\\1&0&0\\\\0&0&1\\end{bmatrix}S^{-1}$.",
  answer: true,
  explanation: "This asks whether the reflection has some basis in which its matrix swaps two basis vectors and fixes a third. One can choose $\\vec{v}_1$ not in the plane and not perpendicular to it, let $\\vec{v}_2=R\\vec{v}_1$, and pick $\\vec{v}_3$ in the plane; then in this basis the matrix is $\\begin{bmatrix}0&1&0\\\\1&0&0\\\\0&0&1\\end{bmatrix}$, so $R$ is similar to it.",
  tags: ["Geometric Transformations"]
},

{
  statement: "The image of a matrix $A$ is always the same as the image of $\\operatorname{rref}(A)$.",
  answer: false,
  explanation: "For example, $A=\\begin{bmatrix}1&0\\\\2&0\\end{bmatrix}$ has image spanned by $\\begin{bmatrix}1\\\\2\\end{bmatrix}$, but $\\operatorname{rref}(A)=\\begin{bmatrix}1&0\\\\0&0\\end{bmatrix}$ has image spanned by $\\begin{bmatrix}1\\\\0\\end{bmatrix}$.",
  tags: ["Image, Kernel and Rank Nullity"]
},

{
  statement: "If $A$ is a $3\\times 3$ matrix with $\\begin{bmatrix}1\\\\2\\\\3\\end{bmatrix}\\notin \\operatorname{im}(A)$, then $A$ cannot be invertible.",
  answer: true,
  explanation: "If $\\begin{bmatrix}1\\\\2\\\\3\\end{bmatrix}\\notin\\operatorname{im}(A)$, then $A\\vec{x}=\\begin{bmatrix}1\\\\2\\\\3\\end{bmatrix}$ is inconsistent, so $A$ cannot be invertible (invertible means $A\\vec{x}=\\vec{y}$ has a solution for every $\\vec{y}\\in\\mathbb{R}^3$).",
  tags: ["Image, Kernel and Rank Nullity"]
},

{
  statement: "There is a matrix $A$ whose kernel is the single vector $\\begin{bmatrix}1\\\\1\\end{bmatrix}$.",
  answer: false,
  explanation: "The kernel of any matrix is a subspace and must contain $\\vec{0}$. The set $\\left\\{\\begin{bmatrix}1\\\\1\\end{bmatrix}\\right\\}$ is not a subspace of $\\mathbb{R}^2$.",
  tags: ["Image, Kernel and Rank Nullity"]
},

{
  statement: "There are infinitely many ways to express $\\begin{bmatrix}1\\\\1\\end{bmatrix}$ as a linear combination of $\\begin{bmatrix}3\\\\7\\end{bmatrix}$, $\\begin{bmatrix}-1\\\\4\\end{bmatrix}$, and $\\begin{bmatrix}2\\\\6\\end{bmatrix}$.",
  answer: true,
  explanation: "Writing $c_1\\begin{bmatrix}3\\\\7\\end{bmatrix}+c_2\\begin{bmatrix}-1\\\\4\\end{bmatrix}+c_3\\begin{bmatrix}2\\\\6\\end{bmatrix}=\\begin{bmatrix}1\\\\1\\end{bmatrix}$ is equivalent to $\\begin{bmatrix}3&-1&2\\\\7&4&6\\end{bmatrix}\\begin{bmatrix}c_1\\\\c_2\\\\c_3\\end{bmatrix}=\\begin{bmatrix}1\\\\1\\end{bmatrix}$. This $2\\times 3$ system has rank 2 and hence a free variable, so it has infinitely many solutions.",
  tags: ["Linear Combinations"]
},

// Midterm 1 Practice 3

{
  statement: "There is a matrix $A$ such that $\\operatorname{rref}(A)$ has a row whose entries are all nonzero.",
  answer: true,
  explanation: "For example, $A=\\begin{bmatrix}1&1&1\\end{bmatrix}$ has $\\operatorname{rref}(A)=\\begin{bmatrix}1&1&1\\end{bmatrix}$, whose (only) row has all nonzero entries.",
  tags: ["Linear Systems"]
},

{
  statement: "There is a matrix $A$ such that $\\operatorname{rref}(A)$ has a column whose entries are all nonzero.",
  answer: true,
  explanation: "For example, $A=\\begin{bmatrix}1&0&1\\\\0&1&1\\end{bmatrix}$ has $\\operatorname{rref}(A)=A$, whose third column entries are both nonzero.",
  tags: ["Linear Systems"]
},

{
  statement: "If $\\begin{bmatrix}1\\\\2\\\\5\\end{bmatrix}$ and $\\begin{bmatrix}3\\\\7\\\\2\\end{bmatrix}$ are solutions of a system $A\\vec{x}=\\vec{b}$, then $\\begin{bmatrix}2\\\\5\\\\-3\\end{bmatrix}$ is in $\\ker A$.",
  answer: true,
  explanation: "If $A\\vec{x}=\\vec{b}$ has solutions $\\vec{x}_1$ and $\\vec{x}_2$, then $A(\\vec{x}_2-\\vec{x}_1)=\\vec{b}-\\vec{b}=\\vec{0}$, so $\\vec{x}_2-\\vec{x}_1\\in\\ker A$. Here $\\begin{bmatrix}3\\\\7\\\\2\\end{bmatrix}-\\begin{bmatrix}1\\\\2\\\\5\\end{bmatrix}=\\begin{bmatrix}2\\\\5\\\\-3\\end{bmatrix}$.",
  tags: ["Image, Kernel and Rank Nullity"]
},

{
  statement: "If $A$ is an $n\\times n$ matrix, the only vector in both $\\ker A$ and $\\operatorname{im} A$ is $\\vec{0}$.",
  answer: false,
  explanation: "It can happen that $\\ker A \\cap \\operatorname{im} A$ contains a nonzero vector (e.g., certain nilpotent matrices).",
  tags: ["Image, Kernel and Rank Nullity"]
},

{
  statement: "There are $2\\times 2$ matrices $A$ and $B$ with rank 1 such that $AB$ has rank 0.",
  answer: true,
  explanation: "Let $A$ be projection onto the $x$-axis and $B$ be projection onto the $y$-axis in $\\mathbb{R}^2$. Then $\\operatorname{rank}(A)=\\operatorname{rank}(B)=1$ but $AB=0$, so $\\operatorname{rank}(AB)=0$.",
  tags: ["Image, Kernel and Rank Nullity"]
},

{
  statement: "If $A$ is a $3\\times 3$ matrix such that $A\\vec{x}=\\begin{bmatrix}1\\\\2\\\\3\\end{bmatrix}$ has more than one solution, then $A$ cannot be invertible.",
  answer: true,
  explanation: "If $A$ were invertible, then $A\\vec{x}=\\vec{y}$ would have exactly one solution for every $\\vec{y}\\in\\mathbb{R}^3$. Having more than one solution for $\\vec{y}=\\begin{bmatrix}1\\\\2\\\\3\\end{bmatrix}$ contradicts invertibility.",
  tags: ["Linear Systems"]
},

{
  statement: "Let $T:\\mathbb{R}^n\\to\\mathbb{R}^p$ be linear and $\\vec{v}_1,\\dots,\\vec{v}_m$ be linearly independent in $\\mathbb{R}^n$. Then $T(\\vec{v}_1),\\dots,T(\\vec{v}_m)$ are linearly independent.",
  answer: false,
  explanation: "For example, the zero transformation $T(\\vec{x})=\\vec{0}$ sends any independent set to vectors that are all zero, hence dependent.",
  tags: ["Linear Transformations"]
},

{
  statement: "If $A$ is an invertible $3\\times 3$ matrix and $\\vec{v}_1,\\vec{v}_2,\\vec{v}_3$ are orthogonal vectors in $\\mathbb{R}^3$, then $A\\vec{v}_1, A\\vec{v}_2, A\\vec{v}_3$ are also orthogonal.",
  answer: false,
  explanation: "An invertible matrix need not preserve angles. For example, take $A=\\begin{bmatrix}1&1&1\\\\0&1&1\\\\0&0&1\\end{bmatrix}$. Then $\\vec{e}_1,\\vec{e}_2,\\vec{e}_3$ are orthogonal, but $A\\vec{e}_1, A\\vec{e}_2, A\\vec{e}_3$ (the columns of $A$) are not.",
  tags: ["Linear Transformations"]
},

{
  statement: "Let $T:\\mathbb{R}^2\\to\\mathbb{R}^2$ be linear. If $\\mathfrak{B}$ and $\\mathfrak{C}$ are two different bases of $\\mathbb{R}^2$, then the $\\mathfrak{B}$-matrix of $T$ and the $\\mathfrak{C}$-matrix of $T$ must be different.",
  answer: false,
  explanation: "For example, if $T$ is projection onto a line $L$, then in many different bases adapted to $L$ the matrix can be $\\begin{bmatrix}1&0\\\\0&0\\end{bmatrix}$.",
  tags: ["Coordinates"]
},

{
  statement: "There is a linear transformation $T:\\mathbb{R}^2\\to\\mathbb{R}^3$ whose rank and nullity are the same.",
  answer: true,
  explanation: "For example, the matrix $\\begin{bmatrix}1&0\\\\0&0\\\\0&0\\end{bmatrix}$ defines a map with rank 1 and nullity 1.",
  tags: ["Image, Kernel and Rank Nullity"]
},

{
  statement: "If $L$ is a line through the origin in $\\mathbb{R}^6$ and $\\vec{x}\\in\\mathbb{R}^6$, then $(\\operatorname{proj}_L\\vec{x})\\cdot(\\vec{x}-\\operatorname{proj}_L\\vec{x})=0$.",
  answer: true,
  explanation: "By the definition of orthogonal projection, $\\vec{x}-\\operatorname{proj}_L\\vec{x}$ is orthogonal to $L$, while $\\operatorname{proj}_L\\vec{x}$ lies in $L$. Hence they are orthogonal and their dot product is 0.",
  tags: ["Geometric Transformations"]
},

{
  statement: "If $A$ and $B$ are $15\\times 15$ matrices, then $\\operatorname{im}(AB)$ is contained in $\\operatorname{im}(B)$.",
  answer: false,
  explanation: "In general, $\\operatorname{im}(AB)\\subseteq \\operatorname{im}(A)$, not necessarily $\\operatorname{im}(B)$. For example, if $B$ is projection onto the $x$-axis in $\\mathbb{R}^2$ and $A$ is rotation by $90^\\circ$, then $\\operatorname{im}(B)$ is the $x$-axis but $\\operatorname{im}(AB)$ is the $y$-axis.",
  tags: ["Image, Kernel and Rank Nullity"]
},

{
  statement: "If $T:\\mathbb{R}^5\\to\\mathbb{R}^1$ is a linear transformation, then there is a vector $\\vec{y}$ in $\\mathbb{R}^5$ such that $T(\\vec{x})=\\begin{bmatrix}\\vec{x}\\cdot\\vec{y}\\end{bmatrix}$ for all $\\vec{x}$ in $\\mathbb{R}^5$.",
  answer: true,
  explanation: "Since $T$ is linear, there is a $1\\times 5$ matrix $A=\\begin{bmatrix}a_1&a_2&a_3&a_4&a_5\\end{bmatrix}$ with $T(\\vec{x})=A\\vec{x}$. Let $\\vec{y}=\\begin{bmatrix}a_1\\\\a_2\\\\a_3\\\\a_4\\\\a_5\\end{bmatrix}$. Then $A\\vec{x}=a_1x_1+\\cdots+a_5x_5=\\vec{x}\\cdot\\vec{y}$.",
  tags: ["Orthogonal Matrices"]
},

{
  statement: "If $A+B$ is invertible, then either $A$ or $B$ is invertible.",
  answer: false,
  explanation: "Counterexample: $A=\\begin{bmatrix}1&0\\\\0&0\\end{bmatrix}$ and $B=\\begin{bmatrix}0&0\\\\0&1\\end{bmatrix}$. Then $A$ and $B$ are not invertible, but $A+B=I$ is invertible.",
  tags: ["Determinants"]
},

{
  statement: "If $T:\\mathbb{R}^3\\to\\mathbb{R}^4$ is a linear transformation whose kernel is a plane, then $\\operatorname{im}T$ is 2-dimensional.",
  answer: false,
  explanation: "If $\\ker T$ is a plane, then $\\dim(\\ker T)=2$. By rank-nullity, $\\dim(\\operatorname{im}T)=3-2=1$.",
  tags: ["Image, Kernel and Rank Nullity"]
},

{
  statement: "Let $\\vec{x}=\\begin{bmatrix}1\\\\4\\\\-7\\end{bmatrix}$. Then there is exactly one basis $\\mathfrak{B}$ of $\\mathbb{R}^3$ for which $[\\vec{x}]_{\\mathfrak{B}}=\\begin{bmatrix}2\\\\1\\\\1\\end{bmatrix}$.",
  answer: false,
  explanation: "There can be multiple such bases. For example, both $\\left(\\begin{bmatrix}0\\\\2\\\\0\\end{bmatrix},\\begin{bmatrix}1\\\\0\\\\0\\end{bmatrix},\\begin{bmatrix}0\\\\0\\\\-7\\end{bmatrix}\\right)$ and $\\left(\\begin{bmatrix}1/2\\\\0\\\\0\\end{bmatrix},\\begin{bmatrix}0\\\\4\\\\0\\end{bmatrix},\\begin{bmatrix}0\\\\0\\\\-7\\end{bmatrix}\\right)$ give $[\\vec{x}]_{\\mathfrak{B}}=\\begin{bmatrix}2\\\\1\\\\1\\end{bmatrix}$.",
  tags: ["Coordinates"]
},

{
  statement: "If $T:\\mathbb{R}^2\\to\\mathbb{R}^2$ is a linear transformation and $\\mathfrak{B}$ is a basis of $\\mathbb{R}^2$ such that the $\\mathfrak{B}$-matrix of $T$ is $\\begin{bmatrix}1&0\\\\0&0\\end{bmatrix}$, then $T$ is orthogonal projection onto a line in $\\mathbb{R}^2$.",
  answer: false,
  explanation: "In some bases this matrix represents a projection, but not necessarily an *orthogonal* projection. For example, let $\\vec{v}_1=\\begin{bmatrix}1\\\\0\\end{bmatrix}$ and $\\vec{v}_2=\\begin{bmatrix}1\\\\1\\end{bmatrix}$ (not orthogonal). Define $T(\\vec{v}_1)=\\vec{v}_1$ and $T(\\vec{v}_2)=\\vec{0}$. Then the $\\mathfrak{B}$-matrix is $\\begin{bmatrix}1&0\\\\0&0\\end{bmatrix}$ but $T$ is not orthogonal projection.",
  tags: ["Geometric Transformations"]
},

{
  statement: "If $\\vec{v}_1,\\vec{v}_2,\\vec{v}_3$ are linearly independent, then $\\vec{v}_1,\\vec{v}_2,\\vec{v}_1+\\vec{v}_3$ are also linearly independent.",
  answer: true,
  explanation: "If $c_1\\vec{v}_1+c_2\\vec{v}_2+c_3(\\vec{v}_1+\\vec{v}_3)=0$, then $(c_1+c_3)\\vec{v}_1+c_2\\vec{v}_2+c_3\\vec{v}_3=0$. By independence of $\\vec{v}_1,\\vec{v}_2,\\vec{v}_3$, we get $c_3=0$, $c_2=0$, and $c_1+c_3=0$, so $c_1=c_2=c_3=0$.",
  tags: ["Linear Combinations"]
},

// Midterm 1 Practice 4

{
  statement: "If $\\operatorname{rref}(A)$ has a row of zeros, then $A\\vec{x}=\\vec{b}$ cannot have a unique solution.",
  answer: false,
  explanation: "A zero row in $\\operatorname{rref}(A)$ does not prevent a unique solution if the system is consistent and there are no free variables. For example, the augmented matrix $\\begin{bmatrix}1&0&\\mid&1\\\\0&1&\\mid&2\\\\0&0&\\mid&0\\end{bmatrix}$ has a unique solution even though $\\operatorname{rref}(A)$ has a zero row.",
  tags: ["Linear Systems"]
},

{
  statement: "If $A$ is the matrix of a reflection in $\\mathbb{R}^3$ over a plane $P$, then the columns of $A$ are linearly independent.",
  answer: true,
  explanation: "A reflection is an invertible linear transformation, so its matrix is invertible. The columns of an invertible matrix are linearly independent.",
  tags: ["Geometric Transformations"]
},

{
  statement: "If $A$ is a square matrix and $A\\vec{x}=\\vec{b}$ has infinitely many solutions, then $\\operatorname{rref}(A)$ must have a row of zeros.",
  answer: true,
  explanation: "Infinitely many solutions implies at least one free variable, so $\\text{rank}(A) \\le n$ (number of columns). In rref this means there are fewer pivots than rows of $A$ can have, forcing at least one zero row in $\\operatorname{rref}(A)$.",
  tags: ["Linear Systems"]
},

{
  statement: "If $A$ is an $n\\times n$ matrix with linearly independent columns, then $A$ is invertible.",
  answer: true,
  explanation: "Linearly independent columns mean $\\operatorname{rank}(A)=n$, so $A$ has a pivot in every column and is invertible.",
  tags: ["Determinants"]
},

{
  statement: "If $A\\vec{x}=\\vec{b}$ is consistent and $\\operatorname{rref}(A)=\\begin{bmatrix}1&4&0\\\\0&0&1\\end{bmatrix}$, then the set of solutions to $A\\vec{x}=\\vec{b}$ is a line.",
  answer: true,
  explanation: "There are 3 variables and 2 pivots (in columns 1 and 3), so there is 1 free variable. Since the system is consistent, the solution set is an affine subspace of dimension 1, i.e. a line.",
  tags: ["Linear Systems"]
},

{
  statement: "If $A$ is a $3\\times 4$ matrix, the codomain of $A$ is $\\mathbb{R}^4$.",
  answer: false,
  explanation: "A $3\\times 4$ matrix defines a linear map $\\mathbb{R}^4\\to\\mathbb{R}^3$, so the codomain is $\\mathbb{R}^3$.",
  tags: ["Linear Transformations"]
},

{
  statement: "If $(\\vec{v}_1,\\vec{v}_2,\\vec{v}_3,\\vec{v}_4)$ is a basis for a subspace of $\\mathbb{R}^6$, then the vectors $\\vec{v}_1,\\vec{v}_2, 3\\vec{v}_3+2\\vec{v}_4$ are linearly independent.",
  answer: true,
  explanation: "Since $(\\vec{v}_1,\\vec{v}_2,\\vec{v}_3,\\vec{v}_4)$ is a basis, these four vectors are linearly independent. If $a\\vec{v}_1+b\\vec{v}_2+c(3\\vec{v}_3+2\\vec{v}_4)=0$, then $a\\vec{v}_1+b\\vec{v}_2+3c\\vec{v}_3+2c\\vec{v}_4=0$. Independence forces $a=b=c=0$.",
  tags: ["Linear Combinations"]
},

{
  statement: "There exists a $2\\times 2$ matrix $A$ such that $\\begin{bmatrix}1&0\\\\2&4\\end{bmatrix}A$ represents the orthogonal projection onto the line $y=3x$.",
  answer: true,
  explanation: "Let $M=\\begin{bmatrix}1&0\\\\2&4\\end{bmatrix}$, which is invertible. If $P$ is the projection matrix onto $y=3x$, then choosing $A=M^{-1}P$ gives $MA=P$.",
  tags: ["Geometric Transformations"]
},

{
  statement: "Let $\\mathcal{B}=(\\vec{v}_1,\\vec{v}_2)$ be a basis for $\\mathbb{R}^2$. If the $\\mathcal{B}$-matrix of a linear transformation $T:\\mathbb{R}^2\\to\\mathbb{R}^2$ is $\\begin{bmatrix}3&2\\\\-1&6\\end{bmatrix}$, then $T(2\\vec{v}_1+\\vec{v}_2)=\\begin{bmatrix}8\\\\4\\end{bmatrix}$.",
  answer: false,
  explanation: "From the given $\\mathcal{B}$-matrix, we get $[T(2\\vec{v}_1+\\vec{v}_2)]_{\\mathcal{B}} = \\begin{bmatrix}3&2\\\\-1&6\\end{bmatrix}\\begin{bmatrix}2\\\\1\\end{bmatrix}=\\begin{bmatrix}8\\\\4\\end{bmatrix}$. But $\\begin{bmatrix}8\\\\4\\end{bmatrix}$ here is a coordinate vector in the basis $\\mathcal{B}$, not necessarily the *standard* coordinates of $T(2\\vec{v}_1+\\vec{v}_2)$.",
  tags: ["Coordinates"]
},

{
  statement: "Let $A$ be the $2\\times 2$ matrix representing the counterclockwise rotation by $30^\\circ$. If $B$ is the matrix of an orthogonal projection onto a line in $\\mathbb{R}^2$, then $AB$ is the matrix of an orthogonal projection onto another line in $\\mathbb{R}^2$.",
  answer: false,
  explanation: "An orthogonal projection matrix must be symmetric and satisfy $P^2=P$. While $B$ is symmetric, $AB$ is generally not symmetric (unless the rotation is trivial), so $AB$ need not be an orthogonal projection.",
  tags: ["Geometric Transformations"]
},

{
  statement: "If $A$ is the matrix of a projection in $\\mathbb{R}^3$ onto a plane $P$, then $A^{-1}=A$.",
  answer: false,
  explanation: "A projection onto a proper plane has nontrivial kernel, so it is not invertible and $A^{-1}$ does not exist (unless $A=I$).",
  tags: ["Geometric Transformations"]
},

{
  statement: "If $B$ is the matrix of a reflection in $\\mathbb{R}^3$ over a plane $P$, then $B^{-1}=B$.",
  answer: true,
  explanation: "A reflection is its own inverse: applying the same reflection twice returns the original vector, so $B^2=I$ and hence $B^{-1}=B$.",
  tags: ["Geometric Transformations"]
},

{
  statement: "There is a basis $(\\vec{v}_1,\\vec{v}_2,\\vec{v}_3)$ of $\\mathbb{R}^3$ where $\\vec{v}_1+3\\vec{v}_2-5\\vec{v}_3=\\begin{bmatrix}2\\\\3\\\\4\\end{bmatrix}$ and $7\\vec{v}_1-\\vec{v}_2+2\\vec{v}_3=\\begin{bmatrix}2\\\\3\\\\4\\end{bmatrix}$.",
  answer: false,
  explanation: "Subtracting the two equations gives $6\\vec{v}_1-4\\vec{v}_2+7\\vec{v}_3=\\vec{0}$, a nontrivial linear relation among $\\vec{v}_1,\\vec{v}_2,\\vec{v}_3$. That contradicts them being a basis (linearly independent).",
  tags: ["Linear Combinations"]
},

{
  statement: "$T:\\mathbb{R}^3\\rightarrow\\mathbb{R}^2$ defined by $T\\left(\\begin{bmatrix}x\\\\y\\\\z\\end{bmatrix}\\right)=\\begin{bmatrix}x+2y+3\\\\y+3z-4\\end{bmatrix}$ is a linear transformation.",
  answer: false,
  explanation: "The constant terms mean $T(\\vec{0})=\\begin{bmatrix}3\\\\-4\\end{bmatrix}\\ne\\vec{0}$, so $T$ is not linear.",
  tags: ["Linear Transformations"]
},

{
  statement: "If $\\vec{x}=\\begin{bmatrix}-1\\\\11\\end{bmatrix}$ and $\\mathcal{B}=\\left(\\begin{bmatrix}-1\\\\1\\end{bmatrix},\\begin{bmatrix}2\\\\3\\end{bmatrix}\\right)$, then $[\\vec{x}]_{\\mathcal{B}}=\\begin{bmatrix}5\\\\2\\end{bmatrix}$.",
  answer: true,
  explanation: "$5\\begin{bmatrix}-1\\\\1\\end{bmatrix}+2\\begin{bmatrix}2\\\\3\\end{bmatrix}=\\begin{bmatrix}-5+4\\\\5+6\\end{bmatrix}=\\begin{bmatrix}-1\\\\11\\end{bmatrix}$, so the $\\mathcal{B}$-coordinates are $\\begin{bmatrix}5\\\\2\\end{bmatrix}$.",
  tags: ["Coordinates"]
},

{
  statement: "If $T:\\mathbb{R}^3\\rightarrow\\mathbb{R}^3$ is a reflection across a plane in $\\mathbb{R}^3$, then there is a basis $\\mathcal{B}$ for which the $\\mathcal{B}$-matrix of $T$ is $\\begin{bmatrix}-1&0&0\\\\0&1&0\\\\0&0&-1\\end{bmatrix}$.",
  answer: false,
  explanation: "A reflection across a plane has eigenvalues $1,1,-1$, so in a suitable basis its matrix is similar to $\\operatorname{diag}(1,1,-1)$, not $\\operatorname{diag}(-1,1,-1)$.",
  tags: ["Geometric Transformations"]
},

{
  statement: "If $A$, $B$, and $C$ are invertible $n\\times n$ matrices, then $(ABC)^{-1}=C^{-1}B^{-1}A^{-1}$.",
  answer: true,
  explanation: "This is the standard inverse-of-a-product rule: $(ABC)(C^{-1}B^{-1}A^{-1})=I$ and $(C^{-1}B^{-1}A^{-1})(ABC)=I$.",
  tags: ["Determinants"]
},

{
  statement: "If $A$ is a $2\\times 5$ matrix and $\\text{nullity}(A)=3$, then $A\\vec{x}=\\vec{b}$ is consistent for all $\\vec{b}$ in $\\mathbb{R}^2$.",
  answer: true,
  explanation: "Rank-nullity gives $\\operatorname{rank}(A)+\\operatorname{nullity}(A)=5$, so $\\operatorname{rank}(A)=2$. Thus $\\operatorname{im}(A)$ is 2-dimensional in $\\mathbb{R}^2$, meaning $\\operatorname{im}(A)=\\mathbb{R}^2$ and $A\\vec{x}=\\vec{b}$ is consistent for all $\\vec{b}\\in\\mathbb{R}^2$.",
  tags: ["Image, Kernel and Rank Nullity"]
},

{
  statement: "If $A$ and $B$ are $n\\times n$ matrices and $A$ is invertible, then $\\ker(AB)=\\ker(B)$.",
  answer: true,
  explanation: "$AB\\vec{x}=0 \\iff A(B\\vec{x})=0$. Since $A$ is invertible, $A\\vec{y}=0\\iff \\vec{y}=0$, so this is equivalent to $B\\vec{x}=0$.",
  tags: ["Image, Kernel and Rank Nullity"]
},

{
  statement: "If $A$ and $B$ are $n\\times n$ matrices and $A$ is invertible, then $\\operatorname{im}(AB)=\\operatorname{im}(B)$.",
  answer: false,
  explanation: "Because $A$ is invertible, $A$ maps $\\operatorname{im}(B)$ bijectively onto $\\operatorname{im}(AB)=A(\\operatorname{im}(B))$. In general this need not equal $\\operatorname{im}(B)$ unless $A$ preserves that subspace.",
  tags: ["Image, Kernel and Rank Nullity"]
},

// Midterm 1 Spring 2026

{
  statement: "For any two matrices $A$ and $B$, if $AB=I$, then $BA=I$.",
  answer: false,
  explanation: "For example, let $A=\\begin{bmatrix}1&0\\end{bmatrix}$ and $B=\\begin{bmatrix}1\\\\0\\end{bmatrix}$. Then $AB=[1]$, but $BA=\\begin{bmatrix}1&0\\\\0&0\\end{bmatrix}\\neq I$.",
  tags: ["Matrix Inverses"]
},

{
  statement: "Let $P$ be the matrix of a projection onto a subspace $V\\subset \\mathbb{R}^5$. If $\\dim V=4$, then $P$ is not invertible.",
  answer: true,
  explanation: "Since $\\dim V=4<5$, the kernel of $P$ has dimension 1. A linear transformation with nontrivial kernel is not invertible.",
  tags: ["Linear Transformations"]
},

{
  statement: "If $\\vec v_1,\\dots,\\vec v_{10}$ are linearly independent, then $\\vec v_1,\\dots,\\vec v_9$ are linearly independent.",
  answer: true,
  explanation: "Any subset of a linearly independent set is linearly independent.",
  tags: ["Linear Combinations"]
},

{
  statement: "If $\\vec v_1,\\dots,\\vec v_{10}$ are linearly dependent, then $\\vec v_1,\\dots,\\vec v_9$ are linearly dependent.",
  answer: false,
  explanation: "For example, let $\\vec v_1,\\dots,\\vec v_9$ be linearly independent and set $\\vec v_{10}=\\vec v_1$. Then the full set is dependent, but the first nine are independent.",
  tags: ["Linear Combinations"]
},

{
  statement: "Let $\\mathcal{B}=\\left\\{\\begin{bmatrix}1\\\\2\\end{bmatrix},\\begin{bmatrix}-1\\\\5\\end{bmatrix}\\right\\}$. If $[\\vec{x}]_{\\mathcal B}=\\begin{bmatrix}2\\\\3\\end{bmatrix}$, then $\\vec{x}=\\begin{bmatrix}-1\\\\19\\end{bmatrix}$.",
  answer: true,
  explanation: "We compute $\\vec x = 2\\begin{bmatrix}1\\\\2\\end{bmatrix}+3\\begin{bmatrix}-1\\\\5\\end{bmatrix}=\\begin{bmatrix}-1\\\\19\\end{bmatrix}$.",
  tags: ["Coordinates"]
},

{
  statement: "If $B$ is a $3\\times2$ matrix and $A$ is a $2\\times2$ invertible matrix, then $\\operatorname{nullity}(BA)=\\operatorname{nullity}(B)$.",
  answer: true,
  explanation: "Since $A$ is invertible, multiplication by $A$ does not change the dimension of the kernel. Thus $\\ker(BA)=A^{-1}(\\ker B)$ and the nullities are equal.",
  tags: ["Image, Kernel and Rank Nullity"]
},

{
  statement: "Let $A$ be an $8\\times10$ matrix. The nullity of $A$ is at most 2.",
  answer: false,
  explanation: "Rank–nullity gives $\\operatorname{nullity}(A)=10-\\operatorname{rank}(A)\\ge 10-8=2$, and it can be larger (for example if $A=0$).",
  tags: ["Image, Kernel and Rank Nullity"]
},

{
  statement: "Let $A$ be an $8\\times10$ matrix. The nullity of $A$ is at least 2.",
  answer: true,
  explanation: "Since $\\operatorname{rank}(A)\\le 8$, rank–nullity gives $\\operatorname{nullity}(A)=10-\\operatorname{rank}(A)\\ge2$.",
  tags: ["Image, Kernel and Rank Nullity"]
},

{
  statement: "Let $A$ be a $3\\times4$ matrix. If $\\operatorname{rref}(A)$ has a column of zeros, then a system $A\\vec x=\\vec b$ can never have a unique solution.",
  answer: true,
  explanation: "A zero column means there is a free variable. A consistent system then has infinitely many solutions; otherwise it has none. It can never have exactly one solution.",
  tags: ["Linear Systems"]
},

{
  statement: "If $\\{\\vec v_1,\\ldots,\\vec v_p\\}$ is a linearly dependent spanning set of a subspace $V$, then $\\dim V<p$.",
  answer: true,
  explanation: "Since the set is dependent, at least one vector can be removed while still spanning $V$. Thus $V$ has a spanning set with fewer than $p$ vectors.",
  tags: ["Linear Combinations"]
},

{
  statement: "If $A$ and $B$ are $2\\times2$ matrices such that $\\operatorname{im}(B)\\subseteq\\ker(A)$, then $\\operatorname{nullity}(AB)>\\operatorname{nullity}(B)$.",
  answer: false,
  explanation: "Let $B=0$. Then $\\operatorname{im}(B)=\\{0\\}\\subseteq\\ker(A)$, but $AB=0$ and both nullities equal 2.",
  tags: ["Image, Kernel and Rank Nullity"]
},

{
  statement: "Let $P_1$ and $P_2$ be perpendicular planes through the origin in $\\mathbb{R}^3$. If $S(\\vec x)=\\operatorname{proj}_{P_1}(\\operatorname{proj}_{P_2}(\\vec x))$, then $\\operatorname{im}(S)$ is one-dimensional.",
  answer: true,
  explanation: "Projecting onto $P_2$ gives vectors in $P_2$. Projecting those onto $P_1$ yields vectors in the line $P_1\\cap P_2$, which is one-dimensional.",
  tags: ["Geometric Transformations"]
},

{
  statement: "The plane $3x+2y-5z=1$ is a subspace of $\\mathbb{R}^3$.",
  answer: false,
  explanation: "A subspace must contain the zero vector, but $(0,0,0)$ does not satisfy the equation.",
  tags: ["Linear Combinations"]
},

{
  statement: "The composition of a shear and a reflection in $\\mathbb{R}^2$ is an invertible linear transformation.",
  answer: true,
  explanation: "Both a shear and a reflection are invertible linear transformations, and the composition of invertible linear transformations is invertible.",
  tags: ["Geometric Transformations"]
},

{
  statement: "If $M$ is a $3\\times3$ matrix satisfying $M^2=0$, then $\\operatorname{nullity}(M)\\ge2$.",
  answer: true,
  explanation: "Since $M^2=0$, we have $\\operatorname{im}(M)\\subseteq\\ker(M)$, so $\\operatorname{rank}(M)\\le\\operatorname{nullity}(M)$. Using rank–nullity, this implies $\\operatorname{nullity}(M)\\ge2$.",
  tags: ["Image, Kernel and Rank Nullity"]
},

{
  statement: "If $A$ is invertible and $AB=B$, then $A$ must be the identity matrix.",
  answer: false,
  explanation: "Take any invertible $A\\neq I$ and let $B=0$. Then $AB=0=B$, but $A$ is not the identity.",
  tags: ["Matrix Inverses"]
},

{
  statement: "Let $V\\subset\\mathbb{R}^4$ have basis $\\{\\vec v_1,\\vec v_2,\\vec v_3\\}$. Then $\\operatorname{proj}_V(\\vec x)=(\\vec x\\cdot\\vec v_1)\\vec v_1+(\\vec x\\cdot\\vec v_2)\\vec v_2+(\\vec x\\cdot\\vec v_3)\\vec v_3$ for all $\\vec x$.",
  answer: false,
  explanation: "This formula holds only if the basis is orthonormal.",
  tags: ["Orthogonal Matrices"]
},

{
  statement: "If $A$ is a $5\\times3$ matrix, then $\\operatorname{rref}(A)$ must have at least two rows of zeros.",
  answer: true,
  explanation: "There can be at most 3 pivot rows, so at least $5-3=2$ rows must be zero.",
  tags: ["Linear Systems"]
},

{
  statement: "If $\\vec v_1,\\vec v_2,\\vec v_3$ in $\\mathbb{R}^3$ are linearly dependent, then $\\vec v_3\\in\\operatorname{span}(\\vec v_1,\\vec v_2)$.",
  answer: false,
  explanation: "For example, if $\\vec v_1=\\vec v_2$, the set is dependent, but $\\vec v_3$ need not lie in their span.",
  tags: ["Linear Combinations"]
},

{
  statement: "Let $T:\\mathbb{R}^n\\to\\mathbb{R}^n$ be linear and let $\\mathcal B$ be a basis. If the $\\mathcal B$-matrix of $T$ is invertible, then $T$ is invertible.",
  answer: true,
  explanation: "An invertible matrix representation implies the linear transformation is bijective, hence invertible.",
  tags: ["Linear Transformations"]
},

// Midterm 2 Practice 1

{
  statement: "If $\\lambda$ is an eigenvalue of $A$, then $\\lambda^3$ is an eigenvalue of $A^3$.",
  answer: true,
  explanation: "If $A\\vec v=\\lambda\\vec v$ for some nonzero $\\vec v$, then $A^3\\vec v = A(A(A\\vec v)) = A(A(\\lambda\\vec v)) = A(\\lambda^2\\vec v)=\\lambda^3\\vec v$, so $\\lambda^3$ is an eigenvalue of $A^3$.",
  tags: ["Diagonalization"]
},

{
  statement: "If $A$ represents reflection over any line through the origin in $\\mathbb{R}^2$, then $\\det(A)$ must be $-1$.",
  answer: true,
  explanation: "A reflection in $\\mathbb{R}^2$ has eigenvalues $1$ (along the line) and $-1$ (perpendicular to it). The determinant is the product of the eigenvalues, so it is $-1$.",
  tags: ["Geometric Transformations"]
},

{
  statement: "For any $3\\times 7$ matrix $A$, the product $AA^T$ is diagonalizable.",
  answer: true,
  explanation: "$AA^T$ is symmetric since $(AA^T)^T = AA^T$. By the Spectral Theorem, every real symmetric matrix is diagonalizable (orthogonally).",
  tags: ["Symmetric Matrices and the Spectral Theorem"]
},

{
  statement: "Every real $70\\times 70$ matrix has a real eigenvector.",
  answer: false,
  explanation: "A real matrix can have no real eigenvalues (e.g., a block-diagonal matrix built from $2\\times 2$ rotation blocks), in which case it has no real eigenvectors.",
  tags: ["Diagonalization"]
},

{
  statement: "Every real $71\\times 71$ matrix has a real eigenvector.",
  answer: true,
  explanation: "A real $71\\times 71$ matrix has a degree-71 characteristic polynomial with real coefficients. Non-real roots come in conjugate pairs, so an odd-degree real polynomial must have at least one real root, giving a real eigenvalue and hence a real eigenvector.",
  tags: ["Diagonalization"]
},

{
  statement: "If $M$ is a square matrix whose columns are orthogonal, then $M^TM$ is the identity matrix.",
  answer: false,
  explanation: "Orthogonal columns only guarantee $M^TM$ is diagonal, with diagonal entries equal to the squared column lengths. For example, $M=\\begin{bmatrix}1&0\\\\0&2\\end{bmatrix}$ has orthogonal columns but $M^TM=\\begin{bmatrix}1&0\\\\0&4\\end{bmatrix}\\neq I$.",
  tags: ["Orthogonal Matrices"]
},

{
  statement: "If $\\vec x$ and $\\vec y$ are any vectors in $\\mathbb{R}^n$, then $\\|\\vec x+\\vec y\\|^2+\\|\\vec x-\\vec y\\|^2 = 2(\\|\\vec x\\|^2+\\|\\vec y\\|^2)$.",
  answer: true,
  explanation: "Expanding with dot products gives $(\\vec x+\\vec y)\\cdot(\\vec x+\\vec y)+(\\vec x-\\vec y)\\cdot(\\vec x-\\vec y)=2(\\vec x\\cdot\\vec x+\\vec y\\cdot\\vec y)$.",
  tags: ["Orthogonal Matrices"]
},

{
  statement: "For any $n\\times n$ matrix $A$, $\\det(A)=\\det(\\operatorname{rref}(A))$.",
  answer: false,
  explanation: "Row operations used to reach rref can scale the determinant. For example, $A=\\begin{bmatrix}2&0\\\\0&1\\end{bmatrix}$ has $\\det(A)=2$, but $\\operatorname{rref}(A)=I$ has determinant $1$.",
  tags: ["Determinants"]
},

{
  statement: "If $\\vec x^{\\,*}$ is a least squares solution of $A\\vec x=\\vec b$, then $\\|\\vec b\\|^2 = \\|A\\vec x^{\\,*}\\|^2 + \\|\\vec b-A\\vec x^{\\,*}\\|^2$.",
  answer: true,
  explanation: "Least squares gives $A\\vec x^{\\,*}=\\operatorname{proj}_{\\operatorname{im}A}(\\vec b)$, so $A\\vec x^{\\,*}$ is orthogonal to $\\vec b-A\\vec x^{\\,*}$. The identity follows from the Pythagorean Theorem.",
  tags: ["Least Squares"]
},

{
  statement: "The $1$-eigenspace of a matrix $A$ is the same as the $1$-eigenspace of $\\operatorname{rref}(A)$.",
  answer: false,
  explanation: "Row reduction does not preserve eigenvectors/eigenspaces. For example, $A=2I_2$ has $1$-eigenspace $\\{\\vec 0\\}$, but $\\operatorname{rref}(A)=I_2$ has $1$-eigenspace $\\mathbb{R}^2$.",
  tags: ["Diagonalization"]
},

{
  statement: "Let $A$ be an $n\\times n$ matrix. Then $A$ is diagonalizable $\\Longleftrightarrow$ $A^T$ is diagonalizable.",
  answer: true,
  explanation: "If $A=SDS^{-1}$, then $A^T=(S^{-1})^T D (S^T)$, so $A^T$ is diagonalizable. Applying the same argument to $A^T$ gives the converse.",
  tags: ["Diagonalization"]
},

{
  statement: "There is a symmetric $2\\times 2$ matrix $A$ with $A\\begin{bmatrix}1\\\\2\\end{bmatrix}=\\begin{bmatrix}3\\\\6\\end{bmatrix}$ and $A\\begin{bmatrix}1\\\\1\\end{bmatrix}=\\begin{bmatrix}2\\\\2\\end{bmatrix}$.",
  answer: false,
  explanation: "These conditions make $\\begin{bmatrix}1\\\\2\\end{bmatrix}$ a $3$-eigenvector and $\\begin{bmatrix}1\\\\1\\end{bmatrix}$ a $2$-eigenvector. For a symmetric matrix, eigenspaces for distinct eigenvalues are orthogonal, but $\\begin{bmatrix}1\\\\2\\end{bmatrix}\\cdot\\begin{bmatrix}1\\\\1\\end{bmatrix}=3\\neq 0$.",
  tags: ["Symmetric Matrices and the Spectral Theorem"]
},

{
  statement: "If $A$ is a square matrix such that $A^{16}=0$, then $0$ is the only eigenvalue of $A$.",
  answer: true,
  explanation: "If $A\\vec v=\\lambda\\vec v$ with $\\vec v\\neq 0$, then $A^{16}\\vec v=\\lambda^{16}\\vec v$. But $A^{16}=0$, so $\\lambda^{16}=0$, hence $\\lambda=0$.",
  tags: ["Diagonalization"]
},

{
  statement: "Consider the linear continuous dynamical system $\\dfrac{d\\vec x}{dt}=A\\vec x$ with $\\vec x(0)=\\begin{bmatrix}1\\\\0\\end{bmatrix}$. If $\\lim_{t\\to\\infty} e^{At}\\vec x(0)=\\vec 0$, then $\\vec 0$ is an asymptotically stable equilibrium of the system.",
  answer: false,
  explanation: "Convergence of one trajectory does not imply asymptotic stability (which requires nearby trajectories to converge). For example, with $A=\\begin{bmatrix}-1&0\\\\0&1\\end{bmatrix}$, the trajectory from $\\vec e_1$ goes to $0$ but generic nearby trajectories do not.",
  tags: ["Continuous Dynamical Systems"]
},

{
  statement: "There exists a diagonalizable $4\\times4$ matrix $A$ with characteristic polynomial $\\lambda^2(\\lambda-1)(\\lambda-2)$ and rank $3$.",
  answer: false,
  explanation: "If $A$ is diagonalizable with characteristic polynomial $\\lambda^2(\\lambda-1)(\\lambda-2)$, then $0$ has algebraic (hence geometric) multiplicity $2$, so $\\dim\\ker(A)=2$. Rank–nullity gives $\\operatorname{rank}(A)=4-2=2$, not $3$.",
  tags: ["Diagonalization", "Image, Kernel and Rank Nullity"]
},

{
  statement: "Let $A$ be a $6\\times6$ matrix that has exactly one real eigenvalue $\\lambda_0$. Then the algebraic multiplicity of $\\lambda_0$ is at least $2$.",
  answer: true,
  explanation: "Non-real eigenvalues of a real matrix occur in complex conjugate pairs, contributing an even total algebraic multiplicity. Since $6$ is even and there is at least one real eigenvalue, the real eigenvalue(s) must account for an even algebraic multiplicity, so $\\lambda_0$ has multiplicity $\\ge 2$.",
  tags: ["Diagonalization"]
},

{
  statement: "All diagonal matrices are orthogonally diagonalizable.",
  answer: true,
  explanation: "A real diagonal matrix is symmetric. By the Spectral Theorem, every real symmetric matrix is orthogonally diagonalizable.",
  tags: ["Symmetric Matrices and the Spectral Theorem"]
},

{
  statement: "There exists an $n\\times n$ matrix $A$ satisfying $A^2-4A+3I_n=0$ and having the eigenvalue $2$.",
  answer: false,
  explanation: "If $A\\vec v=2\\vec v$ with $\\vec v\\neq 0$, then $(A^2-4A+3I)\\vec v=(2^2-4\\cdot2+3)\\vec v = (-1)\\vec v\\neq 0$, contradicting $A^2-4A+3I=0$.",
  tags: ["Diagonalization"]
},

{
  statement: "If $A$ is invertible, then $A$ and $A^{-1}$ have the same characteristic polynomial.",
  answer: false,
  explanation: "For example, if $A=2I_2$, then the eigenvalues of $A$ are $2$ while the eigenvalues of $A^{-1}$ are $1/2$, so their characteristic polynomials differ.",
  tags: ["Diagonalization"]
},

{
  statement: "There is a $6\\times6$ matrix $A$ with 6 positive eigenvalues such that $\\operatorname{tr}(A)=0$.",
  answer: false,
  explanation: "The trace equals the sum of the eigenvalues (counted with algebraic multiplicity). If all six eigenvalues are positive, their sum is positive, so the trace cannot be 0.",
  tags: ["Diagonalization"]
},

// Midterm 2 Practice 2

{
  statement: "If $A$ is invertible, then $A$ and $A^{-1}$ have the same eigenvectors.",
  answer: true,
  explanation: "If $A\\vec v=\\lambda\\vec v$ with $\\vec v\\neq 0$ and $A$ invertible, then $\\lambda\\neq 0$ and $A^{-1}\\vec v=\\frac{1}{\\lambda}\\vec v$. Conversely, if $A^{-1}\\vec v=\\mu\\vec v$, then $A\\vec v=\\frac{1}{\\mu}\\vec v$.",
  tags: ["Diagonalization"]
},

{
  statement: "If $A$ is an $n \\times n$ matrix, then the geometric multiplicities of the eigenvalues of $A$ must add up to $n$.",
  answer: false,
  explanation: "The algebraic multiplicities must add up to $n$. The geometric multiplicities add up to $n$ only if $A$ has an eigenbasis (i.e., is diagonalizable).",
  tags: ["Diagonalization"]
},

{
  statement: "If $z=a+ib$ is a complex number with $a^2+b^2<1$, then $\\lim_{n\\to\\infty} z^n = 0$.",
  answer: true,
  explanation: "Write $z=re^{i\\theta}$ where $r=\\sqrt{a^2+b^2}<1$. Then $z^n=r^n e^{in\\theta}$ and $r^n\\to 0$ as $n\\to\\infty$, so $z^n\\to 0$.",
  tags: ["Discrete Dynamical Systems"]
},

{
  statement: "If $\\vec{0}$ is an asymptotically stable equilibrium of $\\frac{d\\vec{x}}{dt} = A\\vec{x}$, then $\\vec{0}$ cannot be an asymptotically stable equilibrium of $\\frac{d\\vec{x}}{dt} = -A\\vec{x}$.",
  answer: true,
  explanation: "Replacing $A$ by $-A$ reverses growth/decay rates (eigenvalues change sign). If trajectories near $0$ decay toward $0$ for $A$, then they grow away from $0$ for $-A$.",
  tags: ["Continuous Dynamical Systems"]
},

{
  statement: "For any $n \\times n$ matrix $A$, $\\det(A^T)=\\det(A)$.",
  answer: true,
  explanation: "Taking transpose does not change determinant: $\\det(A^T)=\\det(A)$.",
  tags: ["Determinants"]
},

{
  statement: "If the matrix $A$ represents rotation around a line through the origin in $\\mathbb{R}^3$, then $\\det(A-I_3)=0$.",
  answer: true,
  explanation: "A rotation about a line fixes every vector on that line, so $1$ is an eigenvalue of $A$. Hence $\\det(A-I_3)=0$.",
  tags: ["Geometric Transformations"]
},

{
  statement: "If $V$ is a subspace of $\\mathbb{R}^n$, then every vector in $\\mathbb{R}^n$ is either in $V$ or in $V^\\perp$.",
  answer: false,
  explanation: "For example, in $\\mathbb{R}^2$ let $V=\\operatorname{span}\\begin{bmatrix}1\\\\0\\end{bmatrix}$ and $V^\\perp=\\operatorname{span}\\begin{bmatrix}0\\\\1\\end{bmatrix}$. The vector $\\begin{bmatrix}1\\\\1\\end{bmatrix}$ is in neither.",
  tags: ["Orthogonal Matrices"]
},

{
  statement: "If $A$ is any non-invertible $6\\times 6$ matrix, then $\\det(-A)=-\\det(A)$.",
  answer: true,
  explanation: "If $A$ is non-invertible then $\\det(A)=0$. Also $\\det(-A)=(-1)^6\\det(A)=0$. So both sides are $0$.",
  tags: ["Determinants"]
},

{
  statement: "If a matrix $A$ has $\\operatorname{tr}(A)=0$, then $A$ is not invertible.",
  answer: false,
  explanation: "For example, $\\begin{bmatrix}1&0\\\\0&-1\\end{bmatrix}$ has trace $0$ but determinant $-1$, so it is invertible.",
  tags: ["Determinants"]
},

{
  statement: "Let $A$ be an $n\\times m$ matrix. Then $\\dim(\\ker(A^T))+\\dim(\\operatorname{im}(A))=n$.",
  answer: true,
  explanation: "$\\ker(A^T)=(\\operatorname{im}A)^\\perp$. For any subspace $W\\subseteq\\mathbb{R}^n$, $\\dim(W)+\\dim(W^\\perp)=n$. Apply this to $W=\\operatorname{im}A$.",
  tags: ["Image, Kernel and Rank Nullity"]
},

{
  statement: "Let $\\vec{v}_1$ and $\\vec{v}_2$ be eigenvectors of an $n\\times n$ matrix $A$ corresponding to distinct eigenvalues. Then $\\vec{v}_1$ and $\\vec{v}_2$ are orthogonal.",
  answer: false,
  explanation: "This is only guaranteed for symmetric (more generally, normal) matrices. For a general matrix, eigenvectors for different eigenvalues need not be orthogonal.",
  tags: ["Symmetric Matrices and the Spectral Theorem"]
},

{
  statement: "If $A$ and $B$ are $3\\times 3$ matrices, then $\\det(A+B)=\\det(A)+\\det(B)$.",
  answer: false,
  explanation: "Take $A=B=I_3$. Then $\\det(A+B)=\\det(2I_3)=8$, but $\\det(A)+\\det(B)=2$.",
  tags: ["Determinants"]
},

{
  statement: "The matrix $\\begin{bmatrix}3&0&1\\\\0&1&0\\\\0&0&3\\end{bmatrix}$ is diagonalizable.",
  answer: false,
  explanation: "The eigenvalues are $1$ (alg. mult. 1) and $3$ (alg. mult. 2). For $\\lambda=3$, $A-3I=\\begin{bmatrix}0&0&1\\\\0&-2&0\\\\0&0&0\\end{bmatrix}$ has a 1-dimensional kernel, so the geometric multiplicity of 3 is 1. Thus $A$ is not diagonalizable.",
  tags: ["Diagonalization"]
},

{
  statement: "Let $A$ and $B$ be two $n\\times n$ matrices. If $A$ and $B$ are diagonalizable, then $AB$ is diagonalizable.",
  answer: false,
  explanation: "Diagonalizability is not preserved under multiplication unless additional hypotheses hold (e.g., sharing an eigenbasis). There are diagonalizable matrices whose product is not diagonalizable.",
  tags: ["Diagonalization"]
},

{
  statement: "If $A,B,C,$ and $D$ are $3\\times 3$ matrices and $ABCD$ is invertible, then each of $A,B,C,$ and $D$ is invertible.",
  answer: true,
  explanation: "$\\det(ABCD)=\\det(A)\\det(B)\\det(C)\\det(D)\\neq 0$. Therefore each factor has nonzero determinant and is invertible.",
  tags: ["Matrix Inverses"]
},

{
  statement: "If $\\vec{v}$ is an eigenvector of $A$ with eigenvalue $2$, then $\\vec{v}$ is an eigenvector of $A^2-A$ with eigenvalue $2$.",
  answer: true,
  explanation: "If $A\\vec v=2\\vec v$, then $A^2\\vec v=4\\vec v$, so $(A^2-A)\\vec v=4\\vec v-2\\vec v=2\\vec v$.",
  tags: ["Diagonalization"]
},

{
  statement: "Let $A$ be a $2\\times 2$ matrix such that $\\operatorname{tr}(A)=0$ and $\\det(A)\\le 0$. Then all eigenvalues of $A$ are real.",
  answer: true,
  explanation: "The characteristic polynomial is $\\lambda^2-(\\operatorname{tr}A)\\lambda+\\det(A)=\\lambda^2+\\det(A)$. Its roots are $\\pm\\sqrt{-\\det(A)}$, which are real when $\\det(A)\\le 0$.",
  tags: ["Diagonalization"]
},

{
  statement: "If $V$ is a subspace of $\\mathbb{R}^6$ and $\\vec{x}$ is a vector in $\\mathbb{R}^6$, then $(\\operatorname{proj}_V \\vec{x})\\cdot(\\vec{x}-\\operatorname{proj}_V \\vec{x})=0$.",
  answer: true,
  explanation: "$\\operatorname{proj}_V\\vec x$ lies in $V$ and $\\vec x-\\operatorname{proj}_V\\vec x$ lies in $V^\\perp$, so they are orthogonal.",
  tags: ["Orthogonal Matrices"]
},

{
  statement: "If $A$ is the matrix representing rotation in $\\mathbb{R}^2$ by $20^\\circ$ counterclockwise, then $A$ is diagonalizable over $\\mathbb{C}$ but not over $\\mathbb{R}$.",
  answer: true,
  explanation: "A nontrivial rotation in $\\mathbb{R}^2$ has no real eigenvectors, so it is not diagonalizable over $\\mathbb{R}$. Over $\\mathbb{C}$ it has two distinct complex eigenvalues (a conjugate pair), so it is diagonalizable over $\\mathbb{C}$.",
  tags: ["Diagonalization"]
},

// Midterm 2 Practice 3

{
  statement: "Let $A$ be an invertible $n\\times n$ matrix. Then $A^T A$ is invertible.",
  answer: true,
  explanation: "If $A$ is invertible then $A^T$ is invertible (with inverse $(A^{-1})^T$). Hence $A^TA$ is a product of invertible matrices, so it is invertible.",
  tags: ["Matrix Inverses"]
},

{
  statement: "If $S^{-1}AS$ is a diagonal matrix, then the columns of $S$ must be eigenvectors of $A$.",
  answer: true,
  explanation: "If $S^{-1}AS=D$ is diagonal, then $AS=SD$. Writing the $k$th column of $S$ as $S\\vec e_k$, we get $A(S\\vec e_k)=SD\\vec e_k=\\lambda_k(S\\vec e_k)$, so the $k$th column is an eigenvector with eigenvalue $\\lambda_k$.",
  tags: ["Diagonalization"]
},

{
  statement: "If the eigenvalues of a $3\\times 3$ matrix $A$ are $1$ and $2$, then $A$ is diagonalizable.",
  answer: false,
  explanation: "Having only eigenvalues $1$ and $2$ guarantees at most two eigenspaces, and $A$ could fail to have 3 linearly independent eigenvectors. For example, $\\begin{bmatrix}1&1&0\\\\0&1&0\\\\0&0&2\\end{bmatrix}$ is not diagonalizable.",
  tags: ["Diagonalization"]
},

{
  statement: "If $A$ is any square matrix, then $\\det(-A)=-\\det(A)$.",
  answer: false,
  explanation: "For $n\\times n$ matrices, $\\det(-A)=(-1)^n\\det(A)$. For example, if $A=I_2$, then $\\det(-A)=\\det(-I_2)=1\\neq -1=-\\det(I_2)$.",
  tags: ["Determinants"]
},

{
  statement: "For all subspaces $V$ of $\\mathbb{R}^n$, $\\dim(V)+\\dim(V^\\perp)=n$.",
  answer: true,
  explanation: "This is a standard fact about orthogonal complements in $\\mathbb{R}^n$: every subspace satisfies $\\dim(V)+\\dim(V^\\perp)=n$.",
  tags: ["Orthogonal Matrices"]
},

{
  statement: "The product of two symmetric $3\\times 3$ matrices is another symmetric $3\\times 3$ matrix.",
  answer: false,
  explanation: "If $A$ and $B$ are symmetric, then $(AB)^T=B^TA^T=BA$, which need not equal $AB$. There are symmetric matrices with $AB\\ne BA$, making $AB$ non-symmetric.",
  tags: ["Symmetric Matrices and the Spectral Theorem"]
},

{
  statement: "There is a line $L$ through the origin in $\\mathbb{R}^2$ such that the matrix of $\\operatorname{proj}_L$ has determinant $1$.",
  answer: false,
  explanation: "Projection onto a proper subspace is not invertible, so its determinant must be $0$ (in $\\mathbb{R}^2$, it has eigenvalues $1$ and $0$).",
  tags: ["Geometric Transformations"]
},

{
  statement: "If a $4\\times 4$ matrix $A$ has rank $2$ and characteristic polynomial $\\lambda^2(\\lambda-1)(\\lambda-2)$, then there must be an eigenbasis for $A$.",
  answer: true,
  explanation: "The eigenvalues are $1$ and $2$ (each algebraic multiplicity 1) and $0$ (algebraic multiplicity 2). Rank 2 implies nullity 2, so $\\dim\\ker(A)=2$, meaning the geometric multiplicity of eigenvalue 0 is 2. The geometric multiplicities add to $1+1+2=4$, so $A$ has an eigenbasis.",
  tags: ["Diagonalization"]
},

{
  statement: "Let $A$ be a diagonalizable $n\\times n$ matrix. Then, for each eigenvalue $\\lambda$ of $A$, $\\operatorname{rank}(A-\\lambda I_n)$ equals the geometric multiplicity of $\\lambda$.",
  answer: false,
  explanation: "Geometric multiplicity of $\\lambda$ is $\\dim\\ker(A-\\lambda I_n)$, not $\\operatorname{rank}(A-\\lambda I_n)$. In fact, rank + nullity = $n$. For example, if $A=I_2$ and $\\lambda=1$, then $A-\\lambda I=0$ has rank 0 but geometric multiplicity 2.",
  tags: ["Diagonalization"]
},

{
  statement: "If $A$ is a $3\\times 3$ matrix with characteristic polynomial $-\\lambda^3-4\\lambda^2+\\lambda+4$, then $A$ is invertible.",
  answer: true,
  explanation: "Plugging $\\lambda=0$ into $\\det(A-\\lambda I)$ gives $\\det(A)=4\\ne 0$, so $A$ is invertible.",
  tags: ["Matrix Inverses"]
},

{
  statement: "If $A$ is an $n\\times n$ matrix for which $\\det(2A)=4\\det(A)$, then $n=2$.",
  answer: false,
  explanation: "Always $\\det(2A)=2^n\\det(A)$. The equality $2^n\\det(A)=4\\det(A)$ does not force $n=2$ if $\\det(A)=0$. For example, $A=0$ works for any $n$.",
  tags: ["Determinants"]
},

{
  statement: "There exists a $5\\times 5$ matrix $A$ with $\\operatorname{rank}(A)=3$ that has five distinct eigenvalues.",
  answer: false,
  explanation: "Rank 3 implies nullity 2, so $\\dim\\ker(A)=2$, meaning eigenvalue 0 has geometric multiplicity at least 2, hence algebraic multiplicity at least 2. Therefore at most 3 eigenvalues can be nonzero, so $A$ cannot have 5 distinct eigenvalues.",
  tags: ["Image, Kernel and Rank Nullity"]
},

{
  statement: "Every upper triangular matrix is diagonalizable.",
  answer: false,
  explanation: "A standard counterexample is the shear matrix $\\begin{bmatrix}1&1\\\\0&1\\end{bmatrix}$ (or embedded block-diagonally), which is upper triangular but not diagonalizable.",
  tags: ["Diagonalization"]
},

{
  statement: "If $S=\\begin{bmatrix}2&3&6\\\\3&-6&2\\\\6&2&-3\\end{bmatrix}$, then $S^{-1}=S^T$.",
  answer: false,
  explanation: "$S^{-1}=S^T$ holds exactly for orthogonal matrices, i.e., those with orthonormal columns. This matrix does not have orthonormal columns (equivalently $S^TS\\ne I$), so it is not orthogonal.",
  tags: ["Orthogonal Matrices"]
},

{
  statement: "For any $n\\times n$ matrix $A$, $\\operatorname{rref}(A^T)=\\operatorname{rref}(A)$.",
  answer: false,
  explanation: "Row-reducing $A$ and $A^T$ need not give the same rref. For example, $A=\\begin{bmatrix}0&1\\\\0&0\\end{bmatrix}$ has $\\operatorname{rref}(A)=\\begin{bmatrix}0&1\\\\0&0\\end{bmatrix}$, while $A^T=\\begin{bmatrix}0&0\\\\1&0\\end{bmatrix}$ has $\\operatorname{rref}(A^T)=\\begin{bmatrix}1&0\\\\0&0\\end{bmatrix}$.",
  tags: ["Linear Systems"]
},

{
  statement: "$3+6i$ and $1-2i$ are eigenvalues of $\\begin{bmatrix}3&4&-4\\\\-4&3&2\\\\4&-2&3\\end{bmatrix}$.",
  answer: false,
  explanation: "For a real matrix, non-real eigenvalues come in complex conjugate pairs. If $3+6i$ and $1-2i$ were eigenvalues, then $3-6i$ and $1+2i$ would also be eigenvalues, giving at least 4 eigenvalues, impossible for a $3\\times 3$ matrix.",
  tags: ["Diagonalization"]
},

{
  statement: "The matrix $\\begin{bmatrix}1&1&1&1&1\\\\0&2&2&2&2\\\\0&0&3&3&3\\\\0&0&0&4&4\\\\0&0&0&0&5\\end{bmatrix}$ is diagonalizable.",
  answer: true,
  explanation: "It is upper triangular, so its eigenvalues are the diagonal entries $1,2,3,4,5$. Since these are 5 distinct eigenvalues, the matrix is diagonalizable.",
  tags: ["Diagonalization"]
},

{
  statement: "If a $3\\times 3$ matrix $A$ has only two distinct eigenvalues, then $A$ cannot be diagonalizable.",
  answer: false,
  explanation: "For example, $\\begin{bmatrix}1&0&0\\\\0&2&0\\\\0&0&2\\end{bmatrix}$ has only two distinct eigenvalues but is diagonal (hence diagonalizable).",
  tags: ["Diagonalization"]
},

{
  statement: "If $A$ is an $n\\times n$ matrix and $A-I_n$ is diagonalizable, then $A$ is diagonalizable.",
  answer: true,
  explanation: "If $A-I_n = S D S^{-1}$, then $A = S(D+I_n)S^{-1}$, and $D+I_n$ is diagonal. Hence $A$ is diagonalizable.",
  tags: ["Diagonalization"]
},

{
  statement: "If $A$ and $B$ share an eigenbasis, then $AB=BA$.",
  answer: true,
  explanation: "If $A=S D_1 S^{-1}$ and $B=S D_2 S^{-1}$ with the same $S$, then $AB=S(D_1D_2)S^{-1}$ and $BA=S(D_2D_1)S^{-1}$. Since diagonal matrices commute, $D_1D_2=D_2D_1$, so $AB=BA$.",
  tags: ["Diagonalization"]
},

// Midterm 2 Practice 4

{
  statement: "If $A$ is a symmetric matrix with $A^5 = 0$, then $A = 0$.",
  answer: true,
  explanation: "By the Spectral Theorem, $A$ is diagonalizable with real eigenvalues. If $A^5=0$, then every eigenvalue $\\lambda$ satisfies $\\lambda^5=0$, so $\\lambda=0$. Hence all eigenvalues are 0 and $A=0$.",
  tags: ["Symmetric Matrices and the Spectral Theorem"]
},

{
  statement: "If $A$ is a matrix with $A^5 = 0$, then $A = 0$.",
  answer: false,
  explanation: "A counterexample is $A=\\begin{bmatrix}0&1\\\\0&0\\end{bmatrix}$, which is nonzero but satisfies $A^2=0$ (hence $A^5=0$).",
  tags: ["Diagonalization"]
},

{
  statement: "The set of $2 \\times 2$ matrices that have $\\begin{bmatrix}1\\\\3\\end{bmatrix}$ as an eigenvector is a linear space.",
  answer: true,
  explanation: "If $A\\vec v=\\lambda\\vec v$ and $B\\vec v=\\mu\\vec v$, then $(A+B)\\vec v=(\\lambda+\\mu)\\vec v$, and for any scalar $k$, $(kA)\\vec v=(k\\lambda)\\vec v$. So the set is closed under addition and scalar multiplication.",
  tags: ["Abstract Linear Spaces"]
},

{
  statement: "The polynomials $f_1(x)=x^2+3$, $f_2(x)=2x^2-7$, and $f_3(x)=-3x^2+5$ in $P_2$ are linearly independent.",
  answer: false,
  explanation: "All three lie in $\\operatorname{span}(x^2,1)$, which is 2-dimensional, so they cannot be linearly independent.",
  tags: ["Abstract Linear Spaces"]
},

{
  statement: "If $T:P_2\\to\\mathbb{R}^3$ is linear with $T(1)=\\begin{bmatrix}1\\\\0\\\\0\\end{bmatrix}$ and $T(x)=\\begin{bmatrix}0\\\\1\\\\0\\end{bmatrix}$, then $T(x^2)$ must equal $\\begin{bmatrix}0\\\\0\\\\1\\end{bmatrix}$.",
  answer: false,
  explanation: "Knowing $T$ on $1$ and $x$ does not determine $T(x^2)$. For example, define $T(ax^2+bx+c)=\\begin{bmatrix}c\\\\b\\\\0\\end{bmatrix}$; then $T(1)$ and $T(x)$ match, but $T(x^2)=\\vec 0$.",
  tags: ["Abstract Linear Spaces"]
},

{
  statement: "If $(\\vec v_1,\\vec v_2,\\vec v_3)$ is a basis of $\\mathbb{R}^3$ and Gram-Schmidt produces an orthonormal basis $\\mathfrak{B}=(\\vec u_1,\\vec u_2,\\vec u_3)$, then all entries of $[\\vec v_1]_{\\mathfrak{B}}$ are non-negative.",
  answer: true,
  explanation: "Gram-Schmidt sets $\\vec u_1=\\frac{\\vec v_1}{\\|\\vec v_1\\|}$, so $\\vec v_1=\\|\\vec v_1\\|\\vec u_1$, hence $[\\vec v_1]_{\\mathfrak{B}}=\\begin{bmatrix}\\|\\vec v_1\\|\\\\0\\\\0\\end{bmatrix}$ which is entrywise non-negative.",
  tags: ["Orthogonal Matrices"]
},

{
  statement: "If $T:C^{\\infty}\\to\\mathbb{R}$ is the linear transformation defined by $T(f)=f(0)$, then $\\ker(T)$ is finite-dimensional.",
  answer: false,
  explanation: "$\\ker(T)$ is the set of smooth functions with $f(0)=0$, which is infinite-dimensional.",
  tags: ["Abstract Linear Spaces"]
},

{
  statement: "If $A$ represents reflection over a subspace $V\\subseteq\\mathbb{R}^n$, then $\\det(A)=-1$.",
  answer: false,
  explanation: "A reflection has eigenvalue $1$ on $V$ and $-1$ on $V^\\perp$, so $\\det(A)=(-1)^{n-\\dim V}$, which can be $1$ or $-1$ depending on parity.",
  tags: ["Geometric Transformations"]
},

{
  statement: "If $A$ is a $2\\times 2$ matrix with $A^2=0$, then $e^A=I_2+A$.",
  answer: true,
  explanation: "Using $e^A=I+A+\\frac{A^2}{2!}+\\frac{A^3}{3!}+\\cdots$ and $A^2=0$ forces all higher powers to be 0, so $e^A=I+A$.",
  tags: ["Continuous Dynamical Systems"]
},

{
  statement: "There is a real symmetric matrix $A$ with characteristic polynomial $\\lambda^2-4\\lambda+6$.",
  answer: false,
  explanation: "A real symmetric matrix has only real eigenvalues, but $\\lambda^2-4\\lambda+6$ has negative discriminant, so it has no real roots.",
  tags: ["Symmetric Matrices and the Spectral Theorem"]
},

// Midterm 2 Practice 5

{
  statement: "If $A$ is a symmetric $n \\times n$ matrix and $B$ is any $n \\times n$ matrix, then $BAB^T$ is symmetric.",
  answer: true,
  explanation: "$(BAB^T)^T = (B^T)^T A^T B^T = B A^T B^T = BAB^T$ since $A^T = A$.",
  tags: ["Symmetric Matrices and the Spectral Theorem"]
},

{
  statement: "If $\\lambda$ is an eigenvalue of two $n \\times n$ matrices $A$ and $B$, then it is also an eigenvalue of $A+B$.",
  answer: false,
  explanation: "For example, $\\lambda=1$ is an eigenvalue of $A=I_2$ and $B=I_2$, but $A+B=2I_2$ has eigenvalue $2$, not $1$.",
  tags: ["Diagonalization"]
},

{
  statement: "If $\\vec v$ is an eigenvector of two $n \\times n$ matrices $A$ and $B$, then it is also an eigenvector of $A+B$.",
  answer: true,
  explanation: "If $A\\vec v=\\lambda\\vec v$ and $B\\vec v=\\mu\\vec v$, then $(A+B)\\vec v=(\\lambda+\\mu)\\vec v$.",
  tags: ["Diagonalization"]
},

{
  statement: "If a matrix $A$ has two eigenvalues $\\lambda_1$ and $\\lambda_2$ whose eigenspaces satisfy $E_{\\lambda_1}=E_{\\lambda_2}^\\perp$, then $A$ is diagonalizable.",
  answer: true,
  explanation: "Since $E_{\\lambda_1}$ and $E_{\\lambda_2}$ are orthogonal complements, their dimensions add to $n$. Thus the geometric multiplicities add to $n$, so $A$ has an eigenbasis.",
  tags: ["Diagonalization"]
},

{
  statement: "$T:C^\\infty \\to C^\\infty$ defined by $T(f)=f''+4$ is a linear transformation.",
  answer: false,
  explanation: "Linearity requires $T(0)=0$, but $T(0)=4$, which is not the zero function.",
  tags: ["Abstract Linear Spaces"]
},

{
  statement: "If $A$ is an $n \\times n$ matrix, then $A^T$ has the same eigenvectors as $A$.",
  answer: false,
  explanation: "For example, $A=\\begin{bmatrix}1&1\\\\0&1\\end{bmatrix}$ has eigenvector $\\vec e_1$, but $A^T$ does not.",
  tags: ["Diagonalization"]
},

{
  statement: "If $f_1,f_2,f_3 \\in P_5$ and $c_1f_1+c_2f_2+c_3f_3 = 2f_1-7f_2+5f_3$, then $c_2$ must equal $-7$.",
  answer: false,
  explanation: "If $f_1=f_2=f_3$, then many different triples $(c_1,c_2,c_3)$ satisfy the equation, so $c_2$ need not equal $-7$.",
  tags: ["Abstract Linear Spaces"]
},

{
  statement: "There are infinitely many values of $a$ for which $\\begin{bmatrix}a&a\\\\a&a\\end{bmatrix}$ is diagonalizable.",
  answer: true,
  explanation: "Its eigenvalues are $0$ and $2a$. For all $a$, the matrix is diagonalizable (it has two independent eigenvectors).",
  tags: ["Diagonalization"]
},

{
  statement: "If $A$ is a diagonalizable $5 \\times 5$ matrix such that $A^7=0$, then $A$ must be the zero matrix.",
  answer: true,
  explanation: "If $A=SDS^{-1}$, then $A^7=SD^7S^{-1}=0$ implies $D^7=0$. Thus all eigenvalues are 0 and $A=0$.",
  tags: ["Diagonalization"]
},

{
  statement: "If $2f_1+5f_2-3f_3 = 7f_1+2f_2-4f_3$, then $f_1,f_2,f_3$ are linearly dependent.",
  answer: true,
  explanation: "Rearranging gives $-5f_1+3f_2+f_3=0$, a nontrivial linear relation.",
  tags: ["Abstract Linear Spaces"]
},

{
  statement: "If $\\det(A) \\ne 0$, then $\\det(\\operatorname{rref}(A)) \\ne 0$.",
  answer: true,
  explanation: "If $\\det(A)\\ne 0$, then $A$ is invertible, so $\\operatorname{rref}(A)=I_n$ and $\\det(I_n)=1$.",
  tags: ["Determinants"]
},

{
  statement: "If Gram–Schmidt applied to $(\\vec v_1,\\vec v_2,\\vec v_3)$ and to $(\\vec v_1,\\vec v_3,\\vec v_2)$ produces $(\\vec u_1,\\vec u_2,\\vec u_3)$ and $(\\vec w_1,\\vec w_2,\\vec w_3)$, then $\\operatorname{span}(\\vec u_2,\\vec u_3)=\\operatorname{span}(\\vec w_2,\\vec w_3)$.",
  answer: true,
  explanation: "Both sets form orthonormal bases of the same space, and $\\vec u_1=\\vec w_1$. Thus both spans consist of vectors orthogonal to $\\vec v_1$ within the same subspace.",
  tags: ["Orthogonal Matrices"]
},

{
  statement: "If a $2\\times2$ matrix has eigenvalue $e^{i\\pi/50}$, then $A^{100}=I_2$.",
  answer: true,
  explanation: "Its eigenvalues are $e^{\\pm i\\pi/50}$. Raising to the 100th power gives $e^{\\pm 2\\pi i}=1$, so $A^{100}=I_2$.",
  tags: ["Diagonalization"]
},

{
  statement: "If $A$ is an $8\\times6$ matrix with orthogonal columns, then $A^TA$ is diagonal.",
  answer: true,
  explanation: "$A^TA$ has entries $\\vec v_i\\cdot\\vec v_j$. Orthogonal columns make off-diagonal entries zero, so it is diagonal.",
  tags: ["Orthogonal Matrices"]
},

{
  statement: "If $\\begin{bmatrix}1\\\\0\\\\1\\end{bmatrix}$ and $\\begin{bmatrix}3\\\\2\\\\-2\\end{bmatrix}$ are eigenvectors of $A$, then $A$ cannot be symmetric.",
  answer: false,
  explanation: "They could correspond to the same eigenvalue (e.g., $A=I_3$), so $A$ can be symmetric.",
  tags: ["Symmetric Matrices and the Spectral Theorem"]
},

{
  statement: "If $A$ represents reflection over a plane in $\\mathbb{R}^3$, then $\\operatorname{tr}(A)=1$.",
  answer: true,
  explanation: "A reflection over a plane has eigenvalues $1,1,-1$, so the trace is $1+1-1=1$.",
  tags: ["Geometric Transformations"]
},

{
  statement: "If $A$ is orthogonally diagonalizable, then $A^TA=I$.",
  answer: false,
  explanation: "Orthogonal diagonalizability means $A=QDQ^T$, not that $A$ is orthogonal. For example, $\\begin{bmatrix}1&0\\\\0&2\\end{bmatrix}$ is orthogonally diagonalizable but not orthogonal.",
  tags: ["Symmetric Matrices and the Spectral Theorem"]
},

{
  statement: "A matrix whose entries are all nonzero must have a nonzero determinant.",
  answer: false,
  explanation: "For example, $\\begin{bmatrix}1&1\\\\1&1\\end{bmatrix}$ has determinant 0.",
  tags: ["Determinants"]
},

{
  statement: "If $\\vec v$ and $\\vec w$ are eigenvectors with eigenvalues $3$ and $-3$, then $\\vec v-\\vec w$ is an eigenvector.",
  answer: false,
  explanation: "In general $A(\\vec v-\\vec w)=3\\vec v+3\\vec w$, which is not a scalar multiple of $\\vec v-\\vec w$.",
  tags: ["Diagonalization"]
},

// Midterm 2 Spring 2026
{
  statement: "If the columns of a matrix $A$ are linearly dependent, then the system $A\\vec{x}=\\vec{b}$ can never have a unique solution.",
  answer: true,
  explanation: "If the columns of $A$ are linearly dependent, then there is at least one non-pivot column in $\\operatorname{rref}(A)$. Therefore the system has at least one free variable, so it either has infinitely many solutions or is inconsistent.",
  tags: ["Linear Systems"]
},

{
  statement: "The determinant of the matrix $M = \\begin{bmatrix}0 & 0 & 1 \\\\ 0 & 2 & 2 \\\\ 3 & 3 & 3\\end{bmatrix}$ is $6$.",
  answer: false,
  explanation: "Expanding along the first row gives $\\det(M)=1\\cdot\\det\\begin{bmatrix}0&2\\\\3&3\\end{bmatrix}=0\\cdot 3-2\\cdot 3=-6$.",
  tags: ["Determinants"]
},

{
  statement: "If $A$ and $B$ are $n\\times n$ orthogonal matrices, then $AB$ is an orthogonal matrix.",
  answer: true,
  explanation: "If $A$ and $B$ are orthogonal, then $AA^T=BB^T=I_n$. Hence $(AB)(AB)^T=A(BB^T)A^T=AA^T=I_n$, so $AB$ is orthogonal.",
  tags: ["Orthogonal Matrices"]
},

{
  statement: "Let $A$ be an $n\\times n$ matrix. If $A$ is symmetric, then $e^A$ is symmetric.",
  answer: true,
  explanation: "Since $A$ is symmetric, it is orthogonally diagonalizable: $A=SDS^T$ with $S$ orthogonal and $D$ diagonal. Then $e^A=Se^DS^T$, and since $e^D$ is diagonal, $e^A$ is symmetric.",
  tags: ["Symmetric Matrices and the Spectral Theorem"]
},

{
  statement: "If two $3\\times 3$ matrices have the same determinant and the same trace, then they have the same characteristic polynomial.",
  answer: false,
  explanation: "For example, let $A=\\begin{bmatrix}1&0&0\\\\0&1&0\\\\0&0&0\\end{bmatrix}$ and $B=\\begin{bmatrix}2&0&0\\\\0&0&0\\\\0&0&0\\end{bmatrix}$. Then $\\operatorname{tr}(A)=\\operatorname{tr}(B)=2$ and $\\det(A)=\\det(B)=0$, but their characteristic polynomials are different: $(1-\\lambda)^2\\lambda$ and $(2-\\lambda)\\lambda^2$.",
  tags: ["Diagonalization"]
},

{
  statement: "Let $A$ be a $2\\times 2$ matrix that is diagonalizable over $\\mathbb{R}$. Then there exists a $2\\times 2$ real matrix $B$ such that $B^3=A$.",
  answer: true,
  explanation: "Since $A$ is diagonalizable over $\\mathbb{R}$, we can write $A=S\\begin{bmatrix}\\lambda_1&0\\\\0&\\lambda_2\\end{bmatrix}S^{-1}$ with $S$ real and invertible and $\\lambda_1,\\lambda_2\\in\\mathbb{R}$. Then $B=S\\begin{bmatrix}\\sqrt[3]{\\lambda_1}&0\\\\0&\\sqrt[3]{\\lambda_2}\\end{bmatrix}S^{-1}$ is real and satisfies $B^3=A$.",
  tags: ["Diagonalization"]
},

{
  statement: "Let $A,B$ be $2\\times 2$ matrices such that $A=B^2$. If $A$ is diagonalizable, then $B$ is diagonalizable.",
  answer: false,
  explanation: "Take $A=\\begin{bmatrix}0&0\\\\0&0\\end{bmatrix}$ and $B=\\begin{bmatrix}0&1\\\\0&0\\end{bmatrix}$. Then $A=B^2$, and $A$ is diagonalizable, but $B$ is not diagonalizable because its only eigenvalue is $0$ with algebraic multiplicity $2$ and geometric multiplicity $1$.",
  tags: ["Diagonalization"]
},

{
  statement: "The least squares solution $\\vec x^*$ of a system $A\\vec x=\\vec b$ satisfies the equation $A\\vec x^*=\\operatorname{proj}_{\\operatorname{im}A}\\vec b$.",
  answer: true,
  explanation: "By definition, a least-squares solution makes $A\\vec x^*$ the point in $\\operatorname{im}(A)$ closest to $\\vec b$. Therefore $A\\vec x^*=\\operatorname{proj}_{\\operatorname{im}(A)}\\vec b$.",
  tags: ["Least Squares"]
},

{
  statement: "Let $A$ be an $m\\times n$ matrix. If $A^TA$ is invertible, then $m<n$.",
  answer: false,
  explanation: "If $A^TA$ is invertible, then the columns of $A$ are linearly independent. So $A$ has $n$ linearly independent columns in $\\mathbb{R}^m$, which implies $n\\le m$, not $m<n$.",
  tags: ["Image, Kernel and Rank Nullity"]
},

{
  statement: "Let $A$ and $B$ be $2\\times 2$ diagonalizable matrices. Then $AB$ is diagonalizable.",
  answer: false,
  explanation: "For example, let $A=\\begin{bmatrix}-2&-2\\\\-2&-1\\end{bmatrix}$ and $B=\\begin{bmatrix}\\tfrac12&-\\tfrac12\\\\-1&0\\end{bmatrix}$. Both are diagonalizable, but $AB=\\begin{bmatrix}1&1\\\\0&1\\end{bmatrix}$, which is not diagonalizable.",
  tags: ["Diagonalization"]
},

{
  statement: "Let $A$ be a symmetric $n\\times n$ matrix. If $A^2=A$, then $A$ is the matrix of the projection onto a subspace $V\\subset\\mathbb{R}^n$.",
  answer: true,
  explanation: "Since $A$ is symmetric, it is orthogonally diagonalizable: $A=QDQ^T$ for some orthogonal $Q$ and diagonal $D$. The condition $A^2=A$ implies $D^2=D$, so each diagonal entry of $D$ is either $0$ or $1$. Thus $A$ is the orthogonal projection onto the eigenspace corresponding to eigenvalue $1$.",
  tags: ["Symmetric Matrices and the Spectral Theorem"]
},

{
  statement: "If $A$ and $B$ are similar matrices, then $\\det(A)=\\det(B)$.",
  answer: true,
  explanation: "If $B=S^{-1}AS$ for some invertible matrix $S$, then $\\det(B)=\\det(S^{-1})\\det(A)\\det(S)=\\det(A)$.",
  tags: ["Determinants"]
},

{
  statement: "Let $A$ be a $3\\times 3$ matrix with characteristic polynomial $(2-\\lambda)^2(1-\\lambda)$. Then $A$ is similar to the matrix $\\begin{bmatrix}2&0&0\\\\0&2&0\\\\0&0&1\\end{bmatrix}$.",
  answer: false,
  explanation: "The characteristic polynomial determines the eigenvalues and their algebraic multiplicities, but not necessarily diagonalizability. For example, $A=\\begin{bmatrix}2&1&0\\\\0&2&0\\\\0&0&1\\end{bmatrix}$ has this characteristic polynomial but is not diagonalizable, so it is not similar to the diagonal matrix.",
  tags: ["Diagonalization"]
},

{
  statement: "Let $A$ be a symmetric matrix. If $\\vec v\\in\\ker(A)$ and $\\vec w\\in\\operatorname{im}(A)$, then $\\vec v$ and $\\vec w$ are orthogonal.",
  answer: true,
  explanation: "For any matrix $A$, $\\ker(A^T)=(\\operatorname{im}(A))^\\perp$. Since $A$ is symmetric, $A^T=A$, so $\\ker(A)=(\\operatorname{im}(A))^\\perp$. Therefore every vector in the kernel is orthogonal to every vector in the image.",
  tags: ["Symmetric Matrices and the Spectral Theorem"]
},

{
  statement: "If $\\vec v$ is an eigenvector of a matrix $A$ with eigenvalue $\\lambda$, then $\\vec v$ is an eigenvector of $A^2$ with the same eigenvalue $\\lambda$.",
  answer: false,
  explanation: "If $A\\vec v=\\lambda\\vec v$, then $A^2\\vec v=A(A\\vec v)=A(\\lambda\\vec v)=\\lambda A\\vec v=\\lambda^2\\vec v$. So $\\vec v$ is an eigenvector of $A^2$, but with eigenvalue $\\lambda^2$.",
  tags: ["Diagonalization"]
},

{
  statement: "A scalar $\\lambda$ is an eigenvalue for $A$ if and only if the matrix $A-\\lambda I$ is not invertible.",
  answer: true,
  explanation: "By definition, $\\lambda$ is an eigenvalue of $A$ exactly when there exists a nonzero vector $\\vec v$ such that $A\\vec v=\\lambda\\vec v$, equivalently $(A-\\lambda I)\\vec v=\\vec 0$ has a nonzero solution. That happens exactly when $A-\\lambda I$ is not invertible.",
  tags: ["Diagonalization"]
},

{
  statement: "If $\\operatorname{rref}(A)$ has a leading one in every row, then the system $A\\vec x=\\vec b$ must have a unique solution.",
  answer: false,
  explanation: "A leading one in every row means there is no zero row, so the system is consistent for every $\\vec b$. But there may still be free variables, so the solution need not be unique. For example, $A=\\begin{bmatrix}1&0&0\\\\0&1&0\\end{bmatrix}$ has a leading one in every row, but $A\\vec x=\\vec b$ has infinitely many solutions.",
  tags: ["Linear Systems"]
},

{
  statement: "Let $A$ denote a clockwise rotation by $45^\\circ$ in $\\mathbb{R}^2$, and $B$ an orthogonal projection onto a line $L$ through the origin in $\\mathbb{R}^2$. Then $\\ker(AB)=\\operatorname{im}(BA)$.",
  answer: false,
  explanation: "Since $A$ is a rotation, it is invertible, so $\\ker(AB)=\\ker(B)=L^\\perp$. Also, since $A$ maps $\\mathbb{R}^2$ onto itself, $\\operatorname{im}(BA)=\\operatorname{im}(B)=L$. In general $L^\\perp\\ne L$, so these subspaces are not equal.",
  tags: ["Geometric Transformations"]
},

{
  statement: "Let $A$ denote a clockwise rotation by $45^\\circ$ in $\\mathbb{R}^2$, and $B$ an orthogonal projection onto a line $L$ through the origin in $\\mathbb{R}^2$. Then $\\ker(BA)=\\operatorname{im}(AB)$.",
  answer: true,
  explanation: "Since $\\ker(B)=L^\\perp$, we have $\\ker(BA)=A^{-1}(L^\\perp)$. Also $\\operatorname{im}(AB)=A(\\operatorname{im}(B))=A(L)$. Rotating $L^\\perp$ counterclockwise by $45^\\circ$ gives the same line as rotating $L$ clockwise by $45^\\circ$, so these two subspaces are equal.",
  tags: ["Geometric Transformations"]
},

// Final Practice 1

{
  "statement": "A system of linear equations $A \\vec{x} = \\vec{b}$ which is consistent has exactly one solution.",
  "answer": false,
  "explanation": "Consistency means there is at least one solution, but there may be infinitely many. For example, a system with fewer equations than variables can have infinitely many solutions.",
  "tags": ["Linear Systems"]
},
{
  "statement": "There are $2 \\times 2$ matrices $A$ and $B$ such that $A$ represents projection onto a line in $\\mathbb{R}^2$, $B$ represents a rotation, and $AB$ represents a rotation.",
  "answer": false,
  "explanation": "The composition $AB$ maps into the image of $A$, which is a line. A rotation in $\\mathbb{R}^2$ must have full image $\\mathbb{R}^2$, so $AB$ cannot be a rotation.",
  "tags": ["Geometric Transformations"]
},
{
  "statement": "The linear space $P_3$ of polynomials of degree $\\leq 3$ has dimension 3.",
  "answer": false,
  "explanation": "A basis is $(1, x, x^2, x^3)$, so the dimension is 4.",
  "tags": ["Abstract Linear Spaces"]
},
{
  "statement": "Let $D: C^\\infty \\to C^\\infty$ be defined by $D(f)=f'$. Then $f(t)=e^t$ is an eigenfunction of $D^2$ with eigenvalue 1.",
  "answer": true,
  "explanation": "Applying $D^2$ gives the second derivative of $e^t$, which is $e^t$, so $D^2(e^t)=1\\cdot e^t$.",
  "tags": ["Linear Differential Equations"]
},
{
  "statement": "If all eigenvalues of a $2 \\times 2$ matrix $A$ are 0, then $A$ is the zero matrix.",
  "answer": false,
  "explanation": "A matrix can have all eigenvalues zero without being zero, e.g. $\\begin{bmatrix}0 & 1 \\\\ 0 & 0\\end{bmatrix}$.",
  "tags": ["Diagonalization"]
},
{
  "statement": "The set of solutions of the heat equation $\\frac{\\partial f}{\\partial t} = \\mu \\frac{\\partial^2 f}{\\partial x^2}$ satisfying $f(t,0)=f(t,\\pi)=5$ is a linear space.",
  "answer": false,
  "explanation": "The zero function is not in the set since it does not satisfy the boundary conditions, so the set is not a linear space.",
  "tags": ["Partial Differential Equations"]
},
{
  "statement": "$A = \\begin{bmatrix}4/13 & 6/13 \\\\ 7/13 & 9/13\\end{bmatrix}$ represents projection onto the line spanned by $(2,3)$.",
  "answer": false,
  "explanation": "The image of a projection matrix should equal the target line, but the columns of $A$ are not multiples of $(2,3)$.",
  "tags": ["Geometric Transformations"]
},
{
  "statement": "Let $T_1, T_2 : \\mathbb{R}^3 \\to \\mathbb{R}^5$ be linear. If they agree on a basis of $\\mathbb{R}^3$, then they agree on all vectors.",
  "answer": true,
  "explanation": "A linear transformation is completely determined by its values on a basis.",
  "tags": ["Linear Transformations"]
},
{
  "statement": "If $f_1, f_2, f_3$ are linearly dependent in a linear space, then $f_3$ is a linear combination of $f_1$ and $f_2$.",
  "answer": false,
  "explanation": "Linear dependence only guarantees some nontrivial relation; it need not express $f_3$ in terms of $f_1$ and $f_2$ specifically.",
  "tags": ["Linear Combinations"]
},
{
  "statement": "If $f = 2f_1 + 5f_2 + 7f_3 = -3f_1 + 6f_2 + 4f_3$, then $f_1, f_2, f_3$ are linearly dependent.",
  "answer": true,
  "explanation": "Subtracting gives a nontrivial linear relation $5f_1 - f_2 + 3f_3 = 0$.",
  "tags": ["Linear Combinations"]
},
{
  "statement": "It is possible to find four linearly independent solutions to $f''' - 4f'' + 5f' + 7f = 0$.",
  "answer": false,
  "explanation": "A third-order linear homogeneous differential equation has a 3-dimensional solution space.",
  "tags": ["Linear Differential Equations"]
},
{
  "statement": "There is a real $2 \\times 2$ symmetric matrix with trace 4 and determinant 6.",
  "answer": false,
  "explanation": "The characteristic polynomial has negative discriminant, so the eigenvalues are non-real, which is impossible for a real symmetric matrix.",
  "tags": ["Symmetric Matrices and the Spectral Theorem"]
},
{
  "statement": "If a subspace of $\\mathbb{R}^7$ is spanned by three distinct vectors, then its dimension is 3.",
  "answer": false,
  "explanation": "The vectors may be linearly dependent, so the dimension could be less than 3.",
  "tags": ["Subspaces"]
},
{
  "statement": "$T(M)=\\mathrm{rank}(M)$ defines a linear transformation from $\\mathbb{R}^{2\\times2}$ to $\\mathbb{R}$.",
  "answer": false,
  "explanation": "Rank is not linear; it does not preserve scalar multiplication or addition.",
  "tags": ["Abstract Linear Transformations"]
},
{
  "statement": "If $\\vec{0}$ is a least squares solution to $A\\vec{x}=\\vec{b}$, then $\\vec{b} \\in (\\mathrm{im}\\,A)^\\perp$.",
  "answer": true,
  "explanation": "Then $A\\vec{0}=0$ is the projection of $\\vec{b}$ onto $\\mathrm{im}(A)$, so $\\vec{b}$ is orthogonal to the image.",
  "tags": ["Least Squares"]
},
{
  "statement": "The set of polynomials in $P_2$ satisfying $f(2)=0$ is a linear space.",
  "answer": true,
  "explanation": "It is closed under addition and scalar multiplication.",
  "tags": ["Abstract Linear Spaces"]
},
{
  "statement": "With inner product $\\langle f,g \\rangle = f(-1)g(-1)+f(0)g(0)+f(1)g(1)$, the polynomials $1$ and $t$ are orthogonal.",
  "answer": true,
  "explanation": "Compute directly: $1\\cdot(-1)+1\\cdot0+1\\cdot1 = 0$.",
  "tags": ["Inner Products"]
},
{
  "statement": "$f(t,x)=e^{-\\mu t}\\sin t - e^{-25\\mu t}\\sin(5t)$ solves the heat equation $f_t = \\mu f_{xx}$.",
  "answer": false,
  "explanation": "The function does not depend on $x$, so $f_{xx}=0$ while $f_t \\neq 0$.",
  "tags": ["Partial Differential Equations"]
},
{
  "statement": "For any matrix $A$, $\\mathrm{im}(A) = \\mathrm{im}(\\mathrm{rref}(A))$.",
  "answer": false,
  "explanation": "Row operations change the column space, so the images need not match.",
  "tags": ["Image, Kernel and Rank Nullity"]
},
{
  "statement": "If $A$ and $B$ are diagonalizable matrices with the same eigenvectors, then $A+B$ is diagonalizable.",
  "answer": true,
  "explanation": "They can be simultaneously diagonalized, so $A+B$ is diagonalizable.",
  "tags": ["Diagonalization"]
},

// Final Practice 2

  {
    "statement": "There is a linear transformation $T: \\mathbb{R}^3 \\to \\mathbb{R}^2$ such that $T\\!\\left(\\begin{bmatrix}1\\\\3\\\\4\\end{bmatrix}\\right)=\\begin{bmatrix}1\\\\2\\end{bmatrix}$ and $T\\!\\left(\\begin{bmatrix}2\\\\6\\\\8\\end{bmatrix}\\right)=\\begin{bmatrix}1\\\\3\\end{bmatrix}$.",
    "answer": false,
    "explanation": "A linear transformation must preserve scalar multiplication. Since $\\begin{bmatrix}2\\\\6\\\\8\\end{bmatrix}=2\\begin{bmatrix}1\\\\3\\\\4\\end{bmatrix}$, linearity would require $T\\!\\left(\\begin{bmatrix}2\\\\6\\\\8\\end{bmatrix}\\right)=2T\\!\\left(\\begin{bmatrix}1\\\\3\\\\4\\end{bmatrix}\\right)=\\begin{bmatrix}2\\\\4\\end{bmatrix}$, not $\\begin{bmatrix}1\\\\3\\end{bmatrix}$.",
    "tags": ["Linear Transformations"]
  },
  {
    "statement": "If $A$ is a $5\\times 5$ matrix, then the sum of the geometric multiplicities of the real eigenvalues of $A$ is less than or equal to the sum of the algebraic multiplicities.",
    "answer": true,
    "explanation": "For each eigenvalue, geometric multiplicity is always less than or equal to algebraic multiplicity. Summing over the real eigenvalues preserves this inequality.",
    "tags": ["Diagonalization"]
  },
  {
    "statement": "For any invertible $3\\times 3$ matrix $A$, the span of the columns of $A$ is an eigenspace of $A$.",
    "answer": false,
    "explanation": "If $A$ is invertible, its columns span all of $\\mathbb{R}^3$. But $\\mathbb{R}^3$ need not be an eigenspace. For example, for $A=\\operatorname{diag}(4,5,6)$, the eigenspaces are the coordinate axes, not all of $\\mathbb{R}^3$.",
    "tags": ["Image, Kernel and Rank Nullity"]
  },
  {
    "statement": "If $V$ is the set of solutions of $f^{(100)}+4f=0$ satisfying $f(3)=0$, then $V$ is a linear space.",
    "answer": true,
    "explanation": "The differential equation is linear and homogeneous, and the condition $f(3)=0$ is also linear. So sums and scalar multiples of functions in $V$ still satisfy both conditions.",
    "tags": ["Abstract Linear Spaces"]
  },
  {
    "statement": "If we use the inner product $\\langle f,g\\rangle=\\frac{1}{\\pi}\\int_{-\\pi}^{\\pi} f(x)g(x)\\,dx$ on $PS[-\\pi,\\pi]$, then $\\|\\sin(5x)-\\sin(10x)\\|=2$.",
    "answer": false,
    "explanation": "In this inner product, $\\sin(5x)$ and $\\sin(10x)$ are orthonormal. Therefore $\\|\\sin(5x)-\\sin(10x)\\|=\\sqrt{1^2+(-1)^2}=\\sqrt{2}$.",
    "tags": ["Inner Products"]
  },
  {
    "statement": "If $\\vec v_1,\\vec v_2,\\vec v_3$ are linearly independent vectors in $\\mathbb{R}^5$ and $A$ is an invertible $5\\times 5$ matrix, then $A\\vec v_1,A\\vec v_2,A\\vec v_3$ are linearly independent.",
    "answer": true,
    "explanation": "If $c_1A\\vec v_1+c_2A\\vec v_2+c_3A\\vec v_3=\\vec 0$, then $A(c_1\\vec v_1+c_2\\vec v_2+c_3\\vec v_3)=\\vec 0$. Since $A$ is invertible, this implies $c_1\\vec v_1+c_2\\vec v_2+c_3\\vec v_3=\\vec 0$, so all coefficients are zero.",
    "tags": ["Linear Transformations"]
  },
  {
    "statement": "Every $3\\times 3$ matrix has a real eigenvector.",
    "answer": true,
    "explanation": "A $3\\times 3$ real matrix has three eigenvalues over $\\mathbb{C}$ counting multiplicity. Non-real eigenvalues occur in complex conjugate pairs, so at least one eigenvalue must be real, and therefore there is a real eigenvector.",
    "tags": ["Diagonalization"]
  },
  {
    "statement": "If $A$ is a symmetric matrix such that $A^5=0$, then $A=0$.",
    "answer": true,
    "explanation": "A symmetric matrix is diagonalizable, so $A=SDS^{-1}$ for some diagonal matrix $D$. Then $A^5=SD^5S^{-1}=0$, so $D^5=0$. Every diagonal entry of $D$ must therefore be $0$, so $D=0$ and hence $A=0$.",
    "tags": ["Symmetric Matrices and the Spectral Theorem"]
  },
  {
    "statement": "If $A$ is a $7\\times 4$ matrix and the equation $A\\vec x=\\vec b$ is inconsistent for some $\\vec b\\in\\mathbb{R}^7$, then the rank of $A$ must be less than $4$.",
    "answer": false,
    "explanation": "A $7\\times 4$ matrix can have full column rank $4$ and still fail to hit every vector in $\\mathbb{R}^7$. For example, a matrix with pivot columns in the first four rows has rank $4$ but its image is only a 4-dimensional subspace of $\\mathbb{R}^7$, so some $\\vec b$ make the system inconsistent.",
    "tags": ["Image, Kernel and Rank Nullity"]
  },
  {
    "statement": "If a matrix has kernel $\\{\\vec 0\\}$, then it must be invertible.",
    "answer": false,
    "explanation": "This is only guaranteed for square matrices. A non-square matrix can have trivial kernel and still not be invertible, for example $\\begin{bmatrix}1\\\\0\\end{bmatrix}$.",
    "tags": ["Matrix Inverses"]
  },
  {
    "statement": "If $A$ and $B$ are $3\\times 3$ matrices that both have eigenvalues $1,2,4$, then there is an invertible matrix $S$ such that $A=SBS^{-1}$.",
    "answer": true,
    "explanation": "Because the eigenvalues are distinct, both matrices are diagonalizable. Each is similar to $\\operatorname{diag}(1,2,4)$, so they are similar to each other.",
    "tags": ["Diagonalization"]
  },
  {
    "statement": "If $\\lambda$ is an eigenvalue of a matrix $A$, then $\\lambda+5$ is an eigenvalue of $A+5I$.",
    "answer": true,
    "explanation": "If $A\\vec v=\\lambda\\vec v$ for some nonzero vector $\\vec v$, then $(A+5I)\\vec v=A\\vec v+5\\vec v=(\\lambda+5)\\vec v$.",
    "tags": ["Diagonalization"]
  },
  {
    "statement": "The general solution of $f''+4f'+2f=0$ is $f(t)=c_1e^{-2t}\\cos(\\sqrt{2}t)+c_2e^{-2t}\\sin(\\sqrt{2}t)$.",
    "answer": false,
    "explanation": "The characteristic equation is $r^2+4r+2=0$, whose roots are $-2\\pm\\sqrt{2}$. These are real, so the general solution is $f(t)=c_1e^{(-2-\\sqrt{2})t}+c_2e^{(-2+\\sqrt{2})t}$.",
    "tags": ["Linear Differential Equations"]
  },
  {
    "statement": "The solution set of the differential equation $f'+f=e^{3t}$ is $\\{ce^{-t}+\\tfrac14 e^{3t}: c\\in\\mathbb{R}\\}$.",
    "answer": true,
    "explanation": "A particular solution is $\\tfrac14 e^{3t}$, and the homogeneous equation $f'+f=0$ has solution $ce^{-t}$. Therefore the full solution set is $ce^{-t}+\\tfrac14 e^{3t}$.",
    "tags": ["Linear Differential Equations"]
  },
  {
    "statement": "If $A$ represents orthogonal projection onto a plane in $\\mathbb{R}^3$, then $\\det(A+3I)$ cannot be equal to $27$.",
    "answer": true,
    "explanation": "Projection onto a plane in $\\mathbb{R}^3$ has eigenvalues $1,1,0$. So $A+3I$ has eigenvalues $4,4,3$, and its determinant is $4\\cdot4\\cdot3=48$, not $27$.",
    "tags": ["Geometric Transformations"]
  },
  {
    "statement": "There is a $2\\times 2$ matrix $A$ such that $A^2=-I_2$.",
    "answer": true,
    "explanation": "For example, the matrix representing rotation by $90^\\circ$ in $\\mathbb{R}^2$ satisfies $A^2=-I_2$.",
    "tags": ["Geometric Transformations"]
  },
  {
    "statement": "If $V$ is a subspace of $\\mathbb{R}^5$ and $\\vec x\\in\\mathbb{R}^5$, then $\\|\\vec x-\\operatorname{proj}_V(\\vec x)\\|^2+\\|\\operatorname{proj}_V(\\vec x)\\|^2=\\|\\vec x\\|^2$.",
    "answer": true,
    "explanation": "The vectors $\\operatorname{proj}_V(\\vec x)$ and $\\vec x-\\operatorname{proj}_V(\\vec x)$ are orthogonal, so the Pythagorean Theorem gives the identity.",
    "tags": ["Orthogonal Matrices"]
  },
  {
    "statement": "There is a subspace $V$ of $\\mathbb{R}^3$ such that $\\dim(V^\\perp)=\\dim(V)$.",
    "answer": false,
    "explanation": "For any subspace of $\\mathbb{R}^3$, we have $\\dim(V)+\\dim(V^\\perp)=3$. These two dimensions cannot be equal because then their sum would be even, not $3$.",
    "tags": ["Subspaces"]
  },
  {
    "statement": "If $A$ is an $n\\times n$ matrix and $S$ is a matrix whose columns form an eigenbasis for $A$, then $AS=DS$ for some diagonal matrix $D$.",
    "answer": false,
    "explanation": "If the columns of $S$ are eigenvectors of $A$, then the correct relation is $AS=SD$, not $DS$. In $AS=SD$, the diagonal entries of $D$ are the corresponding eigenvalues.",
    "tags": ["Diagonalization"]
  },
  {
    "statement": "$(1+x,\\;2x+3,\\;3x^2+7,\\;x^2-x)$ is a basis of $P_2$.",
    "answer": false,
    "explanation": "The space $P_2$ has dimension $3$, so any basis must have exactly $3$ elements. This set has $4$ elements.",
    "tags": ["Abstract Linear Spaces"]
  },

// Final Practice 3

  {
    "statement": "A linear system with 6 equations and 7 unknowns must have at least one solution.",
    "answer": false,
    "explanation": "A system can still be inconsistent even if it has fewer equations than unknowns. For example, two equations with the same left-hand side but different constants are inconsistent.",
    "tags": ["Linear Systems"]
  },
  {
    "statement": "If the sum of all algebraic multiplicities of the real eigenvalues of a $3\\times 3$ matrix $A$ is equal to $3$, then the matrix is diagonalizable over $\\mathbb{R}$.",
    "answer": false,
    "explanation": "Having three real eigenvalues counted with algebraic multiplicity does not guarantee diagonalizability. A Jordan block such as $\\begin{bmatrix}1&1&1\\\\0&1&1\\\\0&0&1\\end{bmatrix}$ has only the real eigenvalue $1$ with algebraic multiplicity $3$, but it is not diagonalizable.",
    "tags": ["Diagonalization"]
  },
  {
    "statement": "$I:C^\\infty\\to\\mathbb{R}$ defined by $I(f)=\\int_0^1 x^2 f(x)\\,dx$ is a linear transformation.",
    "answer": true,
    "explanation": "Integration is linear, so $I(f+g)=I(f)+I(g)$ and $I(kf)=kI(f)$.",
    "tags": ["Abstract Linear Transformations"]
  },
  {
    "statement": "Every $2\\times 2$ matrix is diagonalizable over $\\mathbb{C}$.",
    "answer": false,
    "explanation": "A Jordan block such as $\\begin{bmatrix}1&1\\\\0&1\\end{bmatrix}$ is not diagonalizable, even over $\\mathbb{C}$.",
    "tags": ["Diagonalization"]
  },
  {
    "statement": "The linear system $\\begin{bmatrix}1&2\\\\3&7\\\\-2&5\\\\6&4\\\\14&-3\\end{bmatrix}\\vec{x}=\\begin{bmatrix}a\\\\0\\\\b\\\\0\\\\c\\end{bmatrix}$ is consistent for all real numbers $a,b,c$.",
    "answer": false,
    "explanation": "The right-hand sides of that form span a 3-dimensional subspace of $\\mathbb{R}^5$, but the image of the $5\\times 2$ coefficient matrix has dimension at most 2. So not all such vectors can lie in the image.",
    "tags": ["Linear Systems"]
  },
  {
    "statement": "If $\\vec v_1,\\vec v_2,\\vec v_3$ are any linearly dependent vectors in $\\mathbb{R}^n$, then $\\vec v_3$ is a linear combination of $\\vec v_1$ and $\\vec v_2$.",
    "answer": false,
    "explanation": "Linear dependence only guarantees that one of the vectors is a linear combination of the others, not necessarily $\\vec v_3$. For example, if $\\vec v_1=\\vec v_2=\\vec e_1$ and $\\vec v_3=\\vec e_2$, then the three vectors are linearly dependent but $\\vec v_3$ is not in the span of $\\vec v_1$ and $\\vec v_2$.",
    "tags": ["Linear Combinations"]
  },
  {
    "statement": "If $A$ is a symmetric $4\\times 4$ matrix satisfying $A^2=A$, then $A$ has at least one eigenvalue with algebraic multiplicity greater than $1$.",
    "answer": true,
    "explanation": "Any eigenvalue $\\lambda$ must satisfy $\\lambda^2=\\lambda$, so the only possible eigenvalues are $0$ and $1$. Since the algebraic multiplicities add up to $4$, at least one of these eigenvalues must have algebraic multiplicity greater than $1$.",
    "tags": ["Symmetric Matrices and the Spectral Theorem"]
  },
  {
    "statement": "If $(f_1,f_2,f_3)$ is a basis of a linear space $V$, then $(f_1,f_1+f_2,f_2+f_3)$ is also a basis of $V$.",
    "answer": true,
    "explanation": "If $c_1f_1+c_2(f_1+f_2)+c_3(f_2+f_3)=0$, then $(c_1+c_2)f_1+(c_2+c_3)f_2+c_3f_3=0$. Since $(f_1,f_2,f_3)$ is a basis, all coefficients must be zero, so $c_1=c_2=c_3=0$. Thus the new list is linearly independent, and since $V$ has dimension 3, it is a basis.",
    "tags": ["Abstract Linear Spaces"]
  },
  {
    "statement": "If $T:P_3\\to P_3$ is a linear transformation and $(1,x)$ is a basis of $\\ker(T)$, then $(x^2,x^3)$ is a basis of $\\operatorname{im}(T)$.",
    "answer": false,
    "explanation": "Knowing that $\\ker(T)$ has basis $(1,x)$ tells us only that $\\dim(\\ker T)=2$, so rank-nullity gives $\\dim(\\operatorname{im}T)=2$. But the image need not be exactly $\\operatorname{span}(x^2,x^3)$. For example, if $T(f)=f''$, then the image is $P_1$.",
    "tags": ["Abstract Linear Transformations"]
  },
  {
    "statement": "If $\\mathfrak{B}=\\left(\\begin{bmatrix}1\\\\2\\\\3\\end{bmatrix},\\begin{bmatrix}2\\\\0\\\\7\\end{bmatrix},\\begin{bmatrix}-2\\\\1\\\\4\\end{bmatrix}\\right)$ is a basis of $\\mathbb{R}^3$ and $\\vec x=\\begin{bmatrix}0\\\\5\\\\10\\end{bmatrix}$, then $[\\vec x]_{\\mathfrak{B}}=\\begin{bmatrix}2\\\\0\\\\1\\end{bmatrix}$.",
    "answer": true,
    "explanation": "This coordinate vector means $\\vec x=2\\begin{bmatrix}1\\\\2\\\\3\\end{bmatrix}+0\\begin{bmatrix}2\\\\0\\\\7\\end{bmatrix}+1\\begin{bmatrix}-2\\\\1\\\\4\\end{bmatrix}=\\begin{bmatrix}0\\\\5\\\\10\\end{bmatrix}$, which is correct.",
    "tags": ["Coordinates"]
  },
  {
    "statement": "The rank of a diagonal matrix $A$ equals the number of nonzero entries in $A$.",
    "answer": true,
    "explanation": "In a diagonal matrix, each nonzero diagonal entry gives a nonzero column that is a multiple of a different standard basis vector. These nonzero columns are linearly independent, so the rank is exactly the number of nonzero diagonal entries.",
    "tags": ["Image, Kernel and Rank Nullity"]
  },
  {
    "statement": "If an $n\\times n$ matrix $A$ has an eigenbasis $(\\vec v_1,\\ldots,\\vec v_n)$, then applying Gram-Schmidt to $\\vec v_1,\\ldots,\\vec v_n$ gives an orthonormal eigenbasis $(\\vec u_1,\\ldots,\\vec u_n)$ for $A$.",
    "answer": false,
    "explanation": "Gram-Schmidt preserves span but not the property of being an eigenvector. The orthonormal vectors it produces need not be eigenvectors of $A$.",
    "tags": ["Orthogonal Matrices"]
  },
  {
    "statement": "If $f_1$ and $f_2$ are solutions of $f'''(t)-7f(t)=e^{2t}$, then $f_1-f_2$ is a solution of $f'''(t)-7f(t)=0$.",
    "answer": true,
    "explanation": "Subtracting the two equations $f_1'''-7f_1=e^{2t}$ and $f_2'''-7f_2=e^{2t}$ gives $(f_1-f_2)'''-7(f_1-f_2)=0$.",
    "tags": ["Linear Differential Equations"]
  },
  {
    "statement": "There is a linear transformation $T:P_4\\to\\mathbb{R}^2$ such that $T(x^3-2x)=\\begin{bmatrix}1\\\\1\\end{bmatrix}$, $T(x^3+2x)=\\begin{bmatrix}1\\\\-1\\end{bmatrix}$, and $T(x^3)=\\begin{bmatrix}0\\\\1\\end{bmatrix}$.",
    "answer": false,
    "explanation": "By linearity, $T(2x^3)=T(x^3-2x)+T(x^3+2x)=\\begin{bmatrix}2\\\\0\\end{bmatrix}$, so $T(x^3)=\\frac12\\begin{bmatrix}2\\\\0\\end{bmatrix}=\\begin{bmatrix}1\\\\0\\end{bmatrix}$. This contradicts the claimed value $\\begin{bmatrix}0\\\\1\\end{bmatrix}$.",
    "tags": ["Abstract Linear Transformations"]
  },
  {
    "statement": "If $A$ is a $5\\times 5$ matrix with rank $2$, then the eigenvalue $0$ has algebraic multiplicity $3$.",
    "answer": false,
    "explanation": "Rank-nullity implies that $\\dim(\\ker A)=3$, so the eigenvalue $0$ has geometric multiplicity $3$. But its algebraic multiplicity can be larger than 3.",
    "tags": ["Image, Kernel and Rank Nullity"]
  },
  {
    "statement": "If $A$ is a $2\\times 2$ matrix with $\\det A=0$, then the continuous dynamical system $\\dfrac{d\\vec{x}}{dt}=A\\vec{x}$ has infinitely many solutions satisfying the initial condition $\\vec{x}(0)=\\begin{bmatrix}1\\\\2\\end{bmatrix}$.",
    "answer": false,
    "explanation": "A linear system of differential equations with a given initial condition always has exactly one solution, namely $\\vec{x}(t)=e^{At}\\vec{x}(0)$.",
    "tags": ["Continuous Dynamical Systems"]
  },
  {
    "statement": "If $V,W,U$ are linear spaces and $T:V\\to W$ and $S:W\\to U$ are linear transformations, then the composition $C:V\\to U$ defined by $C(v)=S(T(v))$ is a linear transformation.",
    "answer": true,
    "explanation": "Composition of linear maps preserves addition and scalar multiplication, so $C$ is linear.",
    "tags": ["Abstract Linear Transformations"]
  },
  {
    "statement": "A $3\\times 3$ matrix $A$ is invertible if and only if all of its eigenvalues are positive.",
    "answer": false,
    "explanation": "A matrix is invertible if and only if all of its eigenvalues are nonzero, not necessarily positive. Negative eigenvalues are allowed.",
    "tags": ["Matrix Inverses"]
  },
  {
    "statement": "If $T:P_4\\to\\mathbb{R}^{5\\times 7}$ is a linear transformation, then $\\dim(\\operatorname{im}T)\\le 5$.",
    "answer": true,
    "explanation": "Since $\\dim(P_4)=5$, rank-nullity gives $\\dim(\\operatorname{im}T)\\le 5$.",
    "tags": ["Image, Kernel and Rank Nullity"]
  },
  {
    "statement": "The space of solutions of the differential equation $f''+4f'+4f=0$ is 1-dimensional.",
    "answer": false,
    "explanation": "This is a second-order homogeneous linear differential equation, so its solution space is 2-dimensional. In fact, the general solution is $(c_1+c_2 t)e^{-2t}$.",
    "tags": ["Linear Differential Equations"]
  },

// Quiz 1

{
  statement: "A system of $n$ linear equations in $n$ unknowns has at most $1$ solution.",
  answer: false,
  explanation: "For example, the system $x+y=2$ and $2x+2y=4$ has infinitely many solutions. Thus a system of $n$ equations in $n$ unknowns can have more than one solution.",
  tags: ["Linear Systems"]
},

{
  statement: "Let $A$ be an $n \\times m$ matrix and $B = \\operatorname{rref}(A)$. Then, for every $\\vec{b}$ in $\\mathbb{R}^n$, the systems $A\\vec{x}=\\vec{b}$ and $B\\vec{x}=\\vec{b}$ have the same solutions.",
  answer: false,
  explanation: "Row operations change the right-hand side unless they are also applied to $\\vec b$. For example, if $A = \\begin{bmatrix} 2 & 0 \\\\ 0 & 2 \\end{bmatrix}$ and $B = I$, then $A\\vec x = \\vec b$ gives $\\vec x = \\tfrac12 \\vec b$, while $B\\vec x = \\vec b$ gives $\\vec x = \\vec b$, which are different when $\\vec b \\neq 0$.",
  tags: ["Linear Systems"]
},

{
  statement: "Let $A$ be an $n \\times m$ matrix and $B = \\operatorname{rref}(A)$. Then there is a $\\vec{b}$ in $\\mathbb{R}^n$ such that the systems $A\\vec{x}=\\vec{b}$ and $B\\vec{x}=\\vec{b}$ have the same solutions.",
  answer: true,
  explanation: "Take $\\vec b = \\vec 0$. Both systems reduce to the homogeneous system, and row operations do not change the solution set of $A\\vec x = 0$.",
  tags: ["Linear Systems"]
},

{
  statement: "If $A$ is an $n \\times m$ matrix and $A \\vec{x} = \\vec{b}$ has infinitely many solutions, then $m > n$.",
  answer: false,
  explanation: "For example, let $A = \\begin{bmatrix} 1 & 1 \\\\ 2 & 2 \\end{bmatrix}$ and $\\vec b = \\begin{bmatrix} 2 \\\\ 4 \\end{bmatrix}$. Here $n=m=2$, yet the system has infinitely many solutions.",
  tags: ["Linear Systems"]
},

{
  statement: "If $k\\in \\mathbb{R}$, then the function $T : \\mathbb{R}^n \\rightarrow \\mathbb{R}^n$ defined by $T(\\vec{x}) = k \\vec{x}$ is a linear transformation.",
  answer: true,
  explanation: "$T(\\vec x + \\vec y) = k(\\vec x + \\vec y) = k\\vec x + k\\vec y$ and $T(c\\vec x) = k(c\\vec x) = c(k\\vec x)$. Thus $T$ preserves addition and scalar multiplication.",
  tags: ["Linear Transformations"]
},

{
  statement: "The transformation $T : \\mathbb{R}^2 \\rightarrow \\mathbb{R}$ defined by $T\\left(\\begin{bmatrix} x_1 \\\\ x_2 \\end{bmatrix}\\right) = x_1 x_2$ is a linear transformation.",
  answer: false,
  explanation: "Linearity requires $T(c\\vec x) = cT(\\vec x)$. But $T\\left(2\\begin{bmatrix}1\\\\1\\end{bmatrix}\\right)=4$, while $2T\\left(\\begin{bmatrix}1\\\\1\\end{bmatrix}\\right)=2$, so $T$ is not linear.",
  tags: ["Linear Transformations"]
},

// Quiz 2

{
  statement: "If $k\\in \\mathbb{R}$, then the three vectors $\\begin{bmatrix} -1 \\\\ 1 \\\\ 1 \\end{bmatrix}$, $\\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\end{bmatrix}$, and $\\begin{bmatrix} 1 \\\\ -1 \\\\ k \\end{bmatrix}$ form a basis of $\\mathbb{R}^3$.",
  answer: false,
  explanation: "If $k = -1$, then the third vector becomes $\\begin{bmatrix} 1 \\\\ -1 \\\\ -1 \\end{bmatrix}$, and the matrix with these vectors as columns has two identical rows after row reduction, giving a zero row. Thus the vectors are linearly dependent and do not form a basis.",
  tags: ["Linear Combinations"]
},

{
  statement: "For any two vectors $\\vec{x}_1$ and $\\vec{x}_2$, $\\operatorname{span}(\\vec{x}_1, \\vec{x}_1 - \\vec{x}_2, \\vec{x}_2) = \\operatorname{span}(\\vec{x}_1, \\vec{x}_2)$.",
  answer: true,
  explanation: "Any linear combination of $\\vec{x}_1$ and $\\vec{x}_2$ is clearly in the larger span. Conversely, any vector of the form $c_1\\vec{x}_1 + c_2(\\vec{x}_1 - \\vec{x}_2) + c_3\\vec{x}_2$ can be rewritten as $(c_1+c_2)\\vec{x}_1 + (-c_2+c_3)\\vec{x}_2$, which lies in $\\operatorname{span}(\\vec{x}_1, \\vec{x}_2)$.",
  tags: ["Linear Combinations"]
},

{
  statement: "$\\begin{bmatrix}1\\\\2\\end{bmatrix}$, $\\begin{bmatrix}3\\\\4\\end{bmatrix}$, and $\\begin{bmatrix}5\\\\6\\end{bmatrix}$ form a basis of $\\mathbb{R}^2$.",
  answer: false,
  explanation: "A basis of $\\mathbb{R}^2$ must contain exactly two linearly independent vectors. Any set of three vectors in $\\mathbb{R}^2$ is automatically linearly dependent.",
  tags: ["Linear Combinations"]
},

{
  statement: "If the vectors $\\vec{v}_1, \\vec{v}_2,\\dots, \\vec{v}_n$ form a basis of $\\mathbb{R}^n$ and $T:\\mathbb{R}^n\\rightarrow\\mathbb{R}^n$ is a linear transformation, then the vectors $T(\\vec{v}_1), T(\\vec{v}_2),\\dots, T(\\vec{v}_n)$ also form a basis of $\\mathbb{R}^n$.",
  answer: false,
  explanation: "This need not hold if $T$ is not invertible. For example, if $T(\\vec{x}) = \\vec{0}$ for all $\\vec{x}$, then all the images are zero and do not form a basis.",
  tags: ["Linear Combinations"]
},

{
  statement: "There are only finitely many $2 \\times 2$ matrices $A$ such that $A^2 = I$.",
  answer: false,
  explanation: "Any reflection matrix satisfies $A^2 = I$. Since there are infinitely many possible reflection lines in the plane, there are infinitely many such matrices.",
  tags: ["Geometric Transformations"]
},

// Quiz 3

{
  statement: "If $A$, $B$, and $C$ are invertible $n \\times n$ matrices, then the inverse of $A^{-1}(BC)$ is $(B^{-1} C^{-1})A$.",
  answer: false,
  explanation: "Using $(XYZ)^{-1} = Z^{-1}Y^{-1}X^{-1}$, we have $(A^{-1}BC)^{-1} = C^{-1}B^{-1}(A^{-1})^{-1} = C^{-1}B^{-1}A$, not $(B^{-1}C^{-1})A$.",
  tags: ["Matrix Inverses"]
},

{
  statement: "If $A$ and $B$ are invertible $n \\times n$ matrices, then $A - B$ is invertible.",
  answer: false,
  explanation: "A counterexample is $A$ any invertible matrix, and $A = B$. Then $A-B = 0$, which is not invertible.",
  tags: ["Matrix Inverses"]
},

{
  statement: "Let $A$ be an $n \\times n$ matrix that has exactly one $1$ in each row and one $1$ in each column, and whose other entries are all $0$. Then $A$ must be invertible.",
  answer: true,
  explanation: "Such a matrix permutes the standard basis vectors, so it represents a permutation matrix. Permutation matrices are invertible; their inverses are their transposes.",
  tags: ["Matrix Inverses"]
},

{
  statement: "Suppose $T$ is a linear transformation $\\mathbb{R}^2 \\rightarrow \\mathbb{R}^2$ and $\\mathfrak{B}$ is a basis of $\\mathbb{R}^2$. If $T$ has $\\mathfrak{B}$-matrix $\\begin{bmatrix} 1 & 0\\\\ 0 & 0 \\end{bmatrix}$, then it is an orthogonal projection onto a line.",
  answer: false,
  explanation: "The matrix represents projection onto the span of the first basis vector relative to $\\mathfrak{B}$. It is an orthogonal projection only if the basis $\\mathfrak{B}$ is orthonormal. For a non-orthogonal basis, the projection need not be orthogonal.",
  tags: ["Coordinates"]
},

{
  statement: "Let $A$ be the matrix of a clockwise rotation by $30^\\circ$ followed by a reflection along the line $y=x$. Let $B$ be the matrix of a reflection along the line $y=x$ followed by a counterclockwise rotation by $30^\\circ$. Then $A^{-1}=B$.",
  answer: true,
  explanation: "Let $R$ be the matrix of counterclockwise rotation by $30^\\circ$ and $P$ the reflection across $y=x$. Then $A = PR^{-1}$ and $B = RP$. Computing $AB = PR^{-1}RP = P^2 = I$, since reflections satisfy $P^2=I$. Thus $A^{-1}=B$.",
  tags: ["Coordinates"]
},

{
  statement: "If $\\vec{v}_1, \\vec{v}_2$, and $\\vec{v}_3$ are vectors in $\\mathbb{R}^3$ such that no two of them are parallel, then $\\operatorname{span}(\\vec{v}_1, \\vec{v}_2, \\vec{v}_3)=\\mathbb{R}^3$.",
  answer: false,
  explanation: "The vectors could all lie in the same plane without any two being parallel. For example, $\\begin{bmatrix}1\\\\0\\\\0\\end{bmatrix}$, $\\begin{bmatrix}0\\\\1\\\\0\\end{bmatrix}$, and $\\begin{bmatrix}2\\\\3\\\\0\\end{bmatrix}$ are not pairwise parallel but span only a plane.",
  tags: ["Linear Combinations"]
},

// Quiz 4

{
  statement: "The set $V = \\left\\{ \\begin{bmatrix} x \\\\ y \\end{bmatrix} : xy = 0 \\right\\}$ is a subspace of $\\mathbb{R}^2$.",
  answer: false,
  explanation: "$V$ is not closed under addition. For example, $\\begin{bmatrix}1\\\\0\\end{bmatrix}$ and $\\begin{bmatrix}0\\\\1\\end{bmatrix}$ are in $V$, but their sum $\\begin{bmatrix}1\\\\1\\end{bmatrix}$ is not, since $1 \\cdot 1 \\neq 0$.",
  tags: ["Subspaces"]
},

{
  statement: "If $2 \\vec{v}_1 - 3 \\vec{v}_2 + 4 \\vec{v}_3 = \\vec{v}_1 + 2 \\vec{v}_2 - \\vec{v}_3$, then $\\vec{v}_1, \\vec{v}_2, \\vec{v}_3$ must be linearly dependent.",
  answer: true,
  explanation: "Rewriting gives $\\vec{v}_1 - 5\\vec{v}_2 + 5\\vec{v}_3 = \\vec{0}$, which is a nontrivial linear combination equal to zero. Therefore the vectors are linearly dependent.",
  tags: ["Linear Combinations"]
},

{
  statement: "If $\\ker A = \\{\\vec{0}\\}$, then $A$ is invertible.",
  answer: false,
  explanation: "This is true only for square matrices. If $A$ has more rows than columns, it can have trivial kernel without being invertible. For example, $A = \\begin{bmatrix} 1 & 0\\\\ 0 & 1\\\\ 0 & 0 \\end{bmatrix}$ has trivial kernel but is not invertible.",
  tags: ["Matrix Inverses", "Image, Kernel and Rank Nullity"]
},

{
  statement: "If $A$ is a $5 \\times 7$ matrix, then the nullity of $A$ is at least 2.",
  answer: true,
  explanation: "By rank–nullity, $\\text{rank}(A) + \\text{nullity}(A) = 7$. Since the rank is at most 5, the nullity must be at least $7 - 5 = 2$.",
  tags: ["Image, Kernel and Rank Nullity"]
},

{
  statement: "The nullity of a projection onto a line is always 1.",
  answer: false,
  explanation: "The rank of a projection onto a line is 1. In $n$ dimensions, rank–nullity gives nullity $= n - 1$. Thus the nullity depends on the ambient dimension and is not always 1.",
  tags: ["Image, Kernel and Rank Nullity"]
},

// Quiz 5

{
  statement: "There is a subspace $V$ of $\\mathbb{R}^4$ such that $V = V^\\perp$.",
  answer: false,
  explanation: "If a vector lies in both $V$ and $V^\\perp$, then it must be perpendicular to itself. The only vector perpendicular to itself is $\\vec{0}$. Thus $V \\cap V^\\perp = \\{\\vec{0}\\}$, so $V$ cannot equal $V^\\perp$ unless $V = \\{\\vec{0}\\}$, but then $V^\\perp = \\mathbb{R}^4$.",
  tags: ["Orthogonal Matrices"]
},

{
  statement: "If $(\\vec{u}_1, \\vec{u}_2, \\vec{u}_3)$ and $(\\vec{v}_1, \\vec{v}_2, \\vec{v}_3)$ are two orthonormal bases for $\\mathbb{R}^3$, then $\\vec{u}_i \\cdot \\vec{v}_j = 0$ for all $i,j=1,2,3$.",
  answer: false,
  explanation: "Two orthonormal bases need not be orthogonal to each other. For example, if $(\\vec{u}_1,\\vec{u}_2,\\vec{u}_3)=(\\vec{e}_1,\\vec{e}_2,\\vec{e}_3)$ and $(\\vec{v}_1,\\vec{v}_2,\\vec{v}_3)=(\\vec{e}_3,\\vec{e}_2,\\vec{e}_1)$, then $\\vec{u}_1\\cdot\\vec{v}_3=1$.",
  tags: ["Orthogonal Matrices"]
},

{
  statement: "Applying the Gram–Schmidt process to the vectors $\\left( \\begin{bmatrix} -1 \\\\ 3 \\end{bmatrix}, \\begin{bmatrix} 2 \\\\ -6 \\end{bmatrix} \\right)$ will give an orthonormal basis of $\\mathbb{R}^2$.",
  answer: false,
  explanation: "The vectors are linearly dependent since $\\begin{bmatrix} 2 \\\\ -6 \\end{bmatrix} = -2 \\begin{bmatrix} -1 \\\\ 3 \\end{bmatrix}$. In Gram–Schmidt, the second step produces the zero vector, so we do not obtain a basis of $\\mathbb{R}^2$.",
  tags: ["Orthogonal Matrices"]
},

{
  statement: "For any matrix $A$, $(\\ker A)^\\perp = \\operatorname{im}(A^T)$.",
  answer: true,
  explanation: "We know that $(\\operatorname{im} B)^\\perp = \\ker(B^T)$ for any matrix $B$. Taking $B=A^T$ gives $(\\operatorname{im} A^T)^\\perp = \\ker A$. Taking orthogonal complements of both sides yields $(\\ker A)^\\perp = \\operatorname{im}(A^T)$.",
  tags: ["Image, Kernel and Rank Nullity"]
},

{
  statement: "$\\det(4A) = 4\\det(A)$ for all $4 \\times 4$ matrices $A$.",
  answer: false,
  explanation: "For an $n \\times n$ matrix, $\\det(cA) = c^n \\det(A)$. When $n=4$, $\\det(4A)=4^4\\det(A)=256\\det(A)$, not $4\\det(A)$. For example, if $A=I_4$, then $\\det(4I_4)=256$.",
  tags: ["Determinants"]
},

// Quiz 6
{
  statement: "If $\\vec{b} \\in \\operatorname{im} A$, then the least squares solutions of $A \\vec{x} = \\vec{b}$ are exactly the solutions of $A \\vec{x} = \\vec{b}$.",
  answer: true,
  explanation: "Least squares solutions minimize $\\|A\\vec{x} - \\vec{b}\\|$. If $\\vec{b} \\in \\operatorname{im} A$, then there exists $\\vec{x}$ such that $A\\vec{x} = \\vec{b}$, making the error zero. Thus the least squares solutions are precisely the actual solutions of the system.",
  tags: ["Least Squares"]
},

{
  statement: "If $\\vec{x}^*$ is the least squares solution to $A\\vec{x}=\\vec{b}$, then $\\vec{b}-A\\vec{x}^* \\in (\\operatorname{im} A)^\\perp$.",
  answer: true,
  explanation: "The least squares solution satisfies the normal equations $A^T(A\\vec{x}^* - \\vec{b}) = 0$, which implies $A^T(\\vec{b}-A\\vec{x}^*)=0$. Thus $\\vec{b}-A\\vec{x}^*$ is orthogonal to every column of $A$, meaning it lies in $(\\operatorname{im} A)^\\perp$.",
  tags: ["Least Squares"]
},

{
  statement: "Any vector $\\vec v$ that satisfies $A\\vec{v}=\\lambda \\vec{v}$ for some $\\lambda$ is an eigenvector for $A$.",
  answer: false,
  explanation: "Eigenvectors must be nonzero. The zero vector satisfies $A\\vec{0}=\\lambda \\vec{0}$ for every $\\lambda$, but it is not an eigenvector.",
  tags: ["Diagonalization"]
},

{
  statement: "If $A$ is an $n \\times n$ matrix and $\\vec{v}$ is an eigenvector of $A$, then $\\vec{v}$ is also an eigenvector of $A + 3 I_n$.",
  answer: true,
  explanation: "If $A\\vec{v}=\\lambda\\vec{v}$, then $(A+3I_n)\\vec{v}=A\\vec{v}+3\\vec{v}=(\\lambda+3)\\vec{v}$. Thus $\\vec{v}$ remains an eigenvector, with eigenvalue $\\lambda+3$.",
  tags: ["Diagonalization"]
},

{
  statement: "If $\\vec x(t+1) = A \\vec x(t)$, then $\\vec x(t) = tA \\vec x(0)$.",
  answer: false,
  explanation: "The recurrence applies the matrix repeatedly. Starting from $\\vec x(0)$, we obtain $\\vec x(t)=A^t \\vec x(0)$, not $tA\\vec x(0)$.",
  tags: ["Discrete Dynamical Systems"]
},
// Quiz 7

{
  statement: "If $A$ is a diagonalizable $n \\times n$ matrix, then $A + 3 I_n$ is diagonalizable as well.",
  answer: true,
  explanation: "If $A = S D S^{-1}$ with $D$ diagonal, then $A + 3I_n = S(D+3I_n)S^{-1}$, and $D+3I_n$ is diagonal. Equivalently, an eigenbasis for $A$ is also an eigenbasis for $A+3I_n$.",
  tags: ["Diagonalization"]
},

{
  statement: "If $\\begin{bmatrix}1\\\\4\\end{bmatrix}$ and $\\begin{bmatrix}2\\\\3\\end{bmatrix}$ are eigenvectors of $A$, then $A$ is diagonalizable over $\\mathbb{R}$.",
  answer: true,
  explanation: "These two vectors are linearly independent in $\\mathbb{R}^2$, so they form an eigenbasis for $A$. Therefore $A$ is diagonalizable over $\\mathbb{R}$.",
  tags: ["Diagonalization"]
},

{
  statement: "Every invertible matrix is diagonalizable.",
  answer: false,
  explanation: "For example, $\\begin{bmatrix}1 & 1\\\\ 0 & 1\\end{bmatrix}$ is invertible but has only one eigenvector, so it is not diagonalizable.",
  tags: ["Diagonalization"]
},

{
  statement: "Every diagonalizable matrix is invertible.",
  answer: false,
  explanation: "The zero matrix is diagonalizable (it is already diagonal) but not invertible.",
  tags: ["Diagonalization"]
},

{
  statement: "If $A$ is diagonalizable over $\\mathbb{R}$, then $A^{100}$ is also diagonalizable over $\\mathbb{R}$.",
  answer: true,
  explanation: "If $A = S D S^{-1}$, then $A^{100} = S D^{100} S^{-1}$. Since $D^{100}$ is diagonal, $A^{100}$ is diagonalizable.",
  tags: ["Diagonalization"]
},

{
  statement: "If $A^{100}$ is diagonalizable over $\\mathbb{R}$, then $A$ is also diagonalizable over $\\mathbb{R}$.",
  answer: false,
  explanation: "A rotation matrix by $2\\pi/100$ in $\\mathbb{R}^2$ is not diagonalizable over $\\mathbb{R}$, but its 100th power is the identity, which is diagonalizable.",
  tags: ["Diagonalization"]
},

{
  statement: "If $A$ and $B$ are diagonalizable $n \\times n$ matrices, then $A + B$ is also diagonalizable.",
  answer: false,
  explanation: "For example, $A = \\begin{bmatrix}0 & 1\\\\ 0 & 1\\end{bmatrix}$ and $B = \\begin{bmatrix}1 & 0\\\\ 0 & 0\\end{bmatrix}$ are diagonalizable, but their sum $\\begin{bmatrix}1 & 1\\\\ 0 & 1\\end{bmatrix}$ is not.",
  tags: ["Diagonalization"]
},

{
  statement: "If $A$ and $B$ share an eigenbasis, then $AB$ is diagonalizable.",
  answer: true,
  explanation: "If $A = S D_1 S^{-1}$ and $B = S D_2 S^{-1}$ for the same invertible matrix $S$, then $AB = S(D_1D_2)S^{-1}$. Since $D_1D_2$ is diagonal, $AB$ is diagonalizable.",
  tags: ["Diagonalization"]
},

// Quiz 8

{
  statement: "If $2 + 3i$ is an eigenvalue of a real $2 \\times 2$ matrix $A$, then $A$ is diagonalizable.",
  answer: true,
  explanation: "For a real $2 \\times 2$ matrix, non-real eigenvalues occur in conjugate pairs. Thus $2-3i$ is also an eigenvalue. Since the eigenvalues are distinct, $A$ is diagonalizable over $\\mathbb{C}$.",
  tags: ["Diagonalization"]
},

{
  statement: "If $2 + 3i$ is an eigenvalue of a $3 \\times 3$ matrix $A$, then $A$ is diagonalizable.",
  answer: true,
  explanation: "Non-real eigenvalues occur in conjugate pairs, so $2-3i$ is also an eigenvalue. The third eigenvalue must be real. Thus $A$ has three distinct eigenvalues and is diagonalizable over $\\mathbb{C}$.",
  tags: ["Diagonalization"]
},

{
  statement: "If $A$ is invertible, then $(A^T)^{-1} = (A^{-1})^T$.",
  answer: true,
  explanation: "We check that $A^T (A^{-1})^T = (A^{-1}A)^T = I^T = I$ and $(A^{-1})^T A^T = (AA^{-1})^T = I^T = I$. Therefore $(A^{-1})^T$ is the inverse of $A^T$.",
  tags: ["Matrix Inverses"]
},

{
  statement: "If $A$ is diagonalizable, then $A^T$ is diagonalizable.",
  answer: true,
  explanation: "If $A = S D S^{-1}$ with $D$ diagonal, then taking transposes gives $A^T = (S^{-1})^T D S^T$. Since $D^T = D$, this expresses $A^T$ as a similarity transformation of a diagonal matrix, so $A^T$ is diagonalizable.",
  tags: ["Diagonalization"]
},

{
  statement: "If $A$ is a diagonalizable matrix and $\\lambda$ is an eigenvalue of $A$, then the algebraic multiplicity of $\\lambda$ equals its geometric multiplicity.",
  answer: true,
  explanation: "For any matrix, geometric multiplicity is at most algebraic multiplicity. If $A$ is diagonalizable, the geometric multiplicities sum to $n$, forcing each eigenvalue’s geometric multiplicity to equal its algebraic multiplicity.",
  tags: ["Diagonalization"]
},

{
  statement: "If $L$ is the line $\\operatorname{span}\\begin{bmatrix}1\\\\2\\\\3\\end{bmatrix}$, then the matrix of $\\operatorname{proj}_L$ must be symmetric.",
  answer: true,
  explanation: "Orthogonal projection onto a subspace has an orthonormal eigenbasis (one eigenvalue 1 direction and the rest eigenvalue 0). Therefore it is orthogonally diagonalizable. By the Spectral Theorem, it must be symmetric.",
  tags: ["Symmetric Matrices and the Spectral Theorem"]
},

// Quiz 9 has no True/False

// Quiz 10

// Quiz 11

// Added additional
{
  statement: "If $A$ and $B$ are invertible $n \\times n$ matrices, then $A+B$ is invertible.",
  answer: false,
  explanation: "A counterexample for $n=3$ is $A=I_3$ and $B=-I_3$, which makes $A+B$ the zero matrix, and thus not invertible.",
  tags: ["Matrix Inverses"]
},

{
  statement: "If $A$ is invertible and $A\\vec x = A\\vec y$, then $\\vec x = \\vec y$.",
  answer: true,
  explanation: "Multiply both sides by $A^{-1}$ to obtain $\\vec x = \\vec y$. Invertible matrices are injective.",
  tags: ["Matrix Inverses"]
},

{
  statement: "For any matrix $A$, if $A\\vec x = A\\vec y$, then $\\vec x = \\vec y$.",
  answer: false,
  explanation: "This is only true if $A$ is invertible. A counterexample is a $2\\times2$ matrix of zeros, $\\vec{x}=\\vec{e}_1$ and $\\vec{y}=\\vec{e}_2$. Then $A\\vec{x}=A\\vec{y}$ but $\\vec{x}\\neq\\vec{y}$.",
  tags: ["Matrix Inverses"]
},

{
  statement: "If $A$ is a matrix with linearly independent columns, then $A$ is invertible.",
  answer: false,
  explanation: "This is only true if $A$ is $n\\times n$. A counterexample is $A=\\begin{bmatrix}1 & 0 \\\\ 0 & 1 \\\\ 0 & 0 \\end{bmatrix}$.",
  tags: ["Matrix Inverses"]
},

];