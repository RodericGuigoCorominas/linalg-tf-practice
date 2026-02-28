
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
  statement: "If $\\text{rref}\\begin{bmatrix} A & | & \\vec{b} \\end{bmatrix} = \\begin{bmatrix} 1 & 2 & 3 & 0 & \\mid & 4\\\\ 0 & 0 & 0 & 1 & \\mid & 0 \\end{bmatrix}$, then the linear system $A\\vec{x} = \\vec{b}$ is inconsistent.",
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
  statement: "If $\\text{rref}(A)$ has a column of zeros, then $A\\vec{x}=\\vec{b}$ must have infinite solutions.",
  answer: false,
  explanation: "The system could be inconsistent and therefore have no solutions. For example, $\\begin{bmatrix} 1 & 0 & \\mid & 1\\\\ 0 & 0 & \\mid & 1 \\end{bmatrix}$ is inconsistent.",
  tags: ["Linear Systems"]
},

{
  statement: "If $\\text{rref}(A)$ has a row of zeros, then $A\\vec{x}=\\vec{b}$ must have infinite solutions.",
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
// ---------------------------
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
// Midterm 1 Practice 1
// ---------------------------

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

// {
//   statement: "If $\\vec{u}$ is a linear combination of $\\vec{v}$ and $\\vec{w}$, then $\\vec{w}$ must be a linear combination of $\\vec{u}$ and $\\vec{v}$.",
//   answer: false,
//   explanation: "For example, let $\\vec{u}=\\begin{bmatrix}1\\\\0\\end{bmatrix}$, $\\vec{v}=\\begin{bmatrix}1\\\\0\\end{bmatrix}$, and $\\vec{w}=\\begin{bmatrix}0\\\\1\\end{bmatrix}$. Then $\\vec{u}$ is a linear combination of $\\vec{v}$ and $\\vec{w}$, but $\\vec{w}$ is not a linear combination of $\\vec{u}$ and $\\vec{v}$.",
//   tags: ["Linear Combinations"]
// },

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
// ---------------------------

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
  tags: ["Image Kernel and Rank Nullity"]
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
  tags: ["Image Kernel and Rank Nullity"]
},

{
  statement: "If $A$ is a $3\\times 3$ matrix with $\\begin{bmatrix}1\\\\2\\\\3\\end{bmatrix}\\notin \\operatorname{im}(A)$, then $A$ cannot be invertible.",
  answer: true,
  explanation: "If $\\begin{bmatrix}1\\\\2\\\\3\\end{bmatrix}\\notin\\operatorname{im}(A)$, then $A\\vec{x}=\\begin{bmatrix}1\\\\2\\\\3\\end{bmatrix}$ is inconsistent, so $A$ cannot be invertible (invertible means $A\\vec{x}=\\vec{y}$ has a solution for every $\\vec{y}\\in\\mathbb{R}^3$).",
  tags: ["Image Kernel and Rank Nullity"]
},

{
  statement: "There is a matrix $A$ whose kernel is the single vector $\\begin{bmatrix}1\\\\1\\end{bmatrix}$.",
  answer: false,
  explanation: "The kernel of any matrix is a subspace and must contain $\\vec{0}$. The set $\\left\\{\\begin{bmatrix}1\\\\1\\end{bmatrix}\\right\\}$ is not a subspace of $\\mathbb{R}^2$.",
  tags: ["Image Kernel and Rank Nullity"]
},

{
  statement: "There are infinitely many ways to express $\\begin{bmatrix}1\\\\1\\end{bmatrix}$ as a linear combination of $\\begin{bmatrix}3\\\\7\\end{bmatrix}$, $\\begin{bmatrix}-1\\\\4\\end{bmatrix}$, and $\\begin{bmatrix}2\\\\6\\end{bmatrix}$.",
  answer: true,
  explanation: "Writing $c_1\\begin{bmatrix}3\\\\7\\end{bmatrix}+c_2\\begin{bmatrix}-1\\\\4\\end{bmatrix}+c_3\\begin{bmatrix}2\\\\6\\end{bmatrix}=\\begin{bmatrix}1\\\\1\\end{bmatrix}$ is equivalent to $\\begin{bmatrix}3&-1&2\\\\7&4&6\\end{bmatrix}\\begin{bmatrix}c_1\\\\c_2\\\\c_3\\end{bmatrix}=\\begin{bmatrix}1\\\\1\\end{bmatrix}$. This $2\\times 3$ system has rank 2 and hence a free variable, so it has infinitely many solutions.",
  tags: ["Linear Combinations"]
},

// Midterm 1 Practice 3
// ---------------------------

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
  tags: ["Image Kernel and Rank Nullity"]
},

{
  statement: "If $A$ is an $n\\times n$ matrix, the only vector in both $\\ker A$ and $\\operatorname{im} A$ is $\\vec{0}$.",
  answer: false,
  explanation: "It can happen that $\\ker A \\cap \\operatorname{im} A$ contains a nonzero vector (e.g., certain nilpotent matrices).",
  tags: ["Image Kernel and Rank Nullity"]
},

{
  statement: "There are $2\\times 2$ matrices $A$ and $B$ with rank 1 such that $AB$ has rank 0.",
  answer: true,
  explanation: "Let $A$ be projection onto the $x$-axis and $B$ be projection onto the $y$-axis in $\\mathbb{R}^2$. Then $\\operatorname{rank}(A)=\\operatorname{rank}(B)=1$ but $AB=0$, so $\\operatorname{rank}(AB)=0$.",
  tags: ["Image Kernel and Rank Nullity"]
},

{
  statement: "If $A$ is a $3\\times 3$ matrix such that $A\\vec{x}=\\begin{bmatrix}1\\\\2\\\\3\\end{bmatrix}$ has more than one solution, then $A$ cannot be invertible.",
  answer: true,
  explanation: "If $A$ were invertible, then $A\\vec{x}=\\vec{y}$ would have exactly one solution for every $\\vec{y}\\in\\mathbb{R}^3$. Having more than one solution for $\\vec{y}=\\begin{bmatrix}1\\\\2\\\\3\\end{bmatrix}$ contradicts invertibility.",
  tags: ["Linear Systems"]
},

{
  statement: "Let $A$ be a $5\\times 7$ matrix. If $A\\vec{x}=\\vec{0}$ has infinitely many solutions, then $A\\vec{x}=\\vec{b}$ has infinitely many solutions for every $\\vec{b}$ in $\\mathbb{R}^5$.",
  answer: false,
  explanation: "$A\\vec{x}=\\vec{b}$ could be inconsistent. For example, if $A$ is the zero matrix, then $A\\vec{x}=\\vec{0}$ has infinitely many solutions, but $A\\vec{x}=\\vec{b}$ is inconsistent for any nonzero $\\vec{b}$.",
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
  tags: ["Orthogonal Matrices"]
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
  tags: ["Image Kernel and Rank Nullity"]
},

{
  statement: "If $L$ is a line through the origin in $\\mathbb{R}^6$ and $\\vec{x}\\in\\mathbb{R}^6$, then $(\\operatorname{proj}_L\\vec{x})\\cdot(\\vec{x}-\\operatorname{proj}_L\\vec{x})=0$.",
  answer: true,
  explanation: "By the definition of orthogonal projection, $\\vec{x}-\\operatorname{proj}_L\\vec{x}$ is orthogonal to $L$, while $\\operatorname{proj}_L\\vec{x}$ lies in $L$. Hence they are orthogonal and their dot product is 0.",
  tags: ["Orthogonal Matrices"]
},

{
  statement: "If $A$ and $B$ are $15\\times 15$ matrices, then $\\operatorname{im}(AB)$ is contained in $\\operatorname{im}(B)$.",
  answer: false,
  explanation: "In general, $\\operatorname{im}(AB)\\subseteq \\operatorname{im}(A)$, not necessarily $\\operatorname{im}(B)$. For example, if $B$ is projection onto the $x$-axis in $\\mathbb{R}^2$ and $A$ is rotation by $90^\\circ$, then $\\operatorname{im}(B)$ is the $x$-axis but $\\operatorname{im}(AB)$ is the $y$-axis.",
  tags: ["Image Kernel and Rank Nullity"]
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
  tags: ["Image Kernel and Rank Nullity"]
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
  tags: ["Orthogonal Matrices"]
},

{
  statement: "If $\\vec{v}_1,\\vec{v}_2,\\vec{v}_3$ are linearly independent, then $\\vec{v}_1,\\vec{v}_2,\\vec{v}_1+\\vec{v}_3$ are also linearly independent.",
  answer: true,
  explanation: "If $c_1\\vec{v}_1+c_2\\vec{v}_2+c_3(\\vec{v}_1+\\vec{v}_3)=0$, then $(c_1+c_3)\\vec{v}_1+c_2\\vec{v}_2+c_3\\vec{v}_3=0$. By independence of $\\vec{v}_1,\\vec{v}_2,\\vec{v}_3$, we get $c_3=0$, $c_2=0$, and $c_1+c_3=0$, so $c_1=c_2=c_3=0$.",
  tags: ["Linear Combinations"]
},

// Midterm 1 Practice 4
// ---------------------------

{
  statement: "If $\\text{rref}(A)$ has a row of zeros, then $A\\vec{x}=\\vec{b}$ cannot have a unique solution.",
  answer: false,
  explanation: "A zero row in $\\text{rref}(A)$ does not prevent a unique solution if the system is consistent and there are no free variables. For example, the augmented matrix $\\begin{bmatrix}1&0&\\mid&1\\\\0&1&\\mid&2\\\\0&0&\\mid&0\\end{bmatrix}$ has a unique solution even though $\\text{rref}(A)$ has a zero row.",
  tags: ["Linear Systems"]
},

{
  statement: "If $A$ is the matrix of a reflection in $\\mathbb{R}^3$ over a plane $P$, then the columns of $A$ are linearly independent.",
  answer: true,
  explanation: "A reflection is an invertible linear transformation, so its matrix is invertible. The columns of an invertible matrix are linearly independent.",
  tags: ["Geometric Transformations"]
},

{
  statement: "If $A$ is q square matrix and $A\\vec{x}=\\vec{b}$ has infinitely many solutions, then $\\text{rref}(A)$ must have a row of zeros.",
  answer: true,
  explanation: "Infinitely many solutions implies at least one free variable, so $\\text{rank}(A)<n$ (number of columns). In rref this means there are fewer pivots than rows of $A$ can have, forcing at least one zero row in $\\text{rref}(A)$.",
  tags: ["Linear Systems"]
},

{
  statement: "If $A$ is an $n\\times n$ matrix with linearly independent columns, then $A$ is invertible.",
  answer: true,
  explanation: "Linearly independent columns mean $\\operatorname{rank}(A)=n$, so $A$ has a pivot in every column and is invertible.",
  tags: ["Determinants"]
},

{
  statement: "If $A\\vec{x}=\\vec{b}$ is consistent and $\\text{rref}(A)=\\begin{bmatrix}1&4&0\\\\0&0&1\\end{bmatrix}$, then the set of solutions to $A\\vec{x}=\\vec{b}$ is a line.",
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
  tags: ["Orthogonal Matrices"]
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
  tags: ["Image Kernel and Rank Nullity"]
},

{
  statement: "If $A$ and $B$ are $n\\times n$ matrices and $A$ is invertible, then $\\ker(AB)=\\ker(B)$.",
  answer: true,
  explanation: "$AB\\vec{x}=0 \\iff A(B\\vec{x})=0$. Since $A$ is invertible, $A\\vec{y}=0\\iff \\vec{y}=0$, so this is equivalent to $B\\vec{x}=0$.",
  tags: ["Image Kernel and Rank Nullity"]
},

{
  statement: "If $A$ and $B$ are $n\\times n$ matrices and $A$ is invertible, then $\\operatorname{im}(AB)=\\operatorname{im}(B)$.",
  answer: true,
  explanation: "Because $A$ is invertible, $A$ maps $\\operatorname{im}(B)$ bijectively onto $\\operatorname{im}(AB)=A(\\operatorname{im}(B))$. In general this need not equal $\\operatorname{im}(B)$ unless $A$ preserves that subspace.",
  tags: ["Image Kernel and Rank Nullity"]
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
  explanation: "This is only true if $A$ is invertible. A counterexample is a $2\\times2$ matrix of zeros, $\\vec{x}=\\vec{e}_1$ and $\\vec{y}=\\vec{e}_2$. Then $A\\vec{x}=A\\vec{y}$ bu $\\vec{x}\\neq\\vec{y}.",
  tags: ["Matrix Inverses"]
},

{
  statement: "If $A$ is a matrix with linearly independent columns, then $A$ is invertible.",
  answer: false,
  explanation: "This is only true if $A$ is $n\\times n$. A counterexample is $A=\\begin{bmatrix}1 & 0 \\\\ 0 & 1 \\\\ 0 & 0 \\end{bmatrix}$.",
  tags: ["Matrix Inverses"]
},

];