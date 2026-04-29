const express = require('express');
const router = express.Router();

const AlunoService = require('../services/AlunoService');
const alunoService = new AlunoService();

router.get('/', (req, res) => {
    const alunos = alunoService.listarAlunos();
    res.json(alunos);
});

module.exports = router;