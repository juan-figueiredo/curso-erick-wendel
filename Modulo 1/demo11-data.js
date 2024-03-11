const agora = new Date();

console.log(`
  Dia: ${agora.getDate()},
  Mês: ${agora.getMonth() + 1}, // Observação: os meses começam do zero, então adicionamos 1
  Ano: ${agora.getFullYear()},  
  Hora: ${agora.getHours()},     
  Minutos: ${agora.getMinutes()},
  Segundos: ${agora.getSeconds()},
`);
