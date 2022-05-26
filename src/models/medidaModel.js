var database = require("../database/config");

function buscarUltimasMedidas(idEmpresa) {
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
                        GROUP BY DATEPART(HOUR, dataHora) ORDER BY DATEPART(HOUR, dataHora) DESC;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarKpiMes(idEmpresa) {
    instrucaoSql = `SELECT COUNT(m.idMovimentacao) as 'mov' from tbMovimentacao m
    JOIN tbSensor s ON s.idSensor = m.fkSensor
        JOIN tbEmpresa e ON e.idEmpresa = s.fkEmpresa
            WHERE e.idEmpresa = ${idEmpresa} AND DATEPART(MONTH, datahora) = DATEPART(MONTH, DATEADD(MONTH, -1, GETDATE()))
       `

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
    instrucaoSql = ` SELECT COUNT(m.idMovimentacao) as 'mov' from tbMovimentacao m
    JOIN tbSensor s ON s.idSensor = m.fkSensor
        JOIN tbEmpresa e ON e.idEmpresa = s.fkEmpresa
            WHERE e.idEmpresa = ${idEmpresa} AND DATEPART(DAY, datahora) BETWEEN  DATEPART(DAY, DATEADD(DAY, -7, GETDATE())) AND DATEPART(DAY, DATEADD(DAY, 0, GETDATE()))
`

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
                                    WHERE e.idEmpresa = ${idEmpresa} AND DATEPART(DAY, datahora) BETWEEN  DATEPART(DAY, DATEADD(DAY, -1, GETDATE())) AND DATEPART(DAY, DATEADD(DAY, 0, GETDATE()))
                  `

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasHora(idSensor) {


    instrucaoSql = `SELECT COUNT(idMovimentacao), HOUR(dataHora) from tbMovimentacao WHERE HOUR(dataHora) >= 00 AND HOUR(dataHora) <=24 AND fkSensor = 1 GROUP BY HOUR(dataHora);`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarKpiMes,
    buscarKpiSem,
    buscarKpiDia
}