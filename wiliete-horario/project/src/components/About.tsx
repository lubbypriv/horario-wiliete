import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto text-white text-left pl-4">
      <h1 className="text-5xl font-bold mb-8 text-white">
        Sistema de Horários
      </h1>
      <div className="space-y-6 text-lg">
        <p>
          <mark className="px-2 bg-green-800/20 text-white backdrop-blur-sm">
            O Site de Horários Escolares é uma plataforma digital desenvolvida para facilitar o acesso 
            aos horários das aulas de todos os cursos, turmas e turnos do Colégio Wiliete.
          </mark>
        </p>
        <p>
          <mark className="px-2 bg-green-800/20 text-white backdrop-blur-sm">
            Nosso objetivo é centralizar as informações de forma organizada e acessível, 
            permitindo que alunos, professores e responsáveis consultem os horários de 
            maneira rápida e intuitiva.
          </mark>
        </p>
        <p>
          <mark className="px-2 bg-green-800/20 text-white backdrop-blur-sm">
            Com um design moderno e alinhado à identidade visual da escola, oferecemos uma 
            experiência única que combina funcionalidade e estética, utilizando nossa tradicional 
            paleta de cores em verde e branco.
          </mark>
        </p>
      </div>
    </div>
  );
};

export default About;