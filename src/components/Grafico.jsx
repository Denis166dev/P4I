import React from 'react';
import { Chart } from 'react-google-charts';

const Grafico = () => {
    // Dados do gráfico
    const data = [
      ['Categoria', 'Valor'],
      ['Entregue', 33],
      ['Pendente', 33],
      ['Verificada', 33]
    ];
  
    // Opções do gráfico
    const options = {
      legend: "none",
      pieSliceText: "label",
      title: 'Desempenho',
      is3D: false,
      colors: ['#FF7A00', '#BE0D00', '#3DBE00']
    };
  
    return (
      <Chart
        chartType="PieChart"
        width="200px"
        height="200px"
        data={data}
        options={options}
      />
    );
  };

  export default Grafico;