import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [alunos, setAlunos] = useState([]);
  const [novoAluno, setNovoAluno] = useState({ nome: "", curso: "", matricula: "" });
  const [editando, setEditando] = useState(null);

  const API_URL = "http://127.0.0.1:8000/api/alunos/";

  // 🔄 Buscar alunos do backend ao carregar a página
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setAlunos(data))
      .catch((err) => console.error("Erro ao buscar alunos:", err));
  }, []);

  const handleChange = (e) => {
    setNovoAluno({ ...novoAluno, [e.target.name]: e.target.value });
  };

  // ➕ Adicionar aluno (POST)
  const handleAdicionar = () => {
    if (!novoAluno.nome || !novoAluno.curso || !novoAluno.matricula) return;

    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novoAluno),
    })
      .then((res) => res.json())
      .then((alunoCriado) => {
        setAlunos([...alunos, alunoCriado]);
        setNovoAluno({ nome: "", curso: "", matricula: "" });
      })
      .catch((err) => console.error("Erro ao adicionar aluno:", err));
  };

  // ✏️ Editar aluno
  const handleEditar = (id) => {
    const aluno = alunos.find((a) => a.id === id);
    setNovoAluno(aluno);
    setEditando(id);
  };

  // 💾 Salvar edição (PUT)
  const handleSalvarEdicao = () => {
    fetch(`${API_URL}${editando}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novoAluno),
    })
      .then((res) => res.json())
      .then((alunoAtualizado) => {
        setAlunos(alunos.map((a) => (a.id === editando ? alunoAtualizado : a)));
        setNovoAluno({ nome: "", curso: "", matricula: "" });
        setEditando(null);
      })
      .catch((err) => console.error("Erro ao editar aluno:", err));
  };

  // ❌ Excluir aluno (DELETE)
  const handleExcluir = (id) => {
    fetch(`${API_URL}${id}/`, { method: "DELETE" })
      .then(() => setAlunos(alunos.filter((a) => a.id !== id)))
      .catch((err) => console.error("Erro ao excluir aluno:", err));
  };

  return (
    <div className="allelements">
      <div className="container">
        <h1>Cadastro de Alunos</h1>
        <div className="formulario">
          <input
            type="text"
            name="nome"
            placeholder="Nome do aluno"
            value={novoAluno.nome}
            onChange={handleChange}
          />
          <input
            type="text"
            name="curso"
            placeholder="Curso"
            value={novoAluno.curso}
            onChange={handleChange}
          />
          <input
            type="text"
            name="matricula"
            placeholder="Matrícula"
            value={novoAluno.matricula}
            onChange={handleChange}
          />
          {editando ? (
            <button className="btn-verde" onClick={handleSalvarEdicao}>
              Salvar Edição
            </button>
          ) : (
            <button className="btn-verde" onClick={handleAdicionar}>
              Incluir Novo Aluno
            </button>
          )}
        </div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Curso</th>
              <th>Matrícula</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {alunos.map((aluno) => (
              <tr key={aluno.id}>
                <td>{aluno.id}</td>
                <td>{aluno.nome}</td>
                <td>{aluno.curso}</td>
                <td>{aluno.matricula}</td>
                <td>
                  <button className="btn-azul" onClick={() => handleEditar(aluno.id)}>
                    Editar
                  </button>
                  <button className="btn-vermelho" onClick={() => handleExcluir(aluno.id)}>
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
