package com.example.unipoGym.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.example.unipoGym.entities.Aluno;
import com.example.unipoGym.repositories.AlunoRepository;

@Configuration
@Profile("mysql")
public class TestConfig implements CommandLineRunner{
	
	@Autowired
	private AlunoRepository alunoRepository;
		
	@Override
	public void run(String... args) throws Exception {
	
		Aluno a1 = new Aluno(0L, "Caio", "1235");
		
		
		alunoRepository.save(a1);
		
	}
	
}
