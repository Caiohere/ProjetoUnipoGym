package com.example.unipoGym.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.unipoGym.entities.Aluno;

public interface AlunoRepository extends JpaRepository<Aluno, Long> {
	
}

