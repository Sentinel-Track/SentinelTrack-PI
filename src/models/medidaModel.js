var database = require("../database/config");

function buscarUltimasMedidas(idAquario, limite_linhas) {
    /*instrucaoSql = `select 
                        temperatura, 
                        umidade, 
                        momento,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                    from medida
                    where fk_aquario = ${idAquario}
                    order by id desc limit ${limite_linhas}`;
                    
                    SELECT COUNT(m.idMovimentacao) as 'mov', DATEPART(HOUR, m.dataHora) as 'hora' from tbMovimentacao m
	JOIN tbSensor s ON s.idSensor = m.fkSensor
		JOIN tbEmpresa e ON e.idEmpresa = s.fkEmpresa
			WHERE e.idEmpresa = 12
		GROUP BY DATEPART(HOUR, dataHora)
                    */
                    instrucaoSql = `SELECT COUNT(idMovimentacao) as 'mov', DATEPART(HOUR, dataHora) as 'hora' from tbMovimentacao WHERE DATEPART(HOUR, dataHora) >= 00 AND DATEPART(HOUR, dataHora) <=24 GROUP BY DATEPART(HOUR, dataHora) ORDER BY hora DESC;`

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

function buscarMedidasHora(idSensor){

 
    instrucaoSql = `SELECT COUNT(idMovimentacao), HOUR(dataHora) from tbMovimentacao WHERE HOUR(dataHora) >= 00 AND HOUR(dataHora) <=24 AND fkSensor = 1 GROUP BY HOUR(dataHora);`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}