var database = require("../database/config");

function buscarUltimasMedidasHora(idEmpresa) {
  /*instrucaoSql = `select 
                        temperatura, 
                        umidade, 
                        momento,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                    from medida
                    where fk_aquario = ${idAquario}
                    order by id desc limit ${limite_linhas}`; 
                    */
  instrucaoSql = `SELECT COUNT(m.idMovimentacao) as 'mov', DATEPART(HOUR, m.dataHora) as 'hora' from tbMovimentacao m
                    JOIN tbSensor s ON s.idSensor = m.fkSensor
                        JOIN tbEmpresa e ON e.idEmpresa = s.fkEmpresa
                            WHERE e.idEmpresa = ${idEmpresa} AND DATEPART(DAY, dataHora) = DATEPART(DAY, DATEADD(DAY, 0, GETDATE()))
                        GROUP BY DATEPART(HOUR, dataHora) ORDER BY DATEPART(HOUR, dataHora) DESC;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function semanasMes(idEmpresa) {

  instrucaoSql = `SELECT COUNT(m.idMovimentacao) as 'mov', DATEPART(WEEK, m.dataHora) as 'semana' from tbMovimentacao m
JOIN tbSensor s ON s.idSensor = m.fkSensor
    JOIN tbEmpresa e ON e.idEmpresa = s.fkEmpresa
        WHERE e.idEmpresa = ${idEmpresa} AND DATEPART(MONTH, m.dataHora) = DATEPART(MONTH,(DATEADD(MONTH, -1, GETDATE())))
         GROUP BY DATEPART(WEEK, dataHora)
         ORDER BY DATEPART(WEEK, dataHora)`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function mesAno(idEmpresa) {
  instrucaoSql = `Set Language 'Portuguese';
    SELECT COUNT(m.idMovimentacao) as 'mov', DATEPART(MONTH, m.dataHora), DATENAME(MONTH, m.dataHora) AS 'MES' from tbMovimentacao m
    JOIN tbSensor s ON s.idSensor = m.fkSensor
        JOIN tbEmpresa e ON e.idEmpresa = s.fkEmpresa
            WHERE e.idEmpresa = ${idEmpresa} 	AND DATEPART(YEAR, m.dataHora) = DATEPART(YEAR, GETDATE())
				GROUP BY DATENAME(MONTH, m.dataHora), DATEPART(MONTH, m.dataHora)
					ORDER BY DATEPART(MONTH, m.dataHora), DATENAME(MONTH, m.dataHora)

`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}
function buscarUltimasMedidasAnos(idEmpresa) {
  instrucaoSql = `SELECT COUNT(m.idMovimentacao) as 'mov', DATEPART(YEAR, m.dataHora) as 'ANO' from tbMovimentacao m
    JOIN tbSensor s ON s.idSensor = m.fkSensor
        JOIN tbEmpresa e ON e.idEmpresa = s.fkEmpresa
            WHERE e.idEmpresa = ${idEmpresa} 
             GROUP BY DATEPART(YEAR, dataHora) ORDER BY DATEPART(YEAR, dataHora);`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}
function buscarUltimasMedidasDia(idEmpresa) {
  /*instrucaoSql = `select 
                        temperatura, 
                        umidade, 
                        momento,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                    from medida
                    where fk_aquario = ${idAquario}
                    order by id desc limit ${limite_linhas}`; 
                    */
  instrucaoSql = ` Set Language 'Portuguese';
    SELECT COUNT(m.idMovimentacao) as 'mov',DATEPART(dy, m.dataHora), DATENAME(WEEKDAY, m.dataHora) as 'DIA' from tbMovimentacao m
    JOIN tbSensor s ON s.idSensor = m.fkSensor
        JOIN tbEmpresa e ON e.idEmpresa = s.fkEmpresa
            WHERE e.idEmpresa = ${idEmpresa} AND DATEADD(day, 0, m.dataHora) > DATEADD(day, -7, GETDATE()) AND DATEADD(day, 0, m.dataHora) < DATEADD(day, -1, GETDATE())
             GROUP BY DATENAME(WEEKDAY, m.dataHora), DATEPART(dy, m.dataHora)
			 	ORDER BY DATEPART(dy, m.dataHora) , DATENAME(WEEKDAY, m.dataHora)


`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarKpiMes(idEmpresa) {
  instrucaoSql = `SELECT COUNT(m.idMovimentacao) as 'mov' from tbMovimentacao m
    JOIN tbSensor s ON s.idSensor = m.fkSensor
        JOIN tbEmpresa e ON e.idEmpresa = s.fkEmpresa
            WHERE e.idEmpresa = ${idEmpresa} AND MONTH(dataHora) = MONTH(DATEADD(MONTH,-1,GETDATE()))
`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}
/*
    SELECT COUNT(m.idMovimentacao) as 'mov' from tbMovimentacao m
                    JOIN tbSensor s ON s.idSensor = m.fkSensor
                        JOIN tbEmpresa e ON e.idEmpresa = s.fkEmpresa
                            WHERE e.idEmpresa = 11 AND DATEPART(DAY, datahora) BETWEEN  DATEPART(DAY, DATEADD(DAY, -7, GETDATE())) AND DATEPART(DAY, DATEADD(DAY, 0, GETDATE()))
                       

*/

function buscarKpiSem(idEmpresa) {
  instrucaoSql = `SELECT COUNT(m.idMovimentacao) as 'mov' from tbMovimentacao m
    JOIN tbSensor s ON s.idSensor = m.fkSensor
        JOIN tbEmpresa e ON e.idEmpresa = s.fkEmpresa
            WHERE e.idEmpresa = ${idEmpresa}
			AND DATEADD(day, 0, m.dataHora) > DATEADD(day, -7, GETDATE())
				

`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {
  instrucaoSql = `select 
                        temperatura, 
                        umidade, DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_aquario 
                        from medida where fk_aquario = ${idAquario} 
                    order by id desc limit 1`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarKpiDia(idEmpresa) {
  instrucaoSql = ` SELECT COUNT(m.idMovimentacao) as 'mov' from tbMovimentacao m
    JOIN tbSensor s ON s.idSensor = m.fkSensor
        JOIN tbEmpresa e ON e.idEmpresa = s.fkEmpresa
            WHERE e.idEmpresa = ${idEmpresa} AND DAY(dataHora) = DAY(DATEADD(DAY,-1,GETDATE()))
                  `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarMedidasHora(idSensor) {
  instrucaoSql = `SELECT COUNT(idMovimentacao), HOUR(dataHora) from tbMovimentacao WHERE HOUR(dataHora) >= 00 AND HOUR(dataHora) <=24 AND fkSensor = 1 GROUP BY HOUR(dataHora);`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  buscarUltimasMedidasHora,
  buscarUltimasMedidasDia,
  buscarMedidasEmTempoReal,
  buscarKpiMes,
  buscarKpiSem,
  buscarKpiDia,
  buscarUltimasMedidasAnos,
  mesAno,
  semanasMes,
};
