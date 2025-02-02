import React from 'react';

const Others = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-lg">
      <h2 className="text-3xl font-bold text-green-800 mb-6">Informações Adicionais</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-green-700 mb-3">Contato</h3>
          <p className="text-gray-700">
            Para mais informações, entre em contato com a secretaria da escola.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-green-700 mb-3">Horário de Funcionamento</h3>
          <p className="text-gray-700">
            Segunda a Sexta: 7h às 18h
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-green-700 mb-3">Localização</h3>
          <p className="text-gray-700">
            Endereço da escola aqui
          </p>
        </div>
      </div>
    </div>
  );
};

export default Others;