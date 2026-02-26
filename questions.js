
window.QUESTION_BANK = [
  {
    statement: "If $A$ is an $n\\times n$ matrix with $\\det(A) \\ne 0$, then $A$ is invertible.",
    answer: true,
    explanation: "For square matrices, $\\det(A)\\neq 0 \\iff A$ is invertible.",
    tags: ["Determinants"]
  },
  {
    statement: "If two vectors are linearly independent, then they are orthogonal.",
    answer: false,
    explanation: "Independence does not imply orthogonality.",
    tags: ["Coordinates", "Orthogonal Matrices"]
  },
  {
    statement: "Every set of 3 vectors in $\\mathbb{R}^2$ is linearly dependent.",
    answer: true,
    explanation: "Because $\\dim(\\mathbb{R}^2)=2$, any set of more than 2 vectors is dependent.",
    tags: ["Coordinates", "Linear Systems"]
  },
  {
    statement: "If $A$ is $m\\times n$, then $\\mathrm{rank}(A)+\\mathrm{nullity}(A)=m$.",
    answer: false,
    explanation: "Rank-nullity gives $\\mathrm{rank}(A)+\\mathrm{nullity}(A)=n$ (number of columns).",
    tags: ["Image Kernel and Rank Nullity"]
  },
  {
    statement: "If A is an n×n matrix with det(A) ≠ 0, then A is invertible.",
    answer: true,
    explanation: "For square matrices, det(A) ≠ 0 ⇔ A is invertible.",
    tags: ["Determinants"]
  },
  {
    statement: "If two vectors are linearly independent, then they are orthogonal.",
    answer: false,
    explanation: "Independence does not imply orthogonality; it just means neither is a scalar multiple of the other.",
    tags: ["Coordinates", "Orthogonal Matrices"]
  },
  {
    statement: "Every set of 3 vectors in R^2 is linearly dependent.",
    answer: true,
    explanation: "R^2 has dimension 2, so any set with more than 2 vectors must be dependent.",
    tags: ["Coordinates", "Linear Systems"]
  },
  {
    statement: "If A and B are n×n matrices, then det(AB) = det(A)det(B).",
    answer: true,
    explanation: "Multiplicativity of determinant.",
    tags: ["Determinants"]
  },
  {
    statement: "If A is m×n, then rank(A) + nullity(A) = m.",
    answer: false,
    explanation: "Rank-nullity says rank(A) + nullity(A) = n (the number of columns).",
    tags: ["Image Kernel and Rank Nullity"]
  },
  {
    statement: "Eigenvectors corresponding to distinct eigenvalues of a real symmetric matrix are orthogonal.",
    answer: true,
    explanation: "A key property of real symmetric matrices.",
    tags: ["Orthogonal Matrices"]
  },
  {
    statement: "If a square matrix has two identical rows, then its determinant is 0.",
    answer: true,
    explanation: "Determinant is alternating; swapping identical rows changes sign but matrix is unchanged ⇒ det=0.",
    tags: ["Determinants"]
  },
  {
    statement: "If Ax = b has at least one solution, then it has exactly one solution.",
    answer: false,
    explanation: "It could have infinitely many solutions if the nullspace is nontrivial.",
    tags: ["Linear Systems"]
  },
  {
    statement: "A linear transformation is injective iff its kernel is {0}.",
    answer: true,
    explanation: "Standard characterization: injective ⇔ nullspace is trivial.",
    tags: ["Linear Transformations", "Image Kernel and Rank Nullity"]
  },
  {
    statement: "If v is in the column space of A, then v is in the null space of A.",
    answer: false,
    explanation: "Column space and null space are different subspaces (in general) living in different ambient spaces.",
    tags: ["Image Kernel and Rank Nullity"]
  },
];