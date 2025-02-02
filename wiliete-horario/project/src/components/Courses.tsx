import React, { useState } from 'react';

const timeSlots = [
  { time: '07h00 - 07h45', label: '1º Tempo' },
  { time: '07h50 - 08h35', label: '2º Tempo' },
  { time: '08h40 - 09h25', label: '3º Tempo' },
  { time: '09h30 - 10h15', label: '4º Tempo' },
  { time: '10h25 - 11h10', label: '5º Tempo' },
  { time: '11h15 - 12h00', label: '6º Tempo' },
];

const classSchedule = {
  name: 'Técnico de Gestão de Sistemas Informáticos',
  class: '12ªA',
  schedule: {
    'Segunda-Feira': ['REDES', 'REDES', 'REDES', 'REDES', 'OGE', 'OGE'],
    'Terça-Feira': ['FIS', 'FIS', 'OGE', 'OGE', 'EMPREE', 'EMPREE'],
    'Quarta-Feira': ['MAT', 'MAT', 'MAT', 'TLP', 'TLP', 'TLP'],
    'Quinta-Feira': ['REDES', 'REDES', 'MAT', 'MAT', 'PT', 'PT'],
    'Sexta-Feira': ['TLP', 'TLP', 'TLP', 'TIC', 'TIC', 'TIC'],
  },
  teachers: [
    { subject: 'FIS', name: 'EUNICE KUPESSALA', phone: '937696088' },
    { subject: 'MAT', name: 'MUANZA MITERANO', phone: '919022508' },
    { subject: 'OGE', name: 'EUNICE KUPESSALA', phone: '937696088' },
    { subject: 'TLP', name: 'MUANZA MITERANO', phone: '919022508' },
    { subject: 'REDES', name: 'JÚLIO FILIPE ALBINO', phone: '914263329' },
    { subject: 'TIC', name: 'MUANZA MITERANO', phone: '919022508' },
    { subject: 'PT', name: 'ALBINO MENDES', phone: '922591254' },
    { subject: 'EMPREE', name: 'EUNICE KUPESSALA', phone: '937696088' },
  ],
  coordinator: 'MUANZA MITERANO'
};

const Courses = () => {
  const [showTeachers, setShowTeachers] = useState(false);

  return (
    <div className="space-y-8">
      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-green-800">{classSchedule.name}</h2>
          <span className="text-xl font-bold text-green-700">{classSchedule.class}</span>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg">
            <thead>
              <tr>
                <th className="px-4 py-2 bg-green-50 text-green-800">Horário</th>
                {Object.keys(classSchedule.schedule).map((day) => (
                  <th key={day} className="px-4 py-2 bg-green-50 text-green-800">{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {timeSlots.map((slot, index) => (
                <tr key={slot.time} className="border-b border-green-100">
                  <td className="px-4 py-3 font-medium text-green-800">
                    <div>{slot.time}</div>
                    <div className="text-sm text-green-600">{slot.label}</div>
                  </td>
                  {Object.values(classSchedule.schedule).map((day, dayIndex) => (
                    <td key={dayIndex} className="px-4 py-3 text-center">
                      <span className="px-3 py-1 bg-green-50 text-green-700 rounded">
                        {day[index]}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6">
          <button
            onClick={() => setShowTeachers(!showTeachers)}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            {showTeachers ? 'Ocultar Professores' : 'Ver Professores'}
          </button>

          {showTeachers && (
            <div className="mt-4 grid gap-4">
              <h3 className="text-lg font-semibold text-green-800">Professores e Disciplinas</h3>
              <div className="grid gap-2">
                {classSchedule.teachers.map((teacher, index) => (
                  <div key={index} className="flex items-center justify-between bg-green-50 p-3 rounded-lg">
                    <div>
                      <span className="font-medium text-green-800">{teacher.subject}</span>
                      <span className="mx-2">-</span>
                      <span>{teacher.name}</span>
                    </div>
                    <span className="text-green-600">{teacher.phone}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <span className="font-medium text-green-800">Coordenador de Turma:</span>
                <span className="ml-2">{classSchedule.coordinator}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;