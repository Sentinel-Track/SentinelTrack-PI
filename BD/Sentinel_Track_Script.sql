create database SentinelTrack;

use SentinelTrack;

create table tbEndereco
	(
    idEndereco int primary key auto_increment,
    cep char(8),
    logradouro varchar(100),
    numero varchar(10),
    bairro varchar(100),
    cidade varchar(100),
    complemento varchar(60)    
    )
;

create table tbEmpresa
	(
    idEmpresa int primary key auto_increment,
    nomeLocal varchar(100),
    cnpj char(14) unique,
    email varchar(100),
    telefone_c char(11),
    telefone_f char(10),
    fkEndereco int,
    foreign key(fkEndereco) references tbEndereco(idEndereco)
    )
;

create table tbUsuario
	(
    idUsuario int primary key auto_increment,
    nome varchar(100),
    cargo varchar(100),
    login varchar(100) unique,
    senha varchar(100),
    fkEmpresa int,
    foreign key(fkEmpresa) references tbEmpresa(idEmpresa)
    )
;

create table tbSensor
	(
    fkEmpresa int,
    foreign key(fkEmpresa) references tbEmpresa(idEmpresa),
    idSensor int,
    primary key(fkEmpresa, idSensor),
    localSensor varchar(100)
    )
;

desc tbSensor;

create table tbMovimentacao
	(
    fkEmpresa int,
    fkSensor int,
    foreign key(fkEmpresa, fkSensor) references tbSensor(fkEmpresa, idSensor),
    idMovimentacao int,
    primary key(fkEmpresa, fkSensor, idMovimentacao),
    dataHora datetime
    )
;

insert into tbEndereco
	(cep, logradouro, numero, bairro, cidade, complemento)
values
	('09531190', 'Alameda Terracota', '545', 'Espaço Cerâmica', 'São Caetano do Sul', ''),
	('01310928', 'Avenida Paulista', '2064', 'Cerqueira César', 'São Paulo', ''),
	('09080510', 'Av. Industrial', '600', 'Centro', 'Santo André', ''),
	('04707000', 'Avenida Roque Petroni Júnior', '1089', 'Santo Amaro', 'São Paulo', ''),
	('02307120', 'R. Paulo de Faria', '222', 'Tucuruvi', 'São Paulo', ''),
	('04795000', 'Av. das Nações Unidas', '22540', 'Jurubatuba', 'São Paulo', ''),
	('05777001', 'Estr. do Campo Limpo', '459', 'Vila Prel', 'São Paulo', '')
;

insert into tbEmpresa
	(nomeLocal, cnpj, email, telefone_c, telefone_f, fkEndereco)
values
	('Park Shopping São Caetano', '74837432000198', 'shoppingscs@gmail.com', '11961935320', '1148972322', 1),
	('Shopping Center 3', '35953749000138', 'shoppingc3@gmail.com', '11969851320', '1148985322', 2),
	('Grand Plaza Shopping', '24790071000101', 'plazasantoandre@gmail.com', '11915853820', '1148971412', 3),
	('Shopping Center Morumbi', '00360924000107', 'morunbicenter@gmail.com', '1191913620', '1148111322', 4),
	('Shopping Metrô Tucuruvi', '87585220000102', 'tucuruvishopping@gmail.com', '11968465320', '1148412522', 5),
	('Shopping Sp Market', '12527511000145', 'spmarket@gmail.com', '11961935255', '1148545422', 6),
	('Shopping Campo Limpo', '93157149000160', 'campolimpo@gmail.com', '11961935870', '1148741421', 7)
;

insert into tbUsuario
	(nome, cargo, login, senha, fkEmpresa)
values
	('Ana Julia', 'Suporte TI', 'anajulia', 'dasd', 1),
	('Pedro Augusto', 'Gerente de infra', 'pedoraugusto', '15615', 1),
    
	('Adalberto Marthins', 'RH', 'adalbertomarthins', 'senha', 2),
	('Enando Golçaves', 'Suporte TI', 'enandogoncalves', '8461', 2),
    
	('Gustavo Almeida', 'Gerente de infra', 'gustavoalmeida', '3152', 3),
	('Bruno Piaza', 'Suporte TI', 'brunopiaza', '565646', 3),
	('Renato Jesus', 'Suporte TI', 'renatojesus', '56516', 3),
    
	('Michel Thomas', 'Gerente de infra', 'michelthomas', '32315', 4),
	('Jair Alves', 'RH', 'jairalves', 'hdh516', 4),
    
	('Luis Vendovello', 'RH', 'luisvendovello', '1r166', 5),
	('Gabriel Salviati', 'Gerente de infra', 'gabrielsalviati', 'r161', 5),
    
	('Rafael Calegari', 'RH', 'rafaelcalegari', 'r5165', 6)
;

insert into tbSensor
	(fkEmpresa, idSensor, localSensor)
values
	(1, 1, 'Corredor 1'),
	(1, 2, 'Corredor 2'),
	(1, 3, 'Corredor 3'),
    
	(2, 1, 'Porta 1'),
	(2, 2, 'Porta 2'),
	(2, 3, 'Porta 3'),
    
	(3, 1, 'Corredor 1'),
	(3, 2, 'Corredor 2'),
	(3, 3, 'Corredor 3'),
    
	(4, 1, 'Porta 1'),
	(4, 2, 'Porta 2'),
	(4, 3, 'Porta 3'),
    
	(5, 1, 'Porta 1'),
	(5, 2, 'Porta 2'),
	(5, 3, 'Porta 3'),
    
	(6, 1, 'Corredor 1'),
	(6, 2, 'Corredor 2'),
	(6, 3, 'Corredor 3')
;

insert into tbMovimentacao
	(fkEmpresa, fkSensor, idMovimentacao, dataHora)
values
	(1, 1, 1, '2022-05-01 19:31:28'),
	(1, 1, 2, '2022-05-01 19:32:59'),
	(1, 1, 3, '2022-05-01 19:34:00'),
	(1, 1, 4, '2022-05-01 19:38:29'),
	(1, 1, 5, '2022-05-28 11:58:32'),
    
	(2, 2, 1, '2022-03-28 11:58:52'),
	(2, 2, 2, '2022-03-29 11:59:11'),
	(2, 2, 3, '2022-03-29 11:59:32'),
	(2, 2, 4, '2022-03-29 12:00:39'),
	(2, 2, 5, '2022-03-29 12:01:02'),
    
	(3, 3, 1, '2022-04-02 15:18:02'),
	(3, 3, 2, '2022-04-02 15:18:12'),
	(3, 3, 3, '2022-04-02 15:18:15'),
	(3, 3, 4, '2022-04-02 15:18:18'),
	(3, 3, 5, '2022-04-02 15:18:19'),
    
	(4, 1, 1, '2022-06-09 09:11:15'),
	(4, 1, 2, '2022-06-09 09:11:23'),
	(4, 1, 3, '2022-06-09 09:11:58'),
	(4, 1, 4, '2022-06-09 09:12:36'),
	(4, 1, 5, '2022-06-09 09:12:39'),
    
	(5, 2, 1, '2022-02-18 18:21:15'),
	(5, 2, 2, '2022-02-18 18:21:23'),
	(5, 2, 3, '2022-02-18 18:31:58'),
	(5, 2, 4, '2022-02-18 18:32:36'),
	(5, 2, 5, '2022-02-18 18:32:39'),
    
	(6, 3, 1, '2022-02-01 10:51:15'),
	(6, 3, 2, '2022-02-01 10:51:23'),
	(6, 3, 3, '2022-02-01 10:51:58'),
	(6, 3, 4, '2022-02-01 10:52:36'),
	(6, 3, 5, '2022-02-01 10:52:39')
;

select * from tbEndereco;
select * from tbEmpresa;
select * from tbUsuario;
select * from tbSensor;
select * from tbMovimentacao;